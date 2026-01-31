
import React from 'react';
import { CONNECTOR_DETAILS } from '../constants';
import {
  ShieldCheck,
  Zap,
  Lock,
  ArrowRight,
  PlusCircle,
  Globe,
  Settings,
  FileSearch,
  MessageSquare,
  RefreshCw,
  GitPullRequest,
  Database
} from 'lucide-react';

const SHOWCASE_TOOLS = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    label: "Remboursement",
    connector: "Stripe",
    actions: [<RefreshCw size={12} />, <Settings size={12} />],
    actionLabel: "Écriture / Admin"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    label: "Notification",
    connector: "Slack",
    actions: [<MessageSquare size={12} />, <Zap size={12} />],
    actionLabel: "Envoi / Push"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
    label: "Archivage",
    connector: "Google Drive",
    actions: [<FileSearch size={12} />, <PlusCircle size={12} />],
    actionLabel: "Lecture / Écriture"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    label: "Review PR",
    connector: "GitHub",
    actions: [<GitPullRequest size={12} />, <FileSearch size={12} />],
    actionLabel: "Analyse Code"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg",
    label: "Update CRM",
    connector: "Airtable",
    actions: [<Database size={12} />, <RefreshCw size={12} />],
    actionLabel: "Sync Données"
  }
];

const ConnectorsExplorer: React.FC = () => {
  return (
    <section id="connectors" className="py-12 md:py-20 lg:py-24 px-4 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 space-y-3 md:space-y-4">
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white border border-gray-100 shadow-sm text-muted-teal text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
            <Lock size={10} className="md:w-3 md:h-3" />
            <span>Standard OAUTH 2.0</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Des capacités <span className="text-old-rose">prêtes à agir</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl md:max-w-2xl mx-auto font-medium px-2">
            Vos agents manipulent vos outils métiers avec précision grâce à plus de 250 connecteurs natifs.
          </p>
        </div>

        {/* Tool Cards Grid - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 mb-6 md:mb-10">
          {SHOWCASE_TOOLS.map((tool, idx) => (
            <div key={idx} className="bg-white p-4 md:p-5 rounded-xl md:rounded-[1.5rem] border border-gray-100 shadow-lg shadow-gray-200/40 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center gap-3 md:gap-5 group cursor-pointer">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-gray-50 rounded-lg md:rounded-xl flex items-center justify-center p-1.5 md:p-2 shadow-inner border border-gray-50 shrink-0">
                <img src={tool.logo} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 text-sm truncate">{tool.label}</h4>
                <div className="flex items-center gap-1.5 md:gap-2 mt-0.5 md:mt-1">
                  <div className="flex gap-0.5 md:gap-1 text-muted-teal">
                    {tool.actions.map((icon, i) => <span key={i}>{icon}</span>)}
                  </div>
                  <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-tighter truncate">
                    {tool.actionLabel}
                  </span>
                </div>
              </div>

              <ArrowRight size={14} className="text-old-rose opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </div>
          ))}

          {/* Internal APIs Card */}
          <div className="bg-gradient-to-br from-soft-periwinkle to-muted-teal p-4 md:p-5 rounded-xl md:rounded-[1.5rem] shadow-lg text-white flex items-center justify-between gap-3 md:gap-4 group cursor-pointer sm:col-span-2 lg:col-span-1 active:scale-[0.98] transition-transform">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center backdrop-blur-md shrink-0">
                <Globe size={18} className="md:w-5 md:h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Vos API Internes</h4>
                <p className="text-white/70 text-[9px] md:text-[10px] font-medium leading-tight">Import Swagger/OpenAPI</p>
              </div>
            </div>
            <PlusCircle size={16} className="md:w-[18px] md:h-[18px] group-hover:rotate-90 transition-transform shrink-0" />
          </div>
        </div>

        {/* Governance Footer - Mobile optimized */}
        <div className="relative group overflow-hidden rounded-xl md:rounded-[1.5rem] lg:rounded-[2rem] p-px border border-white/20 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-soft-periwinkle/30 via-old-rose/30 to-muted-teal/30 blur-xl opacity-50" />
          <div className="relative bg-white/95 backdrop-blur-xl rounded-[0.7rem] md:rounded-[1.4rem] lg:rounded-[1.9rem] p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8">
            <div className="flex items-center gap-3 md:gap-4 lg:gap-6 text-center lg:text-left">
              <div className="hidden sm:flex w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-tr from-soft-periwinkle to-muted-teal rounded-xl md:rounded-2xl items-center justify-center text-white shadow-lg shrink-0">
                <Settings size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">Gouvernance Centralisée</h3>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Toutes les actions sont tracées et révocables.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 lg:gap-8 w-full lg:w-auto">
              {/* Connectors preview - hidden on small mobile */}
              <div className="hidden md:block">
                <p className="text-[8px] md:text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 md:mb-2 text-center">Connecteurs Inclus</p>
                <div className="flex -space-x-2">
                  {CONNECTOR_DETAILS.slice(0, 4).map((c, i) => (
                    <div key={i} className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-white p-0.5 md:p-1 shadow-sm overflow-hidden">
                      <img src={c.logo} alt="" className="w-full h-full object-contain" />
                    </div>
                  ))}
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[8px] md:text-[9px] font-bold text-gray-500">
                    +250
                  </div>
                </div>
              </div>

              <div className="h-8 md:h-10 w-px bg-gray-100 hidden md:block" />

              <div className="text-center lg:text-left">
                <p className="text-xs font-bold text-gray-700 mb-0.5 md:mb-1">Besoin d'un connecteur spécifique ?</p>
                <a href="#" className="text-xs font-bold text-old-rose flex items-center justify-center lg:justify-start gap-1.5 md:gap-2 hover:underline">
                  Demander une intégration <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectorsExplorer;
