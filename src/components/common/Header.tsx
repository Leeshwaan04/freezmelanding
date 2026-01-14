'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-[#F7F5F2] sticky top-0 z-50">
      <nav className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <AppImage
                src="/assets/images/image-1768307203606.png"
                alt="Freezme Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-headline font-semibold text-[#2A2A2A]">
              Freezme
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className={`text-base font-headline font-medium transition-colors ${isActive('/') || isActive('/homepage')
                  ? 'text-[#2C5F5D]' : 'text-[#2A2A2A] hover:text-[#2C5F5D]'
                }`}
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className={`text-base font-headline font-medium transition-colors ${isActive('/how-it-works')
                  ? 'text-[#2C5F5D]' : 'text-[#2A2A2A] hover:text-[#2C5F5D]'
                }`}
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className={`text-base font-headline font-medium transition-colors ${isActive('/about')
                  ? 'text-[#2C5F5D]' : 'text-[#2A2A2A] hover:text-[#2C5F5D]'
                }`}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className={`text-base font-headline font-medium transition-colors ${isActive('/pricing')
                  ? 'text-[#2C5F5D]' : 'text-[#2A2A2A] hover:text-[#2C5F5D]'
                }`}
            >
              Pricing
            </Link>

            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-base font-headline font-medium text-[#2A2A2A] hover:text-[#2C5F5D] transition-colors">
                <span>More</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href="/privacy-and-security"
                    className="block px-4 py-2 text-sm font-headline text-[#2A2A2A] hover:bg-[#F7F5F2] hover:text-[#2C5F5D]"
                  >
                    Privacy & Security
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/application"
              className="px-6 py-2 bg-[#D4A574] text-[#2A2A2A] text-base font-headline font-semibold rounded-md hover:bg-[#C09465] transition-all"
            >
              Start Your Journey
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6 text-[#2A2A2A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-[#F7F5F2] absolute left-0 right-0 px-6 shadow-md z-50">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base font-headline font-medium ${isActive('/') || isActive('/homepage')
                  ? 'text-[#2C5F5D]' : 'text-[#2A2A2A] hover:text-[#2C5F5D]'
                }`}
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base font-headline font-medium ${isActive('/how-it-works')
                  ? 'text-[#2C5F5D]' : 'text-[#2A2A2A] hover:text-[#2C5F5D]'
                }`}
            >
              How It Works
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base font-headline font-medium ${isActive('/about')
                  ? 'text-[#2C5F5D]' : 'text-[#2A2A2A] hover:text-[#2C5F5D]'
                }`}
            >
              About
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base font-headline font-medium ${isActive('/pricing')
                  ? 'text-[#2C5F5D]' : 'text-[#2A2A2A] hover:text-[#2C5F5D]'
                }`}
            >
              Pricing
            </Link>
            <Link
              href="/privacy-and-security"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-headline font-medium text-[#2A2A2A] hover:text-[#2C5F5D]"
            >
              Privacy & Security
            </Link>
            <Link
              href="/application"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-6 py-3 bg-[#D4A574] text-[#2A2A2A] text-base font-headline font-semibold rounded-md hover:bg-[#C09465] transition-all text-center"
            >
              Start Your Journey
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;