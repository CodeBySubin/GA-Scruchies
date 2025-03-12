import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = () => {
  const slides = [
    "https://www.jiomart.com/images/product/original/rvvbidhv5e/starvis-luxury-6pcs-organza-scrunchie-for-women-girls-mermaid-holographic-soft-xl-scrunchies-hair-tie-shining-anti-hair-breakage-scrunchies-set-for-girls-women-best-gift-for-sister-friend-mom-product-images-rvvbidhv5e-0-202302231312.jpg?im=Resize=(1000,1000)",
    "https://mesmerizeindia.com/cdn/shop/files/ScsSatC09Adu3_98171.jpg?v=1736173216&width=800",
    "https://curlcare.in/cdn/shop/files/satin-hair-scrunchie-single-jumbo-765280.jpg?v=1734116520&width=1400",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Auto-slide every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[75vh] sm:h-[65vh] md:h-[70vh] lg:h-[85vh] overflow-hidden rounded-3xl">
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 ">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-5 transform -translate-y-1/2 bg-gray-900 text-white p-2 sm:p-3 rounded-full z-10 hover:bg-gray-700 transition"
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-5 transform -translate-y-1/2 bg-gray-900 text-white p-2 sm:p-3 rounded-full z-10 hover:bg-gray-700 transition"
      >
        <FaArrowRight size={20} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
