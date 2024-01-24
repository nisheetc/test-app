import Image from 'next/image';

import { Card } from '@/components/Card';

import { Track } from '@/config/schema';
import { Fragment } from 'react';

interface TrackMetadataProps {
  track: Track | null;
}

export function TrackMetadata({ track }: TrackMetadataProps) {
  return (
    <Card spotlight className="rounded-xl">
      {track && (
        <div className="flex flex-row-reverse gap-6 px-4 pt-4 pb-4 h-full">
          <div className="flex items-center gap-2 h-full">
            <div className="relative h-40 w-40 rounded-xl overflow-hidden">
              {track && (
                <Image
                  alt={track?.title}
                  layout="fill"
                  src={track?.imageUrl}
                  className="object-cover"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-lg font-medium">{track?.album}</span>
            {/* <div className="flex flex-col justify-between">
              <span className="text-xs text-muted-foreground">Artist</span>
              <span className="text-sm font-medium">{track?.artist}</span>
            </div> */}

            <div className="flex flex-col justify-between">
              <span className="text-xs text-muted-foreground">Key</span>
              <span className="text-sm font-medium">{track?.key ?? '-'}</span>
            </div>

            <div className="flex flex-col justify-between">
              <span className="text-xs text-muted-foreground">BPM</span>
              <span className="text-sm font-medium">{track?.bpm ?? '-'}</span>
            </div>

            <div className="flex flex-col justify-between">
              <span className="text-xs text-muted-foreground">ISRC Code</span>
              <span className="text-sm font-medium">
                {track?.isrcCode ?? '-'}
              </span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
