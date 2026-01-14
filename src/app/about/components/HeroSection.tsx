interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-4xl lg:text-6xl font-semibold text-foreground mb-6">
            The Philosophy Behind Freezme
          </h1>
          <p className="font-body text-lg lg:text-xl text-muted-foreground leading-relaxed">
            In a world of endless swipes and algorithmic matching, we believe in the power of human judgment, intentional pauses, and thoughtful introductions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;