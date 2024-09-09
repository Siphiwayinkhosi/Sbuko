import React, { useState } from 'react';

const images = [
  "/pics/image 1.png",
  "/pics/image 2.png",
  "/pics/image 3.png",
  "/pics/image 4.png",
  "/pics/image 5.png",
  "/pics/image 8.png",
  "/pics/image 9.png",
  "/pics/image 12.png",
  "/pics/image 13.png",
  "/pics/image 14.png",
  "/pics/image 15.png"
];

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovering, setHovering] = useState(false); // For tracking hover state

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  // Calculate how many images are left
  const imagesLeft = images.length - currentIndex - 1;

  return (
    <div className='relative w-full'>
      <div className='text-center py-8'>
        <h2 className='text-2xl md:text-7xl font-bold text-black'>
          Here is a collection of our beautiful designs
        </h2>
      </div>
      <div className='relative w-full'>
        <div className='overflow-hidden'>
          <div 
            className='flex transition-transform duration-500' 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className='w-full flex-shrink-0'>
                <img src={src} alt={`Work ${index + 1}`} className='w-full h-auto object-cover' />
              </div>
            ))}
          </div>
        </div>

        {/* Previous Button */}
        <button
          className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={prevSlide}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          disabled={currentIndex === 0} // Disable button if it's the first image
        >
          &#9664;
          {/* No hover count display for previous button */}
        </button>

        {/* Next Button */}
        <button
          className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded'
          onClick={nextSlide}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          &#9654;
          {/* Show how many images are left when hovering */}
          {hovering && (
            <div className='absolute right-16 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded'>
              {imagesLeft <= 1 ? `${imagesLeft} Image` : `${imagesLeft} Images`}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
