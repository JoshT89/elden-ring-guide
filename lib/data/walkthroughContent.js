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
  },

  // Gatefront Ruins and Torrent
  'gatefront': {
    id: 'gatefront',
    title: 'Gatefront Ruins and Torrent',
    subtitle: 'Central Limgrave - Meeting Melina and Getting Your Steed',
    description: 'Gatefront Ruins is a crucial location where you\'ll meet Melina and receive Torrent, your spectral steed. This marks a major turning point in your journey.',
    estimatedTime: '1-2 hours',
    difficulty: 'Beginner',
    objectives: [
      'Meet Melina and receive Torrent',
      'Explore Gatefront Ruins',
      'Find the Whetstone Knife',
      'Defeat the Gatefront Ruins boss',
      'Collect valuable items and materials',
      'Learn about weapon arts and ashes of war'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Approaching Gatefront Ruins',
        description: 'Gatefront Ruins is located in central Limgrave, marked by a golden guidance. This is where you\'ll have your first major story encounter.',
        details: [
          'Located in central Limgrave',
          'Marked by golden guidance',
          'Contains a Site of Grace',
          'Home to important NPCs and items',
          'Guarded by various enemies'
        ],
        tips: [
          'This area is manageable for beginners',
          'Take your time to explore thoroughly',
          'Look for the golden guidance to find the Site of Grace',
          'Don\'t rush - there are valuable items to find'
        ]
      },
      {
        step: 2,
        title: 'Meeting Melina and Receiving Torrent',
        description: 'At the Site of Grace in Gatefront Ruins, you\'ll meet Melina, who will offer you the power to level up and give you Torrent, your spectral steed.',
        details: [
          'Rest at the Site of Grace to trigger the encounter',
          'Melina will offer you the power to level up',
          'She will give you the Spectral Steed Whistle',
          'This unlocks the ability to summon Torrent',
          'You can now level up at any Site of Grace'
        ],
        tips: [
          'Accept Melina\'s offer - this is crucial for progression',
          'Torrent will make exploration much faster',
          'You can summon Torrent by using the whistle',
          'Torrent can double jump and has unlimited stamina',
          'You can fight on horseback using Torrent'
        ]
      },
      {
        step: 3,
        title: 'Exploring the Ruins',
        description: 'Gatefront Ruins contains valuable items including the Whetstone Knife, which unlocks weapon arts and ashes of war.',
        details: [
          'Contains the Whetstone Knife',
          'Home to various enemies and loot',
          'Has a boss encounter',
          'Contains upgrade materials',
          'Good source of early-game items'
        ],
        tips: [
          'The Whetstone Knife is essential for weapon customization',
          'Look for chests and items throughout the ruins',
          'Watch out for ambushes from above',
          'The boss is manageable with proper preparation',
          'Explore every corner for hidden items'
        ]
      },
      {
        step: 4,
        title: 'Defeating the Gatefront Ruins Boss',
        description: 'The ruins are guarded by a boss that drops valuable loot and provides good combat experience.',
        details: [
          'The boss is a manageable challenge',
          'Drops valuable items and runes',
          'Good practice for future boss encounters',
          'Can be fought on foot or horseback',
          'Rewards include upgrade materials'
        ],
        tips: [
          'Use Torrent for mobility during the fight',
          'The boss is vulnerable to certain strategies',
          'Don\'t get greedy with attacks',
          'Use the environment to your advantage',
          'If you die, you can return and try again'
        ]
      },
      {
        step: 5,
        title: 'Learning About Weapon Arts',
        description: 'The Whetstone Knife allows you to customize your weapons with different ashes of war, adding new abilities and changing weapon scaling.',
        details: [
          'Whetstone Knife unlocks weapon customization',
          'Ashes of War add new weapon skills',
          'Can change weapon scaling (Strength, Dexterity, etc.)',
          'Some ashes of war are very powerful',
          'You can find more ashes throughout the world'
        ],
        tips: [
          'Experiment with different ashes of war',
          'Some ashes work better with certain weapons',
          'You can remove and reapply ashes at Sites of Grace',
          'Look for more ashes of war throughout your journey',
          'Certain ashes can make weapons much more powerful'
        ]
      }
    ],
    items: [
      {
        name: 'Spectral Steed Whistle',
        type: 'Key Item',
        description: 'Allows you to summon Torrent, your spectral steed for faster travel and mounted combat.',
        location: 'Received from Melina at Gatefront Ruins',
        usage: 'Use to summon Torrent for travel and combat'
      },
      {
        name: 'Whetstone Knife',
        type: 'Key Item',
        description: 'Allows you to apply ashes of war to weapons and customize weapon skills.',
        location: 'Gatefront Ruins',
        usage: 'Use at Sites of Grace to customize weapons'
      },
      {
        name: 'Ashes of War: Square Off',
        type: 'Weapon Art',
        description: 'A powerful stance-based weapon art that can break enemy posture.',
        location: 'Gatefront Ruins',
        usage: 'Apply to weapons using the Whetstone Knife'
      },
      {
        name: 'Golden Seed',
        type: 'Upgrade Material',
        description: 'Used to increase the number of flask charges you can carry.',
        location: 'Gatefront Ruins',
        usage: 'Take to a Site of Grace to upgrade flask charges'
      }
    ],
    enemies: [
      {
        name: 'Gatefront Ruins Boss',
        type: 'Boss',
        health: 'Medium',
        difficulty: 'Medium',
        attacks: [
          'Sword strikes',
          'Shield bashes',
          'Combo attacks',
          'Defensive maneuvers'
        ],
        strategy: 'This boss is a good introduction to more complex combat. Use Torrent for mobility and focus on timing your attacks.',
        drops: 'Valuable items and runes'
      }
    ],
    npcs: [
      {
        name: 'Melina',
        location: 'Gatefront Ruins Site of Grace',
        description: 'Mysterious maiden who offers you the power to level up and gives you Torrent.',
        questline: 'Main Story - Melina\'s Guidance'
      }
    ],
    nextSection: 'stormveil',
    tips: [
      'Torrent will revolutionize your exploration - use him often',
      'The Whetstone Knife is essential for weapon customization',
      'Experiment with different ashes of war to find what works for you',
      'Gatefront Ruins is a good place to practice mounted combat',
      'Don\'t forget to level up now that you have the ability',
      'The area provides excellent loot for the next major challenge',
      'Take your time to master Torrent\'s controls'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/gatefront-map.jpg'
  },

  // Stormveil Castle
  'stormveil': {
    id: 'stormveil',
    title: 'Stormveil Castle',
    subtitle: 'Godrick the Grafted - First Major Boss and Legacy Dungeon',
    description: 'Stormveil Castle is your first major legacy dungeon and home to Godrick the Grafted, one of the game\'s most memorable bosses. This is where your skills will be truly tested.',
    estimatedTime: '3-6 hours',
    difficulty: 'Intermediate',
    objectives: [
      'Navigate through Stormveil Castle',
      'Defeat Godrick the Grafted',
      'Collect valuable weapons and armor',
      'Find the Great Rune',
      'Meet important NPCs',
      'Discover hidden areas and secrets'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Entering Stormveil Castle',
        description: 'After defeating Margit, you can now enter the massive fortress of Stormveil Castle.',
        details: [
          'Large multi-level castle complex',
          'Multiple enemy types throughout',
          'Valuable loot and secrets',
          'Home to Godrick the Grafted',
          'Contains important NPCs'
        ],
        tips: [
          'Take your time to explore thoroughly',
          'Look for shortcuts to make navigation easier',
          'Don\'t rush - enemies hit hard here',
          'Bring plenty of healing items',
          'Some areas are optional but contain valuable loot'
        ]
      },
      {
        step: 2,
        title: 'Navigating the Castle Grounds',
        description: 'The castle grounds are filled with powerful enemies including knights, soldiers, and various traps.',
        details: [
          'Multiple enemy types throughout',
          'Various traps and ambushes',
          'Shortcuts to unlock',
          'Valuable items to collect',
          'Safe zones and Sites of Grace'
        ],
        tips: [
          'Use stealth when possible to avoid overwhelming odds',
          'Look for shortcuts to make return trips easier',
          'Don\'t rush - enemies hit hard here',
          'Use the environment to your advantage',
          'Some enemies can be avoided entirely'
        ]
      },
      {
        step: 3,
        title: 'Finding the Castle Interior',
        description: 'The castle interior contains more complex enemy encounters and leads to the boss arena.',
        details: [
          'More complex enemy encounters',
          'Tight corridors and rooms',
          'Multiple paths to explore',
          'Boss arena access',
          'Valuable loot and secrets'
        ],
        tips: [
          'Watch out for ambushes in tight spaces',
          'Look for hidden paths and secrets',
          'Some areas require specific items or keys',
          'Don\'t forget to rest at Sites of Grace',
          'The boss arena is well-marked'
        ]
      },
      {
        step: 4,
        title: 'Preparing for Godrick',
        description: 'Before facing Godrick, make sure you\'re properly prepared with upgraded weapons and sufficient healing.',
        details: [
          'Godrick is a two-phase boss',
          'He uses grafting abilities in phase two',
          'The arena is large and allows for mobility',
          'He has both melee and ranged attacks',
          'Summons are available for this fight'
        ],
        tips: [
          'Upgrade your weapons before the fight',
          'Bring plenty of healing items',
          'Consider using summons if available',
          'Learn his attack patterns in phase one',
          'Phase two is much more aggressive',
          'Don\'t get greedy - one or two hits at a time'
        ]
      },
      {
        step: 5,
        title: 'Defeating Godrick the Grafted',
        description: 'Godrick is a challenging boss that tests all the skills you\'ve learned so far.',
        details: [
          'Phase one: Standard sword and axe attacks',
          'Phase two: Grafts a dragon head for fire attacks',
          'He has high health and damage output',
          'The fight requires patience and timing',
          'Rewards include a Great Rune and remembrance'
        ],
        tips: [
          'Stay mobile during phase two',
          'Watch for his fire breath attacks',
          'Use the arena space to your advantage',
          'Don\'t panic when he enters phase two',
          'Focus on dodging and counter-attacking',
          'If you die, learn from your mistakes and try again'
        ]
      }
    ],
    items: [
      {
        name: 'Great Rune of Godrick',
        type: 'Key Item',
        description: 'A Great Rune that can be activated to provide powerful buffs. Part of the main story progression.',
        location: 'Dropped by Godrick the Grafted',
        usage: 'Activate at a Divine Tower to gain its power'
      },
      {
        name: 'Remembrance of the Grafted',
        type: 'Key Item',
        description: 'Can be exchanged for powerful weapons or consumed for runes.',
        location: 'Dropped by Godrick the Grafted',
        usage: 'Take to the Roundtable Hold to exchange'
      },
      {
        name: 'Godrick\'s Great Rune',
        type: 'Key Item',
        description: 'Provides +5 to all attributes when activated with a Rune Arc.',
        location: 'Dropped by Godrick the Grafted',
        usage: 'Activate at Divine Tower of Limgrave'
      },
      {
        name: 'Banished Knight\'s Halberd',
        type: 'Weapon',
        description: 'Powerful halberd dropped by Banished Knights in the castle.',
        location: 'Stormveil Castle',
        requirements: '14 Strength, 12 Dexterity'
      }
    ],
    enemies: [
      {
        name: 'Godrick the Grafted',
        type: 'Boss',
        health: 'Very High',
        difficulty: 'Hard',
        attacks: [
          'Sword and axe strikes',
          'Ground slams',
          'Wind attacks',
          'Dragon head fire breath (phase 2)',
          'Grafted arm attacks (phase 2)'
        ],
        strategy: 'Godrick is a challenging boss that requires patience and timing. Focus on learning his patterns and don\'t get greedy with attacks. Use the arena space to your advantage.',
        drops: 'Great Rune of Godrick, Remembrance of the Grafted, 20000 Runes'
      },
      {
        name: 'Banished Knights',
        type: 'Elite Enemy',
        health: 'High',
        difficulty: 'Medium',
        attacks: [
          'Halberd strikes',
          'Shield bashes',
          'Quick combos',
          'Defensive maneuvers'
        ],
        strategy: 'These knights are tough but manageable. Focus on dodging their attacks and counter-attacking when they\'re vulnerable.',
        drops: 'Banished Knight\'s Halberd, Banished Knight Armor Set'
      }
    ],
    npcs: [
      {
        name: 'Roderika',
        location: 'Stormveil Castle',
        description: 'A young woman who can help you with spirit tuning and summoning.',
        questline: 'Roderika\'s Questline'
      },
      {
        name: 'Gostoc',
        location: 'Stormveil Castle',
        description: 'A gatekeeper who can provide assistance and items.',
        questline: 'Gostoc\'s Questline'
      }
    ],
    nextSection: 'godrick',
    tips: [
      'Stormveil Castle is a major difficulty spike - be prepared',
      'Take your time to explore and find all the loot',
      'Don\'t be afraid to use summons if you\'re struggling',
      'The Great Rune is crucial for progression',
      'Godrick\'s remembrance can be exchanged for powerful items',
      'Some areas of the castle are optional but contain valuable loot',
      'The castle teaches important lessons about patience and timing'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/stormveil-map.jpg'
  },

  // Godrick the Grafted (separate section)
  'godrick': {
    id: 'godrick',
    title: 'Godrick the Grafted',
    subtitle: 'Lord of Stormveil Castle - First Demigod Boss',
    description: 'Godrick the Grafted is the first demigod you\'ll face in Elden Ring. This challenging boss fight will test all your skills and patience.',
    estimatedTime: '30-90 minutes',
    difficulty: 'Hard',
    objectives: [
      'Defeat Godrick the Grafted',
      'Learn two-phase boss mechanics',
      'Master advanced combat timing',
      'Collect the Great Rune',
      'Progress the main story'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Understanding Godrick\'s Mechanics',
        description: 'Godrick is a two-phase boss with distinct attack patterns and strategies for each phase.',
        details: [
          'Phase one: Standard melee combat',
          'Phase two: Dragon grafting abilities',
          'High health and damage output',
          'Complex attack patterns',
          'Requires patience and timing'
        ],
        tips: [
          'Study his attack patterns in phase one',
          'Don\'t get greedy with attacks',
          'Use the arena space to your advantage',
          'Bring plenty of healing items',
          'Consider using summons if available'
        ]
      },
      {
        step: 2,
        title: 'Phase One Strategy',
        description: 'The first phase focuses on learning his basic attack patterns and finding safe opportunities.',
        details: [
          'He uses a large axe and sword',
          'Attacks have predictable wind-ups',
          'Focus on dodging and counter-attacking',
          'Watch for his combo sequences',
          'Use heavy attacks when he\'s vulnerable'
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
        step: 3,
        title: 'Phase Two - Dragon Grafting',
        description: 'When Godrick reaches half health, he\'ll graft a dragon head and gain new abilities.',
        details: [
          'He grafts a dragon head to his arm',
          'Gains fire breath attacks',
          'More aggressive attack patterns',
          'Longer and more complex combos',
          'Higher damage output'
        ],
        tips: [
          'Stay mobile during fire attacks',
          'Watch for the dragon head wind-ups',
          'Don\'t get caught in his longer combos',
          'Use the same patient approach',
          'Focus on dodging and counter-attacking'
        ]
      },
      {
        step: 4,
        title: 'Advanced Strategies',
        description: 'Advanced players can use specific strategies to make the fight more manageable.',
        details: [
          'Use status effects effectively',
          'Summon spirits to distract him',
          'Use weapon arts strategically',
          'Time your heavy attacks carefully',
          'Use the environment to your advantage'
        ],
        tips: [
          'Bleed weapons can be effective',
          'Summons can give you breathing room',
          'Save your weapon arts for vulnerable moments',
          'Don\'t waste FP on missed attacks',
          'Learn to recognize his vulnerable states'
        ]
      },
      {
        step: 5,
        title: 'Victory and Rewards',
        description: 'Defeating Godrick grants you access to new areas and valuable rewards.',
        details: [
          'Receive the Great Rune of Godrick',
          'Gain access to Liurnia of the Lakes',
          'Unlock new story progression',
          'Receive significant runes',
          'Access to Roundtable Hold upgrades'
        ],
        tips: [
          'The Great Rune is crucial for progression',
          'Use the runes to level up significantly',
          'Take time to explore Liurnia before continuing',
          'The game opens up significantly after this fight',
          'Don\'t rush to the next major challenge'
        ]
      }
    ],
    items: [
      {
        name: 'Great Rune of Godrick',
        type: 'Key Item',
        description: 'A Great Rune that provides +5 to all attributes when activated with a Rune Arc.',
        location: 'Dropped by Godrick the Grafted',
        usage: 'Activate at Divine Tower of Limgrave'
      },
      {
        name: 'Remembrance of the Grafted',
        type: 'Key Item',
        description: 'Can be exchanged for the Axe of Godrick or Grafted Dragon weapon.',
        location: 'Dropped by Godrick the Grafted',
        usage: 'Take to the Roundtable Hold to exchange'
      },
      {
        name: 'Axe of Godrick',
        type: 'Weapon',
        description: 'Powerful greataxe with unique skill and high requirements.',
        location: 'Exchange Remembrance of the Grafted',
        requirements: '34 Strength, 22 Dexterity'
      },
      {
        name: 'Grafted Dragon',
        type: 'Weapon',
        description: 'Unique fist weapon with dragon head that breathes fire.',
        location: 'Exchange Remembrance of the Grafted',
        requirements: '20 Strength, 14 Dexterity, 16 Faith'
      }
    ],
    enemies: [
      {
        name: 'Godrick the Grafted',
        type: 'Boss',
        health: 'Very High',
        difficulty: 'Hard',
        attacks: [
          'Axe and sword strikes',
          'Ground slams and wind attacks',
          'Dragon head fire breath (phase 2)',
          'Grafted arm attacks (phase 2)',
          'Complex combo sequences'
        ],
        strategy: 'Godrick is a challenging boss that requires patience and timing. Focus on learning his patterns and don\'t get greedy with attacks. Use the arena space to your advantage.',
        drops: 'Great Rune of Godrick, Remembrance of the Grafted, 20000 Runes'
      }
    ],
    npcs: [
      {
        name: 'Nepheli Loux',
        location: 'Stormveil Castle',
        description: 'Warrior who can be summoned for the Godrick fight.',
        questline: 'Nepheli Loux Questline'
      }
    ],
    nextSection: 'liurnia-entry',
    tips: [
      'Godrick is a major skill check - don\'t get discouraged',
      'Patience is absolutely crucial for this fight',
      'Use summons if you\'re struggling',
      'Learn his attack patterns thoroughly',
      'Don\'t waste healing items - be strategic',
      'The fight teaches important lessons for future bosses',
      'Take breaks if you\'re getting frustrated'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/godrick-map.jpg'
  },

  // Liurnia Entry (using correct ID)
  'liurnia-entry': {
    id: 'liurnia-entry',
    title: 'Entering Liurnia of the Lakes',
    subtitle: 'Vast Magical Region - Exploration and Preparation',
    description: 'After defeating Godrick, you\'ll gain access to Liurnia of the Lakes, a vast magical region filled with new challenges and opportunities.',
    estimatedTime: '4-8 hours',
    difficulty: 'Intermediate',
    objectives: [
      'Explore the vast Liurnia region',
      'Find and activate Sites of Grace',
      'Discover new dungeons and caves',
      'Collect Golden Seeds and Sacred Tears',
      'Meet important NPCs',
      'Prepare for Raya Lucaria Academy'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Crossing into Liurnia',
        description: 'After defeating Godrick, you can now access Liurnia of the Lakes through the northern exit of Stormveil Castle.',
        details: [
          'Large shallow lake region',
          'Home to magical enemies and creatures',
          'Contains Raya Lucaria Academy',
          'Multiple dungeons and caves',
          'Important NPCs and questlines'
        ],
        tips: [
          'Use Torrent for faster exploration',
          'The shallow water allows for mounted combat',
          'Watch out for magical enemies',
          'Take your time to explore thoroughly',
          'Mark interesting locations on your map'
        ]
      },
      {
        step: 2,
        title: 'Exploring the Lake Region',
        description: 'Liurnia is characterized by its vast shallow lakes, magical atmosphere, and unique enemies.',
        details: [
          'Shallow water allows for mounted exploration',
          'Magical enemies throughout the region',
          'Multiple Sites of Grace to discover',
          'Valuable items and materials',
          'Beautiful and atmospheric environment'
        ],
        tips: [
          'Use Torrent to traverse the lakes quickly',
          'Watch out for magical projectiles',
          'Some areas are more dangerous than others',
          'Look for golden guidance to find important locations',
          'Don\'t rush - take time to appreciate the atmosphere'
        ]
      },
      {
        step: 3,
        title: 'Discovering Caria Manor',
        description: 'Caria Manor is a major location in Liurnia, home to important NPCs and valuable loot.',
        details: [
          'Home to Ranni the Witch',
          'Contains valuable magical items',
          'Challenging enemies and traps',
          'Important questline location',
          'Beautiful magical atmosphere'
        ],
        tips: [
          'This area is important for Ranni\'s questline',
          'Bring a torch for darker areas',
          'Watch out for magical traps',
          'Some enemies are invisible',
          'Take your time to explore thoroughly'
        ]
      },
      {
        step: 4,
        title: 'Finding the Academy Key',
        description: 'To access Raya Lucaria Academy, you\'ll need to find the Academy Glintstone Key.',
        details: [
          'Key is located in the lake region',
          'Guarded by a dragon',
          'Required for Academy access',
          'Part of the main story progression',
          'Can be obtained early or later'
        ],
        tips: [
          'The dragon is challenging but manageable',
          'You can return later if it\'s too difficult',
          'The key is essential for progression',
          'Look for the dragon\'s location on your map',
          'Use Torrent for mobility during the fight'
        ]
      },
      {
        step: 5,
        title: 'Preparing for the Academy',
        description: 'Before entering Raya Lucaria Academy, make sure you\'re properly prepared.',
        details: [
          'Ensure you have the Academy Key',
          'Level up your character',
          'Upgrade your weapons',
          'Stock up on healing items',
          'Learn about magical combat'
        ],
        tips: [
          'The Academy is more challenging than previous areas',
          'Magical enemies require different strategies',
          'Make sure your equipment is upgraded',
          'Bring plenty of healing items',
          'Don\'t rush - take time to prepare'
        ]
      }
    ],
    items: [
      {
        name: 'Academy Glintstone Key',
        type: 'Key Item',
        description: 'Required to access Raya Lucaria Academy. Found in the lake region.',
        location: 'Liurnia Lake Region',
        usage: 'Use at the Academy gate to gain access'
      },
      {
        name: 'Golden Seed',
        type: 'Upgrade Material',
        description: 'Used to increase flask charges.',
        location: 'Multiple locations in Liurnia',
        usage: 'Take to a Site of Grace to upgrade flask charges'
      },
      {
        name: 'Sacred Tear',
        type: 'Upgrade Material',
        description: 'Used to increase flask healing.',
        location: 'Multiple locations in Liurnia',
        usage: 'Take to a Site of Grace to upgrade flask healing'
      }
    ],
    enemies: [
      {
        name: 'Glintstone Dragon',
        type: 'World Boss',
        health: 'High',
        difficulty: 'Hard',
        attacks: [
          'Magic breath attacks',
          'Tail swipes',
          'Wing buffets',
          'Ground slams'
        ],
        strategy: 'This dragon guards the Academy Key. Use Torrent for mobility and focus on attacking its head when possible.',
        drops: 'Academy Glintstone Key, Dragon Heart'
      },
      {
        name: 'Crystalian',
        type: 'Elite Enemy',
        health: 'Medium',
        difficulty: 'Medium',
        attacks: [
          'Crystal weapon strikes',
          'Magic projectiles',
          'Crystal explosions'
        ],
        strategy: 'These crystalline enemies are vulnerable to blunt weapons. Break their crystal armor to deal more damage.',
        drops: 'Crystal weapons and materials'
      }
    ],
    npcs: [
      {
        name: 'Ranni the Witch',
        location: 'Caria Manor',
        description: 'Important NPC with a major questline leading to the Age of Stars ending.',
        questline: 'Ranni the Witch Questline'
      },
      {
        name: 'Iji',
        location: 'Caria Manor',
        description: 'Blacksmith and advisor to Ranni.',
        questline: 'Iji\'s Questline'
      }
    ],
    nextSection: 'raya-lucaria',
    tips: [
      'Liurnia is much larger than previous areas - take your time',
      'Use Torrent for efficient exploration',
      'Watch out for magical enemies - they hit hard',
      'The Academy Key is essential for progression',
      'Don\'t rush to the Academy - explore thoroughly',
      'Some areas are more dangerous than others',
      'Take time to appreciate the beautiful atmosphere'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/liurnia-map.jpg'
  },

  // Raya Lucaria Academy (using correct ID)
  'raya-lucaria': {
    id: 'raya-lucaria',
    title: 'Raya Lucaria Academy',
    subtitle: 'Prestigious Magical Institution - Rennala Boss Fight',
    description: 'Raya Lucaria Academy is a prestigious magical institution and home to Rennala, Queen of the Full Moon. This legacy dungeon will test your skills.',
    estimatedTime: '3-5 hours',
    difficulty: 'Intermediate',
    objectives: [
      'Navigate through the Academy',
      'Defeat Rennala, Queen of the Full Moon',
      'Collect valuable magical items',
      'Find the Great Rune',
      'Meet important NPCs',
      'Discover hidden areas and secrets'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Entering the Academy',
        description: 'Use the Academy Glintstone Key to access the prestigious magical institution.',
        details: [
          'Large multi-level magical complex',
          'Home to magical enemies and traps',
          'Contains valuable magical loot',
          'Home to Rennala, Queen of the Full Moon',
          'Important story location'
        ],
        tips: [
          'Bring a torch for darker areas',
          'Watch out for magical traps',
          'Some enemies are invisible',
          'Take your time to explore thoroughly',
          'Look for shortcuts to make navigation easier'
        ]
      },
      {
        step: 2,
        title: 'Navigating the Academy',
        description: 'The Academy is filled with magical enemies, traps, and valuable loot throughout its many levels.',
        details: [
          'Multiple levels and areas',
          'Magical enemies throughout',
          'Various traps and ambushes',
          'Valuable magical items',
          'Shortcuts to unlock'
        ],
        tips: [
          'Use stealth when possible',
          'Watch out for magical projectiles',
          'Some areas require specific items',
          'Don\'t forget to rest at Sites of Grace',
          'Look for hidden paths and secrets'
        ]
      },
      {
        step: 3,
        title: 'Finding the Boss Arena',
        description: 'Rennala\'s boss arena is located in the grand library of the Academy.',
        details: [
          'Located in the grand library',
          'Large arena with multiple phases',
          'Unique boss mechanics',
          'Magical atmosphere',
          'Important story significance'
        ],
        tips: [
          'The boss arena is well-marked',
          'Prepare for a unique fight',
          'Bring plenty of healing items',
          'The fight has multiple phases',
          'Don\'t rush - learn the mechanics'
        ]
      },
      {
        step: 4,
        title: 'Understanding Rennala\'s Fight',
        description: 'Rennala\'s boss fight is unique and requires understanding of its mechanics.',
        details: [
          'Two-phase boss fight',
          'Phase one: Defeat her students',
          'Phase two: Direct confrontation',
          'Magical attacks throughout',
          'Unique mechanics and strategies'
        ],
        tips: [
          'Phase one focuses on defeating her students',
          'Look for the glowing student to attack',
          'Phase two is more direct combat',
          'Watch for her magical attacks',
          'Use the arena space to your advantage'
        ]
      },
      {
        step: 5,
        title: 'Defeating Rennala',
        description: 'Rennala is a challenging but fair boss that rewards patience and understanding.',
        details: [
          'Focus on the mechanics of each phase',
          'Use heavy attacks when she\'s vulnerable',
          'Watch for her magical projectiles',
          'Don\'t get greedy with attacks',
          'Rewards include the Great Rune and rebirth ability'
        ],
        tips: [
          'Don\'t panic during phase transitions',
          'Use the same patient approach as other bosses',
          'Watch for patterns in her attacks',
          'Don\'t waste healing items unnecessarily',
          'Learn from each attempt'
        ]
      }
    ],
    items: [
      {
        name: 'Great Rune of the Unborn',
        type: 'Key Item',
        description: 'Allows you to respec your character and change your appearance.',
        location: 'Dropped by Rennala, Queen of the Full Moon',
        usage: 'Use at Rennala to respec your character'
      },
      {
        name: 'Remembrance of the Full Moon Queen',
        type: 'Key Item',
        description: 'Can be exchanged for powerful magical weapons.',
        location: 'Dropped by Rennala, Queen of the Full Moon',
        usage: 'Take to the Roundtable Hold to exchange'
      },
      {
        name: 'Larval Tear',
        type: 'Key Item',
        description: 'Required for character respec. Consumed when used.',
        location: 'Multiple locations throughout the world',
        usage: 'Use at Rennala to respec your character'
      }
    ],
    enemies: [
      {
        name: 'Rennala, Queen of the Full Moon',
        type: 'Boss',
        health: 'Medium',
        difficulty: 'Medium',
        attacks: [
          'Magical projectiles',
          'Summoning spells',
          'Moon magic attacks',
          'Student protection (phase 1)'
        ],
        strategy: 'Rennala\'s fight is unique. Phase one requires defeating her students, while phase two is direct combat. Focus on the mechanics and don\'t get greedy.',
        drops: 'Great Rune of the Unborn, Remembrance of the Full Moon Queen, 40000 Runes'
      }
    ],
    npcs: [
      {
        name: 'Rennala, Queen of the Full Moon',
        location: 'Raya Lucaria Academy',
        description: 'Boss and NPC who can respec your character after defeat.',
        questline: 'Main Story - Great Rune Questline'
      }
    ],
    nextSection: 'caelid-basics',
    tips: [
      'The Academy is beautiful but dangerous',
      'Take your time to explore thoroughly',
      'Don\'t be afraid to use summons if needed',
      'The Great Rune enables character respec',
      'Rennala\'s remembrance can be exchanged for powerful items',
      'Some areas are optional but contain valuable loot',
      'The Academy teaches important lessons about magical combat'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/academy-map.jpg'
  },

  // Rennala, Queen of the Full Moon (separate section)
  'rennala': {
    id: 'rennala',
    title: 'Rennala, Queen of the Full Moon',
    subtitle: 'Raya Lucaria Academy Boss - Character Respec',
    description: 'Rennala, Queen of the Full Moon is the boss of Raya Lucaria Academy. Defeating her grants you the ability to respec your character.',
    estimatedTime: '30-60 minutes',
    difficulty: 'Medium',
    objectives: [
      'Defeat Rennala, Queen of the Full Moon',
      'Learn unique boss mechanics',
      'Gain character respec ability',
      'Collect the Great Rune',
      'Progress the main story'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Understanding the Fight Mechanics',
        description: 'Rennala\'s boss fight is unique and requires understanding of its two-phase structure.',
        details: [
          'Phase one: Defeat her students',
          'Phase two: Direct confrontation',
          'Unique mechanics in each phase',
          'Magical attacks throughout',
          'Rewards patience and understanding'
        ],
        tips: [
          'Don\'t panic - learn the mechanics',
          'Phase one is about defeating students',
          'Look for the glowing student to attack',
          'Phase two is more traditional combat',
          'Take your time to understand each phase'
        ]
      },
      {
        step: 2,
        title: 'Phase One - Student Protection',
        description: 'The first phase requires you to defeat Rennala\'s students while she floats above, protected by a barrier.',
        details: [
          'Students are scattered around the arena',
          'Look for the glowing student to attack',
          'Rennala is protected by a barrier',
          'Defeating students weakens her protection',
          'Phase ends when you break her barrier'
        ],
        tips: [
          'Focus on the glowing student',
          'Don\'t waste time on non-glowing students',
          'Use heavy attacks to break the barrier',
          'Stay mobile to avoid student attacks',
          'Don\'t get greedy - take your time'
        ]
      },
      {
        step: 3,
        title: 'Phase Two - Direct Confrontation',
        description: 'Once you break her barrier, Rennala will engage you directly with powerful magical attacks.',
        details: [
          'She uses powerful magical attacks',
          'Can summon spirits to help her',
          'Has a variety of magical projectiles',
          'More aggressive than phase one',
          'Requires traditional combat skills'
        ],
        tips: [
          'Stay mobile to avoid her attacks',
          'Watch for her summoning animations',
          'Use heavy attacks when she\'s vulnerable',
          'Don\'t get caught in her magical projectiles',
          'Use the arena space to your advantage'
        ]
      },
      {
        step: 4,
        title: 'Advanced Strategies',
        description: 'Advanced players can use specific strategies to make the fight more manageable.',
        details: [
          'Use status effects effectively',
          'Summon spirits to distract her',
          'Use weapon arts strategically',
          'Time your heavy attacks carefully',
          'Use the environment to your advantage'
        ],
        tips: [
          'Bleed weapons can be effective',
          'Summons can give you breathing room',
          'Save your weapon arts for vulnerable moments',
          'Don\'t waste FP on missed attacks',
          'Learn to recognize her vulnerable states'
        ]
      },
      {
        step: 5,
        title: 'Victory and Character Respec',
        description: 'Defeating Rennala grants you the ability to respec your character and change your build.',
        details: [
          'Receive the Great Rune of the Unborn',
          'Gain access to character respec',
          'Unlock new story progression',
          'Receive significant runes',
          'Access to powerful magical items'
        ],
        tips: [
          'The Great Rune enables character respec',
          'Use Larval Tears to respec your character',
          'This is a great opportunity to optimize your build',
          'Don\'t rush to respec - think about your build carefully',
          'You can respec multiple times throughout the game'
        ]
      }
    ],
    items: [
      {
        name: 'Great Rune of the Unborn',
        type: 'Key Item',
        description: 'Allows you to respec your character and change your appearance.',
        location: 'Dropped by Rennala, Queen of the Full Moon',
        usage: 'Use at Rennala to respec your character'
      },
      {
        name: 'Remembrance of the Full Moon Queen',
        type: 'Key Item',
        description: 'Can be exchanged for the Carian Regal Scepter or Full Moon Crossbow.',
        location: 'Dropped by Rennala, Queen of the Full Moon',
        usage: 'Take to the Roundtable Hold to exchange'
      },
      {
        name: 'Carian Regal Scepter',
        type: 'Weapon',
        description: 'Powerful magical staff with high intelligence scaling.',
        location: 'Exchange Remembrance of the Full Moon Queen',
        requirements: '8 Strength, 10 Dexterity, 60 Intelligence'
      },
      {
        name: 'Full Moon Crossbow',
        type: 'Weapon',
        description: 'Unique crossbow with magical properties.',
        location: 'Exchange Remembrance of the Full Moon Queen',
        requirements: '14 Strength, 16 Dexterity'
      }
    ],
    enemies: [
      {
        name: 'Rennala, Queen of the Full Moon',
        type: 'Boss',
        health: 'Medium',
        difficulty: 'Medium',
        attacks: [
          'Magical projectiles',
          'Summoning spells',
          'Moon magic attacks',
          'Student protection (phase 1)',
          'Spirit summoning (phase 2)'
        ],
        strategy: 'Rennala\'s fight is unique and requires understanding of its mechanics. Phase one focuses on defeating her students, while phase two is direct combat.',
        drops: 'Great Rune of the Unborn, Remembrance of the Full Moon Queen, 40000 Runes'
      }
    ],
    npcs: [
      {
        name: 'Rennala, Queen of the Full Moon',
        location: 'Raya Lucaria Academy',
        description: 'Boss and NPC who can respec your character after defeat.',
        questline: 'Main Story - Great Rune Questline'
      }
    ],
    nextSection: 'caelid-basics',
    tips: [
      'Rennala\'s fight is unique - don\'t panic',
      'Learn the mechanics of each phase',
      'The character respec ability is very valuable',
      'Don\'t rush to respec - think about your build',
      'The fight rewards patience and understanding',
      'Use the respec ability to optimize your character',
      'You can respec multiple times throughout the game'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/rennala-map.jpg'
  },

  // Margit, the Fell Omen
  'margit': {
    id: 'margit',
    title: 'Margit, the Fell Omen',
    subtitle: 'First Major Boss - Stormveil Castle Approach',
    description: 'Margit, the Fell Omen is the first major boss you\'ll encounter on your journey to Stormveil Castle. This fight will test all the skills you\'ve learned so far.',
    estimatedTime: '30-60 minutes',
    difficulty: 'Intermediate',
    objectives: [
      'Defeat Margit, the Fell Omen',
      'Learn advanced boss mechanics',
      'Master timing and patience',
      'Access Stormveil Castle',
      'Collect valuable rewards'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Approaching the Boss Arena',
        description: 'Margit guards the entrance to Stormveil Castle. You\'ll encounter him after crossing the bridge and climbing the hill.',
        details: [
          'Located at the entrance to Stormveil Castle',
          'Large arena with plenty of space to maneuver',
          'You can summon spirits for this fight',
          'NPC summon available (Rogier)',
          'This is a mandatory boss fight'
        ],
        tips: [
          'Make sure you\'re properly leveled (recommended level 20-25)',
          'Bring plenty of healing items',
          'Consider using summons if you\'re struggling',
          'This boss teaches important lessons about patience',
          'Don\'t get discouraged if you die multiple times'
        ]
      },
      {
        step: 2,
        title: 'Understanding Margit\'s Attacks',
        description: 'Margit has a wide variety of attacks that you need to learn to counter effectively.',
        details: [
          'He uses a large hammer and golden magic',
          'His attacks have long wind-ups',
          'He can chain multiple attacks together',
          'Some attacks have delayed timing',
          'He can jump and perform aerial attacks'
        ],
        tips: [
          'Watch for his attack wind-ups to time your dodges',
          'Don\'t panic roll - wait for the actual attack',
          'His hammer attacks can be blocked with a good shield',
          'Stay mobile and use the arena space',
          'Learn which attacks leave him vulnerable'
        ]
      },
      {
        step: 3,
        title: 'Phase One Strategy',
        description: 'The first phase focuses on learning his patterns and finding safe opportunities to attack.',
        details: [
          'Focus on dodging and learning patterns',
          'Attack only when you\'re sure it\'s safe',
          'Use the environment to your advantage',
          'Don\'t get greedy with attacks',
          'Watch your stamina management'
        ],
        tips: [
          'One or two hits at a time is the safe approach',
          'Use heavy attacks when he\'s vulnerable',
          'Keep your distance when he\'s aggressive',
          'Look for patterns in his attack sequences',
          'Don\'t waste healing items unnecessarily'
        ]
      },
      {
        step: 4,
        title: 'Phase Two - Golden Magic',
        description: 'When Margit reaches half health, he\'ll start using golden magic attacks that add new challenges.',
        details: [
          'He gains golden magic attacks',
          'Can create golden weapons',
          'More aggressive attack patterns',
          'Longer combos',
          'Higher damage output'
        ],
        tips: [
          'Stay mobile during magic attacks',
          'Watch for the golden weapon wind-ups',
          'Don\'t get caught in his longer combos',
          'Use the same patient approach',
          'Focus on dodging and counter-attacking'
        ]
      },
      {
        step: 5,
        title: 'Victory and Rewards',
        description: 'After defeating Margit, you\'ll gain access to Stormveil Castle and receive valuable rewards.',
        details: [
          'Access to Stormveil Castle unlocked',
          'Receive Talisman Pouch',
          'Gain significant runes',
          'Progress the main story',
          'Unlock new areas to explore'
        ],
        tips: [
          'The Talisman Pouch allows you to equip more talismans',
          'Use the runes to level up before entering the castle',
          'Take a moment to rest and prepare',
          'The castle will be your next major challenge',
          'Don\'t rush - take your time to prepare'
        ]
      }
    ],
    items: [
      {
        name: 'Talisman Pouch',
        type: 'Key Item',
        description: 'Allows you to equip an additional talisman, increasing your character\'s power.',
        location: 'Dropped by Margit, the Fell Omen',
        usage: 'Automatically increases talisman slots'
      },
      {
        name: 'Margit\'s Shackle',
        type: 'Key Item',
        description: 'Can be used to temporarily stun Margit during the fight.',
        location: 'Purchased from Patches',
        usage: 'Use during the boss fight to stun Margit'
      }
    ],
    enemies: [
      {
        name: 'Margit, the Fell Omen',
        type: 'Boss',
        health: 'High',
        difficulty: 'Hard',
        attacks: [
          'Hammer strikes',
          'Golden magic attacks',
          'Jumping attacks',
          'Combo sequences',
          'Golden weapon creation'
        ],
        strategy: 'Margit is a challenging boss that requires patience and timing. Focus on learning his attack patterns and only attack when safe. Use the arena space to your advantage.',
        drops: 'Talisman Pouch, 12000 Runes'
      }
    ],
    npcs: [
      {
        name: 'Rogier',
        location: 'Outside Margit\'s arena',
        description: 'Can be summoned to help with the Margit fight.',
        questline: 'Rogier\'s Questline'
      }
    ],
    nextSection: 'stormveil',
    tips: [
      'Margit is designed to be a skill check - don\'t get discouraged',
      'Patience is key - don\'t get greedy with attacks',
      'Use summons if you\'re struggling',
      'Learn his attack patterns before trying to counter',
      'The fight teaches important lessons for future bosses',
      'Don\'t waste healing items - be strategic',
      'Take breaks if you\'re getting frustrated'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/margit-map.jpg'
  },

  // Caelid Basics
  'caelid-basics': {
    id: 'caelid-basics',
    title: 'Surviving Early Caelid',
    subtitle: 'Scarlet Rot, Dragons, and Red Wastelands',
    description: 'Caelid is a dangerous, rot-infested region filled with powerful enemies, dragons, and unique loot. This section will help you survive and thrive in this harsh land.',
    estimatedTime: '2-4 hours',
    difficulty: 'Advanced',
    objectives: [
      'Explore the Caelid region',
      'Survive Scarlet Rot swamps',
      'Defeat Decaying Ekzykes',
      'Find the best early weapons',
      'Unlock Sites of Grace',
      'Prepare for Radahn Festival'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Entering Caelid',
        description: 'Caelid can be accessed from Limgrave or via teleport traps. The region is immediately more dangerous than previous areas.',
        details: [
          'Scarlet Rot swamps are highly toxic',
          'Enemies are much stronger',
          'Sites of Grace are scattered but essential',
          'Look for the Caelid Highway South Site of Grace',
          'Avoid large enemy groups early on'
        ],
        tips: [
          'Bring Preserving Boluses to cure Scarlet Rot',
          'Use Torrent to cross swamps quickly',
          'Mark safe routes on your map',
          'Don\'t fight dragons unless you\'re prepared',
          'Explore at your own pace—retreat if needed'
        ]
      },
      {
        step: 2,
        title: 'Key Locations and Loot',
        description: 'Caelid is home to powerful weapons and unique dungeons.',
        details: [
          'Gael Tunnel: Find the Moonveil Katana',
          'Sellia, Town of Sorcery: Puzzle and loot',
          'Redmane Castle: Radahn Festival location',
          'Dragonbarrow: High-level area, great loot',
          'Minor Erdtree: Valuable rewards nearby'
        ],
        tips: [
          'Moonveil Katana is a top-tier weapon for INT builds',
          'Sellia\'s puzzle unlocks more of the town',
          'Redmane Castle is locked until the festival',
          'Dragonbarrow is best for late-game farming',
          'Check every corner for hidden items'
        ]
      },
      {
        step: 3,
        title: 'Surviving Scarlet Rot',
        description: 'Scarlet Rot is a persistent threat in Caelid. Learn how to manage and avoid it.',
        details: [
          'Rot builds up quickly in swamps',
          'Preserving Boluses cure Rot',
          'Torrent is immune to Rot',
          'Some armor and talismans reduce Rot buildup',
          'Rest at Sites of Grace to clear status effects'
        ],
        tips: [
          'Always keep Preserving Boluses in your quick items',
          'Use Torrent to cross Rot areas',
          'Don\'t linger in swamps',
          'Equip gear that boosts Immunity',
          'Plan your route before entering Rot zones'
        ]
      }
    ],
    items: [
      { name: 'Moonveil Katana', type: 'Weapon', description: 'Powerful katana with magic scaling and a unique weapon art.', location: 'Gael Tunnel', requirements: '12 STR, 18 DEX, 23 INT' },
      { name: 'Preserving Boluses', type: 'Consumable', description: 'Cures Scarlet Rot.', location: 'Crafted or found in Caelid', usage: 'Use to cure Scarlet Rot buildup' },
      { name: 'Rotten Crystal Sword', type: 'Weapon', description: 'Sword that inflicts Scarlet Rot.', location: 'Elphael, Brace of the Haligtree', requirements: '13 STR, 10 DEX, 15 INT' }
    ],
    enemies: [
      { name: 'Decaying Ekzykes', type: 'Dragon Boss', health: 'Very High', difficulty: 'Hard', attacks: ['Scarlet Rot breath', 'Tail swipe', 'Charge'], strategy: 'Stay on Torrent, attack the legs, and avoid Rot breath.', drops: 'Dragon Heart' }
    ],
    npcs: [
      { name: 'Gowry', location: 'Gowry\'s Shack', description: 'Questgiver for Millicent\'s questline.', questline: 'Millicent\'s Questline' }
    ],
    nextSection: 'radahn',
    tips: [
      'Caelid is optional but has great loot',
      'Scarlet Rot is deadly—prepare before entering',
      'Use Torrent for mobility and safety',
      'Don\'t fight dragons until you\'re ready',
      'Explore Sellia for unique rewards'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/caelid-map.jpg'
  },

  // Starscourge Radahn Festival
  'radahn': {
    id: 'radahn',
    title: 'Starscourge Radahn Festival',
    subtitle: 'Legendary Boss Battle in Redmane Castle',
    description: 'The Radahn Festival is a unique event culminating in one of the most epic boss fights in Elden Ring. Prepare for a multi-phase battle with allies and chaos.',
    estimatedTime: '1-2 hours',
    difficulty: 'Very Hard',
    objectives: [
      'Trigger the Radahn Festival',
      'Defeat Starscourge Radahn',
      'Unlock new areas in Caelid',
      'Advance key questlines',
      'Collect legendary rewards'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Triggering the Festival',
        description: 'The festival begins after progressing Ranni\'s or Blaidd\'s quest, or by visiting Altus Plateau.',
        details: [
          'Redmane Castle becomes accessible',
          'NPCs gather for the festival',
          'Talk to the announcer to begin',
          'You can summon multiple NPCs for the fight',
          'Prepare with ranged and healing items'
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
        step: 2,
        title: 'The Radahn Fight',
        description: 'Radahn is a massive boss with devastating attacks and multiple phases.',
        details: [
          'Phase 1: Arrow barrages and melee attacks',
          'Phase 2: Meteor crash and gravity magic',
          'Summon allies throughout the fight',
          'Use Torrent for mobility',
          'Arena is huge—use space to your advantage'
        ],
        tips: [
          'Stay on Torrent for most of the fight',
          'Summon allies as soon as possible',
          'Watch for gravity magic and meteors',
          'Attack after Radahn\'s combos',
          'Keep moving to avoid arrows and magic'
        ]
      }
    ],
    items: [
      { name: 'Remembrance of the Starscourge', type: 'Key Item', description: 'Can be exchanged for Radahn\'s weapons or spells.', location: 'Dropped by Radahn', usage: 'Take to the Roundtable Hold to exchange' },
      { name: 'Radahn\'s Great Rune', type: 'Key Item', description: 'Great Rune that boosts HP, FP, and Stamina.', location: 'Dropped by Radahn', usage: 'Activate at Divine Tower of Caelid' }
    ],
    enemies: [
      { name: 'Starscourge Radahn', type: 'Legendary Boss', health: 'Extremely High', difficulty: 'Very Hard', attacks: ['Arrow barrages', 'Gravity magic', 'Meteor crash', 'Melee combos'], strategy: 'Use Torrent, summon allies, and attack after his combos.', drops: 'Remembrance of the Starscourge, Radahn\'s Great Rune' }
    ],
    npcs: [
      { name: 'Blaidd', location: 'Redmane Castle', description: 'Can be summoned for the Radahn fight.', questline: 'Ranni\'s Questline' }
    ],
    nextSection: 'altus-plateau',
    tips: [
      'Radahn is one of the hardest bosses—don\'t get discouraged',
      'Summon all available help',
      'Use Torrent for dodging and mobility',
      'Watch for the meteor phase',
      'Victory unlocks new areas and questlines'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/radahn-map.jpg'
  },

  // Altus Plateau
  'altus-plateau': {
    id: 'altus-plateau',
    title: 'Altus Plateau Exploration',
    subtitle: 'Golden Fields, Windmills, and Leyndell Approach',
    description: 'Altus Plateau is a golden, open region leading to the capital. It\'s filled with new dungeons, powerful enemies, and important story events.',
    estimatedTime: '3-6 hours',
    difficulty: 'Advanced',
    objectives: [
      'Reach Altus Plateau via Dectus Lift or Ruin-Strewn Precipice',
      'Explore new dungeons and caves',
      'Defeat the Godskin Apostle',
      'Find the path to Leyndell',
      'Meet new NPCs and questlines'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Reaching Altus Plateau',
        description: 'You can reach Altus Plateau by collecting both halves of the Dectus Medallion or by climbing through the Ruin-Strewn Precipice.',
        details: [
          'Dectus Medallion halves: Fort Haight (Limgrave) and Fort Faroth (Caelid)',
          'Ruin-Strewn Precipice: Boss fight with Magma Wyrm Makar',
          'Both routes lead to the same region',
          'First Site of Grace: Grand Lift of Dectus',
          'Golden Seed and Sacred Tear locations nearby'
        ],
        tips: [
          'The lift route is easier for most builds',
          'The Precipice route is more challenging but rewarding',
          'Explore the plateau for powerful loot',
          'Watch for new enemy types',
          'Prepare for the approach to Leyndell'
        ]
      },
      {
        step: 2,
        title: 'Key Locations and Bosses',
        description: 'Altus Plateau is home to several dungeons, Evergaols, and field bosses.',
        details: [
          'Windmill Village: Godskin Apostle boss',
          'Shaded Castle: Poison and loot',
          'Minor Erdtrees: Valuable rewards',
          'Road to Leyndell: Heavily guarded',
          'NPCs: Goldmask, Brother Corhyn, and more'
        ],
        tips: [
          'Godskin Apostle is weak to bleed and frost',
          'Windmill Village is a must-visit for loot',
          'Shaded Castle is challenging but rewarding',
          'Talk to all NPCs for quest progress',
          'Prepare for the capital\'s defenses'
        ]
      }
    ],
    items: [
      { name: 'Dectus Medallion', type: 'Key Item', description: 'Required to operate the Grand Lift of Dectus.', location: 'Fort Haight & Fort Faroth', usage: 'Use at the Grand Lift of Dectus' },
      { name: 'Godskin Peeler', type: 'Weapon', description: 'Twinblade dropped by Godskin Apostle.', location: 'Windmill Village', requirements: '17 STR, 22 DEX' }
    ],
    enemies: [
      { name: 'Godskin Apostle', type: 'Boss', health: 'High', difficulty: 'Hard', attacks: ['Black Flame magic', 'Twinblade combos'], strategy: 'Dodge his magic, punish after combos.', drops: 'Godskin Peeler, Runes' }
    ],
    npcs: [
      { name: 'Goldmask', location: 'Altus Plateau', description: 'Silent NPC, part of Brother Corhyn\'s questline.', questline: 'Age of Order Ending' }
    ],
    nextSection: 'leyndell',
    tips: [
      'Altus Plateau is a major step up in difficulty',
      'Explore thoroughly for loot and upgrades',
      'Prepare for the capital\'s challenges',
      'Talk to all NPCs for quest progress',
      'Don\'t rush to Leyndell—enjoy the region'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/altus-map.jpg'
  },

  // Leyndell, Royal Capital
  'leyndell': {
    id: 'leyndell',
    title: 'Leyndell, Royal Capital',
    subtitle: 'The Capital City - Main Story Climax',
    description: 'Leyndell is a sprawling, multi-level city filled with powerful enemies, secrets, and the next major boss. This is a huge milestone in your journey.',
    estimatedTime: '4-8 hours',
    difficulty: 'Very Hard',
    objectives: [
      'Navigate the capital\'s streets and rooftops',
      'Defeat Morgott, the Omen King',
      'Find the Erdtree Sanctuary',
      'Unlock the path to the Mountaintops',
      'Discover legendary loot and secrets'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Entering Leyndell',
        description: 'The capital is heavily guarded and filled with tough enemies. Take your time and explore every level.',
        details: [
          'Main gate is guarded by a Draconic Tree Sentinel',
          'Multiple Sites of Grace throughout the city',
          'Rooftop and sewer areas hide secrets',
          'Erdtree Sanctuary is your main goal',
          'Prepare for a major boss fight'
        ],
        tips: [
          'Draconic Tree Sentinel is optional but drops a key item',
          'Explore rooftops for loot and shortcuts',
          'Sewers hide quest NPCs and items',
          'Rest at every Site of Grace you find',
          'Prepare for Morgott\'s boss fight'
        ]
      },
      {
        step: 2,
        title: 'Morgott, the Omen King',
        description: 'Morgott is the main boss of Leyndell and a major story milestone.',
        details: [
          'Two-phase boss fight',
          'Uses holy and physical attacks',
          'Summons swords and spears',
          'Arena is large with obstacles',
          'Defeating him unlocks the Mountaintops'
        ],
        tips: [
          'Bring holy resistance if possible',
          'Watch for his sword rain attack',
          'Punish after his combos',
          'Use the arena\'s pillars for cover',
          'Don\'t get greedy—patience is key'
        ]
      }
    ],
    items: [
      { name: 'Morgott\'s Great Rune', type: 'Key Item', description: 'Great Rune dropped by Morgott.', location: 'Dropped by Morgott', usage: 'Activate at Divine Tower of East Altus' },
      { name: 'Remembrance of the Omen King', type: 'Key Item', description: 'Can be exchanged for Morgott\'s weapons or spells.', location: 'Dropped by Morgott', usage: 'Take to the Roundtable Hold to exchange' }
    ],
    enemies: [
      { name: 'Morgott, the Omen King', type: 'Boss', health: 'Very High', difficulty: 'Very Hard', attacks: ['Holy sword rain', 'Summoned spears', 'Physical combos'], strategy: 'Use cover, dodge his combos, and punish after attacks.', drops: 'Morgott\'s Great Rune, Remembrance of the Omen King' }
    ],
    npcs: [
      { name: 'Melina', location: 'Erdtree Sanctuary', description: 'Appears after Morgott\'s defeat.', questline: 'Main Story' }
    ],
    nextSection: 'mountain-tops',
    tips: [
      'Leyndell is a massive, multi-level city—explore thoroughly',
      'Morgott is a major skill check—don\'t get discouraged',
      'Use cover in the boss arena',
      'Talk to all NPCs for quest progress',
      'Prepare for the Mountaintops after victory'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/leyndell-map.jpg'
  },

  // Mountaintops of the Giants
  'mountain-tops': {
    id: 'mountain-tops',
    title: 'Mountaintops of the Giants',
    subtitle: 'Frozen Peaks and Ancient Giants',
    description: 'The Mountaintops of the Giants is a harsh, frozen region filled with powerful enemies, ancient giants, and the path to the Fire Giant. This area represents the final stretch of the main story.',
    estimatedTime: '3-5 hours',
    difficulty: 'Very Hard',
    objectives: [
      'Navigate the frozen peaks',
      'Defeat the Fire Giant',
      'Unlock the path to Crumbling Farum Azula',
      'Collect legendary loot',
      'Complete key questlines'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Reaching the Mountaintops',
        description: 'After defeating Morgott, you\'ll gain access to the Mountaintops via the Forge of the Giants.',
        details: [
          'Accessible after defeating Morgott',
          'Harsh, frozen environment',
          'Powerful enemies throughout',
          'Ancient giants roam the area',
          'Fire Giant guards the forge'
        ],
        tips: [
          'Bring cold resistance gear',
          'Use Torrent for mobility',
          'Watch for giant enemies',
          'Explore thoroughly for loot',
          'Prepare for the Fire Giant fight'
        ]
      },
      {
        step: 2,
        title: 'The Fire Giant',
        description: 'The Fire Giant is a massive boss that guards the Forge of the Giants.',
        details: [
          'Two-phase boss fight',
          'Uses fire and physical attacks',
          'Arena is large with obstacles',
          'Phase two introduces new mechanics',
          'Defeating him unlocks the forge'
        ],
        tips: [
          'Stay mobile to avoid fire attacks',
          'Attack his weak points',
          'Use the arena space effectively',
          'Watch for his rolling attacks',
          'Don\'t get greedy with attacks'
        ]
      }
    ],
    items: [
      { name: 'Remembrance of the Fire Giant', type: 'Key Item', description: 'Can be exchanged for the Giant\'s Red Braid or Burn, O Flame!', location: 'Dropped by Fire Giant', usage: 'Take to the Roundtable Hold to exchange' },
      { name: 'Giant\'s Red Braid', type: 'Weapon', description: 'Whip weapon with fire damage.', location: 'Exchange Remembrance of the Fire Giant', requirements: '18 STR, 12 DEX' }
    ],
    enemies: [
      { name: 'Fire Giant', type: 'Boss', health: 'Extremely High', difficulty: 'Very Hard', attacks: ['Fire attacks', 'Rolling attacks', 'Giant stomps'], strategy: 'Stay mobile, attack weak points, and use the arena effectively.', drops: 'Remembrance of the Fire Giant' }
    ],
    npcs: [
      { name: 'Melina', location: 'Forge of the Giants', description: 'Appears to sacrifice herself at the forge.', questline: 'Main Story' }
    ],
    nextSection: 'fire-giant',
    tips: [
      'The Mountaintops are the final main story area',
      'The Fire Giant is a major challenge',
      'Explore thoroughly before the boss fight',
      'Prepare for the endgame after victory',
      'Don\'t rush—enjoy the atmosphere'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/mountain-tops-map.jpg'
  },

  // Fire Giant Boss Fight
  'fire-giant': {
    id: 'fire-giant',
    title: 'Fire Giant Boss Fight',
    subtitle: 'Guardian of the Forge - Final Main Story Boss',
    description: 'The Fire Giant is the final boss of the main story path, guarding the Forge of the Giants. This massive battle will test all your skills.',
    estimatedTime: '30-90 minutes',
    difficulty: 'Very Hard',
    objectives: [
      'Defeat the Fire Giant',
      'Unlock the Forge of the Giants',
      'Progress the main story',
      'Collect the remembrance',
      'Prepare for the endgame'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Understanding the Fight',
        description: 'The Fire Giant is a massive boss with two distinct phases and unique mechanics.',
        details: [
          'Phase one: Standard giant attacks',
          'Phase two: Enhanced fire abilities',
          'Large arena with obstacles',
          'Weak points on his body',
          'Requires patience and timing'
        ],
        tips: [
          'Study his attack patterns in phase one',
          'Stay mobile to avoid fire attacks',
          'Attack his weak points when possible',
          'Use the arena space effectively',
          'Don\'t get greedy with attacks'
        ]
      },
      {
        step: 2,
        title: 'Phase Two Strategy',
        description: 'Phase two introduces new fire mechanics and requires different strategies.',
        details: [
          'Enhanced fire attacks',
          'New rolling mechanics',
          'More aggressive behavior',
          'Larger attack radius',
          'Requires careful positioning'
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
    items: [
      { name: 'Remembrance of the Fire Giant', type: 'Key Item', description: 'Can be exchanged for powerful items.', location: 'Dropped by Fire Giant', usage: 'Take to the Roundtable Hold to exchange' },
      { name: 'Burn, O Flame!', type: 'Incantation', description: 'Powerful fire incantation.', location: 'Exchange Remembrance of the Fire Giant', requirements: '27 Faith' }
    ],
    enemies: [
      { name: 'Fire Giant', type: 'Boss', health: 'Extremely High', difficulty: 'Very Hard', attacks: ['Fire attacks', 'Rolling attacks', 'Giant stomps', 'Fire breath'], strategy: 'Stay mobile, attack weak points, and use the arena effectively.', drops: 'Remembrance of the Fire Giant' }
    ],
    npcs: [
      { name: 'Melina', location: 'Forge of the Giants', description: 'Sacrifices herself to burn the Erdtree.', questline: 'Main Story' }
    ],
    nextSection: 'crumbling-farum',
    tips: [
      'The Fire Giant is the final main story boss',
      'Victory unlocks the endgame areas',
      'Don\'t get discouraged—this is a major challenge',
      'Use all your skills and knowledge',
      'Prepare for the final stretch after victory'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/fire-giant-map.jpg'
  },

  // Crumbling Farum Azula
  'crumbling-farum': {
    id: 'crumbling-farum',
    title: 'Crumbling Farum Azula',
    subtitle: 'Ancient Dragon City - Endgame Dungeon',
    description: 'Crumbling Farum Azula is an ancient dragon city floating in the sky. This endgame area is filled with powerful enemies and the final boss before the end.',
    estimatedTime: '2-4 hours',
    difficulty: 'Expert',
    objectives: [
      'Navigate the floating city',
      'Defeat Maliketh, the Black Blade',
      'Collect legendary loot',
      'Unlock the final path',
      'Prepare for the end'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Entering Farum Azula',
        description: 'After the Fire Giant, you\'ll be transported to this ancient dragon city.',
        details: [
          'Floating city in the sky',
          'Powerful dragon enemies',
          'Ancient architecture',
          'Multiple levels and areas',
          'Maliketh guards the end'
        ],
        tips: [
          'Explore thoroughly for loot',
          'Watch for dragon attacks',
          'Use the environment to your advantage',
          'Prepare for Maliketh\'s fight',
          'Don\'t rush—enjoy the atmosphere'
        ]
      },
      {
        step: 2,
        title: 'Maliketh, the Black Blade',
        description: 'Maliketh is the final boss of Farum Azula and a major story milestone.',
        details: [
          'Two-phase boss fight',
          'Uses death magic and black flame',
          'Extremely fast and aggressive',
          'Requires perfect timing',
          'Defeating him unlocks the final path'
        ],
        tips: [
          'Learn his attack patterns thoroughly',
          'Use the Blasphemous Claw if available',
          'Stay mobile and dodge precisely',
          'Don\'t get greedy with attacks',
          'This is one of the hardest bosses'
        ]
      }
    ],
    items: [
      { name: 'Remembrance of the Black Blade', type: 'Key Item', description: 'Can be exchanged for Maliketh\'s weapons.', location: 'Dropped by Maliketh', usage: 'Take to the Roundtable Hold to exchange' },
      { name: 'Maliketh\'s Black Blade', type: 'Weapon', description: 'Powerful greatsword with death magic.', location: 'Exchange Remembrance of the Black Blade', requirements: '16 STR, 20 DEX, 18 FTH' }
    ],
    enemies: [
      { name: 'Maliketh, the Black Blade', type: 'Boss', health: 'High', difficulty: 'Expert', attacks: ['Death magic', 'Black flame attacks', 'Fast combos'], strategy: 'Learn his patterns, use the Blasphemous Claw, and stay mobile.', drops: 'Remembrance of the Black Blade' }
    ],
    npcs: [
      { name: 'Bernahl', location: 'Farum Azula', description: 'Can be summoned for the Maliketh fight.', questline: 'Recusant Questline' }
    ],
    nextSection: 'final-bosses',
    tips: [
      'Farum Azula is the final endgame area',
      'Maliketh is extremely challenging',
      'Explore thoroughly for loot',
      'Prepare for the final bosses',
      'Don\'t rush—this is the endgame'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/farum-azula-map.jpg'
  },

  // Final Boss Encounters
  'final-bosses': {
    id: 'final-bosses',
    title: 'Final Boss Encounters',
    subtitle: 'Elden Beast and Radagon - The End',
    description: 'The final bosses of Elden Ring: Radagon of the Golden Order and the Elden Beast. These battles will determine the fate of the Lands Between.',
    estimatedTime: '1-3 hours',
    difficulty: 'Expert',
    objectives: [
      'Defeat Radagon of the Golden Order',
      'Defeat the Elden Beast',
      'Choose your ending',
      'Complete the main story',
      'Unlock New Game Plus'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Radagon of the Golden Order',
        description: 'Radagon is the first of the final bosses, representing the Golden Order itself.',
        details: [
          'Uses holy magic and physical attacks',
          'Extremely fast and aggressive',
          'Can teleport and create illusions',
          'Requires perfect timing and reflexes',
          'No rest between Radagon and Elden Beast'
        ],
        tips: [
          'Learn his attack patterns thoroughly',
          'Stay mobile and dodge precisely',
          'Use holy resistance if possible',
          'Don\'t waste healing items',
          'This is the ultimate skill test'
        ]
      },
      {
        step: 2,
        title: 'The Elden Beast',
        description: 'The Elden Beast is the final boss, a massive cosmic entity.',
        details: [
          'Massive arena with water',
          'Uses cosmic magic and holy attacks',
          'Can fly and teleport',
          'Requires different strategies',
          'Victory determines your ending'
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
    items: [
      { name: 'Elden Remembrance', type: 'Key Item', description: 'Can be exchanged for Radagon\'s weapons.', location: 'Dropped by Elden Beast', usage: 'Take to the Roundtable Hold to exchange' },
      { name: 'Radagon\'s Soreseal', type: 'Talisman', description: 'Increases attributes but increases damage taken.', location: 'Fort Faroth', usage: 'Equip to boost attributes' }
    ],
    enemies: [
      { name: 'Radagon of the Golden Order', type: 'Boss', health: 'High', difficulty: 'Expert', attacks: ['Holy magic', 'Physical combos', 'Teleportation'], strategy: 'Learn patterns, stay mobile, and use perfect timing.', drops: 'Part of Elden Remembrance' },
      { name: 'Elden Beast', type: 'Final Boss', health: 'Very High', difficulty: 'Expert', attacks: ['Cosmic magic', 'Holy attacks', 'Flying attacks'], strategy: 'Use Torrent, stay mobile, and attack during vulnerable periods.', drops: 'Elden Remembrance' }
    ],
    npcs: [
      { name: 'Ranni', location: 'After ending', description: 'Appears for the Age of Stars ending.', questline: 'Age of Stars Ending' }
    ],
    nextSection: 'shadow-entry',
    tips: [
      'These are the final bosses—don\'t get discouraged',
      'Learn their patterns thoroughly',
      'Use all your skills and knowledge',
      'Victory unlocks New Game Plus',
      'Choose your ending carefully'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/final-bosses-map.jpg'
  },

  // Shadow of the Erdtree DLC Sections
  'shadow-entry': {
    id: 'shadow-entry',
    title: 'Entering the Shadow Realm',
    subtitle: 'Shadow of the Erdtree DLC - New Adventure Begins',
    description: 'The Shadow of the Erdtree DLC introduces a new realm filled with powerful enemies, unique mechanics, and the story of Messmer the Impaler.',
    estimatedTime: '2-4 hours',
    difficulty: 'Expert',
    objectives: [
      'Access the Shadow Realm',
      'Meet new NPCs and mechanics',
      'Explore the Gravesite Plain',
      'Understand the new systems',
      'Prepare for the challenges ahead'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Accessing the DLC',
        description: 'To enter the Shadow Realm, you need to defeat Mohg, Lord of Blood and interact with the withered arm in his arena.',
        details: [
          'Requires defeating Mohg, Lord of Blood',
          'Interact with the withered arm in his arena',
          'New realm with unique mechanics',
          'Scadu Altus and Gravesite Plain areas',
          'New NPCs and questlines'
        ],
        tips: [
          'Make sure you\'re properly leveled (150+)',
          'Bring your best equipment',
          'The DLC is much harder than the base game',
          'Explore thoroughly for new items',
          'Talk to all NPCs for quest progress'
        ]
      },
      {
        step: 2,
        title: 'Understanding New Mechanics',
        description: 'The DLC introduces several new mechanics including Scadu Altus and new weapon types.',
        details: [
          'Scadu Altus: New upgrade system',
          'New weapon types and ashes of war',
          'Unique enemies and bosses',
          'New status effects and mechanics',
          'Different progression system'
        ],
        tips: [
          'Learn the Scadu Altus system early',
          'Experiment with new weapons',
          'Watch for new enemy types',
          'Don\'t rush—take time to learn',
          'The difficulty spike is significant'
        ]
      }
    ],
    items: [
      { name: 'Scadu Altus', type: 'Upgrade Material', description: 'New upgrade material for DLC weapons.', location: 'Throughout the Shadow Realm', usage: 'Use to upgrade DLC weapons' },
      { name: 'Shadow Realm Map', type: 'Key Item', description: 'Map of the new realm.', location: 'Gravesite Plain', usage: 'Reveals the Shadow Realm map' }
    ],
    enemies: [
      { name: 'Shadow Realm Enemies', type: 'Various', health: 'High', difficulty: 'Expert', attacks: ['Various new attacks'], strategy: 'Learn new patterns and adapt your strategy.', drops: 'Scadu Altus, new weapons' }
    ],
    npcs: [
      { name: 'Needle Knight Leda', location: 'Gravesite Plain', description: 'Main NPC guide for the DLC.', questline: 'Shadow of the Erdtree Main Quest' }
    ],
    nextSection: 'gravesite-plain',
    tips: [
      'The DLC is much harder than the base game',
      'Take time to learn new mechanics',
      'Explore thoroughly for new items',
      'Don\'t rush—enjoy the new content',
      'Prepare for significant difficulty spikes'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/shadow-entry-map.jpg'
  },

  'gravesite-plain': {
    id: 'gravesite-plain',
    title: 'Gravesite Plain Exploration',
    subtitle: 'First Area of the Shadow Realm',
    description: 'The Gravesite Plain is the first major area of the Shadow Realm, filled with new enemies, mechanics, and the path to deeper challenges.',
    estimatedTime: '3-6 hours',
    difficulty: 'Expert',
    objectives: [
      'Explore the Gravesite Plain',
      'Find Sites of Grace',
      'Collect Scadu Altus',
      'Meet key NPCs',
      'Prepare for Scadu Altus Plateau'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Initial Exploration',
        description: 'The Gravesite Plain introduces you to the new mechanics and enemies of the Shadow Realm.',
        details: [
          'Large open area with new enemies',
          'Multiple Sites of Grace to discover',
          'Scadu Altus scattered throughout',
          'New weapon types to find',
          'Key NPCs and questlines'
        ],
        tips: [
          'Take your time to explore thoroughly',
          'Collect all Scadu Altus you find',
          'Talk to all NPCs for quest progress',
          'Don\'t rush—learn the new mechanics',
          'Mark important locations on your map'
        ]
      },
      {
        step: 2,
        title: 'Key Locations and Bosses',
        description: 'The Gravesite Plain contains several important locations and optional bosses.',
        details: [
          'Belurat, Tower Settlement: Major dungeon',
          'Castle Ensis: Important location',
          'Various field bosses and mini-bosses',
          'Scadu Altus farming locations',
          'NPC questline locations'
        ],
        tips: [
          'Belurat is a major challenge—prepare well',
          'Castle Ensis contains important loot',
          'Farm Scadu Altus for weapon upgrades',
          'Complete NPC questlines for rewards',
          'Don\'t skip optional content'
        ]
      }
    ],
    items: [
      { name: 'Scadu Altus', type: 'Upgrade Material', description: 'Primary upgrade material for DLC weapons.', location: 'Throughout Gravesite Plain', usage: 'Upgrade DLC weapons' },
      { name: 'New DLC Weapons', type: 'Weapons', description: 'Various new weapon types with unique abilities.', location: 'Throughout the area', usage: 'Experiment with new builds' }
    ],
    enemies: [
      { name: 'Gravesite Plain Bosses', type: 'Various', health: 'High', difficulty: 'Expert', attacks: ['New attack patterns'], strategy: 'Learn new patterns and adapt your strategy.', drops: 'Scadu Altus, new weapons' }
    ],
    npcs: [
      { name: 'Needle Knight Leda', location: 'Gravesite Plain', description: 'Main quest NPC for the DLC.', questline: 'Shadow of the Erdtree Main Quest' }
    ],
    nextSection: 'scadu-altus',
    tips: [
      'The Gravesite Plain is your introduction to the DLC',
      'Take time to learn new mechanics',
      'Collect all Scadu Altus for upgrades',
      'Complete NPC questlines for rewards',
      'Prepare for the challenges ahead'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/gravesite-plain-map.jpg'
  },

  'scadu-altus': {
    id: 'scadu-altus',
    title: 'Scadu Altus Plateau',
    subtitle: 'Advanced DLC Area - New Challenges',
    description: 'The Scadu Altus Plateau is a more advanced area of the Shadow Realm, featuring tougher enemies and the path to the Shadow Keep.',
    estimatedTime: '4-8 hours',
    difficulty: 'Expert',
    objectives: [
      'Navigate the Scadu Altus Plateau',
      'Find the Shadow Keep',
      'Defeat advanced bosses',
      'Collect powerful loot',
      'Prepare for Messmer'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Reaching Scadu Altus',
        description: 'The Scadu Altus Plateau is accessible after exploring the Gravesite Plain.',
        details: [
          'More challenging enemies',
          'Advanced boss encounters',
          'Shadow Keep location',
          'Powerful loot and upgrades',
          'Path to Messmer the Impaler'
        ],
        tips: [
          'Ensure your weapons are upgraded with Scadu Altus',
          'Bring your best equipment',
          'Watch for new enemy types',
          'Explore thoroughly for loot',
          'Prepare for the Shadow Keep'
        ]
      },
      {
        step: 2,
        title: 'Shadow Keep Approach',
        description: 'The Shadow Keep is the main dungeon of this area and contains major challenges.',
        details: [
          'Large multi-level dungeon',
          'Powerful enemies throughout',
          'Important story elements',
          'Valuable loot and upgrades',
          'Path to Messmer'
        ],
        tips: [
          'Take your time to explore thoroughly',
          'Watch for ambushes and traps',
          'Collect all loot and upgrades',
          'Prepare for the final boss',
          'Don\'t rush—enjoy the challenge'
        ]
      }
    ],
    items: [
      { name: 'Advanced Scadu Altus', type: 'Upgrade Material', description: 'Higher tier upgrade material.', location: 'Scadu Altus Plateau', usage: 'Upgrade weapons to higher levels' },
      { name: 'Shadow Keep Loot', type: 'Various', description: 'Powerful weapons and armor from the Shadow Keep.', location: 'Shadow Keep', usage: 'Equip for better stats' }
    ],
    enemies: [
      { name: 'Scadu Altus Bosses', type: 'Various', health: 'Very High', difficulty: 'Expert', attacks: ['Advanced patterns'], strategy: 'Use upgraded weapons and learn patterns.', drops: 'Advanced Scadu Altus, powerful loot' }
    ],
    npcs: [
      { name: 'Shadow Realm NPCs', location: 'Scadu Altus Plateau', description: 'Various NPCs with questlines.', questline: 'Shadow of the Erdtree Quests' }
    ],
    nextSection: 'shadow-keep',
    tips: [
      'Scadu Altus Plateau is more challenging than Gravesite Plain',
      'Ensure your weapons are fully upgraded',
      'Explore thoroughly for loot and upgrades',
      'Prepare for the Shadow Keep challenges',
      'Don\'t rush—take time to master the area'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/scadu-altus-map.jpg'
  },

  'shadow-keep': {
    id: 'shadow-keep',
    title: 'Shadow Keep Infiltration',
    subtitle: 'Main DLC Dungeon - Messmer\'s Domain',
    description: 'The Shadow Keep is the main dungeon of the DLC, filled with powerful enemies, valuable loot, and the path to Messmer the Impaler.',
    estimatedTime: '3-5 hours',
    difficulty: 'Expert',
    objectives: [
      'Navigate the Shadow Keep',
      'Defeat powerful enemies',
      'Collect legendary loot',
      'Find the path to Messmer',
      'Prepare for the final challenge'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Entering the Shadow Keep',
        description: 'The Shadow Keep is a massive, multi-level dungeon with complex navigation.',
        details: [
          'Multiple levels and areas',
          'Powerful enemies throughout',
          'Complex navigation required',
          'Valuable loot and upgrades',
          'Path to Messmer the Impaler'
        ],
        tips: [
          'Take your time to explore thoroughly',
          'Watch for ambushes and traps',
          'Collect all loot and upgrades',
          'Mark important locations on your map',
          'Prepare for the final boss'
        ]
      },
      {
        step: 2,
        title: 'Navigating the Keep',
        description: 'The Shadow Keep requires careful navigation and exploration.',
        details: [
          'Multiple paths and shortcuts',
          'Hidden areas and secrets',
          'Powerful mini-bosses',
          'Valuable upgrade materials',
          'Story revelations'
        ],
        tips: [
          'Explore every corner for secrets',
          'Defeat mini-bosses for rewards',
          'Find shortcuts to make navigation easier',
          'Collect all upgrade materials',
          'Prepare for Messmer\'s fight'
        ]
      }
    ],
    items: [
      { name: 'Shadow Keep Weapons', type: 'Weapons', description: 'Powerful weapons unique to the DLC.', location: 'Shadow Keep', usage: 'Equip for better combat performance' },
      { name: 'Legendary Scadu Altus', type: 'Upgrade Material', description: 'Highest tier upgrade material.', location: 'Shadow Keep', usage: 'Upgrade weapons to maximum level' }
    ],
    enemies: [
      { name: 'Shadow Keep Bosses', type: 'Various', health: 'Very High', difficulty: 'Expert', attacks: ['Complex patterns'], strategy: 'Learn patterns, use upgraded weapons, and stay patient.', drops: 'Legendary loot, Scadu Altus' }
    ],
    npcs: [
      { name: 'Shadow Keep NPCs', location: 'Shadow Keep', description: 'NPCs with important questlines.', questline: 'Shadow of the Erdtree Quests' }
    ],
    nextSection: 'messmer',
    tips: [
      'The Shadow Keep is the main DLC dungeon',
      'Explore thoroughly for all loot and upgrades',
      'Prepare for Messmer\'s challenge',
      'Don\'t rush—enjoy the exploration',
      'Use all your skills and knowledge'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/shadow-keep-map.jpg'
  },

  'messmer': {
    id: 'messmer',
    title: 'Messmer the Impaler',
    subtitle: 'Main DLC Boss - The Impaler\'s Challenge',
    description: 'Messmer the Impaler is the main boss of the Shadow of the Erdtree DLC, representing the ultimate challenge of the new content.',
    estimatedTime: '1-3 hours',
    difficulty: 'Expert',
    objectives: [
      'Defeat Messmer the Impaler',
      'Learn his complex mechanics',
      'Master the fight patterns',
      'Collect the remembrance',
      'Complete the DLC story'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Understanding Messmer',
        description: 'Messmer is a complex boss with multiple phases and unique mechanics.',
        details: [
          'Multiple phase boss fight',
          'Uses fire and impaling attacks',
          'Complex attack patterns',
          'Requires perfect timing',
          'One of the hardest bosses in the game'
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
        step: 2,
        title: 'Advanced Strategies',
        description: 'Advanced players can use specific strategies to make the fight more manageable.',
        details: [
          'Use upgraded DLC weapons',
          'Master the timing of his attacks',
          'Use the arena space effectively',
          'Watch for phase transitions',
          'Stay patient and focused'
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
    items: [
      { name: 'Remembrance of the Impaler', type: 'Key Item', description: 'Can be exchanged for Messmer\'s weapons.', location: 'Dropped by Messmer', usage: 'Take to the Roundtable Hold to exchange' },
      { name: 'Messmer\'s Impaling Spear', type: 'Weapon', description: 'Powerful spear with unique abilities.', location: 'Exchange Remembrance of the Impaler', requirements: 'Varies' }
    ],
    enemies: [
      { name: 'Messmer the Impaler', type: 'Main DLC Boss', health: 'Extremely High', difficulty: 'Expert', attacks: ['Fire attacks', 'Impaling strikes', 'Complex combos'], strategy: 'Learn patterns, use upgraded weapons, and maintain perfect timing.', drops: 'Remembrance of the Impaler' }
    ],
    npcs: [
      { name: 'DLC NPCs', location: 'After Messmer', description: 'NPCs appear after defeating Messmer.', questline: 'Shadow of the Erdtree Conclusion' }
    ],
    nextSection: 'final-shadow',
    tips: [
      'Messmer is the ultimate DLC challenge',
      'Don\'t get discouraged—this is extremely difficult',
      'Use all your skills and knowledge',
      'Victory represents mastery of the DLC',
      'Prepare for the final DLC content'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/messmer-map.jpg'
  },

  'final-shadow': {
    id: 'final-shadow',
    title: 'Final Shadow Bosses',
    subtitle: 'DLC Conclusion - Ultimate Challenges',
    description: 'The final bosses of the Shadow of the Erdtree DLC represent the ultimate challenges and conclusion of the expansion.',
    estimatedTime: '2-4 hours',
    difficulty: 'Expert',
    objectives: [
      'Defeat the final DLC bosses',
      'Complete the DLC story',
      'Collect final rewards',
      'Unlock DLC endings',
      'Master the Shadow Realm'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Final DLC Challenges',
        description: 'The final bosses of the DLC represent the ultimate test of your skills.',
        details: [
          'Multiple challenging boss fights',
          'Complex mechanics and patterns',
          'Requires mastery of DLC systems',
          'Valuable rewards and endings',
          'Conclusion of the DLC story'
        ],
        tips: [
          'Use all your upgraded DLC equipment',
          'Master the new mechanics',
          'Learn boss patterns thoroughly',
          'Don\'t rush—take your time',
          'This is the ultimate challenge'
        ]
      },
      {
        step: 2,
        title: 'DLC Conclusion',
        description: 'Victory in the final battles concludes the Shadow of the Erdtree story.',
        details: [
          'Story revelations and endings',
          'Valuable rewards and loot',
          'New game plus considerations',
          'Completion achievements',
          'Return to the main game'
        ],
        tips: [
          'Enjoy the story conclusion',
          'Collect all final rewards',
          'Consider your New Game Plus options',
          'Reflect on your journey',
          'Prepare for future challenges'
        ]
      }
    ],
    items: [
      { name: 'Final DLC Rewards', type: 'Various', description: 'Legendary weapons, armor, and items from the DLC.', location: 'Final DLC areas', usage: 'Use for New Game Plus and future playthroughs' },
      { name: 'DLC Completion Rewards', type: 'Achievements', description: 'Completion achievements and recognition.', location: 'After defeating final bosses', usage: 'Proof of DLC completion' }
    ],
    enemies: [
      { name: 'Final DLC Bosses', type: 'Various', health: 'Extremely High', difficulty: 'Expert', attacks: ['Ultimate patterns'], strategy: 'Use all your skills, upgraded equipment, and perfect timing.', drops: 'Legendary rewards' }
    ],
    npcs: [
      { name: 'DLC Conclusion NPCs', location: 'After final bosses', description: 'NPCs appear for the DLC conclusion.', questline: 'Shadow of the Erdtree Finale' }
    ],
    nextSection: null,
    tips: [
      'These are the ultimate DLC challenges',
      'Use all your skills and knowledge',
      'Enjoy the story conclusion',
      'Prepare for New Game Plus',
      'Congratulations on completing the DLC!'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/final-shadow-map.jpg'
  },

  // Morgott, the Omen King
  'morgott': {
    id: 'morgott',
    title: 'Morgott, the Omen King',
    subtitle: 'Leyndell Boss - The Omen King\'s Challenge',
    description: 'Morgott, the Omen King is the main boss of Leyndell, Royal Capital. This challenging fight represents a major milestone in your journey to become Elden Lord.',
    estimatedTime: '30-90 minutes',
    difficulty: 'Very Hard',
    objectives: [
      'Defeat Morgott, the Omen King',
      'Learn his complex attack patterns',
      'Master the two-phase fight',
      'Collect the Great Rune',
      'Unlock the path to the Mountaintops'
    ],
    walkthrough: [
      {
        step: 1,
        title: 'Understanding Morgott',
        description: 'Morgott is a two-phase boss with distinct mechanics and attack patterns that require careful study.',
        details: [
          'Two-phase boss fight',
          'Phase one: Standard omen attacks',
          'Phase two: Enhanced holy abilities',
          'Uses both melee and ranged attacks',
          'Requires perfect timing and positioning'
        ],
        tips: [
          'Study his attack patterns in phase one',
          'Watch for his holy magic attacks',
          'Stay mobile to avoid his combos',
          'Use the arena\'s pillars for cover',
          'Don\'t get greedy with attacks'
        ]
      },
      {
        step: 2,
        title: 'Phase One Strategy',
        description: 'The first phase focuses on learning his basic patterns and finding safe opportunities to attack.',
        details: [
          'He uses a large hammer and sword',
          'Attacks have predictable wind-ups',
          'Focus on dodging and counter-attacking',
          'Watch for his combo sequences',
          'Use heavy attacks when he\'s vulnerable'
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
        step: 3,
        title: 'Phase Two - Holy Power',
        description: 'When Morgott reaches half health, he\'ll gain enhanced holy abilities and become more aggressive.',
        details: [
          'He gains holy magic attacks',
          'Can summon holy swords and spears',
          'More aggressive attack patterns',
          'Longer and more complex combos',
          'Higher damage output'
        ],
        tips: [
          'Stay mobile during holy attacks',
          'Watch for his sword rain attack',
          'Don\'t get caught in his longer combos',
          'Use the same patient approach',
          'Focus on dodging and counter-attacking'
        ]
      },
      {
        step: 4,
        title: 'Advanced Strategies',
        description: 'Advanced players can use specific strategies to make the fight more manageable.',
        details: [
          'Use holy resistance if possible',
          'Summon spirits to distract him',
          'Use weapon arts strategically',
          'Time your heavy attacks carefully',
          'Use the environment to your advantage'
        ],
        tips: [
          'Holy resistance can significantly reduce damage',
          'Summons can give you breathing room',
          'Save your weapon arts for vulnerable moments',
          'Don\'t waste FP on missed attacks',
          'Learn to recognize his vulnerable states'
        ]
      },
      {
        step: 5,
        title: 'Victory and Rewards',
        description: 'Defeating Morgott grants you access to new areas and valuable rewards.',
        details: [
          'Receive Morgott\'s Great Rune',
          'Gain access to the Mountaintops of the Giants',
          'Unlock new story progression',
          'Receive significant runes',
          'Access to endgame areas'
        ],
        tips: [
          'The Great Rune is crucial for progression',
          'Use the runes to level up significantly',
          'Take time to explore the Mountaintops',
          'The game opens up significantly after this fight',
          'Don\'t rush to the next major challenge'
        ]
      }
    ],
    items: [
      {
        name: 'Morgott\'s Great Rune',
        type: 'Key Item',
        description: 'A Great Rune that can be activated to provide powerful buffs. Part of the main story progression.',
        location: 'Dropped by Morgott, the Omen King',
        usage: 'Activate at Divine Tower of East Altus to gain its power'
      },
      {
        name: 'Remembrance of the Omen King',
        type: 'Key Item',
        description: 'Can be exchanged for Morgott\'s weapons or consumed for runes.',
        location: 'Dropped by Morgott, the Omen King',
        usage: 'Take to the Roundtable Hold to exchange'
      },
      {
        name: 'Morgott\'s Cursed Sword',
        type: 'Weapon',
        description: 'Powerful curved sword with unique skill and holy damage.',
        location: 'Exchange Remembrance of the Omen King',
        requirements: '14 Strength, 35 Dexterity, 17 Faith'
      },
      {
        name: 'Regal Omen Bairn',
        type: 'Consumable',
        description: 'Creates a magical explosion that deals holy damage.',
        location: 'Exchange Remembrance of the Omen King',
        usage: 'Use to create holy explosions'
      }
    ],
    enemies: [
      {
        name: 'Morgott, the Omen King',
        type: 'Boss',
        health: 'Very High',
        difficulty: 'Very Hard',
        attacks: [
          'Hammer and sword strikes',
          'Holy magic attacks',
          'Sword rain (phase 2)',
          'Spear summons (phase 2)',
          'Complex combo sequences'
        ],
        strategy: 'Morgott is a challenging boss that requires patience and timing. Focus on learning his patterns and don\'t get greedy with attacks. Use the arena space and cover to your advantage.',
        drops: 'Morgott\'s Great Rune, Remembrance of the Omen King, 120000 Runes'
      }
    ],
    npcs: [
      {
        name: 'Melina',
        location: 'Erdtree Sanctuary (after defeat)',
        description: 'Appears after Morgott\'s defeat to guide you to the Mountaintops.',
        questline: 'Main Story - Path to the Mountaintops'
      },
      {
        name: 'Shabriri',
        location: 'Leyndell (after defeat)',
        description: 'Appears to offer an alternative path.',
        questline: 'Frenzied Flame Ending'
      }
    ],
    nextSection: 'mountain-tops',
    tips: [
      'Morgott is a major skill check - don\'t get discouraged',
      'Patience is absolutely crucial for this fight',
      'Use holy resistance if possible',
      'Learn his attack patterns thoroughly',
      'Don\'t waste healing items - be strategic',
      'The fight teaches important lessons for future bosses',
      'Take breaks if you\'re getting frustrated',
      'Victory unlocks the final stretch of the main story'
    ],
    videoGuide: 'https://www.youtube.com/watch?v=example',
    mapImage: '/images/morgott-map.jpg'
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