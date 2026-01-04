import type z from 'zod';
import type { LoginRequestDtoSchema, RegisterRequestDtoSchema, UserResponseDtoSchema, UserSchema } from './user.contracts';

export type User = z.infer<typeof UserSchema>;
export type LoginRequestDto = z.infer<typeof LoginRequestDtoSchema>;
export type RegisterRequestDto = z.infer<typeof RegisterRequestDtoSchema>;
export type UserResponseDto = z.infer<typeof UserResponseDtoSchema>;
