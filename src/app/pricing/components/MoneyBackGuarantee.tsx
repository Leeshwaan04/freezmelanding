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
      title: 'Expert Assessment',
      description: 'We guarantee a thorough evaluation of your application by our expert relationship team within 3-5 business days.',
    },
    {
      title: 'Service Commitment',
      description: 'Once accepted, we guarantee a dedicated approach to finding your curated introductions within our specified timelines.',
    },
    {
      title: 'Quality Introductions',
      description: 'Every introduction is hand-vetted for depth and alignment. We never prioritize quantity over the quality of a potential connection.',
    },
    {
      title: 'Personalized Support',
      description: 'No scripts or bots. You receive direct, human support and feedback throughout your entire Freezme journey.',
    },
  ];

  return (
    <section className={`py-16 md:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-2xl p-8 md:p-12 shadow-card border border-border/50">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 shadow-lg shadow-primary/20">
                <Icon name="HandThumbUpIcon" size={32} variant="solid" className="text-white" />
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Our Excellence Guarantee
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                We stand behind our curation process with absolute confidence. Your journey toward a meaningful partnership is in expert hands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {guaranteePoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-sm border border-border/30 hover:shadow-hover transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <Icon
                      name="CheckBadgeIcon"
                      size={24}
                      variant="solid"
                      className="text-primary mt-1 flex-shrink-0"
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

            <div className="bg-card rounded-lg p-6 border-l-4 border-primary">
              <div className="flex items-start gap-3">
                <Icon name="InformationCircleIcon" size={24} variant="solid" className="text-primary mt-1" />
                <div>
                  <h3 className="font-headline text-base font-semibold text-foreground mb-2">
                    A Note on Compatibility
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    While we cannot guarantee chemistry (which is organic and personal), we guarantee our process of providing high-intent, hand-vetted introductions based on deep values and lifestyle alignment. We are committed to your success.
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