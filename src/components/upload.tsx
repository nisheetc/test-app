'use client';

import { useState } from 'react';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { Music4, Video, ImageIcon } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

import { cn } from '@/utils';
import { Card, CardContent } from '@/components/Card';

import { toast } from 'sonner';
import { Button } from './ui/button';

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

const DocumentDescription = {
  document: {
    headline: 'Select a file',
  },
  template: {
    headline: 'Upload Template Document',
  },
};

function megabytesToBytes(megabytes: number) {
  return megabytes * 1000000;
}

type DocumentDropzoneProps = {
  className?: string;
  disabled?: boolean;
  onDrop?: (_file: File) => void | Promise<void>;
  type?: 'document' | 'template';
  [key: string]: unknown;
};

interface UploadProps {
  onSubmit: (formData: FormData) => void;
}

const Upload: React.FC<UploadProps> = ({ onSubmit }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const disabled = false;
  const className = '';
  const props = null;
  const onDrop = (acceptedFile: any) => {
    //
    console.log('acceptedFile', acceptedFile);
    setSelectedFile(acceptedFile);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit(formData);
  };

  return (
    <div className="pb-4">
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
            'py-24 focus-visible:ring-ring ring-offset-background flex flex-1 cursor-pointer flex-col items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 aria-disabled:pointer-events-none aria-disabled:opacity-60',
            className
          )}
          gradient={true}
          degrees={120}
          aria-disabled={disabled}
          {...getRootProps()}
          // {...props}
        >
          <CardContent className="text-muted-foreground/40 flex flex-col items-center justify-center p-6">
            {/* <FilePlus strokeWidth="1px" className="h-16 w-16" /> */}
            <div className="flex">
              <motion.div
                className="border-muted-foreground/20 group-hover:border-documenso/80 dark:bg-muted/80 a z-10 flex aspect-[3/4] w-24 origin-top-right -rotate-[22deg] flex-col items-center justify-center gap-y-1 rounded-lg border bg-white/80 px-2 py-4 backdrop-blur-sm"
                variants={
                  !disabled ? DocumentDropzoneCardLeftVariants : undefined
                }
              >
                <Video
                  strokeWidth="2px"
                  className="text-muted-foreground/20 group-hover:text-documenso h-12 w-12"
                />
              </motion.div>

              <motion.div
                className="border-muted-foreground/20 group-hover:border-documenso/80 dark:bg-muted/80 z-20 flex aspect-[3/4] w-24 flex-col items-center justify-center gap-y-1 rounded-lg border bg-white/80 px-2 py-4 backdrop-blur-sm"
                variants={
                  !disabled ? DocumentDropzoneCardCenterVariants : undefined
                }
              >
                <Music4
                  strokeWidth="2px"
                  className="text-muted-foreground/20 group-hover:text-documenso h-12 w-12"
                />
              </motion.div>

              <motion.div
                className="border-muted-foreground/20 group-hover:border-documenso/80 dark:bg-muted/80 z-10 flex aspect-[3/4] w-24 origin-top-left rotate-[22deg] flex-col items-center justify-center gap-y-1 rounded-lg border bg-white/80 px-2 py-4 backdrop-blur-sm"
                variants={
                  !disabled ? DocumentDropzoneCardRightVariants : undefined
                }
              >
                <ImageIcon
                  strokeWidth="2px"
                  className="text-muted-foreground/20 group-hover:text-documenso h-12 w-12"
                />
              </motion.div>
            </div>

            <input required {...getInputProps()} />

            {selectedFile ? (
              <p className="group-hover:text-foreground text-muted-foreground mt-8 font-medium">
                {selectedFile.name} (File Selected)
              </p>
            ) : (
              <p className="group-hover:text-foreground text-muted-foreground mt-8 font-medium">
                Select a file
              </p>
            )}

            <p className="text-muted-foreground/80 mt-1 text-sm">
              Drag & drop your file here.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      {/* <button
        onClick={handleClick}
        className="px-6 py-2 bg-foreground text-background font-bold rounded-lg hover:opacity-60 ease-out duration-300 transition-opacity"
      >
        Get Originality Score
      </button> */}
    </div>
  );
};

export default Upload;
