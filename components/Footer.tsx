
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Legal Chicks Poultry Farm. All rights reserved.
        </p>
        <p className="text-center text-sm text-gray-500 mt-1">
          Cagayan Valley, Philippines
        </p>
      </div>
    </footer>
  );
};

export default Footer;
