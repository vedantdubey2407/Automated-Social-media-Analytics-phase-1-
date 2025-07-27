import React from 'react';
import { getPlatformIcon } from '../data/mockData';
import { TrendingUp, ThumbsUp, MessageSquare } from 'lucide-react';

const BestPerformingPosts = ({ posts }) => {
  const bestPosts = [...posts].sort((a, b) => b.engagementRate - a.engagementRate).slice(0, 3);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <TrendingUp className="w-6 h-6 mr-3 text-green-500" />
        Top Performing Content
      </h3>
      <div className="space-y-4">
        {bestPosts.map((post, index) => (
          <div key={post.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-2xl font-bold text-gray-300">{index + 1}</div>
            {getPlatformIcon(post.platform, "w-10 h-10")}
            <div className="flex-1 min-w-0">
              <p className="text-gray-700 truncate">{post.content}</p>
              <div className="flex items-center flex-wrap gap-x-4 text-gray-500 mt-1 text-sm">
                <span className="font-bold text-green-500">{post.engagementRate}% Eng. Rate</span>
                <span className="flex items-center"><ThumbsUp className="w-4 h-4 mr-1" /> {post.likes.toLocaleString()}</span>
                <span className="flex items-center"><MessageSquare className="w-4 h-4 mr-1" /> {post.comments.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BestPerformingPosts;