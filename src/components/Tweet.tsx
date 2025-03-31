
import React from 'react';
import { Tweet as TweetType } from '../data/sampleTweets';
import TweetActions from './TweetActions';

interface TweetProps {
  tweet: TweetType;
}

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-200">
      <div className="flex">
        {/* Avatar */}
        <div className="mr-3 flex-shrink-0">
          <img 
            src={tweet.user.avatar} 
            alt={`${tweet.user.name}'s avatar`} 
            className="w-12 h-12 rounded-full"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* User info and timestamp */}
          <div className="flex items-center mb-1">
            <span className="font-bold text-black mr-1">{tweet.user.name}</span>
            <span className="text-twitter-darkGray mr-1">{tweet.user.handle}</span>
            <span className="text-twitter-darkGray">· {tweet.timestamp}</span>
          </div>
          
          {/* Tweet content */}
          <div className="mb-3 text-black whitespace-pre-wrap">{tweet.content}</div>
          
          {/* Tweet image if any */}
          {tweet.image && (
            <div className="mb-3 rounded-2xl overflow-hidden">
              <img 
                src={tweet.image} 
                alt="Tweet attachment" 
                className="w-full h-auto object-cover max-h-80"
              />
            </div>
          )}
          
          {/* Tweet actions */}
          <TweetActions 
            replies={tweet.replies} 
            retweets={tweet.retweets} 
            likes={tweet.likes} 
            tweetId={tweet.id}
          />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
