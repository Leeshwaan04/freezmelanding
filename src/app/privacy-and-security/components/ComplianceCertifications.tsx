import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Certification {
  id: number;
  name: string;
  description: string;
  verifiedDate: string;
}

interface ComplianceCertificationsProps {
  className?: string;
}

const ComplianceCertifications: React.FC<ComplianceCertificationsProps> = ({ className = '' }) => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: 'GDPR Compliance',
      description: 'Full compliance with European General Data Protection Regulation standards for data privacy and user rights.',
      verifiedDate: 'January 2026'
    },
    {
      id: 2,
      name: 'ISO 27001 Certified',
      description: 'International standard for information security management systems, ensuring systematic approach to data protection.',
      verifiedDate: 'December 2025'
    },
    {
      id: 3,
      name: 'Indian IT Act 2000',
      description: 'Complete adherence to Indian Information Technology Act and associated rules for data protection and privacy.',
      verifiedDate: 'January 2026'
    },
    {
      id: 4,
      name: 'PCI DSS Level 1',
      description: 'Payment Card Industry Data Security Standard compliance for secure payment processing and financial data handling.',
      verifiedDate: 'November 2025'
    }
  ];

  return (
    <section className={`py-16 md:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Compliance & Certifications
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Verified compliance with international and national data protection standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-card transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="CheckBadgeIcon" size={28} variant="solid" className="text-success" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                      {cert.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-3">
                      {cert.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Icon name="CalendarIcon" size={16} variant="outline" className="text-primary" />
                      <span className="font-body text-xs text-muted-foreground">
                        Verified: {cert.verifiedDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="DocumentCheckIcon" size={32} variant="solid" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-headline text-2xl font-semibold text-foreground mb-3">
                  Annual Third-Party Audits
                </h3>
                <p className="font-body text-base text-muted-foreground mb-4">
                  Our security and privacy practices undergo rigorous annual audits by independent cybersecurity firms. These comprehensive assessments verify our compliance with international standards and identify areas for continuous improvement.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-md">
                    <Icon name="ShieldCheckIcon" size={20} variant="solid" className="text-success" />
                    <span className="font-body text-sm font-medium text-foreground">Security Audit: Q4 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-md">
                    <Icon name="DocumentMagnifyingGlassIcon" size={20} variant="solid" className="text-success" />
                    <span className="font-body text-sm font-medium text-foreground">Compliance Review: Q1 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCertifications;