import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PricingInteractive from './components/PricingInteractive';

export const metadata: Metadata = {
  title: 'Membership - Freezme',
  description: 'Transparent pricing for premium introduction service. Investment in quality introductions with human curation, satisfaction guarantee, and secure payments. Compare our value against traditional dating apps.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <PricingInteractive />
      </div>
    </main>
  );
}