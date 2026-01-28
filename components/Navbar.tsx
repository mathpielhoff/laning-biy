
import React from 'react';
import { Bot } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full glass-card border-b border-white/20 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = '#'}>
          <div className="bg-old-rose p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
            <Bot size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Bot<span className="text-old-rose">It</span>Yourself
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-old-rose transition-colors">Fonctionnalités</a>
          <a href="#" className="hover:text-old-rose transition-colors">Connecteurs</a>
          <a href="#" className="hover:text-old-rose transition-colors">Sécurité</a>
          <a href="#" className="hover:text-white transition-colors">Tarifs</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold text-gray-700 hover:text-old-rose" onClick={() => window.location.href = '#'}>
            Connexion
          </button>
          <button className="bg-old-rose text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-old-rose/20 hover:scale-105 transition-transform" onClick={() => window.location.href = '#'}>
            Commencer
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
