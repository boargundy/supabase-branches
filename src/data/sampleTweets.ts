
export interface Tweet {
  id: string;
  user: {
    id: string;
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;
  image?: string;
}

export const sampleTweets: Tweet[] = [
  {
    id: "1",
    user: {
      id: "user1",
      name: "Elon Musk",
      handle: "@elonmusk",
      avatar: "https://placekitten.com/48/48"
    },
    content: "Exciting developments at SpaceX today! Our latest rocket prototype successfully completed its test flight. The future of space travel is looking brighter than ever. 🚀",
    timestamp: "2h",
    likes: 3829,
    retweets: 492,
    replies: 283
  },
  {
    id: "2",
    user: {
      id: "user2",
      name: "TechCrunch",
      handle: "@techcrunch",
      avatar: "https://placekitten.com/49/49"
    },
    content: "Breaking: Apple announces new MacBook Pro with custom M2 chip, promising 20% faster performance than previous models.",
    timestamp: "4h",
    likes: 1523,
    retweets: 302,
    replies: 145,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
  },
  {
    id: "3",
    user: {
      id: "user3",
      name: "NASA",
      handle: "@NASA",
      avatar: "https://placekitten.com/50/50"
    },
    content: "The James Webb Space Telescope has captured stunning new images of distant galaxies, giving us unprecedented views of the early universe. 🌌",
    timestamp: "5h",
    likes: 4521,
    retweets: 1032,
    replies: 267,
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=400&fit=crop"
  },
  {
    id: "4",
    user: {
      id: "user4",
      name: "Jane Smith",
      handle: "@janesmith",
      avatar: "https://placekitten.com/51/51"
    },
    content: "Just finished reading an amazing book about artificial intelligence and its impact on society. Highly recommend! 📚 #AI #reading",
    timestamp: "7h",
    likes: 142,
    retweets: 32,
    replies: 12
  },
  {
    id: "5",
    user: {
      id: "user5",
      name: "The Verge",
      handle: "@verge",
      avatar: "https://placekitten.com/52/52"
    },
    content: "Review: The new Google Pixel continues the company's tradition of excellent camera performance, but battery life still lags behind competitors.",
    timestamp: "9h",
    likes: 725,
    retweets: 105,
    replies: 87
  },
  {
    id: "6",
    user: {
      id: "user6",
      name: "Netflix",
      handle: "@netflix",
      avatar: "https://placekitten.com/53/53"
    },
    content: "STRANGER THINGS Season 5 is now in production! #StrangerThings",
    timestamp: "11h",
    likes: 15243,
    retweets: 7432,
    replies: 1342,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
  }
];
