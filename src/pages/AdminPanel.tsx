import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  Building2, 
  Calendar, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  Sliders, 
  FileText, 
  MapPin, 
  Sparkles,
  Edit2,
  Trash2,
  Plus
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { EventItem, EventStatus } from '../types';

export const AdminPanel: React.FC = () => {
  const { events, colleges, announcements, navigateTo } = useApp();

  const [activeTab, setActiveTab] = useState<'events' | 'colleges' | 'venues' | 'system'>('events');
  const [eventList, setEventList] = useState<EventItem[]>(events);
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('All');

  // Change moderation status for an event in local state
  const handleStatusChange = (eventId: string, newStatus: EventStatus) => {
    setEventList(prev => prev.map(e => e.id === eventId ? { ...e, status: newStatus } : e));
  };

  const filteredEvents = eventList.filter(
    e => selectedStatusFilter === 'All' || e.status === selectedStatusFilter
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-surface-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="blue" size="sm">SUPERVISORY ACCESS</Badge>
            <span className="text-gray-600">•</span>
            <span className="text-xs font-mono text-gray-400 uppercase">
              ALLIANCE AUDIT & MODERATION
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-paper uppercase tracking-tight">
            University Admin Portal
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-2 font-sans">
            Manage institutional charters, moderate multi-college event proposals, configure venues, and supervise gate verification quotas.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-3 py-1.5 rounded bg-surface border border-surface-border text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            System Health: Optimal
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-surface-border flex items-center gap-2 overflow-x-auto text-xs font-mono uppercase tracking-wider scrollbar-none">
        {[
          { id: 'events', label: `Event Moderation (${eventList.length})` },
          { id: 'colleges', label: `Accredited Colleges (${colleges.length})` },
          { id: 'venues', label: 'Venues & Checkposts (12)' },
          { id: 'system', label: 'Audit Logs & Security' }
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

      {/* TAB 1: EVENT MODERATION */}
      {activeTab === 'events' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-gray-400 uppercase">Filter Status:</span>
              {(['All', 'Registration Open', 'Upcoming', 'Live Now', 'Completed', 'Registration Closed'] as const).map(s => (
                <button
                  key={s}
                  onClick={() => setSelectedStatusFilter(s)}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    selectedStatusFilter === s
                      ? 'bg-gold-400 text-black font-semibold'
                      : 'bg-surface border border-surface-border text-gray-400 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              icon={<Plus className="w-3.5 h-3.5" />}
              onClick={() => alert('New Event Creation Dialog opened.')}
            >
              Draft New Event
            </Button>
          </div>

          <div className="bg-surface border border-surface-border rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="bg-surface-subtle border-b border-surface-border font-mono text-[11px] uppercase tracking-wider text-gray-400">
                    <th className="py-3.5 px-4">Event & College</th>
                    <th className="py-3.5 px-4">Category</th>
                    <th className="py-3.5 px-4">Schedule</th>
                    <th className="py-3.5 px-4">Registrations</th>
                    <th className="py-3.5 px-4">Moderation State</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border">
                  {filteredEvents.map((ev) => (
                    <tr key={ev.id} className="hover:bg-surface-hover/50 transition-colors">
                      <td className="py-4 px-4">
                        <span className="font-display font-bold text-sm text-paper block">
                          {ev.title}
                        </span>
                        <span className="text-[11px] font-mono text-gold-300">
                          {ev.collegeName}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="gold" size="sm">{ev.category}</Badge>
                      </td>
                      <td className="py-4 px-4 font-mono text-gray-300">
                        {ev.startDate.split(',')[0]}
                      </td>
                      <td className="py-4 px-4 font-mono">
                        <span className="text-paper font-semibold">{ev.registrationCount}</span>
                        <span className="text-gray-500"> / {ev.maxSeats}</span>
                      </td>
                      <td className="py-4 px-4 font-mono">
                        <select
                          value={ev.status}
                          onChange={(e) => handleStatusChange(ev.id, e.target.value as EventStatus)}
                          className="px-2 py-1 bg-surface-subtle border border-surface-border rounded text-[11px] text-gold-400 font-mono focus:border-gold-400"
                        >
                          <option value="Registration Open">Registration Open</option>
                          <option value="Upcoming">Upcoming</option>
                          <option value="Live Now">Live Now</option>
                          <option value="Completed">Completed</option>
                          <option value="Registration Closed">Registration Closed</option>
                        </select>
                      </td>
                      <td className="py-4 px-4 text-right space-x-2 font-mono">
                        <button
                          onClick={() => navigateTo('event-detail', ev.id)}
                          className="text-gold-400 hover:underline text-[11px]"
                        >
                          View
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

      {/* TAB 2: COLLEGES */}
      {activeTab === 'colleges' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {colleges.map((c) => (
              <div key={c.id} className="p-5 bg-surface rounded-xl border border-surface-border space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gold-400 font-bold">{c.shortName}</span>
                  <Badge variant={c.featured ? 'gold' : 'charcoal'} size="sm">
                    {c.featured ? 'Flagship' : 'Affiliate'}
                  </Badge>
                </div>
                <h4 className="font-serif text-lg font-bold text-paper">{c.name}</h4>
                <p className="text-xs text-gray-400 font-mono">{c.accreditation}</p>
                <div className="pt-3 border-t border-surface-border flex justify-between text-xs font-mono text-gray-400">
                  <span>{c.eventsCount} Events</span>
                  <span>{c.activeStudents} Students</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: VENUES */}
      {activeTab === 'venues' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          {[
            { name: 'Swami Vivekananda Central Auditorium', college: 'MIT ACSC Alandi', cap: 2500, status: 'Active' },
            { name: 'Innovation Hub & Supercomputing Labs', college: 'MIT ACSC Alandi', cap: 500, status: 'Active' },
            { name: 'Open Amphitheatre Stage', college: 'MIT ACSC Alandi', cap: 3500, status: 'Active' },
            { name: 'Armored Robotics Arena (MindSpark)', college: 'COEP Shivajinagar', cap: 800, status: 'Active' },
            { name: 'Atur Centre Main Hall', college: 'SICSR Symbiosis', cap: 400, status: 'Active' },
            { name: 'Central Computing Floor', college: 'VIT Bibwewadi', cap: 600, status: 'Active' },
          ].map((v, i) => (
            <div key={i} className="p-4 bg-surface rounded-xl border border-surface-border space-y-2">
              <span className="text-emerald-400 text-[10px] uppercase font-bold">● {v.status}</span>
              <h4 className="font-display font-bold text-sm text-paper">{v.name}</h4>
              <p className="text-gray-400">{v.college}</p>
              <div className="pt-2 border-t border-surface-border flex justify-between text-gray-500">
                <span>Capacity</span>
                <span className="text-paper">{v.cap} Delegates</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: AUDIT LOGS */}
      {activeTab === 'system' && (
        <div className="p-6 bg-surface border border-surface-border rounded-xl space-y-4 font-mono text-xs">
          <h4 className="font-serif text-base font-bold text-paper uppercase">
            Security & Audit Telemetry Log
          </h4>
          <div className="space-y-2 text-gray-400">
            <p className="p-2 bg-surface-subtle rounded border border-surface-border">
              <span className="text-gold-400">[09:42:12 AM]</span> GATE_SCAN_PASS: Verified KSH-26-01482 (Devansh Mehta) at Alandi North Atrium.
            </p>
            <p className="p-2 bg-surface-subtle rounded border border-surface-border">
              <span className="text-gold-400">[08:15:30 AM]</span> EVENT_STATUS_UPDATE: "Kshitij 2026" marked as REGISTRATION_OPEN by Faculty Convener.
            </p>
            <p className="p-2 bg-surface-subtle rounded border border-surface-border">
              <span className="text-gold-400">[07:44:02 AM]</span> CERT_HASH_GEN: 382 cryptographic signatures sealed for Innovyuh 2025 archival.
            </p>
            <p className="p-2 bg-surface-subtle rounded border border-surface-border">
              <span className="text-gold-400">[Yesterday]</span> SYNC_ALLIANCE: SPPU academic calendar sync completed with 0 errors.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

