
import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, CreditCard, Users, Code, Send, Zap, Rocket, Play, Star } from 'lucide-react';

const DEPARTMENTS = [
  {
    id: 'Finance',
    label: 'Finance',
    color: 'text-muted-teal',
    bgIcon: 'bg-gradient-to-br from-muted-teal to-muted-teal/80',
    userMsg: "Peux-tu vérifier les factures en retard de ce mois ?",
    aiMsg: "J'ai analysé vos 47 factures. 3 dépassent 30 jours. J'ai envoyé les rappels automatiques.",
    toolAction: "QuickBooks → Slack",
    toolResult: "Rappels envoyés à : Acme Corp, TechFlow, DataSync",
    status: 'Success'
  },
  {
    id: 'HR',
    label: 'RH',
    color: 'text-soft-apricot',
    bgIcon: 'bg-gradient-to-br from-soft-apricot to-old-rose',
    userMsg: "Génère le rapport d'onboarding du trimestre.",
    aiMsg: "Rapport généré : 12 nouveaux employés, taux de complétion 94%. Document partagé sur Drive.",
    toolAction: "BambooHR → Drive",
    toolResult: "Rapport Q4 exporté dans /RH/Reports/",
    status: 'Success'
  },
  {
    id: 'Dev',
    label: 'Dev',
    color: 'text-soft-periwinkle',
    bgIcon: 'bg-gradient-to-br from-soft-periwinkle to-muted-teal',
    userMsg: "Crée un ticket pour le bug de connexion signalé.",
    aiMsg: "Ticket JIRA créé avec priorité haute. J'ai lié les 3 rapports Sentry associés.",
    toolAction: "Sentry → Jira",
    toolResult: "Ticket DEV-2847 créé et assigné",
    status: 'Approbation'
  },
  {
    id: 'It',
    label: 'It',
    color: 'text-old-rose',
    bgIcon: 'bg-gradient-to-br from-old-rose to-soft-periwinkle',
    userMsg: "Lance un workflow personnalisé.",
    aiMsg: "Prêt à créer votre agent. Choisissez vos connecteurs et définissez les règles.",
    toolAction: "Workflow Builder",
    toolResult: "Interface de création ouverte...",
    status: 'Ready'
  },
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const active = DEPARTMENTS[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % DEPARTMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-8 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-32 overflow-hidden px-4">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 aurora-bg" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-old-rose/30 to-soft-periwinkle/20 rounded-full blur-[80px] md:blur-[100px] animate-float-slow" />
      <div className="absolute bottom-0 right-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-gradient-to-br from-muted-teal/25 to-soft-apricot/20 rounded-full blur-[100px] md:blur-[120px] animate-float-slower" style={{ animationDelay: '2s' }} />
      <div className="hidden md:block absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-br from-soft-periwinkle/20 to-old-rose/15 rounded-full blur-[80px] animate-aurora" />

      {/* Floating particles */}
      <div className="hidden lg:block absolute top-20 left-[15%] w-3 h-3 bg-old-rose/40 rounded-full animate-float" />
      <div className="hidden lg:block absolute top-40 right-[20%] w-2 h-2 bg-soft-periwinkle/50 rounded-full animate-float-slow" style={{ animationDelay: '1s' }} />
      <div className="hidden lg:block absolute bottom-40 left-[10%] w-4 h-4 bg-muted-teal/30 rounded-full animate-float-slower" style={{ animationDelay: '3s' }} />
      <div className="hidden lg:block absolute top-60 right-[10%] w-2 h-2 bg-soft-apricot/40 rounded-full animate-bounce-soft" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative">
        <div className="space-y-5 md:space-y-6 lg:space-y-8 text-center lg:text-left">
          {/* Badge with shimmer */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/60 backdrop-blur-sm border border-old-rose/20 text-old-rose text-xs md:text-sm font-bold shadow-lg shadow-old-rose/10 shimmer-btn">
            <Sparkles size={14} className="md:w-4 md:h-4 animate-pulse" />
            <span className="whitespace-nowrap">La plateforme No-Code d'Agents IA</span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-old-rose text-white text-[10px] rounded-full font-bold">
              NEW
            </span>
          </div>

          {/* Main headline with gradient text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[1.05]">
            Bot{' '}
            <span className={`inline-block transition-all duration-500 ${active.id === 'It' ? 'gradient-text' : active.color}`}>
              {active.id === 'It' ? 'It' : active.label}
            </span>{' '}
            <span className="block sm:inline">Yourself</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-xl md:max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            {active.id === 'It'
              ? "L'architecte de votre propre intelligence artificielle. Assemblez, connectez et lancez vos agents en quelques clics."
              : "Automatisez vos processus métiers avec des agents qui utilisent réellement vos outils métiers en toute sécurité."
            }
          </p>

          {/* Social proof mini */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 py-2">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white shadow-md ${
                  i === 0 ? 'bg-gradient-to-br from-old-rose to-soft-periwinkle' :
                  i === 1 ? 'bg-gradient-to-br from-muted-teal to-soft-apricot' :
                  i === 2 ? 'bg-gradient-to-br from-soft-periwinkle to-muted-teal' :
                  'bg-gradient-to-br from-soft-apricot to-old-rose'
                }`} />
              ))}
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">500+</span> équipes
            </div>
            <div className="flex items-center gap-0.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-2 md:pt-4">
            <button className="group px-6 md:px-8 lg:px-10 py-3.5 md:py-4 lg:py-5 bg-gradient-to-r from-old-rose to-soft-periwinkle text-white rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-2 md:gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-old-rose/30 hover:shadow-2xl hover:shadow-old-rose/40 text-sm md:text-base shimmer-btn">
              Essayer gratuitement
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-6 md:px-8 lg:px-10 py-3.5 md:py-4 lg:py-5 glass-card-strong text-gray-800 rounded-xl md:rounded-2xl font-bold border border-white/50 hover:bg-white/80 active:scale-95 transition-all text-sm md:text-base flex items-center justify-center gap-2">
              <Play size={16} className="text-old-rose" fill="currentColor" />
              Voir la démo
            </button>
          </div>
        </div>

        {/* Chat Mockup */}
        <div className="relative w-full max-w-md sm:max-w-lg mx-auto lg:max-w-none">
          <div className={`absolute inset-0 bg-gradient-to-tr from-old-rose/40 to-soft-periwinkle/40 rounded-[2rem] md:rounded-[3rem] blur-3xl transition-opacity duration-700 ${active.id === 'It' ? 'opacity-50' : 'opacity-20'} animate-pulse-soft`} />

          <div className={`relative bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl border border-white/50 overflow-hidden flex flex-col h-[380px] sm:h-[420px] md:h-[480px] lg:h-[520px] transition-all duration-500 transform hover:scale-[1.02] hover-glow ${active.id === 'It' ? 'ring-2 md:ring-4 ring-old-rose/30' : ''}`}>
            {/* Header chat */}
            <div className="p-3 sm:p-4 md:p-5 lg:p-6 border-b border-gray-100/50 flex items-center justify-between bg-white/50 backdrop-blur-md">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full ${active.bgIcon} flex items-center justify-center text-white shadow-lg transition-all duration-500 ${active.id === 'It' ? 'scale-110 animate-pulse-soft' : ''}`}>
                  {active.id === 'Finance' && <CreditCard size={16} className="sm:w-5 sm:h-5" />}
                  {active.id === 'HR' && <Users size={16} className="sm:w-5 sm:h-5" />}
                  {active.id === 'Dev' && <Code size={16} className="sm:w-5 sm:h-5" />}
                  {active.id === 'It' && <Rocket size={16} className="sm:w-5 sm:h-5" />}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm md:text-base leading-tight">
                    {active.id === 'It' ? 'BotItYourself' : `Agent ${active.label}`}
                  </h4>
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-wider">Opérationnel</span>
                  </div>
                </div>
              </div>
              {/* Progress indicator */}
              <div className="flex gap-1">
                {DEPARTMENTS.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                      i === index ? 'bg-old-rose scale-125' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-3 sm:p-4 md:p-5 lg:p-6 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 overflow-y-auto bg-gradient-to-b from-gray-50/30 to-white/50">
              <div className="flex justify-end animate-in">
                <div className="bg-gradient-to-r from-old-rose to-old-rose/90 text-white p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl rounded-tr-sm max-w-[90%] sm:max-w-[85%] text-[11px] sm:text-xs md:text-sm font-medium shadow-lg shadow-old-rose/20">
                  {active.userMsg}
                </div>
              </div>

              <div key={active.id} className="flex gap-2 sm:gap-3 animate-in fade-in slide-in-from-left-4 duration-500">
                <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full ${active.bgIcon} shrink-0 flex items-center justify-center text-white text-[8px] sm:text-[9px] md:text-[10px] font-bold shadow-md`}>IA</div>
                <div className="space-y-2 sm:space-y-3 max-w-[90%] sm:max-w-[88%]">
                  <div className="bg-white p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl rounded-tl-sm border border-gray-100 text-[11px] sm:text-xs md:text-sm font-medium shadow-sm">
                    {active.aiMsg}
                  </div>

                  {/* Tool Action Card */}
                  <div className={`bg-white/80 backdrop-blur border p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl space-y-1.5 sm:space-y-2 shadow-md transition-all duration-500 ${active.id === 'It' ? 'border-old-rose/40 bg-gradient-to-r from-old-rose/5 to-soft-periwinkle/5' : 'border-muted-teal/20'}`}>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                        <div className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-md flex items-center justify-center shrink-0 transition-colors ${active.id === 'It' ? 'bg-gradient-to-br from-old-rose/20 to-soft-periwinkle/20' : 'bg-muted-teal/10'}`}>
                          <Zap size={10} className={`sm:w-3 sm:h-3 ${active.id === 'It' ? 'text-old-rose' : 'text-muted-teal'}`} />
                        </div>
                        <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-gray-700 uppercase tracking-tight truncate">{active.toolAction}</span>
                      </div>
                      <span className={`text-[7px] sm:text-[8px] md:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full shrink-0 ${
                        active.status === 'Success' ? 'bg-green-100 text-green-600' :
                        active.status === 'Approbation' ? 'bg-amber-100 text-amber-600' :
                        'bg-gradient-to-r from-old-rose/20 to-soft-periwinkle/20 text-old-rose'
                      }`}>
                        {active.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-500 font-medium">
                      {active.toolResult}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input area */}
            <div className="p-2.5 sm:p-3 md:p-4 bg-white/80 backdrop-blur border-t border-gray-100/50 flex items-center gap-2 sm:gap-3">
              <div className="flex-1 bg-gray-50/80 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm text-gray-400 font-medium flex justify-between items-center">
                {active.id === 'It' ? 'Nouveau workflow...' : 'Demander une action...'}
                <Send size={12} className="sm:w-3.5 sm:h-3.5 text-old-rose/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
