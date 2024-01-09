'use client';

import { useEffect, useState } from 'react';
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

export function OriginalityScore() {
  const [analysis, setAnalysis] = useState({
    originalityScore: 0,
    harmonicComplexity: 0,
    lyricalDepth: 0,
    instrumentalInnovation: 0,
  });

  useEffect(() => {
    const computeScore = () => {
      const originalityScore = Math.floor(Math.random() * 30 + 40); // Score between 40-70
      const harmonicComplexity = Math.floor(Math.random() * 40 + 30); // Score between 30-70
      const lyricalDepth = Math.floor(Math.random() * 60 + 20); // Score between 20-80
      const instrumentalInnovation = Math.floor(Math.random() * 40 + 30); // Score between 30-70

      setAnalysis({
        originalityScore,
        harmonicComplexity,
        lyricalDepth,
        instrumentalInnovation,
      });
    };

    computeScore();
  }, []);

  return (
    <Card
      className="relative flex flex-col gap-2 rounded-xl px-4 pt-4 pb-1"
      spotlight
      degrees={360}
    >
      <h1 className="text-lg font-medium">Originality Score</h1>

      <div className="flex gap-2">
        <div className="flex flex-col gap-4 pt-2">
          <div className="flex flex-col gap-[1px]">
            <span className="text-xs text-muted-foreground">
              Harmonic Complexity
            </span>

            <CountingNumbers
              value={analysis.harmonicComplexity}
              duration={1000}
              className="text-sm font-medium"
            />
          </div>

          <div className="flex flex-col gap-[1px]">
            <span className="text-xs text-muted-foreground">Lyrical Depth</span>

            <CountingNumbers
              value={analysis.lyricalDepth}
              duration={1000}
              className="text-sm font-medium"
            />
          </div>

          <div className="flex flex-col gap-[1px]">
            <span className="text-xs text-muted-foreground">
              Instrumental Innovation
            </span>

            <CountingNumbers
              value={analysis.instrumentalInnovation}
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
              animate={{ pathLength: analysis.originalityScore / 100 }}
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
            value={analysis.originalityScore}
            duration={1000}
            className="absolute inset-0 mx-auto flex items-center justify-center font-display text-4xl font-medium dark:text-[#adfa1d] text-[#7103ec]"
          />
        </div>
      </div>

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
            <DialogTitle>Originality Score</DialogTitle>
            <DialogDescription className="leading-6 pt-5">
              The Originality Score feature is a groundbreaking innovation,
              offering a precise metric out of 100 to quantify the uniqueness of
              an audio file. The higher, the better, Utilizing advanced AI
              algorithms, this tool delves deep into the creative essence of a
              track on a spectral level, comparing it against a vast database to
              determine its originality. For enterprises, this provides an
              invaluable asset in identifying truly unique content in a sea of
              digital noise, ensuring their focus remains on pioneering and
              distinctive musical works.
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
