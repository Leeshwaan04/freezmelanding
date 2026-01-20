import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface SecurityFeature {
  icon: string;
  title: string;
  description: string;
}

interface PaymentSecurityProps {
  className?: string;
}

const DataPrivacySecurity: React.FC<PaymentSecurityProps> = ({ className = '' }) => {
  const securityFeatures: SecurityFeature[] = [
    {
      icon: 'ShieldCheckIcon',
      title: 'End-to-End Encryption',
      description: 'Your personal data is encrypted and stored in secure, private servers.',
    },
    {
      icon: 'EyeSlashIcon',
      title: 'Confidentiality First',
      description: 'We never share your profile without your explicit, case-by-case consent.',
    },
    {
      icon: 'UserGroupIcon',
      title: 'Verified Members',
      description: 'Every application is human-vetted to maintain community integrity.',
    },
    {
      icon: 'LockClosedIcon',
      title: 'Strict Data Policy',
      description: 'We follow global standards for data protection and user privacy.',
    },
  ];

  return (
    <section className={`py-16 md:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Your Privacy is Our Priority
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Matchmaking is built on trust. We protect your personal story with bank-level security and human discretion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-card text-center transition-transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} size={24} variant="solid" className="text-primary" />
                </div>
                <h3 className="font-headline text-base font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8 shadow-card border border-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-headline text-xl font-semibold text-foreground mb-3 flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="DocumentCheckIcon" size={24} className="text-primary" />
                  Our Commitment to You
                </h3>
                <p className="font-body text-sm text-muted-foreground max-w-xl leading-relaxed">
                  We collect your information solely for the purpose of matching you with compatible partners. Unlike apps, we don&apos;t sell data or use algorithms to keep you scrolling. Our goal is to get you off the screen and into a meaningful relationship.
                </p>
              </div>
              <div className="flex-1 text-center md:text-right">
                <div className="inline-flex flex-col gap-4">
                  <div className="flex items-center gap-3 justify-center md:justify-end">
                    <Icon name="ShieldCheckIcon" size={32} variant="solid" className="text-primary" />
                    <span className="font-headline text-sm font-semibold text-foreground uppercase tracking-widest">
                      100% Secure & Private
                    </span>
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

export default DataPrivacySecurity;