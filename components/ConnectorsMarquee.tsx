
import React from 'react';
import { CONNECTORS } from '../constants';
import { Box, Mail, MessageSquare, Database, FileText, Calendar, Code, Workflow } from 'lucide-react';

interface Props {
  direction: 'left' | 'right';
}

const ConnectorsMarquee: React.FC<Props> = ({ direction }) => {
  const getIcon = (name: string) => {
    if (name.includes('Gmail') || name.includes('Outlook')) return <Mail className="text-old-rose" size={20} />;
    if (name.includes('Slack') || name.includes('Teams') || name.includes('Discord')) return <MessageSquare className="text-soft-periwinkle" size={20} />;
    if (name.includes('Sheets') || name.includes('Airtable') || name.includes('Database')) return <Database className="text-muted-teal" size={20} />;
    if (name.includes('Notion') || name.includes('Docs')) return <FileText className="text-gray-600" size={20} />;
    if (name.includes('Calendar') || name.includes('Calendly')) return <Calendar className="text-blue-500" size={20} />;
    if (name.includes('GitHub') || name.includes('Linear')) return <Code className="text-gray-900" size={20} />;
    return <Workflow className="text-soft-apricot" size={20} />;
  };

  return (
    <div className="relative flex overflow-hidden group py-4">
      <div className={`flex gap-6 whitespace-nowrap animate-marquee ${direction === 'right' ? 'flex-row-reverse' : ''}`}>
        {[...CONNECTORS, ...CONNECTORS].map((name, i) => (
          <div 
            key={`${name}-${i}`} 
            className="flex items-center gap-3 px-6 py-4 rounded-2xl glass-card border-white/50 shadow-sm hover:scale-105 transition-transform cursor-pointer"
          >
            {getIcon(name)}
            <span className="text-sm font-bold text-gray-700">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectorsMarquee;
