import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PrivacyHero from './components/PrivacyHero';
import PrivacySection from './components/PrivacySection';
import SecurityMeasures from './components/SecurityMeasures';
import ComplianceCertifications from './components/ComplianceCertifications';
import UserRightsControl from './components/UserRightsControl';
import PrivacyFooter from './components/PrivacyFooter';

export const metadata: Metadata = {
  title: 'Privacy & Security - Freezme',
  description: 'Comprehensive privacy policy and security measures protecting your personal information with industry-leading standards. Learn about our data protection commitments, compliance certifications, and your rights.',
};

export default function PrivacyAndSecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <PrivacyHero />
        <PrivacySection />
        <SecurityMeasures />
        <ComplianceCertifications />
        <UserRightsControl />
      </main>

      <PrivacyFooter />
    </div>
  );
}