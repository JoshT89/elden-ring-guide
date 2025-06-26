'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, X, MapPin, Sword, Users, Shield } from 'lucide-react';
import { sampleData } from '@/lib/data/sampleData';

export default function SearchInterface() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All', icon: Search },
    { id: 'bosses', name: 'Bosses', icon: Sword },
    { id: 'npcs', name: 'NPCs', icon: Users },
    { id: 'locations', name: 'Locations', icon: MapPin },
    { id: 'equipment', name: 'Equipment', icon: Shield },
  ];

  const performSearch = async (searchQuery, category) => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      let filtered = sampleData;
      
      if (category !== 'all') {
        filtered = filtered.filter(item => item.category === category);
      }
      
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(item =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }
      
      setResults(filtered);
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    performSearch(query, selectedCategory);
  }, [query, selectedCategory]);

  const getCategoryIcon = (category) => {
    const icons = {
      bosses: Sword,
      npcs: Users,
      locations: MapPin,
      equipment: Shield,
    };
    const Icon = icons[category] || Search;
    return <Icon className="w-4 h-4" />;
  };

  const getCategoryColor = (category) => {
    const colors = {
      bosses: 'text-red-400',
      npcs: 'text-blue-400',
      locations: 'text-green-400',
      equipment: 'text-yellow-400',
    };
    return colors[category] || 'text-slate-400';
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="fantasy-heading text-3xl md:text-4xl font-bold mb-4">
          Search the Guide
        </h1>
        <p className="text-slate-400 text-lg">
          Find any boss, NPC, location, or item in Elden Ring and Shadow of the Erdtree
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="search-glow relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for bosses, NPCs, locations, weapons..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-4 bg-elden-800/50 border border-elden-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-erdtree-500 focus:ring-2 focus:ring-erdtree-500/20 transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-erdtree-600 text-elden-900'
                    : 'bg-elden-700/30 text-slate-300 hover:bg-elden-700/50 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-erdtree-400"></div>
            <p className="text-slate-400 mt-4">Searching...</p>
          </div>
        ) : results.length > 0 ? (
          <>
            <div className="text-slate-400 text-sm mb-4">
              Found {results.length} results
              {query && ` for "${query}"`}
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </div>
            {results.map((item) => (
              <div
                key={item.id}
                className="content-card p-6 rounded-xl hover:bg-elden-800/30 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`p-2 rounded-lg bg-slate-800/50 ${getCategoryColor(item.category)}`}>
                      {getCategoryIcon(item.category)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg text-white">
                        {item.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded ${getCategoryColor(item.category)} bg-slate-800/50`}>
                        {item.category}
                      </span>
                    </div>
                    <p className="text-slate-400 mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-elden-700/30 text-slate-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : query || selectedCategory !== 'all' ? (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <p className="text-slate-400 text-lg mb-2">No results found</p>
            <p className="text-slate-500">
              Try adjusting your search terms or category filters
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <p className="text-slate-400 text-lg">
              Start typing to search the guide
            </p>
          </div>
        )}
      </div>
    </div>
  );
}