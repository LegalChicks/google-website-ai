
import React from 'react';

const Contact: React.FC = () => {
  const phoneNumber = '+639123456789';
  const facebookMessengerUrl = 'https://m.me/your-facebook-page';

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Have questions? We're here to help you get started.
          </p>
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <a href={`tel:${phoneNumber}`} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">Call Us</p>
              <p className="text-gray-600">{phoneNumber}</p>
            </div>
          </a>
          
          <a href={facebookMessengerUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.32 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 12 2.04Z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">Message Us on Facebook</p>
              <p className="text-gray-600">@legalchicksfarm</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
