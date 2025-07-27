import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const ConnectAccountsPage = () => (
    <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Connect Your Social Accounts</h2>
        <p className="text-gray-500 mb-8">Link your accounts to start tracking your analytics. More platforms coming soon!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center">
                <Twitter className="w-12 h-12 text-blue-400 mb-4"/>
                <h3 className="text-lg font-semibold text-gray-700">Twitter / X</h3>
                <p className="text-sm text-gray-500 my-2">Connect to track tweets, followers, and engagement.</p>
                <button onClick={() => console.log('Connecting to Twitter...')} className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">Connect</button>
            </div>
             <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center">
                <Instagram className="w-12 h-12 text-pink-500 mb-4"/>
                <h3 className="text-lg font-semibold text-gray-700">Instagram</h3>
                <p className="text-sm text-gray-500 my-2">Connect to track posts, stories, and audience growth.</p>
                <button className="mt-4 w-full bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded-lg cursor-not-allowed">Coming Soon</button>
            </div>
             <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center">
                <Facebook className="w-12 h-12 text-blue-600 mb-4"/>
                <h3 className="text-lg font-semibold text-gray-700">Facebook</h3>
                <p className="text-sm text-gray-500 my-2">Connect to track page likes, post reach, and more.</p>
                <button className="mt-4 w-full bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded-lg cursor-not-allowed">Coming Soon</button>
            </div>
        </div>
    </div>
);
export default ConnectAccountsPage;