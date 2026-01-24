import React from 'react';

interface PricingHeroProps {
  className?: string;
}

const PricingHero: React.FC<PricingHeroProps> = ({ className = '' }) => {
  return (
    <section className={`relative py-20 md:py-32 overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsla(32, 55%, 65%, 0.2) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsla(177, 37%, 27%, 0.1) 0%, transparent 70%)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <span className="font-body text-xs md:text-sm font-semibold text-accent-foreground uppercase tracking-widest">
              Invest in your future
            </span>
          </div>

          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight">
            Verified Singles.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Serious Connections.</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Stop swiping and start connecting. Apply for a verified membership today and join a community of high-intent singles, or hire a personal introducer to do the work for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-success" />
              <span>No Hidden Monthly Fees</span>
            </div>
            <div className="hidden sm:block text-border">•</div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-success" />
              <span>100% Verified Profiles</span>
            </div>
            <div className="hidden sm:block text-border">•</div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-success" />
              <span>Human Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;