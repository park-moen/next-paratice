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

export const RegisterRequestDtoSchema = z.object({
  email: z.email('유효한 이메일을 입력해주세요'),
  username: z.string()
    .min(2, '사용자명은 최소 2자 이상이어야 합니다')
    .max(20, '사용자명은 최대 20자까지 가능합니다')
    .regex(/^\w+$/, '사용자명은 영문, 숫자, 밑줄만 가능합니다'),
  nickname: z.string()
    .min(2, '닉네임명은 최소 2자 이상이어야 합니다')
    .max(20, '닉네임명은 최대 10자까지 가능합니다')
    .regex(/^\w+$/, '닉네임명은 영문, 숫자, 밑줄만 가능합니다'),
  password: z.string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다')
    .regex(/[A-Z]/, '비밀번호는 대문자를 포함해야 합니다')
    .regex(/[a-z]/, '비밀번호는 소문자를 포함해야 합니다')
    .regex(/\d/, '비밀번호는 숫자를 포함해야 합니다'),
  passwordConfirm: z.string(),
}).refine(data => data.password === data.passwordConfirm, {
  message: '비밀번호가 일치하지 않습니다',
  path: ['passwordConfirm'],
});

export const LoginRequestDtoSchema = z.object({
  email: z.email('유효한 이메일을 입력해주세요.'),
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
});

export const UserResponseDtoSchema = z.object({
  user: UserSchema,
});
