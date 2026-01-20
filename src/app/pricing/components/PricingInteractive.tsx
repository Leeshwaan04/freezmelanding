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
      description: 'Your risk-free first step. We analyze your values, preferences, and relationship goals before you commit.',
      features: [
        { text: 'Comprehensive profile review', included: true },
        { text: 'Human value-alignment check', included: true },
        { text: 'Community fit assessment', included: true },
        { text: 'Honest acceptance feedback', included: true },
        { text: 'Curated introductions', included: false },
        { text: 'Active matchmaking', included: false },
        { text: 'Service guarantee', included: false },
        { text: 'Date coaching', included: false },
      ],
      isPopular: false,
      ctaText: 'Start Free Assessment',
      ctaLink: '/application',
    },
    {
      title: 'Active Member',
      price: 'From ₹25,000',
      description: 'For motivated individuals ready for a proactive, curated search with professional support.',
      features: [
        { text: 'Everything in Assessment', included: true },
        { text: 'Curated introductions', included: true },
        { text: 'Profile optimization', included: true },
        { text: 'Post-date feedback loops', included: true },
        { text: 'Dedicated relationship manager', included: true },
        { text: 'Priority matching queue', included: false },
        { text: 'Headhunting service', included: false },
        { text: 'VIP event access', included: false },
      ],
      isPopular: true,
      ctaText: 'Check Eligibility',
      ctaLink: '/application',
    },
    {
      title: 'Select Member',
      price: 'From ₹65,000',
      description: 'Elite executive search service with priority sourcing and highly personalized headhunting.',
      features: [
        { text: 'Everything in Active', included: true },
        { text: 'Priority matching queue', included: true },
        { text: 'External headhunting', included: true },
        { text: 'Unlimited coaching sessions', included: true },
        { text: 'Professional photoshoot', included: true },
        { text: 'VIP networking access', included: true },
        { text: 'Senior matchmaker access', included: true },
        { text: 'Extended service & freeze options', included: true },
      ],
      isPopular: false,
      ctaText: 'Request Selection',
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