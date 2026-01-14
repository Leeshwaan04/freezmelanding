'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    service: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Application', href: '/application' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Privacy & Security', href: '/privacy-and-security' },
    ],
  };

  return (
    <footer className={`bg-foreground text-background py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/homepage" className="inline-block mb-4">
              <Image
                src="/assets/images/image-1768293601753.png"
                alt="Freezme Logo"
                width={140}
                height={40}
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
            <p className="font-body text-sm text-background/80 leading-relaxed">
              Thoughtful introductions for intentional daters seeking quality over quantity.
            </p>
          </div>

          {/* Service Links */}
          <div>
            <h3 className="font-headline text-lg font-semibold text-background mb-4">Service</h3>
            <ul className="space-y-2">
              {footerLinks.service.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-background/80 hover:text-background transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-headline text-lg font-semibold text-background mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-background/80 hover:text-background transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-headline text-lg font-semibold text-background mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@freezme.com"
                className="flex items-center gap-2 font-body text-sm text-background/80 hover:text-background transition-colors duration-300"
              >
                <Icon name="EnvelopeIcon" size={16} variant="outline" />
                hello@freezme.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 font-body text-sm text-background/80 hover:text-background transition-colors duration-300"
              >
                <Icon name="PhoneIcon" size={16} variant="outline" />
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-background/80">
              &copy; {currentYear} Freezme. All rights reserved.
            </p>
            <p className="font-body text-sm text-background/80">
              Made with intentionality for meaningful connections
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;