
import React from 'react';
import { Bot, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          {/* Brand Column - Full width on mobile */}
          <div className="col-span-2 space-y-4 md:space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = '#'}>
              <div className="bg-old-rose p-1.5 md:p-2 rounded-lg text-white">
                <Bot size={20} className="md:w-6 md:h-6" />
              </div>
              <span className="text-lg md:text-xl font-bold tracking-tight">
                Bot<span className="text-old-rose">It</span>Yourself
              </span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed text-sm md:text-base">
              La plateforme SaaS leader pour le déploiement sécurisé d'agents IA en entreprise. Connectez, contrôlez et automatisez.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a href="#" className="p-2 md:p-2.5 bg-white/5 rounded-lg hover:bg-old-rose transition-colors" aria-label="Twitter">
                <Twitter size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="p-2 md:p-2.5 bg-white/5 rounded-lg hover:bg-old-rose transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="p-2 md:p-2.5 bg-white/5 rounded-lg hover:bg-old-rose transition-colors" aria-label="GitHub">
                <Github size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Produit Column */}
          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-sm md:text-base">Produit</h4>
            <ul className="space-y-2.5 md:space-y-4 text-xs md:text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#connectors" className="hover:text-white transition-colors">Connecteurs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
            </ul>
          </div>

          {/* Ressources Column */}
          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-sm md:text-base">Ressources</h4>
            <ul className="space-y-2.5 md:space-y-4 text-xs md:text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sécurité</a></li>
            </ul>
          </div>

          {/* Légal Column */}
          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-sm md:text-base">Légal</h4>
            <ul className="space-y-2.5 md:space-y-4 text-xs md:text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 lg:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-[10px] md:text-xs text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} BotItYourself. Tous droits réservés.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 md:gap-8 text-[10px] md:text-xs text-gray-500">
            <span className="hidden sm:inline">Fabriqué avec passion pour l'IA</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Tous les systèmes sont opérationnels</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
