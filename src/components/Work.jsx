import React from 'react';

const ImageWithText = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Image section */}
      <img
        src="/pics/image 7.png"
        alt="Work"
        className="w-full h-auto object-cover"
      />
      
      {/* Text with sliding and expanding animation */}
      <div className="absolute bottom-4 left-0 text-black text-xl font-bold animate-slideExpand whitespace-nowrap">
        Design is a solution to a problem, we offer good designs.
      </div>
    </div>
  );
};

export default ImageWithText;
