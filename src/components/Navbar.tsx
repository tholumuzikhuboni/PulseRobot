
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Pulse Robot"
        >
          <img 
            src="/logo.svg" 
            alt="Pulse Robot Logo" 
            className="h-7 sm:h-8" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
          </a>
          <a href="#why-humanoid" className="nav-link">About</a>
          <a href="#specifications" className="nav-link">Specs</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#newsletter" className="nav-link">Newsletter</a>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - with full viewport height and fixed positioning */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col md:hidden transition-all duration-300 ease-in-out h-[100vh]",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        {/* Close button at the top right */}
        <div className="flex justify-between items-center px-6 pt-6 pb-4 border-b bg-white">
          <a 
            href="#" 
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <img 
              src="/logo.svg" 
              alt="Pulse Robot Logo" 
              className="h-7" 
            />
          </a>
          <button 
            className="p-2 rounded-full hover:bg-gray-100" 
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 bg-white flex-grow overflow-y-auto">
          <a 
            href="#" 
            className="text-lg font-medium py-4 border-b border-gray-100 flex items-center justify-between hover:text-pulse-500" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <span>Home</span>
            <span className="text-gray-400 text-sm">01</span>
          </a>
          <a 
            href="#why-humanoid" 
            className="text-lg font-medium py-4 border-b border-gray-100 flex items-center justify-between hover:text-pulse-500" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <span>About</span>
            <span className="text-gray-400 text-sm">02</span>
          </a>
          <a 
            href="#specifications" 
            className="text-lg font-medium py-4 border-b border-gray-100 flex items-center justify-between hover:text-pulse-500" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <span>Specs</span>
            <span className="text-gray-400 text-sm">03</span>
          </a>
          <a 
            href="#testimonials" 
            className="text-lg font-medium py-4 border-b border-gray-100 flex items-center justify-between hover:text-pulse-500" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <span>Testimonials</span>
            <span className="text-gray-400 text-sm">04</span>
          </a>
          <a 
            href="#newsletter" 
            className="text-lg font-medium py-4 border-b border-gray-100 flex items-center justify-between hover:text-pulse-500" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <span>Newsletter</span>
            <span className="text-gray-400 text-sm">05</span>
          </a>
        </nav>

        <div className="mt-auto p-6 border-t border-gray-100 bg-white">
          <p className="text-sm text-gray-500">
            © 2025 Pulse Robot. All rights reserved.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
