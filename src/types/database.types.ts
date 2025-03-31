
export interface User {
  id: string;
  name: string;
  handle: string;
  avatar: string;
}

export interface Tweet {
  id: string;
  content: string;
  image_url: string | null;
  created_at: string;
  likes: number;
  retweets: number;
  replies: number;
  user_id: string;
  user?: User; // For joined data
}
