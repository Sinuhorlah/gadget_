import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#133e87] text-white py-8 mt-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li><a href="/about" className="hover:text-gray-300 transition-all duration-200">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-300 transition-all duration-200">Contact Us</a></li>
              <li><a href="/careers" className="hover:text-gray-300 transition-all duration-200">Careers</a></li>
            </ul>
          </div>

          {/* Column 2: Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul>
              <li><a href="/faq" className="hover:text-gray-300 transition-all duration-200">FAQ</a></li>
              <li><a href="/returns" className="hover:text-gray-300 transition-all duration-200">Returns & Exchanges</a></li>
              <li><a href="/shipping" className="hover:text-gray-300 transition-all duration-200">Shipping Info</a></li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul>
              <li><a href="https://www.facebook.com" className="hover:text-gray-300 transition-all duration-200">Facebook</a></li>
              <li><a href="https://twitter.com" className="hover:text-gray-300 transition-all duration-200">Twitter</a></li>
              <li><a href="https://instagram.com" className="hover:text-gray-300 transition-all duration-200">Instagram</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter to get the latest updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg w-full text-gray-900"
              />
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-r-lg hover:bg-yellow-400 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 text-sm">
          <p>&copy; 2025 Your Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
