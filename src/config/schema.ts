import { z } from 'zod';

export const trackSchema = z.object({
  deezerId: z.number().nullable().optional(),
  imageUrl: z.string(),
  title: z.string(),
  artist: z.string(),
  album: z.string(),
  duration: z.number(),
  year: z.string(),
  hit: z.boolean().optional(),
  isrcCode: z.string().nullable().optional(),
  bpm: z.number().nullable().optional(),
  tempo: z.string().nullable().optional(),
  key: z.string().nullable().optional(),
});

export type Track = z.infer<typeof trackSchema>;
