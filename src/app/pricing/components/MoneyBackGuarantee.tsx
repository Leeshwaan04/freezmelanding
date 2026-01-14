import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface GuaranteePoint {
  title: string;
  description: string;
}

interface MoneyBackGuaranteeProps {
  className?: string;
}

const MoneyBackGuarantee: React.FC<MoneyBackGuaranteeProps> = ({ className = '' }) => {
  const guaranteePoints: GuaranteePoint[] = [
    {
      title: 'Assessment Satisfaction',
      description: 'If you\'re not satisfied with your initial assessment, we\'ll refund 100% of the assessment fee within 7 days.',
    },
    {
      title: 'Service Commitment',
      description: 'We guarantee at least 3 curated introductions within 6 months, or we\'ll extend your service period at no additional cost.',
    },
    {
      title: 'Quality Assurance',
      description: 'Every introduction is carefully vetted. If we fail to meet our quality standards, we\'ll provide additional introductions.',
    },
    {
      title: 'Transparent Process',
      description: 'No hidden fees, no surprise charges. What you see is what you pay, with complete transparency throughout.',
    },
  ];

  return (
    <section className={`py-16 md:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-success/10 via-accent/5 to-primary/10 rounded-2xl p-8 md:p-12 shadow-card border-2 border-success/20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success rounded-full mb-4">
                <Icon name="ShieldCheckIcon" size={32} variant="solid" className="text-white" />
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Our Satisfaction Guarantee
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                We stand behind our service with confidence. Your satisfaction and trust are our top priorities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {guaranteePoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <Icon
                      name="CheckBadgeIcon"
                      size={24}
                      variant="solid"
                      className="text-success mt-1 flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
                        {point.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-lg p-6 border-l-4 border-success">
              <div className="flex items-start gap-3">
                <Icon name="InformationCircleIcon" size={24} variant="solid" className="text-primary mt-1" />
                <div>
                  <h3 className="font-headline text-base font-semibold text-foreground mb-2">
                    Important Note
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    While we cannot guarantee you'll find your perfect match (no honest service can), we guarantee our commitment to providing thoughtful, high-quality introductions based on your preferences and compatibility. Our success rate speaks for itself, but we believe in setting realistic expectations from the start.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyBackGuarantee;