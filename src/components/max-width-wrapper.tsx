import { cn } from '@/utils';
import { ReactNode } from 'react';

export function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-2xl px-8 md:px-16 lg:px-20',
        className
      )}
    >
      {children}
    </div>
  );
}
