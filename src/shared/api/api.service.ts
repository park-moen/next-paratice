import type { FetchConfig, LoginRequestDto, RegisterRequestDto, UserResponseDto } from './api.types';
import { LoginRequestDtoSchema, RegisterRequestDtoSchema, UserResponseDtoSchema } from './api.contracts';
import { api } from './api.instance';
import { responseContract } from './api.lib';

/**
 * GET /api/user
 * 현재 로그인한 사용자 정보 조회
 */
export async function getUser(config?: FetchConfig): Promise<UserResponseDto> {
  return api.get('/api/user', config).then(responseContract(UserResponseDtoSchema));
}

/**
 * POST /api/user/login
 * 사용자 로그인
 */
export async function login(loginRequestDto: LoginRequestDto, config?: FetchConfig): Promise<UserResponseDto> {
  const data = LoginRequestDtoSchema.parse(loginRequestDto);
  return api.post('/api/auth/login', data, config).then(responseContract(UserResponseDtoSchema));
}

/**
 * POST /api/user/register
 * 사용자 회원가입
 */
export async function register(registerRequestDto: RegisterRequestDto, config?: FetchConfig): Promise<UserResponseDto> {
  const data = RegisterRequestDtoSchema.parse(registerRequestDto);
  return api.post('/api/auth/register', data, config).then(responseContract(UserResponseDtoSchema));
}

/**
 * POST /api/user/logout
 * 사용자 로그아웃
 */
export async function logout(): Promise<{ message: string }> {
  return api.post<{ message: string }>('/api/auth/logout');
}
