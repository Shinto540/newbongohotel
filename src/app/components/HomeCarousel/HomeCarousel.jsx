import { useEffect, useState } from "react";
import Image from "next/image";

// Array of image paths from the public/assets folder
const images = [
  "/assets/pictures/homepic.jpg",
  "/assets/pictures/about.png",
  "/assets/pictures/homebg.jpg", // Add as many images as you want here
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 3000 ms = 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative lg:h-96 overflow-hidden w-full h-screen bg-gray-100 flex items-center justify-center">
      {/* Map through images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
  src={src}
  alt={`Slide ${index + 1}`}
  fill={true}
  priority
  className="absolute top-0 left-0 w-full h-full object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 0vw, 33vw"
/>
        </div>
      ))}

      {/* Previous and Next Controls */}
      <button
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + images.length) % images.length)
        }
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        &#10094; {/* Left arrow */}
      </button>

      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Carousel;
