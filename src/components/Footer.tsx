
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center">
          <img 
            src="/logo.svg" 
            alt="Pulse Robot Logo" 
            className="h-8" 
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
