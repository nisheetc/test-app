'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTableViewOptions } from './data-table-view-options';

import { genres } from '@/config/data';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { MessageCircleMore } from 'lucide-react';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  data: TData[];
}

export function DataTableToolbar<TData>({
  table,
  data,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

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

        <Button variant="outline" className="flex items-center gap-2">
          <MessageCircleMore className="h-5 w-5" />
          <span>Chat with DAVE</span>
        </Button>
        <Button>New Track</Button>
      </div>
    </div>
  );
}
