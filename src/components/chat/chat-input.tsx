'use client';

import { FC, HTMLAttributes, useContext, useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import TextareaAutosize from 'react-textarea-autosize';
import { nanoid } from 'nanoid';

import { MessagesContext } from './messages';
import { Message } from '@/lib/validations/message';

import { CornerDownLeft, Loader2 } from 'lucide-react';

import { toast } from 'sonner';

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [input, setInput] = useState<string>('');
  const {
    messages,
    addMessage,
    removeMessage,
    updateMessage,
    setIsMessageUpdating,
  } = useContext(MessagesContext);

  const { mutate: sendMessage, isPending } = useMutation({
    mutationKey: ['sendMessage'],
    // include message to later use it in onMutate
    mutationFn: async (_message: Message) => {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      });

      return response.body;
    },
    onMutate(message) {
      addMessage(message);
    },
    onSuccess: async (stream) => {
      if (!stream) throw new Error('No stream');

      // construct new message to add
      const id = nanoid();
      const responseMessage: Message = {
        id,
        isUserMessage: false,
        text: '',
      };

      // add new message to state
      addMessage(responseMessage);

      setIsMessageUpdating(true);

      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        updateMessage(id, (prev) => prev + chunkValue);
      }

      // clean up
      setIsMessageUpdating(false);
      setInput('');

      setTimeout(() => {
        textareaRef.current?.focus();
      }, 10);
    },
    onError: (_, message) => {
      toast.error('Something went wrong. Please try again.');
      removeMessage(message.id);
      textareaRef.current?.focus();
    },
  });

  return (
    <div className={className}>
      <div className="relative flex-1 overflow-hidden rounded-lg border-none outline-none">
        <TextareaAutosize
          ref={textareaRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey && input.length !== 0) {
              e.preventDefault();

              const message: Message = {
                id: nanoid(),
                isUserMessage: true,
                text: input,
              };

              sendMessage(message);
            }
          }}
          rows={2}
          maxRows={3}
          value={input}
          autoFocus
          disabled={isPending}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a message..."
          className="peer pr-8 flex w-full rounded-md border border-input bg-transparent pl-3 py-2 text-sm shadow-sm transition-colors resize-none placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 scrollbar-thumb visible-scrollbar scrollbar-thumb-rounded scrollbar-track scrolling-touch"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-2">
          <kbd className="inline-flex items-center rounded border border-border px-1">
            {isPending ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
              <CornerDownLeft className="w-3 h-3" />
            )}
          </kbd>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
