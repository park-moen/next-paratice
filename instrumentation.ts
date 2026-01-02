import { ENV } from './src/shared/config/environment';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    if (process.env.NODE_ENV === 'development' && ENV.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      const { server } = await import('./src/shared/lib/mocks/server');

      server.listen({
        onUnhandledRequest: 'bypass',
      });

      // eslint-disable-next-line no-console
      console.log('🔵 [MSW] Server mocking enabled');
    }
  }
}
