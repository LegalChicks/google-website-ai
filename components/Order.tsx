
import React from 'react';

const Order: React.FC = () => {
  // Placeholder for the actual Google Form link
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc_xL0t_9x-x-x-x-x-x-x-x-x-x-x-x-x/viewform?usp=sf_link";

  return (
    <section id="order" className="py-20 bg-red-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to Start Your Farm?</h2>
        <p className="mt-4 text-xl text-red-100">
          Click the button below to reserve your poultry. We'll contact you to confirm your order and schedule a pickup or delivery.
        </p>
        <a 
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-white hover:bg-red-50 text-red-700 font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
        >
          Go to Reservation Form
        </a>
      </div>
    </section>
  );
};

export default Order;
