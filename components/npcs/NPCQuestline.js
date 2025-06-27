'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, MapPin, Target, Gift, Clock, Star, Users, ArrowRight } from 'lucide-react';
import { getNPCById } from '@/lib/data/npcData';

export default function NPCQuestline({ npcId }) {
  const npc = getNPCById(npcId);

  if (!npc) {
    return (
      <div className="content-card p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">NPC Not Found</h2>
        <p className="text-slate-400 mb-6">The requested NPC could not be found.</p>
        <Link href="/npcs" className="btn-primary">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to NPCs
        </Link>
      </div>
    );
  }

  // Questline data for White Mask Varré
  const varreQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "The First Step",
      description: "Meet White Mask Varré at the beginning of your journey",
      details: [
        "Speak to Varré after emerging from the Chapel of Anticipation",
        "He will give you advice about the Lands Between",
        "This is your first encounter with the character"
      ],
      rewards: ["Information about the Lands Between"]
    },
    {
      step: 2,
      title: "Rose Church Encounter",
      location: "Rose Church, Liurnia of the Lakes",
      description: "Find Varré at the Rose Church after defeating Godrick",
      details: [
        "Travel to Rose Church in Liurnia of the Lakes",
        "Speak to Varré who will recognize you",
        "He will offer to anoint you with the Lord of Blood's favor"
      ],
      rewards: ["Lord of Blood's Favor", "Pureblood Knight's Medal"]
    },
    {
      step: 3,
      title: "Invade Other Players",
      location: "Anywhere in the Lands Between",
      description: "Complete three invasions using the Festering Bloody Finger",
      details: [
        "Use the Festering Bloody Finger to invade other players",
        "You must successfully invade and defeat 3 hosts",
        "Dying during invasions doesn't count against you"
      ],
      rewards: ["Progress in Varré's questline"]
    },
    {
      step: 4,
      title: "Return to Rose Church",
      location: "Rose Church, Liurnia of the Lakes",
      description: "Return to Varré after completing the invasions",
      details: [
        "Go back to Rose Church after 3 successful invasions",
        "Varré will give you the Pureblood Knight's Medal",
        "This item allows you to teleport to Mohgwyn Palace"
      ],
      rewards: ["Pureblood Knight's Medal", "Access to Mohgwyn Palace"]
    },
    {
      step: 5,
      title: "Mohgwyn Palace",
      location: "Mohgwyn Palace",
      description: "Use the medal to access the hidden area",
      details: [
        "Use the Pureblood Knight's Medal to teleport",
        "You'll arrive at the Palace Approach Ledge-Road",
        "This gives early access to a late-game area"
      ],
      rewards: ["Early access to Mohgwyn Palace", "Varré's Bouquet weapon"]
    },
    {
      step: 6,
      title: "Final Encounter",
      location: "Mohgwyn Palace",
      description: "Find Varré's final location in the palace",
      details: [
        "Varré can be found near the Dynasty Mausoleum Entrance",
        "He will be hostile and must be defeated",
        "Drops Varré's Bouquet weapon upon death"
      ],
      rewards: ["Varré's Bouquet", "Completes the questline"]
    }
  ];

  // Questline data for Melina
  const melinaQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "The First Step",
      description: "Melina appears after you rest at the first Site of Grace",
      details: [
        "Rest at the Site of Grace at The First Step",
        "Melina will appear and offer to be your maiden",
        "She will give you the ability to level up and Torrent"
      ],
      rewards: ["Torrent (Spirit Steed)", "Level Up Ability", "Flask of Crimson Tears"]
    },
    {
      step: 2,
      title: "Throughout the Journey",
      location: "Various Sites of Grace",
      description: "Melina appears at key moments to guide you",
      details: [
        "She appears at important Sites of Grace throughout the game",
        "Provides guidance and lore about the Lands Between",
        "Offers to take you to the Roundtable Hold"
      ],
      rewards: ["Guidance and Lore", "Access to Roundtable Hold"]
    },
    {
      step: 3,
      title: "Roundtable Hold",
      location: "Roundtable Hold",
      description: "Melina helps you access the Roundtable Hold",
      details: [
        "She will transport you to the Roundtable Hold",
        "This serves as your hub throughout the game",
        "Provides access to important NPCs and services"
      ],
      rewards: ["Access to Roundtable Hold", "Hub for NPCs and Services"]
    },
    {
      step: 4,
      title: "Leyndell, Royal Capital",
      location: "Leyndell, Royal Capital",
      description: "Melina reveals her true purpose",
      details: [
        "She explains her role as a kindling maiden",
        "Reveals her connection to the Erdtree",
        "Offers to sacrifice herself to burn the Erdtree"
      ],
      rewards: ["Story Progression", "Understanding of Melina's Role"]
    },
    {
      step: 5,
      title: "Mountaintops of the Giants",
      location: "Mountaintops of the Giants",
      description: "Melina offers to sacrifice herself",
      details: [
        "She offers to burn herself to ignite the Erdtree",
        "This is required to access the final areas",
        "She will leave you if you accept the Frenzied Flame"
      ],
      rewards: ["Access to Crumbling Farum Azula", "Story Progression"]
    },
    {
      step: 6,
      title: "Final Choice",
      location: "Mountaintops of the Giants",
      description: "Choose between Melina and the Frenzied Flame",
      details: [
        "If you accept Melina's sacrifice: Normal ending path",
        "If you accept Frenzied Flame: She leaves and becomes hostile",
        "Her fate depends on your choices in the final areas"
      ],
      rewards: ["Story Conclusion", "Ending Determination"]
    }
  ];

  // Questline data for Ranni the Witch
  const ranniQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "Church of Elleh",
      description: "Meet Ranni at the Church of Elleh after getting Torrent",
      details: [
        "Visit Church of Elleh after receiving Torrent from Melina",
        "Ranni will appear and give you the Spirit Calling Bell",
        "She also provides the Lone Wolf Ashes spirit summon"
      ],
      rewards: ["Spirit Calling Bell", "Lone Wolf Ashes", "Access to Spirit Summons"]
    },
    {
      step: 2,
      title: "Find Blaidd",
      location: "Mistwood Ruins",
      description: "Find Blaidd the Half-Wolf at Mistwood Ruins",
      details: [
        "Travel to Mistwood Ruins in Limgrave",
        "You'll hear howling - snap your fingers to call Blaidd",
        "Speak to Blaidd about Ranni's quest"
      ],
      rewards: ["Blaidd's Introduction", "Information about Ranni"]
    },
    {
      step: 3,
      title: "Defeat Radahn",
      location: "Redmane Castle, Caelid",
      description: "Defeat Starscourge Radahn to free the stars",
      details: [
        "Participate in the Radahn Festival at Redmane Castle",
        "Defeat Starscourge Radahn in the massive battle",
        "This frees the stars and allows Nokron to be accessed"
      ],
      rewards: ["Radahn's Great Rune", "Remembrance of the Starscourge", "Stars are freed"]
    },
    {
      step: 4,
      title: "Find Nokron",
      location: "Nokron, Eternal City",
      description: "Find the hidden city of Nokron",
      details: [
        "A crater appears in Limgrave after defeating Radahn",
        "Descend into the crater to find Nokron",
        "Explore the underground city to find the Fingerslayer Blade"
      ],
      rewards: ["Access to Nokron", "Fingerslayer Blade", "Various items and weapons"]
    },
    {
      step: 5,
      title: "Return to Ranni",
      location: "Ranni's Rise",
      description: "Give the Fingerslayer Blade to Ranni",
      details: [
        "Return to Ranni's Rise in Liurnia",
        "Give her the Fingerslayer Blade from Nokron",
        "She will give you the Carian Inverted Statue"
      ],
      rewards: ["Carian Inverted Statue", "Progress in Ranni's quest"]
    },
    {
      step: 6,
      title: "Find the Cursemark",
      location: "Divine Tower of Liurnia",
      description: "Use the Carian Inverted Statue to access the tower",
      details: [
        "Use the Carian Inverted Statue at the Carian Study Hall",
        "This inverts the tower and allows access to the top",
        "Find the Cursemark of Death at the top of the tower"
      ],
      rewards: ["Cursemark of Death", "Access to inverted tower"]
    },
    {
      step: 7,
      title: "Lake of Rot",
      location: "Lake of Rot",
      description: "Navigate through the Lake of Rot",
      details: [
        "Descend through the Lake of Rot",
        "Use the map to navigate to the Grand Cloister",
        "Find the coffin that leads to Astel"
      ],
      rewards: ["Access to Astel", "Progress through Lake of Rot"]
    },
    {
      step: 8,
      title: "Defeat Astel",
      location: "Grand Cloister",
      description: "Defeat Astel, Naturalborn of the Void",
      details: [
        "Fight Astel in the Grand Cloister",
        "This is a challenging boss fight",
        "Defeating Astel grants access to the Moonlight Altar"
      ],
      rewards: ["Astel's Remembrance", "Access to Moonlight Altar"]
    },
    {
      step: 9,
      title: "Moonlight Altar",
      location: "Moonlight Altar",
      description: "Reach the Moonlight Altar and find Ranni",
      details: [
        "Climb to the Moonlight Altar",
        "Find Ranni's physical form in the tower",
        "Place the Dark Moon Ring on her finger"
      ],
      rewards: ["Dark Moon Greatsword", "Age of the Stars Ending"]
    },
    {
      step: 10,
      title: "Final Choice",
      location: "Moonlight Altar",
      description: "Choose to serve Ranni and achieve the Age of Stars ending",
      details: [
        "Place the ring on Ranni's finger",
        "This locks you into the Age of Stars ending",
        "Ranni will thank you and the questline concludes"
      ],
      rewards: ["Age of the Stars Ending", "Ranni's Dark Moon", "Questline Complete"]
    }
  ];

  // Questline data for Blaidd the Half-Wolf
  const blaiddQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "Mistwood Ruins, Limgrave",
      description: "Find Blaidd at Mistwood Ruins after meeting Ranni",
      details: [
        "After meeting Ranni at Church of Elleh, travel to Mistwood Ruins",
        "You'll hear howling - snap your fingers (gesture) to call Blaidd",
        "Blaidd will descend from the tower and introduce himself",
        "He explains he serves Ranni and is searching for something"
      ],
      rewards: ["Blaidd's Introduction", "Information about Ranni's quest", "Access to Blaidd's services"]
    },
    {
      step: 2,
      title: "Help with Radahn",
      location: "Redmane Castle, Caelid",
      description: "Fight alongside Blaidd in the Radahn Festival",
      details: [
        "Blaidd participates in the Radahn Festival alongside you",
        "He fights as a summon during the massive battle",
        "After defeating Radahn, Blaidd will be found at the site of grace",
        "He explains that defeating Radahn freed the stars"
      ],
      rewards: ["Blaidd's assistance in battle", "Information about the stars being freed", "Progress in Ranni's quest"]
    },
    {
      step: 3,
      title: "Search for Nokron",
      location: "Limgrave (crater site)",
      description: "Help Blaidd find the entrance to Nokron",
      details: [
        "After Radahn's defeat, a crater appears in Limgrave",
        "Blaidd will be found near the crater entrance",
        "He explains that Nokron should now be accessible",
        "This is part of Ranni's quest to find the Fingerslayer Blade"
      ],
      rewards: ["Access to Nokron", "Blaidd's guidance", "Progress in Ranni's quest"]
    },
    {
      step: 4,
      title: "Nokron Exploration",
      location: "Nokron, Eternal City",
      description: "Explore Nokron with Blaidd's guidance",
      details: [
        "Blaidd provides information about Nokron's layout",
        "He explains the importance of finding the Fingerslayer Blade",
        "Blaidd cannot physically enter Nokron but guides you from outside",
        "This step is crucial for Ranni's questline"
      ],
      rewards: ["Blaidd's guidance", "Access to Fingerslayer Blade", "Progress in Ranni's quest"]
    },
    {
      step: 5,
      title: "Return to Ranni's Rise",
      location: "Ranni's Rise, Liurnia",
      description: "Meet Blaidd at Ranni's Rise after finding the Fingerslayer Blade",
      details: [
        "After obtaining the Fingerslayer Blade, return to Ranni's Rise",
        "Blaidd will be waiting outside Ranni's tower",
        "He expresses concern about Ranni's plans",
        "Blaidd remains loyal but questions the path ahead"
      ],
      rewards: ["Blaidd's perspective", "Character development", "Progress in Ranni's quest"]
    },
    {
      step: 6,
      title: "Blaidd's Transformation",
      location: "Ranni's Rise, Liurnia",
      description: "Blaidd becomes hostile due to his curse",
      details: [
        "After Ranni leaves her physical form, Blaidd's curse activates",
        "He becomes hostile and attacks you outside Ranni's Rise",
        "This is due to the curse placed on him by the Two Fingers",
        "You must defeat Blaidd to progress"
      ],
      rewards: ["Blaidd's Armor Set", "Blaidd's Sword", "Blaidd's Shield", "Understanding of his curse"]
    },
    {
      step: 7,
      title: "Blaidd's Fate",
      location: "Ranni's Rise, Liurnia",
      description: "Blaidd's tragic end and his role in Ranni's quest",
      details: [
        "After defeating Blaidd, Iji will explain his curse",
        "Blaidd was cursed to go mad if Ranni ever betrayed the Two Fingers",
        "His loyalty to Ranni was his undoing",
        "Blaidd's story serves as a tragic example of the consequences of serving Ranni"
      ],
      rewards: ["Complete Blaidd's story", "Understanding of Ranni's quest consequences", "Blaidd's full armor set"]
    }
  ];

  // Questline data for Iron Fist Alexander
  const alexanderQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "Stormhill, Limgrave",
      description: "Find Alexander stuck in the ground",
      details: [
        "Alexander is found stuck in the ground near the Stormhill Shack",
        "He asks for help getting unstuck",
        "You can either help him or leave him there",
        "Helping him establishes a friendship"
      ],
      rewards: ["Alexander's gratitude", "Exalted Flesh", "Access to Alexander's questline"]
    },
    {
      step: 2,
      title: "Gael Tunnel",
      location: "Gael Tunnel, Caelid",
      description: "Find Alexander again in Gael Tunnel",
      details: [
        "Alexander is found stuck again in Gael Tunnel",
        "He's trying to reach the Radahn Festival",
        "Help him get unstuck again",
        "He mentions his desire to become stronger"
      ],
      rewards: ["Alexander's continued friendship", "Exalted Flesh", "Progress toward Radahn Festival"]
    },
    {
      step: 3,
      title: "Radahn Festival",
      location: "Redmane Castle, Caelid",
      description: "Fight alongside Alexander in the Radahn Festival",
      details: [
        "Alexander participates in the Radahn Festival as a summon",
        "He fights bravely against Starscourge Radahn",
        "After the battle, he's found at the site of grace",
        "He's inspired by the battle and wants to become even stronger"
      ],
      rewards: ["Alexander's assistance in battle", "Inspiration from the festival", "Progress in his character arc"]
    },
    {
      step: 4,
      title: "Mt. Gelmir",
      location: "Mt. Gelmir",
      description: "Find Alexander training at Mt. Gelmir",
      details: [
        "Alexander is found near the Magma Wyrm boss",
        "He's training to become stronger",
        "He's impressed by your strength and determination",
        "He mentions his ultimate goal of becoming a great warrior"
      ],
      rewards: ["Alexander's respect", "Character development", "Access to his final location"]
    },
    {
      step: 5,
      title: "Farum Azula",
      location: "Crumbling Farum Azula",
      description: "Final meeting with Alexander",
      details: [
        "Alexander is found in Crumbling Farum Azula",
        "He challenges you to a duel to test his strength",
        "This is a challenging but honorable fight",
        "Alexander fights with honor and determination"
      ],
      rewards: ["Alexander's Innards", "Shard of Alexander", "Tragic but honorable conclusion"]
    },
    {
      step: 6,
      title: "Alexander's Legacy",
      location: "Crumbling Farum Azula",
      description: "Understanding Alexander's sacrifice",
      details: [
        "After defeating Alexander, you gain his innards",
        "These can be used to create powerful talismans",
        "Alexander's story represents the pursuit of strength and honor",
        "His sacrifice allows you to carry on his legacy"
      ],
      rewards: ["Alexander's Innards", "Shard of Alexander", "Understanding of his character arc"]
    }
  ];

  // Questline data for Nepheli Loux
  const nepheliQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "Stormveil Castle, Limgrave",
      description: "Meet Nepheli in Stormveil Castle",
      details: [
        "Nepheli is found in Stormveil Castle before fighting Godrick",
        "She's a warrior who opposes Godrick the Grafted",
        "She can be summoned to help fight Godrick",
        "She's revealed to be the adopted daughter of Gideon Ofnir"
      ],
      rewards: ["Nepheli's assistance", "Access to her questline", "Information about Godrick"]
    },
    {
      step: 2,
      title: "Roundtable Hold",
      location: "Roundtable Hold",
      description: "Meet Nepheli at the Roundtable Hold",
      details: [
        "After defeating Godrick, Nepheli appears at Roundtable Hold",
        "She's found near the blacksmith Hewg",
        "She's troubled by her adoptive father Gideon's actions",
        "She questions the path of the Tarnished"
      ],
      rewards: ["Nepheli's perspective", "Character development", "Access to her services"]
    },
    {
      step: 3,
      title: "Village of the Albinaurics",
      location: "Village of the Albinaurics, Liurnia",
      description: "Help Nepheli with the Albinaurics",
      details: [
        "Nepheli is found in the Village of the Albinaurics",
        "She's trying to help the Albinauric people",
        "She's opposed to Gideon's treatment of them",
        "This shows her compassionate nature"
      ],
      rewards: ["Nepheli's trust", "Understanding of Albinaurics", "Character development"]
    },
    {
      step: 4,
      title: "Gideon's Betrayal",
      location: "Roundtable Hold",
      description: "Gideon's treatment of Nepheli",
      details: [
        "Gideon gives Nepheli a potion that will kill her",
        "This is revealed through dialogue with other NPCs",
        "Nepheli is unaware of her father's betrayal",
        "This creates tension in her storyline"
      ],
      rewards: ["Understanding of Gideon's character", "Drama in the storyline", "Moral complexity"]
    },
    {
      step: 5,
      title: "Stormveil Castle Return",
      location: "Stormveil Castle, Limgrave",
      description: "Nepheli's final decision",
      details: [
        "Nepheli can be found back at Stormveil Castle",
        "She's contemplating her future and purpose",
        "She's torn between loyalty to Gideon and her own values",
        "This represents her character's internal conflict"
      ],
      rewards: ["Nepheli's character arc", "Understanding of her motivations", "Story resolution"]
    },
    {
      step: 6,
      title: "Nepheli's Fate",
      location: "Stormveil Castle, Limgrave",
      description: "Nepheli's ultimate choice",
      details: [
        "Depending on player choices, Nepheli's fate varies",
        "She may become the new ruler of Stormveil Castle",
        "Or she may continue her journey as a warrior",
        "Her story represents choice and independence"
      ],
      rewards: ["Nepheli's character completion", "Story resolution", "Understanding of her arc"]
    }
  ];

  // Questline data for Patches
  const patchesQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "Murkwater Cave, Limgrave",
      description: "Meet Patches in Murkwater Cave",
      details: [
        "Patches is found in Murkwater Cave as a boss",
        "He fights you but surrenders when his health is low",
        "He begs for mercy and offers to become a merchant",
        "This establishes his deceptive but ultimately harmless nature"
      ],
      rewards: ["Patches' surrender", "Access to his merchant services", "Leather Armor Set"]
    },
    {
      step: 2,
      title: "Scenic Isle",
      location: "Scenic Isle, Liurnia",
      description: "Find Patches at Scenic Isle",
      details: [
        "Patches appears as a merchant at Scenic Isle",
        "He sells various items including the Bull-Goat Armor Set",
        "He's still his usual deceptive self",
        "He mentions his past and his survival tactics"
      ],
      rewards: ["Bull-Goat Armor Set", "Various merchant items", "Character development"]
    },
    {
      step: 3,
      title: "Mt. Gelmir",
      location: "Mt. Gelmir",
      description: "Patches at Mt. Gelmir",
      details: [
        "Patches is found near the Magma Wyrm boss",
        "He's still operating as a merchant",
        "He continues his deceptive but ultimately helpful behavior",
        "He maintains his survivalist philosophy"
      ],
      rewards: ["Continued merchant services", "Patches' perspective", "Survival tactics"]
    },
    {
      step: 4,
      title: "Shaded Castle",
      location: "Shaded Castle, Altus Plateau",
      description: "Patches' final location",
      details: [
        "Patches is found in the Shaded Castle",
        "He's still operating as a merchant",
        "He maintains his character throughout the game",
        "He represents the survivalist mentality in the Lands Between"
      ],
      rewards: ["Final merchant services", "Patches' complete character arc", "Survival philosophy"]
    }
  ];

  // Questline data for Sorceress Sellen
  const sellenQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "Waypoint Ruins, Limgrave",
      description: "Meet Sellen in the Waypoint Ruins",
      details: [
        "Sellen is found in the basement of Waypoint Ruins",
        "She's a sorceress who teaches Glintstone Sorceries",
        "She can be found as a spirit in a crystal",
        "She explains her situation and asks for help"
      ],
      rewards: ["Access to Glintstone Sorceries", "Sellen's guidance", "Magic training"]
    },
    {
      step: 2,
      title: "Witchbane Ruins",
      location: "Witchbane Ruins, Weeping Peninsula",
      description: "Find Sellen's physical body",
      details: [
        "Sellen's physical body is found in Witchbane Ruins",
        "She's imprisoned and chained up",
        "This reveals her past and the reasons for her imprisonment",
        "She asks for help freeing her from her chains"
      ],
      rewards: ["Understanding of Sellen's past", "Access to her services", "Character development"]
    },
    {
      step: 3,
      title: "Raya Lucaria Academy",
      location: "Raya Lucaria Academy, Liurnia",
      description: "Help Sellen with the Academy",
      details: [
        "Sellen provides guidance about Raya Lucaria Academy",
        "She explains the history of the Academy and its sorcerers",
        "She helps you understand the magical traditions",
        "She reveals her connection to the Academy's past"
      ],
      rewards: ["Academy knowledge", "Magical insights", "Sellen's trust"]
    },
    {
      step: 4,
      title: "Primeval Sorcerer Azur",
      location: "Mt. Gelmir",
      description: "Find Azur's location for Sellen",
      details: [
        "Sellen asks you to find Primeval Sorcerer Azur",
        "Azur is found in Mt. Gelmir near the Magma Wyrm",
        "This is part of Sellen's research into primeval sorceries",
        "She's studying the ancient magical traditions"
      ],
      rewards: ["Azur's Glintstone Staff", "Primeval Sorcery knowledge", "Progress in Sellen's research"]
    },
    {
      step: 5,
      title: "Lusat's Location",
      location: "Sellia, Town of Sorcery, Caelid",
      description: "Find Lusat for Sellen",
      details: [
        "Sellen also asks you to find Lusat",
        "Lusat is found in Sellia, Town of Sorcery",
        "This completes Sellen's research into primeval sorceries",
        "She's gathering knowledge from the ancient sorcerers"
      ],
      rewards: ["Lusat's Glintstone Staff", "Complete primeval sorcery knowledge", "Sellen's research complete"]
    },
    {
      step: 6,
      title: "Sellen's Transformation",
      location: "Raya Lucaria Academy",
      description: "Sellen's ultimate fate",
      details: [
        "After completing her research, Sellen undergoes transformation",
        "She attempts to become a Graven Mass",
        "This represents her pursuit of ultimate magical knowledge",
        "Her fate shows the consequences of magical ambition"
      ],
      rewards: ["Sellen's character completion", "Understanding of magical consequences", "Story resolution"]
    }
  ];

  // Questline data for Millicent
  const millicentQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "Church of the Plague, Caelid",
      description: "Find Millicent afflicted with Scarlet Rot",
      details: [
        "Millicent is found in the Church of the Plague in Caelid",
        "She's severely afflicted with Scarlet Rot",
        "She's in pain and asks for help",
        "This introduces the Scarlet Rot mechanic and Millicent's plight"
      ],
      rewards: ["Understanding of Scarlet Rot", "Millicent's introduction", "Access to her questline"]
    },
    {
      step: 2,
      title: "Gowry's Request",
      location: "Gowry's Shack, Caelid",
      description: "Help Millicent through Gowry",
      details: [
        "Gowry asks you to help Millicent with the Unalloyed Gold Needle",
        "The needle can cure Scarlet Rot",
        "Gowry provides the needle and instructions",
        "This establishes the connection between Gowry and Millicent"
      ],
      rewards: ["Unalloyed Gold Needle", "Gowry's guidance", "Cure for Scarlet Rot"]
    },
    {
      step: 3,
      title: "Curing Millicent",
      location: "Church of the Plague, Caelid",
      description: "Use the Unalloyed Gold Needle to cure Millicent",
      details: [
        "Return to Millicent with the Unalloyed Gold Needle",
        "Use the needle to cure her Scarlet Rot",
        "Millicent recovers and thanks you",
        "She explains her past and her connection to Malenia"
      ],
      rewards: ["Millicent's gratitude", "Understanding of her past", "Access to her services"]
    },
    {
      step: 4,
      title: "Altus Plateau",
      location: "Altus Plateau",
      description: "Find Millicent at Altus Plateau",
      details: [
        "Millicent appears at Altus Plateau after being cured",
        "She's stronger and more confident",
        "She's searching for her purpose and identity",
        "She mentions her connection to the Haligtree"
      ],
      rewards: ["Millicent's character development", "Information about Haligtree", "Progress in her story"]
    },
    {
      step: 5,
      title: "Mountaintops of the Giants",
      location: "Mountaintops of the Giants",
      description: "Millicent's journey to the Haligtree",
      details: [
        "Millicent is found in the Mountaintops of the Giants",
        "She's on her way to the Haligtree",
        "She's determined to find her true identity",
        "She's stronger and more independent now"
      ],
      rewards: ["Millicent's determination", "Access to Haligtree", "Character development"]
    },
    {
      step: 6,
      title: "Haligtree",
      location: "Elphael, Brace of the Haligtree",
      description: "Millicent's final choice",
      details: [
        "Millicent is found in Elphael, Brace of the Haligtree",
        "She's confronted with her true nature",
        "She must choose between embracing or rejecting her heritage",
        "This leads to different outcomes based on player choice"
      ],
      rewards: ["Millicent's Prosthesis", "Understanding of her fate", "Story resolution"]
    },
    {
      step: 7,
      title: "Millicent's Fate",
      location: "Elphael, Brace of the Haligtree",
      description: "Millicent's ultimate decision",
      details: [
        "Depending on player choices, Millicent's fate varies",
        "She may embrace her heritage and become stronger",
        "Or she may reject it and maintain her independence",
        "Her story represents choice and identity"
      ],
      rewards: ["Millicent's character completion", "Story resolution", "Understanding of her arc"]
    }
  ];

  // Questline data for Gurranq (Beast Clergyman)
  const gurranqQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "Bestial Sanctum, Caelid",
      description: "Meet Gurranq at the Bestial Sanctum",
      details: [
        "Gurranq is found at the Bestial Sanctum in Caelid",
        "He's a massive beast-like figure who speaks",
        "He asks for Deathroot to sate his hunger",
        "He teaches Beast Incantations in exchange for Deathroot"
      ],
      rewards: ["Access to Beast Incantations", "Gurranq's services", "Understanding of Deathroot"]
    },
    {
      step: 2,
      title: "Deathroot Collection",
      location: "Various locations",
      description: "Collect Deathroot for Gurranq",
      details: [
        "Deathroot can be found from various bosses and enemies",
        "Each Deathroot given to Gurranq unlocks new Beast Incantations",
        "He becomes more stable as you feed him Deathroot",
        "This reveals his connection to Death and the Rune of Death"
      ],
      rewards: ["Beast Incantations", "Gurranq's stability", "Understanding of Death mechanics"]
    },
    {
      step: 3,
      title: "Gurranq's Transformation",
      location: "Bestial Sanctum, Caelid",
      description: "Gurranq's gradual change",
      details: [
        "As you feed Gurranq more Deathroot, he becomes more stable",
        "His appearance and behavior change",
        "He reveals more about his past and purpose",
        "He's connected to the Rune of Death and Maliketh"
      ],
      rewards: ["Gurranq's revelations", "Character development", "Lore insights"]
    },
    {
      step: 4,
      title: "Final Revelation",
      location: "Bestial Sanctum, Caelid",
      description: "Gurranq's true identity",
      details: [
        "After feeding Gurranq all Deathroot, his true identity is revealed",
        "He's actually Maliketh, the Black Blade",
        "This explains his connection to Death and the Rune of Death",
        "He's been hiding in the Bestial Sanctum"
      ],
      rewards: ["Gurranq's true identity", "Understanding of Maliketh", "Complete Beast Incantations"]
    },
    {
      step: 5,
      title: "Gurranq's Fate",
      location: "Bestial Sanctum, Caelid",
      description: "Gurranq's ultimate fate",
      details: [
        "Gurranq remains at the Bestial Sanctum even after revelation",
        "He continues to provide Beast Incantations",
        "His story connects to the larger Death and Maliketh storyline",
        "He represents the consequences of sealing away Death"
      ],
      rewards: ["Complete understanding of Gurranq", "Connection to Maliketh storyline", "Death lore"]
    }
  ];

  // Questline data for Dung Eater
  const dungEaterQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "Roundtable Hold",
      description: "Meet Dung Eater at the Roundtable Hold",
      details: [
        "Dung Eater is found in the Roundtable Hold after defeating Godrick",
        "He's a mysterious and disturbing figure",
        "He speaks of curses and defilement",
        "He's imprisoned but can be spoken to through the bars"
      ],
      rewards: ["Dung Eater's introduction", "Access to his questline", "Understanding of his nature"]
    },
    {
      step: 2,
      title: "Seedbed Curse",
      location: "Various locations",
      description: "Collect Seedbed Curses for Dung Eater",
      details: [
        "Dung Eater asks you to collect Seedbed Curses",
        "These can be found in various locations throughout the Lands Between",
        "Each curse represents a victim of Dung Eater's defilement",
        "This reveals the extent of his crimes and influence"
      ],
      rewards: ["Seedbed Curses", "Understanding of Dung Eater's crimes", "Progress in questline"]
    },
    {
      step: 3,
      title: "Dung Eater's Release",
      location: "Roundtable Hold",
      description: "Free Dung Eater from his prison",
      details: [
        "After collecting enough Seedbed Curses, Dung Eater can be freed",
        "This requires the Sewer Gaol Key",
        "He will leave the Roundtable Hold",
        "This sets in motion the next phase of his questline"
      ],
      rewards: ["Dung Eater's freedom", "Access to his next location", "Quest progression"]
    },
    {
      step: 4,
      title: "Leyndell Sewers",
      location: "Leyndell Sewers",
      description: "Find Dung Eater in the sewers",
      details: [
        "Dung Eater can be found in the Leyndell Sewers",
        "He's in a hidden area accessible through the sewers",
        "He's continuing his work of defilement",
        "This reveals more about his methods and goals"
      ],
      rewards: ["Dung Eater's location", "Understanding of his methods", "Access to his services"]
    },
    {
      step: 5,
      title: "Dung Eater's Request",
      location: "Leyndell Sewers",
      description: "Help Dung Eater with his ultimate goal",
      details: [
        "Dung Eater asks for your help with his final plan",
        "He wants to spread his curse throughout the Lands Between",
        "This involves a complex ritual and specific items",
        "He reveals his philosophy about defilement and curses"
      ],
      rewards: ["Dung Eater's trust", "Understanding of his philosophy", "Access to his ritual"]
    },
    {
      step: 6,
      title: "The Defilement Ritual",
      location: "Various locations",
      description: "Complete Dung Eater's ritual",
      details: [
        "Dung Eater's ritual requires specific steps and items",
        "This involves visiting certain locations and performing actions",
        "The ritual is designed to spread his curse",
        "This represents the culmination of his questline"
      ],
      rewards: ["Ritual completion", "Dung Eater's curse", "Access to his ending"]
    },
    {
      step: 7,
      title: "Age of Despair Ending",
      location: "Elden Throne",
      description: "Achieve the Age of Despair ending",
      details: [
        "Completing Dung Eater's questline unlocks the Age of Despair ending",
        "This is one of the darkest endings in the game",
        "It represents the spread of Dung Eater's curse",
        "The world is plunged into eternal defilement"
      ],
      rewards: ["Age of Despair Ending", "Mending Rune of the Fell Curse", "Complete questline"]
    }
  ];

  // Questline data for Fia, Deathbed Companion
  const fiaQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "Roundtable Hold",
      description: "Meet Fia in the Roundtable Hold bedroom",
      details: [
        "Fia is found in the bedroom of the Roundtable Hold",
        "She offers to hold you and provide comfort",
        "She speaks of death and the role of Deathbed Companions",
        "She's mysterious and speaks in cryptic terms"
      ],
      rewards: ["Fia's embrace", "Blessing of Death", "Understanding of Deathbed Companions"]
    },
    {
      step: 2,
      title: "Fia's Embrace",
      location: "Roundtable Hold",
      description: "Accept Fia's embrace and learn about death",
      details: [
        "Fia offers to hold you whenever you visit",
        "Each embrace provides a temporary debuff but also benefits",
        "She explains her role in the cycle of death and rebirth",
        "This establishes the connection between you and Fia"
      ],
      rewards: ["Fia's blessing", "Understanding of death mechanics", "Character development"]
    },
    {
      step: 3,
      title: "D, Hunter of the Dead",
      location: "Roundtable Hold",
      description: "Interact with D, Hunter of the Dead",
      details: [
        "D, Hunter of the Dead is found in the Roundtable Hold",
        "He's opposed to Fia and her practices",
        "This creates tension and conflict in the storyline",
        "D represents the forces that oppose death and defilement"
      ],
      rewards: ["Understanding of D's role", "Conflict in storyline", "Character dynamics"]
    },
    {
      step: 4,
      title: "Fia's Request",
      location: "Roundtable Hold",
      description: "Help Fia with her quest",
      details: [
        "Fia asks for your help with a specific task",
        "She needs you to find something related to death",
        "This involves exploring specific areas",
        "She reveals more about her true nature and goals"
      ],
      rewards: ["Fia's trust", "Understanding of her goals", "Quest progression"]
    },
    {
      step: 5,
      title: "Deeproot Depths",
      location: "Deeproot Depths",
      description: "Find Fia in the Deeproot Depths",
      details: [
        "Fia can be found in the Deeproot Depths",
        "She's near the Prince of Death",
        "This reveals her connection to death and the undead",
        "She's working on something related to the Prince of Death"
      ],
      rewards: ["Fia's location", "Understanding of Prince of Death", "Story progression"]
    },
    {
      step: 6,
      title: "The Prince of Death",
      location: "Deeproot Depths",
      description: "Help Fia with the Prince of Death",
      details: [
        "Fia is working with the Prince of Death",
        "She needs your help to complete a ritual",
        "This involves specific items and actions",
        "The ritual is related to death and rebirth"
      ],
      rewards: ["Ritual completion", "Understanding of death mechanics", "Fia's gratitude"]
    },
    {
      step: 7,
      title: "Age of Duskborn Ending",
      location: "Elden Throne",
      description: "Achieve the Age of Duskborn ending",
      details: [
        "Completing Fia's questline unlocks the Age of Duskborn ending",
        "This ending involves death and rebirth",
        "It represents a different approach to the world's problems",
        "The world is changed through death rather than life"
      ],
      rewards: ["Age of Duskborn Ending", "Mending Rune of the Death-Prince", "Complete questline"]
    }
  ];

  // Questline data for Knight Bernahl
  const bernahlQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "Warmaster's Shack, Limgrave",
      description: "Meet Knight Bernahl at Warmaster's Shack",
      details: [
        "Bernahl is found at Warmaster's Shack in Limgrave",
        "He's a former knight who now serves as a merchant",
        "He sells Ashes of War and provides combat advice",
        "He's friendly and helpful to Tarnished warriors"
      ],
      rewards: ["Access to Ashes of War", "Bernahl's merchant services", "Combat advice"]
    },
    {
      step: 2,
      title: "Volcano Manor Invitation",
      location: "Warmaster's Shack, Limgrave",
      description: "Receive invitation to Volcano Manor",
      details: [
        "After progressing through the game, Bernahl receives an invitation",
        "He's invited to join Volcano Manor as a Recusant",
        "He explains the nature of Recusants and their mission",
        "He offers to help you understand the Volcano Manor questline"
      ],
      rewards: ["Understanding of Recusants", "Access to Volcano Manor", "Bernahl's guidance"]
    },
    {
      step: 3,
      title: "Volcano Manor",
      location: "Volcano Manor, Mt. Gelmir",
      description: "Meet Bernahl at Volcano Manor",
      details: [
        "Bernahl appears at Volcano Manor after joining",
        "He's now a Recusant working for Lady Tanith",
        "He participates in the assassination contracts",
        "He maintains his friendly demeanor despite his new role"
      ],
      rewards: ["Bernahl's continued friendship", "Access to assassination contracts", "Volcano Manor services"]
    },
    {
      step: 4,
      title: "Assassination Contracts",
      location: "Volcano Manor, Mt. Gelmir",
      description: "Work alongside Bernahl on contracts",
      details: [
        "Bernahl participates in the same assassination contracts as you",
        "He provides advice and support during the missions",
        "He explains the philosophy behind the Recusants",
        "He's conflicted about his role but committed to the cause"
      ],
      rewards: ["Bernahl's assistance", "Understanding of Recusant philosophy", "Contract completion"]
    },
    {
      step: 5,
      title: "Bernahl's Departure",
      location: "Volcano Manor, Mt. Gelmir",
      description: "Bernahl leaves Volcano Manor",
      details: [
        "After completing the contracts, Bernahl leaves Volcano Manor",
        "He's disillusioned with the Recusant path",
        "He returns to his original location at Warmaster's Shack",
        "He continues to provide his merchant services"
      ],
      rewards: ["Bernahl's return", "Continued merchant services", "Character development"]
    },
    {
      step: 6,
      title: "Final Encounter",
      location: "Crumbling Farum Azula",
      description: "Final meeting with Bernahl",
      details: [
        "Bernahl can be found in Crumbling Farum Azula",
        "He's there for his own reasons, not as a Recusant",
        "He may become hostile depending on your choices",
        "This represents the end of his character arc"
      ],
      rewards: ["Bernahl's Armor Set", "Devourer's Scepter", "Blasphemous Claw"]
    }
  ];

  // Questline data for Lady Tanith
  const tanithQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "Volcano Manor, Mt. Gelmir",
      description: "Meet Lady Tanith at Volcano Manor",
      details: [
        "Lady Tanith is the leader of Volcano Manor",
        "She's elegant and mysterious, with a commanding presence",
        "She explains the purpose of Volcano Manor and the Recusants",
        "She offers you the opportunity to join their cause"
      ],
      rewards: ["Access to Volcano Manor", "Understanding of Recusants", "Lady Tanith's guidance"]
    },
    {
      step: 2,
      title: "Recusant Initiation",
      location: "Volcano Manor, Mt. Gelmir",
      description: "Become a Recusant under Lady Tanith",
      details: [
        "Lady Tanith initiates you into the Recusants",
        "She explains the philosophy of defying the Erdtree",
        "She gives you the Recusant Finger for invasions",
        "She assigns you your first assassination contract"
      ],
      rewards: ["Recusant Finger", "First assassination contract", "Recusant status"]
    },
    {
      step: 3,
      title: "Assassination Contracts",
      location: "Volcano Manor, Mt. Gelmir",
      description: "Complete contracts for Lady Tanith",
      details: [
        "Lady Tanith assigns you multiple assassination contracts",
        "Each contract targets a specific Tarnished",
        "She provides guidance and rewards for completion",
        "She explains the deeper meaning behind the contracts"
      ],
      rewards: ["Contract rewards", "Lady Tanith's approval", "Recusant progression"]
    },
    {
      step: 4,
      title: "Rykard's Revelation",
      location: "Volcano Manor, Mt. Gelmir",
      description: "Learn about Rykard and the true purpose",
      details: [
        "Lady Tanith reveals the connection to Rykard, Lord of Blasphemy",
        "She explains the true purpose of the Recusants",
        "She reveals her loyalty to Rykard and his goals",
        "This changes the nature of your relationship with her"
      ],
      rewards: ["Understanding of Rykard", "Lady Tanith's true nature", "Story progression"]
    },
    {
      step: 5,
      title: "The God-Devouring Serpent",
      location: "Volcano Manor, Mt. Gelmir",
      description: "Confront Rykard with Lady Tanith",
      details: [
        "Lady Tanith leads you to Rykard's chamber",
        "She's present during the confrontation with Rykard",
        "She may assist or oppose you depending on your choices",
        "This represents a crucial moment in her questline"
      ],
      rewards: ["Rykard's defeat", "Lady Tanith's fate", "Volcano Manor resolution"]
    },
    {
      step: 6,
      title: "Lady Tanith's Fate",
      location: "Volcano Manor, Mt. Gelmir",
      description: "Lady Tanith's ultimate fate",
      details: [
        "After Rykard's defeat, Lady Tanith's fate is determined",
        "She may mourn Rykard or continue her own path",
        "Her story represents loyalty and the consequences of choice",
        "She may provide final rewards or become hostile"
      ],
      rewards: ["Taker's Cameo", "Tanith's Set", "Complete questline"]
    }
  ];

  // Questline data for Latenna the Albinauric
  const latennaQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "Lakeside Crystal Cave, Liurnia",
      description: "Find Latenna in the Lakeside Crystal Cave",
      details: [
        "Latenna is found in the Lakeside Crystal Cave in Liurnia",
        "She's an Albinauric who has been captured and imprisoned",
        "She's guarded by wolves and needs help to escape",
        "She explains her connection to the Haligtree and her people"
      ],
      rewards: ["Latenna's introduction", "Understanding of Albinaurics", "Access to her questline"]
    },
    {
      step: 2,
      title: "Rescuing Latenna",
      location: "Lakeside Crystal Cave, Liurnia",
      description: "Help Latenna escape from her captors",
      details: [
        "Defeat the wolves guarding Latenna",
        "Free her from her imprisonment",
        "She explains her mission to reach the Haligtree",
        "She asks for your help to complete her journey"
      ],
      rewards: ["Latenna's freedom", "Her gratitude", "Understanding of her mission"]
    },
    {
      step: 3,
      title: "Latenna's Request",
      location: "Lakeside Crystal Cave, Liurnia",
      description: "Learn about Latenna's quest",
      details: [
        "Latenna explains her connection to the Haligtree",
        "She needs to reach the Haligtree to help her people",
        "She asks you to help her find the Haligtree Secret Medallion",
        "This medallion is required to access the Haligtree"
      ],
      rewards: ["Understanding of Haligtree", "Quest objective", "Latenna's trust"]
    },
    {
      step: 4,
      title: "Finding the Medallion",
      location: "Village of the Albinaurics, Liurnia",
      description: "Search for the Haligtree Secret Medallion",
      details: [
        "The Haligtree Secret Medallion is found in the Village of the Albinaurics",
        "This village is home to other Albinaurics",
        "The medallion is hidden and requires exploration to find",
        "This connects to the larger Albinauric storyline"
      ],
      rewards: ["Haligtree Secret Medallion", "Access to Haligtree", "Progress in questline"]
    },
    {
      step: 5,
      title: "Latenna's Spirit Ash",
      location: "Lakeside Crystal Cave, Liurnia",
      description: "Latenna becomes a Spirit Ash",
      details: [
        "After helping Latenna, she becomes a Spirit Ash",
        "She can be summoned to help in combat",
        "She's a powerful archer spirit summon",
        "She continues to serve you as a companion"
      ],
      rewards: ["Latenna the Albinauric Spirit Ash", "Powerful spirit summon", "Companion for battles"]
    },
    {
      step: 6,
      title: "Haligtree Access",
      location: "Grand Lift of Rold",
      description: "Use the medallion to access the Haligtree",
      details: [
        "Use the Haligtree Secret Medallion at the Grand Lift of Rold",
        "This provides access to the secret Haligtree area",
        "The Haligtree is home to Malenia and other important characters",
        "This completes Latenna's quest objective"
      ],
      rewards: ["Access to Haligtree", "Complete questline", "Access to Malenia"]
    }
  ];

  // Questline data for Needle Knight Leda
  const ledaQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "Gravesite Plain, Shadow Realm",
      description: "Meet Needle Knight Leda in the Gravesite Plain",
      details: [
        "Leda is found in the Gravesite Plain after entering the Shadow Realm",
        "She's the primary guide for the DLC content",
        "She explains the new mechanics including Scadu Altus",
        "She provides guidance on navigating the Shadow Realm"
      ],
      rewards: ["DLC guidance", "Understanding of Shadow Realm mechanics", "Access to main DLC questline"]
    },
    {
      step: 2,
      title: "Shadow Realm Navigation",
      location: "Gravesite Plain",
      description: "Learn to navigate the Shadow Realm with Leda's guidance",
      details: [
        "Leda teaches you about the Shadow Realm's unique properties",
        "She explains the Scadu Altus upgrade system",
        "She guides you to important locations and Sites of Grace",
        "She helps you understand the new enemy types"
      ],
      rewards: ["Shadow Realm knowledge", "Scadu Altus understanding", "Navigation assistance"]
    },
    {
      step: 3,
      title: "Scadu Altus Plateau",
      location: "Scadu Altus Plateau",
      description: "Progress to the Scadu Altus Plateau with Leda's help",
      details: [
        "Leda guides you through the more challenging areas",
        "She helps you find the Shadow Keep",
        "She provides advice on dealing with advanced enemies",
        "She prepares you for the path to Messmer"
      ],
      rewards: ["Advanced area access", "Shadow Keep location", "Preparation for Messmer"]
    },
    {
      step: 4,
      title: "Shadow Keep Infiltration",
      location: "Shadow Keep",
      description: "Navigate the Shadow Keep with Leda's guidance",
      details: [
        "Leda helps you understand the Shadow Keep's layout",
        "She provides advice on dealing with powerful enemies",
        "She guides you to valuable loot and upgrades",
        "She prepares you for the final challenge"
      ],
      rewards: ["Shadow Keep navigation", "Valuable loot locations", "Preparation for final boss"]
    },
    {
      step: 5,
      title: "Messmer the Impaler",
      location: "Shadow Keep",
      description: "Face Messmer the Impaler with Leda's support",
      details: [
        "Leda provides crucial information about Messmer",
        "She explains his attack patterns and weaknesses",
        "She offers strategies for the difficult boss fight",
        "She supports you through the ultimate DLC challenge"
      ],
      rewards: ["Messmer strategies", "Boss fight preparation", "DLC completion guidance"]
    },
    {
      step: 6,
      title: "DLC Conclusion",
      location: "Shadow Realm",
      description: "Complete the DLC with Leda's guidance",
      details: [
        "Leda helps you understand the DLC's conclusion",
        "She provides insights into the story revelations",
        "She guides you to final rewards and endings",
        "She completes her role as your DLC guide"
      ],
      rewards: ["DLC completion", "Story understanding", "Final rewards", "Leda's Rune"]
    }
  ];

  // Questline data for Hornsent
  const hornsentQuestline = [
    {
      step: 1,
      title: "First Encounter",
      location: "Shadow Realm",
      description: "Meet Hornsent in the Shadow Realm",
      details: [
        "Hornsent is found in the Shadow Realm",
        "He's a native warrior with a tragic past",
        "He has deep knowledge of the realm's history",
        "He's initially wary but can become an ally"
      ],
      rewards: ["Shadow Realm lore", "Hornsent's introduction", "Access to his questline"]
    },
    {
      step: 2,
      title: "Shadow Realm History",
      location: "Shadow Realm",
      description: "Learn about the Shadow Realm's history from Hornsent",
      details: [
        "Hornsent reveals the realm's tragic past",
        "He explains the connection to Messmer",
        "He shares knowledge about ancient conflicts",
        "He provides context for the DLC's events"
      ],
      rewards: ["Historical knowledge", "Lore insights", "Understanding of DLC context"]
    },
    {
      step: 3,
      title: "Hornsent's Quest",
      location: "Shadow Realm",
      description: "Help Hornsent with his personal quest",
      details: [
        "Hornsent asks for help with a personal matter",
        "He seeks to resolve his tragic past",
        "He may need assistance with enemies or items",
        "His quest reveals more about the realm's secrets"
      ],
      rewards: ["Hornsent's trust", "Additional lore", "Quest progression"]
    },
    {
      step: 4,
      title: "Hornsent's Resolution",
      location: "Shadow Realm",
      description: "Help Hornsent find resolution for his past",
      details: [
        "Hornsent confronts his tragic history",
        "He may need to face old enemies or memories",
        "He seeks closure for his people's suffering",
        "His resolution provides valuable insights"
      ],
      rewards: ["Hornsent's Armor Set", "Hornsent's Weapons", "Shadow Realm knowledge"]
    }
  ];

  // Questline data for Count Ymir
  const ymirQuestline = [
    {
      step: 1,
      title: "First Meeting",
      location: "Shadow Realm",
      description: "Meet Count Ymir in the Shadow Realm",
      details: [
        "Count Ymir is found in the Shadow Realm",
        "He's a prophetic figure with deep knowledge",
        "He speaks in riddles and prophecies",
        "He has insights about Messmer and the realm's purpose"
      ],
      rewards: ["Prophetic knowledge", "Ymir's introduction", "Access to his questline"]
    },
    {
      step: 2,
      title: "Ancient Prophecies",
      location: "Shadow Realm",
      description: "Learn about ancient prophecies from Count Ymir",
      details: [
        "Ymir reveals ancient prophecies about the Shadow Realm",
        "He explains the true nature of Messmer",
        "He shares insights about the realm's purpose",
        "His prophecies provide crucial story context"
      ],
      rewards: ["Prophetic insights", "Story revelations", "Understanding of Messmer"]
    },
    {
      step: 3,
      title: "Ymir's Research",
      location: "Shadow Realm",
      description: "Help Count Ymir with his research into the realm's secrets",
      details: [
        "Ymir asks for help gathering ancient knowledge",
        "He may need specific items or information",
        "His research reveals deeper mysteries",
        "He uncovers secrets about the realm's creation"
      ],
      rewards: ["Ancient knowledge", "Research assistance", "Deeper lore understanding"]
    },
    {
      step: 4,
      title: "Shadow Realm Secrets",
      location: "Shadow Realm",
      description: "Uncover the Shadow Realm's deepest secrets with Ymir",
      details: [
        "Ymir reveals the realm's ultimate purpose",
        "He explains the connection to the main game",
        "He provides insights into the DLC's ending",
        "His knowledge is crucial for understanding the story"
      ],
      rewards: ["Ymir's Armor Set", "Prophet's Staff", "Ymir's Bell Bearing", "Shadow Realm secrets"]
    }
  ];

  const getQuestlineData = (npcId) => {
    switch (npcId) {
      case 'varre':
        return varreQuestline;
      case 'melina':
        return melinaQuestline;
      case 'ranni':
        return ranniQuestline;
      case 'blaidd':
        return blaiddQuestline;
      case 'alexander':
        return alexanderQuestline;
      case 'nepheli':
        return nepheliQuestline;
      case 'patches':
        return patchesQuestline;
      case 'sellen':
        return sellenQuestline;
      case 'millicent':
        return millicentQuestline;
      case 'gurranq':
        return gurranqQuestline;
      case 'dung-eater':
        return dungEaterQuestline;
      case 'fia':
        return fiaQuestline;
      case 'bernahl':
        return bernahlQuestline;
      case 'tanith':
        return tanithQuestline;
      case 'latenna':
        return latennaQuestline;
      case 'needle-knight-leda':
        return ledaQuestline;
      case 'hornsent':
        return hornsentQuestline;
      case 'count-ymir':
        return ymirQuestline;
      default:
        return [];
    }
  };

  const questlineData = getQuestlineData(npcId);

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Easy: 'text-green-400 bg-green-400/10',
      Moderate: 'text-yellow-400 bg-yellow-400/10',
      Complex: 'text-red-400 bg-red-400/10',
      Automatic: 'text-blue-400 bg-blue-400/10',
    };
    return colors[difficulty] || colors.Easy;
  };

  const getStatusColor = (status) => {
    const colors = {
      Essential: 'text-red-400 bg-red-400/10',
      Important: 'text-orange-400 bg-orange-400/10',
      Optional: 'text-green-400 bg-green-400/10',
    };
    return colors[status] || colors.Optional;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="content-card mb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <Link
              href="/npcs"
              className="flex items-center text-slate-400 hover:text-white transition-colors mb-4"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to NPCs
            </Link>
            <h1 className="fantasy-heading text-3xl md:text-4xl font-bold mb-2">
              {npc.name}
            </h1>
            <p className="text-xl text-slate-300 mb-3">
              {npc.title}
            </p>
            <p className="text-slate-400 mb-4">
              {npc.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4" />
                {npc.location}
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4" />
                {npc.questLength}
              </div>
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getDifficultyColor(npc.difficulty)}`}>
                <Star className="w-4 h-4" />
                {npc.difficulty}
              </div>
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getStatusColor(npc.status)}`}>
                <Users className="w-4 h-4" />
                {npc.status}
              </div>
            </div>
          </div>
          <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={npc.image}
              alt={npc.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Questline Steps */}
      {questlineData.length > 0 ? (
        <div className="content-card">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Target className="w-6 h-6" />
            Questline Steps
          </h2>
          
          <div className="space-y-6">
            {questlineData.map((step, index) => (
              <div key={index} className="border-l-4 border-elden-500 pl-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-elden-600 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-1 text-slate-400 text-sm">
                        <MapPin className="w-3 h-3" />
                        {step.location}
                      </div>
                    </div>
                    <p className="text-slate-300 mb-3">
                      {step.description}
                    </p>
                    
                    {step.details && (
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                          Key Details
                        </h4>
                        <ul className="space-y-1">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-elden-400 rounded-full mt-2 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {step.rewards && (
                      <div className="bg-elden-800/30 rounded-lg p-3">
                        <h4 className="text-sm font-semibold text-erdtree-400 mb-2 flex items-center gap-2">
                          <Gift className="w-4 h-4" />
                          Rewards
                        </h4>
                        <ul className="space-y-1">
                          {step.rewards.map((reward, idx) => (
                            <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                              <ArrowRight className="w-3 h-3 text-erdtree-400 mt-0.5 flex-shrink-0" />
                              {reward}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="content-card p-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Questline Not Available</h3>
          <p className="text-slate-400">
            Detailed questline information for this NPC is not yet available.
          </p>
        </div>
      )}

      {/* Rewards Summary */}
      <div className="content-card mt-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Gift className="w-5 h-5" />
          Quest Rewards
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {npc.rewards.map((reward, index) => (
            <div key={index} className="flex items-center gap-2 p-3 bg-elden-800/20 rounded-lg border border-elden-600/30">
              <ArrowRight className="w-4 h-4 text-erdtree-400" />
              <span className="text-slate-300">{reward}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 