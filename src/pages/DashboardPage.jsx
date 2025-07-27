import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { User, ThumbsUp, Eye } from 'lucide-react';
import StatCard from '../components/StatCard';
import ChartContainer from '../components/ChartContainer';
import RecentPosts from '../components/RecentPosts';
import { mockStats, mockFollowerData, mockEngagementData } from '../data/mockData';

const DashboardPage = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <StatCard icon={<User className="w-8 h-8"/>} title="Total Followers" value={mockStats.followers} change="+2.5% this month" />
      <StatCard icon={<ThumbsUp className="w-8 h-8"/>} title="Total Engagement" value="48.2k" change="+10.1% this month" />
      <StatCard icon={<Eye className="w-8 h-8"/>} title="Total Impressions" value="1.2M" change="+5.8% this month" />
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      <ChartContainer title="Follower Growth">
        <LineChart data={mockFollowerData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0"/>
          <XAxis dataKey="name" tick={{fill: '#6b7280'}} axisLine={{stroke: '#d1d5db'}} tickLine={{stroke: '#d1d5db'}}/>
          <YAxis tick={{fill: '#6b7280'}} axisLine={{stroke: '#d1d5db'}} tickLine={{stroke: '#d1d5db'}}/>
          <Tooltip contentStyle={{backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'}}/>
          <Legend />
          <Line type="monotone" dataKey="followers" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
        </LineChart>
      </ChartContainer>
      <ChartContainer title="Engagement by Post">
        <BarChart data={mockEngagementData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0"/>
          <XAxis dataKey="name" tick={{fill: '#6b7280'}} axisLine={{stroke: '#d1d5db'}} tickLine={{stroke: '#d1d5db'}}/>
          <YAxis tick={{fill: '#6b7280'}} axisLine={{stroke: '#d1d5db'}} tickLine={{stroke: '#d1d5db'}}/>
          <Tooltip contentStyle={{backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'}}/>
          <Legend />
          <Bar dataKey="likes" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="comments" fill="#818cf8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </div>
    
    <RecentPosts />
  </div>
);
export default DashboardPage;