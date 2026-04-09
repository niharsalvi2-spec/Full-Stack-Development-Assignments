import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating product images */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 opacity-80">
        <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:scale-105 transition-transform duration-500 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80" alt="headphones" className="w-20 h-20 object-contain" />
        </div>
        <div className="w-28 h-28 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 ml-8 hover:scale-105 transition-transform duration-700 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80" alt="watch" className="w-16 h-16 object-contain" />
        </div>
        <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:scale-105 transition-transform duration-500 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80" alt="shoes" className="w-20 h-20 object-contain" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white/80 text-sm font-medium">New Arrivals Available</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6">
            Shop the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300">
              Future.
            </span>
          </h1>

          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Discover premium electronics, fashion, and lifestyle products — curated for the modern you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              id="hero-shop-btn"
              className="bg-white text-violet-700 font-bold py-3.5 px-8 rounded-full hover:bg-violet-50 transition-all duration-200 shadow-xl text-center hover:scale-105 active:scale-95"
            >
              Shop Now
            </Link>
            <Link
              to="/checkout"
              className="border-2 border-white/50 text-white font-semibold py-3.5 px-8 rounded-full hover:bg-white/10 transition-all duration-200 text-center"
            >
              Go to Checkout
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex gap-8 flex-wrap">
            {["12K+ Products", "Free Delivery", "4.8★ Rating"].map((badge) => (
              <div key={badge} className="text-white/60 text-sm flex items-center gap-1.5">
                <svg className="w-4 h-4 text-violet-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
