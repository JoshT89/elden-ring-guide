import Link from 'next/link';
import { MapPin, Clock, Star } from 'lucide-react';

export default function RegionsGrid() {
  const regions = [
    {
      id: 'limgrave',
      name: 'Limgrave',
      description: 'The starting region where your journey begins',
      difficulty: 'Beginner',
      estimatedTime: '8-12 hours',
      mainBosses: ['Margit', 'Godrick'],
      keyFeatures: ['Tutorial Area', 'Stormveil Castle', 'First Legacy Dungeon'],
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'liurnia',
      name: 'Liurnia of the Lakes',
      description: 'A vast region of lakes and magical academies',
      difficulty: 'Intermediate',
      estimatedTime: '10-15 hours',
      mainBosses: ['Rennala', 'Royal Knight Loretta'],
      keyFeatures: ['Raya Lucaria Academy', 'Caria Manor', 'Lake of Rot'],
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'caelid',
      name: 'Caelid',
      description: 'A scarlet rot-infested wasteland of danger',
      difficulty: 'Advanced',
      estimatedTime: '12-18 hours',
      mainBosses: ['Starscourge Radahn', 'Dragonlord Placidusax'],
      keyFeatures: ['Redmane Castle', 'Caelid Dragonbarrow', 'Sellia Crystal Tunnel'],
      image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'altus-plateau',
      name: 'Altus Plateau',
      description: 'The elevated lands leading to the capital',
      difficulty: 'Advanced',
      estimatedTime: '8-12 hours',
      mainBosses: ['Morgott', 'Godfrey'],
      keyFeatures: ['Leyndell Capital', 'Mt. Gelmir', 'Volcano Manor'],
      image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'mountaintops',
      name: 'Mountaintops of the Giants',
      description: 'Frozen peaks where giants once roamed',
      difficulty: 'Expert',
      estimatedTime: '6-10 hours',
      mainBosses: ['Fire Giant', 'Godskin Duo'],
      keyFeatures: ['Flame Peak', 'Giants\' Graveyard', 'Forge of the Giants'],
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'shadow-realm',
      name: 'Realm of Shadow',
      description: 'The shadow realm revealed in the DLC',
      difficulty: 'Expert',
      estimatedTime: '25-35 hours',
      mainBosses: ['Messmer', 'Radahn (Consort)', 'Scadutree Avatar'],
      keyFeatures: ['Gravesite Plain', 'Shadow Keep', 'Abyssal Woods'],
      image: 'https://images.pexels.com/photos/2832432/pexels-photo-2832432.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Shadow of the Erdtree',
    },
  ];

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Beginner: 'text-green-400',
      Intermediate: 'text-yellow-400',
      Advanced: 'text-orange-400',
      Expert: 'text-red-400',
    };
    return colors[difficulty] || colors.Beginner;
  };

  const getDifficultyBg = (difficulty) => {
    const colors = {
      Beginner: 'bg-green-400/10',
      Intermediate: 'bg-yellow-400/10',
      Advanced: 'bg-orange-400/10',
      Expert: 'bg-red-400/10',
    };
    return colors[difficulty] || colors.Beginner;
  };

  const getExpansionColor = (expansion) => {
    return expansion === 'Shadow of the Erdtree' 
      ? 'bg-shadow-600 text-white' 
      : 'bg-elden-600 text-white';
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="fantasy-heading text-3xl md:text-4xl font-bold mb-4">
          Explore the Regions
        </h1>
        <p className="text-slate-400 text-lg">
          Complete guides for every region in Elden Ring and Shadow of the Erdtree
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regions.map((region) => (
          <Link
            key={region.id}
            href={`/regions/${region.id}`}
            className="content-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
          >
            <div className="relative">
              <div className="aspect-video overflow-hidden">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                <span className={`text-xs px-2 py-1 rounded ${getExpansionColor(region.expansion)}`}>
                  {region.expansion}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(region.difficulty)} ${getDifficultyBg(region.difficulty)}`}>
                  {region.difficulty}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="fantasy-heading text-xl font-bold text-white mb-1">
                  {region.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-3 h-3" />
                  {region.estimatedTime}
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-slate-400 text-sm mb-4">
                {region.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Main Bosses:</h4>
                <div className="flex flex-wrap gap-1">
                  {region.mainBosses.map((boss, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-red-500/10 text-red-400 rounded"
                    >
                      {boss}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {region.keyFeatures.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-elden-600/20 text-elden-400 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="content-card p-6 rounded-xl max-w-2xl mx-auto">
          <MapPin className="w-8 h-8 text-erdtree-400 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Interactive Map Coming Soon</h3>
          <p className="text-slate-400">
            We're working on an interactive map feature to help you navigate each region more effectively.
          </p>
        </div>
      </div>
    </div>
  );
}