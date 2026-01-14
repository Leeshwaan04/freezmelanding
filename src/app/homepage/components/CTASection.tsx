import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/80 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            Ready for Intentional Dating?
          </h2>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join a community of emotionally mature individuals who value quality connections over endless swiping.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/application"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-headline font-semibold rounded-md hover:-translate-y-0.5 hover:shadow-hover transition-all duration-200 text-lg"
            >
              Start Your Application
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground font-headline font-semibold rounded-md hover:bg-primary-foreground hover:text-primary transition-all duration-200 text-lg"
            >
              Meet the Founder
            </Link>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="ShieldCheckIcon" size={24} variant="solid" className="text-primary-foreground" />
              </div>
              <h3 className="font-headline text-base font-semibold text-primary-foreground mb-1">
                Verified Members
              </h3>
              <p className="font-body text-sm text-primary-foreground/80">
                Every profile personally reviewed
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="LockClosedIcon" size={24} variant="solid" className="text-primary-foreground" />
              </div>
              <h3 className="font-headline text-base font-semibold text-primary-foreground mb-1">
                Complete Privacy
              </h3>
              <p className="font-body text-sm text-primary-foreground/80">
                Your information stays secure
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="HeartIcon" size={24} variant="solid" className="text-primary-foreground" />
              </div>
              <h3 className="font-headline text-base font-semibold text-primary-foreground mb-1">
                Human Curated
              </h3>
              <p className="font-body text-sm text-primary-foreground/80">
                No algorithms, just care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;