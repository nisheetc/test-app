import { z } from 'zod';

export const trackSchema = z.object({
  deezerId: z.number().optional(),
  imageUrl: z.string(),
  title: z.string(),
  artist: z.string(),
  album: z.string(),
  duration: z.number(),
  year: z.string(),
  hit: z.boolean().optional(),
  isrcCode: z.string().optional(),
  bpm: z.number().optional(),
  temp: z.string().optional(),
  key: z.string().optional(),
});

export type Track = z.infer<typeof trackSchema>;
