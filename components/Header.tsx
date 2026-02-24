import React from 'react';
import type { Page } from '../App';


interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {

  const navLinks: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About Us' },
    { page: 'events', label: 'Events' },
    { page: 'contact', label: 'Contact' },
  ];

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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
