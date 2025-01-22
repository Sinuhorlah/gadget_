import React from "react";
import Apple from "../Components/Image/AppleIphone.png";
import Samsung from "../Components/Image/SamsungGalaxy.png";
import Keyboard from "../Components/Image/SkyLoong.png";
import Beat from "../Components/Image/Beat.png";
import Hp from "../Components/Image/HpNewest.jpeg";
import Pc from "../Components/Image/HpC.jpeg";
import PowerBank from "../Components/Image/PowerBank.jpeg";
import Watch from "../Components/Image/AppleWatch.jpeg";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({ image, name, price, discount, itemsLeft, rating }) => {
  return (
    <div className="w-full max-w-xs p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Like Button */}
      <button className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:bg-gray-200 transition-all duration-200">
        <AiOutlineHeart className="text-xl text-gray-600" />
      </button>

      {/* Product Image */}
      <div className="relative mb-4">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg" />
        {discount && (
          <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {discount}%
          </span>
        )}
      </div>

      {/* Product Details */}
      <h3 className="text-sm font-semibold text-gray-700 mb-2 truncate">{name}</h3>
      <div className="flex items-center justify-between mb-2">
        <p className="text-lg font-bold text-gray-900">${price}</p>
        {rating && (
          <div className="flex items-center space-x-1 text-yellow-500">
            {[...Array(5)].map((_, idx) => (
              <span key={idx} className={idx < rating ? "text-yellow-500" : "text-gray-300"}>★</span>
            ))}
          </div>
        )}
      </div>

      {/* Stock Information */}
      <p className="text-xs text-gray-500">{itemsLeft} items left</p>

      {/* Stock Progress */}
      <div className="mt-1 w-full h-2 bg-gray-300 rounded-full">
        <div
          className="h-2 bg-blue-500 rounded-full"
          style={{ width: `${(itemsLeft / 50) * 100}%` }}
        ></div>
      </div>

      
      <button className="w-full mt-4 bg-[#133e87] text-white py-2 rounded-full hover:bg-[#0a3061] transition-all duration-200">
        Add to Cart
      </button>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      image: Apple,
      name: "iPhone 16 Pro Max",
      price: 2498,
      discount: 25,
      itemsLeft: 48,
      rating: 5,
    },
    {
      image: Samsung,
      name: "Samsung Galaxy S24 Ultra",
      price: 1700,
      discount: 33,
      itemsLeft: 45,
      rating: 4,
    },
    {
      image: Keyboard,
      name: "SKYLOONG GK104Pro",
      price: 125.99,
      itemsLeft: 48,
      rating: 4,
    },
    {
      image: Beat,
      name: "Beats Studio 3 Wireless",
      price: 279.99,
      discount: 20,
      itemsLeft: 45,
      rating: 4,
    },
    {
      image: Hp,
      name: "HP Pavilion 15.6\" FHD",
      price: 869.99,
      itemsLeft: 43,
      rating: 3,
    },
    {
      image: Pc,
      name: "HP Gaming PC + Monitor",
      price: 699.99,
      discount: 15,
      itemsLeft: 44,
      rating: 5,
    },
    {
      image: PowerBank,
      name: "140W Power Bank, 27000mAh",
      price: 116.27,
      discount: 30,
      itemsLeft: 45,
      rating: 4,
    },
    {
      image: Watch,
      name: "Apple Watch Ultra 2",
      price: 1207.35,
      itemsLeft: 4,
      rating: 3,
    },
  ];

  return (
    <div className="min-h-screen mt-28 w-full">
      <div className="mb-24">
        <h1 className="text-2xl font-semibold text-[#133e87] mb-6 pl-12">
          Get to know Our Products!
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mx-8 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center mt-4">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
