import Link from 'next/link';
import { Sword, Shield, Star, Zap } from 'lucide-react';
import { bossData } from '@/lib/data/bossData';

export default function BossesGrid() {
  const bosses = bossData;

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
      Beginner: 'bg-green-400/10 border-green-400/20',
      Intermediate: 'bg-yellow-400/10 border-yellow-400/20',
      Advanced: 'bg-orange-400/10 border-orange-400/20',
      Expert: 'bg-red-400/10 border-red-400/20',
    };
    return colors[difficulty] || colors.Beginner;
  };

  const getTypeColor = (type) => {
    const colors = {
      'Legacy Boss': 'bg-blue-600',
      'Demigod': 'bg-purple-600',
      'Shadow Boss': 'bg-red-600',
    };
    return colors[type] || 'bg-gray-600';
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
          Boss Guides
        </h1>
        <p className="text-slate-400 text-lg">
          Complete strategies for every major boss in Elden Ring and Shadow of the Erdtree
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bosses.map((boss) => (
          <Link
            key={boss.id}
            href={`/bosses/${boss.id}`}
            className="content-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
          >
            <div className="relative">
              <div className="aspect-video overflow-hidden">
                <img
                  src={boss.image || 'https://images.pexels.com/photos/163064/play-stone-the-dove-ancient-163064.jpeg?auto=compress&cs=tinysrgb&w=600'}
                  alt={boss.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                <span className={`text-xs px-2 py-1 rounded ${getExpansionColor(boss.expansion)}`}>
                  {boss.expansion}
                </span>
                <span className={`text-xs px-2 py-1 rounded border ${getDifficultyColor(boss.difficulty)} ${getDifficultyBg(boss.difficulty)}`}>
                  {boss.difficulty}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <span className={`text-xs px-2 py-1 rounded text-white ${getTypeColor(boss.type)} mb-2 inline-block`}>
                  {boss.type}
                </span>
                <h3 className="fantasy-heading text-lg font-bold text-white mb-1">
                  {boss.name}
                </h3>
                <p className="text-sm text-slate-300">
                  {boss.title}
                </p>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-slate-500">Location:</span>
                  <p className="text-white">{boss.location}</p>
                </div>
                <div>
                  <span className="text-slate-500">Level:</span>
                  <p className="text-white">{boss.level}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Weaknesses:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {boss.weaknesses.map((weakness, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-red-500/10 text-red-400 rounded"
                    >
                      {weakness}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Rewards:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {boss.rewards.slice(0, 2).map((reward, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-erdtree-600/20 text-erdtree-400 rounded"
                    >
                      {typeof reward === 'string' ? reward : reward.name}
                    </span>
                  ))}
                  {boss.rewards.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-slate-600/20 text-slate-400 rounded">
                      +{boss.rewards.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-elden-600/30">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Strategy Guide</span>
                  <span className="text-erdtree-400 group-hover:text-erdtree-300 flex items-center gap-1">
                    View Guide
                    <Sword className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="content-card p-6 rounded-xl max-w-2xl mx-auto">
          <Zap className="w-8 h-8 text-erdtree-400 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Boss Battle Tips</h3>
          <p className="text-slate-400 mb-4">
            Each boss guide includes detailed strategies, weakness exploits, and recommended builds.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-xs px-3 py-1 bg-elden-600/20 text-elden-400 rounded-full">
              Phase Breakdowns
            </span>
            <span className="text-xs px-3 py-1 bg-erdtree-600/20 text-erdtree-400 rounded-full">
              Attack Patterns
            </span>
            <span className="text-xs px-3 py-1 bg-shadow-600/20 text-shadow-400 rounded-full">
              Recommended Builds
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}