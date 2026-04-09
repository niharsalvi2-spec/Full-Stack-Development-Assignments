import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity"
        />
      )}

      {/* Drawer */}
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[420px] transition-all duration-300 z-40 flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between py-5 px-6 border-b bg-gray-50">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-violet-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xs">N</span>
            </div>
            <span className="font-bold text-gray-800">
              Shopping Bag
              <span className="ml-2 text-sm font-normal text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">
                {itemAmount} {itemAmount === 1 ? "item" : "items"}
              </span>
            </span>
          </div>
          <button
            id="close-cart-btn"
            onClick={handleClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
          >
            <IoMdArrowForward className="text-xl text-gray-600" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-3">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="font-medium">Your cart is empty</p>
              <button onClick={handleClose} className="text-sm text-violet-600 hover:underline">
                Continue Shopping →
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t px-6 py-5 bg-gray-50 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Total</p>
                <p className="text-2xl font-bold text-violet-600">
                  ₹{parseFloat(total).toLocaleString("en-IN")}
                </p>
              </div>
              <button
                id="clear-cart-btn"
                onClick={clearCart}
                title="Clear cart"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 hover:bg-red-100 text-red-500 transition-colors"
              >
                <FiTrash2 className="text-lg" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleClose}
                className="border-2 border-violet-600 text-violet-600 font-semibold py-3 rounded-full hover:bg-violet-50 transition-colors text-sm"
              >
                Continue
              </button>
              <Link
                to="/checkout"
                onClick={handleClose}
                id="checkout-btn"
                className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 rounded-full text-center transition-colors text-sm shadow-lg shadow-violet-200"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
