
-- Create a table for tweets
CREATE TABLE public.tweets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  likes INTEGER DEFAULT 0 NOT NULL,
  retweets INTEGER DEFAULT 0 NOT NULL,
  replies INTEGER DEFAULT 0 NOT NULL,
  user_id UUID NOT NULL
);

-- Create a table for users
CREATE TABLE public.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  handle TEXT NOT NULL UNIQUE,
  avatar TEXT NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.tweets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (since this is Twitter-like, tweets are public)
CREATE POLICY "Public can view tweets" ON public.tweets
  FOR SELECT USING (true);

CREATE POLICY "Public can view users" ON public.users
  FOR SELECT USING (true);

-- Seed some sample data
INSERT INTO public.users (id, name, handle, avatar) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Elon Musk', '@elonmusk', 'https://placekitten.com/48/48'),
  ('00000000-0000-0000-0000-000000000002', 'TechCrunch', '@techcrunch', 'https://placekitten.com/49/49'),
  ('00000000-0000-0000-0000-000000000003', 'NASA', '@NASA', 'https://placekitten.com/50/50'),
  ('00000000-0000-0000-0000-000000000004', 'Jane Smith', '@janesmith', 'https://placekitten.com/51/51'),
  ('00000000-0000-0000-0000-000000000005', 'The Verge', '@verge', 'https://placekitten.com/52/52'),
  ('00000000-0000-0000-0000-000000000006', 'Netflix', '@netflix', 'https://placekitten.com/53/53');

INSERT INTO public.tweets (content, image_url, likes, retweets, replies, user_id) VALUES
  ('Exciting developments at SpaceX today! Our latest rocket prototype successfully completed its test flight. The future of space travel is looking brighter than ever. 🚀', NULL, 3829, 492, 283, '00000000-0000-0000-0000-000000000001'),
  ('Breaking: Apple announces new MacBook Pro with custom M2 chip, promising 20% faster performance than previous models.', 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop', 1523, 302, 145, '00000000-0000-0000-0000-000000000002'),
  ('The James Webb Space Telescope has captured stunning new images of distant galaxies, giving us unprecedented views of the early universe. 🌌', 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=400&fit=crop', 4521, 1032, 267, '00000000-0000-0000-0000-000000000003'),
  ('Just finished reading an amazing book about artificial intelligence and its impact on society. Highly recommend! 📚 #AI #reading', NULL, 142, 32, 12, '00000000-0000-0000-0000-000000000004'),
  ('Review: The new Google Pixel continues the company''s tradition of excellent camera performance, but battery life still lags behind competitors.', NULL, 725, 105, 87, '00000000-0000-0000-0000-000000000005'),
  ('STRANGER THINGS Season 5 is now in production! #StrangerThings', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop', 15243, 7432, 1342, '00000000-0000-0000-0000-000000000006');
