
import { NextResponse } from 'next/server';
import { localDb } from '@/lib/local-db';

export async function GET() {
    try {
        const applications = await localDb.getApplications();
        return NextResponse.json(applications, { status: 200 });
    } catch (error) {
        console.error('Admin API Error:', error);
        return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 });
    }
}
