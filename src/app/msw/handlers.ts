import { authHandlers } from '@/src/shared/lib/mocks/handlers/auth';
import { orderHandlers } from '@/src/shared/lib/mocks/handlers/orders';
import { productHandlers } from '@/src/shared/lib/mocks/handlers/products';

export const handlers = [
  ...authHandlers,
  ...productHandlers,
  ...orderHandlers,
];
