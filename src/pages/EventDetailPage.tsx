import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Mail, 
  ChevronDown, 
  ChevronUp, 
  Share2, 
  Bookmark, 
  Sparkles, 
  ArrowLeft,
  Building2,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const EventDetailPage: React.FC = () => {
  const { 
    selectedEventId, 
    getEventById, 
    events, 
    navigateTo, 
    openRegistration, 
    toggleBookmark, 
    isBookmarked 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'overview' | 'tracks' | 'schedule' | 'prizes' | 'rules' | 'people' | 'faqs'>('overview');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const event = getEventById(selectedEventId || 'kshitij-2026') || events[0];
  const relatedEvents = events.filter(e => e.id !== event.id && (e.category === event.category || e.collegeId === event.collegeId)).slice(0, 3);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    alert('Event URL copied to clipboard!');
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Top Navigation Back Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 flex items-center justify-between text-xs font-mono text-gray-400">
        <button
          onClick={() => navigateTo('events')}
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Event Directory</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
          <button
            onClick={() => toggleBookmark(event.id)}
            className={`flex items-center gap-1.5 transition-colors ${
              isBookmarked(event.id) ? 'text-gold-400' : 'hover:text-white'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked(event.id) ? 'fill-gold-400' : ''}`} />
            <span>{isBookmarked(event.id) ? 'Saved' : 'Save Event'}</span>
          </button>
        </div>
      </div>

      {/* Cinematic Hero Header */}
      <div className="relative border-b border-surface-border bg-charcoal-900 pb-12 pt-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img 
            src={event.bannerImage} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="gold">{event.category}</Badge>
            <span className="text-gray-600">•</span>
            <span className="text-xs font-mono text-gold-300 uppercase tracking-widest">
              {event.collegeName}
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-paper uppercase tracking-tight">
              {event.title}
            </h1>
            <p className="text-base sm:text-xl text-gray-300 font-sans leading-relaxed">
              {event.tagLine}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl pt-4 border-t border-surface-border font-mono text-xs">
            <div className="p-3 bg-surface rounded border border-surface-border">
              <span className="text-gray-500 uppercase text-[10px] block mb-1">EVENT DATES</span>
              <span className="font-bold text-paper block text-sm">{event.startDate.split(',')[0]}</span>
              <span className="text-[11px] text-gray-400">{event.mode} Mode</span>
            </div>

            <div className="p-3 bg-surface rounded border border-surface-border">
              <span className="text-gray-500 uppercase text-[10px] block mb-1">PRIZE POOL</span>
              <span className="font-bold text-gold-400 block text-sm">{event.prizePool}</span>
              <span className="text-[11px] text-gray-400">Cash + Trophies</span>
            </div>

            <div className="p-3 bg-surface rounded border border-surface-border">
              <span className="text-gray-500 uppercase text-[10px] block mb-1">TEAM FORMAT</span>
              <span className="font-bold text-paper block text-sm">
                {event.teamSize.min === 1 && event.teamSize.max === 1 ? 'Solo Contender' : `${event.teamSize.min} to ${event.teamSize.max} Members`}
              </span>
              <span className="text-[11px] text-gray-400">Inter-College Teams OK</span>
            </div>

            <div className="p-3 bg-surface rounded border border-surface-border">
              <span className="text-gray-500 uppercase text-[10px] block mb-1">REGISTRATION</span>
              <span className="font-bold text-emerald-400 block text-sm">{event.status}</span>
              <span className="text-[11px] text-gray-400">{event.daysRemaining || 14} Days Left</span>
            </div>
          </div>

          {/* Registration Trigger CTA Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              icon={<CheckCircle2 className="w-5 h-5" />}
              onClick={() => openRegistration(event)}
            >
              Register Now • {event.entryFee}
            </Button>

            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <Users className="w-4 h-4 text-gold-400" />
              <span>{event.registrationCount} students already registered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs Bar */}
      <div className="sticky top-16 z-30 bg-[#090A0E]/95 backdrop-blur-md border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 text-xs font-mono uppercase tracking-wider scrollbar-none">
          {[
            { id: 'overview', label: 'About & Venue' },
            ...(event.tracks ? [{ id: 'tracks', label: 'Tracks & Themes' }] : []),
            { id: 'schedule', label: 'Schedule' },
            { id: 'prizes', label: 'Prizes & Laurels' },
            { id: 'rules', label: 'Rules & Guidelines' },
            { id: 'people', label: 'Mentors & Judges' },
            { id: 'faqs', label: 'FAQs & Contact' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gold-400 text-black font-bold'
                  : 'text-gray-400 hover:text-paper hover:bg-surface-hover'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Left 8 Columns */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. About & Vision */}
            {(activeTab === 'overview' || activeTab === 'tracks') && (
              <section className="space-y-4">
                <div className="border-l-2 border-gold-400 pl-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">
                    OVERVIEW
                  </span>
                  <h2 className="font-serif text-2xl font-black text-paper uppercase">
                    About the Event
                  </h2>
                </div>

                <div className="space-y-3 text-sm text-gray-300 leading-relaxed font-sans">
                  {event.fullAbout.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Sub Competitions list if available */}
                {event.subCompetitions && (
                  <div className="mt-6 p-5 bg-surface rounded-lg border border-surface-border space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-gold-400 font-semibold block">
                      Sub-Competitions & Competitive Arenas
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {event.subCompetitions.map((sub, i) => (
                        <div key={i} className="flex items-center gap-2 text-paper">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* 2. Hackathon Tracks */}
            {event.tracks && (activeTab === 'overview' || activeTab === 'tracks') && (
              <section className="space-y-4">
                <div className="border-l-2 border-gold-400 pl-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">
                    CHALLENGE TRACKS
                  </span>
                  <h2 className="font-serif text-2xl font-black text-paper uppercase">
                    Problem Statements & Domains
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {event.tracks.map((track) => (
                    <div 
                      key={track.id}
                      className="p-5 bg-surface border border-surface-border rounded-lg space-y-2.5 hover:border-gold-400/40 transition-all"
                    >
                      <h4 className="font-display font-bold text-base text-gold-300">
                        {track.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {track.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {track.technologies.map((t, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-0.5 rounded bg-surface-muted text-gray-400 font-mono text-[10px] border border-surface-border"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 3. Schedule Timeline */}
            {(activeTab === 'overview' || activeTab === 'schedule') && (
              <section className="space-y-4">
                <div className="border-l-2 border-gold-400 pl-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">
                    CHRONOLOGY
                  </span>
                  <h2 className="font-serif text-2xl font-black text-paper uppercase">
                    Time-Based Schedule
                  </h2>
                </div>

                <div className="relative border-l border-surface-border ml-3 pl-6 space-y-6">
                  {event.schedule.map((item) => (
                    <div key={item.id} className="relative group">
                      {/* Timeline dot */}
                      <div className={`absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border ${
                        item.isHighlight 
                          ? 'bg-gold-400 border-gold-300 shadow-[0_0_8px_#D4AF37]' 
                          : 'bg-charcoal-900 border-neutral-600'
                      }`} />

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-mono">
                          <span className="text-gold-400 font-bold">{item.time}</span>
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-400">{item.day}</span>
                          <Badge variant={item.isHighlight ? 'gold' : 'charcoal'} size="sm">
                            {item.category}
                          </Badge>
                        </div>

                        <h4 className="font-display font-bold text-sm sm:text-base text-paper">
                          {item.title}
                        </h4>

                        <div className="flex items-center gap-4 text-xs text-gray-400 font-mono">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-gold-400" />
                            {item.venue}
                          </span>
                          {item.speaker && (
                            <span className="text-gold-300">Keynote: {item.speaker}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 4. Prizes */}
            {(activeTab === 'overview' || activeTab === 'prizes') && (
              <section className="space-y-4">
                <div className="border-l-2 border-gold-400 pl-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">
                    RECOGNITION
                  </span>
                  <h2 className="font-serif text-2xl font-black text-paper uppercase">
                    Prizes & Laurels
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.prizes.map((pz, idx) => (
                    <div 
                      key={idx}
                      className={`p-5 rounded-lg border flex flex-col justify-between ${
                        idx === 0 
                          ? 'bg-gold-400/10 border-gold-400/50' 
                          : 'bg-surface border-surface-border'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant={idx === 0 ? 'gold' : 'charcoal'} size="sm">
                            {pz.rank}
                          </Badge>
                          <Trophy className="w-4 h-4 text-gold-400" />
                        </div>
                        <h4 className="font-display font-bold text-base text-paper mb-1">
                          {pz.title}
                        </h4>
                        <span className="font-mono text-2xl font-black text-gold-400 block">
                          {pz.reward}
                        </span>
                      </div>
                      {pz.perks && (
                        <p className="text-xs text-gray-400 mt-3 pt-2 border-t border-surface-border">
                          Perks: {pz.perks}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. Rules */}
            {(activeTab === 'overview' || activeTab === 'rules') && (
              <section className="space-y-4">
                <div className="border-l-2 border-gold-400 pl-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">
                    INTEGRITY & PROTOCOLS
                  </span>
                  <h2 className="font-serif text-2xl font-black text-paper uppercase">
                    Rules & Guidelines
                  </h2>
                </div>

                <div className="p-5 bg-surface border border-surface-border rounded-lg space-y-3 text-xs sm:text-sm text-gray-300">
                  {event.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-surface-muted text-gold-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{rule}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 6. Mentors & Judges */}
            {(activeTab === 'overview' || activeTab === 'people') && (
              <section className="space-y-6">
                <div className="border-l-2 border-gold-400 pl-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">
                    EVALUATION & GUIDANCE
                  </span>
                  <h2 className="font-serif text-2xl font-black text-paper uppercase">
                    Mentors & Judges
                  </h2>
                </div>

                {event.mentors && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                      Industry Mentors ({event.mentors.length})
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {event.mentors.map((m, i) => (
                        <div key={i} className="p-3.5 bg-surface border border-surface-border rounded-lg flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gold-400/20 text-gold-300 font-mono font-bold flex items-center justify-center text-xs shrink-0 border border-gold-400/30">
                            {m.avatarText}
                          </div>
                          <div>
                            <span className="font-display font-semibold text-paper text-sm block">{m.name}</span>
                            <span className="text-xs text-gray-400 block">{m.role}</span>
                            <span className="text-[11px] font-mono text-gold-300">{m.org}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {event.judges && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                      Judging Panel ({event.judges.length})
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {event.judges.map((j, i) => (
                        <div key={i} className="p-3.5 bg-surface border border-surface-border rounded-lg flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-surface-muted text-paper font-mono font-bold flex items-center justify-center text-xs shrink-0 border border-surface-border">
                            {j.avatarText}
                          </div>
                          <div>
                            <span className="font-display font-semibold text-paper text-sm block">{j.name}</span>
                            <span className="text-xs text-gray-400 block">{j.role}</span>
                            <span className="text-[11px] font-mono text-gray-400">{j.org}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* 7. FAQs */}
            {(activeTab === 'overview' || activeTab === 'faqs') && (
              <section className="space-y-4">
                <div className="border-l-2 border-gold-400 pl-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">
                    CLARIFICATIONS
                  </span>
                  <h2 className="font-serif text-2xl font-black text-paper uppercase">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-2">
                  {event.faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className="border border-surface-border bg-surface rounded-lg overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-4 flex items-center justify-between text-xs sm:text-sm font-semibold text-paper hover:text-gold-300 transition-colors"
                      >
                        <span>{faq.q}</span>
                        {openFaqIndex === idx ? (
                          <ChevronUp className="w-4 h-4 text-gold-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                        )}
                      </button>
                      {openFaqIndex === idx && (
                        <div className="px-4 pb-4 text-xs text-gray-400 leading-relaxed border-t border-surface-border/50 pt-2 font-sans">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky Sidebar (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Registration Widget */}
            <div className="bg-surface border border-gold-400/40 rounded-xl p-6 space-y-4 sticky top-28 shadow-xl">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block mb-1">
                  OFFICIAL ACCESS
                </span>
                <span className="font-mono text-3xl font-black text-paper block">
                  {event.entryFee}
                </span>
                <span className="text-xs text-emerald-400 font-mono">
                  ● {event.status} ({event.daysRemaining || 14} days left)
                </span>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full font-mono uppercase tracking-wider text-xs"
                onClick={() => openRegistration(event)}
              >
                Proceed to Registration
              </Button>

              <div className="space-y-2 text-xs font-mono text-gray-400 pt-3 border-t border-surface-border">
                <div className="flex justify-between">
                  <span>Registration Closes:</span>
                  <span className="text-paper">{event.registrationDeadline}</span>
                </div>
                <div className="flex justify-between">
                  <span>Seats Available:</span>
                  <span className="text-gold-400 font-bold">{event.maxSeats - event.registrationCount} slots left</span>
                </div>
                <div className="flex justify-between">
                  <span>Pass Type:</span>
                  <span className="text-paper">Encrypted QR Pass</span>
                </div>
              </div>

              {/* Campus Venue Box */}
              <div className="p-3 bg-surface-subtle border border-surface-border rounded text-xs space-y-1">
                <span className="font-semibold text-paper flex items-center gap-1.5 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" /> Venue & Check-in Desk
                </span>
                <p className="text-gray-400 leading-relaxed">{event.venue}</p>
              </div>

              {/* Contact Desk */}
              <div className="pt-2 border-t border-surface-border">
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block mb-2">
                  CONVENER HELPDESK
                </span>
                {event.contacts.map((c, i) => (
                  <div key={i} className="text-xs space-y-0.5 text-gray-300 font-sans mb-2 last:mb-0">
                    <span className="font-medium block">{c.name} ({c.role})</span>
                    <span className="text-gray-400 font-mono text-[11px] block">{c.phone} • {c.email}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clean Sponsors Box */}
            {event.sponsors && (
              <div className="bg-surface border border-surface-border rounded-xl p-5 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                  Official Sponsors & Partners
                </span>
                <div className="space-y-2">
                  {event.sponsors.map((sp, i) => (
                    <div key={i} className="p-2.5 bg-surface-subtle rounded border border-surface-border flex items-center justify-between text-xs">
                      <div>
                        <span className="font-semibold text-paper font-sans block">{sp.name}</span>
                        <span className="text-[10px] text-gray-500 font-mono">{sp.domain}</span>
                      </div>
                      <Badge variant="gold" size="sm">{sp.tier}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Events Section */}
        {relatedEvents.length > 0 && (
          <div className="mt-16 pt-10 border-t border-surface-border space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold block mb-1">
                DISCOVER MORE
              </span>
              <h3 className="font-serif text-2xl font-black text-paper uppercase">
                Related Pune College Events
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedEvents.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => navigateTo('event-detail', rel.id)}
                  className="p-5 bg-surface rounded-lg border border-surface-border hover:border-gold-400/40 cursor-pointer transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                      <Badge variant="gold" size="sm">{rel.category}</Badge>
                      <span>{rel.startDate.split(',')[0]}</span>
                    </div>
                    <h4 className="font-display font-bold text-base text-paper group-hover:text-gold-300 transition-colors line-clamp-1">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      {rel.tagLine}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-surface-border flex justify-between items-center text-xs font-mono">
                    <span className="text-gold-400 font-semibold">{rel.prizePool}</span>
                    <span className="text-gray-400 font-sans group-hover:text-white">View Details →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

