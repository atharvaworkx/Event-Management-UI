import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Users, 
  Ticket, 
  QrCode, 
  Trophy, 
  CheckCircle2, 
  BarChart3, 
  Plus, 
  Search, 
  Clock, 
  Building2, 
  Calendar,
  Sparkles,
  Award
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const OrganizerDashboard: React.FC = () => {
  const { 
    events, 
    registrations, 
    checkInLogs, 
    setScannerModalOpen,
    openPassModal,
    navigateTo 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'overview' | 'registrations' | 'attendance' | 'winners' | 'analytics'>('overview');
  const [searchRegQuery, setSearchRegQuery] = useState('');
  const [winnerTeamInput, setWinnerTeamInput] = useState('');
  const [winnerEventSelect, setWinnerEventSelect] = useState('innovyuh-2026');
  const [winnerDeclaredToast, setWinnerDeclaredToast] = useState(false);

  // Computed organizer stats
  const totalRegistrations = registrations.length + 3410; // aggregate with mock bulk entries
  const activeEventsCount = events.filter(e => e.status === 'Registration Open' || e.status === 'Live Now').length;
  const verifiedAttendanceToday = checkInLogs.filter(l => l.status === 'Verified').length + 810;

  const filteredRegistrations = registrations.filter(r =>
    !searchRegQuery ||
    r.participant.name.toLowerCase().includes(searchRegQuery.toLowerCase()) ||
    r.passId.toLowerCase().includes(searchRegQuery.toLowerCase()) ||
    r.eventTitle.toLowerCase().includes(searchRegQuery.toLowerCase()) ||
    r.participant.college.toLowerCase().includes(searchRegQuery.toLowerCase())
  );

  const handleDeclareWinner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!winnerTeamInput.trim()) return;
    setWinnerDeclaredToast(true);
    setTimeout(() => setWinnerDeclaredToast(false), 4000);
    setWinnerTeamInput('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-surface-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="gold" size="sm">ORGANIZER CONTROL SUITE</Badge>
            <span className="text-gray-600">•</span>
            <span className="text-xs font-mono text-emerald-400 uppercase">
              ACTIVE SESSION • ALANDI SECRETARIAT
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-paper uppercase tracking-tight">
            Organizer Command Center
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-2 font-sans">
            Oversee delegate admissions, execute contactless QR check-ins, moderate competition leaderboards, and dispatch certificates.
          </p>
        </div>

        {/* Quick Scan Action */}
        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            icon={<QrCode className="w-4 h-4" />}
            onClick={() => setScannerModalOpen(true)}
          >
            Launch QR Gate Scanner
          </Button>
        </div>
      </div>

      {/* Top 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-surface border border-surface-border rounded-xl space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400">
            <span>TOTAL CLAIMS</span>
            <Ticket className="w-4 h-4 text-gold-400" />
          </div>
          <span className="font-mono text-3xl font-black text-paper block">
            {totalRegistrations.toLocaleString()}
          </span>
          <span className="text-[11px] font-mono text-emerald-400 block">
            +342 registered today
          </span>
        </div>

        <div className="p-5 bg-surface border border-surface-border rounded-xl space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400">
            <span>ACTIVE EVENTS</span>
            <Calendar className="w-4 h-4 text-gold-400" />
          </div>
          <span className="font-mono text-3xl font-black text-paper block">
            {activeEventsCount}
          </span>
          <span className="text-[11px] font-mono text-gray-400 block">
            Kshitij, Innovyuh, TechBlitz
          </span>
        </div>

        <div className="p-5 bg-surface border border-surface-border rounded-xl space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400">
            <span>SCANNED ATTENDANCE</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="font-mono text-3xl font-black text-paper block">
            {verifiedAttendanceToday.toLocaleString()}
          </span>
          <span className="text-[11px] font-mono text-emerald-400 block">
            87.4% Check-in Conversion
          </span>
        </div>

        <div className="p-5 bg-surface border border-surface-border rounded-xl space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400">
            <span>COLLEGES IN VENUE</span>
            <Building2 className="w-4 h-4 text-gold-400" />
          </div>
          <span className="font-mono text-3xl font-black text-paper block">
            18 Campuses
          </span>
          <span className="text-[11px] font-mono text-gray-400 block">
            Pune & Western Maharashtra
          </span>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="border-b border-surface-border flex items-center gap-2 overflow-x-auto text-xs font-mono uppercase tracking-wider scrollbar-none">
        {[
          { id: 'overview', label: 'Summary & Gate Log' },
          { id: 'registrations', label: `Participant Roster (${registrations.length})` },
          { id: 'winners', label: 'Declare Winners & Podium' },
          { id: 'analytics', label: 'Ecosystem Analytics' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-3 border-b-2 font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-gold-400 text-gold-400 bg-surface-muted/50'
                : 'border-transparent text-gray-400 hover:text-paper hover:bg-surface-hover'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: SUMMARY & RECENT GATE LOG */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Recent Gate Scans */}
          <div className="lg:col-span-8 bg-surface border border-surface-border rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-surface-border">
              <div>
                <h3 className="font-serif text-lg font-bold text-paper uppercase">
                  Live Gate Scans & Check-in Feed
                </h3>
                <span className="text-xs font-mono text-gray-400">
                  Real-time turnstile telemetry at MIT ACSC entrances
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                icon={<QrCode className="w-3.5 h-3.5" />}
                onClick={() => setScannerModalOpen(true)}
              >
                Scan Pass
              </Button>
            </div>

            <div className="divide-y divide-surface-border">
              {checkInLogs.map((log) => (
                <div key={log.id} className="py-3 flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="font-bold text-paper font-sans text-sm block">
                      {log.studentName}
                    </span>
                    <span className="text-gray-400">
                      {log.passId} • {log.eventTitle}
                    </span>
                    <span className="text-gray-500 text-[11px] block">{log.college}</span>
                  </div>
                  <div className="text-right">
                    <Badge variant={log.status === 'Verified' ? 'green' : 'red'} size="sm">
                      {log.status}
                    </Badge>
                    <span className="text-[10px] text-gray-500 block mt-1">{log.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organizer Quick Tools */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-surface border border-surface-border rounded-xl p-5 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-gold-400 font-semibold block">
                Administrative Shortcuts
              </span>
              <div className="space-y-2">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full text-xs font-mono justify-start"
                  onClick={() => setActiveTab('winners')}
                >
                  <Trophy className="w-3.5 h-3.5 mr-2 text-gold-400" />
                  Enter Winner Standings
                </Button>

                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full text-xs font-mono justify-start"
                  onClick={() => alert('Certificate batch generation queue initiated for 420 participants.')}
                >
                  <Award className="w-3.5 h-3.5 mr-2 text-gold-400" />
                  Generate Batch Certificates
                </Button>

                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full text-xs font-mono justify-start"
                  onClick={() => navigateTo('announcements')}
                >
                  <Sparkles className="w-3.5 h-3.5 mr-2 text-gold-400" />
                  Post Urgent Bulletin
                </Button>
              </div>
            </div>

            <div className="p-4 bg-gold-400/10 border border-gold-400/30 rounded-xl space-y-2 text-xs text-gold-300">
              <span className="font-bold font-serif uppercase tracking-wider block">Security Directive</span>
              <p className="leading-relaxed">
                Ensure all gate attendants cross-reference student photo IDs with the digital QR signature prior to issuing wristbands.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PARTICIPANT ROSTER */}
      {activeTab === 'registrations' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-gold-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchRegQuery}
                onChange={(e) => setSearchRegQuery(e.target.value)}
                placeholder="Search participant, pass ID, event..."
                className="w-full pl-9 pr-3 py-2 bg-surface border border-surface-border rounded text-xs text-paper focus:outline-none focus:border-gold-400"
              />
            </div>
            <span className="text-xs font-mono text-gray-400">
              Showing {filteredRegistrations.length} verified records
            </span>
          </div>

          <div className="bg-surface border border-surface-border rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="bg-surface-subtle border-b border-surface-border font-mono text-[11px] uppercase tracking-wider text-gray-400">
                    <th className="py-3 px-4">Pass ID</th>
                    <th className="py-3 px-4">Participant Name</th>
                    <th className="py-3 px-4">College</th>
                    <th className="py-3 px-4">Target Event</th>
                    <th className="py-3 px-4">Format</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border">
                  {filteredRegistrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-surface-hover/50 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-gold-400">{reg.passId}</td>
                      <td className="py-3.5 px-4 font-semibold text-paper">
                        {reg.participant.name}
                        <span className="text-[10px] text-gray-400 block font-mono">{reg.participant.course}</span>
                      </td>
                      <td className="py-3.5 px-4 text-gray-300 font-mono text-[11px]">{reg.participant.college}</td>
                      <td className="py-3.5 px-4 text-paper font-display">{reg.eventTitle}</td>
                      <td className="py-3.5 px-4 font-mono">
                        {reg.participationType === 'Team' ? `Team (${reg.teamName})` : 'Individual'}
                      </td>
                      <td className="py-3.5 px-4">
                        <Badge variant={reg.status === 'Checked In' ? 'green' : 'gold'} size="sm">
                          {reg.status}
                        </Badge>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => openPassModal(reg)}
                          className="text-gold-400 hover:underline font-mono text-[11px]"
                        >
                          View Pass
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: WINNER ENTRY */}
      {activeTab === 'winners' && (
        <div className="max-w-2xl bg-surface border border-surface-border rounded-xl p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-paper uppercase">
              Publish Competition Results
            </h3>
            <p className="text-xs text-gray-400 font-sans mt-1">
              Directly updates public leaderboards and automatically stamps participation credentials.
            </p>
          </div>

          {winnerDeclaredToast && (
            <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded text-xs text-emerald-300 font-mono flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Result published successfully. Leaderboard and notifications updated.</span>
            </div>
          )}

          <form onSubmit={handleDeclareWinner} className="space-y-4 text-xs font-sans">
            <div>
              <label className="block font-mono uppercase text-gray-400 mb-1">Target Competition</label>
              <select
                value={winnerEventSelect}
                onChange={(e) => setWinnerEventSelect(e.target.value)}
                className="w-full px-3 py-2 bg-surface-subtle border border-surface-border rounded text-paper font-sans focus:border-gold-400"
              >
                {events.map(ev => (
                  <option key={ev.id} value={ev.id}>{ev.title}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-mono uppercase text-gray-400 mb-1">Rank / Tier</label>
                <select className="w-full px-3 py-2 bg-surface-subtle border border-surface-border rounded text-paper focus:border-gold-400">
                  <option value="1">1st Place (Grand Winner)</option>
                  <option value="2">2nd Place (Runner Up)</option>
                  <option value="3">3rd Place</option>
                  <option value="Special">Special Recognition</option>
                </select>
              </div>

              <div>
                <label className="block font-mono uppercase text-gray-400 mb-1">Final Score (out of 100)</label>
                <input
                  type="number"
                  step="0.1"
                  defaultValue="98.5"
                  className="w-full px-3 py-2 bg-surface-subtle border border-surface-border rounded text-paper font-mono focus:border-gold-400"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono uppercase text-gray-400 mb-1">Winning Team / Participant</label>
              <input
                type="text"
                value={winnerTeamInput}
                onChange={(e) => setWinnerTeamInput(e.target.value)}
                placeholder="e.g. Team NexusPrime (MIT ACSC)"
                className="w-full px-3 py-2 bg-surface-subtle border border-surface-border rounded text-paper focus:border-gold-400"
              />
            </div>

            <div>
              <label className="block font-mono uppercase text-gray-400 mb-1">Citation / Jury Remarks</label>
              <textarea
                rows={3}
                placeholder="Exemplary multi-agent architectural execution with low-latency local inference..."
                className="w-full px-3 py-2 bg-surface-subtle border border-surface-border rounded text-paper focus:border-gold-400"
              />
            </div>

            <Button type="submit" variant="primary" size="md">
              Publish & Stamp Podium
            </Button>
          </form>
        </div>
      )}

      {/* TAB 4: ANALYTICS CHARTS */}
      {activeTab === 'analytics' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-surface border border-surface-border rounded-xl space-y-4">
            <h4 className="font-serif text-lg font-bold text-paper uppercase">
              Registrations By College Share
            </h4>
            <div className="space-y-3 font-mono text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span>MIT ACSC (Host)</span>
                  <span className="text-gold-400 font-bold">42% (1,432)</span>
                </div>
                <div className="w-full h-2 bg-surface-muted rounded overflow-hidden">
                  <div className="bg-gold-400 h-full w-[42%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>COEP Technological Univ</span>
                  <span className="text-paper">24% (819)</span>
                </div>
                <div className="w-full h-2 bg-surface-muted rounded overflow-hidden">
                  <div className="bg-sky-400 h-full w-[24%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>VIT Pune</span>
                  <span className="text-paper">16% (545)</span>
                </div>
                <div className="w-full h-2 bg-surface-muted rounded overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[16%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>SICSR Symbiosis</span>
                  <span className="text-paper">11% (375)</span>
                </div>
                <div className="w-full h-2 bg-surface-muted rounded overflow-hidden">
                  <div className="bg-amber-400 h-full w-[11%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>Other Pune Institutes</span>
                  <span className="text-gray-400">7% (239)</span>
                </div>
                <div className="w-full h-2 bg-surface-muted rounded overflow-hidden">
                  <div className="bg-neutral-600 h-full w-[7%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-surface border border-surface-border rounded-xl space-y-4">
            <h4 className="font-serif text-lg font-bold text-paper uppercase">
              Category Distribution
            </h4>
            <div className="space-y-3 font-mono text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Hackathons & Coding</span>
                  <span className="text-gold-400 font-bold">48%</span>
                </div>
                <div className="w-full h-2 bg-surface-muted rounded overflow-hidden">
                  <div className="bg-gold-400 h-full w-[48%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>Cultural Festivals</span>
                  <span className="text-paper">32%</span>
                </div>
                <div className="w-full h-2 bg-surface-muted rounded overflow-hidden">
                  <div className="bg-rose-400 h-full w-[32%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>E-Sports & Gaming</span>
                  <span className="text-paper">12%</span>
                </div>
                <div className="w-full h-2 bg-surface-muted rounded overflow-hidden">
                  <div className="bg-purple-400 h-full w-[12%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>Seminars & Conclaves</span>
                  <span className="text-gray-400">8%</span>
                </div>
                <div className="w-full h-2 bg-surface-muted rounded overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[8%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

