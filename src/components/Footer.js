import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-sm">N</span>
              </div>
              <span className="font-extrabold text-2xl text-white">
                Nova<span className="text-violet-300">Store</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              A fully frontend React e-commerce app built for Assignment 3 of Full Stack Development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "🏠 Home" },
                { to: "/checkout", label: "🛒 Checkout" },
              ].map(({ to, label }) => (
                <Link
                  key={label}
                  to={to}
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Developer Identity */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Developer</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">👨‍💻</span>
                <div>
                  <p className="text-white font-bold text-sm">Nihar Salvi</p>
                  <p className="text-violet-300 text-xs font-mono">Roll No: FY23N062</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-2 space-y-1.5">
                <a
                  href="https://github.com/niharsalvi2-spec"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white text-xs transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  @niharsalvi2-spec
                </a>
                <a
                  href="https://leetcode.com/u/Gamergenix/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white text-xs transition-colors"
                >
                  <span className="text-yellow-400 font-bold text-xs">LC</span>
                  Gamergenix
                </a>
                <a
                  href="https://www.hackerrank.com/profile/FY23N062"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white text-xs transition-colors"
                >
                  <span className="text-green-400 font-bold text-xs">HR</span>
                  FY23N062
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs text-center">
            © {new Date().getFullYear()} NovaStore — Assignment 3 | Full Stack Development
          </p>
          <p className="text-white/40 text-xs text-center">
            Built by <span className="text-violet-300 font-semibold">Nihar Salvi</span> (FY23N062)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
