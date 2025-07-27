import React from 'react';
import { Lightbulb } from 'lucide-react';

const ContentRecommendations = ({ recommendations }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <Lightbulb className="w-6 h-6 mr-3 text-yellow-500" />
        Content Recommendations
      </h3>
      <p className="text-gray-500 mb-4 text-sm">Use these trending hashtags to increase your reach.</p>
      <div className="flex flex-wrap gap-3">
        {recommendations.map((tag, index) => (
          <div 
            key={index} 
            className="bg-yellow-50 text-yellow-800 font-semibold px-4 py-2 rounded-full cursor-pointer hover:bg-yellow-100 transition-colors"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ContentRecommendations;