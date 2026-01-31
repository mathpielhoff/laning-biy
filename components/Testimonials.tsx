
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Marie Dubois',
    role: 'Head of Operations',
    company: 'TechScale',
    avatar: 'MD',
    gradient: 'from-old-rose to-soft-periwinkle',
    content: "BotItYourself a transformé notre façon de gérer les processus RH. On a automatisé l'onboarding en 2 jours. Incroyable.",
    rating: 5,
  },
  {
    name: 'Thomas Martin',
    role: 'CTO',
    company: 'DataFlow',
    avatar: 'TM',
    gradient: 'from-muted-teal to-soft-apricot',
    content: "La gouvernance human-in-the-loop est exactement ce qu'il nous fallait. On garde le contrôle tout en automatisant.",
    rating: 5,
  },
  {
    name: 'Sophie Laurent',
    role: 'Finance Director',
    company: 'GrowthCorp',
    avatar: 'SL',
    gradient: 'from-soft-periwinkle to-muted-teal',
    content: "250+ connecteurs, intégration native avec nos outils... On a économisé 20h/semaine sur la réconciliation comptable.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden bg-white/30">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-old-rose/10 to-soft-periwinkle/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-muted-teal/10 to-soft-apricot/10 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soft-periwinkle/10 text-soft-periwinkle text-sm font-bold mb-4">
            <Quote size={16} />
            Témoignages
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ils nous font <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment nos clients transforment leurs opérations avec BotItYourself
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className="testimonial-card relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-gray-100">
                <Quote size={40} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400" fill="currentColor" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 font-medium leading-relaxed mb-6 relative z-10 text-sm md:text-base">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold shadow-lg`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-gray-500">
                    {testimonial.role} @ <span className="font-semibold">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
