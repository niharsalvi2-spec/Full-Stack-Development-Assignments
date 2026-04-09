import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center flex-col gap-4">
        <div className="w-12 h-12 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-500">Loading product...</p>
      </section>
    );
  }

  const { title, price, description, image, category, rating } = product;

  return (
    <section className="min-h-screen pt-28 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-400 flex items-center gap-2">
          <Link to="/" className="hover:text-violet-600 transition">Home</Link>
          <span>/</span>
          <span className="text-gray-500">{category}</span>
          <span>/</span>
          <span className="text-gray-700 font-medium truncate max-w-[200px]">{title}</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Panel */}
            <div className="lg:w-1/2 bg-gradient-to-br from-violet-50 to-indigo-50 flex items-center justify-center p-12 min-h-[400px]">
              <img
                className="max-h-[350px] max-w-full object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
                src={image}
                alt={title}
              />
            </div>

            {/* Details Panel */}
            <div className="lg:w-1/2 p-10 flex flex-col justify-center">
              <span className="inline-block bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4 w-fit">
                {category}
              </span>
              <h1 className="text-3xl font-bold text-gray-800 mb-4 leading-snug">{title}</h1>

              {/* Rating */}
              {rating && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-4 h-4 ${star <= Math.round(rating.rate) ? "text-yellow-400" : "text-gray-200"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{rating.rate} ({rating.count} reviews)</span>
                </div>
              )}

              <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>

              <div className="text-4xl font-extrabold text-violet-600 mb-8">
                ₹{price.toLocaleString("en-IN")}
              </div>

              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => addToCart(product, product.id)}
                  id="add-to-cart-btn"
                  className="flex-1 bg-violet-600 hover:bg-violet-700 active:scale-95 text-white py-3 px-6 rounded-full font-semibold transition-all duration-200 shadow-lg shadow-violet-200"
                >
                  Add to Cart
                </button>
                <Link
                  to="/"
                  className="flex-1 text-center border-2 border-violet-600 text-violet-600 hover:bg-violet-50 py-3 px-6 rounded-full font-semibold transition-all duration-200"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Features */}
              <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs text-gray-500">
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-lg mb-1">🚚</div>Free Delivery
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-lg mb-1">🔁</div>Easy Returns
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-lg mb-1">🔒</div>Secure Pay
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
