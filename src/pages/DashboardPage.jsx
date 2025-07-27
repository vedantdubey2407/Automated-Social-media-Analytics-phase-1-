import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';
import { Users, ThumbsUp, Eye } from 'lucide-react';
import StatCard from '../components/StatCard';
import ChartContainer from '../components/ChartContainer';
import BestPerformingPosts from '../components/BestPerformingPosts';
import SentimentAnalysis from '../components/SentimentAnalysis';
import OptimalPostingTimes from '../components/OptimalPostingTimes';
import ContentRecommendations from '../components/ContentRecommendations'; // New import
import { subDays, addDays, format, parseISO } from 'date-fns';

const DashboardPage = ({ account, dateRange }) => {
  const { stats, followerData, posts, sentimentData, forecastData, recommendations } = account;

  const processChartData = () => {
    // Combine historical and forecast data
    const combined = followerData.map(d => ({ date: parseISO(d.date), followers: d.followers }));
    forecastData.forEach(d => {
        const existing = combined.find(c => c.date.getTime() === parseISO(d.date).getTime());
        if (existing) {
            existing.forecast = d.forecast;
        } else {
            combined.push({ date: parseISO(d.date), forecast: d.forecast });
        }
    });

    // Sort by date
    combined.sort((a, b) => a.date - b.date);
    
    // Format name for chart
    return combined.map(d => ({ ...d, name: format(d.date, 'MMM d') }));
  };
  
  const chartData = processChartData();

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard icon={<Users className="w-8 h-8"/>} title="Total Followers" value={stats.followers} change="+2.5%" />
        <StatCard icon={<ThumbsUp className="w-8 h-8"/>} title="Total Engagement" value="48.2k" change="+10.1%" />
        <StatCard icon={<Eye className="w-8 h-8"/>} title="Total Impressions" value="1.2M" change="+5.8%" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <ChartContainer title="Follower Growth & Forecast">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0"/>
              <XAxis dataKey="name" tick={{fill: '#6b7280'}}/>
              <YAxis tick={{fill: '#6b7280'}} domain={['dataMin - 200', 'dataMax + 200']}/>
              <Tooltip contentStyle={{backgroundColor: 'white', borderRadius: '0.75rem'}}/>
              <Legend />
              <Line type="monotone" dataKey="followers" stroke="#3b82f6" strokeWidth={2} dot={false} name="Followers" />
              <Line type="monotone" dataKey="forecast" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Forecast" />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
        
        <SentimentAnalysis sentimentData={sentimentData} />
      </div>
      
      <ContentRecommendations recommendations={recommendations} />
      <OptimalPostingTimes />
      <BestPerformingPosts posts={posts} />
    </div>
  );
};
export default DashboardPage;