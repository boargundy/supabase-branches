
import React, { useState } from 'react';
import { MessageSquare, Repeat, Heart, Share } from 'lucide-react';

interface TweetActionsProps {
  replies: number;
  retweets: number;
  likes: number;
  tweetId: string;
}

const TweetActions = ({ replies, retweets, likes, tweetId }: TweetActionsProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [retweeted, setRetweeted] = useState(false);
  const [retweetCount, setRetweetCount] = useState(retweets);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleRetweet = () => {
    if (retweeted) {
      setRetweetCount(retweetCount - 1);
    } else {
      setRetweetCount(retweetCount + 1);
    }
    setRetweeted(!retweeted);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="flex justify-between max-w-md">
      {/* Reply button */}
      <button 
        className="flex items-center text-twitter-darkGray hover:text-twitter-blue transition-colors group"
        aria-label="Reply"
      >
        <div className="p-2 rounded-full group-hover:bg-blue-50">
          <MessageSquare size={18} className="group-hover:text-twitter-blue" />
        </div>
        <span className="ml-1 text-sm">{formatNumber(replies)}</span>
      </button>
      
      {/* Retweet button */}
      <button 
        className={`flex items-center transition-colors group ${retweeted ? 'text-green-500' : 'text-twitter-darkGray hover:text-green-500'}`}
        onClick={handleRetweet}
        aria-label="Retweet"
      >
        <div className="p-2 rounded-full group-hover:bg-green-50">
          <Repeat size={18} className={retweeted ? 'text-green-500' : 'group-hover:text-green-500'} />
        </div>
        <span className="ml-1 text-sm">{formatNumber(retweetCount)}</span>
      </button>
      
      {/* Like button */}
      <button 
        className={`flex items-center transition-colors group ${liked ? 'text-red-500' : 'text-twitter-darkGray hover:text-red-500'}`}
        onClick={handleLike}
        aria-label="Like"
      >
        <div className="p-2 rounded-full group-hover:bg-red-50">
          <Heart 
            size={18} 
            className={liked ? 'text-red-500 fill-red-500' : 'group-hover:text-red-500'} 
            fill={liked ? "currentColor" : "none"} 
          />
        </div>
        <span className="ml-1 text-sm">{formatNumber(likeCount)}</span>
      </button>
      
      {/* Share button */}
      <button 
        className="flex items-center text-twitter-darkGray hover:text-twitter-blue transition-colors group"
        aria-label="Share"
      >
        <div className="p-2 rounded-full group-hover:bg-blue-50">
          <Share size={18} className="group-hover:text-twitter-blue" />
        </div>
      </button>
    </div>
  );
};

export default TweetActions;
