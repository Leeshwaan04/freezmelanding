import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-3xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            Ready to Experience Intentional Dating?
          </h2>
          <p className="font-body text-lg lg:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Join a select community of emotionally intelligent individuals seeking meaningful connections through thoughtful, human-curated introductions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/application"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-headline font-semibold rounded-md hover:-translate-y-0.5 hover:shadow-hover transition-all duration-200"
            >
              Start Your Application
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </Link>

            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-headline font-semibold rounded-md hover:-translate-y-0.5 hover:shadow-hover transition-all duration-200"
            >
              Learn Our Process
              <Icon name="InformationCircleIcon" size={20} variant="outline" />
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="font-body text-base text-primary-foreground/80">
              Have questions? <Link href="/privacy-and-security" className="underline hover:text-primary-foreground transition-colors">Read our privacy policy</Link> or explore our <Link href="/membership" className="underline hover:text-primary-foreground transition-colors">membership options</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;