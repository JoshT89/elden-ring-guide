import Header from '@/components/layout/Header';
import WalkthroughNavigation from '@/components/walkthrough/WalkthroughNavigation';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Walkthrough | Elden Ring Guide',
  description: 'Complete step-by-step walkthrough for Elden Ring and Shadow of the Erdtree',
};

export default function WalkthroughPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-elden-900 to-shadow-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <WalkthroughNavigation />
      </main>
      <Footer />
    </div>
  );
}