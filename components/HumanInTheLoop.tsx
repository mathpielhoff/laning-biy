
import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, XCircle, MousePointer2 } from 'lucide-react';

const HumanInTheLoop: React.FC = () => {
  const [approved, setApproved] = useState<boolean | null>(null);

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 bg-muted-teal/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Interactive Card - Order 2 on mobile, 1 on desktop */}
        <div className="order-2 lg:order-1 relative">
          <div className="glass-card p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border-muted-teal/20 shadow-2xl space-y-4 md:space-y-6 relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-muted-teal/10 pb-3 md:pb-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-muted-teal text-white rounded-lg md:rounded-xl flex items-center justify-center">
                  <ShieldAlert size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">Validation Requise</h4>
                  <p className="text-[10px] md:text-xs text-gray-500 font-medium">Action sensible détectée</p>
                </div>
              </div>
              <span className="text-[9px] md:text-[10px] bg-muted-teal/10 text-muted-teal px-2 py-0.5 md:py-1 rounded-full font-bold">SÉCURISÉ</span>
            </div>

            {/* Details Card */}
            <div className="bg-gray-50 p-4 md:p-6 rounded-xl md:rounded-2xl space-y-3 md:space-y-4">
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-500">Agent</span>
                <span className="font-bold text-gray-800">Support-Lead</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-500">Action</span>
                <span className="font-bold text-old-rose">Remboursement Stripe</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-500">Montant</span>
                <span className="font-bold text-gray-900">499.00 €</span>
              </div>
              <div className="pt-1 md:pt-2">
                <p className="text-xs md:text-sm text-gray-600 italic leading-relaxed">
                  "L'utilisateur souhaite un remboursement suite au retard de livraison sur la commande #4421."
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 md:gap-4">
              <button
                onClick={() => setApproved(true)}
                className={`flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base transition-all active:scale-95 ${approved === true ? 'bg-green-500 text-white' : 'bg-muted-teal text-white hover:bg-opacity-90'}`}
              >
                <CheckCircle2 size={16} className="md:w-[18px] md:h-[18px]" />
                {approved === true ? 'Approuvé' : 'Approuver'}
              </button>
              <button
                onClick={() => setApproved(false)}
                className={`flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base border-2 transition-all active:scale-95 ${approved === false ? 'bg-red-500 border-red-500 text-white' : 'border-gray-200 text-gray-400 hover:border-red-200 hover:text-red-500'}`}
              >
                <XCircle size={16} className="md:w-[18px] md:h-[18px]" />
                Refuser
              </button>
            </div>
          </div>

          {/* Decorative blob */}
          <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-32 md:w-48 h-32 md:h-48 bg-muted-teal/20 blur-3xl rounded-full" />
        </div>

        {/* Text Content - Order 1 on mobile, 2 on desktop */}
        <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-muted-teal/10 text-muted-teal text-xs md:text-sm font-bold">
            <MousePointer2 size={14} className="md:w-4 md:h-4" />
            <span>Contrôle Humain</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Évitez les actions non souhaitées avec <span className="text-muted-teal">l'approbation humaine</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-medium">
            Pour chaque outil connecté, vous déterminez quelles actions sont critiques. L'agent peut ainsi automatiser les tâches simples, tout en vous sollicitant pour les décisions financières ou stratégiques importantes.
          </p>
          <ul className="space-y-3 md:space-y-4">
            {[
              "Zéro erreur de l'IA sur les actions sensibles.",
              "Audit complet de chaque décision approuvée.",
              "Liberté totale de configuration du toolset."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 md:gap-3">
                <div className="mt-0.5 md:mt-1 bg-muted-teal/20 p-0.5 md:p-1 rounded shrink-0">
                  <CheckCircle2 size={14} className="md:w-4 md:h-4 text-muted-teal" />
                </div>
                <span className="text-gray-700 font-medium text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HumanInTheLoop;
