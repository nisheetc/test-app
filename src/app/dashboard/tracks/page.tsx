import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';

import { trackSchema } from '@/config/schema';

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

// const data = [
//   { subject: 'Melodic Innovation', A: 80 },
//   { subject: 'Harmonic Complexity', A: 70 },
//   { subject: 'Rhythmic Originality', A: 60 },
//   { subject: 'Instrumental Arrangement', A: 75 },
//   { subject: 'Lyrical Originality', A: 85 },
//   { subject: 'Production Techniques', A: 90 },
//   { subject: 'Structural Innovation', A: 65 },
//   { subject: 'Genre Fusion', A: 80 },
// ];

// const similarityData = [
//   { name: 'Rhythm & Beat Similarity', value: 70 },
//   { name: 'Melodic Similarity', value: 60 },
//   { name: 'Harmonic Similarities', value: 80 },
//   { name: 'Vocal Style and Delivery', value: 50 },
//   { name: 'Lyrical Themes', value: 65 },
//   { name: 'Instrumentation', value: 75 },
//   { name: 'Production Style', value: 55 },
//   { name: 'Ambience and Mood', value: 85 },
// ];

// const colors = [
//   '#ff4d4f',
//   '#ff7a45',
//   '#ffa940',
//   '#ffc53d',
//   '#ffec3d',
//   '#bae637',
//   '#73d13d',
//   '#36cfc9',
//   '#40a9ff',
//   '#597ef7',
//   '#9254de',
//   '#f759ab',
// ];

// const valuationData = [
//   { time: 'Jan', value: 200 },
//   { time: 'Feb', value: 210 },
//   { time: 'Mar', value: 220 },
//   { time: 'Apr', value: 230 },
//   { time: 'May', value: 240 },
//   { time: 'Jun', value: 250 },
//   // ... add more data points as needed
// ];

// const ScorePieChart: React.FC<{ score: number }> = ({ score }) => {
//   const data = [
//     { name: 'Score', value: score },
//     { name: 'Remaining', value: 100 - score },
//   ];

//   const COLORS = ['#8884d8', '#e0e0e0']; // Color for the score and the remaining part

//   return (
//     <ResponsiveContainer width="100%" height={250}>
//       <PieChart>
//         <Pie
//           data={data}
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };

// async function getTasks() {
//   const data = await fs.readFile(
//     path.join(process.cwd(), 'src/config/tasks.json')
//   );

//   const tasks = JSON.parse(data.toString());

//   return z.array(taskSchema).parse(tasks);
// }

{
  /* <Table>
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

              <ScorePieChart score={45} />
             
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
        </Drawer> */
}
