'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';


interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Pricing', href: '/pricing' }],

    legal: [
      { label: 'Privacy & Security', href: '/privacy-and-security' }]

  };

  return (
    <footer className={`bg-foreground text-background py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <Link href="/homepage" className="inline-block mb-4">







              </Link>
              <p className="font-body text-sm text-background/80 mb-4 max-w-sm">
                Premium matchmaking service for intentional daters. Quality over quantity, human judgment over algorithms.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:hello@freezme.com"
                  className="flex items-center gap-2 text-sm text-background/80 hover:text-accent transition-colors duration-200">

                  <Icon name="EnvelopeIcon" size={16} variant="outline" />
                  hello@freezme.com
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-headline text-base font-semibold text-background mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) =>
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-background/80 hover:text-accent transition-colors duration-200">

                      {link.label}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-headline text-base font-semibold text-background mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) =>
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-background/80 hover:text-accent transition-colors duration-200">

                      {link.label}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-background/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-body text-sm text-background/60">
                {isHydrated ?
                  `© 2026 Freezme. All rights reserved.` :

                  '© 2026 Freezme. All rights reserved.'
                }
              </p>
              <div className="flex items-center gap-4">
                <span className="font-body text-sm text-background/60">Made with</span>
                <Icon name="HeartIcon" size={16} variant="solid" className="text-accent" />
                <span className="font-body text-sm text-background/60">for intentional daters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;