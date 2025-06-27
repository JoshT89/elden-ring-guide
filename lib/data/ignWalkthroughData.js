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
        },
        {
          step: 2,
          location: 'Roundtable Hold',
          requirement: 'Accept Fia\'s embrace multiple times',
          dialogue: 'Fia explains her role as a Deathbed Companion',
          reward: 'Understanding of death mechanics'
        },
        {
          step: 3,
          location: 'Roundtable Hold',
          requirement: 'Interact with D, Hunter of the Dead',
          dialogue: 'D opposes Fia\'s practices',
          reward: 'Conflict in storyline'
        },
        {
          step: 4,
          location: 'Deeproot Depths',
          requirement: 'Find Fia near the Prince of Death',
          dialogue: 'Fia reveals her connection to death',
          reward: 'Access to Prince of Death'
        },
        {
          step: 5,
          location: 'Deeproot Depths',
          requirement: 'Help Fia with the Prince of Death ritual',
          dialogue: 'Fia completes her work with the Prince of Death',
          reward: 'Mending Rune of the Death-Prince'
        }
      ],
      endings: ['Age of the Duskborn'],
      relatedQuests: ['D, Hunter of the Dead'],
      tags: ['major-questline', 'ending', 'fia', 'death']
    },
    {
      id: 'dung-eater-questline',
      title: 'Dung Eater\'s Character Questline',
      npc: 'Dung Eater',
      description: 'Questline related to curses and the Age of Despair ending',
      steps: [
        {
          step: 1,
          location: 'Roundtable Hold',
          requirement: 'Meet Dung Eater in his prison',
          dialogue: 'Dung Eater speaks of curses and defilement',
          reward: 'Understanding of Dung Eater\'s nature'
        },
        {
          step: 2,
          location: 'Various locations',
          requirement: 'Collect Seedbed Curses',
          dialogue: 'Dung Eater asks for Seedbed Curses',
          reward: 'Progress in questline'
        },
        {
          step: 3,
          location: 'Roundtable Hold',
          requirement: 'Free Dung Eater with Sewer Gaol Key',
          dialogue: 'Dung Eater is released from prison',
          reward: 'Dung Eater\'s freedom'
        },
        {
          step: 4,
          location: 'Leyndell Sewers',
          requirement: 'Find Dung Eater in the sewers',
          dialogue: 'Dung Eater continues his work',
          reward: 'Access to Dung Eater\'s services'
        },
        {
          step: 5,
          location: 'Various locations',
          requirement: 'Complete Dung Eater\'s ritual',
          dialogue: 'Dung Eater spreads his curse',
          reward: 'Mending Rune of the Fell Curse'
        }
      ],
      endings: ['Age of Despair'],
      relatedQuests: ['D, Hunter of the Dead'],
      tags: ['major-questline', 'ending', 'dung-eater', 'curse']
    },
    {
      id: 'bernahl-questline',
      title: 'Knight Bernahl\'s Character Questline',
      npc: 'Knight Bernahl',
      description: 'Questline related to Volcano Manor and the Recusants',
      steps: [
        {
          step: 1,
          location: 'Warmaster\'s Shack, Limgrave',
          requirement: 'Meet Bernahl at his shack',
          dialogue: 'Bernahl offers merchant services and combat advice',
          reward: 'Access to Ashes of War and merchant services'
        },
        {
          step: 2,
          location: 'Warmaster\'s Shack, Limgrave',
          requirement: 'Progress through the game to receive Volcano Manor invitation',
          dialogue: 'Bernahl explains the Recusants and their mission',
          reward: 'Understanding of Recusants and access to Volcano Manor'
        },
        {
          step: 3,
          location: 'Volcano Manor, Mt. Gelmir',
          requirement: 'Find Bernahl at Volcano Manor',
          dialogue: 'Bernahl participates in assassination contracts',
          reward: 'Access to assassination contracts and Volcano Manor services'
        },
        {
          step: 4,
          location: 'Volcano Manor, Mt. Gelmir',
          requirement: 'Complete assassination contracts with Bernahl',
          dialogue: 'Bernahl provides guidance and support during contracts',
          reward: 'Contract completion and understanding of Recusant philosophy'
        },
        {
          step: 5,
          location: 'Crumbling Farum Azula',
          requirement: 'Find Bernahl in the final area',
          dialogue: 'Bernahl may become hostile depending on choices',
          reward: 'Bernahl\'s Armor Set, Devourer\'s Scepter, Blasphemous Claw'
        }
      ],
      endings: ['Volcano Manor Resolution'],
      relatedQuests: ['Lady Tanith', 'Rykard'],
      tags: ['volcano-manor', 'recusant', 'bernahl']
    },
    {
      id: 'tanith-questline',
      title: 'Lady Tanith\'s Character Questline',
      npc: 'Lady Tanith',
      description: 'Questline related to Volcano Manor leadership and Rykard',
      steps: [
        {
          step: 1,
          location: 'Volcano Manor, Mt. Gelmir',
          requirement: 'Meet Lady Tanith at Volcano Manor',
          dialogue: 'Lady Tanith explains the purpose of Recusants',
          reward: 'Access to Volcano Manor and understanding of Recusants'
        },
        {
          step: 2,
          location: 'Volcano Manor, Mt. Gelmir',
          requirement: 'Accept Lady Tanith\'s invitation to become a Recusant',
          dialogue: 'Lady Tanith initiates you into the Recusants',
          reward: 'Recusant Finger and first assassination contract'
        },
        {
          step: 3,
          location: 'Volcano Manor, Mt. Gelmir',
          requirement: 'Complete multiple assassination contracts',
          dialogue: 'Lady Tanith assigns and guides you through contracts',
          reward: 'Contract rewards and Lady Tanith\'s approval'
        },
        {
          step: 4,
          location: 'Volcano Manor, Mt. Gelmir',
          requirement: 'Learn about Rykard\'s true nature',
          dialogue: 'Lady Tanith reveals her loyalty to Rykard',
          reward: 'Understanding of Rykard and Lady Tanith\'s true nature'
        },
        {
          step: 5,
          location: 'Volcano Manor, Mt. Gelmir',
          requirement: 'Confront Rykard with Lady Tanith present',
          dialogue: 'Lady Tanith\'s reaction to Rykard\'s defeat',
          reward: 'Taker\'s Cameo, Tanith\'s Set, complete questline'
        }
      ],
      endings: ['Volcano Manor Resolution'],
      relatedQuests: ['Knight Bernahl', 'Rykard'],
      tags: ['volcano-manor', 'recusant', 'tanith', 'rykard']
    },
    {
      id: 'latenna-questline',
      title: 'Latenna the Albinauric\'s Character Questline',
      npc: 'Latenna the Albinauric',
      description: 'Questline related to Albinaurics and accessing the Haligtree',
      steps: [
        {
          step: 1,
          location: 'Lakeside Crystal Cave, Liurnia',
          requirement: 'Find Latenna imprisoned in the cave',
          dialogue: 'Latenna explains her connection to the Haligtree',
          reward: 'Understanding of Albinaurics and access to questline'
        },
        {
          step: 2,
          location: 'Lakeside Crystal Cave, Liurnia',
          requirement: 'Defeat wolves and rescue Latenna',
          dialogue: 'Latenna asks for help reaching the Haligtree',
          reward: 'Latenna\'s freedom and gratitude'
        },
        {
          step: 3,
          location: 'Village of the Albinaurics, Liurnia',
          requirement: 'Find the Haligtree Secret Medallion',
          dialogue: 'Latenna explains the importance of the medallion',
          reward: 'Haligtree Secret Medallion and access to Haligtree'
        },
        {
          step: 4,
          location: 'Lakeside Crystal Cave, Liurnia',
          requirement: 'Complete Latenna\'s quest',
          dialogue: 'Latenna becomes a Spirit Ash companion',
          reward: 'Latenna the Albinauric Spirit Ash'
        },
        {
          step: 5,
          location: 'Grand Lift of Rold',
          requirement: 'Use the medallion to access Haligtree',
          dialogue: 'Access to the secret Haligtree area',
          reward: 'Access to Haligtree and Malenia'
        }
      ],
      endings: ['Haligtree Access'],
      relatedQuests: ['Malenia', 'Albinauric Village'],
      tags: ['albinauric', 'haligtree', 'spirit-ash', 'latenna']
    },
    {
      id: 'needle-knight-leda-questline',
      title: 'Needle Knight Leda\'s Character Questline',
      npc: 'Needle Knight Leda',
      description: 'Main questline for Shadow of the Erdtree DLC progression',
      steps: [
        {
          step: 1,
          location: 'Gravesite Plain, Shadow Realm',
          requirement: 'Meet Leda after entering the Shadow Realm',
          dialogue: 'Leda introduces herself as your guide for the DLC',
          reward: 'DLC guidance and understanding of Shadow Realm mechanics'
        },
        {
          step: 2,
          location: 'Gravesite Plain',
          requirement: 'Learn Shadow Realm navigation with Leda',
          dialogue: 'Leda explains Scadu Altus upgrades and new mechanics',
          reward: 'Shadow Realm knowledge and navigation assistance'
        },
        {
          step: 3,
          location: 'Scadu Altus Plateau',
          requirement: 'Progress to advanced areas with Leda\'s help',
          dialogue: 'Leda guides you through challenging areas and prepares you for Messmer',
          reward: 'Advanced area access and preparation for final boss'
        },
        {
          step: 4,
          location: 'Shadow Keep',
          requirement: 'Navigate Shadow Keep with Leda\'s guidance',
          dialogue: 'Leda helps you understand the Shadow Keep and find valuable loot',
          reward: 'Shadow Keep navigation and loot locations'
        },
        {
          step: 5,
          location: 'Shadow Keep',
          requirement: 'Face Messmer with Leda\'s support',
          dialogue: 'Leda provides crucial information about Messmer\'s patterns and strategies',
          reward: 'Messmer strategies and DLC completion guidance'
        },
        {
          step: 6,
          location: 'Shadow Realm',
          requirement: 'Complete DLC with Leda\'s guidance',
          dialogue: 'Leda helps you understand the DLC\'s conclusion and story revelations',
          reward: 'DLC completion, story understanding, and Leda\'s Rune'
        }
      ],
      endings: ['DLC Completion'],
      relatedQuests: ['Messmer the Impaler', 'Shadow Realm'],
      tags: ['shadow-erdtree', 'dlc', 'leda', 'messmer']
    },
    {
      id: 'hornsent-questline',
      title: 'Hornsent\'s Character Questline',
      npc: 'Hornsent',
      description: 'Questline related to Shadow Realm history and Hornsent\'s tragic past',
      steps: [
        {
          step: 1,
          location: 'Shadow Realm',
          requirement: 'Meet Hornsent in the Shadow Realm',
          dialogue: 'Hornsent introduces himself as a native warrior with a tragic past',
          reward: 'Shadow Realm lore and access to Hornsent\'s questline'
        },
        {
          step: 2,
          location: 'Shadow Realm',
          requirement: 'Learn Shadow Realm history from Hornsent',
          dialogue: 'Hornsent reveals the realm\'s tragic past and connection to Messmer',
          reward: 'Historical knowledge and understanding of DLC context'
        },
        {
          step: 3,
          location: 'Shadow Realm',
          requirement: 'Help Hornsent with his personal quest',
          dialogue: 'Hornsent asks for help resolving his tragic past and people\'s suffering',
          reward: 'Hornsent\'s trust and additional lore insights'
        },
        {
          step: 4,
          location: 'Shadow Realm',
          requirement: 'Help Hornsent find resolution for his past',
          dialogue: 'Hornsent confronts his history and seeks closure for his people',
          reward: 'Hornsent\'s Armor Set, Hornsent\'s Weapons, and Shadow Realm knowledge'
        }
      ],
      endings: ['Hornsent\'s Resolution'],
      relatedQuests: ['Shadow Realm History', 'Messmer'],
      tags: ['shadow-erdtree', 'hornsent', 'shadow-realm', 'tragic-past']
    },
    {
      id: 'count-ymir-questline',
      title: 'Count Ymir\'s Character Questline',
      npc: 'Count Ymir',
      description: 'Questline related to ancient prophecies and Shadow Realm secrets',
      steps: [
        {
          step: 1,
          location: 'Shadow Realm',
          requirement: 'Meet Count Ymir in the Shadow Realm',
          dialogue: 'Ymir introduces himself as a prophetic figure with deep knowledge',
          reward: 'Prophetic knowledge and access to Ymir\'s questline'
        },
        {
          step: 2,
          location: 'Shadow Realm',
          requirement: 'Learn ancient prophecies from Count Ymir',
          dialogue: 'Ymir reveals prophecies about the Shadow Realm and Messmer\'s true nature',
          reward: 'Prophetic insights and understanding of Messmer'
        },
        {
          step: 3,
          location: 'Shadow Realm',
          requirement: 'Help Count Ymir with his research',
          dialogue: 'Ymir asks for help gathering ancient knowledge about the realm\'s creation',
          reward: 'Ancient knowledge and deeper lore understanding'
        },
        {
          step: 4,
          location: 'Shadow Realm',
          requirement: 'Uncover Shadow Realm secrets with Ymir',
          dialogue: 'Ymir reveals the realm\'s ultimate purpose and connection to the main game',
          reward: 'Ymir\'s Armor Set, Prophet\'s Staff, Ymir\'s Bell Bearing, and Shadow Realm secrets'
        }
      ],
      endings: ['Shadow Realm Secrets Revealed'],
      relatedQuests: ['Ancient Prophecies', 'Messmer'],
      tags: ['shadow-erdtree', 'count-ymir', 'prophecies', 'shadow-realm-secrets']
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