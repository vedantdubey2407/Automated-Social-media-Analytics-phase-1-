import React from 'react';
import { ResponsiveContainer } from 'recharts';

const ChartContainer = ({ title, children }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        {children}
      </ResponsiveContainer>
    </div>
  </div>
);
export default ChartContainer;