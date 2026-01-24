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
      className={`group relative flex flex-col h-full rounded-[2rem] p-8 md:p-10 transition-all duration-500 ease-out ${isPopular
        ? 'bg-card border-none shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)] scale-100 lg:scale-[1.04] z-10 ring-1 ring-accent/20'
        : 'bg-background/40 backdrop-blur-md border border-border/40 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-accent/10 z-0'
        } ${className}`}
    >
      {/* Decorative Gradient Glow for Popular card */}
      {isPopular && (
        <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/20 via-transparent to-primary/10 rounded-[2rem] blur opacity-60 pointer-events-none" />
      )}

      {isPopular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-full shadow-lg shadow-accent/20 z-20">
          <span className="font-headline text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap">
            Most Preferred
          </span>
        </div>
      )}

      <div className="relative z-10 text-center mb-10">
        <h3 className={`font-headline text-3xl md:text-4xl font-semibold mb-4 tracking-tight ${isPopular ? 'text-primary' : 'text-foreground/90'}`}>
          {title}
        </h3>

        <div className="w-12 h-0.5 bg-accent/30 mx-auto mb-6 rounded-full group-hover:w-20 transition-all duration-500" />

        <p className="font-body text-base text-muted-foreground leading-relaxed min-h-[48px] px-2">{description}</p>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center mb-10">
        <div className={`w-full p-8 rounded-3xl border transition-all duration-500 flex flex-col items-center justify-center min-h-[140px] ${isPopular
            ? 'bg-primary/5 border-primary/10 shadow-inner'
            : 'bg-muted/20 border-border/30'
          }`}>
          {price ? (
            <div className="flex items-baseline gap-1">
              <span className="font-headline text-5xl md:text-6xl font-bold text-primary">{price}</span>
            </div>
          ) : (
            <span className="font-headline text-2xl md:text-3xl font-medium tracking-wide text-foreground/70 italic">Membership</span>
          )}

          {priceLabel && (
            <div className="mt-4 flex flex-col items-center gap-2">
              <div className="h-px w-8 bg-border" />
              <span className="font-body text-xs font-bold uppercase tracking-widest text-accent text-center">
                {priceLabel}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10 flex-grow mb-10">
        <h4 className="font-headline text-xs uppercase tracking-widest text-muted-foreground/60 mb-6 font-bold px-1">Included Benefits</h4>
        <ul className="space-y-5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-4 group/item">
              <div className={`mt-1 flex-shrink-0 transition-all duration-300 ${feature.included
                  ? 'text-primary'
                  : 'text-muted-foreground/30'
                }`}>
                {feature.included ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 scale-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                  </svg>
                )}
              </div>
              <span
                className={`font-body text-sm leading-snug transition-colors duration-300 ${feature.included
                    ? 'text-foreground/80 group-hover/item:text-foreground'
                    : 'text-muted-foreground/50'
                  }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 pt-4">
        <a
          href={ctaLink}
          className={`group/btn relative flex items-center justify-center w-full py-5 px-8 rounded-2xl overflow-hidden transition-all duration-500 ${isPopular
            ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1'
            : 'bg-foreground/5 text-foreground hover:bg-foreground/10 hover:-translate-y-1'
            }`}
        >
          {/* Shimmer Effect */}
          {isPopular && (
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-[30deg] -translate-x-full group-hover/btn:animate-shimmer" />
          )}

          <span className="relative font-headline text-lg font-semibold tracking-wide">
            {ctaText}
          </span>

          <Icon name="ArrowRightIcon" size={20} className={`ml-2 transform transition-transform duration-300 group-hover/btn:translate-x-1 ${isPopular ? 'text-white/80' : 'text-foreground/40'
            }`} />
        </a>
      </div>
    </div>
  );
};

export default PricingCard;