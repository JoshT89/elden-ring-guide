// Comprehensive boss data based on IGN walkthrough
export const bossData = [
  // EARLY GAME BOSSES
  {
    id: 'soldier-of-godrick',
    name: 'Soldier of Godrick',
    title: 'Tutorial Boss',
    difficulty: 'Beginner',
    image: 'https://assets-prd.ignimgs.com/2022/02/25/soldierofgodrickboss-1645829639632.jpg',
    location: 'Stranded Graveyard',
    level: '1-5',
    type: 'Tutorial Boss',
    expansion: 'Base Game',
    health: 'Low',
    runes: '1000',
    weaknesses: ['All Damage Types'],
    resistances: [],
    phases: [
      {
        phase: 1,
        healthThreshold: 100,
        attacks: [
          'Basic sword strikes',
          'Shield bashes',
          'Simple combos'
        ],
        strategies: [
          'Learn basic combat mechanics',
          'Practice dodging and blocking',
          'Use light attacks to conserve stamina',
          'Don\'t get greedy with attacks'
        ],
        tips: [
          'This boss is designed to teach you the basics',
          'Take your time to learn the controls',
          'Don\'t worry about dying - this is a safe learning environment',
          'Focus on timing your dodges and attacks'
        ]
      }
    ],
    rewards: [
      {
        type: 'item',
        name: 'Flask of Crimson Tears',
        description: 'Primary healing item for the rest of the game'
      },
      {
        type: 'item',
        name: 'Flask of Cerulean Tears',
        description: 'Restores FP for spells and weapon skills'
      },
      {
        type: 'item',
        name: 'Golden Seed',
        description: 'Can be used to increase flask charges'
      }
    ],
    summonOptions: ['None'],
    cheeseStrategies: [
      'This boss is designed to be beaten by beginners',
      'No cheese strategies needed - focus on learning'
    ],
    requiredLevel: 1,
    tags: ['tutorial', 'beginner', 'stranded-graveyard']
  },

  {
    id: 'margit-the-fell-omen',
    name: 'Margit, the Fell Omen',
    title: 'First Legacy Boss',
    difficulty: 'Intermediate',
    image: 'https://assets-prd.ignimgs.com/2022/02/25/margitboss-1645829639632.jpg',
    location: 'Stormveil Castle',
    level: '20-25',
    type: 'Legacy Boss',
    expansion: 'Base Game',
    health: 'High',
    runes: '12000',
    weaknesses: ['Fire', 'Lightning', 'Bleed'],
    resistances: ['Holy'],
    phases: [
      {
        phase: 1,
        healthThreshold: 100,
        attacks: ['Hammer strikes', 'Golden magic attacks', 'Jumping attacks', 'Combo sequences'],
        strategies: ['Stay at medium distance', 'Dodge through attacks', 'Use fire damage', 'Summon spirits'],
        tips: ['Margit is weak to fire damage', 'His attacks have long wind-ups', 'Use the shackle item to stun him']
      }
    ],
    rewards: [
      { type: 'item', name: 'Talisman Pouch', description: 'Allows you to equip an additional talisman' },
      { type: 'item', name: 'Margit\'s Shackle', description: 'Can be used to stun Margit temporarily' }
    ],
    summonOptions: ['Spirit Ashes', 'Rogier (NPC Summon)'],
    cheeseStrategies: ['Use Margit\'s Shackle to stun him', 'Summon multiple spirits'],
    requiredLevel: 20,
    tags: ['boss', 'stormveil-castle', 'limgrave', 'spectral', 'fell omen']
  },

  {
    id: 'godrick-the-grafted',
    name: 'Godrick the Grafted',
    title: 'Lord of Limgrave',
    difficulty: 'Intermediate',
    image: 'https://assets-prd.ignimgs.com/2022/02/25/godrickboss-1645829639632.jpg',
    location: 'Stormveil Castle',
    level: '30-35',
    type: 'Demigod',
    expansion: 'Base Game',
    health: 'Very High',
    runes: '20000',
    weaknesses: ['Slash Damage', 'Fire', 'Bleed'],
    resistances: ['Holy'],
    phases: [
      {
        phase: 1,
        healthThreshold: 60,
        attacks: [
          'Sword and axe strikes',
          'Ground slams',
          'Wind attacks',
          'Complex combo sequences'
        ],
        strategies: [
          'Study his attack patterns',
          'Focus on dodging and counter-attacking',
          'Use the arena space to your advantage',
          'Don\'t get greedy with attacks',
          'Use fire damage when possible'
        ],
        tips: [
          'One or two hits at a time is safe',
          'Don\'t panic roll - time your dodges',
          'Use your shield to block if needed',
          'Stay mobile and use the arena space',
          'Learn which attacks leave him open'
        ]
      },
      {
        phase: 2,
        healthThreshold: 0,
        attacks: [
          'Dragon head fire breath',
          'Grafted arm attacks',
          'Enhanced wind attacks',
          'More aggressive combos'
        ],
        strategies: [
          'Stay away from the dragon head',
          'Attack during his recovery periods',
          'Use ranged attacks if available',
          'Don\'t panic - maintain your strategy',
          'Focus on the grafted arm for damage'
        ],
        tips: [
          'The dragon head deals massive fire damage',
          'Watch for his rolling attacks',
          'Stay away from fire pools',
          'Attack during his recovery periods',
          'Don\'t get discouraged - phase 2 is harder'
        ]
      }
    ],
    rewards: [
      {
        type: 'item',
        name: 'Godrick\'s Great Rune',
        description: 'Great Rune that can be activated for powerful buffs'
      },
      {
        type: 'item',
        name: 'Remembrance of the Grafted',
        description: 'Can be exchanged for Godrick\'s weapons'
      }
    ],
    summonOptions: ['Spirit Ashes', 'Nepheli Loux (NPC Summon)'],
    cheeseStrategies: [
      'Summon multiple spirits for distraction',
      'Use ranged attacks from safe distance',
      'Focus on the grafted arm in phase 2'
    ],
    requiredLevel: 30,
    tags: ['boss', 'demigod', 'limgrave', 'stormveil', 'grafted', 'dragon arm']
  },

  {
    id: 'rennala',
    name: 'Rennala, Queen of the Full Moon',
    title: 'Queen of the Academy',
    difficulty: 'Intermediate',
    location: 'Raya Lucaria Academy',
    level: '40-50',
    type: 'Demigod',
    expansion: 'Base Game',
    health: 'Medium',
    runes: '40000',
    weaknesses: ['Physical Damage', 'Bleed', 'Strike Damage'],
    resistances: ['Magic'],
    phases: [
      {
        phase: 1,
        healthThreshold: 50,
        attacks: [
          'Student protection',
          'Magical barriers',
          'Indirect attacks through students'
        ],
        strategies: [
          'Focus on defeating her students',
          'Look for the glowing student to attack',
          'Ignore Rennala during this phase',
          'Use heavy attacks to break barriers',
          'Stay mobile to avoid student attacks'
        ],
        tips: [
          'Phase one focuses on defeating her students',
          'Look for the glowing student to attack',
          'Ignore Rennala during this phase',
          'Use heavy attacks to break barriers',
          'Don\'t waste resources on Rennala herself'
        ]
      },
      {
        phase: 2,
        healthThreshold: 0,
        attacks: [
          'Magical projectiles',
          'Summoning spells',
          'Moon magic attacks',
          'Spirit summoning'
        ],
        strategies: [
          'Focus on direct combat',
          'Watch for her magical projectiles',
          'Use the arena space to your advantage',
          'Attack when she\'s vulnerable',
          'Don\'t get greedy with attacks'
        ],
        tips: [
          'Phase two is more direct combat',
          'Watch for her magical attacks',
          'Use the arena space to your advantage',
          'Don\'t panic during phase transitions',
          'Use the same patient approach as other bosses'
        ]
      }
    ],
    rewards: [
      {
        type: 'item',
        name: 'Rennala\'s Great Rune',
        description: 'Great Rune that allows character respec'
      },
      {
        type: 'item',
        name: 'Remembrance of the Full Moon Queen',
        description: 'Can be exchanged for Rennala\'s spells'
      }
    ],
    summonOptions: ['Spirit Ashes'],
    cheeseStrategies: [
      'Use heavy weapons to break barriers quickly',
      'Focus on the glowing student in phase 1',
      'Use ranged attacks in phase 2'
    ],
    requiredLevel: 40,
    tags: ['boss', 'demigod', 'liurnia', 'raya lucaria', 'sorcery', 'full moon']
  },

  {
    id: 'radahn',
    name: 'Starscourge Radahn',
    title: 'The Starscourge General',
    difficulty: 'Advanced',
    location: 'Redmane Castle',
    level: '60-70',
    type: 'Demigod',
    expansion: 'Base Game',
    health: 'Extremely High',
    runes: '70000',
    weaknesses: ['Rot', 'Bleed', 'Scarlet Rot'],
    resistances: ['Fire', 'Lightning'],
    phases: [
      {
        phase: 1,
        healthThreshold: 50,
        attacks: [
          'Arrow barrages',
          'Gravity magic',
          'Melee combos',
          'Horse-mounted combat'
        ],
        strategies: [
          'Stay on Torrent for most of the fight',
          'Summon allies as soon as possible',
          'Watch for gravity magic and arrows',
          'Attack after Radahn\'s combos',
          'Keep moving to avoid projectiles'
        ],
        tips: [
          'Summon all available NPCs for help',
          'Use Torrent to dodge Radahn\'s arrows',
          'Bring ranged weapons or spells',
          'Watch for meteor phase transition',
          'Don\'t be afraid to retreat and heal'
        ]
      },
      {
        phase: 2,
        healthThreshold: 0,
        attacks: [
          'Meteor crash',
          'Enhanced gravity magic',
          'More aggressive melee attacks',
          'Cosmic magic attacks'
        ],
        strategies: [
          'Watch for the meteor crash',
          'Use Torrent for mobility',
          'Continue summoning allies',
          'Attack during vulnerable periods',
          'Stay mobile to avoid cosmic attacks'
        ],
        tips: [
          'Watch for meteor phase transition',
          'Use Torrent for mobility',
          'Continue summoning allies',
          'Attack during vulnerable periods',
          'Don\'t get discouraged - this is a legendary fight'
        ]
      }
    ],
    rewards: [
      {
        type: 'item',
        name: 'Radahn\'s Great Rune',
        description: 'Great Rune that boosts HP, FP, and Stamina'
      },
      {
        type: 'item',
        name: 'Remembrance of the Starscourge',
        description: 'Can be exchanged for Radahn\'s weapons or spells'
      }
    ],
    summonOptions: ['Multiple NPC Summons', 'Spirit Ashes'],
    cheeseStrategies: [
      'Summon all available NPCs for help',
      'Use Torrent to dodge arrows',
      'Use ranged attacks from safe distance',
      'Apply Scarlet Rot for consistent damage'
    ],
    requiredLevel: 60,
    tags: ['boss', 'demigod', 'caelid', 'festival', 'starscourge', 'gravity magic']
  },

  {
    id: 'morgott',
    name: 'Morgott, the Omen King',
    title: 'King of Leyndell',
    difficulty: 'Advanced',
    location: 'Leyndell, Royal Capital',
    level: '80-90',
    type: 'Demigod',
    expansion: 'Base Game',
    health: 'Very High',
    runes: '120000',
    weaknesses: ['Slash Damage', 'Bleed', 'Physical Damage'],
    resistances: ['Holy'],
    phases: [
      {
        phase: 1,
        healthThreshold: 60,
        attacks: [
          'Hammer and sword strikes',
          'Holy magic attacks',
          'Complex combo sequences',
          'Defensive maneuvers'
        ],
        strategies: [
          'Study his attack patterns',
          'Watch for his holy magic attacks',
          'Stay mobile to avoid his combos',
          'Use the arena\'s pillars for cover',
          'Don\'t get greedy with attacks'
        ],
        tips: [
          'Bring holy resistance if possible',
          'Watch for his sword rain attack',
          'Punish after his combos',
          'Use the arena\'s pillars for cover',
          'Don\'t get greedy—patience is key'
        ]
      },
      {
        phase: 2,
        healthThreshold: 0,
        attacks: [
          'Sword rain',
          'Spear summons',
          'Enhanced holy magic',
          'More aggressive combos'
        ],
        strategies: [
          'Use cover from pillars',
          'Dodge his combos and punish',
          'Watch for sword rain attack',
          'Stay mobile to avoid spears',
          'Maintain patience and timing'
        ],
        tips: [
          'Use cover in the boss arena',
          'Watch for his sword rain attack',
          'Punish after his combos',
          'Use the arena\'s pillars for cover',
          'Don\'t get greedy—patience is key'
        ]
      }
    ],
    rewards: [
      {
        type: 'item',
        name: 'Morgott\'s Great Rune',
        description: 'Great Rune that can be activated for powerful buffs'
      },
      {
        type: 'item',
        name: 'Remembrance of the Omen King',
        description: 'Can be exchanged for Morgott\'s weapons'
      }
    ],
    summonOptions: ['Spirit Ashes', 'Mimic Tear'],
    cheeseStrategies: [
      'Use the Blasphemous Claw to parry his attacks',
      'Summon spirits for distraction',
      'Use ranged attacks from behind pillars'
    ],
    requiredLevel: 80,
    tags: ['boss', 'demigod', 'leyndell', 'omen king', 'holy magic']
  },

  {
    id: 'fire-giant',
    name: 'Fire Giant',
    title: 'Guardian of the Forge',
    difficulty: 'Advanced',
    location: 'Mountaintops of the Giants',
    level: '90-100',
    type: 'Legendary Boss',
    expansion: 'Base Game',
    health: 'Extremely High',
    runes: '180000',
    weaknesses: ['Physical Damage', 'Strike Damage'],
    resistances: ['Fire', 'Holy'],
    phases: [
      {
        phase: 1,
        healthThreshold: 50,
        attacks: [
          'Giant stomps',
          'Fire attacks',
          'Rolling attacks',
          'Ground slams'
        ],
        strategies: [
          'Stay mobile to avoid fire attacks',
          'Attack his weak points',
          'Use the arena space effectively',
          'Watch for his rolling attacks',
          'Don\'t get greedy with attacks'
        ],
        tips: [
          'Stay mobile to avoid fire attacks',
          'Attack his weak points',
          'Use the arena space effectively',
          'Watch for his rolling attacks',
          'Don\'t get greedy with attacks'
        ]
      },
      {
        phase: 2,
        healthThreshold: 0,
        attacks: [
          'Enhanced fire attacks',
          'Fire breath',
          'More aggressive rolling',
          'Larger attack radius'
        ],
        strategies: [
          'Watch for his rolling attacks',
          'Stay away from fire pools',
          'Attack during his recovery periods',
          'Use ranged attacks if available',
          'Don\'t panic—maintain your strategy'
        ],
        tips: [
          'Watch for his rolling attacks',
          'Stay away from fire pools',
          'Attack during his recovery periods',
          'Use ranged attacks if available',
          'Don\'t panic—maintain your strategy'
        ]
      }
    ],
    rewards: [
      {
        type: 'item',
        name: 'Remembrance of the Fire Giant',
        description: 'Can be exchanged for powerful items'
      },
      {
        type: 'item',
        name: 'Burn, O Flame!',
        description: 'Powerful fire incantation'
      }
    ],
    summonOptions: ['Spirit Ashes', 'Alexander (NPC Summon)'],
    cheeseStrategies: [
      'Use Torrent for mobility',
      'Focus on his weak points',
      'Use ranged attacks from safe distance'
    ],
    requiredLevel: 90,
    tags: ['boss', 'legendary', 'mountaintops', 'fire giant', 'forge']
  },

  {
    id: 'maliketh',
    name: 'Maliketh, the Black Blade',
    title: 'The Black Blade',
    difficulty: 'Expert',
    location: 'Crumbling Farum Azula',
    level: '100-110',
    type: 'Legendary Boss',
    expansion: 'Base Game',
    health: 'High',
    runes: '220000',
    weaknesses: ['Physical Damage', 'Bleed'],
    resistances: ['Holy', 'Death'],
    phases: [
      {
        phase: 1,
        healthThreshold: 50,
        attacks: [
          'Death magic',
          'Black flame attacks',
          'Fast combos',
          'Defensive maneuvers'
        ],
        strategies: [
          'Learn his patterns thoroughly',
          'Use the Blasphemous Claw to parry',
          'Stay mobile and dodge precisely',
          'Don\'t get greedy with attacks',
          'Watch for his death magic'
        ],
        tips: [
          'Learn his patterns thoroughly',
          'Use the Blasphemous Claw to parry',
          'Stay mobile and dodge precisely',
          'Don\'t get greedy with attacks',
          'Watch for his death magic'
        ]
      },
      {
        phase: 2,
        healthThreshold: 0,
        attacks: [
          'Enhanced death magic',
          'Black blade attacks',
          'Destined Death',
          'More aggressive combos'
        ],
        strategies: [
          'Use the Blasphemous Claw effectively',
          'Stay mobile and dodge precisely',
          'Attack during vulnerable periods',
          'Don\'t panic during phase transitions',
          'Maintain perfect timing'
        ],
        tips: [
          'Use the Blasphemous Claw effectively',
          'Stay mobile and dodge precisely',
          'Attack during vulnerable periods',
          'Don\'t panic during phase transitions',
          'Maintain perfect timing'
        ]
      }
    ],
    rewards: [
      {
        type: 'item',
        name: 'Remembrance of the Black Blade',
        description: 'Can be exchanged for Maliketh\'s weapons'
      },
      {
        type: 'item',
        name: 'Maliketh\'s Black Blade',
        description: 'Powerful greatsword with death magic'
      }
    ],
    summonOptions: ['Spirit Ashes', 'Bernahl (NPC Summon)'],
    cheeseStrategies: [
      'Use the Blasphemous Claw to parry his attacks',
      'Summon spirits for distraction',
      'Use ranged attacks from safe distance'
    ],
    requiredLevel: 100,
    tags: ['boss', 'legendary', 'farum-azula', 'black blade', 'death magic']
  },

  {
    id: 'radagon',
    name: 'Radagon of the Golden Order',
    title: 'The Golden Order',
    difficulty: 'Expert',
    location: 'Erdtree Sanctuary',
    level: '110-120',
    type: 'Final Boss',
    expansion: 'Base Game',
    health: 'High',
    runes: '500000',
    weaknesses: ['Physical Damage', 'Bleed'],
    resistances: ['Holy', 'Magic'],
    phases: [
      {
        phase: 1,
        healthThreshold: 100,
        attacks: [
          'Holy magic',
          'Physical combos',
          'Teleportation',
          'Golden order attacks'
        ],
        strategies: [
          'Learn his attack patterns thoroughly',
          'Stay mobile and dodge precisely',
          'Use holy resistance if possible',
          'Don\'t waste healing items',
          'This is the ultimate skill test'
        ],
        tips: [
          'Learn his attack patterns thoroughly',
          'Stay mobile and dodge precisely',
          'Use holy resistance if possible',
          'Don\'t waste healing items',
          'This is the ultimate skill test'
        ]
      }
    ],
    rewards: [
      {
        type: 'item',
        name: 'Elden Remembrance',
        description: 'Can be exchanged for Radagon\'s weapons'
      }
    ],
    summonOptions: ['Spirit Ashes'],
    cheeseStrategies: [
      'Use holy resistance gear',
      'Learn patterns thoroughly',
      'Stay mobile and dodge precisely'
    ],
    requiredLevel: 110,
    tags: ['boss', 'final', 'erdtree', 'golden order', 'holy magic']
  },

  {
    id: 'elden-beast',
    name: 'Elden Beast',
    title: 'The Elden Beast',
    difficulty: 'Expert',
    location: 'Erdtree Sanctuary',
    level: '110-120',
    type: 'Final Boss',
    expansion: 'Base Game',
    health: 'Very High',
    runes: '500000',
    weaknesses: ['Physical Damage'],
    resistances: ['Holy', 'Magic', 'Fire'],
    phases: [
      {
        phase: 1,
        healthThreshold: 100,
        attacks: [
          'Cosmic magic',
          'Holy attacks',
          'Flying attacks',
          'Teleportation'
        ],
        strategies: [
          'Use Torrent for mobility',
          'Watch for cosmic attacks',
          'Attack during vulnerable periods',
          'Don\'t get discouraged',
          'This is the final challenge'
        ],
        tips: [
          'Use Torrent for mobility',
          'Watch for cosmic attacks',
          'Attack during vulnerable periods',
          'Don\'t get discouraged',
          'This is the final challenge'
        ]
      }
    ],
    rewards: [
      {
        type: 'item',
        name: 'Elden Remembrance',
        description: 'Can be exchanged for Elden Beast weapons'
      }
    ],
    summonOptions: ['Spirit Ashes'],
    cheeseStrategies: [
      'Use Torrent for mobility',
      'Stay mobile and dodge precisely',
      'Attack during vulnerable periods'
    ],
    requiredLevel: 110,
    tags: ['boss', 'final', 'eldtree', 'cosmic', 'holy magic']
  },

  // SHADOW OF THE ERDTREE BOSSES
  {
    id: 'messmer-the-impaler',
    name: 'Messmer the Impaler',
    title: 'The Impaler',
    difficulty: 'Expert',
    location: 'Shadow Keep',
    level: '100-120',
    type: 'Shadow Boss',
    expansion: 'Shadow of the Erdtree',
    health: 'Extremely High',
    runes: '200000',
    weaknesses: ['Holy Damage', 'Frostbite', 'Physical Damage'],
    resistances: ['Fire', 'Magic'],
    phases: [
      {
        phase: 1,
        healthThreshold: 60,
        attacks: [
          'Fire attacks',
          'Impaling strikes',
          'Complex combos',
          'Serpentine movements'
        ],
        strategies: [
          'Study his attack patterns thoroughly',
          'Stay mobile and dodge precisely',
          'Use fire resistance if possible',
          'Don\'t get greedy with attacks',
          'This is the ultimate DLC challenge'
        ],
        tips: [
          'Study his attack patterns thoroughly',
          'Stay mobile and dodge precisely',
          'Use fire resistance if possible',
          'Don\'t get greedy with attacks',
          'This is the ultimate DLC challenge'
        ]
      },
      {
        phase: 2,
        healthThreshold: 0,
        attacks: [
          'Enhanced fire attacks',
          'More aggressive impaling',
          'Serpent transformation',
          'Cosmic fire magic'
        ],
        strategies: [
          'Use weapons upgraded with Scadu Altus',
          'Learn to recognize his attack wind-ups',
          'Use the arena\'s space to your advantage',
          'Don\'t panic during phase transitions',
          'Victory requires mastery of all skills'
        ],
        tips: [
          'Use weapons upgraded with Scadu Altus',
          'Learn to recognize his attack wind-ups',
          'Use the arena\'s space to your advantage',
          'Don\'t panic during phase transitions',
          'Victory requires mastery of all skills'
        ]
      }
    ],
    rewards: [
      {
        type: 'item',
        name: 'Messmer\'s Kindling',
        description: 'Key item for DLC progression'
      },
      {
        type: 'item',
        name: 'Remembrance of the Impaler',
        description: 'Can be exchanged for Messmer\'s weapons'
      }
    ],
    summonOptions: ['Spirit Ashes'],
    cheeseStrategies: [
      'Use upgraded DLC weapons',
      'Learn patterns thoroughly',
      'Stay mobile and dodge precisely'
    ],
    requiredLevel: 100,
    tags: ['boss', 'shadow-erdtree', 'dlc', 'flame', 'serpent', 'impaler']
  },

  {
    id: 'divine-beast-shadow-of-the-erdtree',
    name: 'Divine Beast Shadow of the Erdtree',
    title: 'Divine Beast',
    difficulty: 'Advanced',
    location: 'Gravesite Plain',
    level: '90-100',
    type: 'Shadow Boss',
    expansion: 'Shadow of the Erdtree',
    health: 'High',
    runes: '150000',
    weaknesses: ['Physical Damage', 'Bleed', 'Frostbite'],
    resistances: ['Magic', 'Fire'],
    phases: [
      {
        phase: 1,
        healthThreshold: 100,
        attacks: [
          'Divine beast attacks',
          'Shadow magic',
          'Defensive maneuvers',
          'Complex patterns'
        ],
        strategies: [
          'Learn the divine beast patterns',
          'Use the environment effectively',
          'Watch for shadow magic',
          'Stay mobile and patient',
          'Use physical damage when possible'
        ],
        tips: [
          'The divine beast has unique attack patterns',
          'Watch for shadow magic attacks',
          'Use the space to your advantage',
          'Don\'t get cornered',
          'Physical damage is most effective'
        ]
      }
    ],
    rewards: [
      {
        type: 'item',
        name: 'Divine Beast Remembrance',
        description: 'Can be exchanged for divine beast weapons'
      },
      {
        type: 'item',
        name: 'Shadow Realm Weapon',
        description: 'Powerful weapon from the Shadow Realm'
      }
    ],
    summonOptions: ['Spirit Ashes'],
    cheeseStrategies: [
      'Use the environment to your advantage',
      'Stay mobile and avoid corners',
      'Use ranged attacks when possible'
    ],
    requiredLevel: 90,
    tags: ['boss', 'shadow-erdtree', 'dlc', 'divine-beast', 'shadow-magic']
  },

  {
    id: 'bayle-the-dread',
    name: 'Bayle the Dread',
    title: 'The Dread',
    difficulty: 'Advanced',
    location: 'Jagged Peak',
    level: '95-105',
    type: 'Shadow Boss',
    expansion: 'Shadow of the Erdtree',
    health: 'Very High',
    runes: '180000',
    weaknesses: ['Holy Damage', 'Lightning', 'Bleed'],
    resistances: ['Shadow Magic', 'Physical'],
    phases: [
      {
        phase: 1,
        healthThreshold: 60,
        attacks: [
          'Dread attacks',
          'Shadow magic',
          'Complex patterns',
          'Defensive strategies'
        ],
        strategies: [
          'Use the jagged peak environment',
          'Watch for shadow magic',
          'Stay mobile on the peak',
          'Use holy damage when possible',
          'Don\'t get trapped in corners'
        ],
        tips: [
          'The jagged peak environment is key to the fight',
          'Use holy damage for best results',
          'Stay mobile and use the space',
          'Watch for shadow magic attacks',
          'Don\'t get cornered on the peak'
        ]
      },
      {
        phase: 2,
        healthThreshold: 0,
        attacks: [
          'Enhanced shadow magic',
          'More aggressive dread attacks',
          'Defensive maneuvers',
          'Complex patterns'
        ],
        strategies: [
          'Maintain mobility in phase 2',
          'Use holy damage consistently',
          'Watch for enhanced shadow magic',
          'Stay patient and focused',
          'Use the peak environment effectively'
        ],
        tips: [
          'Phase 2 is more aggressive',
          'Maintain your strategy from phase 1',
          'Use holy damage consistently',
          'Stay mobile and patient',
          'Don\'t panic during phase transitions'
        ]
      }
    ],
    rewards: [
      {
        type: 'item',
        name: 'Bayle\'s Remembrance',
        description: 'Can be exchanged for Bayle\'s weapons'
      },
      {
        type: 'item',
        name: 'Shadow Lord\'s Weapon',
        description: 'Powerful weapon from the Shadow Lord'
      }
    ],
    summonOptions: ['Spirit Ashes'],
    cheeseStrategies: [
      'Use the peak environment effectively',
      'Stay mobile and avoid corners',
      'Use holy damage consistently'
    ],
    requiredLevel: 95,
    tags: ['boss', 'shadow-erdtree', 'dlc', 'bayle', 'dread', 'jagged-peak']
  },

  {
    id: 'commander-gaius',
    name: 'Commander Gaius',
    title: 'Shadow Commander',
    difficulty: 'Expert',
    location: 'Scadu Altus Plateau',
    level: '100-110',
    type: 'Shadow Boss',
    expansion: 'Shadow of the Erdtree',
    health: 'Extremely High',
    runes: '200000',
    weaknesses: ['Physical Damage', 'Bleed', 'Frostbite'],
    resistances: ['Shadow Magic', 'Fire'],
    phases: [
      {
        phase: 1,
        healthThreshold: 70,
        attacks: [
          'Commander tactics',
          'Shadow magic',
          'Complex patterns',
          'Defensive strategies'
        ],
        strategies: [
          'Learn commander tactics',
          'Use the plateau environment',
          'Stay mobile and patient',
          'Use physical damage when possible',
          'Watch for shadow magic'
        ],
        tips: [
          'Commander Gaius uses tactical combat',
          'Use the plateau space effectively',
          'Stay mobile and patient',
          'Physical damage is most effective',
          'Learn the commander patterns'
        ]
      },
      {
        phase: 2,
        healthThreshold: 0,
        attacks: [
          'Enhanced commander tactics',
          'More aggressive combat',
          'Complex patterns',
          'Defensive maneuvers'
        ],
        strategies: [
          'Maintain your strategy from phase 1',
          'Watch for enhanced tactics',
          'Stay mobile and patient',
          'Use physical damage consistently',
          'Don\'t panic during phase transitions'
        ],
        tips: [
          'Phase 2 enhances the commander tactics',
          'Maintain your strategy from phase 1',
          'Stay mobile and patient',
          'Use physical damage consistently',
          'Don\'t panic during phase transitions'
        ]
      }
    ],
    rewards: [
      {
        type: 'item',
        name: 'Commander\'s Remembrance',
        description: 'Can be exchanged for Commander Gaius weapons'
      },
      {
        type: 'item',
        name: 'Scadu Altus Weapon',
        description: 'Powerful weapon enhanced with Scadu Altus'
      }
    ],
    summonOptions: ['Spirit Ashes'],
    cheeseStrategies: [
      'Use the plateau environment effectively',
      'Stay mobile and avoid corners',
      'Use physical damage consistently'
    ],
    requiredLevel: 100,
    tags: ['boss', 'shadow-erdtree', 'dlc', 'commander-gaius', 'plateau', 'shadow-magic']
  },

  {
    id: 'promised-consort-radahn',
    name: 'Promised Consort Radahn',
    title: 'Promised Consort',
    difficulty: 'Expert',
    location: 'Shadow Keep',
    level: '105-115',
    type: 'Shadow Boss',
    expansion: 'Shadow of the Erdtree',
    health: 'Extremely High',
    runes: '250000',
    weaknesses: ['Holy Damage', 'Lightning', 'Bleed'],
    resistances: ['Shadow Magic', 'Physical'],
    phases: [
      {
        phase: 1,
        healthThreshold: 60,
        attacks: [
          'Consort magic',
          'Keep-based combat',
          'Complex patterns',
          'Defensive strategies'
        ],
        strategies: [
          'Learn the consort patterns',
          'Use holy damage when possible',
          'Stay mobile in the keep',
          'Watch for shadow magic',
          'Don\'t get trapped in the keep'
        ],
        tips: [
          'The consort has unique magic patterns',
          'Use holy damage for best results',
          'Stay mobile and use the space',
          'Watch for shadow magic attacks',
          'Don\'t get cornered in the keep'
        ]
      },
      {
        phase: 2,
        healthThreshold: 0,
        attacks: [
          'Enhanced consort magic',
          'More aggressive combat',
          'Complex patterns',
          'Defensive maneuvers'
        ],
        strategies: [
          'Maintain your strategy from phase 1',
          'Use holy damage consistently',
          'Watch for enhanced magic',
          'Stay patient and focused',
          'Use the keep environment effectively'
        ],
        tips: [
          'Phase 2 is more aggressive',
          'Maintain your strategy from phase 1',
          'Use holy damage consistently',
          'Stay mobile and patient',
          'Don\'t panic during phase transitions'
        ]
      }
    ],
    rewards: [
      {
        type: 'item',
        name: 'Consort\'s Remembrance',
        description: 'Can be exchanged for Consort Radahn weapons'
      },
      {
        type: 'item',
        name: 'Shadow Keep Weapon',
        description: 'Powerful weapon from the Shadow Keep'
      }
    ],
    summonOptions: ['Spirit Ashes'],
    cheeseStrategies: [
      'Use the keep environment effectively',
      'Stay mobile and avoid corners',
      'Use holy damage consistently'
    ],
    requiredLevel: 105,
    tags: ['boss', 'shadow-erdtree', 'dlc', 'promised-consort', 'radahn', 'shadow-magic']
  },

  {
    id: 'ancient-dragon-senessax',
    name: 'Ancient Dragon Senessax',
    title: 'Ancient Dragon',
    difficulty: 'Expert',
    location: 'Shadow Realm',
    level: '110-120',
    type: 'Shadow Boss',
    expansion: 'Shadow of the Erdtree',
    health: 'Extremely High',
    runes: '300000',
    weaknesses: ['Holy Damage', 'Lightning', 'Physical Damage'],
    resistances: ['Shadow Magic', 'Fire'],
    phases: [
      {
        phase: 1,
        healthThreshold: 50,
        attacks: [
          'Ancient dragon attacks',
          'Shadow magic',
          'Complex patterns',
          'Defensive strategies'
        ],
        strategies: [
          'Learn the ancient dragon patterns',
          'Use holy damage when possible',
          'Stay mobile in the realm',
          'Watch for shadow magic',
          'Don\'t get trapped in the realm'
        ],
        tips: [
          'The ancient dragon has unique mechanics',
          'Use holy damage for best results',
          'Stay mobile and use the space',
          'Watch for shadow magic',
          'Don\'t get cornered in the realm'
        ]
      },
      {
        phase: 2,
        healthThreshold: 0,
        attacks: [
          'Enhanced ancient dragon attacks',
          'More aggressive combat',
          'Complex patterns',
          'Defensive maneuvers'
        ],
        strategies: [
          'Maintain your strategy from phase 1',
          'Use holy damage consistently',
          'Watch for enhanced attacks',
          'Stay patient and focused',
          'Use the realm environment effectively'
        ],
        tips: [
          'Phase 2 is the ultimate challenge',
          'Maintain your strategy from phase 1',
          'Use holy damage consistently',
          'Stay mobile and patient',
          'This is the final DLC challenge'
        ]
      }
    ],
    rewards: [
      {
        type: 'item',
        name: 'Ancient Dragon Remembrance',
        description: 'Can be exchanged for Ancient Dragon weapons'
      },
      {
        type: 'item',
        name: 'Ultimate Shadow Weapon',
        description: 'The most powerful weapon from the Shadow Realm'
      }
    ],
    summonOptions: ['Spirit Ashes'],
    cheeseStrategies: [
      'Use the realm environment effectively',
      'Stay mobile and avoid corners',
      'Use holy damage consistently'
    ],
    requiredLevel: 110,
    tags: ['boss', 'shadow-erdtree', 'dlc', 'ancient-dragon', 'shadow-magic']
  }
];

export const getBossById = (id) => {
  return bossData.find(boss => boss.id === id);
};

export const getBossesByDifficulty = (difficulty) => {
  return bossData.filter(boss => boss.difficulty === difficulty).sort((a, b) => a.requiredLevel - b.requiredLevel);
};

export const getBossesByExpansion = (expansion) => {
  return bossData.filter(boss => boss.expansion === expansion).sort((a, b) => a.requiredLevel - b.requiredLevel);
};

export const getBossesByType = (type) => {
  return bossData.filter(boss => boss.type === type).sort((a, b) => a.requiredLevel - b.requiredLevel);
}; 