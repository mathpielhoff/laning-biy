
import React from 'react';
import { MAIN_FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 px-4 relative overflow-hidden bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:min-h-0 md:mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Tout pour <br className="md:hidden" />
            <span className="text-old-rose">scaler votre productivité</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Une plateforme robuste conçue pour les entreprises exigeantes sur la sécurité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {MAIN_FEATURES.map((feature, idx) => (
            <div 
              key={idx}
              className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] glass-card border-white/60 hover:shadow-2xl hover:-translate-y-2 transition-all group"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
