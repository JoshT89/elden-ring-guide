'use client';

import Link from 'next/link';
import { MapPin, Clock, Star } from 'lucide-react';
import { useState } from 'react';
import RegionDetailModal from './RegionDetailModal';

export default function RegionsGrid() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRegion(null);
  };

  const regions = [
    // Base Game Regions - Early Game
    {
      id: 'limgrave',
      name: 'Limgrave',
      description: 'The starting region where your journey begins in the Lands Between',
      difficulty: 'Beginner',
      estimatedTime: '8-12 hours',
      mainBosses: ['Margit, the Fell Omen', 'Godrick the Grafted'],
      keyFeatures: ['Tutorial Area', 'Stormveil Castle', 'First Legacy Dungeon', 'Church of Elleh'],
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'weeping-peninsula',
      name: 'Weeping Peninsula',
      description: 'Southern peninsula with Castle Morne and beginner-friendly content',
      difficulty: 'Beginner',
      estimatedTime: '3-5 hours',
      mainBosses: ['Leonine Misbegotten'],
      keyFeatures: ['Castle Morne', 'Bridge of Sacrifice', 'Irina\'s Quest', 'Church of Pilgrimage'],
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'liurnia',
      name: 'Liurnia of the Lakes',
      description: 'A vast region of lakes and magical academies in the north',
      difficulty: 'Intermediate',
      estimatedTime: '10-15 hours',
      mainBosses: ['Rennala, Queen of the Full Moon', 'Royal Knight Loretta'],
      keyFeatures: ['Raya Lucaria Academy', 'Caria Manor', 'Lake of Rot', 'Moonlight Altar'],
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'caelid',
      name: 'Caelid',
      description: 'A scarlet rot-infested wasteland of danger and decay',
      difficulty: 'Advanced',
      estimatedTime: '12-18 hours',
      mainBosses: ['Starscourge Radahn', 'Dragonlord Placidusax'],
      keyFeatures: ['Redmane Castle', 'Caelid Dragonbarrow', 'Sellia Crystal Tunnel', 'Greyoll\'s Dragonbarrow'],
      image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'altus-plateau',
      name: 'Altus Plateau',
      description: 'The elevated lands leading to the capital city',
      difficulty: 'Advanced',
      estimatedTime: '8-12 hours',
      mainBosses: ['Morgott, the Omen King', 'Godfrey, First Elden Lord'],
      keyFeatures: ['Leyndell Capital', 'Mt. Gelmir', 'Volcano Manor', 'Erdtree'],
      image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'mt-gelmir',
      name: 'Mt. Gelmir',
      description: 'Volcanic region home to Volcano Manor and Rykard',
      difficulty: 'Advanced',
      estimatedTime: '6-10 hours',
      mainBosses: ['Rykard, Lord of Blasphemy', 'Godskin Noble'],
      keyFeatures: ['Volcano Manor', 'Gelmir Hero\'s Grave', 'Recusant Questline', 'Seethewater Terminus'],
      image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'leyndell',
      name: 'Leyndell, Royal Capital',
      description: 'The grand capital city of the Lands Between and seat of power',
      difficulty: 'Expert',
      estimatedTime: '8-12 hours',
      mainBosses: ['Morgott, the Omen King', 'Godfrey, First Elden Lord'],
      keyFeatures: ['Royal Capital', 'Erdtree', 'Golden Order', 'Ashen Capital'],
      image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'mountaintops',
      name: 'Mountaintops of the Giants',
      description: 'Frozen peaks where giants once roamed and the forge awaits',
      difficulty: 'Expert',
      estimatedTime: '6-10 hours',
      mainBosses: ['Fire Giant', 'Godskin Duo'],
      keyFeatures: ['Flame Peak', 'Giants\' Graveyard', 'Forge of the Giants', 'Consecrated Snowfield'],
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'crumbling-farum-azula',
      name: 'Crumbling Farum Azula',
      description: 'Ancient floating ruins where time stands still',
      difficulty: 'Expert',
      estimatedTime: '4-6 hours',
      mainBosses: ['Maliketh, the Black Blade', 'Dragonlord Placidusax'],
      keyFeatures: ['Ancient Ruins', 'Beast Clergyman', 'Destined Death', 'Floating Ruins'],
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'haligtree',
      name: 'Miquella\'s Haligtree',
      description: 'Secret endgame area home to Malenia and the Haligtree',
      difficulty: 'Expert',
      estimatedTime: '4-6 hours',
      mainBosses: ['Malenia, Blade of Miquella', 'Loretta, Knight of the Haligtree'],
      keyFeatures: ['Haligtree', 'Elphael', 'Malenia\'s Arena', 'Unalloyed Gold'],
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    // Underground Areas
    {
      id: 'siofra-river',
      name: 'Siofra River',
      description: 'Underground river with ancient ruins and ancestral spirits',
      difficulty: 'Intermediate',
      estimatedTime: '3-5 hours',
      mainBosses: ['Ancestor Spirit'],
      keyFeatures: ['Underground River', 'Ancestral Followers', 'Wells', 'Eternal Cities'],
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'ainsel-river',
      name: 'Ainsel River',
      description: 'Underground river with dragonkin and cosmic horrors',
      difficulty: 'Advanced',
      estimatedTime: '3-5 hours',
      mainBosses: ['Astel, Naturalborn of the Void', 'Dragonkin Soldier'],
      keyFeatures: ['Underground River', 'Astel Arena', 'Dragonkin', 'Cosmic Horrors'],
      image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'nokron',
      name: 'Nokron, Eternal City',
      description: 'Underground eternal city accessed after defeating Radahn',
      difficulty: 'Advanced',
      estimatedTime: '4-6 hours',
      mainBosses: ['Mimic Tear', 'Valiant Gargoyles'],
      keyFeatures: ['Eternal City', 'Fingerslayer Blade', 'Ranni Quest', 'Night\'s Sacred Ground'],
      image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'nokstella',
      name: 'Nokstella, Eternal City',
      description: 'Connected to Nokron with more eternal city mysteries',
      difficulty: 'Advanced',
      estimatedTime: '3-4 hours',
      mainBosses: ['Baleful Shadow'],
      keyFeatures: ['Eternal City', 'Nokstella Waterfall', 'Ranni Quest', 'Night\'s Sacred Ground'],
      image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'deeproot-depths',
      name: 'Deeproot Depths',
      description: 'Deep underground area with deathroot and Fia\'s quest',
      difficulty: 'Advanced',
      estimatedTime: '3-5 hours',
      mainBosses: ['Fia\'s Champions', 'Lichdragon Fortissax'],
      keyFeatures: ['Deathroot', 'Fia Quest', 'Underground', 'Deathbed Dream'],
      image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'lake-of-rot',
      name: 'Lake of Rot',
      description: 'Toxic lake area with scarlet rot and cosmic horrors',
      difficulty: 'Advanced',
      estimatedTime: '2-3 hours',
      mainBosses: ['Astel, Naturalborn of the Void'],
      keyFeatures: ['Scarlet Rot', 'Astel Boss', 'Ranni Quest', 'Grand Cloister'],
      image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    {
      id: 'mohgwyn-palace',
      name: 'Mohgwyn Palace',
      description: 'Underground palace home to Mohg and the blood dynasty',
      difficulty: 'Expert',
      estimatedTime: '3-5 hours',
      mainBosses: ['Mohg, Lord of Blood', 'White Mask Varré'],
      keyFeatures: ['Mohgwyn Palace', 'Albinaurics', 'Blood Dynasty', 'Dynasty Mausoleum'],
      image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Base Game',
    },
    // DLC Regions
    {
      id: 'gravesite-plain',
      name: 'Gravesite Plain',
      description: 'First major area of the Shadow Realm with new mechanics and enemies',
      difficulty: 'Expert',
      estimatedTime: '3-6 hours',
      mainBosses: ['Divine Beast Shadow of the Erdtree', 'Bayle the Dread'],
      keyFeatures: ['Shadow Realm Entry', 'Scadu Altus System', 'Needle Knight Leda', 'Belurat Tower Settlement'],
      image: 'https://images.pexels.com/photos/2832432/pexels-photo-2832432.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Shadow of the Erdtree',
    },
    {
      id: 'scadu-altus-plateau',
      name: 'Scadu Altus Plateau',
      description: 'Advanced DLC area with tougher enemies and path to Shadow Keep',
      difficulty: 'Expert',
      estimatedTime: '4-8 hours',
      mainBosses: ['Commander Gaius', 'Advanced Shadow Enemies'],
      keyFeatures: ['Advanced Shadow Realm', 'Shadow Keep Access', 'Enhanced Scadu Altus', 'Jagged Peak'],
      image: 'https://images.pexels.com/photos/2832432/pexels-photo-2832432.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Shadow of the Erdtree',
    },
    {
      id: 'shadow-keep',
      name: 'Shadow Keep',
      description: 'Main DLC dungeon and Messmer\'s domain with legendary loot',
      difficulty: 'Expert',
      estimatedTime: '3-5 hours',
      mainBosses: ['Promised Consort Radahn', 'Messmer the Impaler'],
      keyFeatures: ['Main DLC Dungeon', 'Messmer\'s Domain', 'Legendary Loot', 'Shadow Keep Secrets'],
      image: 'https://images.pexels.com/photos/2832432/pexels-photo-2832432.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Shadow of the Erdtree',
    },
    {
      id: 'abyssal-woods',
      name: 'Abyssal Woods',
      description: 'Dark forest area with unique shadow mechanics and secrets',
      difficulty: 'Expert',
      estimatedTime: '2-4 hours',
      mainBosses: ['Shadow Creatures', 'Abyssal Horrors'],
      keyFeatures: ['Dark Forest', 'Shadow Mechanics', 'Hidden Secrets', 'Abyssal Depths'],
      image: 'https://images.pexels.com/photos/2832432/pexels-photo-2832432.jpeg?auto=compress&cs=tinysrgb&w=600',
      expansion: 'Shadow of the Erdtree',
    },
    {
      id: 'shadow-realm-final',
      name: 'Final Shadow Areas',
      description: 'Ultimate DLC challenges and conclusion of the Shadow Realm story with the most powerful enemies',
      difficulty: 'Expert',
      estimatedTime: '2-4 hours',
      mainBosses: ['Ancient Dragon Senessax', 'Promised Consort Radahn'],
      keyFeatures: ['DLC Conclusion', 'Ultimate Challenges', 'Story Finale', 'Shadow Realm Secrets', 'Ancient Dragon Arena'],
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
          <div
            key={region.id}
            className="content-card rounded-xl overflow-hidden group"
          >
            <div className="relative">
              <div className="aspect-video overflow-hidden">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover"
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
          </div>
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

      {/* Region Detail Modal */}
      <RegionDetailModal
        region={selectedRegion}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}