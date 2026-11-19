import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, Clock, MapPin, Filter, Sparkles, User, Tag } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const SchedulePage: React.FC = () => {
  const { events, navigateTo, openRegistration } = useApp();

  const [selectedEventId, setSelectedEventId] = useState<string>('kshitij-2026');
  const [selectedDay, setSelectedDay] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const currentEvent = events.find(e => e.id === selectedEventId) || events[0];

  // Distinct days and categories for this event
  const days = ['All', ...Array.from(new Set(currentEvent.schedule.map(s => s.day)))];
  const categories = ['All', ...Array.from(new Set(currentEvent.schedule.map(s => s.category)))];

  const filteredSchedule = currentEvent.schedule.filter(item => {
    const matchDay = selectedDay === 'All' || item.day === selectedDay;
    const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
    return matchDay && matchCat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Editorial Header */}
      <div className="border-b border-surface-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold">
              TIME-SERIES CHRONOLOGY
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-xs font-mono text-gray-400 uppercase">
              INTERACTIVE FESTIVAL ITINERARY
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-paper uppercase tracking-tight">
            Campus Event Schedules
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-2 font-sans">
            Real-time stage timings, keynotes, hacking checkpoints, and competition rounds across host venues.
          </p>
        </div>

        {/* Event Selector Pill */}
        <div className="shrink-0 space-y-1">
          <label className="text-[10px] font-mono uppercase text-gray-500 block">Select Active Event</label>
          <select
            value={selectedEventId}
            onChange={(e) => {
              setSelectedEventId(e.target.value);
              setSelectedDay('All');
              setSelectedCategory('All');
            }}
            className="px-3.5 py-2 bg-surface border border-gold-400/50 rounded font-serif text-sm font-bold text-gold-300 focus:outline-none cursor-pointer"
          >
            {events.map(ev => (
              <option key={ev.id} value={ev.id} className="bg-surface text-paper font-sans">
                {ev.title} ({ev.collegeLogoBadge})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filter Tabs & Days */}
      <div className="bg-surface-subtle border border-surface-border rounded-xl p-5 space-y-4">
        {/* Day Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono scrollbar-none">
          <span className="text-gray-500 uppercase mr-2 shrink-0">Day Filter:</span>
          {days.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDay(d)}
              className={`px-3 py-1.5 rounded transition-all whitespace-nowrap ${
                selectedDay === d
                  ? 'bg-gold-400 text-black font-bold shadow-gold-sm'
                  : 'bg-surface border border-surface-border text-gray-400 hover:text-white'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-surface-border text-xs font-mono scrollbar-none">
          <span className="text-gray-500 uppercase mr-2 shrink-0">Track:</span>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                selectedCategory === c
                  ? 'bg-surface-border text-gold-400 border border-gold-400/40 font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline View */}
      <div className="bg-surface border border-surface-border rounded-xl p-6 sm:p-10 relative">
        <div className="mb-6 flex items-center justify-between pb-4 border-b border-surface-border">
          <div>
            <h3 className="font-serif text-2xl font-bold text-paper uppercase">
              {currentEvent.title} Timeline
            </h3>
            <span className="text-xs font-mono text-gold-300">
              {currentEvent.collegeName} • {currentEvent.venue}
            </span>
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={() => openRegistration(currentEvent)}
          >
            Register for Event
          </Button>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-surface-border ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {filteredSchedule.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Dot Icon */}
              <div className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-4 h-4 rounded-full border-2 ${
                item.isHighlight 
                  ? 'bg-gold-400 border-gold-200 shadow-[0_0_12px_#D4AF37]' 
                  : 'bg-charcoal-900 border-neutral-600'
              }`} />

              <div className="p-5 bg-surface-subtle border border-surface-border hover:border-gold-400/40 rounded-lg transition-all space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-gold-400 font-bold text-sm">{item.time}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-300">{item.day}</span>
                  </div>
                  <Badge variant={item.isHighlight ? 'gold' : 'charcoal'} size="sm">
                    {item.category}
                  </Badge>
                </div>

                <h4 className="font-display font-bold text-base sm:text-lg text-paper">
                  {item.title}
                </h4>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    {item.venue}
                  </span>
                  {item.speaker && (
                    <span className="text-gold-300 font-sans font-medium">
                      Keynote / Host: {item.speaker}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

