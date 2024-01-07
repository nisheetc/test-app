'use client';

import Image from 'next/image';
import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@/components/ui/checkbox';

import { Track } from '@/config/schema';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';

export const columns: ColumnDef<Track>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px] mx-2"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px] mx-2"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Track Title" />
    ),
    cell: ({ row }) => {
      const rowData = row.original;
      const imageUrl = rowData.imageUrl;
      const artist = rowData.artist;
      const title = rowData.title;

      return (
        <div className="flex items-center gap-2.5 py-1.5">
          <div className="relative h-[45px] w-[45px] rounded-xl overflow-hidden shrink-0">
            <Image
              layout="fill"
              alt={title}
              objectFit="cover"
              src={imageUrl}
              sizes="45px"
            />
          </div>

          <div className="flex flex-col gap-0.5 max-w-[450px] overflow-hidden">
            <span className="truncate font-medium text-ellipsis">{title}</span>
            <span className="truncate font-medium text-muted-foreground">
              {artist}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'album',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Album Title" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[350px] overflow-hidden">
        <span className="truncate font-medium text-ellipsis">
          {row.getValue('album')}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'duration',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Duration" />
    ),
    cell: ({ row }) => {
      const durationInSeconds = row.getValue('duration') as number;
      const minutes = Math.floor(durationInSeconds / 60);
      const seconds = durationInSeconds % 60;

      const formattedDuration = `${minutes}:${seconds
        .toString()
        .padStart(2, '0')}`;

      return <span className="truncate font-medium">{formattedDuration}</span>;
    },
  },
  {
    accessorKey: 'year',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Year" />
    ),
    cell: ({ row }) => {
      const fullDate = row.getValue('year') as string;
      const year = fullDate.split('-')[0];

      return <span className="truncate font-medium">{year}</span>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
