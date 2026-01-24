import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import FounderStory from './components/FounderStory';
import MissionValues from './components/MissionValues';
import PhilosophySection from './components/PhilosophySection';
import CredentialsSection from './components/CredentialsSection';
import CTASection from './components/CTASection';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'About - Freezme',
  description: 'Discover the philosophy behind Freezme\'s human-curated introduction service. Learn about our founder Sumit\'s mission to bring intentional dating and meaningful connections to emotionally intelligent individuals.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-16">
        <HeroSection />
        <FounderStory />
        <MissionValues />
        <PhilosophySection />
        <CredentialsSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}