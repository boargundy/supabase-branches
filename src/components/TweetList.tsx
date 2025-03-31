
import React from 'react';
import { sampleTweets } from '../data/sampleTweets';
import Tweet from './Tweet';

const TweetList = () => {
  return (
    <div className="border-l border-r border-gray-200 min-h-screen">
      <div className="sticky top-0 z-10 bg-white bg-opacity-90 backdrop-blur-sm p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold">Home</h1>
      </div>
      
      {/* Post tweet form placeholder */}
      <div className="border-b border-gray-200 p-4 flex">
        <img 
          src="https://placekitten.com/40/40" 
          alt="Your avatar" 
          className="w-12 h-12 rounded-full mr-3" 
        />
        <div className="flex-1">
          <div className="border-b border-gray-200 py-2 mb-2">
            <input 
              type="text" 
              placeholder="What's happening?" 
              className="w-full outline-none text-xl placeholder-gray-400" 
            />
          </div>
          <div className="flex justify-between items-center">
            <div></div> {/* Placeholder for attachment icons */}
            <button className="bg-twitter-blue text-white px-5 py-2 rounded-full font-bold hover:bg-blue-600 transition-colors">
              Tweet
            </button>
          </div>
        </div>
      </div>
      
      {/* Tweets list */}
      {sampleTweets.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
