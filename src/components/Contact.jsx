import React from 'react';

export const Contact = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Contact Us
        </h2>
        <p className="text-base md:text-lg text-gray-600 mt-2">
          Have questions or need more information? Get in touch with us, and we will be happy to assist you.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex items-start md:items-center">
          <div className="text-xl text-orange-500 mr-3">
            📞
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
            <p className="text-gray-600">+268 7927 0961</p>
          </div>
        </div>
        <div className="flex items-start md:items-center">
          <div className="text-xl text-orange-500 mr-3">
            ✉️
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Email</h4>
            <p className="text-gray-600">ae@sbukoacres.com</p>
          </div>
        </div>
        <div className="flex items-start md:items-center">
          <div className="text-xl text-orange-500 mr-3">
            📍
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Address</h4>
            <p className="text-gray-600">Plot 506, Siphefu Street, Serendipity complex, Mbabane</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <img
          src="/pic/image 16.png" // Path relative to the public folder
          className="w-216 h-192 border-4 border-gray-300" // Adjust size as needed
          alt="Contact"
        />
      </div>
      <div className="text-center mt-8">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Sbuko+Acres+Creative+Agency"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
};

export default Contact;
