import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ProcessOverviewProps {
  className?: string;
}

const ProcessOverview = ({ className = '' }: ProcessOverviewProps) => {
  const steps = [
    {
      number: '01',
      title: 'Apply & Share Your Story',
      description: "Complete our thoughtful application that helps us understand who you are, what you value, and what you're looking for in a partner.",
      icon: 'DocumentTextIcon',
    },
    {
      number: '02',
      title: 'Personal Assessment',
      description: "Our founder reviews your profile personally, ensuring you're ready for intentional dating and align with our community values.",
      icon: 'UserCircleIcon',
    },
    {
      number: '03',
      title: 'Curated Introduction',
      description: "When we find someone truly compatible, we make a thoughtful introduction with context about why we think you'd connect.",
      icon: 'SparklesIcon',
    },
    {
      number: '04',
      title: 'Your Journey Begins',
      description: "Connect at your own pace with someone who shares your values and relationship goals. We're here to support, not rush.",
      icon: 'HeartIcon',
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              How Freezme Works
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent 4-step process designed to facilitate meaningful connections.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 bg-card p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <span className="font-headline text-2xl font-bold text-accent-foreground">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-grow">
                  <div className="flex items-start gap-3 mb-3">
                    <Icon name={step.icon as any} size={28} variant="outline" className="text-primary flex-shrink-0 mt-1" />
                    <h3 className="font-headline text-xl md:text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-full h-8 w-0.5 bg-border"></div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-headline font-semibold rounded-md hover:-translate-y-0.5 hover:shadow-hover transition-all duration-200"
            >
              Learn More About Our Process
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;