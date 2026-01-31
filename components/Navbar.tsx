
import React, { useState, useEffect } from 'react';
import { Bot, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'glass-card border-b border-white/20 shadow-lg' : 'bg-transparent'
      } px-4 md:px-8 py-3 md:py-4`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = '#'}>
            <div className="bg-old-rose p-1.5 md:p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
              <Bot size={20} className="md:w-6 md:h-6" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-gray-900">
              Bot<span className="text-old-rose">It</span>Yourself
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-old-rose transition-colors">Fonctionnalités</a>
            <a href="#connectors" className="hover:text-old-rose transition-colors">Connecteurs</a>
            <a href="#" className="hover:text-old-rose transition-colors">Sécurité</a>
            <a href="#" className="hover:text-old-rose transition-colors">Tarifs</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <button className="text-sm font-semibold text-gray-700 hover:text-old-rose transition-colors" onClick={() => window.location.href = '#'}>
              Connexion
            </button>
            <button className="bg-old-rose text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-old-rose/20 hover:scale-105 active:scale-95 transition-transform" onClick={() => window.location.href = '#'}>
              Commencer
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 text-gray-700 hover:text-old-rose transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-50 md:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="bg-old-rose p-1.5 rounded-lg text-white">
                <Bot size={20} />
              </div>
              <span className="text-lg font-bold tracking-tight text-gray-900">
                Bot<span className="text-old-rose">It</span>Yourself
              </span>
            </div>
            <button
              className="p-2 -mr-2 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-1 px-3">
              {[
                { label: 'Fonctionnalités', href: '#features' },
                { label: 'Connecteurs', href: '#connectors' },
                { label: 'Sécurité', href: '#' },
                { label: 'Tarifs', href: '#' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-old-rose/5 hover:text-old-rose transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Footer CTA */}
          <div className="p-4 border-t border-gray-100 space-y-3">
            <button
              className="w-full py-3 text-gray-700 font-semibold hover:text-old-rose transition-colors"
              onClick={() => {
                setIsMenuOpen(false);
                window.location.href = '#';
              }}
            >
              Connexion
            </button>
            <button
              className="w-full bg-old-rose text-white py-3.5 rounded-xl font-bold shadow-lg shadow-old-rose/20 hover:scale-[1.02] active:scale-95 transition-transform"
              onClick={() => {
                setIsMenuOpen(false);
                window.location.href = '#';
              }}
            >
              Commencer gratuitement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
