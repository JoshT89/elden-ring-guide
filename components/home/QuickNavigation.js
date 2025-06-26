import Link from 'next/link';
import { Map, Sword, Users, Shield, Scroll, Gem } from 'lucide-react';

export default function QuickNavigation() {
  const categories = [
    {
      name: 'Regions',
      description: 'Explore every area of the Lands Between',
      href: '/regions',
      icon: Map,
      color: 'elden',
    },
    {
      name: 'Bosses',
      description: 'Strategies for every boss encounter',
      href: '/bosses',
      icon: Sword,
      color: 'erdtree',
    },
    {
      name: 'NPCs & Quests',
      description: 'Complete character questlines',
      href: '/npcs',
      icon: Users,
      color: 'shadow',
    },
    {
      name: 'Equipment',
      description: 'Weapons, armor, and accessories',
      href: '/equipment',
      icon: Shield,
      color: 'elden',
    },
    {
      name: 'Walkthrough',
      description: 'Step-by-step main story guide',
      href: '/walkthrough',
      icon: Scroll,
      color: 'erdtree',
    },
    {
      name: 'Secrets',
      description: 'Hidden areas and rare items',
      href: '/secrets',
      icon: Gem,
      color: 'shadow',
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      elden: 'border-elden-600 hover:border-elden-500 hover:bg-elden-800/20',
      erdtree: 'border-erdtree-600 hover:border-erdtree-500 hover:bg-erdtree-800/20',
      shadow: 'border-shadow-600 hover:border-shadow-500 hover:bg-shadow-800/20',
    };
    return colors[color] || colors.elden;
  };

  const getIconColor = (color) => {
    const colors = {
      elden: 'text-elden-400',
      erdtree: 'text-erdtree-400',
      shadow: 'text-shadow-400',
    };
    return colors[color] || colors.elden;
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="fantasy-heading text-3xl md:text-4xl font-bold mb-4">
            Explore the Guide
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to master Elden Ring and Shadow of the Erdtree, 
            organized for easy navigation and quick access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.href}
                className={`content-card p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 group ${getColorClasses(category.color)}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-slate-800/50 ${getIconColor(category.color)} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-slate-100 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}