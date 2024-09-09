import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import  Portfolio  from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


export const App = () => {
  return (
    <main className='overflow-x-hidden antialiased text-neutral-800'>
    <Navbar />
    <div className='bg-black text-orange-500'>
      <Home />
    </div>
    <div className='bg-orange-500 text-white'>
      <About />
    </div>
    <div className='bg-white text-orange-500'>
      <Work />
    </div>
    <div className='bg-orange-500 text-white'>
      <Portfolio />
    </div>
    <div className='bg-black'>
      <Contact />
    </div>
    <Footer />
  </main>
  
   
  );
};

export default App;
