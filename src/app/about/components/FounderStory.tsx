import AppImage from '@/components/ui/AppImage';

interface FounderStoryProps {
  className?: string;
}

const FounderStory = ({ className = '' }: FounderStoryProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Founder Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-lg shadow-card">
                <AppImage
                  src="/images/sumit_headshot_hd.jpg"
                  alt="Professional portrait of Sumit, founder of Freezme, wearing navy blazer in modern office setting"
                  className="w-full h-[500px] lg:h-[600px] object-cover" />

              </div>
            </div>

            {/* Founder Story Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h2 className="font-headline text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                  Meet Sumit
                </h2>
                <p className="font-accent text-xl text-primary mb-2">Founder & Chief Curator</p>
              </div>

              <div className="space-y-6 font-body text-base lg:text-lg text-muted-foreground leading-relaxed">
                <p>
                  After years of witnessing friends and colleagues struggle with modern dating apps—endless swiping, superficial connections, and emotional exhaustion—I realized something fundamental was missing: human judgment and intentional curation.
                </p>
                <p>
                  My own journey through the dating landscape taught me that quality relationships don't come from algorithms or quantity. They come from thoughtful introductions between emotionally intelligent individuals who are genuinely ready for meaningful connections.
                </p>
                <p>
                  Freezme was born from a simple belief: in a world obsessed with speed and volume, there's profound value in slowing down, being selective, and trusting human intuition over artificial intelligence.
                </p>
                <p className="text-foreground font-medium">
                  This isn't about promising fairy tale endings. It's about creating thoughtful beginnings for people who deserve better than endless swipes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FounderStory;