'use client';

import { useState } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { DataTableViewOptions } from './data-table-view-options';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { genres } from '@/config/data';

import { AudioTrackManager } from '@/components/audio-track-manager';
import { DaveChat } from '@/components/dave-chat';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  data: TData[];
}

export function DataTableToolbar<TData>({
  table,
  data,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const simulateProcessing = async () => {
    // setIsCalculating(true);

    // Simulate a task taking 16 seconds
    await new Promise((resolve) => setTimeout(resolve, 17000));

    // setIsSubmitting(false);
    // setIsDialogOpen(false); // This will close the dialog
    // setIsDrawerOpen(true); // Open the drawer
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <span className="px-4 font-medium">{data.length} tracks</span>

        <Input
          placeholder="Search track..."
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className="h-[36px] w-[150px] lg:w-[250px]"
        />
        {/* {table.getColumn('genre') && (
          <DataTableFacetedFilter
            column={table.getColumn('genre')}
            title="Genre"
            options={genres}
          />
        )} */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-[36px] px-2 lg:px-4"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        <DataTableViewOptions table={table} />

        <DaveChat />

        <AudioTrackManager />
      </div>
    </div>
  );
}
