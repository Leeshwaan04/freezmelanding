import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
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
  description,
  features,
  isPopular = false,
  ctaText,
  ctaLink,
  className = '',
}) => {
  return (
    <div
      className={`relative bg-card rounded-lg shadow-card border-2 ${
        isPopular ? 'border-accent' : 'border-border'
      } p-8 transition-all duration-300 hover:shadow-hover hover:-translate-y-1 ${className}`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-accent rounded-full">
          <span className="font-headline text-sm font-semibold text-accent-foreground">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="font-headline text-2xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <div className="mb-4">
          <span className="font-headline text-5xl font-bold text-primary">{price}</span>
        </div>
        <p className="font-body text-muted-foreground">{description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Icon
              name={feature.included ? 'CheckCircleIcon' : 'XCircleIcon'}
              size={20}
              variant="solid"
              className={feature.included ? 'text-success mt-0.5' : 'text-muted-foreground mt-0.5'}
            />
            <span
              className={`font-body text-sm ${
                feature.included ? 'text-foreground' : 'text-muted-foreground line-through'
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={ctaLink}
        className={`block w-full py-3 px-6 rounded-md text-center font-headline font-semibold transition-all duration-200 ${
          isPopular
            ? 'bg-accent text-accent-foreground hover:shadow-hover hover:-translate-y-0.5'
            : 'bg-secondary text-secondary-foreground hover:shadow-hover hover:-translate-y-0.5'
        }`}
      >
        {ctaText}
      </a>
    </div>
  );
};

export default PricingCard;