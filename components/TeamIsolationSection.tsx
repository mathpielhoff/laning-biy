
import React from 'react';
import { Users, Lock, ChevronRight, LayoutGrid } from 'lucide-react';

const TeamIsolationSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-soft-periwinkle/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Visual representation of team isolation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-dashed border-soft-periwinkle/30 rounded-full animate-spin-slow" />
            
            <div className="absolute top-0 left-0 glass-card p-6 rounded-2xl shadow-xl w-48 -rotate-12 border-soft-periwinkle/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-soft-periwinkle rounded-lg flex items-center justify-center text-white"><Users size={16} /></div>
                <span className="text-sm font-bold text-gray-800">Marketing</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-gray-100 rounded" />
                <div className="h-2 w-2/3 bg-gray-100 rounded" />
              </div>
              <div className="mt-4 flex gap-1">
                <div className="w-4 h-4 rounded-full bg-soft-apricot" />
                <div className="w-4 h-4 rounded-full bg-muted-teal" />
              </div>
            </div>

            <div className="absolute bottom-0 right-0 glass-card p-6 rounded-2xl shadow-xl w-48 rotate-6 border-muted-teal/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-muted-teal rounded-lg flex items-center justify-center text-white"><LayoutGrid size={16} /></div>
                <span className="text-sm font-bold text-gray-800">DevOps</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-gray-100 rounded" />
                <div className="h-2 w-1/2 bg-gray-100 rounded" />
              </div>
              <div className="mt-4 flex gap-1">
                <div className="w-4 h-4 rounded-full bg-old-rose" />
                <div className="w-4 h-4 rounded-full bg-soft-periwinkle" />
              </div>
            </div>

            <div className="relative z-10 glass-card p-8 rounded-full shadow-2xl bg-white flex flex-col items-center gap-2 border-soft-periwinkle/40">
              <Lock className="text-soft-periwinkle" size={32} />
              <span className="text-xs font-bold text-gray-500 uppercase">Isolément Total</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soft-periwinkle/10 text-soft-periwinkle text-sm font-bold">
              <Users size={16} />
              <span>Gouvernance Équipe</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Un espace sécurisé pour <span className="text-soft-periwinkle">chaque équipe</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Chaque équipe d'entreprise a accès à ses propres agents et connecteurs. Pas de fuites de données entre départements, une gestion des accès simplifiée et centralisée.
            </p>
            <div className="space-y-4">
              {[
                "Isolation complète des environnements",
                "Connecteurs spécifiques par département",
                "Gestion fine des rôles et permissions",
                "Single Sign-On (SSO) compatible"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <ChevronRight className="text-soft-periwinkle" size={20} />
                  <span className="text-gray-700 font-bold">{item}</span>
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
