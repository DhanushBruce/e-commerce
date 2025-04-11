import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm p-6 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h3 className="text-gray-300 font-semibold mb-2">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-300 font-semibold mb-2">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Account</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-300 font-semibold mb-2">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookies</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-300 font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">📘 Facebook</a>
            <a href="#" className="hover:text-white">🐦 Twitter</a>
            <a href="#" className="hover:text-white">📸 Instagram</a>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} Netflix Clone. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
