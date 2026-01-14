import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Freezme - Premium Matchmaking for Intentional Daters',
  description: 'Tired of endless swiping? Freezme is a sophisticated, human-curated introduction service for emotionally mature individuals seeking quality connections over quantity. Premium matchmaking with human judgment, not algorithms.',
};

export default function Homepage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HomepageInteractive />
      </div>
    </main>
  );
}