
import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Show after scrolling past 50% of viewport
      setIsVisible(scrollY > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <div
      className={`fixed bottom-4 md:bottom-6 left-4 right-4 md:left-auto md:right-6 z-50 floating-cta ${
        isVisible ? 'visible' : 'hidden'
      }`}
    >
      <div className="relative max-w-md mx-auto md:mx-0 p-4 md:p-5 rounded-2xl bg-gradient-to-r from-old-rose to-soft-periwinkle shadow-2xl shadow-old-rose/30">
        {/* Close button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fermer"
        >
          <X size={14} />
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
          <div className="text-white text-center sm:text-left flex-1">
            <p className="font-bold text-sm md:text-base">
              Prêt à automatiser vos processus ?
            </p>
            <p className="text-white/80 text-xs md:text-sm">
              Essai gratuit, aucune carte requise
            </p>
          </div>
          <button className="group w-full sm:w-auto px-5 py-2.5 bg-white text-old-rose rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/90 active:scale-95 transition-all shadow-lg">
            Commencer
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
