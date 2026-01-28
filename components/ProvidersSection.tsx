
import React from 'react';
import { PROVIDERS } from '../constants';

const ProvidersSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h3 className="text-2xl font-bold text-gray-400 uppercase tracking-widest text-sm">
          Propulsé par les meilleurs modèles
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 hover:opacity-100 transition-opacity">
          {PROVIDERS.map((provider) => (
            <div key={provider.name} className="flex flex-col items-center gap-4 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <img src={provider.logo} alt={provider.name} className="h-10 md:h-14 object-contain" />
              <span className="text-xs font-bold text-gray-500">{provider.name}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm font-medium">
          Connectez vos propres clés API ou utilisez notre infrastructure managée.
        </p>
      </div>
    </section>
  );
};

export default ProvidersSection;
