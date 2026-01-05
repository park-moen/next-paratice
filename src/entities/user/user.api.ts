import type { LoginRequestDto, RegisterRequestDto, UserResponseDto } from './user.types';

import type { FetchConfig } from '@/src/shared/api';
import { api, responseContract } from '@/src/shared/api';
import { LoginRequestDtoSchema, RegisterRequestDtoSchema, UserResponseDtoSchema } from './user.contracts';

export const userAPI = {
  /**
   * GET /api/user
   * 현재 로그인한 사용자 정보 조회
   */
  async getUser(config?: FetchConfig): Promise<UserResponseDto> {
    return api.get('/api/user', config).then(responseContract(UserResponseDtoSchema));
  },

  /**
   * POST /api/user/login
   * 사용자 로그인
   */
  async login(loginRequestDto: LoginRequestDto, config?: FetchConfig): Promise<UserResponseDto> {
    const data = LoginRequestDtoSchema.parse(loginRequestDto);
    return api.post('/api/user/login', data, config).then(responseContract(UserResponseDtoSchema));
  },

  /**
   * POST /api/user/register
   * 사용자 회원가입
   */
  async register(registerRequestDto: RegisterRequestDto, config?: FetchConfig): Promise<UserResponseDto> {
    const data = RegisterRequestDtoSchema.parse(registerRequestDto);
    return api.post('/api/user/register', data, config).then(responseContract(UserResponseDtoSchema));
  },

  /**
   * POST /api/user/logout
   * 사용자 로그아웃
   */
  async logout(): Promise<{ message: string }> {
    return api.post<{ message: string }>('/api/user/logout');
  },
};
