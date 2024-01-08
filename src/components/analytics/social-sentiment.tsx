import { Card } from '@/components/Card';
import { CountingNumbers } from '../counting-numbers';

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
      className="relative w-min h-min flex flex-col gap-4 rounded-xl px-4 pt-4 pb-6"
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
                  className="absolute inset-0 m-auto"
                  viewBox="0 0 100 100"
                  width={100}
                  height={100}
                >
                  <defs>
                    <linearGradient
                      id="strokeGradient"
                      gradientUnits="objectBoundingBox"
                      x2="0"
                      y2="1"
                    >
                      <stop stopColor="transparent" offset="0%" />
                      {/* <stop stopColor="transparent" offset="50%" /> */}
                      <stop stopColor="#adfa1d" offset="100%" />
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
                    stroke="url(#strokeGradient)"
                  />
                </motion.svg>
                <CountingNumbers
                  value={item.engagementScore}
                  duration={1000}
                  className="absolute inset-0 mx-auto flex items-center justify-center font-display text-2xl font-medium text-[#adfa1d]"
                />
              </div>
              <span className="text-sm">{item.platform}</span>
            </li>
          );
        })}
      </ul>

      <button className="absolute bottom-2 right-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted">
        ...
      </button>
    </Card>
  );
}
