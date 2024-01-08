import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Card } from '@/components/Card';

// Sample data for the portfolio
const portfolioData = [
  {
    trackId: 'track1',
    title: 'Summer Vibes',
    artist: 'DJ Sunshine',
    score: 85,
  },
  {
    trackId: 'track2',
    title: 'Night Drive',
    artist: 'The Night Owls',
    score: 78,
  },
  {
    trackId: 'track3',
    title: 'Rainy Moods',
    artist: 'Melancholic Beats',
    score: 65,
  },
  { trackId: 'track4', title: 'Euphoria', artist: 'Elevate', score: 92 },
  {
    trackId: 'track5',
    title: 'Jazz in Paris',
    artist: 'Smooth Jazz Band',
    score: 75,
  },
  // Additional tracks can be added here
];

// Define the selected track ID for demonstration
const selectedTrackId = 'track2';

export const PortfolioRank = () => {
  return (
    <Card
      className="relative flex flex-col gap-2 rounded-xl px-4 pt-4 pb-1"
      spotlight
      style={{ width: 500, height: 250 }}
    >
      <h1 className="text-lg font-medium">Portfolio Rank</h1>
      <div className="portfolio-rank-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={portfolioData}>
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="score" fill="#8884d8">
              {portfolioData.map((entry) => (
                <Cell
                  key={entry.trackId}
                  fill={
                    entry.trackId === selectedTrackId ? '#82ca9d' : '#8884d8'
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default PortfolioRank;
