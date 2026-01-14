import Icon from '@/components/ui/AppIcon';

interface PhilosophySectionProps {
  className?: string;
}

const PhilosophySection = ({ className = '' }: PhilosophySectionProps) => {
  const philosophyPoints = [
    {
      icon: 'PauseIcon',
      title: 'The Intentional Pause',
      description: 'In a world of endless swipes, we believe in the power of thoughtful consideration. Every introduction is carefully curated, not algorithmically generated.',
    },
    {
      icon: 'UserIcon',
      title: 'Human Touch Matters',
      description: 'No AI can understand the nuances of human connection. Our founder personally reviews every profile and makes introductions based on genuine compatibility.',
    },
    {
      icon: 'HeartIcon',
      title: 'Depth Over Dopamine',
      description: "We're not here to give you endless options or quick dopamine hits. We're here to facilitate meaningful connections with people who truly align with your values.",
    },
    {
      icon: 'ChatBubbleLeftRightIcon',
      title: 'Honest Expectations',
      description: "We don't promise fairy tale endings. We promise thoughtful beginnings with carefully selected individuals who share your relationship goals.",
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Our Philosophy
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Freezme represents clarity, respect, and human judgment in an increasingly automated dating landscape.
            </p>
          </div>

          {/* Philosophy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophyPoints.map((point, index) => (
              <div
                key={index}
                className="bg-popover p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={point.icon as any} size={24} variant="outline" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-semibold text-foreground mb-3">
                      {point.title}
                    </h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-lg border-l-4 border-primary">
            <blockquote className="font-body text-lg md:text-xl text-foreground italic text-center">
              "We don't promise fairy tale endings—we promise thoughtful beginnings."
            </blockquote>
            <p className="font-body text-sm text-muted-foreground text-center mt-4">— Sumit, Founder of Freezme</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;