// import React, { useState, useEffect } from "react";
// import globe from "../Components/Image/Globe.png";
// import { AiOutlineUser } from "react-icons/ai";
// import { CiShoppingCart } from "react-icons/ci";

// const NavBar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="font-sans">
//       <header
//         className={`flex justify-between items-center w-full bg-white fixed top-0 z-50 px-6 md:px-12 transition-shadow duration-300 ${
//           isScrolled ? "shadow-lg" : ""
//         }`}
//       >
//         <div className="flex items-center space-x-4 md:space-x-8 h-[55px]">
//           <img src={globe} alt="Logo" className="w-12 md:w-14" />
//         </div>

//         <div className="hidden lg:flex lg:space-x-10 text-[#133e87] font-semibold">
//           <a href="#" className="hover:text-[#133e87]">Home</a>
//           <a href="#" className="hover:text-[#133e87]">Our Products</a>
//           <a href="#" className="hover:text-[#133e87]">Pricing</a>
//           <a href="#" className="hover:text-[#133e87]">Categories</a>
//           <a href="#" className="hover:text-[#133e87]">About Us</a>
//         </div>

//         <div className="hidden lg:flex items-center space-x-6">
//           <div className="relative w-[200px] md:w-[350px]">
//             <input type="search" id="name" className="w-full p-2 pl-10 rounded-full bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-[#133e87] focus:outline-none"placeholder="Search your product"/>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M9 3a6 6 0 100 12 6 6 0 000-12zm-7 6a7 7 0 1112.946 4.032l4.682 4.682a1 1 0 01-1.414 1.414l-4.682-4.682A7 7 0 012 9z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </div>

//           <div className="flex items-center space-x-6">
//             <p className="text-sm font-medium text-gray-700 flex items-center">
//               Account <AiOutlineUser className="ml-1 text-xl" />
//             </p>
//             <p className="text-sm font-medium text-gray-700 flex items-center">
//               Cart <CiShoppingCart className="ml-1 text-xl" />
//             </p>
//           </div>
//         </div>

//         <button
//           className="lg:hidden flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#133e87]"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               fill="none"
//             >
//               <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               fill="none"
//             >
//               <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" />
//             </svg>
//           )}
//         </button>

//         {isOpen && (
//           <div className="absolute top-14 left-0 right-0 bg-white shadow-lg p-4 lg:hidden">
//             <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
//               <a href="#" className="hover:text-[#133e87]">Home</a>
//               <a href="#" className="hover:text-[#133e87]">Our Products</a>
//               <a href="#" className="hover:text-[#133e87]">Pricing</a>
//               <a href="#" className="hover:text-[#133e87]">Categories</a>
//               <a href="#" className="hover:text-[#133e87]">About Us</a>
//             </nav>
//           </div>
//         )}
//       </header>
//     </div>
//   );
// };

// export default NavBar;

// src/components/Navbar.jsx
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
