'use client';

import { FC } from 'react';
import ChatInput from './chat-input';
import ChatMessages from './chat-messages';
import ChatHeader from './chat-header';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

import { Logo } from '../icons';

const Chat: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Logo className="h-5 w-5" />
          <span>Chat with DAVE</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <ChatHeader />

        <Separator />

        <ChatMessages className="pl-2 pr-4 flex-1" />

        <Separator />

        <DialogFooter>
          <ChatInput className="w-full" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Chat;
