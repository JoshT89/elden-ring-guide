import Header from '@/components/layout/Header';
import NPCsGrid from '@/components/npcs/NPCsGrid';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'NPCs & Quests | Elden Ring Guide',
  description: 'Complete NPC questlines and character guides for Elden Ring and Shadow of the Erdtree',
};

export default function NPCsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-elden-900 to-shadow-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <NPCsGrid />
      </main>
      <Footer />
    </div>
  );
}