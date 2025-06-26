'use client';

import Link from 'next/link';
import { Search, Map, Sword, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-elden-900/80 to-shadow-900/60" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="fantasy-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Complete Elden Ring Guide
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-slide-up">
            Step-by-step walkthrough for <span className="text-erdtree-400">Elden Ring</span> and{' '}
            <span className="text-shadow-400">Shadow of the Erdtree</span>
          </p>
          
          {/* Description */}
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Accessible, searchable, and comprehensive guide designed for all players. 
            Find bosses, NPCs, quests, weapons, armor, and secrets with ease.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/walkthrough"
              className="bg-erdtree-gradient hover:bg-erdtree-600 text-elden-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 erdtree-glow flex items-center gap-2 min-w-48"
            >
              <Map className="w-5 h-5" />
              Start Walkthrough
            </Link>
            
            <Link
              href="/search"
              className="bg-elden-700 hover:bg-elden-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 border border-elden-600 flex items-center gap-2 min-w-48"
            >
              <Search className="w-5 h-5" />
              Search Guide
            </Link>
          </div>
          
          {/* Quick stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="content-card p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-erdtree-400 mb-2">150+</div>
              <div className="text-slate-400">Bosses Covered</div>
            </div>
            
            <div className="content-card p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-erdtree-400 mb-2">50+</div>
              <div className="text-slate-400">NPC Questlines</div>
            </div>
            
            <div className="content-card p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-erdtree-400 mb-2">300+</div>
              <div className="text-slate-400">Weapons & Items</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}