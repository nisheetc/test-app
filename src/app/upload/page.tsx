'use client';

import { MaxWidthWrapper } from '@/components';
import { UploadFile } from '@/components/upload/upload-file';

export default function Upload() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center grow pt-20 gap-8">
      <UploadFile />
    </MaxWidthWrapper>
  );
}
