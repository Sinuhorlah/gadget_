import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Explore the Latest Smartphones",
      description: "Find your perfect device with cutting-edge technology.",
      image: "https://cdn.mos.cms.futurecdn.net/AVEcca7TuDmt8wjaFZPkzj.jpg",
    },
    {
      id: 2,
      title: "Unbeatable Deals on Accessories",
      description: "Get the best prices on chargers, cases, and more!",
      image: "https://www.notebookcheck.net/fileadmin/Notebooks/Sonstiges/bestmultimedialaptop.jpg",
    },
    {
      id: 3,
      title: "Top Gaming Phones",
      description: "Power up your gaming experience with the latest devices.",
      image: "https://i.pinimg.com/736x/bc/97/0e/bc970eafb82c1e57a5c36905e04f95a4.jpg",
    },
  ];

  // Change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative pt-4">
      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence>
          {slides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={slide.id}
                  className="absolute inset-0 bg-cover bg-center w-full" 
                  style={{ backgroundImage: `url(${slide.image})` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              )
          )}
        </AnimatePresence>
      </div>

      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 h-[500px] flex flex-col justify-center items-center text-center text-white space-y-6">
        <AnimatePresence>
          {slides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  <h1 className="text-4xl lg:text-5xl font-bold">{slide.title}</h1>
                  <p className="text-lg lg:text-xl">{slide.description}</p>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Shop Now
                  </button>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
