'use client';

import { Card } from '@/components/Card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  Bar,
  BarChart,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

import { motion } from 'framer-motion';
import { CountingNumbers } from '@/components/counting-numbers';
import { OriginalityScore } from '@/components/analytics/originality-score';
import { SimilarityScore } from '@/components/analytics/similarity-score';
import { ValuationAssessment } from '@/components/analytics/valuation-assessment';

const data = [
  { date: '2023-01-01', trackValuation: 500000, marketMedian: 700000 },
  { date: '2023-02-01', trackValuation: 550000, marketMedian: 720000 },
  { date: '2023-03-01', trackValuation: 580000, marketMedian: 740000 },
  { date: '2023-04-01', trackValuation: 610000, marketMedian: 760000 },
  { date: '2023-05-01', trackValuation: 640000, marketMedian: 780000 },
  { date: '2023-06-01', trackValuation: 670000, marketMedian: 800000 },
  { date: '2023-07-01', trackValuation: 700000, marketMedian: 820000 },
  { date: '2023-08-01', trackValuation: 730000, marketMedian: 840000 },
  { date: '2023-09-01', trackValuation: 760000, marketMedian: 860000 },
  { date: '2023-10-01', trackValuation: 790000, marketMedian: 880000 },
  { date: '2023-11-01', trackValuation: 820000, marketMedian: 900000 },
  { date: '2023-12-01', trackValuation: 850000, marketMedian: 920000 },
];

const specData = [
  {
    frequency: '20Hz',
    trackIntensity: 60,
    genreBenchmark: 70,
    marketMedian: 65,
    dynamicRange: 10,
    transientDetail: 15,
    harmonicContent: 20,
  },
  {
    frequency: '100Hz',
    trackIntensity: 80,
    genreBenchmark: 75,
    marketMedian: 70,
    dynamicRange: 12,
    transientDetail: 18,
    harmonicContent: 25,
  },
  {
    frequency: '500Hz',
    trackIntensity: 90,
    genreBenchmark: 85,
    marketMedian: 80,
    dynamicRange: 15,
    transientDetail: 20,
    harmonicContent: 30,
  },
  {
    frequency: '1kHz',
    trackIntensity: 85,
    genreBenchmark: 90,
    marketMedian: 75,
    dynamicRange: 13,
    transientDetail: 17,
    harmonicContent: 28,
  },
  {
    frequency: '5kHz',
    trackIntensity: 75,
    genreBenchmark: 80,
    marketMedian: 70,
    dynamicRange: 11,
    transientDetail: 16,
    harmonicContent: 24,
  },
  {
    frequency: '10kHz',
    trackIntensity: 65,
    genreBenchmark: 70,
    marketMedian: 60,
    dynamicRange: 9,
    transientDetail: 14,
    harmonicContent: 22,
  },
  {
    frequency: '20kHz',
    trackIntensity: 55,
    genreBenchmark: 60,
    marketMedian: 50,
    dynamicRange: 8,
    transientDetail: 12,
    harmonicContent: 18,
  },
];

const SpectralWaveform = () => {
  return (
    <Card style={{ width: 500, height: 300 }}>
      <h1 className="text-lg font-bold">Spectral waveform</h1>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="frequency" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="dynamicRange"
            stroke="#8884d8"
            fillOpacity={0.3}
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="transientDetail"
            stroke="#ffa500"
            fillOpacity={0.3}
            fill="#ffa500"
          />
          <Area
            type="monotone"
            dataKey="harmonicContent"
            stroke="#800080"
            fillOpacity={0.3}
            fill="#800080"
          />
          <Line type="monotone" dataKey="trackIntensity" stroke="#0000FF" />
          <Line
            type="monotone"
            dataKey="genreBenchmark"
            stroke="#008000"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="marketMedian"
            stroke="#FF0000"
            strokeDasharray="3 3"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

const PredictiveModeling = () => {
  // Mock data for predictive modeling
  const data = [
    {
      date: '2024-01',
      hitPercentage: 30,
      marketTraction: 40,
      socialSentiment: 35,
    },
    {
      date: '2024-02',
      hitPercentage: 35,
      marketTraction: 45,
      socialSentiment: 40,
    },
    {
      date: '2024-03',
      hitPercentage: 40,
      marketTraction: 50,
      socialSentiment: 45,
    },
    {
      date: '2024-04',
      hitPercentage: 45,
      marketTraction: 55,
      socialSentiment: 50,
    },
    {
      date: '2024-05',
      hitPercentage: 50,
      marketTraction: 60,
      socialSentiment: 55,
    },
    {
      date: '2024-06',
      hitPercentage: 55,
      marketTraction: 65,
      socialSentiment: 60,
    },
    {
      date: '2024-07',
      hitPercentage: 60,
      marketTraction: 70,
      socialSentiment: 65,
    },
    // More data points could be added
  ];

  return (
    <Card style={{ width: 500, height: 300 }}>
      <h1 className="text-lg font-bold">Predictive modelling</h1>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="marketTraction"
            stroke="#8884d8"
            fillOpacity={0.3}
            fill="#8884d8"
          />
          <Line type="monotone" dataKey="hitPercentage" stroke="#0000FF" />
          <Line
            type="monotone"
            dataKey="socialSentiment"
            stroke="#FF0000"
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

const SocialSentimentAnalysis = () => {
  // Mock data for social sentiment analysis
  const data = [
    { name: 'TikTok', sentimentScore: 75 },
    { name: 'Spotify', sentimentScore: 85 },
    { name: 'General Media', sentimentScore: 70 },
    // Additional platforms can be added
  ];

  return (
    <Card style={{ width: 500, height: 300 }}>
      <h1 className="text-lg font-bold">Social Sentimental Analysis</h1>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="sentimentScore" fill="#82ca9d" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

const OriginalityFactors = () => {
  // Mock data for originality factors
  const data = [
    { subject: 'Melodic Uniqueness', score: 80 },
    { subject: 'Harmonic Complexity', score: 70 },
    { subject: 'Rhythmic Innovation', score: 75 },
    { subject: 'Lyric Analysis', score: 85 },
    { subject: 'Instrumental Innovation', score: 90 },
  ];

  return (
    <Card style={{ width: 500, height: 300 }}>
      <h1 className="text-lg font-bold">Originality Factors</h1>
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name="Originality"
            dataKey="score"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default function Page() {
  return (
    <div className="flex flex-wrap grow px-8 py-4 gap-4">
      <OriginalityScore />
      <SimilarityScore />
      <ValuationAssessment />

      {/* <SpectralWaveform />

      <Card
        className="flex flex-col gap-4 rounded-xl px-8 py-4"
        spotlight
        degrees={360}
      >
        <h1 className="text-lg font-bold">Portfolio Rank</h1>
        <div className="flex items-center justify-center rounded-full border-2 h-44 w-44">
          <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            3
          </span>
        </div>

        <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          ...
        </button>
      </Card>

      <PredictiveModeling />

      <SocialSentimentAnalysis />

      <OriginalityFactors /> */}
    </div>
  );
}
