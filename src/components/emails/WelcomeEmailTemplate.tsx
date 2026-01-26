import * as React from 'react';

interface WelcomeEmailProps {
    fullName: string;
}

export const WelcomeEmailTemplate: React.FC<Readonly<WelcomeEmailProps>> = ({
    fullName,
}) => (
    <div style={{
        fontFamily: 'Crimson Text, Garamond, serif',
        color: '#2A2A2A',
        backgroundColor: '#FDFCFA',
        padding: '40px 20px',
        maxWidth: '600px',
        margin: '0 auto',
        border: '1px solid #E9ECEF',
        borderRadius: '8px'
    }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h1 style={{ color: '#2C5F5D', fontSize: '28px', margin: '0' }}>Freezme</h1>
            <p style={{ color: '#8B7355', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', margin: '5px 0' }}>
                Invite-Only Introductions
            </p>
        </div>

        <div style={{ lineHeight: '1.6' }}>
            <p>Hello {fullName},</p>

            <p>
                Thank you for applying to join the Freezme community. We have received your application and
                our curation team has begun the review process.
            </p>

            <p>
                At Freezme, we prioritize trust and intentionality. Because we are an <strong>invite-only</strong> community,
                we manually assess every profile to ensure it aligns with our core values of emotional intelligence
                and high-intent dating.
            </p>

            <h3 style={{ color: '#2C5F5D', marginTop: '30px' }}>What happens next?</h3>
            <ul style={{ paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>
                    <strong>Manual Review:</strong> Our team will evaluate your compatibility potential.
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <strong>Personal Outreach:</strong> If your profile is a match for our current community,
                    a relationship manager will reach out to you directly to guide you through the next steps.
                </li>
            </ul>

            <p style={{ marginTop: '30px' }}>
                We appreciate your patience while we maintain the exclusivity and quality of our network.
            </p>

            <p>
                Warm regards,<br />
                <strong>The Freezme Curation Team</strong>
            </p>
        </div>

        <div style={{
            marginTop: '40px',
            paddingTop: '20px',
            borderTop: '1px solid #E9ECEF',
            textAlign: 'center',
            fontSize: '12px',
            color: '#6B6B6B'
        }}>
            <p>© {new Date().getFullYear()} Freezme. All rights reserved.</p>
            <p>Premium intros for intentional daters.</p>
        </div>
    </div>
);
