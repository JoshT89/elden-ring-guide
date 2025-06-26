import Link from 'next/link';
import { Users, MapPin, Gift, CheckCircle } from 'lucide-react';

export default function NPCsGrid() {
  const npcs = [
    {
      id: 'ranni',
      name: 'Ranni the Witch',
      title: 'The Lunar Princess',
      location: 'Ranni\'s Rise',
      questLength: 'Long',
      rewards: ['Dark Moon Greatsword', 'Age of the Stars Ending'],
      status: 'Essential',
      description: 'One of the most important questlines, leading to a unique ending',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
      difficulty: 'Complex',
    },
    {
      id: 'fia',
      name: 'Fia, Deathbed Companion',
      title: 'The Deathbed Companion',
      location: 'Roundtable Hold',
      questLength: 'Medium',
      rewards: ['Mending Rune of the Death-Prince', 'Age of Duskborn Ending'],
      status: 'Essential',
      description: 'A questline that explores the nature of death and rebirth',
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
      difficulty: 'Moderate',
    },
    {
      id: 'alexander',
      name: 'Iron Fist Alexander',
      title: 'The Warrior Jar',
      location: 'Stormhill',
      questLength: 'Long',
      rewards: ['Alexander\'s Innards', 'Shard of Alexander'],
      status: 'Optional',
      description: 'Follow the journey of a warrior jar seeking to become stronger',
      image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
      difficulty: 'Easy',
    },
    {
      id: 'varre',
      name: 'White Mask Varré',
      title: 'The War Surgeon',
      location: 'The First Step',
      questLength: 'Medium',
      rewards: ['Pureblood Knight\'s Medal', 'Varré\'s Bouquet'],
      status: 'Important',
      description: 'Early access to Mohgwyn Palace and valuable rewards',
      image: 'https://images.pexels.com/photos/163064/play-stone-the-dove-ancient-163064.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
      difficulty: 'Easy',
    },
    {
      id: 'millicent',
      name: 'Millicent',
      title: 'The Scarlet Bloom',
      location: 'Caelid',
      questLength: 'Long',
      rewards: ['Millicent\'s Prosthesis', 'Rotten Winged Sword Insignia'],
      status: 'Optional',
      description: 'A touching story of identity and self-discovery',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
      difficulty: 'Moderate',
    },
    {
      id: 'needle-knight-leda',
      name: 'Needle Knight Leda',
      title: 'The Needle Knight',
      location: 'Mohgwyn Palace',
      questLength: 'Long',
      rewards: ['Leda\'s Rune', 'Needle Knight Badge'],
      status: 'Essential',
      description: 'Key questline for Shadow of the Erdtree progression',
      image: 'https://images.pexels.com/photos/2832432/pexels-photo-2832432.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Shadow of the Erdtree',
      difficulty: 'Complex',
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      Essential: 'text-red-400 bg-red-400/10',
      Important: 'text-orange-400 bg-orange-400/10',
      Optional: 'text-green-400 bg-green-400/10',
    };
    return colors[status] || colors.Optional;
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Easy: 'text-green-400',
      Moderate: 'text-yellow-400',
      Complex: 'text-red-400',
    };
    return colors[difficulty] || colors.Easy;
  };

  const getQuestLengthColor = (length) => {
    const colors = {
      Short: 'text-green-400',
      Medium: 'text-yellow-400',
      Long: 'text-red-400',
    };
    return colors[length] || colors.Short;
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
          NPCs & Questlines
        </h1>
        <p className="text-slate-400 text-lg">
          Complete guides for every NPC questline in Elden Ring and Shadow of the Erdtree
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {npcs.map((npc) => (
          <Link
            key={npc.id}
            href={`/npcs/${npc.id}`}
            className="content-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
          >
            <div className="relative">
              <div className="aspect-video overflow-hidden">
                <img
                  src={npc.image}
                  alt={npc.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                <span className={`text-xs px-2 py-1 rounded ${getExpansionColor(npc.expansion)}`}>
                  {npc.expansion}
                </span>
                <span className={`text-xs px-2 py-1 rounded border ${getStatusColor(npc.status)}`}>
                  {npc.status}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="fantasy-heading text-lg font-bold text-white mb-1">
                  {npc.name}
                </h3>
                <p className="text-sm text-slate-300">
                  {npc.title}
                </p>
              </div>
            </div>

            <div className="p-6">
              <p className="text-slate-400 text-sm mb-4">
                {npc.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Location:
                  </span>
                  <p className="text-white">{npc.location}</p>
                </div>
                <div>
                  <span className="text-slate-500">Quest Length:</span>
                  <p className={getQuestLengthColor(npc.questLength)}>
                    {npc.questLength}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Gift className="w-4 h-4" />
                  Rewards:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {npc.rewards.slice(0, 2).map((reward, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-erdtree-600/20 text-erdtree-400 rounded"
                    >
                      {reward}
                    </span>
                  ))}
                  {npc.rewards.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-slate-600/20 text-slate-400 rounded">
                      +{npc.rewards.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className={`text-xs ${getDifficultyColor(npc.difficulty)}`}>
                  {npc.difficulty} Difficulty
                </span>
                <span className="text-erdtree-400 group-hover:text-erdtree-300 flex items-center gap-1">
                  View Quest
                  <Users className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="content-card p-6 rounded-xl max-w-2xl mx-auto">
          <CheckCircle className="w-8 h-8 text-erdtree-400 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Quest Completion Tips</h3>
          <p className="text-slate-400 mb-4">
            Each questline guide includes step-by-step instructions, location maps, and missable content warnings.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-xs px-3 py-1 bg-red-400/10 text-red-400 rounded-full">
              Essential Quests
            </span>
            <span className="text-xs px-3 py-1 bg-orange-400/10 text-orange-400 rounded-full">
              Important Quests
            </span>
            <span className="text-xs px-3 py-1 bg-green-400/10 text-green-400 rounded-full">
              Optional Quests
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}