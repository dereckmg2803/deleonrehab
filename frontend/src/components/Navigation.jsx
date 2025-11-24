import React from 'react';
import { Button } from './ui/button';
import { mockData } from '../mock/data';

const Navigation = () => {
  const { logo, menuItems, ctaButton } = mockData.navigation;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">{logo}</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-md font-medium transition-colors duration-200">
            {ctaButton}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;