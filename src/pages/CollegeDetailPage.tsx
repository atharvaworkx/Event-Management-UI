import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Building2, 
  MapPin, 
  Trophy, 
  Users, 
  ExternalLink, 
  Calendar, 
  Sparkles, 
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Award,
  Globe
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const CollegeDetailPage: React.FC = () => {
  const { selectedCollegeId, getCollegeById, colleges, events, navigateTo, openRegistration } = useApp();

  const college = getCollegeById(selectedCollegeId || 'mit-acsc') || colleges[0];
  const collegeEvents = events.filter(e => e.collegeId === college.id);

  const isMitAcsc = college.id === 'mit-acsc';

  return (
    <div className="space-y-12 pb-20">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <button
          onClick={() => navigateTo('colleges')}
          className="flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Campuses</span>
        </button>
      </div>

      {/* College Banner Hero */}
      <div className="relative border-b border-surface-border bg-charcoal-900 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-25 pointer-events-none">
          <img 
            src={college.bannerImage} 
            alt={college.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6 pt-4">
          <div className="flex items-center gap-2">
            {college.featured ? (
              <Badge variant="gold">PRIMARY HOST HUB</Badge>
            ) : (
              <Badge variant="charcoal">AFFILIATE INSTITUTION</Badge>
            )}
            <span className="text-gray-600">•</span>
            <span className="text-xs font-mono text-gold-300 uppercase">
              ESTABLISHED {college.established}
            </span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="font-serif text-3xl sm:text-5xl font-black text-paper uppercase tracking-tight">
              {college.name}
            </h1>
            <p className="text-sm font-mono text-gray-400">
              {college.accreditation}
            </p>
          </div>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed font-sans">
            {college.description}
          </p>

          {/* Metrics bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl pt-4 border-t border-surface-border font-mono text-xs">
            <div className="p-3 bg-surface rounded border border-surface-border">
              <span className="text-gray-500 text-[10px] uppercase block mb-1">TOTAL FOOTFALL</span>
              <span className="font-bold text-gold-400 text-lg">{college.metrics.totalFootfall}</span>
            </div>
            <div className="p-3 bg-surface rounded border border-surface-border">
              <span className="text-gray-500 text-[10px] uppercase block mb-1">HACKATHONS</span>
              <span className="font-bold text-paper text-lg">{college.metrics.hackathonsHosted} Hosted</span>
            </div>
            <div className="p-3 bg-surface rounded border border-surface-border">
              <span className="text-gray-500 text-[10px] uppercase block mb-1">TROPHIES SECURED</span>
              <span className="font-bold text-paper text-lg">{college.metrics.trophiesWon} State Cups</span>
            </div>
            <div className="p-3 bg-surface rounded border border-surface-border">
              <span className="text-gray-500 text-[10px] uppercase block mb-1">CAMPUS CAPACITY</span>
              <span className="font-bold text-emerald-400 text-lg">{college.activeStudents}+ Seats</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              {college.address}
            </span>
            <a 
              href={college.website} 
              target="_blank" 
              rel="noreferrer" 
              className="text-gold-400 hover:underline flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Official Institutional Portal</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Hosted Events Section */}
        <section className="space-y-6">
          <div className="border-l-2 border-gold-400 pl-4">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-0.5">
              CALENDAR SPOTLIGHT
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-paper uppercase">
              Events Hosted by {college.shortName}
            </h2>
          </div>

          {collegeEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collegeEvents.map((ev) => (
                <div
                  key={ev.id}
                  className="bg-surface border border-surface-border rounded-xl p-5 space-y-3 flex flex-col justify-between hover:border-gold-400/40 transition-all group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <Badge variant="gold" size="sm">{ev.category}</Badge>
                      <span className="text-emerald-400">{ev.status}</span>
                    </div>

                    <h4 
                      onClick={() => navigateTo('event-detail', ev.id)}
                      className="font-serif text-lg font-bold text-paper group-hover:text-gold-300 transition-colors cursor-pointer"
                    >
                      {ev.title}
                    </h4>

                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      {ev.tagLine}
                    </p>

                    <div className="pt-2 border-t border-surface-border text-xs font-mono text-gray-400 space-y-1">
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="text-paper">{ev.startDate.split(',')[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Prize:</span>
                        <span className="text-gold-400 font-bold">{ev.prizePool}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full text-xs font-mono"
                      onClick={() => openRegistration(ev)}
                    >
                      Register
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="text-xs px-3 font-mono"
                      onClick={() => navigateTo('event-detail', ev.id)}
                    >
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs font-mono text-gray-400 italic">No events currently scheduled for this affiliate.</p>
          )}
        </section>

        {/* MIT ACSC Deep Dive: Academic Departments & Infrastructure (If MIT ACSC) */}
        {isMitAcsc && (
          <section className="bg-surface-subtle border border-surface-border rounded-xl p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold block mb-1">
                HOST CAMPUS INFRASTRUCTURE
              </span>
              <h3 className="font-serif text-2xl font-black text-paper uppercase">
                MIT ACSC Alandi Academic & Technological Hub
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl font-sans leading-relaxed">
                Featuring state-of-the-art High-Performance Computing Labs, Google Cloud Centers of Excellence, Incubation Cells, and a 2,500-seat amphitheatre.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
              <div className="p-4 bg-surface rounded border border-surface-border space-y-2">
                <span className="font-serif font-bold text-sm text-gold-300 block">Department of Computer Science</span>
                <p className="text-gray-400 leading-relaxed">
                  Hosts TechBlitz, algorithm hackathons, and Linux kernel code jams with dedicated fiber gigabit testbeds.
                </p>
              </div>

              <div className="p-4 bg-surface rounded border border-surface-border space-y-2">
                <span className="font-serif font-bold text-sm text-gold-300 block">Innovation & Incubation Cell</span>
                <p className="text-gray-400 leading-relaxed">
                  Provides seed capital grants, AWS/GCP vouchers, and mentor office hours for collegiate hackathon winners.
                </p>
              </div>

              <div className="p-4 bg-surface rounded border border-surface-border space-y-2">
                <span className="font-serif font-bold text-sm text-gold-300 block">Swami Vivekananda Auditorium</span>
                <p className="text-gray-400 leading-relaxed">
                  Acoustically engineered mega-hall hosting national level keynotes, theatrical battles, and Kshitij valedictory galas.
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

