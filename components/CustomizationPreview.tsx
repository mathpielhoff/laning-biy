
import React from 'react';
import { Settings, Terminal, Bot, ToggleRight, Layout, Sliders, ChevronRight } from 'lucide-react';

const CustomizationPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-5 md:space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-soft-periwinkle/10 text-soft-periwinkle text-xs md:text-sm font-bold">
              <Sliders size={14} className="md:w-4 md:h-4" />
              <span>Configuration Low-Code</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Pilotez vos agents avec une <span className="text-soft-periwinkle">précision chirurgicale</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-medium">
              Oubliez les prompts vagues. BotItYourself vous offre une interface structurée pour définir exactement ce que vos agents peuvent voir, faire et dire.
            </p>

            {/* Feature Cards */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-gray-50 transition-colors group cursor-pointer border border-transparent hover:border-gray-100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-old-rose/10 rounded-lg md:rounded-xl flex items-center justify-center text-old-rose group-hover:scale-110 transition-transform shrink-0">
                  <Bot size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">Identité de l'Agent</h4>
                  <p className="text-xs md:text-sm text-gray-500 font-medium">Définissez son rôle, son ton et ses contraintes de langage.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-gray-50 transition-colors group cursor-pointer border border-transparent hover:border-gray-100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-muted-teal/10 rounded-lg md:rounded-xl flex items-center justify-center text-muted-teal group-hover:scale-110 transition-transform shrink-0">
                  <Layout size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">Architecture des Outils</h4>
                  <p className="text-xs md:text-sm text-gray-500 font-medium">Assignez les connecteurs et les actions spécifiques (Read/Write/Exec).</p>
                </div>
              </div>
            </div>
          </div>

          {/* SaaS Config UI Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-soft-periwinkle/20 rounded-2xl md:rounded-[3rem] blur-3xl" />

            <div className="relative bg-white rounded-2xl md:rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gray-50/50 px-4 sm:px-6 md:px-8 py-4 md:py-6 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900">Configuration Agent</h3>
                  <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">ID: AG-4421-MARKETING</p>
                </div>
                <button className="bg-soft-periwinkle text-white px-4 md:px-5 py-1.5 md:py-2 rounded-lg md:rounded-xl text-xs font-bold shadow-lg shadow-soft-periwinkle/20 hover:scale-105 active:scale-95 transition-transform">
                  Publier
                </button>
              </div>

              <div className="p-4 sm:p-6 md:p-8 space-y-5 md:space-y-8">
                {/* System Prompt */}
                <div>
                  <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 md:mb-3 block">Rôle Système</label>
                  <div className="bg-gray-50 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 border border-gray-100 italic text-gray-600 text-xs md:text-sm leading-relaxed relative">
                    <span className="text-old-rose font-bold">"</span>Tu agis comme un Data Analyst senior. Ta mission est d'extraire les données de Google Sheets, de les formater en JSON, puis de créer un rapport visuel dans Slack.<span className="text-old-rose font-bold">"</span>
                  </div>
                </div>

                {/* Permissions Toggles */}
                <div>
                  <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 md:mb-4 block">Permissions Actives</label>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center justify-between p-2.5 md:p-3 bg-white rounded-lg md:rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-muted-teal rounded-md md:rounded-lg flex items-center justify-center text-white text-[8px] md:text-[10px] font-bold">GS</div>
                        <span className="text-[10px] md:text-xs font-bold text-gray-700">Google Sheets: Reading</span>
                      </div>
                      <ToggleRight className="text-muted-teal w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex items-center justify-between p-2.5 md:p-3 bg-white rounded-lg md:rounded-xl border border-gray-100 shadow-sm opacity-50">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-old-rose rounded-md md:rounded-lg flex items-center justify-center text-white text-[8px] md:text-[10px] font-bold">ST</div>
                        <span className="text-[10px] md:text-xs font-bold text-gray-700">Stripe: Refund Write</span>
                      </div>
                      <div className="w-8 md:w-10 h-5 md:h-6 bg-gray-200 rounded-full flex items-center px-0.5 md:px-1">
                        <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 md:pt-4 flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs font-bold text-soft-periwinkle cursor-pointer hover:underline uppercase tracking-widest">
                  Paramètres avancés <ChevronRight size={12} className="md:w-3.5 md:h-3.5" />
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
