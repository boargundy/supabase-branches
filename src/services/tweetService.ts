
import { supabase } from "@/integrations/supabase/client";
import { Tweet, User } from "@/types/database.types";

export const getTweets = async (): Promise<(Tweet & { user: User })[]> => {
  const { data, error } = await supabase
    .from("tweets")
    .select(`
      *,
      user:users(*)
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching tweets:", error);
    throw error;
  }

  return data || [];
};

export const likeTweet = async (tweetId: string, liked: boolean): Promise<void> => {
  const { error } = await supabase
    .from("tweets")
    .update({ 
      likes: liked ? supabase.rpc('increment', { x: 1 }) : supabase.rpc('decrement', { x: 1 }) 
    })
    .eq('id', tweetId);

  if (error) {
    console.error("Error updating tweet likes:", error);
    throw error;
  }
};

export const retweetPost = async (tweetId: string, retweeted: boolean): Promise<void> => {
  const { error } = await supabase
    .from("tweets")
    .update({ 
      retweets: retweeted ? supabase.rpc('increment', { x: 1 }) : supabase.rpc('decrement', { x: 1 }) 
    })
    .eq('id', tweetId);

  if (error) {
    console.error("Error updating tweet retweets:", error);
    throw error;
  }
};
