import Link from 'next/link';
import { Clock, Star, TrendingUp } from 'lucide-react';

export default function FeaturedContent() {
  const featured = [
    {
      title: 'Margit, the Fell Omen',
      description: 'Complete strategy guide for the first major boss',
      category: 'Boss Guide',
      difficulty: 'Beginner',
      readTime: '5 min',
      href: '/bosses/margit',
      image: 'https://images.pexels.com/photos/163064/play-stone-the-dove-ancient-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Ranni the Witch Questline',
      description: 'Complete walkthrough for one of the most important questlines',
      category: 'NPC Quest',
      difficulty: 'Intermediate',
      readTime: '15 min',
      href: '/npcs/ranni',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Limgrave Exploration Guide',
      description: 'Everything you need to know about the starting region',
      category: 'Region Guide',
      difficulty: 'Beginner',
      readTime: '20 min',
      href: '/regions/limgrave',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Beginner: 'text-green-400',
      Intermediate: 'text-yellow-400',
      Advanced: 'text-red-400',
    };
    return colors[difficulty] || colors.Beginner;
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="fantasy-heading text-3xl md:text-4xl font-bold mb-4">
            Featured Guides
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Start with these essential guides to get the most out of your journey through the Lands Between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="content-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-2 text-xs text-slate-300 mb-1">
                    <span className="bg-elden-700/80 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span className={getDifficultyColor(item.difficulty)}>
                      {item.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-erdtree-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 bg-elden-700 hover:bg-elden-600 text-white px-6 py-3 rounded-lg font-medium transition-all"
          >
            <TrendingUp className="w-4 h-4" />
            Explore All Guides
          </Link>
        </div>
      </div>
    </section>
  );
}