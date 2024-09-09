import React, { useState } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-orange-500 border-b-2 border-gray-200 p-4">
            <div className="flex justify-between items-center">
                {/* Left Side - Name */}
                <div className="text-white text-2xl font-bold">
                    Sbuko Acres
                </div>

                {/* Right Side - Menu Button for Mobile */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-white text-2xl pr-2 focus:outline-none"
                        aria-label={isOpen ? "close menu" : "open menu"}
                    >
                        &#9776; {/* Hamburger Icon */}
                    </button>
                </div>

                {/* Right Side - Menu Links for Desktop */}
                <div className="hidden md:flex space-x-4">
                    <a href="#portfolio" className="text-white">PORTFOLIO</a>
                    <a href="#about" className="text-white">ABOUT</a>
                    <a href="#reviews" className="text-white">HOME</a>
                    <a href="#contact" className="text-white">CONTACT</a>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2">
                    <a href="#portfolio" className="block text-white py-2">PORTFOLIO</a>
                    <a href="#about" className="block text-white py-2">ABOUT</a>
                    <a href="#reviews" className="block text-white py-2">HOME</a>
                    <a href="#contact" className="block text-white py-2">CONTACT</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
