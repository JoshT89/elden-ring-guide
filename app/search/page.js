import Header from '@/components/layout/Header';
import SearchInterface from '@/components/search/SearchInterface';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Search | Elden Ring Guide',
  description: 'Search for bosses, NPCs, quests, weapons, armor, and secrets in Elden Ring and Shadow of the Erdtree',
};

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-elden-900 to-shadow-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SearchInterface />
      </main>
      <Footer />
    </div>
  );
}