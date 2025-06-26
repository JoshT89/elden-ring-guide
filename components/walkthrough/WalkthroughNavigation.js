'use client';

import { useState } from 'react';
import { ChevronRight, ChevronDown, MapPin, Clock, Star } from 'lucide-react';
import WalkthroughDetail from './WalkthroughDetail';

export default function WalkthroughNavigation() {
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedSection, setSelectedSection] = useState(null);

  const walkthroughSections = [
    {
      id: 'early-game',
      title: 'Early Game (Limgrave)',
      description: 'Starting your journey in the Lands Between',
      estimatedTime: '8-12 hours',
      difficulty: 'Beginner',
      steps: [
        { id: 'tutorial', title: 'Tutorial & Cave of Knowledge', completed: false },
        { id: 'limgrave-start', title: 'First Steps in Limgrave', completed: false },
        { id: 'gatefront', title: 'Gatefront Ruins & Torrent', completed: false },
        { id: 'margit', title: 'Margit, the Fell Omen', completed: false },
        { id: 'stormveil', title: 'Stormveil Castle', completed: false },
        { id: 'godrick', title: 'Godrick the Grafted', completed: false },
      ],
    },
    {
      id: 'mid-game',
      title: 'Mid Game (Liurnia & Weeping Peninsula)',
      description: 'Expanding your exploration to new regions',
      estimatedTime: '15-20 hours',
      difficulty: 'Intermediate',
      steps: [
        { id: 'liurnia-entry', title: 'Entering Liurnia of the Lakes', completed: false },
        { id: 'raya-lucaria', title: 'Raya Lucaria Academy', completed: false },
        { id: 'rennala', title: 'Rennala, Queen of the Full Moon', completed: false },
        { id: 'weeping-peninsula', title: 'Weeping Peninsula Exploration', completed: false },
        { id: 'caelid-basics', title: 'Surviving Early Caelid', completed: false },
        { id: 'radahn', title: 'Starscourge Radahn Festival', completed: false },
      ],
    },
    {
      id: 'late-game',
      title: 'Late Game (Altus Plateau & Beyond)',
      description: 'The final stretch to the Erdtree',
      estimatedTime: '20-25 hours',
      difficulty: 'Advanced',
      steps: [
        { id: 'altus-plateau', title: 'Altus Plateau Exploration', completed: false },
        { id: 'leyndell', title: 'Leyndell, Royal Capital', completed: false },
        { id: 'morgott', title: 'Morgott, the Omen King', completed: false },
        { id: 'mountain-tops', title: 'Mountaintops of the Giants', completed: false },
        { id: 'fire-giant', title: 'Fire Giant Boss Fight', completed: false },
        { id: 'crumbling-farum', title: 'Crumbling Farum Azula', completed: false },
        { id: 'final-bosses', title: 'Final Boss Encounters', completed: false },
      ],
    },
    {
      id: 'shadow-erdtree',
      title: 'Shadow of the Erdtree',
      description: 'The realm of shadow awaits',
      estimatedTime: '25-35 hours',
      difficulty: 'Expert',
      steps: [
        { id: 'shadow-entry', title: 'Entering the Shadow Realm', completed: false },
        { id: 'gravesite-plain', title: 'Gravesite Plain Exploration', completed: false },
        { id: 'scadu-altus', title: 'Scadu Altus Plateau', completed: false },
        { id: 'shadow-keep', title: 'Shadow Keep Infiltration', completed: false },
        { id: 'messmer', title: 'Messmer the Impaler', completed: false },
        { id: 'final-shadow', title: 'Final Shadow Bosses', completed: false },
      ],
    },
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleStepClick = (stepId) => {
    setSelectedSection(stepId);
  };

  const handleBackToNavigation = () => {
    setSelectedSection(null);
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Beginner: 'text-green-400',
      Intermediate: 'text-yellow-400',
      Advanced: 'text-orange-400',
      Expert: 'text-red-400',
    };
    return colors[difficulty] || colors.Beginner;
  };

  const getDifficultyBg = (difficulty) => {
    const colors = {
      Beginner: 'bg-green-400/10',
      Intermediate: 'bg-yellow-400/10',
      Advanced: 'bg-orange-400/10',
      Expert: 'bg-red-400/10',
    };
    return colors[difficulty] || colors.Beginner;
  };

  // If a section is selected, show the detailed view
  if (selectedSection) {
    return (
      <WalkthroughDetail 
        sectionId={selectedSection} 
        onBack={handleBackToNavigation}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="fantasy-heading text-3xl md:text-4xl font-bold mb-4">
          Complete Walkthrough
        </h1>
        <p className="text-slate-400 text-lg">
          Step-by-step guide through Elden Ring and Shadow of the Erdtree
        </p>
      </div>

      <div className="space-y-6">
        {walkthroughSections.map((section) => {
          const isExpanded = expandedSections[section.id];
          const completedSteps = section.steps.filter(step => step.completed).length;
          const totalSteps = section.steps.length;
          const progress = (completedSteps / totalSteps) * 100;

          return (
            <div key={section.id} className="content-card rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 text-left hover:bg-elden-800/20 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-xl text-white">
                        {section.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(section.difficulty)} ${getDifficultyBg(section.difficulty)}`}>
                        {section.difficulty}
                      </span>
                    </div>
                    <p className="text-slate-400 mb-3">
                      {section.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {section.estimatedTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {completedSteps}/{totalSteps} completed
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="mt-3 bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-erdtree-gradient h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="border-t border-elden-600/30 p-6">
                  <div className="space-y-3">
                    {section.steps.map((step, index) => (
                      <button
                        key={step.id}
                        onClick={() => handleStepClick(step.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                          step.completed 
                            ? 'bg-green-500/10 border border-green-500/20 hover:bg-green-500/20' 
                            : 'bg-elden-800/20 hover:bg-elden-800/40 border border-elden-600/30'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          step.completed 
                            ? 'bg-green-500 text-white' 
                            : 'bg-elden-600 text-slate-300'
                        }`}>
                          {step.completed ? '✓' : index + 1}
                        </div>
                        <span className={`flex-1 text-left ${
                          step.completed ? 'text-green-400' : 'text-white'
                        }`}>
                          {step.title}
                        </span>
                        {step.completed && (
                          <Star className="w-4 h-4 text-yellow-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <div className="content-card p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">Need Help?</h3>
          <p className="text-slate-400 mb-4">
            Each section contains detailed guides, tips, and strategies to help you progress.
          </p>
          <button className="bg-erdtree-gradient text-elden-900 px-6 py-2 rounded-lg font-medium hover:bg-erdtree-600 transition-colors">
            View Detailed Guides
          </button>
        </div>
      </div>
    </div>
  );
}