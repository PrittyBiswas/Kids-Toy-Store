import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Truck } from 'lucide-react';

const Header = () => {
  // State to manage the mobile menu's open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Pages', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header>
      {/* 1. Top Bar: Free Shipping and Auth Links */}
      <div className="bg-blue-600 text-white text-sm py-2 px-4 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-2">
          <Truck className="w-4 h-4" />
          <span>Free shipping with over $150</span>
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-200">
            Login
          </a>
          <a href="#" className="hover:text-gray-200">
            Register
          </a>
        </div>
      </div>
      {/* Wavy Purple Divider (Decorative) */}
      <div className="bg-purple-500 h-2 flex overflow-hidden">
        {/* Simple wavy effect using border-radius, more complex waves would use SVG */}
        <div className="w-full h-full bg-white opacity-20" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', maskImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, white 10px, white 20px)' }}></div>
      </div>
      
      {/* 2. Main Header Content: Logo, Nav, Search, Cart */}
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Using a simple 'R' icon for the logo placeholder, replace with your actual image/SVG */}
          <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center font-bold text-white shadow-lg">R</div>
          <span className="text-xl font-semibold text-gray-800">rainboow <span className="font-light">rattles</span></span>
        </div>

        {/* Desktop Navigation Links (Hidden on small screens) */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-blue-600 transition duration-150 font-medium">
              {item.name}
            </a>
          ))}
        </nav>
        
        {/* Search, Cart, and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          
          {/* Search Bar (Responsive: Full bar on desktop, only icon on mobile/tablet) */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
            <button className="absolute right-0 top-0 mt-0.5 mr-0.5 bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition duration-150">
                <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Shopping Cart Icon */}
          <button className="relative p-2 text-gray-600 hover:text-blue-600 transition duration-150">
            <ShoppingCart className="w-6 h-6" />
            {/* Cart count badge */}
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              1
            </span>
          </button>
          
          {/* Mobile Menu Button (Visible on small screens) */}
          <button
            className="p-2 text-gray-600 hover:text-blue-600 lg:hidden transition duration-150"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* 3. Mobile Navigation Menu (Hidden by default, slides in when isMenuOpen is true) */}
      <nav 
        className={`lg:hidden absolute w-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="p-4 border-t border-gray-100">
            {/* Mobile Search Bar */}
            <div className="relative mb-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            {/* Mobile Nav Links */}
            {navItems.map((item) => (
                <a key={item.name} href={item.href} className="block py-2 text-gray-700 hover:bg-gray-100 transition duration-150 font-medium border-b border-gray-100">
                    {item.name}
                </a>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;