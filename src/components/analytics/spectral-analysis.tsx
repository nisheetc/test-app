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
import { Button } from '@/components/ui/button';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';

import { Card } from '@/components/Card';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  TooltipProps,
  AreaChart,
  Area,
  Line,
  LineChart,
} from 'recharts';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

const data = [
  { date: '2023-01-01', yourTrack: 70, marketMedian: 50, beatConsistency: 30 },
  { date: '2023-02-01', yourTrack: 65, marketMedian: 55, beatConsistency: 35 },
  { date: '2023-03-01', yourTrack: 75, marketMedian: 60, beatConsistency: 40 },
  { date: '2023-04-01', yourTrack: 80, marketMedian: 65, beatConsistency: 45 },
  { date: '2023-05-01', yourTrack: 85, marketMedian: 70, beatConsistency: 50 },
  { date: '2023-06-01', yourTrack: 90, marketMedian: 75, beatConsistency: 55 },
  { date: '2023-07-01', yourTrack: 95, marketMedian: 80, beatConsistency: 60 },
  { date: '2023-08-01', yourTrack: 85, marketMedian: 85, beatConsistency: 65 },
  { date: '2023-09-01', yourTrack: 80, marketMedian: 90, beatConsistency: 70 },
  { date: '2023-10-01', yourTrack: 75, marketMedian: 95, beatConsistency: 75 },
  { date: '2023-11-01', yourTrack: 70, marketMedian: 90, beatConsistency: 80 },
  { date: '2023-12-01', yourTrack: 65, marketMedian: 85, beatConsistency: 85 },
];

const computeMarketMedian = () => {
  let data = [];
  let currentDate = new Date('2023-01-01');

  for (let i = 0; i < 200; i++) {
    // Example algorithm for computing market median
    const medianValue = Math.sin(i / 20) * 50 + 50; // Just a sample function for illustrative purposes

    data.push({
      date: currentDate.toISOString().split('T')[0],
      marketMedian: medianValue,
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
};

const formatDate = (dateStr: any) => {
  const date = new Date(dateStr);
  return format(date, 'MMM d'); // e.g., "Jan 1", "Feb 1"
};

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length > 1) {
    const yourTrack = payload.find((p) => p.dataKey === 'yourTrack');
    const marketMedian = payload.find((p) => p.dataKey === 'marketMedian');
    const beatConsistency = payload.find(
      (p) => p.dataKey === 'beatConsistency'
    );

    return (
      <div className="px-3 py-2 text-sm bg-foreground/95 backdrop-blur supports-[backdrop-filter]:bg-foreground/80 text-background rounded-xl">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#7103ec]"></div>
            Track: <span className="font-bold">{yourTrack?.value}%</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#adfa1d]"></div>
            Market: <span className="font-bold">{marketMedian?.value}% </span>
          </div>

          {/* <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-foreground"></div>
            BC: <span className="font-bold">{beatConsistency?.value}% </span>
          </div> */}
        </div>
      </div>
    );
  }

  return null;
};

const CustomLegend = (props: any) => {
  const { payload } = props;

  if (!payload) {
    return null;
  }

  return (
    <div className="absolute right-0 -top-4 flex items-center gap-4 justify-end">
      {payload.map((entry: any, index: any) => (
        <div
          key={`item-${index}`}
          style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              backgroundColor: entry.color,
              marginRight: 8,
            }}
            className="rounded-full"
          />
          <span className="text-xs text-foreground">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export function SpectralAnalysis() {
  const [marketData, setMarketData] = useState<any>([]);

  useEffect(() => {
    const computedData = computeMarketMedian();
    console.log('computedData', computedData);
    setMarketData(computedData);
  }, []);

  return (
    <Card
      spotlight
      style={{ width: 500, height: 250 }}
      className="relative flex flex-col gap-2 rounded-xl px-4 pt-4 pb-4"
    >
      <h1 className="text-lg font-medium text-foreground">Spectral Analysis</h1>

      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 30, left: -5, bottom: 2 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="currentColor"
            opacity={0.2}
          />
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            tickMargin={10}
            tick={{ fontSize: '12px' }}
            tickCount={6}
            interval={3}
          />
          <YAxis
            domain={[50, 100]}
            tickMargin={10}
            tick={{ fontSize: '12px' }}
          />
          {/* <Tooltip /> */}
          <Tooltip content={<CustomTooltip />} />
          <Legend
            align="right"
            verticalAlign="top"
            wrapperStyle={{
              padding: '6px',
            }}
            content={<CustomLegend />}
          />
          {/* <Area
            type="monotone"
            dataKey="beatConsistency"
            stroke="currentColor"
            name="BC"
            fillOpacity={0.95}
            fill="transparent"
            strokeDasharray="10 6"
          /> */}
          <Area
            type="monotone"
            dataKey="yourTrack"
            stroke="#7103ec"
            name="Track"
            fillOpacity={0.95}
            fill="transparent"
            strokeWidth={4}
            strokeDasharray="10 6"
          />
          <Area
            type="monotone"
            dataKey="marketMedian"
            stroke="#adfa1d"
            name="Market"
            fillOpacity={0.3}
            fill="url(#marketTrendMask)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <Dialog>
        <DialogTrigger asChild className="absolute bottom-2 right-2">
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="pt-8">
          <DialogHeader>
            <DialogTitle>Spectral Waveform Analysis</DialogTitle>
            <DialogDescription className="leading-6 pt-5">
              Spectral Waveform Analysis is a cutting-edge feature that compares
              two audio files, highlighting their points of intersection. This
              tool is an asset for large content portfolios, enabling the
              dissection and understand the intricacies of sound design and
              composition. By identifying similarities and differences in
              spectral characteristics, this aids in the creative process and in
              ensuring the uniqueness of each piece.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
