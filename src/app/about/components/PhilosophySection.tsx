interface Philosophy {
  id: number;
  title: string;
  content: string;
}

interface PhilosophySectionProps {
  className?: string;
}

const PhilosophySection = ({ className = '' }: PhilosophySectionProps) => {
  const philosophies: Philosophy[] = [
    {
      id: 1,
      title: "The Antithesis of Swipe Culture",
      content: "Modern dating apps have gamified human connection, reducing potential partners to profile pictures and bio snippets. We reject this approach entirely. Freezme represents a return to thoughtful, human-curated introductions where depth matters more than dopamine hits."
    },
    {
      id: 2,
      title: "Intentional Pause in a Fast World",
      content: "The name 'Freezme' embodies our core philosophy—the power of pausing, reflecting, and being intentional. In a world that demands instant gratification, we believe the best connections come from careful consideration, not rapid-fire swiping."
    },
    {
      id: 3,
      title: "Human Judgment Over Algorithms",
      content: "No algorithm can truly understand the nuances of human compatibility, emotional readiness, or relationship potential. Our human-curated approach considers factors that no machine learning model can capture—intuition, emotional intelligence, and genuine compatibility."
    },
    {
      id: 4,
      title: "Exclusivity Creates Value",
      content: "We're not for everyone, and that's by design. By maintaining high standards and working with a select group of emotionally mature individuals, we create an environment where meaningful connections can flourish."
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-accent/5 via-background to-primary/5 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Our Philosophy
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Understanding the principles that guide every introduction we make
            </p>
          </div>

          <div className="space-y-12">
            {philosophies.map((philosophy, index) => (
              <div
                key={philosophy.id}
                className="bg-card p-8 lg:p-10 rounded-lg shadow-card"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-headline text-xl font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline text-xl lg:text-2xl font-semibold text-foreground mb-4">
                      {philosophy.title}
                    </h3>
                    <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed">
                      {philosophy.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;