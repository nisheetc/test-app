'use client';

import { useState } from 'react';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Button } from '../ui/button';
import { FileDropzone } from './file-dropzone';
import { UploadProgress } from './upload-progress';

import useMediaQuery from '@/hooks/use-media-query';

export function UploadFile() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState<boolean>(false);
  const [isUploadComplete, setIsUploadComplete] = useState<boolean>(false);

  const { isMobile } = useMediaQuery();

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
  };

  return (
    <>
      <Button onClick={() => setIsUploadOpen(true)}>New Track</Button>

      {isMobile ? (
        <Drawer
          open={isUploadOpen}
          onOpenChange={setIsUploadOpen}
          onClose={handleCancel}
        >
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Upload audio file</DrawerTitle>
                <DrawerDescription>
                  File size must be less than 10MB.
                </DrawerDescription>
              </DrawerHeader>

              <FileDropzone
                onDrop={handleFileDrop}
                type="audio"
                // disabled={!isUploadOpen}
              />

              {file && (
                <UploadProgress
                  file={file}
                  onRemove={handleRemove}
                  onComplete={handleUploadComplete}
                />
              )}

              <DrawerFooter>
                <Button disabled>Continue</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      ) : (
        <AlertDialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
          <AlertDialogContent className="sm:max-w-md">
            <AlertDialogHeader>
              <AlertDialogTitle className="pt-4 pb-2 text-2xl font-semibold tracking-tight text-center">
                Upload audio file
              </AlertDialogTitle>
            </AlertDialogHeader>

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

            <AlertDialogFooter className="grid grid-cols-2 gap-2 pt-2">
              <AlertDialogCancel asChild onClick={handleCancel}>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </AlertDialogCancel>

              <Button disabled>Continue</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
