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
      { label: 'Terms of Service', href: '/terms' },
    ],
    support: [
      { label: 'Contact Us', href: 'mailto:hello@freezme.in' },
      { label: 'FAQ', href: '/membership' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: 'CameraIcon', href: 'https://www.instagram.com/freezme7/?hl=en' },
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
              Premium introduction service for intentional daters seeking quality over quantity.
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
            <div className="space-y-4">
              <a
                href="mailto:hello@freezme.in"
                className="flex items-center gap-2 font-body text-sm text-background/70 hover:text-accent transition-colors duration-300"
              >
                <Icon name="EnvelopeIcon" size={16} variant="outline" />
                hello@freezme.in
              </a>

              {/* Newsletter Soft Lead */}
              <div className="pt-4 border-t border-background/10">
                <p className="font-body text-xs text-background/60 mb-3">
                  Join our &quot;Intentional Dating&quot; newsletter for exclusive relationship insights.
                </p>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const emailInput = form.querySelector('input') as HTMLInputElement;
                    const email = emailInput.value;
                    if (!email) return;

                    try {
                      await fetch('/api/leads', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, leadSource: 'footer_newsletter' }),
                      });
                      emailInput.value = '';
                      alert('Thank you for subscribing!');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="flex-1 bg-background/5 border border-background/10 rounded px-3 py-2 text-xs text-background focus:outline-none focus:border-accent transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-accent text-accent-foreground px-3 py-2 rounded text-xs font-headline font-bold hover:bg-accent/90 transition-colors"
                  >
                    Join
                  </button>
                </form>
              </div>
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