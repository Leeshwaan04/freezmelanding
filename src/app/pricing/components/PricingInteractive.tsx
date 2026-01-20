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
      title: 'Application',
      price: 'Complimentary',
      description: 'Start your journey with a comprehensive profile review and community fit assessment.',
      features: [
        { text: 'In-depth personality assessment', included: true },
        { text: 'Community fit evaluation', included: true },
        { text: 'Detailed compatibility profile', included: true },
        { text: 'Application feedback', included: true },
        { text: 'Curated introductions', included: false },
        { text: 'Ongoing support', included: false },
        { text: 'Profile optimization', included: false },
        { text: 'Date coaching', included: false },
      ],
      isPopular: false,
      ctaText: 'Apply Now',
      ctaLink: '/application',
    },
    {
      title: 'Essential',
      price: 'Starts at ₹25,000',
      description: 'Comprehensive service for serious relationship seekers ready to invest in quality.',
      features: [
        { text: 'Everything in Application', included: true },
        { text: 'Curated introductions', included: true },
        { text: 'Profile optimization & photography guidance', included: true },
        { text: 'Post-date feedback & coaching', included: true },
        { text: 'Email & phone support', included: true },
        { text: 'Priority matching', included: false },
        { text: 'Extended service period', included: false },
        { text: 'VIP event access', included: false },
      ],
      isPopular: true,
      ctaText: 'Inquire for Essential',
      ctaLink: '/application',
    },
    {
      title: 'Premium',
      price: 'Starts at ₹65,000',
      description: 'Elite service with priority matching, extended support, and exclusive benefits.',
      features: [
        { text: 'Everything in Essential', included: true },
        { text: 'Extended service duration', included: true },
        { text: 'Priority matching & faster turnaround', included: true },
        { text: 'Professional photography session', included: true },
        { text: 'Unlimited coaching sessions', included: true },
        { text: 'VIP event access & networking', included: true },
        { text: 'Dedicated relationship manager', included: true },
        { text: '24/7 priority support', included: true },
      ],
      isPopular: false,
      ctaText: 'Inquire for Premium',
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