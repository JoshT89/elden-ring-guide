import Header from '@/components/layout/Header';
import EquipmentTabs from '@/components/equipment/EquipmentTabs';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Equipment | Elden Ring Guide',
  description: 'Complete weapons, armor, and equipment guide for Elden Ring and Shadow of the Erdtree',
};

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-elden-900 to-shadow-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <EquipmentTabs />
      </main>
      <Footer />
    </div>
  );
}