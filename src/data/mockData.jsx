// src/data/mockData.js

import { Twitter, Instagram, Facebook } from 'lucide-react';
import React from 'react';

export const mockStats = {
  followers: '24,856',
  following: '1,204',
  posts: '1,892',
};

export const mockFollowerData = [
  { name: 'Jan', followers: 4000 },
  { name: 'Feb', followers: 3000 },
  { name: 'Mar', followers: 5000 },
  { name: 'Apr', followers: 4500 },
  { name: 'May', followers: 6000 },
  { name: 'Jun', followers: 5800 },
  { name: 'Jul', followers: 7200 },
];

export const mockEngagementData = [
  { name: 'Post 1', likes: 1200, comments: 300 },
  { name: 'Post 2', likes: 800, comments: 150 },
  { name: 'Post 3', likes: 2500, comments: 600 },
  { name: 'Post 4', likes: 1800, comments: 400 },
  { name: 'Post 5', likes: 950, comments: 220 },
];

export const mockRecentPosts = [
    { id: 1, platform: 'twitter', content: 'Just launched our new analytics dashboard! So excited to see how it helps our users. #DataAnalytics #SaaS', likes: '1.2k', comments: '89', shares: '45', time: '2h ago' },
    { id: 2, platform: 'instagram', content: 'A look behind the scenes of our development process. It takes a team! 👨‍💻👩‍💻 #Tech #StartupLife', likes: '3.4k', comments: '152', shares: '112', time: '5h ago' },
    { id: 3, platform: 'facebook', content: 'Our comprehensive guide to understanding your social media engagement is now live on our blog. Read it here: [link]', likes: '876', comments: '45', shares: '98', time: '1d ago' },
];

export const getPlatformIcon = (platform) => {
    switch (platform) {
        case 'twitter': return <Twitter className="w-6 h-6 text-blue-400" />;
        case 'instagram': return <Instagram className="w-6 h-6 text-pink-500" />;
        case 'facebook': return <Facebook className="w-6 h-6 text-blue-600" />;
        default: return null;
    }
};
