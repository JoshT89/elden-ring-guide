import Header from '@/components/layout/Header';
import RegionsGrid from '@/components/regions/RegionsGrid';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Regions | Elden Ring Guide',
  description: 'Explore all regions in Elden Ring and Shadow of the Erdtree with detailed guides',
};

export default function RegionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-elden-900 to-shadow-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <RegionsGrid />
      </main>
      <Footer />
    </div>
  );
}