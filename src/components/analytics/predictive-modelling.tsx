'use client';

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

const data = [
  { date: '2023-01-01', hitPotential: 65.2, marketTrend: 48.3 },
  { date: '2023-02-01', hitPotential: 68.7, marketTrend: 52.8 },
  { date: '2023-03-01', hitPotential: 70.1, marketTrend: 55.6 },
  { date: '2023-04-01', hitPotential: 72.3, marketTrend: 59.2 },
  { date: '2023-05-01', hitPotential: 74.8, marketTrend: 62.1 },
  { date: '2023-06-01', hitPotential: 73.5, marketTrend: 59.8 },
  { date: '2023-07-01', hitPotential: 76.9, marketTrend: 65.3 },
  { date: '2023-08-01', hitPotential: 78.2, marketTrend: 68.5 },
  { date: '2023-09-01', hitPotential: 79.7, marketTrend: 70.2 },
  { date: '2023-10-01', hitPotential: 81.4, marketTrend: 73.4 },
  { date: '2023-11-01', hitPotential: 79.8, marketTrend: 71.1 },
  { date: '2023-12-01', hitPotential: 82.0, marketTrend: 74.3 },
  { date: '2024-01-01', hitPotential: 80.5, marketTrend: 72.5 },
  { date: '2024-02-01', hitPotential: 78.3, marketTrend: 70.3 },
  { date: '2024-03-01', hitPotential: 75.9, marketTrend: 67.8 },
  { date: '2024-04-01', hitPotential: 73.2, marketTrend: 64.5 },
  { date: '2024-05-01', hitPotential: 71.0, marketTrend: 61.8 },
  { date: '2024-06-01', hitPotential: 68.6, marketTrend: 59.3 },
  { date: '2024-07-01', hitPotential: 66.8, marketTrend: 57.4 },
  { date: '2024-08-01', hitPotential: 65.4, marketTrend: 56.0 },
  { date: '2024-09-01', hitPotential: 64.2, marketTrend: 54.7 },
  { date: '2024-10-01', hitPotential: 63.5, marketTrend: 53.8 },
  { date: '2024-11-01', hitPotential: 62.8, marketTrend: 53.0 },
  { date: '2024-12-01', hitPotential: 62.1, marketTrend: 52.3 },
];

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
            Your Track:{' '}
            <span className="font-bold">{hitPotential?.value}%</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#adfa1d]"></div>
            Market Median:{' '}
            <span className="font-bold">{marketTrend?.value}% </span>
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
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
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
          <Line
            type="monotone"
            name="Hit Potential"
            dataKey="hitPotential"
            stroke="#7103ec"
            dot={false}
          />
          <Line
            type="monotone"
            name="Market Trend"
            dataKey="marketTrend"
            stroke="#adfa1d"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      <button className="absolute bottom-2 right-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted">
        ...
      </button>
    </Card>
  );
}
