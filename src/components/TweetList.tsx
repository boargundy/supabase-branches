
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Tweet from './Tweet';
import { getTweets } from '../services/tweetService';
import { toast } from 'sonner';

const TweetList = () => {
  const [tweetContent, setTweetContent] = useState('');
  
  const { data: tweets, isLoading, error, refetch } = useQuery({
    queryKey: ['tweets'],
    queryFn: getTweets
  });

  useEffect(() => {
    if (error) {
      toast.error('Failed to load tweets');
      console.error(error);
    }
  }, [error]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // We'll implement posting tweets in a future update
    setTweetContent('');
    toast.info('Tweet posting will be implemented in a future update');
  };

  return (
    <div className="border-l border-r border-gray-200 min-h-screen">
      <div className="sticky top-0 z-10 bg-white bg-opacity-90 backdrop-blur-sm p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold">Home</h1>
      </div>
      
      {/* Post tweet form */}
      <form onSubmit={handleSubmit} className="border-b border-gray-200 p-4 flex">
        <img 
          src="https://placekitten.com/40/40" 
          alt="Your avatar" 
          className="w-12 h-12 rounded-full mr-3" 
        />
        <div className="flex-1 min-w-0">
          <div className="border-b border-gray-200 py-2 mb-2">
            <input 
              type="text" 
              placeholder="What's happening?" 
              className="w-full outline-none text-xl placeholder-gray-400"
              value={tweetContent}
              onChange={(e) => setTweetContent(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <div></div> {/* Placeholder for attachment icons */}
            <button 
              type="submit"
              className="bg-twitter-blue text-white px-5 py-2 rounded-full font-bold hover:bg-blue-600 transition-colors"
              disabled={!tweetContent.trim()}
            >
              Tweet
            </button>
          </div>
        </div>
      </form>
      
      {/* Tweets list */}
      {isLoading ? (
        <div className="flex justify-center p-4">
          <p>Loading tweets...</p>
        </div>
      ) : tweets && tweets.length > 0 ? (
        tweets.map(tweet => (
          <Tweet 
            key={tweet.id} 
            tweet={{
              id: tweet.id,
              content: tweet.content,
              timestamp: new Date(tweet.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              likes: tweet.likes,
              retweets: tweet.retweets,
              replies: tweet.replies,
              image: tweet.image_url || undefined,
              user: {
                id: tweet.user.id,
                name: tweet.user.name,
                handle: tweet.user.handle,
                avatar: tweet.user.avatar
              }
            }} 
          />
        ))
      ) : (
        <div className="flex justify-center p-4">
          <p>No tweets found</p>
        </div>
      )}
    </div>
  );
};

export default TweetList;
