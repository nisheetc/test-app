'use client';

import { OriginalityScore } from '@/components/analytics/originality-score';
import { SimilarityScore } from '@/components/analytics/similarity-score';
import { ValuationAssessment } from '@/components/analytics/valuation-assessment';

import { SocialSentiment } from '@/components/analytics/social-sentiment';
import { PredictiveModelling } from '@/components/analytics/predictive-modelling';
import { SpectralAnalysis } from '@/components/analytics/spectral-analysis';
import { FileMusicIcon } from 'lucide-react';
import { TrackMetadata } from '@/components/analytics/track-metadata';

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

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 px-8 py-4 border-b">
        <FileMusicIcon className="h-5 w-5 text-muted-foreground/20 group-hover:text-[#adfa1d]/80 transition-colors duration-300 ease-out" />

        <span>Track Analytics</span>
      </div>

      <div className="flex flex-wrap grow px-6 gap-4">
        {/* <TrackMetadata /> */}
        <OriginalityScore />
        <SimilarityScore />
        <ValuationAssessment />
      </div>

      <div className="flex px-6 gap-4">
        <SpectralAnalysis />
        <PredictiveModelling />
      </div>

      <div className="flex px-6 gap-4 pb-6">
        <SocialSentiment />
      </div>
    </div>
  );
}
