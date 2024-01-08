import { Card } from '@/components/Card';
import { CountingNumbers } from '../counting-numbers';

import { motion } from 'framer-motion';

export function OriginalityScore() {
  return (
    <Card
      className="relative flex flex-col gap-2 rounded-xl px-4 pt-4 pb-1"
      spotlight
      degrees={360}
    >
      <h1 className="text-lg font-medium">Originality score</h1>

      <div className="flex gap-2">
        <div className="flex flex-col gap-4 pt-2">
          <div className="flex flex-col gap-[1px]">
            <span className="text-xs text-muted-foreground">
              Trend Compatibility
            </span>

            <CountingNumbers
              value={80}
              duration={1000}
              className="text-sm font-medium"
            />
          </div>

          <div className="flex flex-col gap-[1px]">
            <span className="text-xs text-muted-foreground">
              Creative Index
            </span>

            <CountingNumbers
              value={65}
              duration={1000}
              className="text-sm font-medium"
            />
          </div>

          <div className="flex flex-col gap-[1px]">
            <span className="text-xs text-muted-foreground">
              Engagement Forecast
            </span>

            <CountingNumbers
              value={75}
              duration={1000}
              className="text-sm font-medium"
            />
          </div>
        </div>

        <div className="relative h-44 w-44">
          <motion.svg
            className="absolute inset-0 m-auto dark:text-[#adfa1d] text-[#7103ec]"
            viewBox="0 0 100 100"
            width={140}
            height={140}
          >
            <defs>
              <linearGradient
                id="strokeGradient1"
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
              animate={{ pathLength: 0.55 }}
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
              stroke="url(#strokeGradient1)"
            />
          </motion.svg>
          <CountingNumbers
            value={55}
            duration={1000}
            className="absolute inset-0 mx-auto flex items-center justify-center font-display text-4xl font-medium dark:text-[#adfa1d] text-[#7103ec]"
          />
        </div>
      </div>

      <button className="absolute bottom-2 right-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted">
        ...
      </button>
    </Card>
  );
}
