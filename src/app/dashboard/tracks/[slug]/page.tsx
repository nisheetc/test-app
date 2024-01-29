'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

import { OriginalityScore } from '@/components/analytics/originality-score';
import { SimilarityScore } from '@/components/analytics/similarity-score';
import { ValuationAssessment } from '@/components/analytics/valuation-assessment';

import { SocialSentiment } from '@/components/analytics/social-sentiment';
import { PredictiveModelling } from '@/components/analytics/predictive-modelling';
import { SpectralAnalysis } from '@/components/analytics/spectral-analysis';
import { FileMusicIcon } from 'lucide-react';
import { TrackMetadata } from '@/components/analytics/track-metadata';

import tracksData from '@/config/tracks.json';
import { Track } from '@/lib/validations/track';
import Chat from '@/components/chat/chat';

const fetchTrackData = async (isrcCode: string) => {
  const response = await fetch('/src/config/tracks.json');
  const tracks = await response.json();
  return tracks.find((track: Track) => track.isrcCode === isrcCode);
};

export default function Page() {
  const searchParams = useSearchParams();
  const isrcCode = searchParams.get('isrc');
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    if (isrcCode) {
      const foundTrack: Track | undefined = tracksData.find(
        (t: Track) => t.isrcCode === isrcCode
      );
      if (foundTrack) {
        setTrack(foundTrack);
      }
    }
  }, [isrcCode]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-4 px-8 py-4 border-b">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FileMusicIcon className="h-5 w-5 text-muted-foreground/20 group-hover:text-[#adfa1d]/80 transition-colors duration-300 ease-out" />
            <span className="truncate">Track Analytics</span>
          </div>
          -{' '}
          <div className="flex items-center gap-1">
            <span className="truncate text-ellipsis">{track?.title}</span>
            <div className="flex items-center gap-1">
              (<span className="italic">{track?.artist}</span>)
            </div>
          </div>
        </div>

        <Chat />
      </div>

      <div className="flex flex-wrap grow px-6 gap-4 pb-6">
        <TrackMetadata track={track} />
        <OriginalityScore />
        <SimilarityScore />
        <ValuationAssessment />
        <SpectralAnalysis />
        <PredictiveModelling />
        <SocialSentiment />
      </div>

      {/* <div className="flex px-6 gap-4"></div>

      <div className="flex px-6 gap-4 pb-6"></div> */}
    </div>
  );
}
