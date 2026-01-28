
import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Zap, Shield, Send, CreditCard, Code, Users, Cpu, Layers, Rocket, CheckCircle } from 'lucide-react';

const DEPARTMENTS = [
  {
    id: 'Finance',
    label: 'Finance',
    color: 'text-muted-teal',
    bgIcon: 'bg-muted-teal',
    userMsg: "Vérifie les paiements Stripe d'hier et crée une facture sur Google Drive si le montant dépasse 100€.",
    aiMsg: "Je scanne vos transactions Stripe... 3 paiements trouvés.",
    toolAction: "Stripe: List Charges",
    toolResult: "2 factures générées avec succès sur Drive.",
    status: "Auto"
  },
  {
    id: 'HR',
    label: 'HR',
    color: 'text-soft-periwinkle',
    bgIcon: 'bg-soft-periwinkle',
    userMsg: "Génère un contrat pour la nouvelle recrue sur Notion et demande-moi validation avant l'envoi Slack.",
    aiMsg: "Contrat préparé sur Notion. En attente de votre signature pour notification Slack.",
    toolAction: "Notion: Create Page",
    toolResult: "Document prêt. Cliquer pour approuver l'envoi.",
    status: "Approbation"
  },
  {
    id: 'Dev',
    label: 'Dev',
    color: 'text-old-rose',
    bgIcon: 'bg-old-rose',
    userMsg: "Analyse les dernières Pull Requests sur GitHub et résume les points bloquants.",
    aiMsg: "Analyse des 5 PR en cours terminée. 2 issues critiques identifiées.",
    toolAction: "GitHub: List Pull Requests",
    toolResult: "Rapport envoyé au canal #dev-ops sur Slack.",
    status: "Auto"
  },
  {
    id: 'It',
    label: 'It',
    color: 'text-old-rose',
    bgIcon: 'bg-gradient-to-tr from-old-rose via-soft-periwinkle to-muted-teal',
    userMsg: "Crée-moi un agent 'Recruiting' qui publie sur LinkedIn et stocke les CV dans Google Drive.",
    aiMsg: "C'est fait ! Votre agent est prêt avec les connecteurs LinkedIn et Google Drive activés.",
    toolAction: "BotItYourself: Agent Builder",
    toolResult: "Agent configuré. Prêt à automatiser vos recrutements.",
    status: "Success"
  }
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const active = DEPARTMENTS[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % DEPARTMENTS.length);
    }, 8500); // Délai augmenté pour meilleure lisibilité
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-12 md:pt-20 pb-24 md:pb-32 overflow-hidden px-4">
      {/* Decorative blobs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-soft-periwinkle/30 rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 -right-20 w-80 h-80 bg-soft-apricot/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center relative">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-old-rose/10 border border-old-rose/20 text-old-rose text-sm font-bold animate-pulse">
            <Sparkles size={16} />
            <span className="whitespace-nowrap">La plateforme No-Code d'Agents IA</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1] transition-all duration-1000 min-h-[3.5em] md:min-h-0">
            Bot <br className="hidden md:block" />
            <span className={`${active.color} transition-colors duration-1000 italic inline-block min-w-[150px]`}>
              {active.id === 'It' ? 'It' : active.label}
            </span> <br className="hidden md:block" />
            Yourself
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            {active.id === 'It' 
              ? "L'architecte de votre propre intelligence artificielle. Assemblez, connectez et lancez vos agents en quelques clics."
              : "Automatisez vos processus métiers avec des agents qui utilisent réellement vos outils métiers en toute sécurité."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button className="px-8 md:px-10 py-4 md:py-5 bg-old-rose text-white rounded-2xl font-bold flex items-center justify-center gap-3 group hover:scale-105 transition-all shadow-xl shadow-old-rose/30">
              Essayer gratuitement
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 md:px-10 py-4 md:py-5 glass-card text-gray-800 rounded-2xl font-bold border border-white hover:bg-white/50 transition-all">
              Voir la démo
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
          <div className={`absolute inset-0 bg-gradient-to-tr from-old-rose to-soft-periwinkle rounded-[3rem] blur-3xl transition-opacity duration-1000 ${active.id === 'It' ? 'opacity-30' : 'opacity-10'}`} />
          
          {/* Chat Mockup */}
          <div className={`relative bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[480px] md:h-[520px] transition-all duration-700 transform hover:scale-[1.01] ${active.id === 'It' ? 'ring-4 ring-old-rose/20' : ''}`}>
            {/* Header chat */}
            <div className="p-5 md:p-6 border-b border-gray-50 flex items-center justify-between bg-white/50 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${active.bgIcon} flex items-center justify-center text-white shadow-lg transition-all duration-700 ${active.id === 'It' ? 'scale-110' : ''}`}>
                  {active.id === 'Finance' && <CreditCard size={20} />}
                  {active.id === 'HR' && <Users size={20} />}
                  {active.id === 'Dev' && <Code size={20} />}
                  {active.id === 'It' && <Rocket size={20} />}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                    {active.id === 'It' ? 'BotItYourself' : `Agent ${active.label}`}
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-widest">Opérationnel</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-1.5">
                <div className={`w-2 h-2 rounded-full transition-colors ${active.id === 'It' ? 'bg-old-rose' : 'bg-gray-200'}`} />
                <div className={`w-2 h-2 rounded-full transition-colors ${active.id === 'It' ? 'bg-muted-teal' : 'bg-gray-200'}`} />
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 md:p-6 space-y-5 md:space-y-6 overflow-y-auto bg-gray-50/20">
              <div className="flex justify-end">
                <div className="bg-old-rose text-white p-3 md:p-4 rounded-2xl rounded-tr-none max-w-[85%] text-xs md:text-sm font-medium shadow-md">
                  {active.userMsg}
                </div>
              </div>

              <div key={active.id} className="flex gap-3 animate-in fade-in slide-in-from-left-4 duration-700">
                <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full ${active.bgIcon} shrink-0 flex items-center justify-center text-white text-[9px] md:text-[10px] font-bold`}>IA</div>
                <div className="space-y-3 max-w-[88%]">
                  <div className="bg-white p-3 md:p-4 rounded-2xl rounded-tl-none border border-gray-100 text-xs md:text-sm font-medium shadow-sm">
                    {active.aiMsg}
                  </div>
                  
                  {/* Tool Action Card */}
                  <div className={`bg-white/80 border p-3 md:p-4 rounded-xl space-y-2 shadow-sm transition-all duration-700 ${active.id === 'It' ? 'border-old-rose/40 bg-old-rose/5' : 'border-muted-teal/20'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 md:w-6 md:h-6 rounded-md flex items-center justify-center transition-colors ${active.id === 'It' ? 'bg-old-rose/20' : 'bg-muted-teal/10'}`}>
                          <Zap size={12} className={active.id === 'It' ? 'text-old-rose' : 'text-muted-teal'} />
                        </div>
                        <span className="text-[9px] md:text-[10px] font-bold text-gray-700 uppercase tracking-tight">Outil: {active.toolAction}</span>
                      </div>
                      <span className={`text-[8px] md:text-[9px] font-bold px-2 py-0.5 rounded ${
                        active.status === 'Success' ? 'bg-green-100 text-green-600' : 
                        active.status === 'Approbation' ? 'bg-amber-100 text-amber-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {active.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-[10px] md:text-[11px] text-gray-500 font-medium">
                      {active.toolResult}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input area */}
            <div className="p-4 bg-white border-t border-gray-50 flex items-center gap-3">
              <div className="flex-1 bg-gray-50 rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-400 font-medium flex justify-between items-center italic">
                {active.id === 'It' ? 'Nouveau workflow...' : 'Demander une action...'}
                <Send size={14} className="text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
