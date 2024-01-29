import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { trackSchema } from '@/lib/validations/track';

import { Music2 } from 'lucide-react';

async function getTracks() {
  const trackData = await fs.readFile(
    path.join(process.cwd(), 'src/config/tracks.json')
  );

  const tracks = JSON.parse(trackData.toString());

  return z.array(trackSchema).parse(tracks);
}

export default async function Tracks() {
  const tracks = await getTracks();

  return (
    <div className="flex flex-col grow">
      <div className="flex items-center gap-2 px-8 py-4 border-b">
        <Music2 className="h-5 w-5" /> <span>List of Tracks</span>
      </div>

      <div className="flex flex-col gap-4 px-6 pt-2 pb-16">
        <DataTable data={tracks} columns={columns} />
      </div>
    </div>
  );
}
