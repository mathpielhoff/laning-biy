
import React from 'react';
import { Settings, Terminal, Bot, ToggleRight, Layout, Sliders, ChevronRight } from 'lucide-react';

const CustomizationPreview: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soft-periwinkle/10 text-soft-periwinkle text-sm font-bold">
              <Sliders size={16} />
              <span>Configuration Low-Code</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Pilotez vos agents avec une <span className="text-soft-periwinkle">précision chirurgicale</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Oubliez les prompts vagues. BotItYourself vous offre une interface structurée pour définir exactement ce que vos agents peuvent voir, faire et dire.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group cursor-pointer border border-transparent hover:border-gray-100">
                <div className="w-12 h-12 bg-old-rose/10 rounded-xl flex items-center justify-center text-old-rose group-hover:scale-110 transition-transform">
                  <Bot size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Identité de l'Agent</h4>
                  <p className="text-sm text-gray-500 font-medium">Définissez son rôle, son ton et ses contraintes de langage.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group cursor-pointer border border-transparent hover:border-gray-100">
                <div className="w-12 h-12 bg-muted-teal/10 rounded-xl flex items-center justify-center text-muted-teal group-hover:scale-110 transition-transform">
                  <Layout size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Architecture des Outils</h4>
                  <p className="text-sm text-gray-500 font-medium">Assignez les connecteurs et les actions spécifiques (Read/Write/Exec).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-soft-periwinkle/20 rounded-[3rem] blur-3xl" />
            
            {/* SaaS Config UI Mockup */}
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gray-50/50 px-8 py-6 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Configuration Agent</h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">ID: AG-4421-MARKETING</p>
                </div>
                <button className="bg-soft-periwinkle text-white px-5 py-2 rounded-xl text-xs font-bold shadow-lg shadow-soft-periwinkle/20">
                  Publier
                </button>
              </div>
              
              <div className="p-8 space-y-8">
                {/* System Prompt modern UI */}
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">Rôle Système</label>
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 italic text-gray-600 text-sm leading-relaxed relative">
                    <span className="text-old-rose font-bold">"</span>Tu agis comme un Data Analyst senior. Ta mission est d'extraire les données de Google Sheets, de les formater en JSON, puis de créer un rapport visuel dans Slack.<span className="text-old-rose font-bold">"</span>
                  </div>
                </div>

                {/* Permissions Toggles */}
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">Permissions Actives</label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-muted-teal rounded-lg flex items-center justify-center text-white text-[10px] font-bold">GS</div>
                        <span className="text-xs font-bold text-gray-700">Google Sheets: Reading</span>
                      </div>
                      <ToggleRight className="text-muted-teal" size={24} />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm opacity-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-old-rose rounded-lg flex items-center justify-center text-white text-[10px] font-bold">ST</div>
                        <span className="text-xs font-bold text-gray-700">Stripe: Refund Write</span>
                      </div>
                      <div className="w-10 h-6 bg-gray-200 rounded-full flex items-center px-1">
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-2 text-xs font-bold text-soft-periwinkle cursor-pointer hover:underline uppercase tracking-widest">
                  Paramètres avancés <ChevronRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationPreview;
