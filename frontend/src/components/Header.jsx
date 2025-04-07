// components/Header.jsx
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Dashboard", "Transactions", "Rules", "Contact"];

  return (
    <header className="bg-gray-800 text-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wide text-emerald-400">ViolationPay</h1>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none cursor-pointer transition-transform hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item === "Dashboard" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-300 text-lg font-medium hover:text-emerald-400 transition"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-6 pt-7 pb-5">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item === "Dashboard" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-300 text-lg font-medium hover:text-emerald-400 transition text-left"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
