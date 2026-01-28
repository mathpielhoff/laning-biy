
import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, XCircle, MousePointer2 } from 'lucide-react';

const HumanInTheLoop: React.FC = () => {
  const [approved, setApproved] = useState<boolean | null>(null);

  return (
    <section className="py-24 px-4 bg-muted-teal/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="glass-card p-8 rounded-3xl border-muted-teal/20 shadow-2xl space-y-6 relative z-10">
            <div className="flex items-center justify-between border-b border-muted-teal/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-muted-teal text-white rounded-xl flex items-center justify-center">
                  <ShieldAlert size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Validation Requise</h4>
                  <p className="text-xs text-gray-500 font-medium">Action sensible détectée</p>
                </div>
              </div>
              <span className="text-[10px] bg-muted-teal/10 text-muted-teal px-2 py-1 rounded-full font-bold">SÉCURISÉ</span>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Agent</span>
                <span className="font-bold text-gray-800">Support-Lead</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Action</span>
                <span className="font-bold text-old-rose">Remboursement Stripe</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Montant</span>
                <span className="font-bold text-gray-900">499.00 €</span>
              </div>
              <div className="pt-2">
                <p className="text-sm text-gray-600 italic">
                  "L'utilisateur souhaite un remboursement suite au retard de livraison sur la commande #4421."
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setApproved(true)}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all ${approved === true ? 'bg-green-500 text-white' : 'bg-muted-teal text-white hover:bg-opacity-90'}`}
              >
                <CheckCircle2 size={18} />
                {approved === true ? 'Approuvé' : 'Approuver'}
              </button>
              <button 
                onClick={() => setApproved(false)}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold border-2 transition-all ${approved === false ? 'bg-red-500 border-red-500 text-white' : 'border-gray-200 text-gray-400 hover:border-red-200 hover:text-red-500'}`}
              >
                <XCircle size={18} />
                Refuser
              </button>
            </div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-muted-teal/20 blur-3xl rounded-full" />
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted-teal/10 text-muted-teal text-sm font-bold">
            <MousePointer2 size={16} />
            <span>Contrôle Humain</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Évitez les actions non souhaitées avec <span className="text-muted-teal">l'approbation humaine</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Pour chaque outil connecté, vous déterminez quelles actions sont critiques. L'agent peut ainsi automatiser les tâches simples, tout en vous sollicitant pour les décisions financières ou stratégiques importantes.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 bg-muted-teal/20 p-1 rounded">
                <CheckCircle2 size={16} className="text-muted-teal" />
              </div>
              <span className="text-gray-700 font-medium text-sm md:text-base">Zéro erreur de l'IA sur les actions sensibles.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 bg-muted-teal/20 p-1 rounded">
                <CheckCircle2 size={16} className="text-muted-teal" />
              </div>
              <span className="text-gray-700 font-medium text-sm md:text-base">Audit complet de chaque décision approuvée.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 bg-muted-teal/20 p-1 rounded">
                <CheckCircle2 size={16} className="text-muted-teal" />
              </div>
              <span className="text-gray-700 font-medium text-sm md:text-base">Liberté totale de configuration du toolset.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HumanInTheLoop;
