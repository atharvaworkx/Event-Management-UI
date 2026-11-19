import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Radio, Bell, Calendar, Building2, Pin, ArrowRight } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const AnnouncementsPage: React.FC = () => {
  const { announcements, navigateTo } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Urgent', 'Schedule', 'Results', 'General'];

  const filteredAnnouncements = announcements.filter(
    a => selectedCategory === 'All' || a.category === selectedCategory
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-surface-border pb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold">
            OFFICIAL NEWSWIRE
          </span>
          <span className="text-gray-600">•</span>
          <span className="text-xs font-mono text-gray-400 uppercase">
            DESK DISPATCHES
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-paper uppercase tracking-tight">
          Campus Announcements & Bulletins
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-2 font-sans">
          Verified notices directly from event steering committees, conveners, jury panels, and gate control authorities.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto text-xs font-mono scrollbar-none">
        <span className="text-gray-500 uppercase mr-2">Filter Category:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded transition-all ${
              selectedCategory === cat
                ? 'bg-gold-400 text-black font-bold shadow-gold-sm'
                : 'bg-surface border border-surface-border text-gray-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Announcements List */}
      <div className="space-y-6">
        {filteredAnnouncements.map((ann) => (
          <article
            key={ann.id}
            className={`p-6 sm:p-8 rounded-xl border transition-all ${
              ann.isPinned 
                ? 'bg-surface border-gold-400/40 shadow-sm' 
                : 'bg-surface-subtle border-surface-border hover:border-neutral-700'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono mb-3">
              <div className="flex items-center gap-2">
                <Badge variant={ann.category === 'Urgent' ? 'red' : 'gold'} size="sm">
                  {ann.category}
                </Badge>
                {ann.isPinned && (
                  <span className="flex items-center gap-1 text-gold-400 font-semibold">
                    <Pin className="w-3 h-3" /> PINNED BULLETIN
                  </span>
                )}
              </div>
              <span className="text-gray-500">{ann.publishedAt}</span>
            </div>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-paper mb-2 leading-snug">
              {ann.title}
            </h2>

            <p className="text-xs sm:text-sm text-gold-200/90 font-mono mb-4">
              {ann.summary}
            </p>

            <div className="text-sm text-gray-300 font-sans leading-relaxed pt-3 border-t border-surface-border">
              {ann.content}
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5 text-gray-400">
                <Building2 className="w-3.5 h-3.5 text-gold-400" />
                {ann.collegeName}
              </span>

              {ann.eventId && (
                <button
                  onClick={() => navigateTo('event-detail', ann.eventId)}
                  className="text-gold-400 hover:underline flex items-center gap-1"
                >
                  <span>Go to Event</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

