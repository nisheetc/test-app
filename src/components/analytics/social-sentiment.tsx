'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/Card';
import { CountingNumbers } from '../counting-numbers';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';

import { motion } from 'framer-motion';

interface PlatformData {
  platform: string;
  engagementScore: number;
}

interface SocialData {
  overall: number;
  platforms: PlatformData[];
}

export function SocialSentiment() {
  const searchParams = useSearchParams();

  const [socialData, setSocialData] = useState<SocialData>({
    overall: 0,
    platforms: [
      { platform: 'Spotify', engagementScore: 0 },
      { platform: 'TikTok', engagementScore: 0 },
      { platform: 'Twitter', engagementScore: 0 },
      { platform: 'YouTube', engagementScore: 0 },
      { platform: 'Instagram', engagementScore: 0 },
    ],
  });

  useEffect(() => {
    const computeSocialScores = (isHitTrack = false) => {
      const platforms = [
        {
          platform: 'Spotify',
          engagementScore: isHitTrack
            ? Math.floor(Math.random() * 20 + 60)
            : Math.floor(Math.random() * 30 + 40),
        }, // For Spotify, regular tracks have a range of 40-70, while hit tracks have a range of 60-80
        {
          platform: 'TikTok',
          engagementScore: isHitTrack
            ? Math.floor(Math.random() * 30 + 50)
            : Math.floor(Math.random() * 40 + 40),
        }, // For TikTok, regular tracks have a range of 40-80, while hit tracks have a range of 50-80
        {
          platform: 'Twitter',
          engagementScore: isHitTrack
            ? Math.floor(Math.random() * 25 + 55)
            : Math.floor(Math.random() * 40 + 30),
        }, // For Twitter, regular tracks have a range of 30-70, while hit tracks have a range of 55-80
        {
          platform: 'YouTube',
          engagementScore: isHitTrack
            ? Math.floor(Math.random() * 20 + 60)
            : Math.floor(Math.random() * 35 + 40),
        }, // For YouTube, regular tracks have a range of 40-75, while hit tracks have a range of 60-80
        {
          platform: 'Instagram',
          engagementScore: isHitTrack
            ? Math.floor(Math.random() * 20 + 60)
            : Math.floor(Math.random() * 40 + 30),
        }, // For Instagram, regular tracks have a range of 30-70, while hit tracks have a range of 60-80
      ];

      // Compute overall score as an average of platform scores
      const overall =
        platforms.reduce((acc, platform) => acc + platform.engagementScore, 0) /
        platforms.length;

      setSocialData({
        overall: Math.floor(overall),
        platforms,
      });
    };

    const isHitTrack = searchParams.get('hit') === 'true';
    computeSocialScores(isHitTrack);
  }, []);

  return (
    <Card
      spotlight
      className="relative w-min h-min flex flex-col gap-4 rounded-xl px-4 pt-4 pb-10"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium text-foreground">
          Social Sentiment Overview
        </h1>
        <span className="text-muted-foreground text-sm">
          Overall score:{' '}
          <span className="text-foreground font-bold">
            {socialData.overall}%
          </span>
        </span>
      </div>

      <ul className="flex gap-6 items-center pt-2 px-4">
        {socialData.platforms.map((item: PlatformData, index) => {
          const decimalScore = item.engagementScore / 100;

          return (
            <li key={index} className="flex flex-col items-center">
              <div className="relative h-[100px] w-[100px]">
                <motion.svg
                  className="absolute inset-0 m-auto dark:text-[#adfa1d] text-[#7103ec]"
                  viewBox="0 0 100 100"
                  width={100}
                  height={100}
                >
                  <defs>
                    <linearGradient
                      id="strokeGradient3"
                      gradientUnits="objectBoundingBox"
                      x2="0"
                      y2="1"
                    >
                      <stop stopColor="transparent" offset="0%" />
                      {/* <stop stopColor="transparent" offset="50%" /> */}
                      <stop stopColor="currentColor" offset="100%" />
                    </linearGradient>
                  </defs>
                  <motion.circle
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: decimalScore }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 2, ease: 'easeOut' }}
                    strokeWidth={7}
                    strokeDasharray="0 1"
                    // strokeLinecap="round"
                    transform="rotate(-180 50 50)"
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="url(#strokeGradient3)"
                  />
                </motion.svg>
                <CountingNumbers
                  value={item.engagementScore}
                  duration={1000}
                  className="absolute inset-0 mx-auto flex items-center justify-center font-display text-2xl font-medium dark:text-[#adfa1d] text-[#7103ec]"
                />
              </div>
              <span className="text-sm">{item.platform}</span>
            </li>
          );
        })}
      </ul>

      <Dialog>
        <DialogTrigger asChild className="absolute bottom-2 right-2">
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="pt-8">
          <DialogHeader>
            <DialogTitle>Social Sentiment Analysis</DialogTitle>
            <DialogDescription className="leading-6 pt-5">
              Social Sentiment Analysis offers a comprehensive view of a
              track&apos;s reception across platforms like TikTok, Spotify, and
              general media. For larger collections, this tool provides an
              aggregated score out of 100, reflecting the public&apos;s
              emotional response and engagement. It is crucial for gauging
              audience perception, shaping marketing strategies, and predicting
              the longevity of a track&apos;s popularity.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
