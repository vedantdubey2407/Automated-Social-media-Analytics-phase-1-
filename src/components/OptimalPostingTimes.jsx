import React from 'react';
import { Clock, Star } from 'lucide-react';
import { mockOptimalTimes } from '../data/mockData';

const OptimalPostingTimes = () => {
  const getQualityClass = (quality) => {
    switch (quality) {
      case 'Best': return 'bg-green-100 text-green-800';
      case 'Good': return 'bg-blue-100 text-blue-800';
      case 'Okay': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <Clock className="w-6 h-6 mr-3 text-purple-500" />
        Optimal Posting Times
      </h3>
      <p className="text-gray-500 mb-4 text-sm">Based on your audience's historical engagement patterns.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {mockOptimalTimes.map(item => (
          <div key={item.day} className="text-center p-3 rounded-lg bg-gray-50 border">
            <p className="font-semibold text-gray-700">{item.day}</p>
            <p className="text-lg font-bold text-purple-600 my-1">{item.time}</p>
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${getQualityClass(item.quality)}`}>
              {item.quality}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OptimalPostingTimes;