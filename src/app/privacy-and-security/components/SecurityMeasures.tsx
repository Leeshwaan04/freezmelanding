import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface SecurityFeature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface SecurityMeasuresProps {
  className?: string;
}

const SecurityMeasures: React.FC<SecurityMeasuresProps> = ({ className = '' }) => {
  const securityFeatures: SecurityFeature[] = [
    {
      id: 1,
      icon: 'LockClosedIcon',
      title: 'End-to-End Encryption',
      description: 'All data transmission is protected with military-grade 256-bit SSL/TLS encryption, ensuring your information remains confidential during transfer.'
    },
    {
      id: 2,
      icon: 'ServerIcon',
      title: 'Secure Cloud Infrastructure',
      description: 'Your data is stored on ISO 27001 certified cloud servers with redundant backups, disaster recovery protocols, and 99.9% uptime guarantee.'
    },
    {
      id: 3,
      icon: 'FingerPrintIcon',
      title: 'Multi-Factor Authentication',
      description: 'Enhanced account security through two-factor authentication, biometric verification, and secure login protocols to prevent unauthorized access.'
    },
    {
      id: 4,
      icon: 'ShieldCheckIcon',
      title: 'Regular Security Audits',
      description: 'Quarterly penetration testing and security assessments by certified third-party cybersecurity firms to identify and address vulnerabilities.'
    },
    {
      id: 5,
      icon: 'EyeIcon',
      title: 'Privacy by Design',
      description: 'Security and privacy considerations are integrated into every aspect of our platform development, from initial design to deployment.'
    },
    {
      id: 6,
      icon: 'DocumentTextIcon',
      title: 'Compliance Certifications',
      description: 'Full compliance with GDPR, Indian IT Act 2000, and international data protection regulations, verified through regular audits.'
    }
  ];

  return (
    <section className={`py-16 md:py-24 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Security Infrastructure
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade security measures protecting your sensitive information 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={28} variant="solid" className="text-primary" />
                </div>
                <h3 className="font-headline text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card border-2 border-success/20 rounded-lg p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Icon name="CheckBadgeIcon" size={28} variant="solid" className="text-success" />
              </div>
              <div className="flex-1">
                <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                  Security Breach Protocol
                </h3>
                <p className="font-body text-base text-muted-foreground mb-4">
                  In the unlikely event of a security incident, we have comprehensive protocols in place:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRightIcon" size={20} variant="outline" className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground">Immediate notification to affected users within 72 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRightIcon" size={20} variant="outline" className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground">Transparent communication about the nature and scope of the breach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRightIcon" size={20} variant="outline" className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground">Immediate remediation actions and enhanced security measures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRightIcon" size={20} variant="outline" className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground">Cooperation with law enforcement and regulatory authorities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityMeasures;