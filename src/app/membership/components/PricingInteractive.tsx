'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import PricingHero from './PricingHero';
import ValueProposition from './ValueProposition';
import CostComparison from './CostComparison';
import DataPrivacySecurity from './DataPrivacySecurity';
import MoneyBackGuarantee from './MoneyBackGuarantee';
import FAQ from './FAQ';
import CTASection from './CTASection';
import Footer from '@/components/common/Footer';

const PricingInteractive: React.FC = () => {
  const signatureFeatures: Array<{ text: string; included: boolean }> = [
    { text: 'Complete Human Verification & Vetting', included: true },
    { text: 'Dedicated Personal Introducer', included: true },
    { text: 'Bespoke Introduction Strategy', included: true },
    { text: 'Proactive Candidate Scouting', included: true },
    { text: 'Seamless Date Planning & Coordination', included: true },
    { text: 'Post-Introduction Feedback & Refinement', included: true },
    { text: 'Professional Profile Curation', included: true },
    { text: 'Photoshoot & Styling Guidance', included: true },
    { text: 'Absolute Privacy (Profiles are never public)', included: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="h-16 lg:h-20" /> {/* Spacer for fixed header */}

      <PricingHero />

      {/* Unified Pricing Section */}
      <section className="relative py-24 md:py-32 bg-background overflow-hidden font-display">
        {/* Artistic Background Decorations - Optimized for performance */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[100px] will-change-transform" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[100px] will-change-transform" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
              A Bespoke Experience
            </h2>
            <div className="h-1.5 w-24 bg-accent/40 mx-auto mb-8 rounded-full" />
            <p className="font-body text-xl text-muted-foreground/80 leading-relaxed italic">
              "We don't offer levels of quality. We offer one master service designed for those who value depth, timing, and intentionality above all else."
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 rounded-[3rem] blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 pointer-events-none" />

              <div className="relative bg-card/90 rounded-[2.5rem] p-8 md:p-16 border border-white/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] backdrop-blur-lg">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                  {/* Left Column: Branding & Intro */}
                  <div className="space-y-8">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                        <span className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-accent">Exclusive Selection</span>
                      </div>
                      <h3 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
                        The Signature Membership
                      </h3>
                      <p className="font-body text-lg text-muted-foreground leading-relaxed">
                        A fully-managed journey where your dedicated introducer acts as your personal scout, stylist, and strategist.
                      </p>
                    </div>

                    <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 space-y-2 text-center lg:text-left">
                      <span className="font-headline text-2xl md:text-3xl font-medium text-foreground tracking-wide italic">Membership</span>
                      <div className="h-px w-12 bg-accent/30 mx-auto lg:mx-0 my-4" />
                      <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">By Consultation Only</p>
                    </div>
                  </div>

                  {/* Right Column: Features Checklist */}
                  <div className="bg-background/40 rounded-3xl p-8 border border-border/40">
                    <h4 className="font-headline text-sm uppercase tracking-widest text-primary mb-8 font-bold">Comprehensive Services</h4>
                    <ul className="grid grid-cols-1 gap-5">
                      {signatureFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <div className="mt-1 flex-shrink-0 text-accent">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="font-body text-sm md:text-base text-foreground/80 leading-snug">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="mt-16 flex flex-col items-center gap-8">
                  <a
                    href="/application"
                    className="group/btn relative inline-flex items-center justify-center py-6 px-12 rounded-2xl bg-primary text-primary-foreground text-xl font-headline font-bold shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-[45deg] -translate-x-full group-hover/btn:animate-shimmer" />
                    <span className="relative">Apply for Membership</span>
                    <Icon name="ArrowRightIcon" size={24} className="relative ml-3 transform transition-transform duration-300 group-hover/btn:translate-x-2" />
                  </a>

                  <p className="font-body text-sm text-muted-foreground/60 text-center max-w-xl">
                    Our curation team reviews applications within 48 hours. Membership fees and specific introductions are discussed during your initial consultation.
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-24">
              <ValueProposition />
            </div>
          </div>
        </div>
      </section>

      <CostComparison />
      <DataPrivacySecurity />
      <MoneyBackGuarantee />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default PricingInteractive;