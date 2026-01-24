import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  priceLabel?: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  priceLabel,
  description,
  features,
  isPopular = false,
  ctaText,
  ctaLink,
  className = '',
}) => {
  return (
    <div
      className={`relative flex flex-col h-full rounded-2xl p-8 transition-all duration-300 ${isPopular
        ? 'bg-card/80 backdrop-blur-md border border-accent/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-accent/5 scale-100 lg:scale-105 z-10'
        : 'bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-lg hover:border-accent/20 z-0'
        } ${className}`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-accent text-accent-foreground rounded-full shadow-lg shadow-accent/20">
          <span className="font-headline text-xs font-bold uppercase tracking-widest whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className={`font-headline text-2xl font-bold mb-2 ${isPopular ? 'text-foreground' : 'text-foreground/80'}`}>
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground min-h-[40px] mb-6">{description}</p>

        <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-muted/30 border border-border/30 mb-2 min-h-[100px]">
          {price ? (
            <span className="font-headline text-4xl md:text-5xl font-bold text-foreground">{price}</span>
          ) : (
            <span className="font-headline text-2xl font-bold text-foreground/80">Membership</span>
          )}

          {priceLabel && (
            <span className="inline-block mt-2 font-body text-sm font-semibold text-accent-foreground px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
              {priceLabel}
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={`mt-0.5 rounded-full p-0.5 ${feature.included ? 'bg-success/10' : 'bg-muted'}`}>
              <Icon
                name={feature.included ? 'CheckIcon' : 'XIcon'}
                size={14}
                className={feature.included ? 'text-success' : 'text-muted-foreground'}
              />
            </div>
            <span
              className={`font-body text-sm leading-relaxed ${feature.included ? 'text-foreground/90' : 'text-muted-foreground/70'
                }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={ctaLink}
        className={`block w-full py-4 px-6 rounded-xl text-center font-headline text-sm font-bold transition-all duration-200 ${isPopular
          ? 'bg-gradient-to-r from-accent to-accent/90 text-accent-foreground shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5'
          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md hover:-translate-y-0.5'
          }`}
      >
        {ctaText}
      </a>
    </div>
  );
};

export default PricingCard;