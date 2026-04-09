import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-4 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm">
      {/* Image */}
      <Link to={`/product/${id}`} className="flex-shrink-0">
        <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
          <img className="max-w-[48px] max-h-[48px] object-contain" src={image} alt={title} />
        </div>
      </Link>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-2">
          <Link
            to={`/product/${id}`}
            className="text-sm font-semibold text-gray-700 hover:text-violet-600 transition line-clamp-2 leading-snug"
          >
            {title}
          </Link>
          <button
            onClick={() => removeFromCart(id)}
            className="ml-2 w-6 h-6 flex-shrink-0 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
          >
            <IoMdClose className="text-sm" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          {/* Quantity Controls */}
          <div className="flex items-center gap-1 border border-gray-200 rounded-full overflow-hidden">
            <button
              onClick={() => decreaseAmount(id)}
              className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors"
            >
              <IoMdRemove className="text-xs" />
            </button>
            <span className="w-6 text-center text-sm font-bold text-gray-700">{amount}</span>
            <button
              onClick={() => increaseAmount(id)}
              className="w-7 h-7 flex items-center justify-center hover:bg-violet-50 text-violet-600 transition-colors"
            >
              <IoMdAdd className="text-xs" />
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-xs text-gray-400">₹{price} × {amount}</p>
            <p className="text-sm font-bold text-violet-600">
              ₹{parseFloat(price * amount).toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
