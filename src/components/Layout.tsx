
import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto flex">
        <Sidebar />
        <main className="flex-1 max-w-2xl mx-auto">
          {children}
        </main>
        
        {/* Right sidebar/trending section - hidden on mobile */}
        <div className="hidden lg:block w-80 p-4 sticky top-0 h-screen overflow-y-auto">
          <div className="bg-gray-100 rounded-2xl p-4 mb-4">
            <h2 className="text-xl font-bold mb-4">What's happening</h2>
            <div className="space-y-4">
              {['Trending in US', 'Sports · Trending', 'Technology · Trending'].map((category, i) => (
                <div key={i} className="cursor-pointer hover:bg-gray-200 p-2 rounded-lg transition-colors">
                  <div className="text-xs text-twitter-darkGray">{category}</div>
                  <div className="font-bold">#{['AI', 'WorldCup', 'iPhone15'][i]}</div>
                  <div className="text-xs text-twitter-darkGray">{[167, 324, 98][i]}K Tweets</div>
                </div>
              ))}
              <a href="#" className="text-twitter-blue hover:underline block mt-1">Show more</a>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-2xl p-4">
            <h2 className="text-xl font-bold mb-4">Who to follow</h2>
            <div className="space-y-4">
              {['Bill Gates', 'NASA', 'TechCrunch'].map((name, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={`https://placekitten.com/${40 + i}/${40 + i}`} 
                      alt={`${name}'s profile`} 
                      className="w-10 h-10 rounded-full mr-3" 
                    />
                    <div>
                      <div className="font-bold">{name}</div>
                      <div className="text-twitter-darkGray">@{name.toLowerCase().replace(' ', '')}</div>
                    </div>
                  </div>
                  <button className="bg-black text-white rounded-full px-4 py-1 text-sm font-bold">
                    Follow
                  </button>
                </div>
              ))}
              <a href="#" className="text-twitter-blue hover:underline block mt-1">Show more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
