'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from './ui/button';

import { Bell } from 'lucide-react';

export function NotificationsPopover() {
  return (
    <Popover>
      <PopoverTrigger className="relative" asChild>
        <Button variant="outline" size="icon">
          <Bell className="h-[1.2rem] w-[1.2rem]" />

          <div className="absolute -top-1 -right-1 z-50 flex h-3 w-3 items-center justify-center">
            <div className="h-full w-full animate-ping rounded-full bg-green-800 opacity-60"></div>
            <div className="z-60 absolute top-0 right-0 h-full w-full rounded-full bg-green-900 opacity-80"></div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between border-b border-default bg-surface-200 pb-2">
            <p className="text-sm">Notifications</p>
          </div>
          <div className="max-h-[380px] overflow-y-auto">
            <p className="text-sm text-muted-foreground">
              No notifications available.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
