import Image from 'next/image';

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

export default function Tracks() {
  return (
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

        <Button>New Track</Button>
      </div>

      <Input type="search" placeholder="Search" />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Display</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Main Artists</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tracks.map((track, index) => (
            <TableRow key={index}>
              <TableCell>{index}</TableCell>
              <TableCell>{track.title}</TableCell>
              <TableCell>{track.duration}</TableCell>
              <TableCell>{track.artist}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const tracks = [
  {
    title: 'Bullshit',
    duration: '4:11',
    artist: 'The Pharcyde',
  },
  {
    title: 'Pharcyde',
    duration: '4:22',
    artist: 'The Pharcyde',
  },
  {
    title: 'The Bodyguard',
    duration: '5:13',
    artist: 'The Pharcyde',
  },
  {
    title: 'The Dark Side of the Moon',
    duration: '4:56',
    artist: 'The Pharcyde',
  },
  {
    title: 'Their Greatest Hits (1971–1975)',
    duration: '5:16',
    artist: 'The Pharcyde',
  },
  {
    title: 'Bat Out of Hell',
    duration: '2:59',
    artist: 'The Pharcyde',
  },
  {
    title: 'Legend',
    duration: '3:31',
    artist: 'The Pharcyde',
  },
  {
    title: 'Born in the U.S.A.',
    duration: '0:52',
    artist: 'The Pharcyde',
  },
  {
    title: 'Greatest Hits',
    duration: '5:35',
    artist: 'The Pharcyde',
  },
  { title: '21', duration: '4:56', artist: 'The Pharcyde' },
  {
    title: 'Purple Rain [Soundtrack]',
    duration: '3:55',
    artist: 'The Pharcyde',
  },
  {
    title: 'Slippery When Wet',
    duration: '5:05',
    artist: 'The Pharcyde',
  },
  {
    title: 'Appetite For Destruction',
    duration: '0:42',
    artist: 'The Pharcyde',
  },
  {
    title: 'The Joshua Tree',
    duration: '2:44',
    artist: 'The Pharcyde',
  },
  {
    title: 'Metallica',
    duration: '5:35',
    artist: 'The Pharcyde',
  },
];
