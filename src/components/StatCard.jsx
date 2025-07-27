import React from 'react';

const StatCard = ({ icon, title, value, change }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <h3 className="text-lg font-medium text-gray-500">{title}</h3>
      <div className="text-blue-500">{icon}</div>
    </div>
    <div>
      <p className="text-4xl font-bold text-gray-800 mt-2">{value}</p>
      {change && <p className="text-sm text-green-500 mt-1">{change}</p>}
    </div>
  </div>
);
export default StatCard;