'use client';

import { useEffect, useState } from 'react';

import { FileMusicIcon } from 'lucide-react';
import { Cross2Icon } from '@radix-ui/react-icons';

import { Progress } from '@/components/ui/progress';

interface UploadProgressProps {
  file: File;
  onRemove: () => void;
  onComplete: () => void;
}

export function UploadProgress({
  file,
  onRemove,
  onComplete,
}: UploadProgressProps) {
  const [progress, setProgress] = useState(0);
  const fileSize = (file.size / 1024 / 1024).toFixed(2);

  useEffect(() => {
    setProgress(8);

    const timer1 = setTimeout(() => {
      setProgress(20);

      const timer2 = setTimeout(() => {
        setProgress(100);
        onComplete();
      }, 400);

      return () => clearTimeout(timer2);
    }, 500);

    return () => clearTimeout(timer1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const handleRemove = () => {
    onRemove();
    setProgress(0);
  };

  return (
    <div className="relative flex flex-col gap-2 mt-4 sm:mt-2 bg-muted dark:bg-muted/30 mx-4 sm:mx-0 px-4 py-2 rounded-xl overflow-hidden">
      <button
        type="button"
        aria-label="remove-file"
        onClick={handleRemove}
        className="absolute top-0 right-0 p-2 rounded-tr-xl group"
      >
        <Cross2Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300 ease-out" />
      </button>

      <div className="flex items-center gap-2">
        <div className="border-muted-foreground/20 dark:bg-muted/80 flex h-10 w-10 flex-col items-center justify-center gap-y-1 rounded-lg border bg-white/80 backdrop-blur-sm shrink-0">
          <FileMusicIcon
            strokeWidth="2px"
            className="text-muted-foreground/20 group-hover:text-[#adfa1d]/80 h-5 w-5 transition-colors duration-300 ease-out"
          />
        </div>

        <div className="flex flex-col w-full max-w-[280px]">
          <span className="truncate text-ellipsis">{file.name}</span>
          <span className="text-xs text-muted-foreground">{fileSize} MB</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Progress value={progress} />
        <span className="text-xs text-muted-foreground">{progress}%</span>
      </div>
    </div>
  );
}
