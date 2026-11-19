import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Building2, MapPin, Trophy, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const CollegesPage: React.FC = () => {
  const { colleges, navigateTo } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredColleges = colleges.filter(c =>
    !searchTerm ||
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.shortName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-surface-border pb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold">
            INSTITUTIONAL DIRECTORY
          </span>
          <span className="text-gray-600">•</span>
          <span className="text-xs font-mono text-gray-400 uppercase">
            PUNE UNIVERSITY ACADEMIC ECOSYSTEM
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-paper uppercase tracking-tight">
          Participating Campuses & Hubs
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-2 font-sans">
          Institutions collaborating on the centralized event and hackathon grid. MIT ACSC stands as the anchor flagship campus in Northern Pune.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((col) => (
          <div
            key={col.id}
            onClick={() => navigateTo('college-detail', col.id)}
            className={`rounded-xl border overflow-hidden flex flex-col justify-between transition-all cursor-pointer group shadow-sm hover:shadow-gold-sm ${
              col.featured 
                ? 'bg-gold-400/5 border-gold-400/50 hover:border-gold-400' 
                : 'bg-surface border-surface-border hover:border-neutral-600'
            }`}
          >
            <div>
              {/* Banner */}
              <div className="relative h-44 overflow-hidden bg-charcoal-900">
                <img
                  src={col.bannerImage}
                  alt={col.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                
                <div className="absolute top-3 left-3">
                  {col.featured ? (
                    <Badge variant="gold" size="sm">FLAGSHIP HUB</Badge>
                  ) : (
                    <Badge variant="charcoal" size="sm">AFFILIATE</Badge>
                  )}
                </div>

                <div className="absolute bottom-2.5 left-4 right-4">
                  <span className="text-xs font-mono text-gold-300 uppercase block">
                    ESTD. {col.established} • {col.city}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-400">{col.shortName}</span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                    {col.eventsCount} Events Hosted
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-paper group-hover:text-gold-300 transition-colors line-clamp-1">
                  {col.name}
                </h3>

                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                  {col.description}
                </p>

                <div className="pt-3 border-t border-surface-border text-xs font-mono text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Flagship Fest</span>
                    <span className="text-paper line-clamp-1 max-w-[170px]">{col.flagshipFest}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Campus Location</span>
                    <span className="text-gray-300">{col.area.split(',')[0]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 pt-0">
              <Button
                variant={col.featured ? 'primary' : 'secondary'}
                size="sm"
                className="w-full text-xs font-mono"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateTo('college-detail', col.id);
                }}
              >
                View Campus Profile & Events →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

