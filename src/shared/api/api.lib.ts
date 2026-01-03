import type z from 'zod';

export function responseContract<T extends z.ZodType>(schema: T) {
  return (data: unknown): z.infer<T> => {
    return schema.parse(data);
  };
}
