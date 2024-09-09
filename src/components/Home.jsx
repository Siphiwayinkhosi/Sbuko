import React from 'react';

export const Home = () => {
  return (
    <section className='max-w-7xl mx-auto border-b-2 bg-black text-orange-500 min-h-screen'>
      <div className='flex flex-col items-center justify-center px-4 pb-4 sm:pb-2'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[6rem] p-2 uppercase font-bold text-center'>
          We are Sbuko Acres,
          <span className='inline-block overflow-hidden border-r-4 border-orange-500 animate-typing'>
            a full service African Agency
          </span>
        </h1>
        <p className='lg:mt-6 text-lg mb-4 font-medium tracking-tighter'>
         We work for various premium, international brands, but also love to work with local heroes and disruptive players aiming to be (inter)national champions   
        </p>
        <img 
          src="/pics/image 6.png" 
          className='w-full h-[65vh] object-contain p-2 mb-1 sm:mb-0 ' 
          alt='Home' 
        />
      </div>
    </section>
  );
};

export default Home;
