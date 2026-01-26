import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey && process.env.NODE_ENV === 'production') {
    console.warn('RESEND_API_KEY is not set. Emails will not be sent.');
}

export const resend = resendApiKey ? new Resend(resendApiKey) : null;
