'use client';

import { useState } from 'react';
import { X, MapPin, Sword, Shield, Clock, Star, Users, Package, Eye } from 'lucide-react';

export default function RegionDetailModal({ region, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  // Detailed region data - starting with Limgrave
  const regionDetails = {
    limgrave: {
      locations: [
        {
          name: 'Church of Elleh',
          type: 'Landmark',
          description: 'First major NPC hub where you meet White Mask Varré and Ranni the Witch',
          importance: 'High',
          items: ['Spirit Calling Bell', 'Lone Wolf Ashes'],
          npcs: ['White Mask Varré', 'Ranni the Witch (at night)']
        },
        {
          name: 'Limgrave Tunnels',
          type: 'Dungeon',
          description: 'First major dungeon with valuable upgrade materials and boss',
          importance: 'High',
          items: ['Uchigatana', 'Smithing Stone [1]', 'Flamedrake Talisman'],
          boss: 'Beastman of Farum Azula'
        },
        {
          name: 'Gatefront Ruins',
          type: 'Landmark',
          description: 'Where you meet Melina and receive Torrent, your spectral steed',
          importance: 'Critical',
          items: ['Spectral Steed Whistle'],
          npcs: ['Melina']
        },
        {
          name: 'Stormveil Castle',
          type: 'Legacy Dungeon',
          description: 'First major legacy dungeon containing Margit and Godrick',
          importance: 'Critical',
          items: ['Godrick\'s Great Rune', 'Godrick\'s Axe', 'Grafted Blade Greatsword'],
          bosses: ['Margit, the Fell Omen', 'Godrick the Grafted']
        },
        {
          name: 'Forlorn Hound Evergaol',
          type: 'Evergaol',
          description: 'Contains Bloodhound\'s Fang weapon and challenging boss',
          importance: 'Medium',
          items: ['Bloodhound\'s Fang'],
          boss: 'Bloodhound Knight Darriwil'
        },
        {
          name: 'Groveside Cave',
          type: 'Cave',
          description: 'Small cave with basic enemies and loot',
          importance: 'Low',
          items: ['Golden Seed', 'Sacred Tear']
        },
        {
          name: 'Coastal Cave',
          type: 'Cave',
          description: 'Cave near the coast with unique enemies',
          importance: 'Low',
          items: ['Golden Seed']
        },
        {
          name: 'Murkwater Cave',
          type: 'Cave',
          description: 'Cave with Patches and valuable loot',
          importance: 'Medium',
          items: ['Golden Seed'],
          npcs: ['Patches']
        },
        {
          name: 'Stormfoot Catacombs',
          type: 'Catacombs',
          description: 'Underground catacombs with spirits and loot',
          importance: 'Low',
          items: ['Golden Seed']
        }
      ],
      secretBosses: [
        {
          name: 'Tree Sentinel',
          location: 'Near starting area',
          difficulty: 'Hard (for beginners)',
          drops: ['Golden Halberd', '3200 Runes'],
          strategy: 'This boss is designed to teach you that some enemies are too strong for beginners. You can return later when you\'re stronger.',
          type: 'World Boss'
        },
        {
          name: 'Agheel Lake Dragon',
          location: 'Agheel Lake',
          difficulty: 'Hard',
          drops: ['Dragon Heart', '5000 Runes'],
          strategy: 'Use Torrent for mobility and focus on attacking its head when possible.',
          type: 'World Boss'
        },
        {
          name: 'Beastman of Farum Azula',
          location: 'Limgrave Tunnels',
          difficulty: 'Medium',
          drops: ['Flamedrake Talisman', '1000 Runes'],
          strategy: 'This boss is more manageable than the Tree Sentinel. Focus on dodging and counter-attacking.',
          type: 'Dungeon Boss'
        },
        {
          name: 'Bloodhound Knight Darriwil',
          location: 'Forlorn Hound Evergaol',
          difficulty: 'Medium',
          drops: ['Bloodhound\'s Fang'],
          strategy: 'Fast and aggressive boss. Use the arena space and watch for his teleporting attacks.',
          type: 'Evergaol Boss'
        }
      ],
      eliteEnemies: [
        {
          name: 'Banished Knights',
          locations: ['Stormveil Castle'],
          difficulty: 'Medium',
          drops: ['Banished Knight\'s Halberd', 'Banished Knight Armor Set'],
          strategy: 'These knights are tough but manageable. Focus on dodging their attacks and counter-attacking when they\'re vulnerable.'
        },
        {
          name: 'Godrick Soldiers',
          locations: ['Throughout Limgrave'],
          difficulty: 'Easy',
          drops: ['Godrick Soldier Armor', 'Various weapons'],
          strategy: 'Basic enemies that are good for practice and farming runes.'
        },
        {
          name: 'Grafted Scions',
          locations: ['Stormveil Castle'],
          difficulty: 'Hard',
          drops: ['Grafted Scion Armor'],
          strategy: 'Fast and aggressive enemies with multiple limbs. Use spacing and timing to defeat them.'
        }
      ],
      weapons: [
        {
          name: 'Uchigatana',
          type: 'Weapon',
          location: 'Limgrave Tunnels',
          requirements: '11 Strength, 15 Dexterity',
          description: 'Popular katana with good dexterity scaling and bleed effect',
          scaling: 'Dexterity',
          special: 'Unsheathe weapon art'
        },
        {
          name: 'Bloodhound\'s Fang',
          type: 'Weapon',
          location: 'Forlorn Hound Evergaol',
          requirements: '18 Strength, 17 Dexterity',
          description: 'Curved greatsword with unique skill and bleed effect',
          scaling: 'Strength/Dexterity',
          special: 'Bloodhound\'s Finesse weapon art'
        },
        {
          name: 'Golden Halberd',
          type: 'Weapon',
          location: 'Tree Sentinel (World Boss)',
          requirements: '30 Strength, 14 Dexterity, 12 Faith',
          description: 'Powerful halberd with holy damage',
          scaling: 'Strength/Faith',
          special: 'Golden Vow weapon art'
        },
        {
          name: 'Grafted Blade Greatsword',
          type: 'Weapon',
          location: 'Godrick the Grafted (Boss)',
          requirements: '40 Strength, 14 Dexterity',
          description: 'Legendary greatsword with unique skill',
          scaling: 'Strength',
          special: 'Oath of Vengeance weapon art'
        }
      ],
      npcs: [
        {
          name: 'White Mask Varré',
          location: 'Church of Elleh',
          description: 'First NPC you meet. Provides access to Mohgwyn Palace through his questline.',
          questline: 'White Mask Varré Questline',
          importance: 'High'
        },
        {
          name: 'Ranni the Witch',
          location: 'Church of Elleh (at night)',
          description: 'Mysterious witch with a crucial questline leading to the Age of Stars ending.',
          questline: 'Ranni the Witch Questline',
          importance: 'Critical'
        },
        {
          name: 'Melina',
          location: 'Gatefront Ruins',
          description: 'Offers you the power to level up and gives you Torrent, your spectral steed.',
          questline: 'Main Story',
          importance: 'Critical'
        },
        {
          name: 'Roderika',
          location: 'Stormveil Castle',
          description: 'A young woman who can help you with spirit tuning and summoning.',
          questline: 'Roderika\'s Questline',
          importance: 'Medium'
        },
        {
          name: 'Gostoc',
          location: 'Stormveil Castle',
          description: 'A gatekeeper who can provide assistance and items.',
          questline: 'Gostoc\'s Questline',
          importance: 'Low'
        },
        {
          name: 'Patches',
          location: 'Murkwater Cave',
          description: 'A merchant who can be tricky but offers valuable items.',
          questline: 'Patches\' Questline',
          importance: 'Medium'
        }
      ]
    }
  };

  const getDetailData = () => {
    return regionDetails[region?.id] || null;
  };

  const detailData = getDetailData();

  if (!isOpen || !region || !detailData) return null;

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Very Easy': 'text-green-400',
      'Easy': 'text-green-400',
      'Medium': 'text-yellow-400',
      'Hard': 'text-orange-400',
      'Very Hard': 'text-red-400',
    };
    return colors[difficulty] || colors.Medium;
  };

  const getImportanceColor = (importance) => {
    const colors = {
      'Low': 'text-slate-400',
      'Medium': 'text-yellow-400',
      'High': 'text-orange-400',
      'Critical': 'text-red-400',
    };
    return colors[importance] || colors.Medium;
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'locations', label: 'Locations', icon: MapPin },
    { id: 'bosses', label: 'Bosses', icon: Sword },
    { id: 'enemies', label: 'Elite Enemies', icon: Shield },
    { id: 'weapons', label: 'Weapons', icon: Package },
    { id: 'npcs', label: 'NPCs', icon: Users },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative w-full aspect-video overflow-hidden rounded-t-xl">
          <img
            src={region.image}
            alt={region.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <span className={`text-sm px-3 py-1 rounded ${region.expansion === 'Shadow of the Erdtree' ? 'bg-shadow-600 text-white' : 'bg-elden-600 text-white'}`}>
              {region.expansion}
            </span>
            <button
              onClick={onClose}
              className="p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="fantasy-heading text-3xl font-bold text-white mb-2">
              {region.name}
            </h2>
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {region.estimatedTime}
              </div>
              <div className="flex items-center gap-1">
                <Sword className="w-4 h-4" />
                {region.mainBosses.length} Main Bosses
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-slate-700 bg-slate-900">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'text-elden-400 border-b-2 border-elden-400'
                      : 'text-slate-400 hover:text-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[50vh]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                <p className="text-slate-300">{region.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Sword className="w-5 h-5 text-red-400" />
                    Main Bosses
                  </h3>
                  <div className="space-y-2">
                    {region.mainBosses.map((boss, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-red-500/10 rounded">
                        <Star className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-red-300">{boss}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-elden-400" />
                    Key Features
                  </h3>
                  <div className="space-y-2">
                    {region.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-elden-600/20 rounded">
                        <Shield className="w-4 h-4 text-elden-400" />
                        <span className="text-sm text-elden-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'locations' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Locations of Interest</h3>
              {detailData.locations.map((location, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white">{location.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${getImportanceColor(location.importance)}`}>
                      {location.importance}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">{location.description}</p>
                  
                  {location.items && location.items.length > 0 && (
                    <div className="mb-2">
                      <span className="text-xs text-slate-500">Items: </span>
                      <span className="text-xs text-elden-400">{location.items.join(', ')}</span>
                    </div>
                  )}
                  
                  {location.boss && (
                    <div className="mb-2">
                      <span className="text-xs text-slate-500">Boss: </span>
                      <span className="text-xs text-red-400">{location.boss}</span>
                    </div>
                  )}
                  
                  {location.npcs && location.npcs.length > 0 && (
                    <div>
                      <span className="text-xs text-slate-500">NPCs: </span>
                      <span className="text-xs text-blue-400">{location.npcs.join(', ')}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'bosses' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Secret Bosses & Elite Enemies</h3>
              {detailData.secretBosses.map((boss, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white">{boss.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(boss.difficulty)}`}>
                      {boss.difficulty}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">{boss.location}</p>
                  <p className="text-slate-300 text-sm mb-2">{boss.strategy}</p>
                  <div className="text-xs text-slate-500">
                    <span className="text-slate-500">Drops: </span>
                    <span className="text-elden-400">{boss.drops.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'enemies' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Elite Enemies</h3>
              {detailData.eliteEnemies.map((enemy, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white">{enemy.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(enemy.difficulty)}`}>
                      {enemy.difficulty}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">{enemy.locations.join(', ')}</p>
                  <p className="text-slate-300 text-sm mb-2">{enemy.strategy}</p>
                  <div className="text-xs text-slate-500">
                    <span className="text-slate-500">Drops: </span>
                    <span className="text-elden-400">{enemy.drops.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'weapons' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Weapons of Interest</h3>
              {detailData.weapons.map((weapon, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white">{weapon.name}</h4>
                    <span className="text-xs px-2 py-1 rounded bg-elden-600/20 text-elden-400">
                      {weapon.type}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">{weapon.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-500">Location: </span>
                      <span className="text-elden-400">{weapon.location}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Requirements: </span>
                      <span className="text-yellow-400">{weapon.requirements}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Scaling: </span>
                      <span className="text-blue-400">{weapon.scaling}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Special: </span>
                      <span className="text-purple-400">{weapon.special}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'npcs' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">NPCs & Questlines</h3>
              {detailData.npcs.map((npc, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white">{npc.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${getImportanceColor(npc.importance)}`}>
                      {npc.importance}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">{npc.location}</p>
                  <p className="text-slate-300 text-sm mb-2">{npc.description}</p>
                  <div className="text-xs text-blue-400">{npc.questline}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-700 bg-slate-900">
          <div className="flex gap-3">
            <button
              onClick={() => window.location.href = `/regions/${region.id}`}
              className="flex-1 bg-elden-600 hover:bg-elden-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              View Full Guide
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 