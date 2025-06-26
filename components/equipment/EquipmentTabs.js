'use client';

import { useState } from 'react';
import { Sword, Shield, Shirt, Gem, Zap, Star } from 'lucide-react';

export default function EquipmentTabs() {
  const [activeTab, setActiveTab] = useState('weapons');

  const tabs = [
    { id: 'weapons', name: 'Weapons', icon: Sword },
    { id: 'armor', name: 'Armor', icon: Shield },
    { id: 'accessories', name: 'Accessories', icon: Gem },
    { id: 'consumables', name: 'Consumables', icon: Zap },
  ];

  const weapons = [
    {
      id: 'uchigatana',
      name: 'Uchigatana',
      category: 'Katana',
      damage: 'A-',
      scaling: 'Dex',
      location: 'Limgrave Tunnels',
      requirements: 'Str: 11, Dex: 15',
      special: 'Unsheathe Skill',
      rarity: 'Common',
      image: 'https://images.pexels.com/photos/163064/play-stone-the-dove-ancient-163064.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 'bloodhounds-fang',
      name: 'Bloodhound\'s Fang',
      category: 'Curved Greatsword',
      damage: 'S',
      scaling: 'Str/Dex',
      location: 'Forlorn Hound Evergaol',
      requirements: 'Str: 18, Dex: 17',
      special: 'Bloodhound\'s Finesse',
      rarity: 'Legendary',
      image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 'rivers-of-blood',
      name: 'Rivers of Blood',
      category: 'Katana',
      damage: 'S',
      scaling: 'Arc',
      location: 'Church of Repose',
      requirements: 'Str: 12, Dex: 18, Arc: 20',
      special: 'Corpse Piler',
      rarity: 'Legendary',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const armor = [
    {
      id: 'knight-set',
      name: 'Knight Set',
      category: 'Heavy Armor',
      defense: 'A',
      weight: 'Heavy',
      location: 'Roundtable Hold',
      special: 'Balanced Protection',
      rarity: 'Common',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 'radahn-set',
      name: 'Radahn\'s Lion Armor',
      category: 'Heavy Armor',
      defense: 'S',
      weight: 'Very Heavy',
      location: 'Redmane Castle',
      special: 'Gravity Resistance',
      rarity: 'Legendary',
      image: 'https://images.pexels.com/photos/2832432/pexels-photo-2832432.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 'black-knife-set',
      name: 'Black Knife Set',
      category: 'Light Armor',
      defense: 'B',
      weight: 'Light',
      location: 'Ordina, Liturgical Town',
      special: 'Muffle Footsteps',
      rarity: 'Rare',
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const accessories = [
    {
      id: 'radagons-scarseal',
      name: 'Radagon\'s Scarseal',
      category: 'Talisman',
      effect: '+3 Vigor, Mind, Endurance, Strength',
      drawback: 'Increases damage taken by 10%',
      location: 'Fort Faroth',
      rarity: 'Rare',
      image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 'dragoncrest-greatshield',
      name: 'Dragoncrest Greatshield Talisman',
      category: 'Talisman',
      effect: 'Reduces physical damage by 20%',
      drawback: 'None',
      location: 'Haligtree',
      rarity: 'Legendary',
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const consumables = [
    {
      id: 'flask-of-crimson-tears',
      name: 'Flask of Crimson Tears',
      category: 'Healing',
      effect: 'Restores HP',
      maxUses: '14 (Fully Upgraded)',
      location: 'Tutorial',
      rarity: 'Essential',
      image: 'https://images.pexels.com/photos/163064/play-stone-the-dove-ancient-163064.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 'rune-arc',
      name: 'Rune Arc',
      category: 'Consumable',
      effect: 'Activates Great Rune effects',
      maxUses: 'Single Use',
      location: 'Various',
      rarity: 'Rare',
      image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const getRarityColor = (rarity) => {
    const colors = {
      Common: 'text-gray-400',
      Rare: 'text-blue-400',
      Legendary: 'text-purple-400',
      Essential: 'text-yellow-400',
    };
    return colors[rarity] || colors.Common;
  };

  const getRarityBg = (rarity) => {
    const colors = {
      Common: 'bg-gray-400/10',
      Rare: 'bg-blue-400/10',
      Legendary: 'bg-purple-400/10',
      Essential: 'bg-yellow-400/10',
    };
    return colors[rarity] || colors.Common;
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'weapons':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weapons.map((weapon) => (
              <div key={weapon.id} className="content-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={weapon.image}
                    alt={weapon.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-white">{weapon.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${getRarityColor(weapon.rarity)} ${getRarityBg(weapon.rarity)}`}>
                      {weapon.rarity}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">{weapon.category}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Damage:</span>
                      <span className="text-white">{weapon.damage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Scaling:</span>
                      <span className="text-white">{weapon.scaling}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Requirements:</span>
                      <span className="text-white text-xs">{weapon.requirements}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-elden-600/30">
                    <p className="text-xs text-slate-400 mb-2">Special: {weapon.special}</p>
                    <p className="text-xs text-slate-500">Location: {weapon.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'armor':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {armor.map((item) => (
              <div key={item.id} className="content-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-white">{item.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${getRarityColor(item.rarity)} ${getRarityBg(item.rarity)}`}>
                      {item.rarity}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">{item.category}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Defense:</span>
                      <span className="text-white">{item.defense}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Weight:</span>
                      <span className="text-white">{item.weight}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-elden-600/30">
                    <p className="text-xs text-slate-400 mb-2">Special: {item.special}</p>
                    <p className="text-xs text-slate-500">Location: {item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'accessories':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accessories.map((item) => (
              <div key={item.id} className="content-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-white">{item.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${getRarityColor(item.rarity)} ${getRarityBg(item.rarity)}`}>
                      {item.rarity}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">{item.category}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-slate-500">Effect:</span>
                      <p className="text-white">{item.effect}</p>
                    </div>
                    {item.drawback && (
                      <div>
                        <span className="text-slate-500">Drawback:</span>
                        <p className="text-red-400">{item.drawback}</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 pt-4 border-t border-elden-600/30">
                    <p className="text-xs text-slate-500">Location: {item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'consumables':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consumables.map((item) => (
              <div key={item.id} className="content-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-white">{item.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${getRarityColor(item.rarity)} ${getRarityBg(item.rarity)}`}>
                      {item.rarity}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">{item.category}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-slate-500">Effect:</span>
                      <p className="text-white">{item.effect}</p>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Max Uses:</span>
                      <span className="text-white">{item.maxUses}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-elden-600/30">
                    <p className="text-xs text-slate-500">Location: {item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="fantasy-heading text-3xl md:text-4xl font-bold mb-4">
          Equipment Guide
        </h1>
        <p className="text-slate-400 text-lg">
          Complete database of weapons, armor, and items in Elden Ring and Shadow of the Erdtree
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-erdtree-600 text-elden-900'
                  : 'bg-elden-700/30 text-slate-300 hover:bg-elden-700/50 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.name}
            </button>
          );
        })}
      </div>

      {/* Content */}
      {renderContent()}

      <div className="mt-12 text-center">
        <div className="content-card p-6 rounded-xl max-w-2xl mx-auto">
          <Star className="w-8 h-8 text-erdtree-400 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Equipment Stats</h3>
          <p className="text-slate-400 mb-4">
            All equipment entries include detailed stats, requirements, locations, and upgrade paths.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-xs px-3 py-1 bg-gray-400/10 text-gray-400 rounded-full">
              Common
            </span>
            <span className="text-xs px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full">
              Rare
            </span>
            <span className="text-xs px-3 py-1 bg-purple-400/10 text-purple-400 rounded-full">
              Legendary
            </span>
            <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">
              Essential
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}