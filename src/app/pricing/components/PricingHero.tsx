import React from 'react';

interface PricingHeroProps {
  className?: string;
}

const PricingHero: React.FC<PricingHeroProps> = ({ className = '' }) => {
  return (
    <section className={`bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Membership & Services
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience a curated matchmaking service built on trust, privacy, and results. Start with a complimentary profile review to see if we are the right fit for you.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full">
            <span className="font-body text-sm font-medium text-accent-foreground">
              Premium Service • Human Curation • Zero Upfront Cost
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;