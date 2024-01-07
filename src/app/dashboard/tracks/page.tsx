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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as ChartTooltip,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  LineChart,
  Tooltip as LineTooltip,
  Line,
} from 'recharts';

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

const data = [
  { subject: 'Melodic Innovation', A: 80 },
  { subject: 'Harmonic Complexity', A: 70 },
  { subject: 'Rhythmic Originality', A: 60 },
  { subject: 'Instrumental Arrangement', A: 75 },
  { subject: 'Lyrical Originality', A: 85 },
  { subject: 'Production Techniques', A: 90 },
  { subject: 'Structural Innovation', A: 65 },
  { subject: 'Genre Fusion', A: 80 },
];

const similarityData = [
  { name: 'Rhythm & Beat Similarity', value: 70 },
  { name: 'Melodic Similarity', value: 60 },
  { name: 'Harmonic Similarities', value: 80 },
  { name: 'Vocal Style and Delivery', value: 50 },
  { name: 'Lyrical Themes', value: 65 },
  { name: 'Instrumentation', value: 75 },
  { name: 'Production Style', value: 55 },
  { name: 'Ambience and Mood', value: 85 },
];

const colors = [
  '#ff4d4f',
  '#ff7a45',
  '#ffa940',
  '#ffc53d',
  '#ffec3d',
  '#bae637',
  '#73d13d',
  '#36cfc9',
  '#40a9ff',
  '#597ef7',
  '#9254de',
  '#f759ab',
];

const valuationData = [
  { time: 'Jan', value: 200 },
  { time: 'Feb', value: 210 },
  { time: 'Mar', value: 220 },
  { time: 'Apr', value: 230 },
  { time: 'May', value: 240 },
  { time: 'Jun', value: 250 },
  // ... add more data points as needed
];

export default function Tracks() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
    setIsDrawerOpen(true); // Open the drawer
  };

  const [goal, setGoal] = useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

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

        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger>End.</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-xl text-center">
                Originality & Valuation Analytics
              </DrawerTitle>
            </DrawerHeader>

            <div className="w-full grid grid-cols-3 justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={600}
                  height={300}
                  data={similarityData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="value" barSize={20}>
                    {similarityData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              <div className="p-4 pb-0 h-[600px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart
                    cx={300}
                    cy={250}
                    outerRadius={150}
                    width={500}
                    height={500}
                    data={data}
                  >
                    <defs>
                      <linearGradient
                        id="colorGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#adfa1d" stopOpacity={1} />
                        <stop
                          offset="100%"
                          stopColor="#adfa1d"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <PolarGrid opacity={0.8} />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fontSize: '14px', fill: 'currentColor' }}
                    />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Music"
                      dataKey="A"
                      // stroke="#8884d8"
                      // strokeOpacity={0.5}
                      fill="url(#colorGradient)"
                      // fillOpacity={0.8}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* <div>here</div> */}

              <div className="p-4 w-full">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={valuationData}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <LineTooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-center mt-2">Valuation Trend</p>
              </div>
            </div>

            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline" className="w-full">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
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
