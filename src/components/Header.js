import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    const onScroll = () => setIsActive(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${
        isActive
          ? "bg-white/95 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      } fixed w-full z-20 lg:px-8 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        {/* Brand */}
        <Link to="/" id="nav-logo" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-200 group-hover:scale-110 transition-transform">
            <span className="text-white font-black text-sm">N</span>
          </div>
          <span className="font-extrabold text-xl tracking-tight text-gray-800 hidden sm:block">
            Nova<span className="text-violet-600">Store</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-violet-600 transition">Home</Link>
          <Link to="/#products" className="hover:text-violet-600 transition">Products</Link>
          <Link to="/checkout" className="hover:text-violet-600 transition">Checkout</Link>
        </nav>

        {/* Cart Icon */}
        <div
          id="cart-icon"
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative group"
        >
          <div className="w-10 h-10 bg-violet-50 hover:bg-violet-100 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110">
            <BsBag className="text-lg text-violet-600" />
          </div>
          {itemAmount > 0 && (
            <div className="bg-violet-600 absolute -right-1 -top-1 text-[10px] w-5 h-5 text-white rounded-full flex justify-center items-center font-bold shadow-md">
              {itemAmount}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
