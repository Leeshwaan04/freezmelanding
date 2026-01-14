import Icon from '@/components/ui/AppIcon';

interface WhyChooseSectionProps {
  className?: string;
}

const WhyChooseSection = ({ className = '' }: WhyChooseSectionProps) => {
  const reasons = [
    {
      icon: 'ClockIcon',
      title: 'Relief from Dating Fatigue',
      description: 'No more endless swiping, ghosting, or superficial conversations. We handle the search so you can focus on genuine connections.',
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Verified & Vetted',
      description: 'Every member is personally reviewed and verified. We ensure everyone is serious about finding a meaningful relationship.',
    },
    {
      icon: 'AcademicCapIcon',
      title: 'Emotionally Intelligent Matching',
      description: 'We consider values, life goals, communication styles, and emotional readiness—not just surface-level compatibility.',
    },
    {
      icon: 'EyeSlashIcon',
      title: 'Complete Privacy',
      description: 'No public profiles, no browsing by strangers. Your information is shared only with carefully selected potential matches.',
    },
    {
      icon: 'UserGroupIcon',
      title: 'Exclusive Community',
      description: 'Join a community of intentional daters—professionals who value quality, depth, and authentic connection.',
    },
    {
      icon: 'ChatBubbleBottomCenterTextIcon',
      title: 'Ongoing Support',
      description: "We're here throughout your journey with guidance, feedback, and support as you navigate meaningful connections.",
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Why Choose Freezme?
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just different from dating apps—we're the antithesis. Here's what makes us unique.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-popover p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-border"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={reason.icon as any} size={28} variant="outline" className="text-accent" />
                  </div>
                  <h3 className="font-headline text-lg font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Callout */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-headline text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="XMarkIcon" size={24} variant="solid" className="text-destructive" />
                  Traditional Dating Apps
                </h3>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Endless swiping with no real connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Algorithm-driven matches lacking context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Public profiles browsed by thousands</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Quantity over quality approach</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="CheckIcon" size={24} variant="solid" className="text-success" />
                  Freezme Approach
                </h3>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Thoughtful, curated introductions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Human judgment with personal context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Complete privacy and discretion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Quality over quantity philosophy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;