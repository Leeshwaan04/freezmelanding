import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface PricingPreviewProps {
  className?: string;
}

const PricingPreview = ({ className = '' }: PricingPreviewProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Transparent Pricing
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium service with honest pricing. No hidden fees, no surprises.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-gradient-to-br from-card to-muted p-8 lg:p-12 rounded-lg shadow-lg border border-border">
            <div className="text-center mb-8">
              <h3 className="font-headline text-2xl font-semibold text-foreground mb-2">
                Freezme Membership
              </h3>
              <p className="font-body text-base text-muted-foreground">
                Investment in your future relationship
              </p>
            </div>

            {/* Pricing Structure */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-4 bg-popover rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="DocumentCheckIcon" size={20} variant="solid" className="text-accent" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="font-headline text-lg font-semibold text-foreground">
                      Application Assessment
                    </h4>
                    <span className="font-headline text-xl font-bold text-primary">₹5,000</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    One-time fee for personal profile review and community fit assessment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-popover rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="SparklesIcon" size={20} variant="solid" className="text-primary" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="font-headline text-lg font-semibold text-foreground">
                      Introduction Fee
                    </h4>
                    <span className="font-headline text-xl font-bold text-primary">₹25,000</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    Per curated introduction with detailed compatibility context
                  </p>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="border-t border-border pt-6 mb-8">
              <h4 className="font-headline text-lg font-semibold text-foreground mb-4">
                What's Included:
              </h4>
              <ul className="space-y-3">
                {[
                  'Personal profile review by founder',
                  'Thoughtful compatibility assessment',
                  'Detailed introduction context',
                  'Ongoing support and guidance',
                  'Complete privacy protection',
                  'No time pressure or rush',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-headline font-semibold rounded-md hover:-translate-y-0.5 hover:shadow-hover transition-all duration-200"
              >
                View Full Pricing Details
                <Icon name="ArrowRightIcon" size={20} variant="outline" />
              </Link>
            </div>
          </div>

          {/* Value Statement */}
          <div className="mt-8 text-center">
            <p className="font-body text-sm text-muted-foreground">
              Quality introductions require time, care, and expertise. Our pricing reflects the value of human curation over algorithmic matching.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;