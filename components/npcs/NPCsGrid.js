'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Users, MapPin, Gift, CheckCircle, Filter, ChevronDown } from 'lucide-react';
import { npcData } from '@/lib/data/npcData';

export default function NPCsGrid() {
  const [selectedExpansion, setSelectedExpansion] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedStoryline, setSelectedStoryline] = useState('All');

  // Filter NPCs based on selected criteria
  const filteredNPCs = npcData.filter(npc => {
    const expansionMatch = selectedExpansion === 'All' || npc.expansion === selectedExpansion;
    const statusMatch = selectedStatus === 'All' || npc.status === selectedStatus;
    const storylineMatch = selectedStoryline === 'All' || npc.storyline === selectedStoryline;
    return expansionMatch && statusMatch && storylineMatch;
  }).sort((a, b) => a.order - b.order);

  const getStatusColor = (status) => {
    const colors = {
      Essential: 'text-red-400 bg-red-400/10',
      Important: 'text-orange-400 bg-orange-400/10',
      Optional: 'text-green-400 bg-green-400/10',
    };
    return colors[status] || colors.Optional;
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Easy: 'text-green-400',
      Moderate: 'text-yellow-400',
      Complex: 'text-red-400',
      Automatic: 'text-blue-400',
    };
    return colors[difficulty] || colors.Easy;
  };

  const getQuestLengthColor = (length) => {
    const colors = {
      Short: 'text-green-400',
      Medium: 'text-yellow-400',
      Long: 'text-red-400',
      Automatic: 'text-blue-400',
    };
    return colors[length] || colors.Short;
  };

  const getExpansionColor = (expansion) => {
    return expansion === 'Shadow of the Erdtree' 
      ? 'bg-shadow-600 text-white' 
      : 'bg-elden-600 text-white';
  };

  const getStorylineColor = (storyline) => {
    const colors = {
      'Early Game': 'bg-green-600/20 text-green-400',
      'Main Story': 'bg-red-600/20 text-red-400',
      'Ranni Questline': 'bg-blue-600/20 text-blue-400',
      'Companion Quest': 'bg-purple-600/20 text-purple-400',
      'Side Quest': 'bg-yellow-600/20 text-yellow-400',
      'Magic Questline': 'bg-cyan-600/20 text-cyan-400',
      'Faith Questline': 'bg-orange-600/20 text-orange-400',
      'Volcano Manor': 'bg-red-600/20 text-red-400',
      'Frenzied Flame': 'bg-red-600/20 text-red-400',
      'Shadow of the Erdtree': 'bg-shadow-600/20 text-shadow-400',
    };
    return colors[storyline] || 'bg-slate-600/20 text-slate-400';
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="fantasy-heading text-3xl md:text-4xl font-bold mb-4">
          NPCs & Questlines
        </h1>
        <p className="text-slate-400 text-lg">
          Complete guides for every NPC questline in Elden Ring and Shadow of the Erdtree
        </p>
      </div>

      {/* Filters */}
      <div className="content-card mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-semibold text-slate-300">Filters:</span>
          </div>
          
          <select
            value={selectedExpansion}
            onChange={(e) => setSelectedExpansion(e.target.value)}
            className="bg-elden-800 border border-elden-600 text-white rounded px-3 py-1 text-sm"
          >
            <option value="All">All Expansions</option>
            <option value="Base Game">Base Game</option>
            <option value="Shadow of the Erdtree">Shadow of the Erdtree</option>
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-elden-800 border border-elden-600 text-white rounded px-3 py-1 text-sm"
          >
            <option value="All">All Status</option>
            <option value="Essential">Essential</option>
            <option value="Important">Important</option>
            <option value="Optional">Optional</option>
          </select>

          <select
            value={selectedStoryline}
            onChange={(e) => setSelectedStoryline(e.target.value)}
            className="bg-elden-800 border border-elden-600 text-white rounded px-3 py-1 text-sm"
          >
            <option value="All">All Storylines</option>
            <option value="Early Game">Early Game</option>
            <option value="Main Story">Main Story</option>
            <option value="Ranni Questline">Ranni Questline</option>
            <option value="Companion Quest">Companion Quest</option>
            <option value="Side Quest">Side Quest</option>
            <option value="Magic Questline">Magic Questline</option>
            <option value="Faith Questline">Faith Questline</option>
            <option value="Volcano Manor">Volcano Manor</option>
            <option value="Frenzied Flame">Frenzied Flame</option>
            <option value="Shadow of the Erdtree">Shadow of the Erdtree</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNPCs.map((npc) => (
          <Link
            key={npc.id}
            href={`/npcs/${npc.id}`}
            className="content-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
          >
            <div className="relative">
              <div className="aspect-video overflow-hidden">
                <img
                  src={npc.image}
                  alt={npc.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                <span className={`text-xs px-2 py-1 rounded ${getExpansionColor(npc.expansion)}`}>
                  {npc.expansion}
                </span>
                <span className={`text-xs px-2 py-1 rounded border ${getStatusColor(npc.status)}`}>
                  {npc.status}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="fantasy-heading text-lg font-bold text-white mb-1">
                  {npc.name}
                </h3>
                <p className="text-sm text-slate-300">
                  {npc.title}
                </p>
              </div>
            </div>

            <div className="p-6">
              <p className="text-slate-400 text-sm mb-4">
                {npc.description}
              </p>

              <div className="mb-3">
                <span className={`text-xs px-2 py-1 rounded ${getStorylineColor(npc.storyline)}`}>
                  {npc.storyline}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Location:
                  </span>
                  <p className="text-white">{npc.location}</p>
                </div>
                <div>
                  <span className="text-slate-500">Quest Length:</span>
                  <p className={getQuestLengthColor(npc.questLength)}>
                    {npc.questLength}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Gift className="w-4 h-4" />
                  Rewards:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {npc.rewards.slice(0, 2).map((reward, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-erdtree-600/20 text-erdtree-400 rounded"
                    >
                      {reward}
                    </span>
                  ))}
                  {npc.rewards.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-slate-600/20 text-slate-400 rounded">
                      +{npc.rewards.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className={`text-xs ${getDifficultyColor(npc.difficulty)}`}>
                  {npc.difficulty} Difficulty
                </span>
                <span className="text-erdtree-400 group-hover:text-erdtree-300 flex items-center gap-1">
                  View Quest
                  <Users className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredNPCs.length === 0 && (
        <div className="content-card p-8 text-center">
          <p className="text-slate-400">No NPCs match the selected filters.</p>
        </div>
      )}

      <div className="mt-12 text-center">
        <div className="content-card p-6 rounded-xl max-w-2xl mx-auto">
          <CheckCircle className="w-8 h-8 text-erdtree-400 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Quest Completion Tips</h3>
          <p className="text-slate-400 mb-4">
            Each questline guide includes step-by-step instructions, location maps, and missable content warnings.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-xs px-3 py-1 bg-red-400/10 text-red-400 rounded-full">
              Essential Quests
            </span>
            <span className="text-xs px-3 py-1 bg-orange-400/10 text-orange-400 rounded-full">
              Important Quests
            </span>
            <span className="text-xs px-3 py-1 bg-green-400/10 text-green-400 rounded-full">
              Optional Quests
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}