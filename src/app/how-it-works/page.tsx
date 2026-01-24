import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HowItWorksInteractive from './components/HowItWorksInteractive';

export const metadata: Metadata = {
  title: 'How It Works - Freezme',
  description: 'Discover Freezme\'s transparent 4-step human-curated introduction process. From thoughtful application to personalized introductions, learn how we prioritize quality over quantity in helping you find meaningful connections.',
};

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HowItWorksInteractive />
      </main>
    </>
  );
}