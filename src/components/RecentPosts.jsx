import React from 'react';
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';
import { mockPosts, getPlatformIcon } from '../data/mockData';

const RecentPosts = () => (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Posts</h3>
        <div className="space-y-4">
            {mockPosts.slice(0, 3).map(post => ( // Show first 3 recent posts
                <div key={post.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex items-start space-x-4">
                        {getPlatformIcon(post.platform)}
                        <div className="flex-1 min-w-0">
                            <p className="text-gray-700">{post.content}</p>
                            <div className="flex items-center flex-wrap gap-x-6 text-gray-500 mt-2 text-sm">
                                <span className="flex items-center"><ThumbsUp className="w-4 h-4 mr-1.5" /> {post.likes.toLocaleString()}</span>
                                <span className="flex items-center"><MessageSquare className="w-4 h-4 mr-1.5" /> {post.comments.toLocaleString()}</span>
                                <span className="flex items-center"><Share2 className="w-4 h-4 mr-1.5" /> {post.shares.toLocaleString()}</span>
                                <span className="text-xs text-gray-400">{post.time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
export default RecentPosts;
