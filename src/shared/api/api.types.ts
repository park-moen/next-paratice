import type z from 'zod';
import type { LoginRequestDtoSchema, RegisterRequestDtoSchema, UserResponseDtoSchema } from './api.contracts';

// API utils type
export type FetchConfig = RequestInit & {
  params?: Record<string, string>;
};

// API schema type
export type UserResponseDto = z.infer<typeof UserResponseDtoSchema>;
export type LoginRequestDto = z.infer<typeof LoginRequestDtoSchema>;
export type RegisterRequestDto = z.infer<typeof RegisterRequestDtoSchema>;
