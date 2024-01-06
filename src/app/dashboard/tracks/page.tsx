'use client';

import Image from 'next/image';

import { Timer, Music2 } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Upload from '@/components/upload';
import ScoreLoader from '@/components/score-loader';
import { cn } from '@/utils';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const analysisPhrases = [
  'Analyzing Melodic Patterns',
  'Assessing Harmonic Structures',
  'Evaluating Rhythmic Complexity',
  'Inspecting Instrumental Arrangement',
  'Deciphering Lyrical Originality',
  'Examining Production Techniques',
  'Unraveling Structural Innovations',
  'Identifying Genre Fusion Elements',
  'Comparing Rhythm and Beat Patterns',
  'Matching Melodic Signatures',
  'Cross-Referencing Harmonic Similarities',
  'Analyzing Vocal Styles and Delivery',
  'Exploring Thematic Lyrical Elements',
  'Investigating Instrumentation Usage',
  'Reviewing Production Styles',
  'Assessing Ambience and Mood',
  'Completed',
];

export default function Tracks() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    await simulateProcessing();
  };

  const simulateProcessing = async () => {
    setIsSubmitting(true);

    // Simulate a task taking 16 seconds
    await new Promise((resolve) => setTimeout(resolve, 17000));

    setIsSubmitting(false);
    setIsDialogOpen(false); // This will close the dialog
  };

  return (
    <div className="flex flex-col grow">
      <div className="flex items-center gap-2 px-8 py-4 border-b">
        <Music2 className="h-5 w-5" /> <span>List of Tracks</span>
      </div>

      <div className="flex flex-col gap-4 px-6 py-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <span className="font-medium text-sm">{tracks.length} tracks</span>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Actions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Action 1</SelectItem>
                <SelectItem value="dark">Action 2</SelectItem>
                <SelectItem value="system">Action 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* <Dialog>
            <DialogTrigger asChild>
              <Button>New Track</Button>
            </DialogTrigger>
            <DialogContent>
              <Upload />
            </DialogContent>
          </Dialog> */}

          <Dialog>
            <DialogTrigger asChild>
              <Button onClick={() => setIsDialogOpen(true)}>New Track</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              {isSubmitting ? (
                <>
                  <DialogHeader>
                    <DialogTitle>Calculating Originality Score</DialogTitle>
                  </DialogHeader>

                  <div className="flex flex-col items-center justify-center gap-16 pt-16">
                    <div className="lds-roller">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <ScoreLoader phrases={analysisPhrases} />
                  </div>
                </>
              ) : (
                <>
                  <DialogHeader>
                    <DialogTitle>Upload</DialogTitle>
                    <DialogDescription>
                      We will never store your data.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleFormSubmit}>
                    <Upload onSubmit={handleFormSubmit} />
                    <DialogFooter className="grid grid-cols-2 gap-2">
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          Close
                        </Button>
                      </DialogClose>
                      <Button type="submit">Calculate</Button>
                    </DialogFooter>
                  </form>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>

        <Input type="search" placeholder="Search" />

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ART.</TableHead>
              <TableHead>Track Title</TableHead>
              <TableHead>Artist Name</TableHead>
              <TableHead>Album Name</TableHead>
              <TableHead className="w-[100px]">
                <Timer className="h-4 w-4" />
              </TableHead>
              <TableHead className="w-[100px]">Year</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tracks.map((track, index) => (
              <TooltipProvider key={index}>
                <ContextMenu>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <ContextMenuTrigger asChild>
                        <TableRow>
                          <TableCell>
                            <div className="relative h-12 w-12 rounded-xl overflow-hidden">
                              <Image
                                alt={track.title}
                                layout="fill"
                                src={track.imageUrl}
                                className="object-cover"
                              />
                            </div>
                          </TableCell>
                          <TableCell className="text-ellipsis overflow-hidden">
                            {track.title}
                          </TableCell>
                          <TableCell>{track.artist}</TableCell>
                          <TableCell>{track.album}</TableCell>
                          <TableCell>{track.duration}</TableCell>
                          <TableCell>{track.yearPublished}</TableCell>
                        </TableRow>
                      </ContextMenuTrigger>
                    </TooltipTrigger>
                    <ContextMenuContent className="w-64">
                      <ContextMenuItem inset>
                        Open
                        <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                      </ContextMenuItem>
                      <ContextMenuItem inset disabled>
                        Edit
                        <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                      </ContextMenuItem>
                      <ContextMenuItem inset>
                        Reload
                        <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                      </ContextMenuItem>
                      <ContextMenuSub>
                        <ContextMenuSubTrigger inset>
                          More Tools
                        </ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-48">
                          <ContextMenuItem>
                            Save Page As...
                            <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                          </ContextMenuItem>
                          <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                          <ContextMenuItem>Name Window...</ContextMenuItem>
                          <ContextMenuSeparator />
                          <ContextMenuItem>Developer Tools</ContextMenuItem>
                        </ContextMenuSubContent>
                      </ContextMenuSub>
                      <ContextMenuSeparator />
                      <ContextMenuCheckboxItem checked>
                        Show Bookmarks Bar
                        <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                      </ContextMenuCheckboxItem>
                      <ContextMenuCheckboxItem>
                        Show Full URLs
                      </ContextMenuCheckboxItem>
                      <ContextMenuSeparator />
                      <ContextMenuRadioGroup value="pedro">
                        <ContextMenuLabel inset>People</ContextMenuLabel>
                        <ContextMenuSeparator />
                        <ContextMenuRadioItem value="pedro">
                          Pedro Duarte
                        </ContextMenuRadioItem>
                        <ContextMenuRadioItem value="delete">
                          Delete
                        </ContextMenuRadioItem>
                      </ContextMenuRadioGroup>
                    </ContextMenuContent>
                    <TooltipContent className="flex flex-col gap-2">
                      <p className="font-medium">
                        Originality: {track.originality}%
                      </p>
                      <span>Valuation: {track.valuation}</span>
                    </TooltipContent>
                  </Tooltip>
                </ContextMenu>
              </TooltipProvider>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const tracks = [
  {
    imageUrl: 'https://i.imgur.com/MHwee14.jpg',
    title: 'Bad Blood',
    artist: 'Taylor Swift',
    album: 'Deluxe',
    duration: '3:31',
    yearPublished: '1989',
    valuation: 75,
    originality: 8,
  },
  {
    imageUrl: 'https://i.imgur.com/MHwee14.jpg',
    title: 'Love Me Enough (feat. Monica & Keyshia Cole)',
    artist: 'Nicki Minaj, Monica, Keyshia Cole',
    album: 'Pink Friday 2 (Gag City Deluxe)',
    duration: '3:51',
    yearPublished: '2023',
    valuation: 80,
    originality: 7,
  },
  {
    imageUrl: 'https://i.imgur.com/Gpvu8O3.jpg',
    title: 'Grown Woman',
    artist: 'Beyonce',
    album: 'Grown Woman',
    duration: '5:10',
    yearPublished: '2013',
    valuation: 80,
    originality: 7,
  },
  {
    imageUrl: 'https://i.imgur.com/RvDsQIX.jpg',
    title: 'Rise Up',
    artist: 'Sum 41',
    album: 'Rise Up',
    duration: '3:16',
    yearPublished: '2023',
    valuation: 70,
    originality: 6,
  },
  {
    imageUrl: 'https://i.imgur.com/uh1Vexs.jpg',
    title: 'Not My Fault (with Megan Thee Stallion)',
    artist: 'Renee Rapp, Megan Thee Stallion',
    album: 'Not My Fault (with Megan Thee Stallion)',
    duration: '2:50',
    yearPublished: '2023',
    valuation: 90,
    originality: 9,
  },
  {
    imageUrl: 'https://i.imgur.com/DxnClQt.jpg',
    title: 'Crazy',
    artist: 'Lil Baby',
    album: 'Crazy',
    duration: '3:12',
    yearPublished: '2023',
    valuation: 85,
    originality: 8,
  },
  {
    imageUrl: 'https://i.imgur.com/DxnClQt.jpg',
    title: 'Crazy',
    artist: 'Lil Baby',
    album: 'Crazy',
    duration: '3:12',
    yearPublished: '2023',
    valuation: 85,
    originality: 8,
  },

  /////

  // {
  //   title: 'Bat Out of Hell',
  //   duration: '2:59',
  //   artist: 'The Pharcyde',
  //   valuation: 78,
  //   originality: 7,
  // },
  // {
  //   title: 'Legend',
  //   duration: '3:31',
  //   artist: 'The Pharcyde',
  //   valuation: 82,
  //   originality: 8,
  // },
  // {
  //   title: 'Born in the U.S.A.',
  //   duration: '0:52',
  //   artist: 'The Pharcyde',
  //   valuation: 88,
  //   originality: 9,
  // },
  // {
  //   title: 'Greatest Hits',
  //   duration: '5:35',
  //   artist: 'The Pharcyde',
  //   valuation: 77,
  //   originality: 6,
  // },
  // {
  //   title: '21',
  //   duration: '4:56',
  //   artist: 'The Pharcyde',
  //   valuation: 83,
  //   originality: 7,
  // },
  // {
  //   title: 'Purple Rain [Soundtrack]',
  //   duration: '3:55',
  //   artist: 'The Pharcyde',
  //   valuation: 85,
  //   originality: 9,
  // },
  // {
  //   title: 'Slippery When Wet',
  //   duration: '5:05',
  //   artist: 'The Pharcyde',
  //   valuation: 75,
  //   originality: 7,
  // },
  // {
  //   title: 'Appetite For Destruction',
  //   duration: '0:42',
  //   artist: 'The Pharcyde',
  //   valuation: 80,
  //   originality: 8,
  // },
  // {
  //   title: 'The Joshua Tree',
  //   duration: '2:44',
  //   artist: 'The Pharcyde',
  //   valuation: 90,
  //   originality: 9,
  // },
  // {
  //   title: 'Metallica',
  //   duration: '5:35',
  //   artist: 'The Pharcyde',
  //   valuation: 92,
  //   originality: 9,
  // },
];
