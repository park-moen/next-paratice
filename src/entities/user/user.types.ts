import type z from 'zod';
import type { LoginRequestDtoSchema, RegisterRequestDtoSchema, UserResponseDtoSchema, UserSchema } from './user.contracts';

export type User = z.infer<typeof UserSchema>;
export type LoginRequest = z.infer<typeof LoginRequestDtoSchema>;
export type RegisterRequest = z.infer<typeof RegisterRequestDtoSchema>;
export type UserResponse = z.infer<typeof UserResponseDtoSchema>;
