'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';


interface PrivacyFooterProps {
  className?: string;
}

const PrivacyFooter: React.FC<PrivacyFooterProps> = ({ className = '' }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = [
    { label: 'Home', href: '/homepage' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'About', href: '/about' },
    { label: 'Membership', href: '/membership' },
    { label: 'Application', href: '/application' }];


  if (!isHydrated) {
    return (
      <footer className={`bg-card border-t border-border py-8 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center">
                <svg
                  width="120"
                  height="36"
                  viewBox="0 0 120 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">

                  <path
                    d="M8 12h8v2H8v-2zm0 4h8v2H8v-2zm0 4h6v2H8v-2z"
                    fill="currentColor"
                    className="text-primary" />

                  <circle cx="12" cy="12" r="2" fill="currentColor" className="text-accent" />
                  <text
                    x="28"
                    y="24"
                    fontFamily="Crimson Text, serif"
                    fontSize="20"
                    fontWeight="600"
                    fill="currentColor"
                    className="text-primary">

                    Freezme
                  </text>
                </svg>
              </div>

              <nav className="flex flex-wrap justify-center gap-6">
                {footerLinks.map((link) =>
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200">

                    {link.label}
                  </Link>
                )}
              </nav>

              <div className="flex items-center gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors duration-200"
                  aria-label="Twitter">

                  <Icon name="AtSymbolIcon" size={20} variant="outline" className="text-foreground" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors duration-200"
                  aria-label="LinkedIn">

                  <Icon name="UserGroupIcon" size={20} variant="outline" className="text-foreground" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="font-body text-sm text-muted-foreground">
                &copy; 2026 Freezme. All rights reserved. | Intentional dating for intentional people.
              </p>
            </div>
          </div>
        </div>
      </footer>);

  }

  return (
    <footer className={`bg-card border-t border-border py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <Link href="/homepage" className="flex items-center">







            </Link>

            <nav className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) =>
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200">

                  {link.label}
                </Link>
              )}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors duration-200"
                aria-label="Twitter">

                <Icon name="AtSymbolIcon" size={20} variant="outline" className="text-foreground" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors duration-200"
                aria-label="LinkedIn">

                <Icon name="UserGroupIcon" size={20} variant="outline" className="text-foreground" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="font-body text-sm text-muted-foreground">
              &copy; {currentYear} Freezme. All rights reserved. | Intentional dating for intentional people.
            </p>
          </div>
        </div>
      </div>
    </footer>);

};

export default PrivacyFooter;