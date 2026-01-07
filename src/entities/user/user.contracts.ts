import z from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  email: z.email(),
  username: z.string().min(2).max(20),
  nickname: z.string().min(2).max(40),
  level: z.number(),
  avatar: z.url().optional(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});
