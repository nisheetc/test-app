'use client';

import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { Music4, Video, ImageIcon } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

import { cn } from '@/utils';
import { Card, CardContent } from '@/components/Card';

const DocumentDropzoneContainerVariants: Variants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1,
  },
  hover: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const DocumentDropzoneCardLeftVariants: Variants = {
  initial: {
    x: 40,
    y: -10,
    rotate: -14,
  },
  animate: {
    x: 40,
    y: -10,
    rotate: -14,
  },
  hover: {
    x: -25,
    y: -25,
    rotate: -22,
  },
};

const DocumentDropzoneCardRightVariants: Variants = {
  initial: {
    x: -40,
    y: -10,
    rotate: 14,
  },
  animate: {
    x: -40,
    y: -10,
    rotate: 14,
  },
  hover: {
    x: 25,
    y: -25,
    rotate: 22,
  },
};

const DocumentDropzoneCardCenterVariants: Variants = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 0,
    y: 0,
  },
  hover: {
    x: 0,
    y: -25,
  },
};

function megabytesToBytes(megabytes: number) {
  return megabytes * 1000000;
}

type FileDropzoneProps = {
  className?: string;
  disabled?: boolean;
  onDrop?: (_file: File) => void | Promise<void>;
  type?: 'audio' | 'any';
  [key: string]: unknown;
};

export const FileDropzone = ({
  className,
  onDrop,
  disabled,
  type = 'audio',
  ...props
}: FileDropzoneProps) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'audio/*': ['.mp3', '.wav', '.aac', '.ogg', '.flac'],
    },
    multiple: false,
    disabled,
    onDrop: ([acceptedFile]) => {
      if (acceptedFile && onDrop) {
        void onDrop(acceptedFile);
      }
    },
    maxSize: megabytesToBytes(50),
  });

  return (
    <motion.div
      className={cn(
        'flex aria-disabled:cursor-not-allowed w-full max-w-2xl',
        className
      )}
      variants={DocumentDropzoneContainerVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      aria-disabled={disabled}
    >
      <Card
        role="button"
        className={cn(
          'py-12 focus-visible:ring-ring ring-offset-background flex flex-1 cursor-pointer flex-col items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 aria-disabled:pointer-events-none aria-disabled:opacity-60 border-dashed border-[1.5px]',
          className
        )}
        gradient={true}
        degrees={120}
        aria-disabled={disabled}
        {...getRootProps()}
        {...props}
      >
        <CardContent className="text-muted-foreground/40 flex flex-col items-center justify-center p-6">
          <div className="flex">
            <motion.div
              className="border-muted-foreground/20 group-hover:border-[#adfa1d]/60 dark:bg-muted/80 a z-10 flex aspect-[3/4] w-20 origin-top-right -rotate-[22deg] flex-col items-center justify-center gap-y-1 rounded-lg border bg-white/80 px-2 py-4 backdrop-blur-sm"
              variants={
                !disabled ? DocumentDropzoneCardLeftVariants : undefined
              }
            >
              <Video
                strokeWidth="2px"
                className="text-muted-foreground/20 group-hover:text-[#adfa1d]/80 h-10 w-10 transition-colors duration-300 ease-out"
              />
            </motion.div>

            <motion.div
              className="border-muted-foreground/20 group-hover:border-[#adfa1d]/60 dark:bg-muted/80 z-20 flex aspect-[3/4] w-20 flex-col items-center justify-center gap-y-1 rounded-lg border bg-white/80 px-2 py-4 backdrop-blur-sm"
              variants={
                !disabled ? DocumentDropzoneCardCenterVariants : undefined
              }
            >
              <Music4
                strokeWidth="2px"
                className="text-muted-foreground/20 group-hover:text-[#adfa1d]/80 h-10 w-10 transition-colors duration-300 ease-out"
              />
            </motion.div>

            <motion.div
              className="border-muted-foreground/20 group-hover:border-[#adfa1d]/60 dark:bg-muted/80 z-10 flex aspect-[3/4] w-20 origin-top-left rotate-[22deg] flex-col items-center justify-center gap-y-1 rounded-lg border bg-white/80 px-2 py-4 backdrop-blur-sm"
              variants={
                !disabled ? DocumentDropzoneCardRightVariants : undefined
              }
            >
              <ImageIcon
                strokeWidth="2px"
                className="text-muted-foreground/20 group-hover:text-[#adfa1d]/80 h-10 w-10 transition-colors duration-300 ease-out"
              />
            </motion.div>
          </div>

          <input required {...getInputProps()} />

          <p className="group-hover:text-foreground text-muted-foreground mt-8 font-medium">
            Select a file
          </p>

          <p className="text-muted-foreground/80 mt-1 text-sm">
            Drag & drop your file here.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
