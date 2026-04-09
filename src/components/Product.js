import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price, rating } = product;

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
        <img
          className="max-h-40 max-w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
          src={image}
          alt={title}
        />

        {/* Category badge */}
        <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wide bg-white/80 backdrop-blur-sm text-violet-600 px-2 py-0.5 rounded-full border border-violet-100">
          {category}
        </span>

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <button
            id={`add-to-cart-${id}`}
            onClick={() => addToCart(product, id)}
            title="Add to cart"
            className="w-9 h-9 bg-violet-600 hover:bg-violet-700 text-white rounded-full flex items-center justify-center shadow-lg shadow-violet-200 active:scale-90 transition-transform"
          >
            <BsPlus className="text-xl" />
          </button>
          <Link
            to={`/product/${id}`}
            title="View details"
            className="w-9 h-9 bg-white hover:bg-violet-50 text-violet-600 rounded-full flex items-center justify-center shadow-md border border-gray-100 active:scale-90 transition-transform"
          >
            <BsEyeFill className="text-sm" />
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <Link to={`/product/${id}`} className="group/title">
          <h2 className="font-semibold text-sm text-gray-800 mb-1 line-clamp-2 leading-snug group-hover/title:text-violet-600 transition-colors">
            {title}
          </h2>
        </Link>

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-3 h-3 ${star <= Math.round(rating.rate) ? "text-yellow-400" : "text-gray-200"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[10px] text-gray-400">({rating.count})</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-violet-600">
            ₹{price.toLocaleString("en-IN")}
          </span>
          <button
            onClick={() => addToCart(product, id)}
            className="text-xs bg-violet-50 hover:bg-violet-600 hover:text-white text-violet-600 font-semibold px-3 py-1.5 rounded-full transition-all duration-200 border border-violet-200 hover:border-transparent"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
