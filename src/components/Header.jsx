import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-slate-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <span className="text-slate-600 text-sm sm:text-base font-medium tracking-wider uppercase font-tech">
                Brand
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8 font-tech">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 text-sm lg:text-base font-medium tracking-wider uppercase hover:text-blue-500 transition-colors duration-200 px-2 py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Burger Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-500 hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="block h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Dropdown */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out pb-3 ${
              isMenuOpen
                ? "max-h-64 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-400 rounded-lg mt-2 font-tech">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm sm:text-base font-medium tracking-wider uppercase text-slate-700 hover:text-blue-500 hover:bg-slate-300 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
