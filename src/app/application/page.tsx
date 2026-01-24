import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ApplicationInteractive from './components/ApplicationInteractive';

export const metadata: Metadata = {
  title: 'Application - Freezme',
  description: 'Apply to Freezme premium introduction service. Complete our thoughtful multi-step application to begin your journey toward meaningful connections through human-curated introductions.',
};

export default function ApplicationPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ApplicationInteractive />
      </main>
    </>
  );
}