import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  Bookmark, 
  Sparkles, 
  SlidersHorizontal,
  X,
  ChevronDown
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { EmptyState } from '../components/common/EmptyState';
import { EventCategory, EventStatus, EventMode } from '../types';

export const EventsPage: React.FC = () => {
  const { events, colleges, navigateTo, openRegistration, toggleBookmark, isBookmarked } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCollege, setSelectedCollege] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedMode, setSelectedMode] = useState<string>('All');

  const categories: string[] = [
    'All',
    'Hackathons',
    'IT Fests',
    'Coding',
    'Cultural',
    'Competitions',
    'Seminars',
    'Entrepreneurship'
  ];

  // Filtering logic
  const filteredEvents = events.filter((ev) => {
    // Search query
    const matchSearch = !searchTerm || 
      ev.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.tagLine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.collegeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (ev.subCompetitions && ev.subCompetitions.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())));

    // Category
    const matchCategory = selectedCategory === 'All' || ev.category === selectedCategory;

    // College
    const matchCollege = selectedCollege === 'All' || ev.collegeId === selectedCollege;

    // Status
    const matchStatus = selectedStatus === 'All' || ev.status === selectedStatus;

    // Mode
    const matchMode = selectedMode === 'All' || ev.mode === selectedMode;

    return matchSearch && matchCategory && matchCollege && matchStatus && matchMode;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedCollege('All');
    setSelectedStatus('All');
    setSelectedMode('All');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Editorial Header */}
      <div className="border-b border-surface-border pb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold">
            DISCOVERY CATALOG
          </span>
          <span className="text-gray-600">•</span>
          <span className="text-xs font-mono text-gray-400 uppercase">
            {events.length} ACCREDITED EVENTS
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-paper uppercase tracking-tight">
          Explore College Events & Hackathons
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-2 leading-relaxed font-sans">
          Filter through national hackathons, cultural festivals, competitive programming marathons, and academic conclaves hosted across Pune.
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-surface-subtle border border-surface-border rounded-xl p-5 space-y-4">
        {/* Search & Selectors Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Search bar */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by event, topic, or competition..."
              className="w-full pl-10 pr-4 py-2.5 bg-surface border border-surface-border rounded text-xs sm:text-sm text-paper placeholder-gray-500 focus:outline-none focus:border-gold-400"
            />
          </div>

          {/* College Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedCollege}
              onChange={(e) => setSelectedCollege(e.target.value)}
              className="w-full px-3 py-2.5 bg-surface border border-surface-border rounded text-xs sm:text-sm text-paper focus:outline-none focus:border-gold-400 font-sans cursor-pointer"
            >
              <option value="All">All Institutes ({colleges.length})</option>
              {colleges.map(c => (
                <option key={c.id} value={c.id}>{c.shortName}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="md:col-span-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2.5 bg-surface border border-surface-border rounded text-xs sm:text-sm text-paper focus:outline-none focus:border-gold-400 font-sans cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Registration Open">Registration Open</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Live Now">Live Now</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Mode Filter */}
          <div className="md:col-span-2">
            <select
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
              className="w-full px-3 py-2.5 bg-surface border border-surface-border rounded text-xs sm:text-sm text-paper focus:outline-none focus:border-gold-400 font-sans cursor-pointer"
            >
              <option value="All">Any Mode</option>
              <option value="In-Person">In-Person</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Online">Online</option>
            </select>
          </div>
        </div>

        {/* Category Pills Row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 border-t border-surface-border text-xs scrollbar-none">
          <span className="text-[11px] font-mono text-gray-500 uppercase shrink-0 mr-1">
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded text-xs font-sans whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-gold-400 text-black font-semibold shadow-gold-sm'
                  : 'bg-surface border border-surface-border text-gray-400 hover:text-white hover:border-neutral-600'
              }`}
            >
              {cat}
            </button>
          ))}

          {(searchTerm || selectedCategory !== 'All' || selectedCollege !== 'All' || selectedStatus !== 'All' || selectedMode !== 'All') && (
            <button
              onClick={resetFilters}
              className="ml-auto text-xs font-mono text-rose-400 hover:underline shrink-0 flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Events Results Count */}
      <div className="flex items-center justify-between text-xs font-mono text-gray-400">
        <span>Showing {filteredEvents.length} of {events.length} listed events</span>
        <span className="hidden sm:inline">MIT ACSC flagged events feature verified digital passes</span>
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const seatsPercent = Math.min(100, Math.round((event.registrationCount / event.maxSeats) * 100));
            return (
              <div
                key={event.id}
                className="bg-surface border border-surface-border rounded-xl overflow-hidden flex flex-col justify-between hover:border-gold-400/60 transition-all group shadow-sm hover:shadow-gold-sm"
              >
                <div>
                  {/* Banner Image */}
                  <div className="relative h-48 overflow-hidden bg-charcoal-900">
                    <img
                      src={event.bannerImage}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <Badge variant="gold" size="sm">{event.category}</Badge>
                      {event.isFlagship && (
                        <Badge variant="charcoal" size="sm">FLAGSHIP</Badge>
                      )}
                    </div>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(event.id);
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-sm transition-colors ${
                        isBookmarked(event.id) ? 'text-gold-400' : 'text-gray-400 hover:text-white'
                      }`}
                      aria-label="Bookmark Event"
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked(event.id) ? 'fill-gold-400' : ''}`} />
                    </button>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-gold-300 font-semibold">
                        {event.collegeLogoBadge}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                        {event.status}
                      </span>
                    </div>

                    <h3 
                      onClick={() => navigateTo('event-detail', event.id)}
                      className="font-serif text-xl font-bold text-paper group-hover:text-gold-300 transition-colors cursor-pointer line-clamp-1"
                    >
                      {event.title}
                    </h3>

                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      {event.tagLine}
                    </p>

                    {/* Meta Points */}
                    <div className="space-y-1.5 text-xs font-mono text-gray-300 pt-3 border-t border-surface-border">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-gold-400" /> Date
                        </span>
                        <span>{event.startDate.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 flex items-center gap-1.5">
                          <Trophy className="w-3.5 h-3.5 text-gold-400" /> Prize Pool
                        </span>
                        <span className="text-gold-400 font-bold">{event.prizePool}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-gold-400" /> Format
                        </span>
                        <span>{event.teamSize.min === 1 && event.teamSize.max === 1 ? 'Solo' : `Teams of ${event.teamSize.min}-${event.teamSize.max}`}</span>
                      </div>
                    </div>

                    {/* Seats Progress Bar */}
                    <div className="pt-2">
                      <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-1">
                        <span>Registrations</span>
                        <span>{event.registrationCount} / {event.maxSeats} filled</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-gold-600 to-gold-400" 
                          style={{ width: `${seatsPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer CTAs */}
                <div className="p-5 pt-0 flex items-center gap-2">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full text-xs font-mono"
                    onClick={() => openRegistration(event)}
                  >
                    Register Now • {event.entryFee}
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="text-xs px-3"
                    onClick={() => navigateTo('event-detail', event.id)}
                  >
                    Details
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyState
          icon={<Search className="w-8 h-8" />}
          title="No events match your criteria"
          description="Try broadening your search keyword or clearing the selected category and college filters."
          actionLabel="Clear All Filters"
          onAction={resetFilters}
        />
      )}
    </div>
  );
};

