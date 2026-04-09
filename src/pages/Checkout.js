import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", address: "", payment: "card" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <section className="min-h-screen pt-28 pb-16 bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center max-w-md mx-auto">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Placed! 🎉</h2>
          <p className="text-gray-500 mb-8">
            Thank you, <strong>{form.name || "Customer"}</strong>! Your order has been confirmed and will be delivered soon.
          </p>
          <Link
            to="/"
            className="bg-violet-600 hover:bg-violet-700 text-white py-3 px-8 rounded-full font-semibold transition-all duration-200 shadow-lg shadow-violet-200"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-28 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 space-y-6">
            {/* Shipping */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Shipping Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Full Name</label>
                  <input
                    id="checkout-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Nihar Salvi"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Email</label>
                  <input
                    id="checkout-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="nihar@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Delivery Address</label>
                  <textarea
                    id="checkout-address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="123, MG Road, Mumbai – 400001"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Payment Method</h2>
              <div className="flex flex-col gap-3">
                {[
                  { value: "card", label: "💳 Credit / Debit Card" },
                  { value: "upi", label: "📱 UPI / PhonePe / GPay" },
                  { value: "cod", label: "🏠 Cash on Delivery" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer transition-all ${
                      form.payment === option.value
                        ? "border-violet-500 bg-violet-50"
                        : "border-gray-200 hover:border-violet-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={option.value}
                      checked={form.payment === option.value}
                      onChange={handleChange}
                      className="accent-violet-600"
                    />
                    <span className="text-sm font-medium text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              id="place-order-btn"
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 active:scale-95 text-white py-3.5 rounded-full font-bold text-lg transition-all duration-200 shadow-lg shadow-violet-200"
            >
              Place Order
            </button>
          </form>

          {/* Order Summary */}
          <div className="lg:w-80">
            <div className="bg-white rounded-2xl shadow p-6 sticky top-28">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Order Summary</h2>
              {cart.length === 0 ? (
                <p className="text-sm text-gray-400">Your cart is empty.</p>
              ) : (
                <div className="space-y-3 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-contain rounded-lg bg-gray-50 border"
                      />
                      <div className="flex-1 text-sm">
                        <p className="font-medium text-gray-700 truncate max-w-[140px]">{item.title}</p>
                        <p className="text-gray-400">x{item.amount}</p>
                      </div>
                      <p className="text-sm font-semibold text-violet-600">
                        ₹{(item.price * item.amount).toLocaleString("en-IN")}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <div className="border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>₹{parseFloat(total).toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Delivery</span>
                  <span className="text-green-500">FREE</span>
                </div>
                <div className="flex justify-between font-bold text-gray-800 text-base pt-2 border-t">
                  <span>Total</span>
                  <span className="text-violet-600">₹{parseFloat(total).toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
