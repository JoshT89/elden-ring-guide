import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Elden Ring Complete Guide | Step-by-Step Walkthrough',
  description: 'Complete interactive walkthrough guide for Elden Ring and Shadow of the Erdtree. Find bosses, NPCs, quests, weapons, armor, and secrets with our comprehensive search.',
  keywords: 'Elden Ring, Shadow of the Erdtree, walkthrough, guide, bosses, NPCs, quests, weapons, armor, secrets',
  authors: [{ name: 'Elden Ring Guide Team' }],
  openGraph: {
    title: 'Elden Ring Complete Guide',
    description: 'Complete interactive walkthrough guide for Elden Ring and Shadow of the Erdtree',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2D4A3D" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}