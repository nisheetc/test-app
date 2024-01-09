'use client';

import { useState, useEffect } from 'react';
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
import { useSearchParams } from 'next/navigation';

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
} from 'recharts';
import { format } from 'date-fns';

// const data = [
//   { date: '2023-01-01', trackValuation: 500000, marketMedian: 700000 },
//   { date: '2023-02-01', trackValuation: 550000, marketMedian: 720000 },
//   { date: '2023-03-01', trackValuation: 580000, marketMedian: 740000 },
//   { date: '2023-04-01', trackValuation: 610000, marketMedian: 760000 },
//   { date: '2023-05-01', trackValuation: 640000, marketMedian: 780000 },
//   { date: '2023-06-01', trackValuation: 670000, marketMedian: 800000 },
//   { date: '2023-07-01', trackValuation: 700000, marketMedian: 820000 },
//   { date: '2023-08-01', trackValuation: 730000, marketMedian: 840000 },
//   { date: '2023-09-01', trackValuation: 760000, marketMedian: 860000 },
//   { date: '2023-10-01', trackValuation: 790000, marketMedian: 880000 },
//   { date: '2023-11-01', trackValuation: 820000, marketMedian: 900000 },
//   { date: '2023-12-01', trackValuation: 850000, marketMedian: 920000 },
// ];

type ValuationData = {
  date: string;
  trackValuation: number;
  marketMedian: number;
};

function createValuationData(
  startDate: string,
  endDate: string,
  numPoints: number,
  isTrending: boolean = false
): ValuationData[] {
  // Shared functions
  function generateDateRange(start: string, end: string, length: number) {
    let step =
      (new Date(end).getTime() - new Date(start).getTime()) / (length - 1);
    return Array.from(
      { length },
      (_, i) => new Date(new Date(start).getTime() + i * step)
    );
  }

  function linspace(startValue: number, endValue: number, length: number) {
    const delta = (endValue - startValue) / (length - 1);
    return Array.from({ length }, (_, i) => startValue + i * delta);
  }

  function addRandomNoise(
    array: number[],
    mean: number,
    standardDeviation: number
  ) {
    return array.map((value: number) =>
      Math.max(
        value + Math.random() * standardDeviation * 2 - standardDeviation,
        100
      )
    );
  }

  // Function to create average track values
  function createAverageTrackValues(numPoints: number) {
    const halfPoint = Math.floor(numPoints / 2);
    const firstHalf = linspace(50, 300, halfPoint);
    const secondHalf = linspace(300, 100, numPoints - halfPoint);
    return firstHalf.concat(secondHalf).map(Math.round);
  }

  // Function to create trending track values
  function createTrendingTrackValues(numPoints: number) {
    let trendingValues = linspace(200, 1000, numPoints);
    return addRandomNoise(trendingValues, 0, 100).map(Math.round);
  }

  // Core logic
  const dateRange = generateDateRange(startDate, endDate, numPoints);
  const trackValues = isTrending
    ? createTrendingTrackValues(numPoints)
    : createAverageTrackValues(numPoints);
  let medianValues = linspace(100, 500, dateRange.length);
  medianValues = addRandomNoise(medianValues, 0, 50).map(Math.round);

  return dateRange.map((date, index) => ({
    date: date.toISOString().split('T')[0],
    trackValuation: trackValues[index],
    marketMedian: medianValues[index],
  }));
}

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
    const trackValuation = payload.find((p) => p.dataKey === 'trackValuation');
    const marketMedian = payload.find((p) => p.dataKey === 'marketMedian');

    return (
      <div className="px-3 py-2 text-sm bg-foreground/95 backdrop-blur supports-[backdrop-filter]:bg-foreground/80 text-background rounded-xl">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#7103ec]"></div>
            Your Track:{' '}
            <span className="font-bold">
              ${trackValuation?.value ? trackValuation.value : 0}k
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#adfa1d]"></div>
            Market Median:{' '}
            <span className="font-bold">
              ${marketMedian?.value ? marketMedian.value : 0}k
            </span>
          </div>
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

export function ValuationAssessment() {
  const searchParams = useSearchParams();
  const [valuationData, setValuationData] = useState<any>([]);

  useEffect(() => {
    const isTrending = searchParams.get('hit') === 'true';
    const _data = createValuationData(
      '2023-01-01',
      '2024-01-01',
      30,
      isTrending
    );
    console.log('data', _data);
    setValuationData(_data);
  }, []);

  return (
    <Card
      spotlight
      style={{ width: 500, height: 250 }}
      className="relative flex flex-col gap-2 rounded-xl px-4 pt-4 pb-4"
    >
      <h1 className="text-lg font-medium text-foreground">Valuation</h1>

      <ResponsiveContainer>
        <AreaChart
          data={valuationData}
          margin={{ top: 0, right: 30, left: 5, bottom: 2 }}
        >
          <defs>
            <linearGradient id="marketTrendMask" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#adfa1d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#adfa1d" stopOpacity={0} />
            </linearGradient>
          </defs>
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
            interval={4}
          />
          <YAxis
            // domain={[50, 1000]}
            tickFormatter={(value) => `$${value}k`}
            tick={{ fontSize: '12px' }}
            tickMargin={10}
            // label={{
            //   value: 'Valuation ($)',
            //   angle: -90,
            //   position: 'insideLeft',
            // }}
          />
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend
            align="right"
            verticalAlign="top"
            wrapperStyle={{
              position: 'absolute',
              top: 0,
              right: 0,
              backgroundColor: 'transparent',
              borderRadius: '5px',
              padding: '6px',
              color: 'white',
            }}
          /> */}
          <Legend
            align="right"
            verticalAlign="top"
            wrapperStyle={{
              padding: '6px',
            }}
            content={<CustomLegend />}
          />
          <Area
            type="monotone"
            dataKey="trackValuation"
            stroke="#7103ec"
            name="Your Track"
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
            <DialogTitle>Valuation</DialogTitle>
            <DialogDescription className="leading-6 pt-5">
              The Valuation feature of our system provides a comprehensive
              financial assessment of audio files, ranging from $0 to over $1
              million to pinpoint clear value. This tool is designed to assist
              industry giants in making informed investment decisions. We
              categorizes valuations into three distinct levels: $0-100k,
              $100k-1M, and $1M+, offering a nuanced understanding of a
              track&apos;s potential market value, based on its originality and
              market trends.
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
