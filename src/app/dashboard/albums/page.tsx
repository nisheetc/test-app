import Image from 'next/image';

import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const albums = [
  {
    title: 'Thriller',
    artist: 'Michael Jackson',
    imageUrl: 'https://i.imgur.com/ljPy3JJ.png',
  },
  {
    title: 'Back in Black',
    artist: 'AC/DC',
    imageUrl: 'https://i.imgur.com/0hS86u4.png',
  },
  {
    title: 'The Bodyguard',
    artist: 'Whitney Houston / Various Artists',
    imageUrl: 'https://i.imgur.com/wC9PKOu.png',
  },
  {
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    imageUrl: 'https://i.imgur.com/SxslVgu.jpg',
  },
  {
    title: 'Their Greatest Hits (1971–1975)',
    artist: 'Eagles',
    imageUrl: 'https://i.imgur.com/hsA8wSc.jpg',
  },
  {
    title: 'Bat Out of Hell',
    artist: 'Meat Loaf',
    imageUrl: 'https://i.imgur.com/4t01baz.jpg',
  },
  {
    title: 'Legend',
    artist: 'Bob Marley & The Wailers',
    imageUrl: 'https://i.imgur.com/jhGqNUk.jpg',
  },
  {
    title: 'Born in the U.S.A.',
    artist: 'Bruce Springsteen',
    imageUrl: 'https://i.imgur.com/4bjLnHG.jpg',
  },
  {
    title: 'Greatest Hits',
    artist: 'Journey',
    imageUrl: 'https://i.imgur.com/eX2MKcO.jpg',
  },
  { title: '21', artist: 'Adele', imageUrl: 'https://i.imgur.com/IeeUq8g.png' },
  {
    title: 'Purple Rain [Soundtrack]',
    artist: 'Prince & The Revolution',
    imageUrl: 'https://i.imgur.com/pwC72VI.jpg',
  },
  {
    title: 'Slippery When Wet',
    artist: 'Bon Jovi',
    imageUrl: 'https://i.imgur.com/SApTJFo.jpg',
  },
  {
    title: 'Appetite For Destruction',
    artist: "Guns N' Roses",
    imageUrl: 'https://i.imgur.com/qW3nkzP.jpg',
  },
  {
    title: 'The Joshua Tree',
    artist: 'U2',
    imageUrl: 'https://i.imgur.com/cEfR8B9.jpg',
  },
  {
    title: 'Metallica',
    artist: 'Metallica',
    imageUrl: 'https://i.imgur.com/Qa6Ppn9.jpg',
  },
];

export default function Albums() {
  return (
    <div className="flex flex-col grow">
      <div className="px-8 py-4 border-b">List of Albums</div>
      <div className="grid flex-1 md:grid-cols-[220px_1fr] h-full">
        <div className="flex flex-col gap-6 px-4 py-6">
          <div className="flex flex-col gap-3">
            <span className="uppercase font-medium">Saved Searches</span>
            <div className="flex flex-col gap-1">
              <span className="py-1 px-4 text-sm font-medium text-accent">
                All Albums
              </span>
              <span className="py-1 px-4 text-sm font-medium">View more</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="uppercase font-medium">Filters</span>
            <div className="flex flex-col gap-1">
              <span className="italic text-sm text-muted-foreground">
                There are no active filters
              </span>
            </div>
            <button className="flex items-center gap-2 text-start px-4">
              <Plus className="h-4 w-4" />
              <span>Add filter</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-4 py-4">
          <div className="flex justify-between gap-4">
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

            <Input type="search" placeholder="Search" className="max-w-sm" />

            <Button>New Album</Button>
          </div>

          <Table>
            <TableCaption>A list of your albums.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ART.</TableHead>
                <TableHead>Display Title</TableHead>
                <TableHead>Main Artists</TableHead>
                <TableHead className="text-right">Etc.</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {albums.map((album, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="relative h-12 w-12 rounded-xl overflow-hidden">
                      <Image
                        alt={album.title}
                        layout="fill"
                        src={album.imageUrl}
                        className="object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell>{album.title}</TableCell>
                  <TableCell>{album.artist}</TableCell>
                  <TableCell className="text-right">-</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

//  <div className="w-full">
//    <div className="flex items-center py-4">
//      <Input
//        placeholder="Filter emails..."
//        value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
//        onChange={(event) =>
//          table.getColumn('email')?.setFilterValue(event.target.value)
//        }
//        className="max-w-sm"
//      />
//      <DropdownMenu>
//        <DropdownMenuTrigger asChild>
//          <Button variant="outline" className="ml-auto">
//            Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
//          </Button>
//        </DropdownMenuTrigger>
//        <DropdownMenuContent align="end">
//          {table
//            .getAllColumns()
//            .filter((column) => column.getCanHide())
//            .map((column) => {
//              return (
//                <DropdownMenuCheckboxItem
//                  key={column.id}
//                  className="capitalize"
//                  checked={column.getIsVisible()}
//                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
//                >
//                  {column.id}
//                </DropdownMenuCheckboxItem>
//              );
//            })}
//        </DropdownMenuContent>
//      </DropdownMenu>
//    </div>
//    <div className="rounded-md border">
//      <Table>
//        <TableHeader>
//          {table.getHeaderGroups().map((headerGroup) => (
//            <TableRow key={headerGroup.id}>
//              {headerGroup.headers.map((header) => {
//                return (
//                  <TableHead key={header.id}>
//                    {header.isPlaceholder
//                      ? null
//                      : flexRender(
//                          header.column.columnDef.header,
//                          header.getContext()
//                        )}
//                  </TableHead>
//                );
//              })}
//            </TableRow>
//          ))}
//        </TableHeader>
//        <TableBody>
//          {table.getRowModel().rows?.length ? (
//            table.getRowModel().rows.map((row) => (
//              <TableRow
//                key={row.id}
//                data-state={row.getIsSelected() && 'selected'}
//              >
//                {row.getVisibleCells().map((cell) => (
//                  <TableCell key={cell.id}>
//                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                  </TableCell>
//                ))}
//              </TableRow>
//            ))
//          ) : (
//            <TableRow>
//              <TableCell colSpan={columns.length} className="h-24 text-center">
//                No results.
//              </TableCell>
//            </TableRow>
//          )}
//        </TableBody>
//      </Table>
//    </div>
//    <div className="flex items-center justify-end space-x-2 py-4">
//      <div className="flex-1 text-sm text-muted-foreground">
//        {table.getFilteredSelectedRowModel().rows.length} of{' '}
//        {table.getFilteredRowModel().rows.length} row(s) selected.
//      </div>
//      <div className="space-x-2">
//        <Button
//          variant="outline"
//          size="sm"
//          onClick={() => table.previousPage()}
//          disabled={!table.getCanPreviousPage()}
//        >
//          Previous
//        </Button>
//        <Button
//          variant="outline"
//          size="sm"
//          onClick={() => table.nextPage()}
//          disabled={!table.getCanNextPage()}
//        >
//          Next
//        </Button>
//      </div>
//    </div>
//  </div>;
