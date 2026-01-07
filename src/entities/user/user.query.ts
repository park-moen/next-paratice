import { queryOptions } from '@tanstack/react-query';
import { getUser } from '@/src/shared/api';

export const userQueryOptions = queryOptions({
  queryKey: ['user', 'current-user'] as const,
  queryFn: async ({ signal }) => {
    return await getUser({ signal });
  },
});
