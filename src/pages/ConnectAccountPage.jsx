import React from 'react';
import { Twitter, Instagram, Facebook, CheckCircle } from 'lucide-react';

const ConnectAccountsPage = ({ connectedAccounts, onConnect }) => {
    const accounts = [
        { id: 'twitter-123', name: 'Twitter / X', platform: 'twitter', description: 'Connect to track tweets, followers, and engagement.' },
        { id: 'instagram-456', name: 'Instagram', platform: 'instagram', description: 'Connect to track posts, stories, and audience growth.' },
        { id: 'facebook-789', name: 'Facebook', platform: 'facebook', description: 'Connect to track page likes, post reach, and more.' },
    ];

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Connect Your Social Accounts</h2>
            <p className="text-gray-500 mb-8">Link your accounts to start tracking your analytics.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accounts.map(acc => {
                    const isConnected = connectedAccounts.includes(acc.id);
                    const isFacebook = acc.platform === 'facebook';
                    return (
                        <div key={acc.id} className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center">
                            {acc.platform === 'twitter' && <Twitter className="w-12 h-12 text-blue-400 mb-4"/>}
                            {acc.platform === 'instagram' && <Instagram className="w-12 h-12 text-pink-500 mb-4"/>}
                            {acc.platform === 'facebook' && <Facebook className="w-12 h-12 text-blue-600 mb-4"/>}
                            <h3 className="text-lg font-semibold text-gray-700">{acc.name}</h3>
                            <p className="text-sm text-gray-500 my-2 flex-grow">{acc.description}</p>
                            
                            {isFacebook ? (
                                <button disabled className="mt-4 w-full bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded-lg cursor-not-allowed">Coming Soon</button>
                            ) : isConnected ? (
                                <div className="mt-4 w-full flex items-center justify-center bg-green-100 text-green-700 font-semibold py-2 px-4 rounded-lg">
                                    <CheckCircle className="w-5 h-5 mr-2" />
                                    Connected
                                </div>
                            ) : (
                                <button onClick={() => onConnect(acc.id)} className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">Connect</button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default ConnectAccountsPage;
