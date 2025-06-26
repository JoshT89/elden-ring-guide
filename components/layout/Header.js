'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Sword, Map, Users, Shield } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Walkthrough', href: '/walkthrough', icon: Map },
    { name: 'Search', href: '/search', icon: Search },
    { name: 'Regions', href: '/regions', icon: Map },
    { name: 'Bosses', href: '/bosses', icon: Sword },
    { name: 'NPCs', href: '/npcs', icon: Users },
    { name: 'Equipment', href: '/equipment', icon: Shield },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-elden-800/95 backdrop-blur-sm border-b border-erdtree-600/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-erdtree-gradient rounded-full flex items-center justify-center erdtree-glow">
              <Sword className="w-5 h-5 text-elden-900" />
            </div>
            <span className="fantasy-heading text-xl font-bold hidden sm:block">
              Elden Ring Guide
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-erdtree-400 bg-elden-700/50'
                      : 'text-slate-300 hover:text-erdtree-400 hover:bg-elden-700/30'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4" />}
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-erdtree-400 hover:bg-elden-700/30 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-erdtree-600/30">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`nav-link px-3 py-3 rounded-md text-base font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-erdtree-400 bg-elden-700/50'
                        : 'text-slate-300 hover:text-erdtree-400 hover:bg-elden-700/30'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {Icon && <Icon className="w-5 h-5" />}
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}