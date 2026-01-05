import { queryOptions } from '@tanstack/react-query';
import { userAPI } from './user.api';

export const userQueryOptions = queryOptions({
  queryKey: ['user', 'current-user'] as const,
  queryFn: async ({ signal }) => {
    return await userAPI.getUser({ signal });
  },
});
