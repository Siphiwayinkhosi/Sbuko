import React from 'react';

export const About = () => {
  const explodingBeamsStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `radial-gradient(circle, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 70%),
                 radial-gradient(circle, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 70%),
                 radial-gradient(circle, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 70%)`,
    backgroundPosition: '0 0, 50% 50%, 100% 100%',
    backgroundSize: '20% 20%, 20% 20%, 20% 20%',
    backgroundRepeat: 'no-repeat',
    animation: 'explode 5s infinite',
    pointerEvents: 'none',
  };

  const keyframes = `
    @keyframes explode {
      0% {
        transform: scale(0);
        opacity: 0.8;
      }
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;

  return (
    <div className="relative flex flex-col items-center h-screen bg-black text-white p-10 overflow-hidden">
      {/* Background Beams */}
      <style>{keyframes}</style>
      <div style={explodingBeamsStyle}></div>

      {/* Centered "About Us" and "At Sbuko Acres..." */}
      <div className="text-center relative z-10">
        <h1 className="text-4xl md:text-8xl font-bold mb-4">About Us</h1>
        <p className="text-base md:text-lg mb-12 max-w-md mx-auto">
          At Sbuko Acres, we believe a brand needs to stand out from the crowd, and a good design gets you started.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative group bg-orange-600 p-6 md:p-12 rounded-lg shadow-lg max-w-md overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">Our Approach</h2>
            <p className="text-left text-base md:text-lg">
              Strategy is the foundation of our approach. It's the lens we utilize to identify what your brand stands for, to whom it should speak, what it should say, and where it should say it.
            </p>
          </div>

          <div className="relative group bg-orange-600 p-6 md:p-12 rounded-lg shadow-lg max-w-md overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">Creative Doing</h2>
            <p className="text-left text-base md:text-lg">
              Creativity is the platform through which we achieve resonance and elevate brand conversations.
            </p>
          </div>

          <div className="relative group bg-orange-600 p-6 md:p-12 rounded-lg shadow-lg max-w-md overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">Background</h2>
            <p className="text-left text-base md:text-lg">
              This is Sbuko Acres—a valuable partner to your communication & marketing departments. We have the teams, the networks, the skills, and the experience that give our clients an advantage in a tough marketplace. An integrated communications and advertising agency created through the coming together of like-minded individuals and the most awarded agency in the kingdom of Eswatini. Driven by the passion to put communication & consumer-centric excellence at the heart of every brand, organization, or institution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
