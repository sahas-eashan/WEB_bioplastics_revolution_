import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import { Phone, Mail, Facebook, Instagram, Twitter, Leaf, Recycle, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-green-900 via-green-950 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-lime-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
        {/* Floating leaves animation */}
        <div className="absolute top-10 right-1/4 text-green-400/20 animate-bounce delay-500">
          <Leaf className="w-8 h-8" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-emerald-400/20 animate-bounce delay-1000">
          <Leaf className="w-6 h-6 transform rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-6 pt-16 pb-8 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-lime-400 rounded-full animate-bounce"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
                  Bioplastic Revolution
                </h3>
                <p className="text-sm text-green-300">Sustainable Future</p>
              </div>
            </div>
            <p className="text-green-100 leading-relaxed">
              Transforming waste into sustainable bioplastic solutions. 
              Join us in creating a greener, cleaner planet for future generations.
            </p>
            <div className="flex items-center space-x-2 text-green-300">
              <Leaf className="w-4 h-4" />
              <span className="text-sm">100% Eco-Friendly Solutions</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-green-400 flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>Quick Links</span>
            </h4>
            <div className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Impact', path: '/impact' },
                { name: 'Events', path: '/events' },
                { name: 'Team', path: '/team' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center space-x-2 text-green-100 hover:text-green-300 transition-all duration-300 hover:translate-x-2 transform group"
                >
                  <Leaf className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Green Solutions - These can be internal pages or sections */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-green-400 flex items-center space-x-2">
              <Recycle className="w-5 h-5" />
              <span>Green Solutions</span>
            </h4>
            <div className="space-y-3">
              {[
                { name: 'Bioplastic Products', path: '/impact' }, // Link to Impact page
                { name: 'Waste Management', path: '/impact' },    // Link to Impact page
                { name: 'Sustainable Packaging', path: '/impact' }, // Link to Impact page
                { name: 'Research & Innovation', path: '/about' }  // Link to About page
              ].map((solution) => (
                <Link
                  key={solution.name}
                  to={solution.path}
                  className="flex items-center space-x-2 text-green-100 hover:text-green-300 transition-all duration-300 hover:translate-x-2 transform group"
                >
                  <Leaf className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>{solution.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-green-400">Get In Touch</h4>
            <div className="space-y-4">
              <a 
                href="tel:+94776413121"
                className="flex items-center space-x-3 text-green-100 hover:text-green-300 transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-colors duration-300">
                  <Phone className="w-4 h-4 group-hover:animate-pulse" />
                </div>
                <span>Call Us</span>
              </a>
              <a 
                href="mailto:sbioplasticrevolution@gmail.com"
                className="flex items-center space-x-3 text-green-100 hover:text-green-300 transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-colors duration-300">
                  <Mail className="w-4 h-4 group-hover:animate-pulse" />
                </div>
                <span>Email Us</span>
              </a>
              <div className="space-y-2 pl-11">
                <p className="text-green-100">University of Moratuwa</p>
                <p className="text-green-100">Katubedda, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-green-700/50 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-green-300 flex items-center space-x-2">
                <Leaf className="w-4 h-4" />
                <span>Follow our green journey:</span>
              </span>
              {[
                { icon: Facebook, href: 'https://www.facebook.com/share/16he5PTvqC/', label: 'Facebook' },
                { icon: Instagram, href: 'hhttps://www.instagram.com/bioplastic.revolution?igsh=MTB6OXc1Yjd4MGltNA==&utm_source=ig_contact_invite', label: 'Instagram' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: Globe, href: 'https://bit.ly/Bioplastic-Revolution', label: 'Website' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center text-green-300 hover:text-white hover:bg-green-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Join our green newsletter..."
                  className="px-4 py-2 pl-10 bg-green-800/50 border border-green-700 rounded-full text-green-100 placeholder-green-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                />
                <Mail className="w-4 h-4 text-green-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
              <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <Leaf className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700/50 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-green-300 flex items-center space-x-2">
              <Recycle className="w-4 h-4" />
              <span>© {currentYear} Bioplastic Revolution. All rights reserved.</span>
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-green-300 hover:text-green-100 transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-green-300 hover:text-green-100 transition-colors duration-300">Terms of Service</Link>
              <span className="text-green-300">Powered by Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;