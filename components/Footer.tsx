
import React from 'react';
import { Bot, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = '#'}>
            <div className="bg-old-rose p-2 rounded-lg text-white">
              <Bot size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Bot<span className="text-old-rose">It</span>Yourself
            </span>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            La plateforme SaaS leader pour le déploiement sécurisé d'agents IA en entreprise. Connectez, contrôlez et automatisez.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-old-rose transition-colors"><Twitter size={20} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-old-rose transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-old-rose transition-colors"><Github size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Produit</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Connecteurs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Ressources</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sécurité</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Légal</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} BotItYourself. Tous droits réservés.
        </p>
        <div className="flex gap-8 text-xs text-gray-500">
          <span>Fabriqué avec passion pour l'IA</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Tous les systèmes sont opérationnels</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
