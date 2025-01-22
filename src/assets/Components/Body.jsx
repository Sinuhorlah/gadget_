import React from "react";
import Head from "../Components/Image/HeadPhone.png";
import Lap from "../Components/Image/Laptop.png";
import Monitor from "../Components/Image/Desktop.png";
import Power from "../Components/Image/PowerBank.png";
import Mobile from "../Components/Image/Phones.png";

const Body = () => {
  return (
    <div className="w-full py-12 px-4 md:px-6 lg:px-12">
      {/* Browse by Categories Section */}
      <div className="mb-16">
        <h1 className="text-3xl font-semibold text-[#133e87] mb-6">Browse by Categories</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Category Items */}
          {[
            { image: Head, title: "Headphones" },
            { image: Monitor, title: "Monitor" },
            { image: Lap, title: "Laptop" },
            { image: Power, title: "PowerBank" },
            { image: Mobile, title: "Mobile Phones" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#f0f4f8] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center items-center p-6">
                <img src={item.image} alt={item.title} className="w-24 h-24 md:w-32 md:h-32 object-contain" />
              </div>
              <h2 className="text-center text-[#133e87] font-semibold text-lg p-4">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Browse by Accessories Section */}
      <div>
        <h1 className="text-3xl font-semibold text-[#133e87] mb-6">Browse by Accessories</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Accessories Items */}
          {[
            { image: Head, title: "Headphones" },
            { image: Lap, title: "Laptop Stand" },
            { image: Monitor, title: "Monitors" },
            { image: Power, title: "Powerbanks" },
            { image: Mobile, title: "Mobile Covers" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#f0f4f8] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center items-center p-6">
                <img src={item.image} alt={item.title} className="w-24 h-24 md:w-32 md:h-32 object-contain" />
              </div>
              <h2 className="text-center text-[#133e87] font-semibold text-lg p-4">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
