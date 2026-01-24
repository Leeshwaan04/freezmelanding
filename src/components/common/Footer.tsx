'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Membership', href: '/membership' },
    ],
    legal: [
      { label: 'Privacy & Security', href: '/privacy-and-security' },
      { label: 'Terms of Service', href: '/privacy-and-security' },
    ],
    support: [
      { label: 'Contact Us', href: '/privacy-and-security' },
      { label: 'FAQ', href: '/membership' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: 'CameraIcon', href: 'https://www.instagram.com/freezme7/?hl=en' },
    { name: 'LinkedIn', icon: 'BriefcaseIcon', href: '#' },
    { name: 'Twitter', icon: 'ChatBubbleLeftIcon', href: '#' },
  ];

  return (
    <footer className={`bg-foreground text-background ${className}`}>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/homepage" className="inline-block mb-4">
              <span className="font-headline text-3xl font-bold text-background">
                Freezme
              </span>
            </Link>
            <p className="font-body text-sm text-background/80 mb-4 max-w-sm">
              Premium matchmaking service for intentional daters seeking quality over quantity.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} variant="outline" className="text-background" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-headline text-base font-semibold text-background mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-background/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-headline text-base font-semibold text-background mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-background/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-headline text-base font-semibold text-background mb-4">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@freezme.in"
                className="flex items-center gap-2 font-body text-sm text-background/70 hover:text-accent transition-colors duration-300"
              >
                <Icon name="EnvelopeIcon" size={16} variant="outline" />
                hello@freezme.in
              </a>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-headline text-base font-semibold text-background mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-background/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-background/70 text-center md:text-left">
              © {currentYear} Freezme. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Icon name="ShieldCheckIcon" size={16} variant="solid" className="text-accent" />
                <span className="font-body text-xs text-background/70">Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="LockClosedIcon" size={16} variant="solid" className="text-accent" />
                <span className="font-body text-xs text-background/70">SSL Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;