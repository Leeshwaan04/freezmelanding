import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './homepage/components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Freezme - Premium Introductions for Intentional Daters',
  description: 'Join the exclusive, human-curated introduction service for emotionally mature individuals. No algorithms, just meaningful connections. Apply for membership.',
  openGraph: {
    title: 'Freezme - Premium Introductions for Intentional Daters',
    description: 'Human-curated introductions for intentional daters. No algorithms. Just meaning.',
    siteName: 'Freezme',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Homepage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HomepageInteractive />
    </main>
  );
}
