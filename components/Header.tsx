
import React, { useState, useEffect } from 'react';
import type { Page } from '../App';

import { HamburgerIcon } from './icons/HamburgerIcon';
import { CloseIcon } from './icons/CloseIcon';


interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About Us' },
    { page: 'services', label: 'Services' },
    { page: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-40 border-b border-amber-400/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <img src="/logo.png" alt="Eagle Eye Logo" className="h-10 md:h-12 w-auto object-contain" />
              <span className="ml-2 md:ml-3 text-xl md:text-2xl font-bold text-white tracking-wider">
                EAGLE <span className="text-amber-400">EYE</span>
              </span>
            </div>
            <nav className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => setCurrentPage(link.page)}
                  className={`text-lg font-medium transition-colors duration-300 ${currentPage === link.page
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="hidden md:block">
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-amber-400 text-slate-900 font-bold py-2 px-6 rounded-md hover:bg-amber-300 transition-colors duration-300 shadow-lg shadow-amber-400/20"
              >
                Get a Quote
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-300 hover:text-amber-400"
                aria-label="Open menu"
              >
                <HamburgerIcon className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-xs bg-slate-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-between items-center p-6 border-b border-amber-400/10">
          <div className="flex items-center">
            <img src="/logo.png" alt="Eagle Eye Logo" className="h-8 w-auto object-contain" />
            <span className="ml-2 text-lg font-bold text-white tracking-wider">
              EAGLE <span className="text-amber-400">EYE</span>
            </span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 hover:text-amber-400"
            aria-label="Close menu"
          >
            <CloseIcon className="h-8 w-8" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-8 mt-10">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNavClick(link.page)}
              className={`text-2xl font-medium transition-colors duration-300 ${currentPage === link.page
                ? 'text-amber-400'
                : 'text-gray-300 hover:text-amber-400'
                }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-md hover:bg-amber-300 transition-colors duration-300 mt-8 text-lg"
          >
            Get a Quote
          </button>
        </nav>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
