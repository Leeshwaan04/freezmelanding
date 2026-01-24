'use client';

import React, { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import PricingHero from './PricingHero';
import PricingCard from './PricingCard';
import ValueProposition from './ValueProposition';
import CostComparison from './CostComparison';
import DataPrivacySecurity from './DataPrivacySecurity';
import MoneyBackGuarantee from './MoneyBackGuarantee';
import FAQ from './FAQ';
import CTASection from './CTASection';
import Footer from '@/components/common/Footer';

interface PricingTier {
  title: string;
  price: string;
  priceLabel?: string;
  description: string;
  features: Array<{ text: string; included: boolean }>;
  isPopular: boolean;
  ctaText: string;
  ctaLink: string;
}

const PricingInteractive: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const pricingTiers: PricingTier[] = [
    {
      title: 'Candidate Profile',
      price: '',
      description: 'Your entry point. Submit your profile for evaluation by our curation team.',
      features: [
        { text: 'Professional profile review', included: true },
        { text: 'Compatibility potential score', included: true },
        { text: 'Community fit assessment', included: true },
        { text: 'Join Waitlist for Inbound Matches', included: true },
        { text: 'Active matching updates', included: false },
        { text: 'Verified profile badge', included: false },
        { text: 'Guaranteed introductions', included: false },
        { text: 'Personal introducer', included: false },
      ],
      isPopular: false,
      ctaText: 'Join Waitlist',
      ctaLink: '/application',
    },
    {
      title: 'Verified Member',
      price: '',
      priceLabel: 'By Application',
      description: 'Exclusive status for verified individuals. Priority access to the network.',
      features: [
        { text: 'Everything in Candidate Profile', included: true },
        { text: 'Human Verification check', included: true },
        { text: 'Verified Member Badge (Trust signal)', included: true },
        { text: 'Priority visibility in search', included: true },
        { text: 'Fast-track approval process', included: true },
        { text: 'Dedicated personal introducer', included: false },
        { text: 'Date planning & coordination', included: false },
        { text: 'External headhunting', included: false },
      ],
      isPopular: true,
      ctaText: 'Apply for Access',
      ctaLink: '/application',
    },
    {
      title: 'Signature Client',
      price: '',
      priceLabel: 'Invitation Only',
      description: 'Limited spots available. Bespoke introduction by dedicated experts.',
      features: [
        { text: 'Everything in Verified Member', included: true },
        { text: 'Dedicated Relationship Manager', included: true },
        { text: 'Proactive candidate search', included: true },
        { text: 'Hand-picked introductions', included: true },
        { text: 'Date arrangement & feedback', included: true },
        { text: 'Profile photoshoot guidance', included: true },
        { text: 'Curated styling advice', included: true },
        { text: 'Hold membership anytime', included: true },
      ],
      isPopular: false,
      ctaText: 'Check Eligibility',
      ctaLink: '/application',
    },
  ];

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-16" />
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-32 bg-muted rounded-lg" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-muted rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PricingHero />

      {/* Pricing Cards Section */}
      <section className="relative py-24 md:py-32 bg-background overflow-hidden">
        {/* Refined Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-5%] right-[-5%] w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
              Membership Tiers
            </h2>
            <div className="h-1 w-20 bg-accent/40 mx-auto mb-8 rounded-full" />
            <p className="font-body text-lg text-muted-foreground/80 leading-relaxed">
              Choose the level of support that best aligns with your relationship goals. From curated access to bespoke personal introductions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto items-stretch">
            {pricingTiers.map((tier, index) => (
              <PricingCard
                key={index}
                title={tier.title}
                price={tier.price}
                priceLabel={tier.priceLabel}
                description={tier.description}
                features={tier.features}
                isPopular={tier.isPopular}
                ctaText={tier.ctaText}
                ctaLink={tier.ctaLink}
              />
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-4 px-8 py-4 rounded-2xl bg-muted/30 border border-border/40">
              <Icon name="InformationCircleIcon" size={20} className="text-accent" />
              <p className="font-body text-sm text-muted-foreground/70">
                Membership fees are determined based on specific requirements after consultation. Local taxes may apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ValueProposition />
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