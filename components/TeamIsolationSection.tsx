
import React from 'react';
import { Users, Lock, ChevronRight, LayoutGrid } from 'lucide-react';

const TeamIsolationSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 bg-soft-periwinkle/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Visual Representation - Hidden complex animation on small mobile */}
          <div className="relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] flex items-center justify-center order-2 lg:order-1">
            {/* Rotating border - only on larger screens */}
            <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] border-2 border-dashed border-soft-periwinkle/30 rounded-full animate-spin-slow" />

            {/* Marketing Card */}
            <div className="absolute top-2 sm:top-0 left-2 sm:left-0 glass-card p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-xl w-36 sm:w-40 md:w-48 -rotate-6 sm:-rotate-12 border-soft-periwinkle/20">
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-soft-periwinkle rounded-lg flex items-center justify-center text-white">
                  <Users size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-800">Marketing</span>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <div className="h-1.5 md:h-2 w-full bg-gray-100 rounded" />
                <div className="h-1.5 md:h-2 w-2/3 bg-gray-100 rounded" />
              </div>
              <div className="mt-3 md:mt-4 flex gap-1">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-soft-apricot" />
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-muted-teal" />
              </div>
            </div>

            {/* DevOps Card */}
            <div className="absolute bottom-2 sm:bottom-0 right-2 sm:right-0 glass-card p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-xl w-36 sm:w-40 md:w-48 rotate-3 sm:rotate-6 border-muted-teal/20">
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-muted-teal rounded-lg flex items-center justify-center text-white">
                  <LayoutGrid size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-800">DevOps</span>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <div className="h-1.5 md:h-2 w-full bg-gray-100 rounded" />
                <div className="h-1.5 md:h-2 w-1/2 bg-gray-100 rounded" />
              </div>
              <div className="mt-3 md:mt-4 flex gap-1">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-old-rose" />
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-soft-periwinkle" />
              </div>
            </div>

            {/* Central Lock Icon */}
            <div className="relative z-10 glass-card p-5 sm:p-6 md:p-8 rounded-full shadow-2xl bg-white flex flex-col items-center gap-1.5 md:gap-2 border-soft-periwinkle/40">
              <Lock className="text-soft-periwinkle" size={24} />
              <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-gray-500 uppercase whitespace-nowrap">Isolement Total</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-5 md:space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-soft-periwinkle/10 text-soft-periwinkle text-xs md:text-sm font-bold">
              <Users size={14} className="md:w-4 md:h-4" />
              <span>Gouvernance Équipe</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Un espace sécurisé pour <span className="text-soft-periwinkle">chaque équipe</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium leading-relaxed">
              Chaque équipe d'entreprise a accès à ses propres agents et connecteurs. Pas de fuites de données entre départements, une gestion des accès simplifiée et centralisée.
            </p>
            <div className="space-y-3 md:space-y-4">
              {[
                "Isolation complète des environnements",
                "Connecteurs spécifiques par département",
                "Gestion fine des rôles et permissions",
                "Single Sign-On (SSO) compatible"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 md:gap-3">
                  <ChevronRight className="text-soft-periwinkle shrink-0" size={16} />
                  <span className="text-gray-700 font-bold text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIsolationSection;
