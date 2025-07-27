import React from 'react';

const DateRangePicker = ({ activeRange, setActiveRange }) => {
  const ranges = ["7D", "30D", "90D", "1Y"];
  return (
    <div className="flex items-center bg-white rounded-lg shadow-sm p-1">
      {ranges.map(range => (
        <button
          key={range}
          onClick={() => setActiveRange(range)}
          className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
            activeRange === range 
              ? 'bg-blue-500 text-white shadow' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {range}
        </button>
      ))}
    </div>
  );
};
export default DateRangePicker;
