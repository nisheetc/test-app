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
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
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
