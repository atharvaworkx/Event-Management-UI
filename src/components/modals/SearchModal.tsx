import React, { useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, X, Calendar, Building2, Trophy, Compass, ArrowRight } from 'lucide-react';
import { Badge } from '../common/Badge';

export const SearchModal: React.FC = () => {
  const { 
    searchModalOpen, 
    setSearchModalOpen, 
    searchQuery, 
    setSearchQuery, 
    events, 
    colleges, 
    navigateTo 
  } = useApp();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(!searchModalOpen);
      }
      if (e.key === 'Escape' && searchModalOpen) {
        setSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchModalOpen, setSearchModalOpen]);

  useEffect(() => {
    if (searchModalOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [searchModalOpen]);

  if (!searchModalOpen) return null;

  const query = searchQuery.trim().toLowerCase();

  // Categorized search
  const matchedEvents = query 
    ? events.filter(e => 
        e.title.toLowerCase().includes(query) || 
        e.category.toLowerCase().includes(query) ||
        e.tagLine.toLowerCase().includes(query) ||
        e.collegeName.toLowerCase().includes(query)
      )
    : events.slice(0, 4);

  const matchedColleges = query
    ? colleges.filter(c =>
        c.name.toLowerCase().includes(query) ||
        c.shortName.toLowerCase().includes(query) ||
        c.area.toLowerCase().includes(query)
      )
    : colleges.slice(0, 3);

  // Competitions sub-tracks
  const matchedCompetitions = events.flatMap(ev => 
    (ev.subCompetitions || []).map(sub => ({ sub, eventId: ev.id, eventTitle: ev.title }))
  ).filter(item => !query || item.sub.toLowerCase().includes(query)).slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="w-full max-w-2xl bg-surface border border-surface-border rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="flex items-center px-4 py-3.5 border-b border-surface-border bg-surface-subtle">
          <Search className="w-5 h-5 text-gold-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events, colleges, competitions (e.g., Kshitij, hackathon, MIT, coding)..."
            className="w-full bg-transparent text-paper placeholder-gray-500 font-sans text-sm focus:outline-none"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="p-1 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={() => setSearchModalOpen(false)}
            className="ml-2 px-1.5 py-0.5 text-[10px] font-mono border border-surface-border rounded text-gray-400 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 space-y-6">
          {/* Events Section */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 px-1">
              <span className="flex items-center gap-1.5 text-gold-400 font-semibold">
                <Compass className="w-3.5 h-3.5" /> Events ({matchedEvents.length})
              </span>
            </div>
            {matchedEvents.length > 0 ? (
              <div className="space-y-1.5">
                {matchedEvents.map(event => (
                  <div
                    key={event.id}
                    onClick={() => {
                      navigateTo('event-detail', event.id);
                      setSearchModalOpen(false);
                    }}
                    className="flex items-center justify-between p-2.5 rounded bg-surface-subtle hover:bg-surface-hover border border-transparent hover:border-gold-400/30 cursor-pointer transition-all group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-paper group-hover:text-gold-300 font-display">
                          {event.title}
                        </span>
                        <Badge size="sm" variant={event.collegeId === 'mit-acsc' ? 'gold' : 'charcoal'}>
                          {event.collegeLogoBadge}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{event.tagLine}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400 shrink-0">
                      <span>{event.startDate.split(',')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-gray-500 italic px-2">No matching events found.</p>
            )}
          </div>

          {/* Colleges Section */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 px-1">
              <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
                <Building2 className="w-3.5 h-3.5" /> Institutes & Campuses ({matchedColleges.length})
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {matchedColleges.map(college => (
                <div
                  key={college.id}
                  onClick={() => {
                    navigateTo('college-detail', college.id);
                    setSearchModalOpen(false);
                  }}
                  className="p-2.5 rounded bg-surface-subtle hover:bg-surface-hover border border-transparent hover:border-sky-400/30 cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-paper group-hover:text-sky-300 font-display">
                      {college.shortName}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">{college.eventsCount} Events</span>
                  </div>
                  <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">{college.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Competitions Section */}
          {matchedCompetitions.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 px-1">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Trophy className="w-3.5 h-3.5" /> Specific Competitions ({matchedCompetitions.length})
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {matchedCompetitions.map((comp, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      navigateTo('event-detail', comp.eventId);
                      setSearchModalOpen(false);
                    }}
                    className="text-xs px-2.5 py-1.5 rounded bg-surface-muted border border-surface-border hover:border-emerald-500/40 text-gray-300 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>{comp.sub}</span>
                    <span className="text-[10px] text-gray-500 font-mono">({comp.eventTitle.slice(0, 10)})</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-surface-muted/50 border-t border-surface-border text-[11px] font-mono text-gray-400 flex items-center justify-between">
          <span>Pro tip: Press <kbd className="text-paper">TAB</kbd> to cycle results</span>
          <button 
            onClick={() => { navigateTo('events'); setSearchModalOpen(false); }}
            className="text-gold-400 hover:underline"
          >
            Explore all {events.length} events →
          </button>
        </div>
      </div>
    </div>
  );
};

