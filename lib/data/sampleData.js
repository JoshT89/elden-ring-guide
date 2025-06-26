// Sample data for search functionality
export const sampleData = [
  // Bosses
  {
    id: 'margit',
    title: 'Margit, the Fell Omen',
    description: 'First major boss in Stormveil Castle. Uses spectral weapons and has two phases.',
    category: 'bosses',
    tags: ['boss', 'limgrave', 'stormveil', 'spectral', 'fell omen', 'beginner'],
  },
  {
    id: 'godrick',
    title: 'Godrick the Grafted',
    description: 'Lord of Limgrave and final boss of Stormveil Castle. Grafts a dragon arm in phase 2.',
    category: 'bosses',
    tags: ['boss', 'demigod', 'limgrave', 'stormveil', 'grafted', 'dragon arm'],
  },
  {
    id: 'rennala',
    title: 'Rennala, Queen of the Full Moon',
    description: 'Queen of the Full Moon and master of Raya Lucaria Academy. Uses powerful sorceries.',
    category: 'bosses',
    tags: ['boss', 'demigod', 'liurnia', 'raya lucaria', 'sorcery', 'full moon'],
  },
  {
    id: 'radahn',
    title: 'Starscourge Radahn',
    description: 'Legendary demigod fought in the Caelid Wilds. Festival boss with multiple summons.',
    category: 'bosses',
    tags: ['boss', 'demigod', 'caelid', 'festival', 'starscourge', 'gravity magic'],
  },
  {
    id: 'messmer',
    title: 'Messmer the Impaler',
    description: 'Shadow of the Erdtree boss known for his flame abilities and serpentine nature.',
    category: 'bosses',
    tags: ['boss', 'shadow erdtree', 'dlc', 'flame', 'serpent', 'impaler'],
  },

  // NPCs
  {
    id: 'ranni',
    title: 'Ranni the Witch',
    description: 'Mysterious witch with a crucial questline leading to the Age of Stars ending.',
    category: 'npcs',
    tags: ['npc', 'witch', 'questline', 'age of stars', 'ending', 'lunar princess'],
  },
  {
    id: 'alexander',
    title: 'Iron Fist Alexander',
    description: 'Warrior jar seeking to become stronger. Long questline across multiple regions.',
    category: 'npcs',
    tags: ['npc', 'warrior jar', 'questline', 'iron fist', 'strength', 'caelid'],
  },
  {
    id: 'fia',
    title: 'Fia, Deathbed Companion',
    description: 'Mysterious woman at Roundtable Hold. Important questline for Death ending.',
    category: 'npcs',
    tags: ['npc', 'deathbed companion', 'roundtable hold', 'death ending', 'questline'],
  },
  {
    id: 'varre',
    title: 'White Mask Varré',
    description: 'First NPC you meet. Provides access to Mohgwyn Palace through his questline.',
    category: 'npcs',
    tags: ['npc', 'white mask', 'mohgwyn palace', 'questline', 'first step'],
  },
  {
    id: 'millicent',
    title: 'Millicent',
    description: 'Scarlet rot-afflicted woman with a touching questline about identity.',
    category: 'npcs',
    tags: ['npc', 'scarlet rot', 'questline', 'identity', 'caelid', 'millicent'],
  },

  // Locations
  {
    id: 'limgrave',
    title: 'Limgrave',
    description: 'Starting region of Elden Ring. Contains Stormveil Castle and many beginner areas.',
    category: 'locations',
    tags: ['region', 'limgrave', 'starting area', 'stormveil', 'beginner'],
  },
  {
    id: 'liurnia',
    title: 'Liurnia of the Lakes',
    description: 'Second major region featuring Raya Lucaria Academy and magical lakes.',
    category: 'locations',
    tags: ['region', 'liurnia', 'lakes', 'raya lucaria', 'academy', 'magic'],
  },
  {
    id: 'caelid',
    title: 'Caelid',
    description: 'Dangerous scarlet rot-infested region. Home to Starscourge Radahn.',
    category: 'locations',
    tags: ['region', 'caelid', 'scarlet rot', 'dangerous', 'radahn', 'redmane castle'],
  },
  {
    id: 'stormveil',
    title: 'Stormveil Castle',
    description: 'First legacy dungeon. Contains Margit and Godrick boss fights.',
    category: 'locations',
    tags: ['dungeon', 'legacy dungeon', 'stormveil', 'castle', 'margit', 'godrick'],
  },
  {
    id: 'raya-lucaria',
    title: 'Raya Lucaria Academy',
    description: 'Academy of sorcery in Liurnia. Contains Rennala boss fight.',
    category: 'locations',
    tags: ['dungeon', 'academy', 'raya lucaria', 'sorcery', 'rennala', 'liurnia'],
  },
  {
    id: 'shadow-realm',
    title: 'Realm of Shadow',
    description: 'New area from Shadow of the Erdtree DLC. Contains Messmer and other new bosses.',
    category: 'locations',
    tags: ['region', 'shadow erdtree', 'dlc', 'messmer', 'shadow realm'],
  },

  // Equipment
  {
    id: 'uchigatana',
    title: 'Uchigatana',
    description: 'Popular katana with good dexterity scaling. Found in Limgrave Tunnels.',
    category: 'equipment',
    tags: ['weapon', 'katana', 'dexterity', 'limgrave', 'unsheathe', 'bleed'],
  },
  {
    id: 'bloodhounds-fang',
    title: 'Bloodhound\'s Fang',
    description: 'Curved greatsword with unique skill. Obtained from Forlorn Hound Evergaol.',
    category: 'equipment',
    tags: ['weapon', 'curved greatsword', 'bloodhound', 'special skill', 'bleed'],
  },
  {
    id: 'rivers-of-blood',
    title: 'Rivers of Blood',
    description: 'Legendary katana with blood-based weapon art. Excellent for bleed builds.',
    category: 'equipment',
    tags: ['weapon', 'katana', 'legendary', 'bleed', 'arcane', 'corpse piler'],
  },
  {
    id: 'radahn-armor',
    title: 'Radahn\'s Lion Armor',
    description: 'Heavy armor set worn by Starscourge Radahn. Excellent physical defense.',
    category: 'equipment',
    tags: ['armor', 'heavy armor', 'radahn', 'lion armor', 'physical defense'],
  },
  {
    id: 'flask-of-crimson-tears',
    title: 'Flask of Crimson Tears',
    description: 'Primary healing item. Can be upgraded with Golden Seeds.',
    category: 'equipment',
    tags: ['consumable', 'healing', 'flask', 'crimson tears', 'golden seeds'],
  },
];