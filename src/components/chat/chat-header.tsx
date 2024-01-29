import { FC } from 'react';

import {
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog';
import { Logo } from '../icons';

const ChatHeader: FC = () => {
  return (
    <DialogHeader>
      <DialogTitle>
        <div className="flex gap-1.5 items-center">
          <Logo className="h-4 w-4" />
          <p className="font-medium">DAVE</p>
        </div>
      </DialogTitle>
      <DialogDescription>
        Ask anything regarding metrics or otherwise.
      </DialogDescription>
    </DialogHeader>
  );
};

export default ChatHeader;
