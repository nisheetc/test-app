import Image from 'next/image';

const sidebar = [
  {
    label: 'Contributors',
    children: ['Artists', 'Record Labels', 'Songwriters', 'Music Publishers'],
  },
  {
    label: 'Properties',
    children: ['', ''],
  },
  {
    label: 'Audio Manager',
    children: ['Tracks', 'Albums'],
  },
  {
    label: 'Release Manager',
    children: ['', ''],
  },
  {
    label: 'Playlists for business',
    children: ['', ''],
  },
  {
    label: 'CRM',
    children: ['Contacts', 'Companies'],
  },
  {
    label: 'Rights Manager',
    children: ['Contacts'],
  },
  {
    label: '',
    children: [],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-white">
      {/* <div className="relative mx-auto shrink-0 h-80 sm:w-80 w-full px-4 py-4 bg-gradient-radial from-[#F5F7FA]/10 to-gray-300/5 rounded-xl">
        <span className="text-xl font-bold">Upload Files</span>

        <div className="relative flex flex-col justify-center items-center w-full h-full gap-2 border-2 border-dashed bg-slate-100 rounded-xl smooth-transition">
          <div>Upload</div>

          <p className="text-lg text-gray-700">Drag and Drop file</p>

          <p className="uppercase font-bold tracking-wide text-sky-500">or</p>

          <label>
        </div>
      </div> */}
    </main>
  );
}
