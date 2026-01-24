'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section className={`relative overflow-hidden py-20 lg:py-32 ${className}`}>
      {/* Procedural Motion Graphics Background */}
      <div className="absolute inset-0 z-0 bg-background overflow-hidden">
        {/* Soft Gold Orb */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"
        />

        {/* Deep Teal Orb */}
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
        />

        {/* Warm Brown/Secondary Orb */}
        <motion.div
          animate={{
            x: [0, 50, -100, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 -right-20 w-[550px] h-[550px] bg-secondary/15 rounded-full blur-[100px]"
        />

        {/* Grid Pattern Overlay for Texture */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
            Tired of Endless Swiping?
            <span className="block text-primary mt-2">Welcome to Intentional Dating</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Freezme is the antithesis of modern dating apps. We're a premium, human-curated introduction service for emotionally mature individuals who value quality over quantity.
          </p>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-popover p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="UserGroupIcon" size={24} variant="solid" className="text-accent" />
                </div>
              </div>
              <h3 className="font-headline text-lg font-semibold text-foreground mb-2">Human Judgment</h3>
              <p className="font-body text-sm text-muted-foreground">No algorithms. Just thoughtful, personal curation by someone who actually cares.</p>
            </div>

            <div className="bg-popover p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="SparklesIcon" size={24} variant="solid" className="text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-lg font-semibold text-foreground mb-2">Quality Over Quantity</h3>
              <p className="font-body text-sm text-muted-foreground">Carefully selected introductions, not endless profiles. One thoughtful match at a time.</p>
            </div>

            <div className="bg-popover p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Icon name="ShieldCheckIcon" size={24} variant="solid" className="text-secondary" />
                </div>
              </div>
              <h3 className="font-headline text-lg font-semibold text-foreground mb-2">Privacy First</h3>
              <p className="font-body text-sm text-muted-foreground">Your information stays private. No public profiles, no endless browsing by strangers.</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/application"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-headline font-semibold rounded-md hover:-translate-y-0.5 hover:shadow-hover transition-all duration-200 text-lg"
            >
              Start Your Journey
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary font-headline font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-lg"
            >
              How It Works
            </Link>
          </div>

          {/* Trust Signal */}
          {isHydrated && (
            <div className="mt-12 pt-8 border-t border-border">
              <p className="font-body text-sm text-muted-foreground mb-4">Trusted by professionals seeking meaningful connections</p>
              <div className="flex flex-wrap justify-center items-center gap-6">
                <div className="flex items-center gap-2">
                  <Icon name="CheckBadgeIcon" size={20} variant="solid" className="text-success" />
                  <span className="font-body text-sm text-foreground">Verified Profiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="LockClosedIcon" size={20} variant="solid" className="text-primary" />
                  <span className="font-body text-sm text-foreground">Secure & Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="HeartIcon" size={20} variant="solid" className="text-accent" />
                  <span className="font-body text-sm text-foreground">Human Curated</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;