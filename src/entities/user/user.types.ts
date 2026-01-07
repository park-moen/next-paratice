import type z from 'zod';
import type { UserSchema } from './user.contracts';

export type User = z.infer<typeof UserSchema>;
