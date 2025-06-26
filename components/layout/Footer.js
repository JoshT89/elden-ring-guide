import Link from 'next/link';
import { Github, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-elden-900/50 backdrop-blur-sm border-t border-erdtree-600/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="fantasy-heading text-lg font-semibold mb-4">About This Guide</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A comprehensive, accessible walkthrough for Elden Ring and Shadow of the Erdtree, 
              designed to help all players, including kids and special needs gamers, navigate 
              the Lands Between.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="fantasy-heading text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/walkthrough" className="text-slate-400 hover:text-erdtree-400 transition-colors text-sm">
                Walkthrough
              </Link>
              <Link href="/search" className="text-slate-400 hover:text-erdtree-400 transition-colors text-sm">
                Search
              </Link>
              <Link href="/bosses" className="text-slate-400 hover:text-erdtree-400 transition-colors text-sm">
                Bosses
              </Link>
              <Link href="/npcs" className="text-slate-400 hover:text-erdtree-400 transition-colors text-sm">
                NPCs
              </Link>
              <Link href="/regions" className="text-slate-400 hover:text-erdtree-400 transition-colors text-sm">
                Regions
              </Link>
              <Link href="/equipment" className="text-slate-400 hover:text-erdtree-400 transition-colors text-sm">
                Equipment
              </Link>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="fantasy-heading text-lg font-semibold mb-4">Community</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.reddit.com/r/Eldenring"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-erdtree-400 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Elden Ring Reddit
              </a>
              <a
                href="https://en.bandainamcoent.eu/elden-ring/elden-ring"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-erdtree-400 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Official Website
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-erdtree-600/30 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm">
            © 2024 Elden Ring Guide. Fan-made walkthrough for educational purposes.
          </p>
          <div className="flex items-center gap-1 text-slate-500 text-sm mt-2 sm:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500" /> for the Tarnished
          </div>
        </div>
      </div>
    </footer>
  );
}