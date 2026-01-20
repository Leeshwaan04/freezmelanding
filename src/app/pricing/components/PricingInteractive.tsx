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
import Footer from './Footer';

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
      description: 'The zero-risk starting point. We professionally evaluate your profile and relationship goals specifically for our community.',
      features: [
        { text: 'Professional profile review', included: true },
        { text: 'Compatibility potential score', included: true },
        { text: 'Community fit assessment', included: true },
        { text: 'Candid feedback session', included: true },
        { text: 'Database inclusion (Passive)', included: true },
        { text: 'Active matching updates', included: false },
        { text: 'Guaranteed introductions', included: false },
        { text: 'Personal matchmaker', included: false },
      ],
      isPopular: false,
      ctaText: 'Start Free Assessment',
      ctaLink: '/application',
    },
    {
      title: 'Smart Member',
      price: 'From ₹12,000',
      description: 'The intelligent choice for proactive daters. Access curated introductions without the high agency fees.',
      features: [
        { text: 'Everything in Assessment', included: true },
        { text: 'Verified profile badge', included: true },
        { text: 'Priority database visibility', included: true },
        { text: 'Quarterly compatibility checks', included: true },
        { text: 'Curated introductions (pay-per-date)', included: true },
        { text: 'Dedicated personal matchmaker', included: false },
        { text: 'Unlimited date coaching', included: false },
        { text: 'External headhunting', included: false },
      ],
      isPopular: true,
      ctaText: 'Check Eligibility',
      ctaLink: '/application',
    },
    {
      title: 'Premium Member',
      price: 'From ₹35,000',
      description: 'Complete hands-off dating management. We handle the search, vetting, and planning so you just show up.',
      features: [
        { text: 'Everything in Smart Member', included: true },
        { text: 'Dedicated personal matchmaker', included: true },
        { text: 'Guaranteed monthly introductions', included: true },
        { text: 'Feedback & coaching loops', included: true },
        { text: 'Date planning & coordination', included: true },
        { text: 'Profile photoshoot included', included: true },
        { text: 'External headhunting search', included: true },
        { text: 'Hold/Freeze membership anytime', included: true },
      ],
      isPopular: false,
      ctaText: 'Request Premium',
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