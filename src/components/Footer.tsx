
import React from "react";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center space-x-4">
          <img 
            src="/logo.svg" 
            alt="Pulse Robot Logo" 
            className="h-8" 
          />
          <div className="flex items-center text-gray-600">
            <Copyright size={16} className="mr-1" />
            <span className="font-medium">
              2025 Pulse Robot. Built by Tholumuzi Khuboni
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
