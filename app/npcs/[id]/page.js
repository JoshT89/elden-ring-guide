import Header from '@/components/layout/Header';
import NPCQuestline from '@/components/npcs/NPCQuestline';
import Footer from '@/components/layout/Footer';
import { npcData } from '@/lib/data/npcData';

export const metadata = {
  title: 'NPC Questline | Elden Ring Guide',
  description: 'Detailed NPC questline guide for Elden Ring',
};

// Generate static params for all NPCs
export async function generateStaticParams() {
  return npcData.map((npc) => ({
    id: npc.id,
  }));
}

export default function NPCPage({ params }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-elden-900 to-shadow-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <NPCQuestline npcId={params.id} />
      </main>
      <Footer />
    </div>
  );
} 