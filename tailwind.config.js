/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideAndExpand: {
          '0%': { 
            transform: 'translateX(-100%) scaleX(1)', // Start off-screen to the left
            width: '0%', // Start with 0 width
          },
          '100%': { 
            transform: 'translateX(100%) scaleX(1.5)', // End off-screen to the right with increased scale
            width: '100%', // End with full width
          },
        },
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        slideExpand: 'slideAndExpand 10s linear infinite',
        typing: 'typing 4s steps(40, end) forwards',
      },
      fontSize: {
        'mobile': ['2rem', '2.5rem'], // Example mobile font size
        'desktop': ['4rem', '4.5rem'], // Example desktop font size
      },
    },
  },
  plugins: [],
};
