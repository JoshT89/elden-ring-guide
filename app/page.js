import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import QuickNavigation from '@/components/home/QuickNavigation';
import FeaturedContent from '@/components/home/FeaturedContent';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-elden-900 to-shadow-900">
      <Header />
      <main>
        <Hero />
        <QuickNavigation />
        <FeaturedContent />
      </main>
      <Footer />
    </div>
  );
}