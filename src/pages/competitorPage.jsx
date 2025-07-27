import React, { useState } from 'react';
import { Users, ThumbsUp, MessageSquare, Plus, X } from 'lucide-react';
import { competitorData, getPlatformIcon } from '../data/mockData';

const CompetitorCard = ({ data }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
                {getPlatformIcon(data.platform, "w-10 h-10")}
                <div>
                    <h3 className="text-xl font-bold text-gray-800">{data.handle}</h3>
                    <p className="text-gray-500 capitalize">{data.platform}</p>
                </div>
            </div>
            <button className="text-gray-400 hover:text-red-500"><X className="w-5 h-5"/></button>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Followers</p>
                <p className="text-2xl font-bold text-gray-800">{data.stats.followers}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Posts</p>
                <p className="text-2xl font-bold text-gray-800">{data.stats.posts}</p>
            </div>
        </div>
        <div>
            <h4 className="font-semibold text-gray-600 mb-2">Recent Posts</h4>
            <div className="space-y-3">
                {data.recentPosts.map((post, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-700 text-sm mb-2">{post.content}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span className="flex items-center"><ThumbsUp className="w-3 h-3 mr-1"/>{post.likes.toLocaleString()}</span>
                            <span className="flex items-center"><MessageSquare className="w-3 h-3 mr-1"/>{post.comments.toLocaleString()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const CompetitorPage = ({ trackedCompetitors, onAddCompetitor }) => {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');

    const handleAdd = () => {
        if (competitorData[inputValue]) {
            onAddCompetitor(inputValue);
            setMessage(`Successfully added ${inputValue}!`);
            setInputValue('');
        } else {
            setMessage(`Competitor '${inputValue}' not found. Try @competitorA or @competitorB.`);
        }
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Track Competitors</h2>
                <p className="text-gray-500 mt-1">Add a competitor's handle to start monitoring their public performance.</p>
                <div className="mt-4 flex gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="@competitorA"
                        className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button onClick={handleAdd} className="flex items-center bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600">
                        <Plus className="w-5 h-5 mr-2" /> Add
                    </button>
                </div>
                {message && <p className="text-sm text-green-600 mt-2">{message}</p>}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {trackedCompetitors.map(handle => (
                    <CompetitorCard key={handle} data={competitorData[handle]} />
                ))}
            </div>
        </div>
    );
};

export default CompetitorPage;
