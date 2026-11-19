import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Ticket, 
  Calendar, 
  Trophy, 
  Award, 
  Bookmark, 
  Flame, 
  QrCode, 
  CheckCircle2, 
  ExternalLink, 
  Download, 
  Clock, 
  Sparkles, 
  User, 
  Building2,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { EmptyState } from '../components/common/EmptyState';
import { mockStudentProfile, mockCertificates } from '../data/student';
import { CertificateItem, Registration } from '../types';

export const StudentDashboard: React.FC = () => {
  const { 
    registrations, 
    bookmarks, 
    events, 
    openPassModal, 
    navigateTo, 
    openRegistration,
    toggleBookmark 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'passes' | 'schedule' | 'certificates' | 'saved' | 'recommendations'>('passes');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const bookmarkedEvents = events.filter(e => bookmarks.includes(e.id));
  
  // Recommended based on student profile (Computer Science, Hackathons, AI)
  const recommendedEvents = events.filter(e => 
    !registrations.some(r => r.eventId === e.id) &&
    (e.category === 'Hackathons' || e.category === 'Coding' || e.category === 'IT Fests')
  ).slice(0, 3);

  // Student's personal aggregated schedule
  const mySchedule = registrations.flatMap(reg => {
    const matchedEvent = events.find(e => e.id === reg.eventId);
    if (!matchedEvent) return [];
    return matchedEvent.schedule.map(s => ({
      ...s,
      eventTitle: reg.eventTitle,
      passId: reg.passId,
      status: reg.status
    }));
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* 1. Command Center Header */}
      <div className="bg-[#0C0E14] border border-gold-400/30 rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          {/* Student Profile Info */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-black font-serif font-black text-2xl flex items-center justify-center shrink-0 shadow-gold-sm">
              {mockStudentProfile.avatarInitials}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl sm:text-3xl font-black text-paper uppercase">
                  {mockStudentProfile.name}
                </h1>
                <Badge variant="gold" size="sm">VERIFIED DELEGATE</Badge>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 font-sans">
                {mockStudentProfile.course} • {mockStudentProfile.year}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400 pt-1">
                <span>PRN: {mockStudentProfile.prnNumber}</span>
                <span>•</span>
                <span className="text-gold-300">{mockStudentProfile.college}</span>
              </div>
            </div>
          </div>

          {/* Activity Badges & Streak */}
          <div className="flex items-center gap-3 sm:gap-4 font-mono">
            {/* Streak Counter */}
            <div className="p-3 bg-surface border border-gold-400/40 rounded-lg text-center min-w-[100px]">
              <div className="flex items-center justify-center gap-1 text-gold-400">
                <Flame className="w-4 h-4 fill-gold-400" />
                <span className="text-lg font-bold">{mockStudentProfile.streakCount}</span>
              </div>
              <span className="text-[9px] text-gray-400 uppercase block tracking-wider mt-0.5">
                Event Streak
              </span>
            </div>

            {/* Passes Count */}
            <div className="p-3 bg-surface border border-surface-border rounded-lg text-center min-w-[100px]">
              <span className="text-lg font-bold text-paper block">{registrations.length}</span>
              <span className="text-[9px] text-gray-400 uppercase block tracking-wider mt-0.5">
                Active Passes
              </span>
            </div>

            {/* Trophies */}
            <div className="p-3 bg-surface border border-surface-border rounded-lg text-center min-w-[100px]">
              <div className="flex items-center justify-center gap-1 text-emerald-400">
                <Trophy className="w-4 h-4" />
                <span className="text-lg font-bold">{mockStudentProfile.trophiesWon}</span>
              </div>
              <span className="text-[9px] text-gray-400 uppercase block tracking-wider mt-0.5">
                Laurels
              </span>
            </div>
          </div>
        </div>

        {/* Student Progression Timeline: Registered -> Checked In -> Participated -> Shortlisted -> Winner */}
        <div className="mt-8 pt-6 border-t border-surface-border">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-3">
            VERIFIED PARTICIPATION PIPELINE • CURRENT STATUS
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
            <div className="p-2 bg-emerald-950/40 border border-emerald-500/40 rounded text-emerald-300">
              <span className="text-base block mb-0.5">✓</span>
              <span className="font-bold block">1. Registered</span>
              <span className="text-[9px] text-gray-400">3 Passes Claimed</span>
            </div>

            <div className="p-2 bg-emerald-950/40 border border-emerald-500/40 rounded text-emerald-300">
              <span className="text-base block mb-0.5">✓</span>
              <span className="font-bold block">2. Checked In</span>
              <span className="text-[9px] text-gray-400">Innovyuh Gate #1</span>
            </div>

            <div className="p-2 bg-gold-400/10 border border-gold-400/40 rounded text-gold-300">
              <span className="text-base block mb-0.5">⚡</span>
              <span className="font-bold block">3. In Hacking</span>
              <span className="text-[9px] text-gray-400">Active Prototype</span>
            </div>

            <div className="p-2 bg-gold-400/10 border border-gold-400/40 rounded text-gold-300">
              <span className="text-base block mb-0.5">★</span>
              <span className="font-bold block">4. Shortlisted</span>
              <span className="text-[9px] text-gray-400">Top 12 Finalist</span>
            </div>

            <div className="p-2 bg-surface border border-surface-border rounded text-gray-500">
              <span className="text-base block mb-0.5">🏆</span>
              <span className="font-bold block">5. Laurels</span>
              <span className="text-[9px]">Awaiting Final Stage</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Navigation Tabs */}
      <div className="border-b border-surface-border flex items-center gap-2 overflow-x-auto text-xs font-mono uppercase tracking-wider scrollbar-none">
        {[
          { id: 'passes', label: `My Passes (${registrations.length})`, icon: <Ticket className="w-3.5 h-3.5" /> },
          { id: 'schedule', label: `Personal Schedule (${mySchedule.length})`, icon: <Calendar className="w-3.5 h-3.5" /> },
          { id: 'certificates', label: `Certificates (${mockCertificates.length})`, icon: <Award className="w-3.5 h-3.5" /> },
          { id: 'saved', label: `Saved Events (${bookmarkedEvents.length})`, icon: <Bookmark className="w-3.5 h-3.5" /> },
          { id: 'recommendations', label: 'Recommended For You', icon: <Sparkles className="w-3.5 h-3.5" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-gold-400 text-gold-400 bg-surface-muted/50'
                : 'border-transparent text-gray-400 hover:text-paper hover:bg-surface-hover'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* 3. Tab Contents */}

      {/* TAB 1: PASSES & REGISTRATIONS */}
      {activeTab === 'passes' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-paper">
              Active Digital Passes & Badges
            </h3>
            <span className="text-xs font-mono text-gray-400">
              Show QR at registration counters for entry
            </span>
          </div>

          {registrations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {registrations.map((reg) => (
                <div
                  key={reg.id}
                  className="bg-surface border border-gold-400/40 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between hover:border-gold-400 transition-all group"
                >
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="gold" size="sm">{reg.category}</Badge>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        reg.status === 'Checked In' 
                          ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/30' 
                          : 'bg-gold-400/10 text-gold-400 border-gold-400/30'
                      }`}>
                        {reg.status === 'Checked In' ? '● Checked In' : 'Confirmed Entry'}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase block">Registration ID</span>
                      <span className="font-mono text-sm font-bold text-gold-400">{reg.passId}</span>
                      <h4 className="font-serif text-lg font-bold text-paper mt-1 group-hover:text-gold-300 transition-colors line-clamp-1">
                        {reg.eventTitle}
                      </h4>
                      <p className="text-xs text-gray-400 font-mono mt-0.5">{reg.collegeName}</p>
                    </div>

                    <div className="space-y-1.5 text-xs text-gray-300 font-mono pt-3 border-t border-surface-border">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Dates</span>
                        <span>{reg.eventDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Format</span>
                        <span>{reg.participationType === 'Team' ? `Team: ${reg.teamName}` : 'Individual'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Venue</span>
                        <span className="text-right line-clamp-1 max-w-[180px]">{reg.eventVenue.split(',')[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pass Footer Actions */}
                  <div className="p-4 bg-surface-subtle border-t border-surface-border flex items-center justify-between gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      icon={<QrCode className="w-3.5 h-3.5" />}
                      className="w-full text-xs font-mono"
                      onClick={() => openPassModal(reg)}
                    >
                      View VIP Pass
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="text-xs px-3 font-mono"
                      onClick={() => navigateTo('event-detail', reg.eventId)}
                    >
                      Event
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={<Ticket className="w-8 h-8" />}
              title="No active event registrations"
              description="Explore upcoming college hackathons and competitions and secure your verified pass."
              actionLabel="Discover Events"
              onAction={() => navigateTo('events')}
            />
          )}
        </div>
      )}

      {/* TAB 2: PERSONAL SCHEDULE */}
      {activeTab === 'schedule' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-paper">
              Aggregated Personal Schedule
            </h3>
            <span className="text-xs font-mono text-gray-400">
              Synchronized from your active registrations
            </span>
          </div>

          {mySchedule.length > 0 ? (
            <div className="bg-surface border border-surface-border rounded-xl divide-y divide-surface-border">
              {mySchedule.map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-gold-400 font-bold">{item.time}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400">{item.day}</span>
                      <Badge variant="gold" size="sm">{item.category}</Badge>
                    </div>
                    <h4 className="font-display font-bold text-base text-paper">{item.title}</h4>
                    <p className="text-xs text-gray-400 font-sans">
                      {item.eventTitle} • Pass #{item.passId}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs text-gray-400 shrink-0">
                    <span className="bg-surface-subtle px-2.5 py-1 rounded border border-surface-border">
                      {item.venue}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={<Calendar className="w-8 h-8" />}
              title="No scheduled items yet"
              description="When you register for events, your timeline milestones will appear here."
            />
          )}
        </div>
      )}

      {/* TAB 3: CERTIFICATES & CREDENTIALS */}
      {activeTab === 'certificates' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-paper">
              Verified Digital Credentials
            </h3>
            <span className="text-xs font-mono text-gray-400">
              Authenticated via SPPU & University Verification Hashes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockCertificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-surface border border-surface-border rounded-xl p-6 space-y-4 hover:border-gold-400/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant={cert.type === 'Winner' ? 'gold' : 'charcoal'} size="sm">
                      {cert.type}
                    </Badge>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-paper">{cert.title}</h4>
                  <p className="text-xs text-gold-300 font-mono mt-0.5">{cert.eventName}</p>
                  <p className="text-xs text-gray-400 mt-2">{cert.collegeName}</p>
                  
                  {cert.grade && (
                    <div className="mt-3 p-2 bg-surface-subtle rounded border border-surface-border text-xs font-mono text-gray-300">
                      Score: {cert.grade}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500">{cert.date}</span>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-gold-400 hover:underline flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" /> Preview
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: SAVED BOOKMARKS */}
      {activeTab === 'saved' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-paper">
              Bookmarked Events
            </h3>
            <span className="text-xs font-mono text-gray-400">
              Events you are following
            </span>
          </div>

          {bookmarkedEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bookmarkedEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-surface border border-surface-border rounded-xl p-5 space-y-3 flex flex-col justify-between hover:border-gold-400/40 transition-all group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <Badge variant="gold" size="sm">{event.category}</Badge>
                      <button
                        onClick={() => toggleBookmark(event.id)}
                        className="text-gold-400 p-1"
                      >
                        <Bookmark className="w-4 h-4 fill-gold-400" />
                      </button>
                    </div>
                    <h4 
                      onClick={() => navigateTo('event-detail', event.id)}
                      className="font-serif text-lg font-bold text-paper group-hover:text-gold-300 transition-colors cursor-pointer"
                    >
                      {event.title}
                    </h4>
                    <p className="text-xs text-gray-400 line-clamp-2">{event.tagLine}</p>
                    <div className="pt-2 text-xs font-mono text-gray-400 flex justify-between border-t border-surface-border">
                      <span>{event.startDate.split(',')[0]}</span>
                      <span className="text-gold-400 font-bold">{event.prizePool}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full text-xs font-mono"
                      onClick={() => openRegistration(event)}
                    >
                      Register
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="text-xs px-3 font-mono"
                      onClick={() => navigateTo('event-detail', event.id)}
                    >
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={<Bookmark className="w-8 h-8" />}
              title="No saved events"
              description="Click the bookmark icon on any event to keep track of deadlines and announcements."
              actionLabel="Browse Events"
              onAction={() => navigateTo('events')}
            />
          )}
        </div>
      )}

      {/* TAB 5: RECOMMENDATIONS */}
      {activeTab === 'recommendations' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold text-lg text-paper">
                Curated Recommendations
              </h3>
              <p className="text-xs text-gray-400 font-sans mt-0.5">
                Matched with your profile: B.Sc. Computer Science • Autonomous AI • Algorithms
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedEvents.map((ev) => (
              <div
                key={ev.id}
                className="bg-surface border border-surface-border rounded-xl p-5 space-y-3 flex flex-col justify-between hover:border-gold-400/40 transition-all group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <Badge variant="gold" size="sm">{ev.category}</Badge>
                    <span className="text-emerald-400">98% Match</span>
                  </div>
                  <h4 
                    onClick={() => navigateTo('event-detail', ev.id)}
                    className="font-serif text-lg font-bold text-paper group-hover:text-gold-300 transition-colors cursor-pointer"
                  >
                    {ev.title}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-2">{ev.tagLine}</p>
                </div>

                <div className="pt-3 border-t border-surface-border flex items-center justify-between">
                  <span className="text-xs font-mono text-gold-400">{ev.prizePool}</span>
                  <Button
                    variant="primary"
                    size="sm"
                    className="text-xs font-mono"
                    onClick={() => openRegistration(ev)}
                  >
                    Quick Register
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certificate Viewer Modal if selected */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div 
            className="w-full max-w-lg bg-surface border-2 border-gold-400/50 rounded-xl p-6 sm:p-8 space-y-6 shadow-2xl relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border border-gold-400/30 p-6 rounded-lg bg-surface-subtle space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block">
                {selectedCert.collegeName}
              </span>
              <h3 className="font-serif text-2xl font-black text-paper uppercase">
                Certificate of Merit
              </h3>
              <p className="text-xs text-gray-400 font-sans">This certifies that</p>
              <h4 className="font-sans text-xl font-bold text-gold-300 tracking-wide">
                {selectedCert.recipientName}
              </h4>
              <p className="text-xs text-gray-300 font-sans">
                has successfully achieved <strong>{selectedCert.title}</strong> in the national championship <strong>{selectedCert.eventName}</strong>.
              </p>
              <div className="pt-4 border-t border-surface-border flex justify-between text-[11px] font-mono text-gray-500">
                <span>VERIFICATION: {selectedCert.verificationId}</span>
                <span>DATE: {selectedCert.date}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Button variant="secondary" size="sm" onClick={() => setSelectedCert(null)}>
                Close Preview
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                icon={<Download className="w-3.5 h-3.5" />}
                onClick={() => alert(`Certificate ${selectedCert.verificationId}.pdf downloaded.`)}
              >
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

