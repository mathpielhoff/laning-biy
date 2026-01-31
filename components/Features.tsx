
import React from 'react';
import { Zap, Shield, Blocks, Cpu, Lock, Sparkles } from 'lucide-react';

const BentoFeatures: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 aurora-bg opacity-30" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-old-rose/10 text-old-rose text-sm font-bold">
            <Sparkles size={16} />
            Fonctionnalités
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Tout pour{' '}
            <span className="gradient-text">scaler votre productivité</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Une plateforme robuste conçue pour les entreprises exigeantes sur la sécurité.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Large Card - 250+ Connectors */}
          <div className="bento-item md:col-span-2 lg:col-span-2 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-old-rose to-soft-periwinkle text-white relative overflow-hidden group">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-white rounded-full blur-3xl animate-float-slow" />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Blocks size={28} className="md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                250+ Connecteurs
              </h3>
              <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-lg leading-relaxed">
                Intégrez vos agents avec tous vos outils : Slack, Notion, Google Suite, Salesforce, HubSpot, et bien plus encore.
              </p>

              {/* Mini connector icons */}
              <div className="flex gap-2 mt-6 md:mt-8">
                {['SL', 'NO', 'GS', 'SF', 'HB', '+'].map((icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-xs md:text-sm font-bold"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tall Card - Security */}
          <div className="bento-item lg:row-span-2 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/80 backdrop-blur border border-white/50 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-muted-teal/20 rounded-full blur-3xl" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-muted-teal to-muted-teal/80 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Shield size={28} className="md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                Sécurité Enterprise
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1">
                SOC 2 Type II, chiffrement E2E, audit logs complets. Vos données ne quittent jamais votre environnement.
              </p>

              {/* Security badges */}
              <div className="space-y-3">
                {['SOC 2 Certified', 'GDPR Compliant', 'SSO & SAML'].map((badge, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted-teal/10">
                    <Lock size={16} className="text-muted-teal" />
                    <span className="text-sm font-semibold text-gray-700">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Medium Card - No Code */}
          <div className="bento-item p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/80 backdrop-blur border border-white/50 shadow-lg relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-soft-periwinkle/20 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-soft-periwinkle to-soft-periwinkle/80 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Zap size={28} className="md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                100% No-Code
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Créez et déployez vos agents en quelques clics. Aucune compétence technique requise.
              </p>
            </div>
          </div>

          {/* Medium Card - AI Models */}
          <div className="bento-item p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/80 backdrop-blur border border-white/50 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-soft-apricot/20 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-soft-apricot to-old-rose flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Cpu size={28} className="md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Multi-Modèles IA
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                GPT-4, Claude, Mistral, Gemini... Choisissez le modèle adapté à chaque tâche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
