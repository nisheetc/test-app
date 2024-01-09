'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
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

// const data = [
//   { date: '2023-01-01', hitPotential: 65.2, marketTrend: 48.3 },
//   { date: '2023-02-01', hitPotential: 68.7, marketTrend: 52.8 },
//   { date: '2023-03-01', hitPotential: 70.1, marketTrend: 55.6 },
//   { date: '2023-04-01', hitPotential: 72.3, marketTrend: 59.2 },
//   { date: '2023-05-01', hitPotential: 74.8, marketTrend: 62.1 },
//   { date: '2023-06-01', hitPotential: 73.5, marketTrend: 59.8 },
//   { date: '2023-07-01', hitPotential: 76.9, marketTrend: 65.3 },
//   { date: '2023-08-01', hitPotential: 78.2, marketTrend: 68.5 },
//   { date: '2023-09-01', hitPotential: 79.7, marketTrend: 70.2 },
//   { date: '2023-10-01', hitPotential: 81.4, marketTrend: 73.4 },
//   { date: '2023-11-01', hitPotential: 79.8, marketTrend: 71.1 },
//   { date: '2023-12-01', hitPotential: 82.0, marketTrend: 74.3 },
//   { date: '2024-01-01', hitPotential: 80.5, marketTrend: 72.5 },
//   { date: '2024-02-01', hitPotential: 78.3, marketTrend: 70.3 },
//   { date: '2024-03-01', hitPotential: 75.9, marketTrend: 67.8 },
//   { date: '2024-04-01', hitPotential: 73.2, marketTrend: 64.5 },
//   { date: '2024-05-01', hitPotential: 71.0, marketTrend: 61.8 },
//   { date: '2024-06-01', hitPotential: 68.6, marketTrend: 59.3 },
//   { date: '2024-07-01', hitPotential: 66.8, marketTrend: 57.4 },
//   { date: '2024-08-01', hitPotential: 65.4, marketTrend: 56.0 },
//   { date: '2024-09-01', hitPotential: 64.2, marketTrend: 54.7 },
//   { date: '2024-10-01', hitPotential: 63.5, marketTrend: 53.8 },
//   { date: '2024-11-01', hitPotential: 62.8, marketTrend: 53.0 },
//   { date: '2024-12-01', hitPotential: 62.1, marketTrend: 52.3 },
// ];

type PredictiveModellingData = {
  date: string;
  hitPotential: number;
  marketTrend: number;
};

function createPredictiveModellingData(
  startDate: string,
  endDate: string,
  numPoints: number,
  isTrending: boolean
): PredictiveModellingData[] {
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

  function addRandomNoise(array: number[], standardDeviation: number) {
    return array.map((value: number) => {
      const normalDistribution =
        Math.sqrt(-2.0 * Math.log(1.0 - Math.random())) *
        Math.cos(2.0 * Math.PI * Math.random());
      return value + normalDistribution * standardDeviation;
    });
  }

  // Function to create realistic market median values
  function createRealisticMarketMedianValues(numPoints: number) {
    const medianValues = linspace(20, 50, numPoints);
    const noisyMedianValues = addRandomNoise(medianValues, 8); // Adjusted standard deviation
    const clippedValues = noisyMedianValues.map((value: number) =>
      Math.max(value, 5)
    ); // Clipping to a min value

    // Scale values to fit 0-100 range
    const scaledValues = clippedValues.map((value: number) =>
      Math.round(value * 1.3)
    );
    return scaledValues;
  }

  // Function to create average track hit potential values
  function createTrackHitPotentialValues(
    numPoints: number,
    isTrending: boolean
  ) {
    if (isTrending) {
      // Trending tracks have higher and more stable hit potential
      const firstPhaseLength = Math.floor(numPoints / 4);
      const firstPhase = linspace(30, 80, firstPhaseLength); // Rising to near peak value
      const secondPhase = linspace(80, 75, numPoints - firstPhaseLength); // Slightly variable high value
      return firstPhase.concat(secondPhase).map((value) => Math.round(value));
    } else {
      // Average tracks show rise and decline in hit potential
      const peakPoint = Math.floor(numPoints / 3);
      const firstPhase = linspace(10, 30, peakPoint); // Rise phase
      const secondPhase = linspace(30, 10, numPoints - peakPoint); // Decline phase
      return firstPhase.concat(secondPhase).map(Math.round);
    }
  }

  // Core logic
  const dateRange = generateDateRange(startDate, endDate, numPoints);
  const marketMedianValues = createRealisticMarketMedianValues(numPoints);
  const trackHitPotentialValues = createTrackHitPotentialValues(
    numPoints,
    isTrending
  );

  return dateRange.map((date, index) => ({
    date: date.toISOString().split('T')[0],
    hitPotential: trackHitPotentialValues[index],
    marketTrend: marketMedianValues[index],
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
    const hitPotential = payload.find((p) => p.dataKey === 'hitPotential');
    const marketTrend = payload.find((p) => p.dataKey === 'marketTrend');

    return (
      <div className="px-3 py-2 text-sm bg-foreground/95 backdrop-blur supports-[backdrop-filter]:bg-foreground/80 text-background rounded-xl">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#7103ec]"></div>
            Track: <span className="font-bold">{hitPotential?.value}%</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#adfa1d]"></div>
            Market: <span className="font-bold">{marketTrend?.value}% </span>
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

export function PredictiveModelling() {
  const searchParams = useSearchParams();
  const [predictiveData, setPredictiveData] = useState<any>([]);

  useEffect(() => {
    const isTrending = searchParams.get('hit') === 'true';
    const _data = createPredictiveModellingData(
      '2023-01-01',
      '2024-01-01',
      20,
      isTrending
    );
    setPredictiveData(_data);
  }, []);

  return (
    <Card
      spotlight
      style={{ width: 500, height: 250 }}
      className="relative flex flex-col gap-2 rounded-xl px-4 pt-4 pb-4"
    >
      <h1 className="text-lg font-medium text-foreground">
        Predictive Modelling
      </h1>

      <ResponsiveContainer>
        <AreaChart
          data={predictiveData}
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
            interval={4}
          />
          <YAxis
            domain={[0, 100]}
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
          {/* <Line
            type="monotone"
            name="Hit Potential"
            dataKey="hitPotential"
            stroke="#7103ec"
            dot={false}
          /> */}

          <Area
            type="monotone"
            dataKey="hitPotential"
            stroke="#7103ec"
            name="Hit Potential"
            fillOpacity={0.95}
            fill="transparent"
            strokeWidth={4}
            strokeDasharray="10 6"
          />
          {/* <Line
            type="monotone"
            name="Market Trend"
            dataKey="marketTrend"
            stroke="#adfa1d"
            dot={false}
          /> */}
          <Area
            type="monotone"
            dataKey="marketTrend"
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
            <DialogTitle>Predictive Modeling</DialogTitle>
            <DialogDescription className="leading-6 pt-5">
              Predictive Modeling in our system is a revolutionary tool for
              forecasting a track&apos;s market performance. It combines
              real-time data analytics and social sentiment analysis, offering
              entities, managers, producers and labels a predictive edge in
              identifying potential hits. This feature reduces the time and
              resources spent on market research, providing a data-driven
              approach to foresee the &apos;hit percentage&apos; and market
              traction of new releases.
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
