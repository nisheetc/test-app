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

type PlatformScore = {
  platform: string;
  engagementScore: number;
};

type SocialData = {
  overall: number;
  platforms: PlatformScore[];
};

const data: SocialData = {
  overall: 62,
  platforms: [
    {
      platform: 'Spotify',
      engagementScore: 70,
    },
    {
      platform: 'TikTok',
      engagementScore: 55,
    },
    {
      platform: 'Twitter',
      engagementScore: 60,
    },
    {
      platform: 'YouTube',
      engagementScore: 65,
    },
    {
      platform: 'Instagram',
      engagementScore: 58,
    },
  ],
};

export function SocialSentiment() {
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
          <span className="text-foreground font-bold">{data.overall}%</span>
        </span>
      </div>

      <ul className="flex gap-6 items-center pt-2 px-4">
        {data.platforms.map((item: PlatformScore, index) => {
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
