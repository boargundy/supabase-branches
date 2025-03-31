
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
  // First get the current tweet to get its current likes value
  const { data: tweet, error: fetchError } = await supabase
    .from("tweets")
    .select("likes")
    .eq("id", tweetId)
    .single();

  if (fetchError) {
    console.error("Error fetching tweet:", fetchError);
    throw fetchError;
  }

  // Calculate the new likes value
  const newLikes = liked ? tweet.likes + 1 : Math.max(0, tweet.likes - 1);

  // Update the tweet with the new likes value
  const { error: updateError } = await supabase
    .from("tweets")
    .update({ likes: newLikes })
    .eq("id", tweetId);

  if (updateError) {
    console.error("Error updating tweet likes:", updateError);
    throw updateError;
  }
};

export const retweetPost = async (tweetId: string, retweeted: boolean): Promise<void> => {
  // First get the current tweet to get its current retweets value
  const { data: tweet, error: fetchError } = await supabase
    .from("tweets")
    .select("retweets")
    .eq("id", tweetId)
    .single();

  if (fetchError) {
    console.error("Error fetching tweet:", fetchError);
    throw fetchError;
  }

  // Calculate the new retweets value
  const newRetweets = retweeted ? tweet.retweets + 1 : Math.max(0, tweet.retweets - 1);

  // Update the tweet with the new retweets value
  const { error: updateError } = await supabase
    .from("tweets")
    .update({ retweets: newRetweets })
    .eq("id", tweetId);

  if (updateError) {
    console.error("Error updating tweet retweets:", updateError);
    throw updateError;
  }
};
