'use client';

import { useEffect, useState } from 'react';

export function CountingNumbers({
  value,
  className,
  start = 0,
  duration = 800,
  percent = true,
}: {
  value: number;
  className: string;
  start?: number;
  duration?: number;
  percent?: boolean;
}) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number | undefined;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const timePassed = timestamp - startTime;
      const progress = timePassed / duration;
      const currentCount = easeOutQuad(progress, 0, value, 1);
      if (currentCount >= value) {
        setCount(value);
        return;
      }
      setCount(currentCount);
      requestAnimationFrame(animateCount);
    };
    requestAnimationFrame(animateCount);
  }, [value, duration]);

  return (
    <p className={className}>
      {Intl.NumberFormat().format(count)}
      {percent && '%'}
    </p>
  );
}
const easeOutQuad = (t: number, b: number, c: number, d: number) => {
  t = t > d ? d : t / d;
  return Math.round(-c * t * (t - 2) + b);
};
