
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConnectorsExplorer from './components/ConnectorsExplorer';
import Features from './components/Features';
import HumanInTheLoop from './components/HumanInTheLoop';
import CustomizationPreview from './components/CustomizationPreview';
import TeamIsolationSection from './components/TeamIsolationSection';
import ProvidersSection from './components/ProvidersSection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';

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

        {/* Final CTA Section */}
        <section className="py-20 md:py-28 lg:py-32 px-4 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-old-rose/10 via-almond-cream to-soft-periwinkle/10" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-old-rose/20 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-soft-periwinkle/20 rounded-full blur-[100px] animate-float-slower" />

          <div className="max-w-4xl mx-auto relative">
            <div className="text-center space-y-6 md:space-y-8 glass-card-strong p-8 md:p-12 lg:p-16 rounded-3xl md:rounded-[2.5rem] border border-white/50 shadow-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-old-rose/10 text-old-rose text-sm font-bold">
                <Rocket size={16} />
                Accès anticipé disponible
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Prêt à{' '}
                <span className="gradient-text">automatiser</span>{' '}
                vos processus ?
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                Rejoignez notre programme d'accès anticipé et soyez parmi les premiers à déployer des agents IA connectés à vos outils métiers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="group px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-old-rose to-soft-periwinkle text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-old-rose/30 hover:shadow-2xl hover:shadow-old-rose/40 shimmer-btn">
                  Demander un accès
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 md:px-10 py-4 md:py-5 border-2 border-old-rose/30 text-old-rose rounded-2xl font-bold hover:bg-old-rose hover:text-white hover:border-old-rose transition-all active:scale-95">
                  Voir une démo
                </button>
              </div>

              {/* Real value props */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-muted-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Setup en 5 minutes
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-muted-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Aucune carte requise
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-muted-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Support personnalisé
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
};

export default App;
