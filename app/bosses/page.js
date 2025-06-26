import Header from '@/components/layout/Header';
import BossesGrid from '@/components/bosses/BossesGrid';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Bosses | Elden Ring Guide',
  description: 'Complete boss guide for Elden Ring and Shadow of the Erdtree with strategies and rewards',
};

export default function BossesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-elden-900 to-shadow-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <BossesGrid />
      </main>
      <Footer />
    </div>
  );
}