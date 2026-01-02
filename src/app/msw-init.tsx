'use client';

import { useEffect, useState } from 'react';
import { ENV } from '@/src/shared/config/environment';

export function MSWInit() {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    const initMSW = async () => {
      if (
        ENV.NEXT_PUBLIC_API_MOCKING !== 'enabled'
        || typeof window === 'undefined'
      ) {
        setMswReady(true);
        return;
      }

      const { worker } = await import('@/src/shared/lib/mocks/browser');
      await worker.start({ onUnhandledRequest: 'bypass', quiet: false });

      setMswReady(true);
    };

    initMSW();
  }, []);

  if (!mswReady) {
    return null;
  }

  return null;
}
