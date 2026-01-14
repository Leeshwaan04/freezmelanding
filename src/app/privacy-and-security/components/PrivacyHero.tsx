'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PrivacyHeroProps {
  className?: string;
}

const PrivacyHero: React.FC<PrivacyHeroProps> = ({ className = '' }) => {
  return (
    <section className={`bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Icon name="ShieldCheckIcon" size={40} variant="solid" className="text-primary" />
          </div>
          
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Privacy & Security
          </h1>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trust is our foundation. We are committed to protecting your personal information with the highest standards of security and transparency.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-md shadow-sm">
              <Icon name="LockClosedIcon" size={20} variant="solid" className="text-success" />
              <span className="font-body text-sm font-medium text-foreground">256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-md shadow-sm">
              <Icon name="CheckBadgeIcon" size={20} variant="solid" className="text-success" />
              <span className="font-body text-sm font-medium text-foreground">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-md shadow-sm">
              <Icon name="DocumentCheckIcon" size={20} variant="solid" className="text-success" />
              <span className="font-body text-sm font-medium text-foreground">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyHero;