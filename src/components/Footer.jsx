import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">ToyStore</h2>
          <p className="text-sm text-gray-400">Discover and support local toy sellers — playful toys for every child.</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <a href="/terms" className="hover:text-white/80">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-white/80">Privacy Policy</a>
          <a href="/about" className="hover:text-white/80">About</a>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex space-x-3">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Github"><FaGithub /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} ToyStore. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
