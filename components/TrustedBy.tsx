
import React from 'react';

const LOGOS = [
  { name: 'Stripe', initials: 'ST' },
  { name: 'Notion', initials: 'NO' },
  { name: 'Slack', initials: 'SL' },
  { name: 'GitHub', initials: 'GH' },
  { name: 'Salesforce', initials: 'SF' },
  { name: 'HubSpot', initials: 'HS' },
  { name: 'Jira', initials: 'JI' },
  { name: 'Zendesk', initials: 'ZD' },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm md:text-base text-gray-500 font-medium mb-8 md:mb-10">
          Utilisé par des équipes dans des entreprises leaders
        </p>

        {/* Desktop: Static grid */}
        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
          {LOGOS.map((logo, i) => (
            <div
              key={logo.name}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/50 transition-all cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 font-bold text-sm group-hover:from-old-rose/20 group-hover:to-soft-periwinkle/20 group-hover:text-old-rose transition-all">
                {logo.initials}
              </div>
              <span className="text-gray-400 font-semibold group-hover:text-gray-700 transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile: Animated marquee */}
        <div className="md:hidden relative">
          <div className="flex overflow-hidden">
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/30 backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs">
                    {logo.initials}
                  </div>
                  <span className="text-gray-500 font-semibold text-sm">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-almond-cream to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-almond-cream to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
