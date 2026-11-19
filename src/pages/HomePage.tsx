import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  Calendar, 
  MapPin, 
  Users, 
  ArrowRight, 
  Trophy, 
  Clock, 
  Flame, 
  Radio, 
  Building2, 
  Compass, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Shield,
  Zap,
  Bookmark
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { liveActivityStream, livePulseStats, puneEventRadarNodes } from '../data/campusPulse';
import { campusCollegeLeaderboard, leaderboardsData } from '../data/leaderboards';

export const HomePage: React.FC = () => {
  const { 
    events, 
    colleges, 
    announcements, 
    navigateTo, 
    openRegistration, 
    toggleBookmark, 
    isBookmarked 
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
  const hackathons = events.filter(e => e.category === 'Hackathons');

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
    <div className="space-y-20 pb-16">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-8 pb-12 border-b border-surface-border overflow-hidden bg-grain">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[450px] bg-gold-400/5 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-gold-600/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
          {/* Top Label */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-subtle border border-gold-400/30 text-xs font-mono text-gold-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              LIVE INTER-COLLEGE HUB • PUNE 2026
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest hidden sm:inline">
              NAAC A+ ACCREDITED COLLEGIATE NETWORK
            </span>
          </div>

          {/* Hero Typography & Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Columns: Editorial Headline */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-paper leading-[1.05] tracking-tight uppercase">
                Where Campus <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 italic font-serif">
                  Comes Alive.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-xl font-sans leading-relaxed">
                Western India’s premier centralized portal for student innovators, hackers, coders, and artists. Discover hackathons, register seamless team passes, track real-time leaderboards, and experience collegiate festivals across Pune.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button 
                  size="lg"
                  icon={<Compass className="w-5 h-5" />}
                  onClick={() => navigateTo('events')}
                >
                  Explore All Events
                </Button>

                <Button 
                  variant="outline" 
                  size="lg"
                  icon={<Trophy className="w-5 h-5" />}
                  onClick={() => navigateTo('leaderboard')}
                >
                  Live Leaderboard
                </Button>
              </div>

              {/* Campus Pulse Metrics Pill */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-surface-border font-mono">
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-paper block">184</span>
                  <span className="text-[11px] text-gold-400 uppercase">Students Live Now</span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-paper block">14+</span>
                  <span className="text-[11px] text-gray-400 uppercase">Active Events</span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-paper block">₹12.5L</span>
                  <span className="text-[11px] text-gray-400 uppercase">Prize Ecosystem</span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: CINEMATIC FLAGSHIP EVENT CARD (Kshitij 2026) */}
            <div className="lg:col-span-5">
              <div className="bg-[#0C0E14] border border-gold-400/40 rounded-xl overflow-hidden shadow-2xl relative group hover:border-gold-400 transition-all">
                {/* Header Badge */}
                <div className="bg-surface-subtle px-5 py-3 border-b border-surface-border flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-gold-400 font-bold uppercase">
                    <Flame className="w-4 h-4 text-gold-400" />
                    FLAGSHIP SPOTLIGHT
                  </div>
                  <Badge variant="gold" size="sm">REGISTRATION OPEN</Badge>
                </div>

                {/* Event Image Banner with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={flagshipKshitij.bannerImage} 
                    alt={flagshipKshitij.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E14] via-[#0C0E14]/40 to-transparent"></div>
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
                      <div className="p-2 bg-surface-subtle border border-surface-border rounded">
                        <span className="text-xl font-bold text-paper block">{timeLeft.days}</span>
                        <span className="text-[9px] text-gray-500 uppercase">Days</span>
                      </div>
                      <div className="p-2 bg-surface-subtle border border-surface-border rounded">
                        <span className="text-xl font-bold text-paper block">{timeLeft.hours}</span>
                        <span className="text-[9px] text-gray-500 uppercase">Hours</span>
                      </div>
                      <div className="p-2 bg-surface-subtle border border-surface-border rounded">
                        <span className="text-xl font-bold text-paper block">{timeLeft.minutes}</span>
                        <span className="text-[9px] text-gray-500 uppercase">Mins</span>
                      </div>
                      <div className="p-2 bg-surface-subtle border border-surface-border rounded">
                        <span className="text-xl font-bold text-gold-400 block">{timeLeft.seconds}</span>
                        <span className="text-[9px] text-gray-500 uppercase">Secs</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Metadata */}
                  <div className="space-y-1.5 text-xs text-gray-300 font-sans border-t border-surface-border pt-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span>{flagshipKshitij.startDate} – {flagshipKshitij.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span className="line-clamp-1">Alandi Campus Central Auditorium & Quadrangle</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span className="text-gold-300 font-semibold">{flagshipKshitij.prizePool}</span>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-2 flex items-center gap-2">
                    <Button 
                      variant="primary" 
                      className="w-full text-xs"
                      onClick={() => openRegistration(flagshipKshitij)}
                    >
                      Register Now
                    </Button>
                    <Button 
                      variant="secondary" 
                      className="text-xs px-3"
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

        {/* 2. CONTINUOUS ANIMATED EVENT TICKER */}
        <div className="w-full mt-10 border-y border-surface-border bg-charcoal-900 py-3 overflow-hidden select-none">
          <div className="animate-ticker flex items-center gap-8 text-xs font-mono tracking-widest text-gray-400 uppercase">
            <span className="text-gold-400 font-bold flex items-center gap-2">
              <Zap className="w-3.5 h-3.5" /> KSHITIJ 2026 REGISTRATIONS LIVE
            </span>
            <span className="text-gray-600">///</span>
            <span>INNOVYUH HACKATHON: 36-HR SPRINT</span>
            <span className="text-gray-600">///</span>
            <span className="text-gold-400">GOOGLE DEVELOPERS HACKATHON GDG CHAPTER</span>
            <span className="text-gray-600">///</span>
            <span>TECHBLITZ SPEED CODING CHAMPIONSHIP</span>
            <span className="text-gray-600">///</span>
            <span>COEP MINDSPARK ROBOTICS</span>
            <span className="text-gray-600">///</span>
            <span className="text-gold-400">SICSR FINTECH SUMMIT</span>
            <span className="text-gray-600">///</span>
            <span>MIT-WPU HACKVERSE 4.0</span>
            <span className="text-gray-600">///</span>
            <span>FERGUSSON ASTRA ASTROPHYSICS CONCLAVE</span>
            <span className="text-gray-600">///</span>
            <span className="text-emerald-400">ATHARVA WARANKAR CHECKED IN AT INNOVYUH</span>
            <span className="text-gray-600">///</span>
          </div>
        </div>
      </section>

      {/* 3. CAMPUS PULSE & LIVE ACTIVITY STREAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-surface-subtle border border-surface-border rounded-xl p-6 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-surface-border">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold">
                  CAMPUS PULSE & TELEMETRY
                </span>
              </div>
              <h2 className="font-display font-bold text-xl text-paper">Real-Time Activity Feed</h2>
            </div>
            
            <div className="flex items-center gap-6 font-mono text-xs">
              <div>
                <span className="text-gray-500 block uppercase text-[10px]">Active Today</span>
                <span className="font-bold text-emerald-400">{livePulseStats.totalRegistrationsToday} Pass Claims</span>
              </div>
              <div>
                <span className="text-gray-500 block uppercase text-[10px]">Colleges Linked</span>
                <span className="font-bold text-paper">{livePulseStats.collegesConnected} Campuses</span>
              </div>
              <div>
                <span className="text-gray-500 block uppercase text-[10px]">Projected Footfall</span>
                <span className="font-bold text-gold-400">{livePulseStats.puneFootfallProjected}</span>
              </div>
            </div>
          </div>

          {/* Activity Marquee Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
            {liveActivityStream.slice(0, 3).map((act) => (
              <div key={act.id} className="p-3 bg-surface-muted rounded border border-surface-border flex items-center justify-between text-xs">
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

      {/* 4. FEATURED MIT ACSC FLAGSHIP QUAD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="gold" size="sm">HOST INSTITUTION</Badge>
              <span className="text-xs font-mono text-gray-400 uppercase">MIT ACSC ALANDI, PUNE</span>
            </div>
            <h2 className="font-serif text-3xl font-black text-paper uppercase tracking-tight">
              Flagship Events & Hackathons
            </h2>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            onClick={() => navigateTo('events')}
          >
            Browse All {events.length} Events
          </Button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mitEvents.slice(0, 4).map((event) => (
            <div 
              key={event.id}
              className="bg-surface border border-surface-border rounded-lg overflow-hidden flex flex-col justify-between hover:border-gold-400/60 transition-all group shadow-sm hover:shadow-gold-sm"
            >
              <div>
                {/* Banner Thumbnail */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={event.bannerImage} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                  <div className="absolute top-2.5 left-2.5">
                    <Badge variant="gold" size="sm">{event.category}</Badge>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(event.id);
                    }}
                    className={`absolute top-2.5 right-2.5 p-1.5 rounded bg-black/60 backdrop-blur-sm transition-colors ${
                      isBookmarked(event.id) ? 'text-gold-400' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isBookmarked(event.id) ? 'fill-gold-400' : ''}`} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2.5">
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
                    <div className="flex justify-between">
                      <span className="text-gray-500">Format</span>
                      <span className="text-paper">{event.teamSize.min === 1 && event.teamSize.max === 1 ? 'Individual' : `Teams (${event.teamSize.min}-${event.teamSize.max})`}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-4 pt-0">
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="w-full text-xs font-mono"
                  onClick={() => openRegistration(event)}
                >
                  Register • {event.entryFee}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EXPLORE BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold block mb-1">
            DISCOVERY INDEX
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-paper uppercase">
            Browse By Vertical
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => navigateTo('events')}
              className="p-3.5 rounded bg-surface-subtle hover:bg-surface-hover border border-surface-border hover:border-gold-400/40 text-left transition-all group flex flex-col justify-between h-24"
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

      {/* 6. PUNE COLLEGE ECOSYSTEM & RADAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border border-surface-border bg-charcoal-900 rounded-xl p-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-surface-border">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="gold" size="sm">ECOSYSTEM DIRECTORY</Badge>
                <span className="text-xs font-mono text-gray-400">PUNE UNIVERSITY REGION</span>
              </div>
              <h2 className="font-serif text-3xl font-black text-paper uppercase">
                Collegiate Alliance Network
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xl mt-1 leading-relaxed">
                Connect and compete across top Pune institutions. MIT ACSC anchors the technical and hackathon calendar alongside sister academies and universities.
              </p>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigateTo('colleges')}
            >
              View Full College Directory ({colleges.length})
            </Button>
          </div>

          {/* Colleges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {colleges.map((col) => (
              <div
                key={col.id}
                onClick={() => navigateTo('college-detail', col.id)}
                className={`p-5 rounded-lg border transition-all cursor-pointer group flex flex-col justify-between ${
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
                  <ChevronRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LIVE LEADERBOARD & RESULTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Innovyuh Leaderboard Teaser */}
          <div className="lg:col-span-7 bg-surface border border-surface-border rounded-xl p-6">
            <div className="flex items-center justify-between pb-4 border-b border-surface-border">
              <div>
                <span className="text-[11px] font-mono text-gold-400 uppercase tracking-wider block">
                  LIVE STANDINGS • ROUND 2 EVALUATION
                </span>
                <h3 className="font-serif text-xl font-bold text-paper uppercase">
                  Innovyuh Hackathon 2026
                </h3>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigateTo('leaderboard')}
              >
                Full Leaderboard →
              </Button>
            </div>

            {/* Top 4 Rankings */}
            <div className="divide-y divide-surface-border mt-3 text-xs">
              {leaderboardsData['innovyuh-2026'].rankings.slice(0, 4).map((entry) => (
                <div key={entry.rank} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded flex items-center justify-center font-mono font-bold text-xs ${
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

          {/* Inter-Collegiate Trophy Standings */}
          <div className="lg:col-span-5 bg-surface-subtle border border-surface-border rounded-xl p-6 flex flex-col justify-between">
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
                <Trophy className="w-5 h-5 text-gold-400" />
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
                className="w-full text-xs font-mono"
                onClick={() => navigateTo('leaderboard')}
              >
                View Complete Collegiate Roster
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LATEST EDITORIAL ANNOUNCEMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-surface-border">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold block mb-0.5">
              OFFICIAL DESK
            </span>
            <h2 className="font-serif text-2xl font-black text-paper uppercase">
              Announcements & Dispatches
            </h2>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigateTo('announcements')}
          >
            News Archive →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {announcements.slice(0, 3).map((ann) => (
            <div 
              key={ann.id}
              onClick={() => navigateTo('announcements')}
              className="p-5 bg-surface rounded-lg border border-surface-border hover:border-gold-400/40 cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-2">
                  <Badge variant={ann.category === 'Urgent' ? 'red' : 'gold'} size="sm">
                    {ann.category}
                  </Badge>
                  <span>{ann.publishedAt}</span>
                </div>
                <h4 className="font-display font-bold text-sm text-paper group-hover:text-gold-300 transition-colors leading-snug">
                  {ann.title}
                </h4>
                <p className="text-xs text-gray-400 mt-2 line-clamp-3 leading-relaxed">
                  {ann.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-surface-border text-[11px] font-mono text-gold-400">
                {ann.collegeName.slice(0, 24)}...
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. HALL OF FAME / EVENT REPLAY HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border border-surface-border bg-charcoal-900 rounded-xl p-8">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold block mb-1">
              LEGACY & FOOTAGE
            </span>
            <h2 className="font-serif text-3xl font-black text-paper uppercase">
              Hall of Fame & Festival Highlights
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
              Explore past laurels, champion teams, and memorable stage performances across MIT ACSC festivals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="h-44 rounded overflow-hidden border border-surface-border relative">
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
              <div className="h-44 rounded overflow-hidden border border-surface-border relative">
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
              <div className="h-44 rounded overflow-hidden border border-surface-border relative">
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80" 
                  alt="TechBlitz Speed Coding"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                  <span className="text-xs font-mono text-gold-300">TechBlitz ’25 Speed Coding</span>
                </div>
              </div>
              <h4 className="font-display font-semibold text-sm text-paper">Atharva Warankar (Laureate)</h4>
              <p className="text-xs text-gray-400">Solved 6 algorithmic testbeds in 12m 45s without syntax faults.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden border-2 border-gold-400/40 bg-gradient-to-b from-[#151720] to-[#0A0B0E] p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-paper uppercase tracking-tight">
              Ready to Claim Your Arena?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
              Register now for Kshitij 2026, Innovyuh Hackathon, and TechBlitz. Digital VIP passes with instant verification issued immediately upon confirmation.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button 
              size="lg"
              icon={<Compass className="w-5 h-5" />}
              onClick={() => navigateTo('events')}
            >
              Browse Event Catalog
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              icon={<Users className="w-5 h-5" />}
              onClick={() => openRegistration(flagshipKshitij)}
            >
              Register for Kshitij 2026
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

