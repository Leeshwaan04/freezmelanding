import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, fullName, phone, leadSource } = body;

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
            try {
                const { error } = await supabase
                    .from('leads')
                    .insert([
                        {
                            full_name: fullName || 'Newsletter Subscriber',
                            email: email,
                            phone: phone || null,
                            source: leadSource || 'unknown',
                            metadata: body.metadata || {},
                            submitted_at: new Date().toISOString(),
                        },
                    ]);

                if (error) {
                    console.error('Supabase Lead Error:', error);
                }
            } catch (dbError) {
                console.error('Database lead connection error:', dbError);
            }
        }

        console.log('Lead Captured:', { fullName, email, phone, leadSource });

        return NextResponse.json(
            { message: 'Lead captured successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Lead API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
