import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { mockUsers } from '@/src/entities/user/user.fixtures';

export async function GET(request: NextRequest) {
  try {
    if (process.env.NODE_ENV === 'development') {
      await new Promise(resolve => setTimeout(resolve, 300));
      return NextResponse.json(mockUsers, { status: 200 });
    }

    const token = await request.cookies.get('token')?.value;
    const response = await fetch(`${process.env.API_URL}/user`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const error = await response.text();

      return NextResponse.json(
        { error: error || 'Failed to fetch user' },
        { status: response.status },
      );
    }

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  }
  catch (error) {
    console.error('[API Route] GET /api/user error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
