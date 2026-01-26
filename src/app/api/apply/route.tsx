import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { resend } from '@/lib/resend';
import { WelcomeEmailTemplate } from '@/components/emails/WelcomeEmailTemplate';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate required fields
        const { email, fullName, phone } = body;
        if (!email || !fullName || !phone) {
            return NextResponse.json(
                { error: 'Missing required fields: email, fullName, and phone are mandatory.' },
                { status: 400 }
            );
        }

        // Try to save to Supabase if configured
        if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
            try {
                const { error } = await supabase
                    .from('applications')
                    .insert([
                        {
                            full_name: body.fullName,
                            email: body.email,
                            phone: body.phone,
                            dob: body.dateOfBirth,
                            gender: body.gender,
                            city: body.city,
                            profession: body.profession,
                            education: body.education,
                            preferences: {
                                age_range: `${body.ageRangeMin}-${body.ageRangeMax}`,
                                height: body.heightPreference,
                                religion: body.religionPreference,
                                education: body.educationPreference,
                                smoking: body.smokingPreference,
                                drinking: body.drinkingPreference,
                                diet: body.dietPreference,
                            },
                            about: {
                                bio: body.aboutYourself,
                                hobbies: body.hobbies,
                                goals: body.relationshipGoals,
                                deal_breakers: body.dealBreakers,
                                history: body.previousRelationships,
                                family_values: body.familyValues,
                            },
                            submitted_at: new Date().toISOString(),
                        },
                    ]);

                if (error) {
                    console.error('Supabase error:', error);
                }
            } catch (dbError) {
                console.error('Database connection error:', dbError);
            }
        }

        // Send Welcome Email via Resend
        if (resend) {
            try {
                const { data, error: emailError } = await resend.emails.send({
                    from: 'Freezme <hello@freezme.in>',
                    to: [email],
                    subject: 'Application Received - Freezme Community',
                    react: <WelcomeEmailTemplate fullName={fullName} />,
                });

                if (emailError) {
                    console.error('Email sending error:', emailError);
                } else {
                    console.log('Welcome email sent successfully:', data?.id);
                }
            } catch (emailErr) {
                console.error('Resend service error:', emailErr);
            }
        }

        // Always log to console as fallback/verification
        console.log('New Application Received:', body);

        return NextResponse.json(
            { message: 'Application submitted successfully', id: Date.now() },
            { status: 200 }
        );
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
