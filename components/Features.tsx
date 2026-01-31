
import React from 'react';
import { MAIN_FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-20 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Tout pour{' '}
            <span className="text-old-rose">scaler votre productivité</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto font-medium px-2">
            Une plateforme robuste conçue pour les entreprises exigeantes sur la sécurité.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {MAIN_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-[1.5rem] lg:rounded-[2rem] glass-card border-white/60 hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all group active:scale-[0.98]"
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 ${feature.color} rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-5 lg:mb-6 group-hover:rotate-6 transition-transform shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4">{feature.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-medium">
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
