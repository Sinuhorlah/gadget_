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

const ProductCard = ({ image, name, price, discount, itemsLeft }) => {
  return (
    <div className="w-56 p-2 bg-white rounded-lg shadow-md relative">
      
      <button className="absolute top-3 right-2 bg-white rounded-full p-1 shadow-md">
      <AiOutlineHeart />
      </button>
      <div className="">
        <img src={image} alt={name} className="w-[550px] h-48 object-cover rounded-lg"/>
        {discount && (
          <span className="absolute top-2 left-2 bg-pink-100 text-pink-800 px-[0.9] py-1 text-xs font-bold rounded">
             {discount}%
          </span>
        )}
      </div>
  
      <h3 className="mt-3 text-sm font-semibold text-gray-700 truncate">{name}</h3>
      <p className="text-base font-bold text-gray-900">${price}</p>
      <p className="text-xs text-gray-500">{itemsLeft} items left</p>

      <div className="mt-1 w-full h-2 bg-gray-300 rounded-full">
        <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${(itemsLeft / 50) * 100}%` }} > </div>
      </div>
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
    },
    {
      image: Samsung,
      name: "Samsung Galaxy S24 Ultra",
      price: 1700,
      discount: 33,
      itemsLeft: 45,
    },
    {
      image: Keyboard,
      name: "SKYLOONG GK104Pro",
      price: 125.99,
      itemsLeft: 48,
    },
    {
      image: Beat,
      name: "Beats Studio 3 Wireless",
      price: 279.99,
      discount: 20,
      itemsLeft: 45,
    },
    {
      image: Hp,
      name: "HP Pavilion 15.6\" FHD",
      price: 869.99,
      itemsLeft: 43,
    },
    {
      image: Pc,
      name: "HP Gaming PC + Monitor",
      price: 699.99,
      discount: 15,
      itemsLeft: 44,
    },
    {
      image: PowerBank,
      name: "140W Power Bank, 27000mAh",
      price: 116.27,
      discount: 30,
      itemsLeft: 45,
    },
    {
      image: Watch,
      name: "Apple Watch Ultra 2",
      price: 1207.35,
      itemsLeft: 4,
    },
  ];

  return (
    <div className=" min-h-screen mt-28 w-full">
      <div className="mb-24">
      <h1 className="text-2xl  text-[#133e87] mb-6 pl-12">
        Get to know Our Products!
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mx-8 ">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center mt-4">
            
            <ProductCard {...product} />

            <button className=" w-24 bg-[#133e87] text-white py-1 rounded-full hover:bg-[#133e87] text-sm text-center mt-3">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Products;
