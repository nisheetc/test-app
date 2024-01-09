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
  Area,
} from 'recharts';

import { OriginalityScore } from '@/components/analytics/originality-score';
import { SimilarityScore } from '@/components/analytics/similarity-score';
import { ValuationAssessment } from '@/components/analytics/valuation-assessment';

import { SocialSentiment } from '@/components/analytics/social-sentiment';
import { PredictiveModelling } from '@/components/analytics/predictive-modelling';

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

export default function Page() {
  return (
    <div className="flex flex-col px-8 py-4 gap-4">
      <div className="flex flex-wrap grow  gap-4">
        <OriginalityScore />
        <SimilarityScore />
        <ValuationAssessment />
      </div>

      <div className="flex gap-2">
        <PredictiveModelling />
        <SocialSentiment />
      </div>
    </div>
  );
}
