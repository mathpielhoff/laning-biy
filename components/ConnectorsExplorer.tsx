
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
    <section id="connectors" className="py-16 md:py-24 px-4 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm text-muted-teal text-[10px] font-bold uppercase tracking-widest">
            <Lock size={12} />
            <span>Standard OAUTH 2.0</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Des capacités <span className="text-old-rose">prêtes à agir</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Vos agents manipulent vos outils métiers avec précision grâce à plus de 250 connecteurs natifs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10">
          {SHOWCASE_TOOLS.map((tool, idx) => (
            <div key={idx} className="bg-white p-5 rounded-[1.5rem] border border-gray-100 shadow-lg shadow-gray-200/40 hover:-translate-y-1 transition-all flex items-center gap-5">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center p-2 shadow-inner border border-gray-50 shrink-0">
                <img src={tool.logo} alt="" className="w-full h-full object-contain" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 text-sm truncate">{tool.label}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex gap-1 text-muted-teal">
                    {tool.actions.map((icon, i) => <span key={i}>{icon}</span>)}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter truncate">
                    {tool.actionLabel}
                  </span>
                </div>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={14} className="text-old-rose" />
              </div>
            </div>
          ))}

          {/* Internal APIs Card - Plus compacte */}
          <div className="bg-gradient-to-br from-soft-periwinkle to-muted-teal p-5 rounded-[1.5rem] shadow-lg text-white flex items-center justify-between gap-4 group cursor-pointer sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                <Globe size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Vos API Internes</h4>
                <p className="text-white/70 text-[10px] font-medium leading-tight">Import Swagger/OpenAPI</p>
              </div>
            </div>
            <PlusCircle size={18} className="group-hover:rotate-90 transition-transform" />
          </div>
        </div>

        {/* Governance Footer - Optimisé mobile */}
        <div className="relative group overflow-hidden rounded-[1.5rem] md:rounded-[2rem] p-px border border-white/20 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-soft-periwinkle/30 via-old-rose/30 to-muted-teal/30 blur-xl opacity-50" />
          <div className="relative bg-white/95 backdrop-blur-xl rounded-[1.4rem] md:rounded-[1.9rem] p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex items-center gap-4 md:gap-6 text-center lg:text-left">
              <div className="hidden sm:flex w-12 h-12 md:w-14 md:h-14 bg-gradient-to-tr from-soft-periwinkle to-muted-teal rounded-2xl items-center justify-center text-white shadow-lg shrink-0">
                <Settings size={24} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Gouvernance Centralisée</h3>
                <p className="text-sm text-gray-600 font-medium">Toutes les actions sont tracées et révocables.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 w-full lg:w-auto">
              <div className="hidden md:block">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2 text-center">Connecteurs Inclus</p>
                <div className="flex -space-x-2">
                  {CONNECTOR_DETAILS.slice(0, 4).map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-white p-1 shadow-sm overflow-hidden">
                      <img src={c.logo} alt="" className="w-full h-full object-contain" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[9px] font-bold text-gray-500">
                    +250
                  </div>
                </div>
              </div>
              
              <div className="h-10 w-px bg-gray-100 hidden sm:block" />
              
              <div className="text-center lg:text-left">
                <p className="text-xs font-bold text-gray-700 mb-1">Besoin d'un connecteur spécifique ?</p>
                <a href="#" className="text-xs font-bold text-old-rose flex items-center justify-center lg:justify-start gap-2 hover:underline">
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
