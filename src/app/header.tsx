'use client';

import React, { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header-shape bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 md:px-10 h-32 relative mb-6 z-30">
        <div className="container mx-auto flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
              <img
                src="/logo-white.svg"
                alt="HaloHati Logo"
                className="h-6 w-6"
              />
            </div>
            <h1 className="text-2xl font-bold">HaloHati</h1>
          </div>

          {/* Navigation Desktop - Hanya terlihat di md ke atas */}
          <nav className="hidden md:flex space-x-8 text-lg items-center">
            <Link
              href="/"
              className={`py-2 px-1 hover:text-blue-200 transition-colors ${
                pathname === '/' ? 'font-semibold border-b-2 border-white' : ''
              }`}
            >
              Beranda
            </Link>
            <Link
              href="/chat"
              className={`py-2 px-1 hover:text-blue-200 transition-colors ${
                pathname === '/chat' ? 'font-semibold border-b-2 border-white' : ''
              }`}
            >
              Chat
            </Link>
          </nav>

          {/* Mobile Menu Button - Hanya terlihat di md ke bawah */}
          <button
            className="md:hidden text-white focus:outline-none z-30"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Muncul di belakang panel menu */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-20 md:hidden
          ${isMobileMenuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={handleLinkClick}
      ></div>

      {/* Mobile Menu Panel - Muncul slide dari kanan */}
      <nav className={`
          fixed top-0 bottom-0 right-0 w-64 bg-white shadow-lg z-30 md:hidden
          flex flex-col py-6 px-4 space-y-4
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
         <button
            className="self-end text-gray-500 hover:text-gray-700 focus:outline-none mb-4"
            onClick={handleLinkClick}
            aria-label="Close mobile menu"
          >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </button>

          <Link
            href="/"
            className={`block text-gray-800 text-lg py-3 px-4 rounded-md hover:bg-gray-100 transition-colors ${
              pathname === '/' ? 'bg-blue-100 text-blue-700 font-semibold' : ''
            }`}
            onClick={handleLinkClick}
          >
            Beranda
          </Link>
          <Link
            href="/chat"
            className={`block text-gray-800 text-lg py-3 px-4 rounded-md hover:bg-gray-100 transition-colors ${
              pathname === '/chat' ? 'bg-blue-100 text-blue-700 font-semibold' : ''
            }`}
            onClick={handleLinkClick}
          >
            Chat
          </Link>
        </nav>
    </>
  );
};

export default Header;
