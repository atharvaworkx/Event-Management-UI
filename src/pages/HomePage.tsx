import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  Calendar, 
  MapPin, 
  Users, 
  ArrowRight, 
  Trophy, 
  Flame, 
  Compass, 
  PlusCircle,
  Bookmark
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { liveActivityStream, livePulseStats } from '../data/campusPulse';
import { campusCollegeLeaderboard, leaderboardsData } from '../data/leaderboards';

export const HomePage: React.FC = () => {
  const { 
    events, 
    colleges, 
    announcements, 
    navigateTo, 
    openRegistration, 
    toggleBookmark, 
    isBookmarked,
    setCreateEventModalOpen 
  } = useApp();

  // Flagship Event Countdown (Kshitij 2026: March 12, 2026)
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const flagshipKshitij = events.find(e => e.id === 'kshitij-2026') || events[0];
  const mitEvents = events.filter(e => e.collegeId === 'mit-acsc');

  const categories = [
    { name: 'Hackathons', count: 4, icon: '⚡' },
    { name: 'IT Fests', count: 3, icon: '💻' },
    { name: 'Coding', count: 5, icon: '⌨️' },
    { name: 'Cultural', count: 6, icon: '🎭' },
    { name: 'Competitions', count: 4, icon: '🏆' },
    { name: 'Seminars', count: 3, icon: '🎙️' },
    { name: 'Entrepreneurship', count: 2, icon: '🚀' },
    { name: 'Gaming', count: 3, icon: '🎮' }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[82vh] flex flex-col justify-center pt-8 pb-14 border-b border-surface-border/70 overflow-hidden bg-grain">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[400px] bg-gold-400/10 blur-[130px] pointer-events-none rounded-full animate-pulse" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[300px] bg-gold-600/5 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
          {/* Top Label */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-subtle/80 border border-gold-400/30 text-xs font-mono text-gold-400 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              COLLEGIATE NETWORK • PUNE 2026
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest hidden sm:inline">
              CENTRAL EVENT & HACKATHON PLATFORM
            </span>
          </div>

          {/* Hero Typography & Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 7 Columns: Editorial Headline */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-paper leading-[1.08] tracking-tight uppercase">
                Where Campus <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 italic font-serif">
                  Comes Alive.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-xl font-sans leading-relaxed">
                Centralized discovery and participation platform for college festivals, national hackathons, and technical competitions across Pune.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Button 
                  size="lg"
                  className="rounded-xl shadow-gold-sm hover:shadow-gold-md hover:-translate-y-0.5 transition-all"
                  icon={<Compass className="w-5 h-5" strokeWidth={1.75} />}
                  onClick={() => navigateTo('events')}
                >
                  Explore Events
                </Button>

                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-xl hover:-translate-y-0.5 transition-all"
                  icon={<PlusCircle className="w-5 h-5 text-gold-400" strokeWidth={1.75} />}
                  onClick={() => setCreateEventModalOpen(true)}
                >
                  Add Event
                </Button>

                <Button 
                  variant="secondary" 
                  size="lg"
                  className="rounded-xl hover:-translate-y-0.5 transition-all"
                  icon={<Trophy className="w-5 h-5 text-gold-400" strokeWidth={1.75} />}
                  onClick={() => navigateTo('leaderboard')}
                >
                  Leaderboard
                </Button>
              </div>

              {/* Clean Key Metrics */}
              <div className="pt-6 grid grid-cols-3 gap-6 border-t border-surface-border/80 font-mono">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-paper block">184</span>
                  <span className="text-xs text-gold-400 uppercase">Live Participants</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-paper block">{events.length}</span>
                  <span className="text-xs text-gray-400 uppercase">Active Events</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-paper block">₹12.5L+</span>
                  <span className="text-xs text-gray-400 uppercase">Prize Ecosystem</span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: CINEMATIC FLAGSHIP EVENT CARD (Kshitij 2026) */}
            <div className="lg:col-span-5">
              <div className="bg-[#0C0E14] border border-gold-400/40 rounded-2xl overflow-hidden shadow-2xl relative group hover:border-gold-400 hover:shadow-[0_12px_40px_rgba(212,175,55,0.18)] transition-all duration-300">
                {/* Header Badge */}
                <div className="bg-surface-subtle/80 px-5 py-3 border-b border-surface-border flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-gold-400 font-bold uppercase">
                    <Flame className="w-4 h-4 text-gold-400" strokeWidth={2} />
                    FLAGSHIP FESTIVAL
                  </div>
                  <Badge variant="gold" size="sm">REGISTRATION OPEN</Badge>
                </div>

                {/* Event Image Banner with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={flagshipKshitij.bannerImage} 
                    alt={flagshipKshitij.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E14] via-[#0C0E14]/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-5 right-5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold-300 block mb-0.5">
                      {flagshipKshitij.collegeName}
                    </span>
                    <h3 className="font-serif text-2xl font-black text-paper uppercase">
                      {flagshipKshitij.title}
                    </h3>
                  </div>
                </div>

                {/* Live Countdown Timer */}
                <div className="p-5 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block mb-2">
                      COUNTDOWN TO CEREMONY
                    </span>
                    <div className="grid grid-cols-4 gap-2 text-center font-mono">
                      <div className="p-2.5 bg-surface-subtle/90 border border-surface-border/80 rounded-xl">
                        <span className="text-xl font-bold text-paper block">{timeLeft.days}</span>
                        <span className="text-[9px] text-gray-500 uppercase">Days</span>
                      </div>
                      <div className="p-2.5 bg-surface-subtle/90 border border-surface-border/80 rounded-xl">
                        <span className="text-xl font-bold text-paper block">{timeLeft.hours}</span>
                        <span className="text-[9px] text-gray-500 uppercase">Hours</span>
                      </div>
                      <div className="p-2.5 bg-surface-subtle/90 border border-surface-border/80 rounded-xl">
                        <span className="text-xl font-bold text-paper block">{timeLeft.minutes}</span>
                        <span className="text-[9px] text-gray-500 uppercase">Mins</span>
                      </div>
                      <div className="p-2.5 bg-surface-subtle/90 border border-surface-border/80 rounded-xl">
                        <span className="text-xl font-bold text-gold-400 block">{timeLeft.seconds}</span>
                        <span className="text-[9px] text-gray-500 uppercase">Secs</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Metadata */}
                  <div className="space-y-1.5 text-xs text-gray-300 font-sans border-t border-surface-border pt-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gold-400 shrink-0" strokeWidth={1.75} />
                      <span>{flagshipKshitij.startDate} – {flagshipKshitij.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" strokeWidth={1.75} />
                      <span className="line-clamp-1">{flagshipKshitij.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-3.5 h-3.5 text-gold-400 shrink-0" strokeWidth={1.75} />
                      <span className="text-gold-300 font-semibold">{flagshipKshitij.prizePool}</span>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-2 flex items-center gap-2">
                    <Button 
                      variant="primary" 
                      className="w-full text-xs rounded-xl"
                      onClick={() => openRegistration(flagshipKshitij)}
                    >
                      Register Now
                    </Button>
                    <Button 
                      variant="secondary" 
                      className="text-xs px-4 rounded-xl"
                      onClick={() => navigateTo('event-detail', flagshipKshitij.id)}
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAMPUS TELEMETRY & LIVE PULSE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-surface-subtle/80 border border-surface-border/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-surface-border">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold">
                  LIVE PULSE TELEMETRY
                </span>
              </div>
              <h2 className="font-display font-bold text-xl text-paper">Real-Time Registration Stream</h2>
            </div>
            
            <div className="flex items-center gap-6 font-mono text-xs">
              <div>
                <span className="text-gray-500 block uppercase text-[10px]">Today's Passes</span>
                <span className="font-bold text-emerald-400">{livePulseStats.totalRegistrationsToday} Claims</span>
              </div>
              <div>
                <span className="text-gray-500 block uppercase text-[10px]">Campuses</span>
                <span className="font-bold text-paper">{colleges.length} Linked</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-4">
            {liveActivityStream.slice(0, 3).map((act) => (
              <div key={act.id} className="p-3.5 bg-surface rounded-xl border border-surface-border/70 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-1.5 font-medium text-paper">
                    <span>{act.studentName}</span>
                    <span className="text-gray-500 text-[11px]">({act.college.slice(0, 10)})</span>
                  </div>
                  <span className="text-[11px] text-gray-400 block line-clamp-1">{act.eventName}</span>
                </div>
                <div className="text-right shrink-0">
                  <Badge variant={act.action === 'checked-in' ? 'green' : 'gold'} size="sm">
                    {act.action}
                  </Badge>
                  <span className="text-[10px] text-gray-500 font-mono block mt-1">{act.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED MIT ACSC FLAGSHIP QUAD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="gold" size="sm">HOST CAMPUS</Badge>
              <span className="text-xs font-mono text-gray-400 uppercase">MIT ACSC ALANDI, PUNE</span>
            </div>
            <h2 className="font-serif text-3xl font-black text-paper uppercase tracking-tight">
              Flagship Hackathons & Festivals
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl"
              icon={<PlusCircle className="w-4 h-4 text-gold-400" strokeWidth={1.75} />}
              onClick={() => setCreateEventModalOpen(true)}
            >
              List Event
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="rounded-xl"
              icon={<ArrowRight className="w-4 h-4" strokeWidth={1.75} />}
              iconPosition="right"
              onClick={() => navigateTo('events')}
            >
              View All ({events.length})
            </Button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mitEvents.slice(0, 4).map((event) => (
            <div 
              key={event.id}
              className="bg-surface border border-surface-border/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-gold-400/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.12)] transition-all duration-300 group"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={event.bannerImage} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="gold" size="sm">{event.category}</Badge>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(event.id);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-xl bg-black/60 backdrop-blur-sm transition-colors ${
                      isBookmarked(event.id) ? 'text-gold-400' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isBookmarked(event.id) ? 'fill-gold-400' : ''}`} strokeWidth={1.75} />
                  </button>
                </div>

                <div className="p-5 space-y-2.5">
                  <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block">
                    {event.collegeLogoBadge}
                  </span>
                  <h3 
                    onClick={() => navigateTo('event-detail', event.id)}
                    className="font-display font-bold text-base text-paper group-hover:text-gold-300 transition-colors cursor-pointer line-clamp-1"
                  >
                    {event.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {event.tagLine}
                  </p>

                  <div className="pt-2 border-t border-surface-border text-xs font-mono space-y-1 text-gray-400">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Date</span>
                      <span className="text-paper">{event.startDate.split(',')[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Prize Pool</span>
                      <span className="text-gold-400 font-semibold">{event.prizePool}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="w-full text-xs font-mono rounded-xl"
                  onClick={() => openRegistration(event)}
                >
                  Register • {event.entryFee}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EXPLORE BY VERTICAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold block mb-1">
            DISCOVERY INDEX
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-paper uppercase">
            Browse By Category
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => navigateTo('events')}
              className="p-4 rounded-xl bg-surface-subtle/80 hover:bg-surface-hover border border-surface-border hover:border-gold-400/40 text-left transition-all group flex flex-col justify-between h-24 hover:-translate-y-0.5"
            >
              <span className="text-xl">{cat.icon}</span>
              <div>
                <span className="text-xs font-semibold text-paper group-hover:text-gold-300 font-display block leading-tight">
                  {cat.name}
                </span>
                <span className="text-[10px] font-mono text-gray-500 mt-0.5 block">
                  {cat.count} Events
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 5. PUNE ALLIANCE CAMPUSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border border-surface-border/80 bg-charcoal-900 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-surface-border">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="gold" size="sm">COLLEGIATE NETWORK</Badge>
                <span className="text-xs font-mono text-gray-400">PUNE METROPOLITAN REGION</span>
              </div>
              <h2 className="font-serif text-3xl font-black text-paper uppercase">
                Participating Institutions
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xl mt-1 leading-relaxed">
                Connect and participate across premier colleges in Pune with shared scoring credentials.
              </p>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="rounded-xl"
              onClick={() => navigateTo('colleges')}
            >
              Full College Directory ({colleges.length})
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {colleges.map((col) => (
              <div
                key={col.id}
                onClick={() => navigateTo('college-detail', col.id)}
                className={`p-5 rounded-xl border transition-all cursor-pointer group flex flex-col justify-between hover:-translate-y-1 ${
                  col.featured 
                    ? 'bg-gold-400/5 border-gold-400/40 hover:border-gold-400' 
                    : 'bg-surface-subtle border-surface-border hover:border-neutral-600'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-gray-500 uppercase">{col.area}</span>
                    {col.featured ? (
                      <Badge variant="gold" size="sm">Flagship</Badge>
                    ) : (
                      <span className="text-[10px] font-mono text-gray-500">{col.eventsCount} Events</span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-base text-paper group-hover:text-gold-300 transition-colors">
                    {col.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                    {col.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-border flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>Fest: {col.flagshipFest.split('&')[0]}</span>
                  <span className="text-gold-400 group-hover:underline">View →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEADERBOARD PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-surface border border-surface-border rounded-2xl p-6 sm:p-7">
            <div className="flex items-center justify-between pb-4 border-b border-surface-border">
              <div>
                <span className="text-[11px] font-mono text-gold-400 uppercase tracking-wider block">
                  STANDINGS • HACKATHON STAGE
                </span>
                <h3 className="font-serif text-xl font-bold text-paper uppercase">
                  Innovyuh Hackathon 2026
                </h3>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                className="rounded-xl"
                onClick={() => navigateTo('leaderboard')}
              >
                Full Leaderboard →
              </Button>
            </div>

            <div className="divide-y divide-surface-border mt-3 text-xs">
              {leaderboardsData['innovyuh-2026'].rankings.slice(0, 4).map((entry) => (
                <div key={entry.rank} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono font-bold text-xs ${
                      entry.rank === 1 ? 'bg-gold-400 text-black' : 'bg-surface-muted text-gray-300'
                    }`}>
                      #{entry.rank}
                    </span>
                    <div>
                      <span className="font-semibold text-paper font-sans text-sm block">
                        {entry.teamName}
                      </span>
                      <span className="text-[11px] text-gray-400 line-clamp-1">{entry.project}</span>
                      <span className="text-[10px] font-mono text-gold-300">{entry.college}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono text-sm font-bold text-paper block">{entry.score} pts</span>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase">{entry.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trophy Standings */}
          <div className="lg:col-span-5 bg-surface-subtle border border-surface-border rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-surface-border">
                <div>
                  <span className="text-[11px] font-mono text-gold-400 uppercase tracking-wider block">
                    PUNE TROPHY LEAGUE
                  </span>
                  <h3 className="font-serif text-xl font-bold text-paper uppercase">
                    Institutional Laurels
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400">
                  <Trophy className="w-4 h-4" strokeWidth={1.75} />
                </div>
              </div>

              <div className="divide-y divide-surface-border mt-3 text-xs font-mono">
                {campusCollegeLeaderboard.slice(0, 4).map((c) => (
                  <div key={c.rank} className="py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 font-bold w-4">#{c.rank}</span>
                      <span className="text-paper font-semibold font-sans">{c.shortName}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gold-400 font-bold">{c.points} pts</span>
                      <span className="text-[10px] text-gray-500">{c.trophies} Cups</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-surface-border">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-xs font-mono rounded-xl"
                onClick={() => navigateTo('leaderboard')}
              >
                View Complete Collegiate Roster
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HALL OF FAME HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border border-surface-border/80 bg-charcoal-900 rounded-2xl p-8">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold block mb-1">
              LEGACY & FOOTAGE
            </span>
            <h2 className="font-serif text-3xl font-black text-paper uppercase">
              Hall of Fame & Festival Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="h-44 rounded-xl overflow-hidden border border-surface-border relative">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" 
                  alt="Hackathon Winners"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                  <span className="text-xs font-mono text-gold-300">Innovyuh ’25 Grand Champions</span>
                </div>
              </div>
              <h4 className="font-display font-semibold text-sm text-paper">Team AgroBot (MIT ACSC)</h4>
              <p className="text-xs text-gray-400">Awarded ₹1,25,000 cash grant and incubated at MIT ACSC Innovation Cell.</p>
            </div>

            <div className="space-y-2">
              <div className="h-44 rounded-xl overflow-hidden border border-surface-border relative">
                <img 
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80" 
                  alt="Kshitij Bands"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                  <span className="text-xs font-mono text-gold-300">Kshitij ’25 Battle of the Bands</span>
                </div>
              </div>
              <h4 className="font-display font-semibold text-sm text-paper">The Pune Collective</h4>
              <p className="text-xs text-gray-400">Live audience of 3,500+ attendees at Open Amphitheatre Alandi.</p>
            </div>

            <div className="space-y-2">
              <div className="h-44 rounded-xl overflow-hidden border border-surface-border relative">
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80" 
                  alt="TechBlitz Speed Coding"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                  <span className="text-xs font-mono text-gold-300">TechBlitz ’25 Speed Coding</span>
                </div>
              </div>
              <h4 className="font-display font-semibold text-sm text-paper">Rohan Shinde (Laureate)</h4>
              <p className="text-xs text-gray-400">Solved 6 algorithmic testbeds in 12m 45s without syntax faults.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden border-2 border-gold-400/40 bg-gradient-to-b from-[#151720] to-[#0A0B0E] p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" strokeWidth={1.75} />
          </div>

          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-paper uppercase tracking-tight">
              Ready to Claim Your Arena?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
              Register now for Kshitij 2026, Innovyuh Hackathon, and TechBlitz. Or create and host your own college competition.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button 
              size="lg"
              className="rounded-xl shadow-gold-sm hover:shadow-gold-md"
              icon={<Compass className="w-5 h-5" strokeWidth={1.75} />}
              onClick={() => navigateTo('events')}
            >
              Browse Event Catalog
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-xl"
              icon={<PlusCircle className="w-5 h-5 text-gold-400" strokeWidth={1.75} />}
              onClick={() => setCreateEventModalOpen(true)}
            >
              List New Event
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
