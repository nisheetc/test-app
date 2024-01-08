'use client';

import { useEffect, useState } from 'react';

import { FileMusicIcon } from 'lucide-react';
import { Cross2Icon } from '@radix-ui/react-icons';

import { Progress } from '@/components/ui/progress';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { FileDropzone } from '@/components/file-dropzone';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from './ui/button';
import ScoreLoader from './score-loader';

const analysisPhrases = [
  'Analyzing Melodic Patterns',
  'Assessing Harmonic Structures',
  'Evaluating Rhythmic Complexity',
  'Inspecting Instrumental Arrangement',
  'Deciphering Lyrical Originality',
  'Examining Production Techniques',
  'Unraveling Structural Innovations',
  'Identifying Genre Fusion Elements',
  'Comparing Rhythm and Beat Patterns',
  'Matching Melodic Signatures',
  'Cross-Referencing Harmonic Similarities',
  'Analyzing Vocal Styles and Delivery',
  'Exploring Thematic Lyrical Elements',
  'Investigating Instrumentation Usage',
  'Reviewing Production Styles',
  'Assessing Ambience and Mood',
  'Completed',
];

interface UploadProgressProps {
  file: File;
  onRemove: () => void;
  onComplete: () => void;
}

const UploadProgress: React.FC<UploadProgressProps> = ({
  file,
  onRemove,
  onComplete,
}) => {
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
    <div className="relative flex flex-col gap-2 mt-2 bg-muted dark:bg-muted/30 px-4 py-2 rounded-xl overflow-hidden">
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
};

export function AudioTrackManager() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState<boolean>(false);
  const [isUploadComplete, setIsUploadComplete] = useState<boolean>(false);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const handleFileDrop = (_file: File) => {
    setIsUploadComplete(false);
    setFile(_file);
  };

  const handleUploadComplete = () => {
    setIsUploadComplete(true);
  };

  const handleRemove = () => {
    setFile(null);
    setIsUploadComplete(false);
  };

  const handleCancel = () => {
    setIsUploadOpen(false);
    handleRemove();
    setIsCalculating(false);
  };

  useEffect(() => {
    if (!isCalculating) return;

    const timer = setTimeout(() => {
      handleCancel();
      setIsSheetOpen(true);
    }, 17000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCalculating]);

  return (
    <>
      <AlertDialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
        <AlertDialogTrigger asChild>
          <Button onClick={() => setIsUploadOpen(true)}>New Track</Button>
        </AlertDialogTrigger>

        <AlertDialogContent className="sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="pt-4 pb-2 text-2xl font-semibold tracking-tight text-center">
              {isCalculating ? 'Computing values' : 'Add your track'}
            </AlertDialogTitle>
          </AlertDialogHeader>

          {isCalculating ? (
            <>
              <div className="flex flex-col items-center justify-center gap-16 pt-16">
                <div className="lds-roller">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <ScoreLoader phrases={analysisPhrases} />
              </div>
            </>
          ) : (
            <>
              <FileDropzone
                onDrop={handleFileDrop}
                type="audio"
                disabled={!isUploadOpen}
              />

              {file && (
                <UploadProgress
                  file={file}
                  onRemove={handleRemove}
                  onComplete={handleUploadComplete}
                />
              )}
            </>
          )}

          <AlertDialogFooter className="grid grid-cols-2 gap-2 pt-2">
            <AlertDialogCancel asChild onClick={handleCancel}>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </AlertDialogCancel>

            <Button
              type="button"
              disabled={!isUploadComplete || isCalculating}
              onClick={() => setIsCalculating(true)}
            >
              {isCalculating ? 'Please wait...' : 'Calculate Score'}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent className="w-[1500px]">
          <SheetHeader>
            <SheetTitle>Coming soon...</SheetTitle>
            <SheetDescription>Final scoring will be here.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
