import { z } from 'zod';

export const trackSchema = z.object({
  imageUrl: z.string(),
  title: z.string(),
  artist: z.string(),
  album: z.string(),
  duration: z.number(),
  year: z.string(),
  hit: z.boolean().optional(),
});

export type Track = z.infer<typeof trackSchema>;
