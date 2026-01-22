'use client';

import React, { useEffect, useState } from 'react';
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
      title: 'The Assessment',
      price: 'Complimentary',
      description: 'Your zero-cost entry point. We specifically evaluate your profile to see if you qualify for our community.',
      features: [
        { text: 'Professional profile review', included: true },
        { text: 'Compatibility potential score', included: true },
        { text: 'Community fit assessment', included: true },
        { text: 'Join Waitlist for Inbound Matches', included: true },
        { text: 'Active matching updates', included: false },
        { text: 'Verified profile badge', included: false },
        { text: 'Guaranteed introductions', included: false },
        { text: 'Personal matchmaker', included: false },
      ],
      isPopular: false,
      ctaText: 'Start Free Assessment',
      ctaLink: '/application',
    },
    {
      title: 'Verified Access',
      price: '₹2,999',
      description: 'One-time verification fee. Lifetime validity. Signals high-intent to other members and unlocks active matching.',
      features: [
        { text: 'Everything in Assessment', included: true },
        { text: 'Human Verification check', included: true },
        { text: 'Verified Profile Badge (Trust signal)', included: true },
        { text: 'Priority visibility in search', included: true },
        { text: 'Pay-per-match introductions', included: true },
        { text: 'Dedicated personal matchmaker', included: false },
        { text: 'Date planning & coordination', included: false },
        { text: 'External headhunting', included: false },
      ],
      isPopular: true,
      ctaText: 'Get Verified',
      ctaLink: '/application',
    },
    {
      title: 'Personal Matchmaker',
      price: 'From ₹15,000',
      description: 'Human-led matchmaking service. A dedicated expert curates matches and provides feedback.',
      features: [
        { text: 'Everything in Verified Access', included: true },
        { text: 'Dedicated Relationship Manager', included: true },
        { text: 'Proactive candidate search', included: true },
        { text: 'Hand-picked introductions', included: true },
        { text: 'Date arrangement & feedback', included: true },
        { text: 'Profile photoshoot guidance', included: true },
        { text: 'Curated styling advice', included: true },
        { text: 'Hold membership anytime', included: true },
      ],
      isPopular: false,
      ctaText: 'Book Consultation',
      ctaLink: 'https://calendly.com/', // Ideally this links to a calendar, keeping '/application' as fallback for now
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <PricingCard
                key={index}
                title={tier.title}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                isPopular={tier.isPopular}
                ctaText={tier.ctaText}
                ctaLink={tier.ctaLink}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-body text-sm text-muted-foreground">
              All prices are indicative estimates. Final membership fees are determined after consultation.
            </p>
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