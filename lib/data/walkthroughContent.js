// Detailed walkthrough content based on IGN walkthrough
export const walkthroughContent = {
  // Tutorial & Cave of Knowledge
  tutorial: {
    id: 'tutorial',
    title: 'Tutorial & Cave of Knowledge',
    subtitle: 'Stranded Graveyard - Cave of Knowledge Tutorial',
    description: 'Your first steps in the Lands Between begin in the Stranded Graveyard, where you\'ll learn the basic mechanics of Elden Ring.',
    estimatedTime: '15-30 minutes',
    difficulty: 'Beginner',
    objectives: [
      'Learn basic controls and movement',
      'Understand combat mechanics',
      'Defeat Soldier of Godrick',
      'Learn about Sites of Grace',
      'Collect your first items'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Awakening in the Stranded Graveyard',
        description: 'You begin your journey in a dark cave. Take a moment to familiarize yourself with the basic controls: movement, camera, and interaction.',
        details: [
          'Use WASD or left stick to move',
          'Use mouse or right stick to control camera',
          'Press E or A to interact with objects',
          'Press F or Y to open your map',
          'Press Tab or Start to open the menu'
        ],
        tips: [
          'Don\'t worry about dying here - this is a safe learning environment',
          'Take your time to get comfortable with the controls',
          'Explore every corner of the cave',
          'Try jumping with the spacebar or A button'
        ]
      },
      {
        step: 2,
        title: 'Finding the First Site of Grace',
        description: 'Follow the path forward until you see a golden light. This is your first Site of Grace - the game\'s checkpoint system.',
        details: [
          'Sites of Grace restore your health and flasks',
          'They serve as fast travel points',
          'You can rest here to respawn enemies',
          'This is where you\'ll level up once you meet Melina',
          'The golden guidance points toward important locations'
        ],
        tips: [
          'Always activate Sites of Grace when you find them',
          'You can fast travel between activated Sites of Grace',
          'Resting at a Site of Grace will respawn all enemies in the area',
          'Look for the golden guidance to find your path'
        ]
      },
      {
        step: 3,
        title: 'Learning Combat Basics',
        description: 'Continue forward to encounter your first enemy - a weak soldier. This is where you\'ll learn the fundamentals of combat.',
        details: [
          'Left click or RB/R1 for light attacks',
          'Right click or RT/R2 for heavy attacks',
          'Space or B/Circle to dodge roll',
          'Hold Space or B/Circle to sprint',
          'Right click or LT/L2 to block with shield',
          'Shift or LB/L1 to use weapon skills'
        ],
        tips: [
          'Dodging gives you invincibility frames (i-frames)',
          'Blocking reduces damage but costs stamina',
          'Heavy attacks deal more damage but are slower',
          'Watch your stamina bar - don\'t let it deplete completely',
          'Practice timing your dodges with enemy attacks'
        ]
      },
      {
        step: 4,
        title: 'Defeating Soldier of Godrick',
        description: 'The first boss encounter teaches you about boss mechanics and the importance of patience in combat.',
        details: [
          'This boss has predictable attack patterns',
          'He uses basic sword strikes and shield bashes',
          'His health bar appears at the bottom of the screen',
          'Focus on dodging his attacks and counter-attacking',
          'Don\'t get greedy - one or two hits at a time'
        ],
        tips: [
          'Don\'t get greedy - attack once or twice then back off',
          'Watch for his attack wind-ups to time your dodges',
          'Use your shield to block if you can\'t dodge',
          'This boss is designed to be beaten by beginners',
          'If you die, you\'ll respawn at the Site of Grace'
        ]
      },
      {
        step: 5,
        title: 'Collecting Your First Items',
        description: 'After defeating the boss, explore the area to find your first important items.',
        details: [
          'Flask of Crimson Tears - your primary healing item',
          'Flask of Cerulean Tears - restores FP for spells and skills',
          'Golden Seed - can be used to increase flask charges',
          'Sacred Tear - can be used to increase flask healing',
          'Look for glowing items on the ground'
        ],
        tips: [
          'Hold onto Golden Seeds and Sacred Tears - you\'ll use them later',
          'The flasks will be your primary healing throughout the game',
          'You can find more Golden Seeds and Sacred Tears throughout the world',
          'Always pick up items you find - they\'re usually valuable'
        ]
      }
    ],
    items: [
      {
        name: 'Flask of Crimson Tears',
        type: 'Consumable',
        description: 'Primary healing item that restores HP. You start with 3 charges.',
        location: 'Found in the tutorial area',
        usage: 'Use to restore health during combat or exploration'
      },
      {
        name: 'Flask of Cerulean Tears',
        type: 'Consumable',
        description: 'Restores Focus Points (FP) for spells and weapon skills. You start with 1 charge.',
        location: 'Found in the tutorial area',
        usage: 'Use to cast spells or activate weapon arts'
      },
      {
        name: 'Golden Seed',
        type: 'Upgrade Material',
        description: 'Used to increase the number of flask charges you can carry.',
        location: 'Found in the tutorial area',
        usage: 'Take to a Site of Grace to upgrade flask charges'
      },
      {
        name: 'Sacred Tear',
        type: 'Upgrade Material',
        description: 'Used to increase the healing amount of your flasks.',
        location: 'Found in the tutorial area',
        usage: 'Take to a Site of Grace to upgrade flask healing'
      }
    ],
    enemies: [
      {
        name: 'Soldier of Godrick',
        type: 'Boss',
        health: 'Low',
        difficulty: 'Very Easy',
        attacks: [
          'Basic sword strikes',
          'Shield bash',
          'Simple combos'
        ],
        strategy: 'This is a tutorial boss designed to teach basic combat mechanics. Focus on dodging and counter-attacking. Don\'t get greedy with attacks.',
        drops: 'None (tutorial boss)'
      }
    ],
    secrets: [
      {
        description: 'Hidden path to additional items',
        location: 'Behind the boss arena',
        reward: 'Additional Golden Seed'
      }
    ],
    nextSection: 'limgrave-start',
    tips: [
      'Take your time to learn the controls - rushing will only make things harder later',
      'Don\'t worry about dying - it\'s part of the learning process',
      'Explore thoroughly - you might find hidden items',
      'Practice dodging and blocking - these skills will be essential throughout the game',
      'Remember where you find Golden Seeds and Sacred Tears - you\'ll want to collect them all',
      'The tutorial is designed to be forgiving - use it to practice',
      'Pay attention to enemy attack patterns - this will help you later'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/tutorial-map.jpg'
  },

  // First Steps in Limgrave
  'limgrave-start': {
    id: 'limgrave-start',
    title: 'First Steps in Limgrave',
    subtitle: 'West Limgrave - Region Guide, Dungeon Locations, and Points of Interest',
    description: 'After completing the tutorial, you\'ll emerge into the vast open world of Limgrave. This is where your true adventure begins.',
    estimatedTime: '2-4 hours',
    difficulty: 'Beginner',
    objectives: [
      'Explore the open world of Limgrave',
      'Find and activate Sites of Grace',
      'Discover your first dungeons and caves',
      'Collect Golden Seeds and Sacred Tears',
      'Defeat your first world bosses',
      'Meet important NPCs'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Emerging from the Cave',
        description: 'After defeating Soldier of Godrick, you\'ll emerge into the vast open world. Take a moment to appreciate the scale of your adventure.',
        details: [
          'You\'re now in West Limgrave',
          'The open world is yours to explore',
          'You can go anywhere, but some areas will be too difficult',
          'Look for the golden guidance of grace to find your path',
          'The world is much larger than the tutorial area'
        ],
        tips: [
          'Don\'t feel pressured to follow the guidance - exploration is rewarded',
          'Mark interesting locations on your map',
          'Take note of enemy difficulty - if they\'re too hard, come back later',
          'The Tree Sentinel near the start is intentionally difficult - avoid it for now'
        ]
      },
      {
        step: 2,
        title: 'Finding the First Church',
        description: 'Head towards the Church of Elleh, marked by a golden guidance. This is where you\'ll meet important NPCs.',
        details: [
          'Church of Elleh is a safe location',
          'You\'ll meet White Mask Varré here',
          'Ranni the Witch may appear at night',
          'This is your first major NPC hub',
          'The church is marked by a golden guidance'
        ],
        tips: [
          'Talk to all NPCs you meet',
          'Some NPCs only appear at certain times',
          'Don\'t attack NPCs unless you\'re sure you want to',
          'NPCs can provide valuable information and items'
        ]
      },
      {
        step: 3,
        title: 'Exploring Limgrave Tunnels',
        description: 'Your first major dungeon is Limgrave Tunnels, located near the starting area.',
        details: [
          'Contains valuable upgrade materials',
          'Home to the Beastman of Farum Azula boss',
          'Rewards include Smithing Stones',
          'Good place to practice combat',
          'Located near the starting area'
        ],
        tips: [
          'Bring a torch or light source',
          'Watch out for ambushes',
          'The boss is challenging for beginners - don\'t be afraid to come back later',
          'Smithing Stones are essential for weapon upgrades'
        ]
      }
    ],
    items: [
      {
        name: 'Uchigatana',
        type: 'Weapon',
        description: 'Popular katana with good dexterity scaling and bleed effect',
        location: 'Limgrave Tunnels',
        requirements: '11 Strength, 15 Dexterity'
      },
      {
        name: 'Bloodhound\'s Fang',
        type: 'Weapon',
        description: 'Curved greatsword with unique skill and bleed effect',
        location: 'Forlorn Hound Evergaol',
        requirements: '18 Strength, 17 Dexterity'
      },
      {
        name: 'Smithing Stone [1]',
        type: 'Upgrade Material',
        description: 'Used to upgrade weapons to +3',
        location: 'Limgrave Tunnels',
        usage: 'Take to a blacksmith or use at a Site of Grace'
      }
    ],
    enemies: [
      {
        name: 'Tree Sentinel',
        type: 'World Boss',
        health: 'High',
        difficulty: 'Hard (for beginners)',
        attacks: [
          'Halberd strikes',
          'Shield bashes',
          'Horse-mounted combat',
          'Golden magic attacks'
        ],
        strategy: 'This boss is designed to teach you that some enemies are too strong for beginners. You can return later when you\'re stronger.',
        drops: 'Golden Halberd, 3200 Runes'
      },
      {
        name: 'Beastman of Farum Azula',
        type: 'Boss',
        health: 'Medium',
        difficulty: 'Medium',
        attacks: [
          'Sword strikes',
          'Leaping attacks',
          'Quick combos'
        ],
        strategy: 'This boss is more manageable than the Tree Sentinel. Focus on dodging and counter-attacking.',
        drops: 'Flamedrake Talisman, 1000 Runes'
      }
    ],
    npcs: [
      {
        name: 'White Mask Varré',
        location: 'Church of Elleh',
        description: 'First NPC you meet. Provides access to Mohgwyn Palace through his questline.',
        questline: 'White Mask Varré Questline'
      },
      {
        name: 'Ranni the Witch',
        location: 'Church of Elleh (at night)',
        description: 'Mysterious witch with a crucial questline leading to the Age of Stars ending.',
        questline: 'Ranni the Witch Questline'
      }
    ],
    nextSection: 'gatefront',
    tips: [
      'Don\'t be afraid to run from tough enemies',
      'Explore thoroughly - secrets are everywhere',
      'Talk to all NPCs you meet',
      'Mark interesting locations on your map',
      'Some areas are designed to be too difficult for beginners',
      'Collect Golden Seeds and Sacred Tears whenever you find them',
      'The Tree Sentinel is a lesson in knowing when to come back later'
    ]
  },

  // Weeping Peninsula Exploration
  'weeping-peninsula': {
    id: 'weeping-peninsula',
    title: 'Weeping Peninsula Exploration',
    subtitle: 'Southern Limgrave - Castle Morne and the Peninsula',
    description: 'The Weeping Peninsula is an optional but highly recommended area that provides valuable items and experience before tackling more difficult regions.',
    estimatedTime: '3-5 hours',
    difficulty: 'Beginner',
    objectives: [
      'Explore Castle Morne',
      'Defeat Leonine Misbegotten',
      'Complete Irina\'s questline',
      'Collect Golden Seeds and Sacred Tears',
      'Find valuable weapons and armor',
      'Discover hidden dungeons and caves'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Reaching the Weeping Peninsula',
        description: 'The Weeping Peninsula is accessible from Limgrave by crossing the Bridge of Sacrifice.',
        details: [
          'Head south from Limgrave',
          'Cross the Bridge of Sacrifice',
          'The area is relatively safe for beginners',
          'Contains Castle Morne as the main dungeon',
          'Home to several important NPCs'
        ],
        tips: [
          'This area is perfect for leveling up before Liurnia',
          'The enemies here are manageable for beginners',
          'Take your time to explore thoroughly',
          'Look for the golden guidance to find important locations'
        ]
      },
      {
        step: 2,
        title: 'Exploring Castle Morne',
        description: 'Castle Morne is the main dungeon of the Weeping Peninsula, containing valuable loot and a major boss.',
        details: [
          'Large castle with multiple levels',
          'Contains the Leonine Misbegotten boss',
          'Home to important NPCs like Irina and Edgar',
          'Rewards include the Grafted Blade Greatsword',
          'Good source of upgrade materials'
        ],
        tips: [
          'Bring a torch for the darker areas',
          'Watch out for ambushes from above',
          'The boss is challenging but manageable',
          'Complete Irina\'s quest before defeating the boss'
        ]
      },
      {
        step: 3,
        title: 'Completing Irina\'s Questline',
        description: 'Irina\'s questline is one of the most touching stories in the game and provides valuable rewards.',
        details: [
          'Find Irina near the Bridge of Sacrifice',
          'Deliver her letter to her father Edgar',
          'Defeat the Leonine Misbegotten',
          'Return to Irina for the conclusion',
          'Rewards include the Banished Knight\'s Halberd'
        ],
        tips: [
          'This quest is time-sensitive',
          'Complete it before defeating the boss',
          'The quest has multiple possible outcomes',
          'Talk to Edgar after defeating the boss'
        ]
      }
    ],
    items: [
      {
        name: 'Grafted Blade Greatsword',
        type: 'Weapon',
        description: 'Legendary greatsword with unique skill and high requirements',
        location: 'Castle Morne (boss reward)',
        requirements: '40 Strength, 14 Dexterity'
      },
      {
        name: 'Banished Knight\'s Halberd',
        type: 'Weapon',
        description: 'Powerful halberd with good reach and damage',
        location: 'Castle Morne (quest reward)',
        requirements: '14 Strength, 12 Dexterity'
      },
      {
        name: 'Sacred Tear',
        type: 'Upgrade Material',
        description: 'Used to increase flask healing',
        location: 'Church of Pilgrimage',
        usage: 'Take to a Site of Grace to upgrade flask healing'
      }
    ],
    enemies: [
      {
        name: 'Leonine Misbegotten',
        type: 'Boss',
        health: 'Medium',
        difficulty: 'Medium',
        attacks: [
          'Sword strikes',
          'Leaping attacks',
          'Quick combos',
          'Sword throw'
        ],
        strategy: 'This boss is aggressive but predictable. Focus on dodging and counter-attacking. Use the environment to your advantage.',
        drops: 'Grafted Blade Greatsword, 3800 Runes'
      }
    ],
    npcs: [
      {
        name: 'Irina',
        location: 'Near Bridge of Sacrifice',
        description: 'Blind maiden who needs help delivering a letter to her father.',
        questline: 'Irina\'s Questline'
      },
      {
        name: 'Edgar',
        location: 'Castle Morne',
        description: 'Irina\'s father and the commander of Castle Morne.',
        questline: 'Edgar\'s Questline'
      }
    ],
    nextSection: 'caelid-basics',
    tips: [
      'The Weeping Peninsula is optional but highly recommended',
      'Complete this area before moving to Liurnia for better preparation',
      'Take your time to explore - there are many hidden items',
      'The area provides excellent experience and loot for beginners',
      'Don\'t rush through - enjoy the atmosphere and story'
    ]
  }
};

// Helper functions
export const getWalkthroughSection = (id) => {
  return walkthroughContent[id] || null;
};

export const getAllWalkthroughSections = () => {
  return Object.values(walkthroughContent);
};

export const searchWalkthroughContent = (query) => {
  const results = [];
  const searchTerm = query.toLowerCase();

  Object.values(walkthroughContent).forEach(section => {
    if (section.title.toLowerCase().includes(searchTerm) ||
        section.description.toLowerCase().includes(searchTerm) ||
        section.objectives.some(obj => obj.toLowerCase().includes(searchTerm))) {
      results.push(section);
    }
  });

  return results;
}; 