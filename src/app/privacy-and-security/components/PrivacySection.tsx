import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PrivacyItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  details: string[];
}

interface PrivacySectionProps {
  className?: string;
}

const PrivacySection: React.FC<PrivacySectionProps> = ({ className = '' }) => {
  const privacyCommitments: PrivacyItem[] = [
    {
      id: 1,
      icon: 'UserCircleIcon',
      title: 'Data Collection Transparency',
      description: 'We collect only what we need to provide you with exceptional introduction services.',
      details: [
        'Personal information: Name, age, contact details, and preferences',
        'Professional background: Education, career, and lifestyle information',
        'Relationship preferences: Partner expectations and compatibility factors',
        'Communication records: Messages and interactions within our platform',
        'Payment information: Processed securely through certified payment gateways'
      ]
    },
    {
      id: 2,
      icon: 'EyeSlashIcon',
      title: 'How We Use Your Data',
      description: 'Your information is used exclusively for introduction and service improvement.',
      details: [
        'Curating personalized matches based on compatibility and preferences',
        'Facilitating introductions between compatible individuals',
        'Improving our matching algorithms and service quality',
        'Communicating service updates and match notifications',
        'Ensuring platform security and preventing fraudulent activities'
      ]
    },
    {
      id: 3,
      icon: 'ShieldExclamationIcon',
      title: 'Data Protection Measures',
      description: 'Industry-leading security protocols safeguard your sensitive information.',
      details: [
        'End-to-end 256-bit SSL/TLS encryption for all data transmission',
        'Secure cloud storage with redundant backups and disaster recovery',
        'Regular security audits and penetration testing by third-party experts',
        'Multi-factor authentication for account access and verification',
        'Strict access controls limiting employee data access to essential personnel'
      ]
    },
    {
      id: 4,
      icon: 'UserGroupIcon',
      title: 'Third-Party Sharing Policy',
      description: 'We never sell your data. Limited sharing occurs only with your explicit consent.',
      details: [
        'Potential matches: Profile information shared only after mutual interest',
        'Payment processors: Secure transaction data for payment processing',
        'Legal compliance: Information disclosed only when legally required',
        'Service providers: Vetted partners bound by strict confidentiality agreements',
        'No marketing partners: We never share your data with advertisers or marketers'
      ]
    },
    {
      id: 5,
      icon: 'ClockIcon',
      title: 'Data Retention Policy',
      description: 'We retain your information only as long as necessary for service delivery.',
      details: [
        'Active accounts: Data maintained throughout your membership period',
        'Inactive accounts: Profiles archived after 12 months of inactivity',
        'Deleted accounts: Personal data permanently removed within 30 days',
        'Legal requirements: Certain records retained for compliance purposes',
        'Communication history: Stored for 24 months for quality assurance'
      ]
    },
    {
      id: 6,
      icon: 'HandRaisedIcon',
      title: 'Your Rights & Control',
      description: 'You have complete control over your personal information at all times.',
      details: [
        'Access: Request a complete copy of your personal data anytime',
        'Correction: Update or correct inaccurate information in your profile',
        'Deletion: Request permanent deletion of your account and data',
        'Portability: Export your data in a machine-readable format',
        'Objection: Opt-out of specific data processing activities'
      ]
    }
  ];

  return (
    <section className={`py-16 md:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Privacy Commitments
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Detailed transparency about how we collect, use, and protect your personal information
            </p>
          </div>

          <div className="space-y-8">
            {privacyCommitments.map((item) => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-card transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={item.icon as any} size={24} variant="outline" className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline text-xl md:text-2xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-base text-muted-foreground mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3 ml-16">
                  {item.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm md:text-base text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;