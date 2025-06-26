// Data import utilities for Elden Ring official guides

// Validate boss data structure
export const validateBossData = (bossData) => {
  const required = ['id', 'title', 'description', 'location', 'region'];
  const missing = required.filter(field => !bossData[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields for boss: ${missing.join(', ')}`);
  }
  
  return true;
};

// Validate NPC data structure
export const validateNPCData = (npcData) => {
  const required = ['id', 'name', 'title', 'description'];
  const missing = required.filter(field => !npcData[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields for NPC: ${missing.join(', ')}`);
  }
  
  return true;
};

// Validate location data structure
export const validateLocationData = (locationData) => {
  const required = ['id', 'name', 'type', 'region', 'description'];
  const missing = required.filter(field => !locationData[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields for location: ${missing.join(', ')}`);
  }
  
  return true;
};

// Validate equipment data structure
export const validateEquipmentData = (equipmentData) => {
  const required = ['id', 'name', 'type', 'category', 'description'];
  const missing = required.filter(field => !equipmentData[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields for equipment: ${missing.join(', ')}`);
  }
  
  return true;
};

// Parse CSV data (if you have data in CSV format)
export const parseCSV = (csvText) => {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  const data = [];
  
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim()) {
      const values = lines[i].split(',').map(v => v.trim());
      const row = {};
      headers.forEach((header, index) => {
        row[header] = values[index] || '';
      });
      data.push(row);
    }
  }
  
  return data;
};

// Convert guide text to structured data
export const parseGuideText = (text, type) => {
  const sections = text.split('\n\n');
  const data = [];
  
  sections.forEach(section => {
    const lines = section.split('\n');
    const title = lines[0];
    
    if (title && title.trim()) {
      const item = {
        id: title.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        title: title.trim(),
        description: lines.slice(1).join(' ').trim(),
        category: type,
        tags: []
      };
      
      data.push(item);
    }
  });
  
  return data;
};

// Generate sample data structure for manual entry
export const generateSampleEntry = (type) => {
  const templates = {
    boss: {
      id: 'boss-name',
      title: 'Boss Name',
      description: 'Detailed description of the boss encounter',
      location: 'Specific location',
      region: 'Region name',
      health: 10000,
      runes: 50000,
      weaknesses: ['Fire', 'Lightning'],
      resistances: ['Magic', 'Holy'],
      phases: [
        {
          phase: 1,
          healthThreshold: 100,
          attacks: ['Attack 1', 'Attack 2'],
          strategies: ['Strategy 1', 'Strategy 2'],
          tips: ['Tip 1', 'Tip 2']
        }
      ],
      rewards: [
        {
          type: 'weapon',
          name: 'Reward Weapon',
          description: 'Description of the reward'
        }
      ],
      summonOptions: ['Summon 1', 'Summon 2'],
      cheeseStrategies: ['Cheese method 1'],
      videoGuide: 'https://example.com/video',
      difficulty: 'medium',
      requiredLevel: 30,
      tags: ['boss', 'region', 'difficulty']
    },
    
    npc: {
      id: 'npc-name',
      name: 'NPC Name',
      title: 'NPC Title',
      description: 'Description of the NPC',
      questline: [
        {
          step: 1,
          location: 'Location',
          requirements: ['Requirement 1'],
          dialogue: 'NPC dialogue',
          choices: [
            {
              option: 'Choice 1',
              consequences: ['Consequence 1']
            }
          ],
          rewards: [
            {
              type: 'item',
              name: 'Reward Item',
              description: 'Description of reward'
            }
          ],
          notes: 'Additional notes'
        }
      ],
      locations: [
        {
          area: 'Area name',
          coordinates: 'X, Y coordinates',
          conditions: 'When NPC appears here'
        }
      ],
      endings: ['Ending 1', 'Ending 2'],
      relatedQuests: ['Related quest 1'],
      tags: ['npc', 'questline', 'region']
    },
    
    location: {
      id: 'location-name',
      name: 'Location Name',
      type: 'dungeon',
      region: 'Region name',
      description: 'Description of the location',
      enemies: [
        {
          name: 'Enemy name',
          count: 5,
          difficulty: 'medium',
          drops: ['Drop 1', 'Drop 2']
        }
      ],
      items: [
        {
          name: 'Item name',
          type: 'weapon',
          location: 'Specific location in area',
          requirements: 'Requirements to get item',
          description: 'Item description'
        }
      ],
      bosses: ['Boss 1', 'Boss 2'],
      secrets: [
        {
          description: 'Secret description',
          location: 'Secret location',
          reward: 'Secret reward'
        }
      ],
      walkthrough: [
        {
          step: 1,
          instruction: 'Step instruction',
          image: 'https://example.com/image.jpg',
          notes: 'Additional notes'
        }
      ],
      map: 'https://example.com/map.jpg',
      tags: ['location', 'region', 'type']
    },
    
    equipment: {
      id: 'equipment-name',
      name: 'Equipment Name',
      type: 'weapon',
      category: 'sword',
      description: 'Equipment description',
      location: 'Where to find it',
      requirements: {
        strength: 10,
        dexterity: 10,
        intelligence: 0,
        faith: 0,
        arcane: 0
      },
      stats: {
        physical: 100,
        magic: 0,
        fire: 0,
        lightning: 0,
        holy: 0,
        critical: 100
      },
      scaling: {
        strength: 'C',
        dexterity: 'C',
        intelligence: '-',
        faith: '-',
        arcane: '-'
      },
      weaponArt: 'Weapon art name',
      specialEffects: ['Effect 1', 'Effect 2'],
      upgradePath: 'Standard',
      bestBuilds: ['Build 1', 'Build 2'],
      acquisition: {
        method: 'Found in location',
        requirements: ['Requirement 1'],
        alternatives: ['Alternative method']
      },
      tags: ['equipment', 'type', 'category']
    }
  };
  
  return templates[type] || {};
};

// Export data to JSON file
export const exportToJSON = (data, filename) => {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  
  URL.revokeObjectURL(url);
};

// Import data from JSON file
export const importFromJSON = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    };
    reader.readAsText(file);
  });
}; 