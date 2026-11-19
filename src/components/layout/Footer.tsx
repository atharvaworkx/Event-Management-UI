import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <footer className="border-t border-surface-border bg-charcoal-950 text-gray-400 font-sans pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-surface-border">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-gold-400 flex items-center justify-center text-black font-serif font-black text-sm">
                E
              </div>
              <span className="font-serif tracking-widest text-base font-bold text-paper uppercase">
                EVENT MANAGEMENT SYSTEM
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Western India’s premier centralized collegiate event discovery, hackathon administration, and digital credential verification ecosystem.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface-subtle border border-surface-border text-[11px] font-mono text-gold-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Flagship Campus: MIT ACSC Pune
              </span>
            </div>
          </div>

          {/* Core Categories */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-paper mb-4 font-semibold">
              Event Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {['Hackathons & AI Sprints', 'IT Fests & Coding', 'Cultural & Battle of Bands', 'Sports & E-Sports', 'Robotics & Hardware', 'FinTech & Seminars'].map((cat, i) => (
                <li key={i}>
                  <button 
                    onClick={() => navigateTo('events')}
                    className="hover:text-gold-400 transition-colors text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Pune Colleges Network */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-paper mb-4 font-semibold">
              Institutes in Network
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigateTo('college-detail', 'mit-acsc')} className="text-gold-300 hover:underline">
                  MIT ACSC Pune (Flagship)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('college-detail', 'coep')} className="hover:text-gold-400">
                  COEP Technological University
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('college-detail', 'symbiosis')} className="hover:text-gold-400">
                  SICSR Symbiosis Pune
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('college-detail', 'mit-wpu')} className="hover:text-gold-400">
                  MIT World Peace University
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('college-detail', 'vit-pune')} className="hover:text-gold-400">
                  VIT Pune & PCCOE
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('colleges')} className="text-gold-400 font-mono text-[11px] hover:underline">
                  View All 9 Institutes →
                </button>
              </li>
            </ul>
          </div>

          {/* Central Secretariat / Helpdesk */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-paper mb-4 font-semibold">
              Host Secretariat
            </h4>
            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 mt-0.5 shrink-0" />
                <span>Central Event Cell, MIT ACSC, Dehu Phata, Alandi (D), Pune - 412105</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>+91 (020) 3025 3500</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>events@mitacsc.ac.in</span>
              </div>
              <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SPPU & NAAC A+ Verified System</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © 2026 EVENT MANAGEMENT SYSTEM. Built for Collegiate Festivals & Hackathons.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => navigateTo('schedule')} className="hover:text-paper">Interactive Schedule</button>
            <button onClick={() => navigateTo('leaderboard')} className="hover:text-paper">Leaderboards</button>
            <button onClick={() => navigateTo('admin')} className="hover:text-gold-400">Moderation Portal</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

