
import React from 'react';
import { Home, MessageSquare, Heart, Twitter } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: MessageSquare, label: 'Messages', active: false },
    { icon: Heart, label: 'Notifications', active: false },
  ];

  return (
    <div className="hidden md:flex flex-col items-start p-2 h-screen sticky top-0">
      {/* Logo */}
      <div className="p-3 mb-4">
        <Twitter size={30} className="text-twitter-blue" />
      </div>
      
      {/* Navigation */}
      <nav className="mb-8 w-full">
        <ul className="space-y-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className={`flex items-center px-3 py-3 rounded-full hover:bg-gray-200 transition-colors text-xl 
                  ${item.active ? 'font-bold' : ''}`}
              >
                <item.icon size={24} className="mr-4" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Tweet button */}
      <button className="bg-twitter-blue text-white rounded-full py-3 px-6 w-56 font-bold text-lg hover:bg-blue-600 transition-colors mb-auto">
        Tweet
      </button>
      
      {/* User profile */}
      <div className="mt-auto mb-4 flex items-center p-3 rounded-full hover:bg-gray-200 transition-colors w-full">
        <img 
          src="https://placekitten.com/32/32" 
          alt="Your profile" 
          className="w-10 h-10 rounded-full mr-3" 
        />
        <div className="hidden xl:block">
          <div className="font-bold">Your Name</div>
          <div className="text-twitter-darkGray">@yourhandle</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
