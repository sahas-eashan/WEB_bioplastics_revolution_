import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter, Leaf, Recycle, Globe } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Impact', href: '/impact' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-green-100' 
        : 'bg-white/90 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Simplified for mobile */}
          <a href="/" className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center transform hover:rotate-12 transition-all duration-300 shadow-lg">
                <Recycle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-lime-400 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600 bg-clip-text text-transparent">
                Bioplastic Revolution
              </h1>
              <p className="text-xs sm:text-sm text-green-600 -mt-1">Sustainable Future</p>
            </div>
            {/* Mobile-only simplified logo text */}
            <div className="block sm:hidden">
              <h1 className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                BioPlas
              </h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-green-600 transition-all duration-300 group py-2 font-medium"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Hidden on small mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/contact"
              className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-green-500/20 flex items-center space-x-2 text-sm sm:text-base"
            >
              <Leaf className="w-4 h-4" />
              <span className="hidden sm:inline">Join Green Movement</span>
              <span className="sm:hidden">Join Us</span>
            </a>
          </div>

          {/* Mobile Menu Toggle - Improved */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Completely redesigned */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="py-4 space-y-1 border-t border-green-100 bg-white/95 backdrop-blur-sm rounded-b-2xl shadow-lg mx-2 mb-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-6 py-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl mx-2 transition-all duration-300 transform hover:translate-x-1 font-medium group"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </a>
            ))}
            
            {/* Mobile CTA */}
            <div className="px-4 pt-4 pb-2">
              <a 
                href="/contact"
                className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center space-x-2 font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                onClick={() => setIsOpen(false)}
              >
                <Leaf className="w-5 h-5" />
                <span>Join Green Movement</span>
              </a>
            </div>

            {/* Mobile-only quick actions */}
            <div className="flex justify-center space-x-6 px-4 pt-4 pb-2 border-t border-green-100 mt-4">
              <button className="p-3 text-green-600 hover:bg-green-50 rounded-full transition-all duration-300">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-3 text-green-600 hover:bg-green-50 rounded-full transition-all duration-300">
                <Mail className="w-5 h-5" />
              </button>
              <button className="p-3 text-green-600 hover:bg-green-50 rounded-full transition-all duration-300">
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;