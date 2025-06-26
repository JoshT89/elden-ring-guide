// IGN Walkthrough-based data structure for Elden Ring guide
export const ignWalkthroughStructure = {
  // Main walkthrough sections following IGN's structure
  walkthroughSections: [
    {
      id: 'stranded-graveyard',
      title: 'Stranded Graveyard - Cave of Knowledge Tutorial',
      order: 1,
      type: 'tutorial',
      description: 'Initial tutorial area teaching basic game mechanics',
      objectives: [
        'Learn basic controls',
        'Defeat Soldier of Godrick',
        'Learn about Sites of Grace',
        'Understand combat mechanics'
      ],
      items: [
        'Flask of Crimson Tears',
        'Flask of Cerulean Tears',
        'Golden Seed',
        'Sacred Tear'
      ],
      bosses: ['Soldier of Godrick'],
      npcs: [],
      secrets: [],
      estimatedTime: '15-30 minutes',
      difficulty: 'easy',
      tags: ['tutorial', 'beginner', 'stranded-graveyard']
    },
    {
      id: 'west-limgrave',
      title: 'West Limgrave - Region Guide, Dungeon Locations, and Points of Interest',
      order: 2,
      type: 'region',
      description: 'Starting region with multiple dungeons and points of interest',
      objectives: [
        'Explore the open world',
        'Find Sites of Grace',
        'Discover dungeons and caves',
        'Collect Golden Seeds and Sacred Tears',
        'Defeat world bosses'
      ],
      dungeons: [
        'Limgrave Tunnels',
        'Groveside Cave',
        'Coastal Cave',
        'Murkwater Cave',
        'Stormfoot Catacombs'
      ],
      worldBosses: [
        'Tree Sentinel',
        'Agheel Lake Dragon',
        'Beastman of Farum Azula'
      ],
      items: [
        'Uchigatana',
        'Bloodhound\'s Fang',
        'Golden Seeds',
        'Sacred Tears',
        'Stonesword Keys'
      ],
      npcs: [
        'White Mask Varré',
        'Ranni the Witch',
        'Blaidd'
      ],
      estimatedTime: '2-4 hours',
      difficulty: 'easy',
      tags: ['limgrave', 'starting-area', 'open-world']
    },
    {
      id: 'stormveil-castle',
      title: 'Stormveil Castle - Legacy Dungeon Walkthrough',
      order: 3,
      type: 'legacy-dungeon',
      description: 'First major legacy dungeon containing Margit and Godrick',
      objectives: [
        'Defeat Margit, the Fell Omen',
        'Navigate the castle interior',
        'Defeat Godrick the Grafted',
        'Obtain Godrick\'s Great Rune'
      ],
      bosses: [
        'Margit, the Fell Omen',
        'Godrick the Grafted'
      ],
      items: [
        'Godrick\'s Great Rune',
        'Godrick\'s Axe',
        'Grafted Blade Greatsword',
        'Golden Seeds',
        'Sacred Tears'
      ],
      secrets: [
        'Hidden path to Godrick',
        'Secret room with items',
        'Alternative routes'
      ],
      estimatedTime: '1-2 hours',
      difficulty: 'medium',
      tags: ['legacy-dungeon', 'stormveil-castle', 'demigod']
    }
  ],

  // Character questlines from IGN
  characterQuests: [
    {
      id: 'ranni-questline',
      title: 'Ranni the Witch\'s Character Questline',
      npc: 'Ranni the Witch',
      description: 'Major questline leading to the Age of Stars ending',
      steps: [
        {
          step: 1,
          location: 'Church of Elleh (Limgrave)',
          requirement: 'Meet Ranni at night',
          dialogue: 'Initial encounter with Ranni',
          reward: 'Spirit Calling Bell and Lone Wolf Ashes'
        },
        {
          step: 2,
          location: 'Raya Lucaria Academy',
          requirement: 'Defeat Rennala',
          dialogue: 'Ranni appears after defeating Rennala',
          reward: 'Dark Moon Ring'
        },
        {
          step: 3,
          location: 'Nokron, Eternal City',
          requirement: 'Defeat Radahn to access Nokron',
          dialogue: 'Ranni requests the Fingerslayer Blade',
          reward: 'Carian Inverted Statue'
        }
      ],
      endings: ['Age of Stars'],
      relatedQuests: ['Blaidd', 'Iji', 'Seluvis'],
      tags: ['major-questline', 'ending', 'ranni', 'age-of-stars']
    },
    {
      id: 'fia-questline',
      title: 'Fia the Deathbed Companion\'s Character Questline',
      npc: 'Fia, Deathbed Companion',
      description: 'Questline related to death and the Death ending',
      steps: [
        {
          step: 1,
          location: 'Roundtable Hold',
          requirement: 'Meet Fia in the bedroom',
          dialogue: 'Fia offers to hold you',
          reward: 'Blessing of Death'
        }
      ],
      endings: ['Age of the Duskborn'],
      relatedQuests: ['D, Hunter of the Dead'],
      tags: ['major-questline', 'ending', 'fia', 'death']
    }
  ],

  // Boss guides structure
  bossGuides: [
    {
      id: 'margit-fell-omen',
      title: 'Margit, the Fell Omen',
      location: 'Stormveil Castle',
      region: 'Limgrave',
      health: 4174,
      runes: 12000,
      weaknesses: ['Fire', 'Lightning'],
      resistances: ['Holy'],
      phases: [
        {
          phase: 1,
          healthThreshold: 100,
          attacks: [
            'Sword strikes',
            'Hammer attacks',
            'Jump attacks',
            'Spectral weapons'
          ],
          strategies: [
            'Stay at medium distance',
            'Dodge through attacks',
            'Use fire damage',
            'Summon spirits for distraction'
          ],
          tips: [
            'Margit is weak to fire damage',
            'His attacks have long wind-ups',
            'Use the shackle item to stun him',
            'Focus on dodging rather than blocking'
          ]
        }
      ],
      rewards: [
        {
          type: 'talisman',
          name: 'Margit\'s Shackle',
          description: 'Can be used to stun Margit temporarily'
        }
      ],
      summonOptions: ['Spirit Ashes', 'Jellyfish Ashes', 'Lone Wolf Ashes'],
      cheeseStrategies: [
        'Use Margit\'s Shackle to stun him',
        'Summon multiple spirits',
        'Use ranged attacks from safe distance'
      ],
      difficulty: 'medium',
      requiredLevel: 20,
      tags: ['boss', 'stormveil-castle', 'limgrave', 'spectral']
    }
  ],

  // Collectibles tracking
  collectibles: [
    {
      id: 'golden-seeds',
      title: 'Golden Seeds',
      type: 'upgrade-material',
      description: 'Used to increase Flask of Crimson Tears charges',
      locations: [
        'Stranded Graveyard',
        'West Limgrave',
        'East Limgrave',
        'Weeping Peninsula'
      ],
      totalCount: 30,
      tags: ['collectible', 'upgrade', 'flask']
    },
    {
      id: 'sacred-tears',
      title: 'Sacred Tears',
      type: 'upgrade-material',
      description: 'Used to increase Flask of Crimson Tears healing',
      locations: [
        'Stranded Graveyard',
        'Church of Elleh',
        'Stormveil Castle',
        'Raya Lucaria Academy'
      ],
      totalCount: 12,
      tags: ['collectible', 'upgrade', 'flask']
    }
  ]
};

// Helper functions for IGN data structure
export const ignDataUtils = {
  // Get walkthrough section by ID
  getSection: (id) => {
    return ignWalkthroughStructure.walkthroughSections.find(section => section.id === id);
  },

  // Get all sections in order
  getSectionsInOrder: () => {
    return ignWalkthroughStructure.walkthroughSections.sort((a, b) => a.order - b.order);
  },

  // Get character quest by ID
  getCharacterQuest: (id) => {
    return ignWalkthroughStructure.characterQuests.find(quest => quest.id === id);
  },

  // Get boss guide by ID
  getBossGuide: (id) => {
    return ignWalkthroughStructure.bossGuides.find(boss => boss.id === id);
  },

  // Get collectible by ID
  getCollectible: (id) => {
    return ignWalkthroughStructure.collectibles.find(collectible => collectible.id === id);
  },

  // Search across all data
  searchIGNData: (query) => {
    const results = [];
    const searchTerm = query.toLowerCase();

    // Search walkthrough sections
    ignWalkthroughStructure.walkthroughSections.forEach(section => {
      if (section.title.toLowerCase().includes(searchTerm) ||
          section.description.toLowerCase().includes(searchTerm) ||
          section.tags.some(tag => tag.toLowerCase().includes(searchTerm))) {
        results.push({ type: 'section', data: section });
      }
    });

    // Search character quests
    ignWalkthroughStructure.characterQuests.forEach(quest => {
      if (quest.title.toLowerCase().includes(searchTerm) ||
          quest.description.toLowerCase().includes(searchTerm) ||
          quest.npc.toLowerCase().includes(searchTerm)) {
        results.push({ type: 'quest', data: quest });
      }
    });

    // Search boss guides
    ignWalkthroughStructure.bossGuides.forEach(boss => {
      if (boss.title.toLowerCase().includes(searchTerm) ||
          boss.location.toLowerCase().includes(searchTerm) ||
          boss.region.toLowerCase().includes(searchTerm)) {
        results.push({ type: 'boss', data: boss });
      }
    });

    return results;
  }
}; 