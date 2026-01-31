
import React, { useState, useEffect, useRef } from 'react';
import { Zap, Users, Clock, Shield } from 'lucide-react';

const STATS = [
  {
    value: 250,
    suffix: '+',
    label: 'Connecteurs disponibles',
    icon: Zap,
    color: 'from-old-rose to-soft-periwinkle',
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Uptime garanti',
    icon: Shield,
    color: 'from-muted-teal to-soft-apricot',
  },
  {
    value: 500,
    suffix: '+',
    label: 'Équipes actives',
    icon: Users,
    color: 'from-soft-periwinkle to-muted-teal',
  },
  {
    value: 2,
    suffix: 'M+',
    label: "Actions automatisées / mois",
    icon: Clock,
    color: 'from-soft-apricot to-old-rose',
  },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end * 10) / 10);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
};

const StatCard: React.FC<{
  stat: typeof STATS[0];
  isVisible: boolean;
  delay: number;
}> = ({ stat, isVisible, delay }) => {
  const count = useCountUp(stat.value, 2000, isVisible);
  const Icon = stat.icon;

  return (
    <div
      className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/60 backdrop-blur-sm border border-white/50 hover-glow transition-all"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s ease ${delay}ms`,
      }}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

      <div className="relative">
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
          <Icon size={24} className="md:w-7 md:h-7" />
        </div>

        <div className="counter text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2">
          {stat.value === 99.9 ? count.toFixed(1) : Math.floor(count)}
          <span className="gradient-text">{stat.suffix}</span>
        </div>

        <p className="text-sm md:text-base text-gray-600 font-medium">
          {stat.label}
        </p>
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 aurora-bg opacity-50" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Des résultats qui parlent d'eux-mêmes
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Rejoignez des centaines d'entreprises qui automatisent leurs processus avec BotItYourself
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              isVisible={isVisible}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
