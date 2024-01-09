'use client';

import { useState, useEffect } from 'react';
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

export function SimilarityScore() {
  const [analysis, setAnalysis] = useState({
    similarityScore: 0,
    genreAlignment: 0,
    melodicSimilarity: 0,
    rhythmicSimilarity: 0,
  });

  useEffect(() => {
    const computeScore = () => {
      const similarityScore = Math.floor(Math.random() * 40 + 20); // Score between 20-60
      const genreAlignment = Math.floor(Math.random() * 40 + 40); // Score between 40-80
      const melodicSimilarity = Math.floor(Math.random() * 40 + 30); // Score between 30-70
      const rhythmicSimilarity = Math.floor(Math.random() * 40 + 30); // Score between 30-70

      setAnalysis({
        similarityScore,
        genreAlignment,
        melodicSimilarity,
        rhythmicSimilarity,
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
      <h1 className="text-lg font-medium">Similarity Score</h1>

      <div className="flex gap-2">
        <div className="flex flex-col gap-4 pt-2">
          <div className="flex flex-col gap-[1px]">
            <span className="text-xs text-muted-foreground">
              Genre Alignment
            </span>

            <CountingNumbers
              value={analysis.genreAlignment}
              duration={1000}
              className="text-sm font-medium"
            />
          </div>

          <div className="flex flex-col gap-[1px]">
            <span className="text-xs text-muted-foreground">
              Melodic Similarity
            </span>

            <CountingNumbers
              value={analysis.melodicSimilarity}
              duration={1000}
              className="text-sm font-medium"
            />
          </div>

          <div className="flex flex-col gap-[1px]">
            <span className="text-xs text-muted-foreground">
              Rhythmic Similarity
            </span>

            <CountingNumbers
              value={analysis.rhythmicSimilarity}
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
                id="strokeGradient2"
                gradientUnits="objectBoundingBox"
                x2="0"
                y2="1"
              >
                <stop stopColor="transparent" offset="0%" />
                <stop stopColor="currentColor" offset="100%" />
              </linearGradient>
            </defs>
            <motion.circle
              initial={{ pathLength: 0 }}
              animate={{ pathLength: analysis.similarityScore / 100 }}
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
              stroke="url(#strokeGradient2)"
            />
          </motion.svg>
          <CountingNumbers
            value={analysis.similarityScore}
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
            <DialogTitle>Similarity Score</DialogTitle>
            <DialogDescription className="leading-6 pt-5">
              Our Similarity Score, rated out of 100, offers enterprises an
              essential tool for mitigating the risk of copyright infringement.
              The lower, the better! By calculating the similarity of an audio
              file to existing works, it ensures that large entities can
              maintain the integrity of their creative portfolios. This is
              particularly crucial in today’s digital landscape, where the line
              between inspiration and imitation can be thin, providing a
              reliable measure to safeguard original content.
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
