import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Ready to Invest in Your Future?
          </h2>
          <p className="font-body text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of intentional daters who chose quality over quantity. Your perfect match is waiting for a thoughtful introduction.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="/application"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-headline font-semibold rounded-md hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Your Application
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </a>
            <a
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-headline font-semibold rounded-md border-2 border-white/30 hover:bg-white/20 transition-all duration-200"
            >
              Learn More
              <Icon name="InformationCircleIcon" size={20} variant="outline" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-accent" />
              <span className="font-body text-sm">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-accent" />
              <span className="font-body text-sm">Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-accent" />
              <span className="font-body text-sm">Secure Payments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;