export const mockUsers = {
  user: {
    id: '1',
    email: 'newuser@example.com',
    username: 'John Doe',
    nickname: 'Reviewer',
    avatar: 'https://i.pravatar.cc/150?u=john',
    level: 12,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
  },
} as const;

export const mockLoginRequest = {
  email: 'newuser@example.com',
  password: 'password123',
} as const;

export const mockRegisterRequest = {
  username: 'John Doe',
  nickname: 'Reviewer',
  email: 'newuser@example.com',
  password: 'password123',
  passwordConfirm: 'password123',
} as const;
