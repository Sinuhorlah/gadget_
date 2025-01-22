import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-blue-600">
            PhoneShop
          </div>

          {/* Center Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="text-gray-700 hover:text-blue-500 focus:outline-none"
              >
                Products
              </button>
              {isProductsOpen && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-40">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Smartphones
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Accessories
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Tablets
                  </a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="text-gray-700 hover:text-blue-500 focus:outline-none"
              >
                Categories
              </button>
              {isCategoriesOpen && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-40">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Budget Phones
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Flagships
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Gaming Phones
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-blue-500">
              Deals
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </nav>

          {/* Right Side: Account and Cart */}
          <div className="flex items-center space-x-6">
            {/* Account */}
            <input
              type="search"
              placeholder="Search Your Product"
              className="flex w-full max-w-md px-4 py-2 border border-gray-300 rounded-full text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in"
            />

            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 text-sm font-medium flex items-center gap-4"
            >
              Account <FaUser />
            </a>

            {/* Cart */}
            <div className="relative">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500 focus:outline-none"
              >
                🛒
              </a>
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="py-2 px-4">
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-blue-500"
            >
              Products
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-blue-500"
            >
              Categories
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-blue-500"
            >
              Deals
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-blue-500"
            >
              Contact
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-blue-500"
            >
              Account
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
