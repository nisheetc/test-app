'use client';

import { FC, HTMLAttributes, useContext } from 'react';
import { cn } from '@/utils';

import { MessagesContext } from './messages';
import MarkdownLite from './markdown-lite';

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {}

const ChatMessages: FC<ChatMessagesProps> = ({ className, ...props }) => {
  const { messages } = useContext(MessagesContext);
  const inverseMessages = [...messages].reverse();

  return (
    <div
      {...props}
      className={cn(
        'h-[400px] flex flex-col-reverse gap-3 overflow-y-auto visible-scrollbar',
        className
      )}
    >
      {inverseMessages.map((message) => (
        <div className="chat-message" key={`${message.id}-${message.id}`}>
          <div
            className={cn('flex items-end', {
              'justify-end': message.isUserMessage,
            })}
          >
            <div
              className={cn(
                'flex flex-col space-y-2 text-sm max-w-xs overflow-x-hidden',
                {
                  'order-1 items-end': message.isUserMessage,
                  'order-2 items-start': !message.isUserMessage,
                }
              )}
            >
              <p
                className={cn('px-4 py-2 rounded-lg', {
                  'bg-primary text-primary-foreground': message.isUserMessage,
                  'bg-muted': !message.isUserMessage,
                })}
              >
                <MarkdownLite text={message.text} />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
