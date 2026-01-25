'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactPrivacyProps {
  className?: string;
}

const ContactPrivacy: React.FC<ContactPrivacyProps> = ({ className = '' }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className={`py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Privacy Concerns? We're Here to Help
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Our dedicated privacy team is available to address your questions and concerns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="EnvelopeIcon" size={24} variant="outline" className="text-primary" />
                </div>
                <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                  Email Support
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  For privacy-related inquiries and data requests
                </p>
                <a
                  href="mailto:privacy@freezme.in"
                  className="font-body text-base font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  privacy@freezme.in
                </a>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="PhoneIcon" size={24} variant="outline" className="text-accent" />
                </div>
                <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                  Phone Support
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  Speak directly with our privacy team
                </p>
                <a
                  href="tel:+911234567890"
                  className="font-body text-base font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  +91 123 456 7890
                </a>
              </div>
            </div>

            <div className="bg-card border-2 border-primary/20 rounded-lg p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="UserCircleIcon" size={28} variant="solid" className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                    Data Protection Officer
                  </h3>
                  <p className="font-body text-base text-muted-foreground mb-4">
                    For formal complaints or escalated privacy concerns, you can contact our designated Data Protection Officer:
                  </p>
                  <div className="space-y-2">
                    <p className="font-body text-sm text-foreground">
                      <span className="font-medium">Name:</span> Priya Sharma
                    </p>
                    <p className="font-body text-sm text-foreground">
                      <span className="font-medium">Email:</span> dpo@freezme.in
                    </p>
                    <p className="font-body text-sm text-foreground">
                      <span className="font-medium">Office Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="font-body text-sm text-muted-foreground mb-4">
                Last updated: January 13, 2026
              </p>
              <p className="font-body text-xs text-muted-foreground">
                We review and update our privacy practices regularly to ensure the highest standards of data protection
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Privacy Concerns? We're Here to Help
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Our dedicated privacy team is available to address your questions and concerns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="EnvelopeIcon" size={24} variant="outline" className="text-primary" />
              </div>
              <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                Email Support
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-3">
                For privacy-related inquiries and data requests
              </p>
              <a
                href="mailto:privacy@freezme.in"
                className="font-body text-base font-medium text-primary hover:text-primary/80 transition-colors duration-200"
              >
                privacy@freezme.in
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card transition-shadow duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="PhoneIcon" size={24} variant="outline" className="text-accent" />
              </div>
              <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                Phone Support
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-3">
                Speak directly with our privacy team
              </p>
              <a
                href="tel:+911234567890"
                className="font-body text-base font-medium text-primary hover:text-primary/80 transition-colors duration-200"
              >
                +91 123 456 7890
              </a>
            </div>
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-lg p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="UserCircleIcon" size={28} variant="solid" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                  Data Protection Officer
                </h3>
                <p className="font-body text-base text-muted-foreground mb-4">
                  For formal complaints or escalated privacy concerns, you can contact our designated Data Protection Officer:
                </p>
                <div className="space-y-2">
                  <p className="font-body text-sm text-foreground">
                    <span className="font-medium">Name:</span> Priya Sharma
                  </p>
                  <p className="font-body text-sm text-foreground">
                    <span className="font-medium">Email:</span> dpo@freezme.in
                  </p>
                  <p className="font-body text-sm text-foreground">
                    <span className="font-medium">Office Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Last updated: January 13, 2026
            </p>
            <p className="font-body text-xs text-muted-foreground">
              We review and update our privacy practices regularly to ensure the highest standards of data protection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPrivacy;