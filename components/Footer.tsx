
import React, { useState } from 'react';
import { Bot, Github, Twitter, Linkedin, Mail, ArrowRight, Check } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-old-rose/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-soft-periwinkle/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Newsletter Section */}
        <div className="mb-12 md:mb-16 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-r from-old-rose/20 to-soft-periwinkle/20 border border-white/10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Restez informé
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Recevez les dernières actualités sur l'IA et les automatisations.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full pl-11 pr-4 py-3 md:py-3.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-old-rose/50 focus:bg-white/15 transition-all text-sm md:text-base"
                />
              </div>
              <button
                type="submit"
                className="group px-6 py-3 md:py-3.5 bg-gradient-to-r from-old-rose to-soft-periwinkle rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-old-rose/30 active:scale-95 transition-all whitespace-nowrap"
              >
                {isSubscribed ? (
                  <>
                    <Check size={18} />
                    Inscrit !
                  </>
                ) : (
                  <>
                    S'inscrire
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          {/* Brand Column - Full width on mobile */}
          <div className="col-span-2 space-y-4 md:space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = '#'}>
              <div className="bg-gradient-to-br from-old-rose to-soft-periwinkle p-1.5 md:p-2 rounded-lg text-white">
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
              <a href="#" className="p-2 md:p-2.5 bg-white/5 rounded-xl hover:bg-gradient-to-br hover:from-old-rose hover:to-soft-periwinkle transition-all hover:scale-110" aria-label="Twitter">
                <Twitter size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="p-2 md:p-2.5 bg-white/5 rounded-xl hover:bg-gradient-to-br hover:from-old-rose hover:to-soft-periwinkle transition-all hover:scale-110" aria-label="LinkedIn">
                <Linkedin size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="p-2 md:p-2.5 bg-white/5 rounded-xl hover:bg-gradient-to-br hover:from-old-rose hover:to-soft-periwinkle transition-all hover:scale-110" aria-label="GitHub">
                <Github size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Produit Column */}
          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-sm md:text-base">Produit</h4>
            <ul className="space-y-2.5 md:space-y-4 text-xs md:text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Fonctionnalités</a></li>
              <li><a href="#connectors" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Connecteurs</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Tarifs</a></li>
            </ul>
          </div>

          {/* Ressources Column */}
          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-sm md:text-base">Ressources</h4>
            <ul className="space-y-2.5 md:space-y-4 text-xs md:text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Sécurité</a></li>
            </ul>
          </div>

          {/* Légal Column */}
          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-sm md:text-base">Légal</h4>
            <ul className="space-y-2.5 md:space-y-4 text-xs md:text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">CGV</a></li>
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
