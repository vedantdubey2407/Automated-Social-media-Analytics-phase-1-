import { Twitter, Instagram, Facebook } from 'lucide-react';
import React from 'react';

// --- Main user account data ---
const allData = {
  'twitter-123': {
    platform: 'twitter', handle: '@socialytics', stats: { followers: '24,856', following: '1,204', posts: '1,892' },
    followerData: [ { date: '2025-07-27', followers: 7200 }, { date: '2025-07-20', followers: 7150 }, { date: '2025-07-15', followers: 7050 }, { date: '2025-07-10', followers: 6900 }, { date: '2025-07-01', followers: 6800 }, ],
    forecastData: [ { date: '2025-07-27', forecast: 7200 }, { date: '2025-08-03', forecast: 7350 }, { date: '2025-08-10', forecast: 7500 }, ],
    posts: [ { id: 1, platform: 'twitter', content: 'Our new analytics dashboard is live! #DataAnalytics', likes: 1256, comments: 89, shares: 45, engagementRate: 5.4, time: '2h ago', date: '2025-07-27' }, { id: 4, platform: 'twitter', content: 'What\'s the one metric you wish you could track automatically?', likes: 543, comments: 123, shares: 23, engagementRate: 6.5, time: '2d ago', date: '2025-07-25' }, ],
    sentimentData: { positive: 68, neutral: 23, negative: 9 },
    recommendations: ['#SaaS', '#Tech', '#Analytics', '#Marketing', '#BigData'],
  },
  'instagram-456': {
    platform: 'instagram', handle: '@socialyticsco', stats: { followers: '112,451', following: '350', posts: '540' },
    followerData: [ { date: '2025-07-26', followers: 112451 }, { date: '2025-07-19', followers: 111023 }, { date: '2025-07-12', followers: 109567 }, ],
    forecastData: [ { date: '2025-07-26', forecast: 112451 }, { date: '2025-08-02', forecast: 114500 }, { date: '2025-08-09', forecast: 116800 }, ],
    posts: [ { id: 2, platform: 'instagram', content: 'A look behind the scenes of our development process. 👨‍💻👩‍💻', likes: 8489, comments: 352, shares: 212, engagementRate: 8.1, time: '5h ago', date: '2025-07-27' }, { id: 5, platform: 'instagram', content: 'Client testimonial! So proud of the results we\'re helping achieve.', likes: 11123, comments: 430, shares: 350, engagementRate: 9.3, time: '4d ago', date: '2025-07-23' }, ],
    sentimentData: { positive: 85, neutral: 12, negative: 3 },
    recommendations: ['#StartupLife', '#BehindTheScenes', '#UIUX', '#Design', '#WebDev'],
  }
};

// --- New Competitor Data ---
export const competitorData = {
    '@competitorA': {
        id: 'comp-A', platform: 'twitter', handle: '@competitorA',
        stats: { followers: '15,678', posts: '2,104' },
        recentPosts: [
            { content: 'Just released our quarterly earnings report. Strong growth!', likes: 980, comments: 150 },
            { content: 'We are hiring product managers! #Hiring #PM', likes: 450, comments: 88 },
        ]
    },
    '@competitorB': {
        id: 'comp-B', platform: 'instagram', handle: '@competitorB_official',
        stats: { followers: '250,123', posts: '890' },
        recentPosts: [
            { content: 'Our summer collection just dropped! ☀️', likes: 15000, comments: 1200 },
            { content: 'A day in the life of our CEO. #Leadership', likes: 9800, comments: 550 },
        ]
    }
};

export const mockOptimalTimes = [ { day: 'Sunday', time: '7:00 PM', quality: 'Best' }, { day: 'Monday', time: '8:00 AM', quality: 'Good' }, { day: 'Tuesday', time: '1:00 PM', quality: 'Good' }, { day: 'Wednesday', time: '11:00 AM', quality: 'Best' }, { day: 'Thursday', time: '5:00 PM', quality: 'Okay' }, { day: 'Friday', time: '9:00 AM', quality: 'Best' }, { day: 'Saturday', time: '8:00 PM', quality: 'Good' }, ];

export const getAccountData = (accountId) => allData[accountId] || allData['twitter-123'];

export const getPlatformIcon = (platform, classNames = "w-6 h-6") => {
    switch (platform) {
        case 'twitter': return <Twitter className={`${classNames} text-blue-400`} />;
        case 'instagram': return <Instagram className={`${classNames} text-pink-500`} />;
        case 'facebook': return <Facebook className={`${classNames} text-blue-600`} />;
        default: return null;
    }
};
