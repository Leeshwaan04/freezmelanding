import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './homepage/components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Freezme - Premium Introduction for Intentional Daters',
  description: 'Tired of endless swiping? Freezme is a sophisticated, human-curated introduction service for emotionally mature individuals seeking quality connections over quantity. Premium introduction with human judgment, not algorithms.',
};

export default function Homepage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HomepageInteractive />
    </main>
  );
}
