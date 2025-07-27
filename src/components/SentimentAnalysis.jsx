import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartContainer from './ChartContainer'; // Assuming ChartContainer is in the same directory or imported correctly

const SentimentAnalysis = ({ sentimentData }) => {
    const data = [
        { name: 'Positive', value: sentimentData.positive },
        { name: 'Neutral', value: sentimentData.neutral },
        { name: 'Negative', value: sentimentData.negative },
    ];
    const COLORS = ['#10B981', '#F59E0B', '#EF4444']; // Green, Amber, Red

    const CustomLegend = ({ payload }) => (
        <div className="flex justify-center space-x-4 sm:space-x-6 mt-4">
            {payload.map((entry, index) => (
                <div key={`item-${index}`} className="flex items-center text-sm">
                    <div className="w-3 h-3 rounded-full mr-2" style={{backgroundColor: entry.color}}></div>
                    <span className="text-gray-600">{entry.value} ({data[index].value}%)</span>
                </div>
            ))}
        </div>
    );

    return (
        <ChartContainer title="Comment Sentiment">
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Tooltip 
                        contentStyle={{
                            backgroundColor: 'white', 
                            borderRadius: '0.75rem', 
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                        }}
                    />
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius="80%"
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend content={<CustomLegend />} verticalAlign="bottom" />
                </PieChart>
            </ResponsiveContainer>
        </ChartContainer>
    );
};
export default SentimentAnalysis;