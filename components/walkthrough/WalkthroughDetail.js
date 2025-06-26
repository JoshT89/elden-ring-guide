'use client';

import { useState } from 'react';
import { ChevronLeft, Clock, Star, MapPin, Target, BookOpen, Shield, Sword, Users, Lightbulb, Play, Map } from 'lucide-react';
import { getWalkthroughSection } from '@/lib/data/walkthroughContent';

export default function WalkthroughDetail({ sectionId, onBack }) {
  const [activeTab, setActiveTab] = useState('walkthrough');
  const section = getWalkthroughSection(sectionId);

  if (!section) {
    return (
      <div className="content-card p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Section Not Found</h2>
        <p className="text-slate-400 mb-6">The requested walkthrough section could not be found.</p>
        <button
          onClick={onBack}
          className="btn-primary"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Walkthrough
        </button>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Beginner: 'text-green-400 bg-green-400/10',
      Intermediate: 'text-yellow-400 bg-yellow-400/10',
      Advanced: 'text-orange-400 bg-orange-400/10',
      Expert: 'text-red-400 bg-red-400/10',
    };
    return colors[difficulty] || colors.Beginner;
  };

  const tabs = [
    { id: 'walkthrough', label: 'Walkthrough', icon: BookOpen },
    { id: 'objectives', label: 'Objectives', icon: Target },
    { id: 'items', label: 'Items', icon: Sword },
    { id: 'enemies', label: 'Enemies', icon: Shield },
    { id: 'npcs', label: 'NPCs', icon: Users },
    { id: 'tips', label: 'Tips', icon: Lightbulb },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="content-card mb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <button
              onClick={onBack}
              className="flex items-center text-slate-400 hover:text-white transition-colors mb-4"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Walkthrough
            </button>
            <h1 className="fantasy-heading text-3xl md:text-4xl font-bold mb-2">
              {section.title}
            </h1>
            <p className="text-xl text-slate-300 mb-3">
              {section.subtitle}
            </p>
            <p className="text-slate-400 mb-4">
              {section.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4" />
                {section.estimatedTime}
              </div>
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getDifficultyColor(section.difficulty)}`}>
                <Star className="w-4 h-4" />
                {section.difficulty}
              </div>
              {section.mapImage && (
                <div className="flex items-center gap-2 text-slate-300">
                  <Map className="w-4 h-4" />
                  Map Available
                </div>
              )}
            </div>
          </div>
          {section.videoGuide && (
            <a
              href={section.videoGuide}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Watch Guide
            </a>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="content-card mb-6">
        <div className="flex flex-wrap gap-2 border-b border-elden-600/30 pb-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-elden-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-elden-800/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'walkthrough' && (
            <div className="space-y-6">
              {section.walkthrough?.map((step, index) => (
                <div key={index} className="border-l-4 border-elden-500 pl-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-elden-600 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-300 mb-4">
                        {step.description}
                      </p>
                      
                      {step.details && (
                        <div className="mb-4">
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

                      {step.tips && (
                        <div className="bg-elden-800/30 rounded-lg p-4">
                          <h4 className="text-sm font-semibold text-yellow-400 mb-2 uppercase tracking-wide">
                            Pro Tips
                          </h4>
                          <ul className="space-y-1">
                            {step.tips.map((tip, idx) => (
                              <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                                <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                {tip}
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
          )}

          {activeTab === 'objectives' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Objectives</h3>
              <div className="grid gap-3">
                {section.objectives?.map((objective, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-elden-800/20 rounded-lg border border-elden-600/30">
                    <div className="w-6 h-6 bg-elden-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <span className="text-slate-300">{objective}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'items' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Items & Rewards</h3>
              <div className="grid gap-4">
                {section.items?.map((item, index) => (
                  <div key={index} className="p-4 bg-elden-800/20 rounded-lg border border-elden-600/30">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                      <span className="text-xs px-2 py-1 bg-elden-600 rounded text-slate-300">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-slate-300 mb-2">{item.description}</p>
                    {item.location && (
                      <p className="text-sm text-slate-400">
                        <span className="font-semibold">Location:</span> {item.location}
                      </p>
                    )}
                    {item.requirements && (
                      <p className="text-sm text-slate-400">
                        <span className="font-semibold">Requirements:</span> {item.requirements}
                      </p>
                    )}
                    {item.usage && (
                      <p className="text-sm text-slate-400">
                        <span className="font-semibold">Usage:</span> {item.usage}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'enemies' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Enemies & Bosses</h3>
              <div className="grid gap-4">
                {section.enemies?.map((enemy, index) => (
                  <div key={index} className="p-4 bg-elden-800/20 rounded-lg border border-elden-600/30">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">{enemy.name}</h4>
                      <div className="flex gap-2">
                        <span className="text-xs px-2 py-1 bg-elden-600 rounded text-slate-300">
                          {enemy.type}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          enemy.difficulty === 'Very Easy' ? 'bg-green-600 text-green-100' :
                          enemy.difficulty === 'Easy' ? 'bg-green-500 text-green-100' :
                          enemy.difficulty === 'Medium' ? 'bg-yellow-600 text-yellow-100' :
                          enemy.difficulty === 'Hard' ? 'bg-orange-600 text-orange-100' :
                          'bg-red-600 text-red-100'
                        }`}>
                          {enemy.difficulty}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-3">{enemy.strategy}</p>
                    {enemy.attacks && (
                      <div className="mb-3">
                        <h5 className="text-sm font-semibold text-slate-400 mb-1">Attacks:</h5>
                        <ul className="space-y-1">
                          {enemy.attacks.map((attack, idx) => (
                            <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                              {attack}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {enemy.drops && (
                      <p className="text-sm text-slate-400">
                        <span className="font-semibold">Drops:</span> {enemy.drops}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'npcs' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">NPCs & Characters</h3>
              <div className="grid gap-4">
                {section.npcs?.map((npc, index) => (
                  <div key={index} className="p-4 bg-elden-800/20 rounded-lg border border-elden-600/30">
                    <h4 className="text-lg font-semibold text-white mb-2">{npc.name}</h4>
                    <p className="text-slate-300 mb-2">{npc.description}</p>
                    <p className="text-sm text-slate-400 mb-2">
                      <span className="font-semibold">Location:</span> {npc.location}
                    </p>
                    {npc.questline && (
                      <p className="text-sm text-slate-400">
                        <span className="font-semibold">Questline:</span> {npc.questline}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">General Tips</h3>
              <div className="grid gap-3">
                {section.tips?.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-elden-800/20 rounded-lg border border-elden-600/30">
                    <Lightbulb className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Next Section */}
      {section.nextSection && (
        <div className="content-card">
          <h3 className="text-lg font-semibold text-white mb-3">Continue Your Journey</h3>
          <p className="text-slate-400 mb-4">
            Ready for the next challenge? Continue to the next section of your adventure.
          </p>
          <button
            onClick={() => onBack(section.nextSection)}
            className="btn-primary"
          >
            Continue to Next Section
          </button>
        </div>
      )}
    </div>
  );
} 