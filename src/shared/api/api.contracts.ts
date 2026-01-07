import z from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  email: z.email(),
  username: z.string(),
  nickname: z.string(),
  level: z.number(),
  avatar: z.url().optional(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export const RegisterRequestDtoSchema = z.object({
  user: {
    email: z.email(),
    username: z.string(),
    nickname: z.string(),
    password: z.string(),
    passwordConfirm: z.string(),
  },
});

export const LoginRequestDtoSchema = z.object({
  user: {
    email: z.email(),
    password: z.string(),
  },
});

export const UserResponseDtoSchema = z.object({
  user: UserSchema,
});
