'use client';

import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ModeToggle } from '@/components';
import { CommandMenu } from '@/components/command-menu';
import { Logo, LogoType } from '@/components/icons';
import { NotificationsPopover } from '@/components/notifications-popover';
import { Button } from '@/components/ui/button';
import { InboxIcon } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between px-6">
      <Link href="/dashboard/tracks" className="flex items-center">
        <LogoType className="h-16 w-52" />
        {/* <Logo className="h-16" />
        <span className="text-2xl font-semibold tracking-wider">
          CreateBase
        </span> */}
      </Link>

      <div className="flex flex-1 items-center justify-between space-x-3 md:justify-end">
        <div className="w-full flex-1 md:w-auto md:flex-none">
          <CommandMenu />
        </div>

        <ModeToggle />

        <NotificationsPopover />

        <Button variant="outline" size="icon">
          <InboxIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-60 transition-opacity duration-300 ease-out">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://i.imgur.com/TvlWjSy.jpg"
                  className="object-cover"
                />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Taylor S.</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56"
            align="end"
            sideOffset={10}
            // alignOffset={20}
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
