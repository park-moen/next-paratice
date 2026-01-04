import type { LoginRequestDto, RegisterRequestDto, UserResponseDto } from './user.types';
import { api } from '@/src/shared/api/api.instance';
import { responseContract } from '@/src/shared/api/api.lib';
import { LoginRequestDtoSchema, RegisterRequestDtoSchema, UserResponseDtoSchema } from './user.contracts';

export const userAPI = {
  /**
   * GET /api/user
   * 현재 로그인한 사용자 정보 조회
   */
  async getUser(): Promise<UserResponseDto> {
    return api.get('/api/user').then(responseContract(UserResponseDtoSchema));
  },

  /**
   * POST /api/user/login
   * 사용자 로그인
   */
  async login(loginRequestDto: LoginRequestDto): Promise<UserResponseDto> {
    const data = LoginRequestDtoSchema.parse(loginRequestDto);
    return api.post('/api/user/login', data).then(responseContract(UserResponseDtoSchema));
  },

  /**
   * POST /api/user/register
   * 사용자 회원가입
   */
  async register(registerRequestDto: RegisterRequestDto): Promise<UserResponseDto> {
    const data = RegisterRequestDtoSchema.parse(registerRequestDto);
    return api.post('/api/user/register', data).then(responseContract(UserResponseDtoSchema));
  },

  /**
   * POST /api/user/logout
   * 사용자 로그아웃
   */
  async logout(): Promise<{ message: string }> {
    return api.post<{ message: string }>('/api/user/logout');
  },
};
