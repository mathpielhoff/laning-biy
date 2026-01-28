
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConnectorsExplorer from './components/ConnectorsExplorer';
import Features from './components/Features';
import HumanInTheLoop from './components/HumanInTheLoop';
import ProvidersSection from './components/ProvidersSection';
import Footer from './components/Footer';
import CustomizationPreview from './components/CustomizationPreview';
import TeamIsolationSection from './components/TeamIsolationSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-old-rose selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        <ConnectorsExplorer />

        <Features />
        
        <CustomizationPreview />

        <HumanInTheLoop />

        <TeamIsolationSection />

        <ProvidersSection />

        <section className="py-24 px-4 bg-old-rose/10">
          <div className="max-w-4xl mx-auto text-center space-y-8 glass-card p-12 rounded-[2.5rem] border-old-rose/20">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">Prêt à transformer votre entreprise ?</h2>
            <p className="text-xl text-gray-700 font-medium">
              Rejoignez les équipes qui utilisent déjà BotItYourself pour décupler leur productivité grâce aux agents IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-old-rose text-white rounded-2xl font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-old-rose/20">
                Démarrer l'essai gratuit
              </button>
              <button className="px-8 py-4 border-2 border-old-rose text-old-rose rounded-2xl font-bold hover:bg-old-rose hover:text-white transition-all">
                Réserver une démo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
