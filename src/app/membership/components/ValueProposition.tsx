import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ValuePoint {
  icon: string;
  title: string;
  description: string;
}

interface ValuePropositionProps {
  className?: string;
}

const ValueProposition: React.FC<ValuePropositionProps> = ({ className = '' }) => {
  const valuePoints: ValuePoint[] = [
    {
      icon: 'UserGroupIcon',
      title: 'Human Curation',
      description: 'Every match is personally reviewed and curated by our team, not an algorithm.',
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Privacy First',
      description: 'Your information is protected with bank-level security and never shared without consent.',
    },
    {
      icon: 'SparklesIcon',
      title: 'Quality Over Quantity',
      description: 'We focus on meaningful introductions, not endless swipes and superficial connections.',
    },
    {
      icon: 'ClockIcon',
      title: 'Time Efficient',
      description: 'Save hundreds of hours by letting us handle the vetting and matching process.',
    },
  ];

  return (
    <section className={`py-16 md:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Why Invest in Freezme?
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Compare our premium service to months of dating app subscriptions, wasted time, and emotional exhaustion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {valuePoints.map((point, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Icon name={point.icon as any} size={24} variant="outline" className="text-accent" />
              </div>
              <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;