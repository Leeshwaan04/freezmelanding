import Link from 'next/link';

interface PricingCardProps {
  title: string;
  amount: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
}

export default function PricingCard({
  title,
  amount,
  description,
  features,
  isHighlighted = false
}: PricingCardProps) {
  return (
    <div className={`relative rounded-lg p-8 ${
      isHighlighted 
        ? 'bg-gradient-to-br from-primary to-accent text-white shadow-xl' 
        : 'bg-card border-2 border-border'
    }`}>
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent rounded-full">
          <span className="font-body text-sm font-semibold text-accent-foreground">Most Popular</span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className={`font-headline text-2xl font-semibold mb-2 ${
          isHighlighted ? 'text-white' : 'text-foreground'
        }`}>
          {title}
        </h3>
        <div className="mb-3">
          <span className={`font-headline text-4xl font-bold ${
            isHighlighted ? 'text-white' : 'text-primary'
          }`}>
            {amount}
          </span>
        </div>
        <p className={`font-body text-sm ${
          isHighlighted ? 'text-white/90' : 'text-muted-foreground'
        }`}>
          {description}
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg 
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                isHighlighted ? 'text-white' : 'text-success'
              }`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className={`font-body text-sm ${
              isHighlighted ? 'text-white' : 'text-foreground'
            }`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/application"
        className={`block w-full py-3 px-6 rounded-md text-center font-headline font-semibold transition-all duration-200 ${
          isHighlighted
            ? 'bg-white text-primary hover:shadow-lg hover:-translate-y-0.5'
            : 'bg-accent text-accent-foreground hover:shadow-hover hover:-translate-y-0.5'
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}