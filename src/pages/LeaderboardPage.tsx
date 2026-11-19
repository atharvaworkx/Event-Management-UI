import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Trophy, 
  ArrowUp, 
  ArrowDown, 
  Minus, 
  Flame, 
  Building2, 
  Users, 
  Sparkles,
  ExternalLink,
  Award
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { leaderboardsData, campusCollegeLeaderboard } from '../data/leaderboards';

export const LeaderboardPage: React.FC = () => {
  const { events, navigateTo } = useApp();
  const [activeBoard, setActiveBoard] = useState<'innovyuh-2026' | 'it-fest-techblitz-2026' | 'campuses'>('innovyuh-2026');

  const activeEventBoard = activeBoard !== 'campuses' ? leaderboardsData[activeBoard] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-surface-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold">
              EVALUATION AUDIT
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-xs font-mono text-gray-400 uppercase">
              LIVE SCORING BENCHMARKS
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-paper uppercase tracking-tight">
            Hall of Laurels & Scores
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-2 font-sans">
            Real-time algorithmic testbed points, jury scores for hackathon prototypes, and the Pune Inter-Collegiate Trophy League standings.
          </p>
        </div>

        {/* Board Switcher */}
        <div className="flex items-center gap-2 bg-surface-subtle border border-surface-border p-1.5 rounded-lg text-xs font-mono">
          <button
            onClick={() => setActiveBoard('innovyuh-2026')}
            className={`px-3 py-2 rounded transition-all ${
              activeBoard === 'innovyuh-2026' ? 'bg-gold-400 text-black font-bold shadow-gold-sm' : 'text-gray-400 hover:text-white'
            }`}
          >
            Innovyuh Hackathon
          </button>
          <button
            onClick={() => setActiveBoard('it-fest-techblitz-2026')}
            className={`px-3 py-2 rounded transition-all ${
              activeBoard === 'it-fest-techblitz-2026' ? 'bg-gold-400 text-black font-bold shadow-gold-sm' : 'text-gray-400 hover:text-white'
            }`}
          >
            TechBlitz Speed Coding
          </button>
          <button
            onClick={() => setActiveBoard('campuses')}
            className={`px-3 py-2 rounded transition-all ${
              activeBoard === 'campuses' ? 'bg-gold-400 text-black font-bold shadow-gold-sm' : 'text-gray-400 hover:text-white'
            }`}
          >
            Campus Standings
          </button>
        </div>
      </div>

      {/* EVENT LEADERBOARD VIEW */}
      {activeEventBoard && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-surface rounded-xl border border-surface-border">
            <div>
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block">
                {activeEventBoard.updatedTime}
              </span>
              <h2 className="font-serif text-2xl font-bold text-paper uppercase mt-0.5">
                {activeEventBoard.eventTitle}
              </h2>
              <p className="text-xs text-gray-400 font-mono mt-0.5">{activeEventBoard.collegeName}</p>
            </div>
            <div className="flex items-center gap-6 font-mono text-xs">
              <div>
                <span className="text-gray-500 uppercase text-[10px] block">Contenders</span>
                <span className="font-bold text-paper text-sm">{activeEventBoard.totalParticipants} Developers</span>
              </div>
              <div>
                <span className="text-gray-500 uppercase text-[10px] block">Status</span>
                <span className="font-bold text-emerald-400 text-sm">Verified Audit</span>
              </div>
            </div>
          </div>

          {/* Leaderboard Table */}
          <div className="bg-surface border border-surface-border rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
                <thead>
                  <tr className="bg-surface-subtle border-b border-surface-border font-mono text-xs uppercase tracking-wider text-gray-400">
                    <th className="py-3.5 px-4 w-16 text-center">Rank</th>
                    <th className="py-3.5 px-4">Team / Contender</th>
                    <th className="py-3.5 px-4">Institute</th>
                    <th className="py-3.5 px-4">Solution / Prototype</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border">
                  {activeEventBoard.rankings.map((team) => (
                    <tr 
                      key={team.rank}
                      className={`hover:bg-surface-hover/60 transition-colors ${
                        team.rank === 1 ? 'bg-gold-400/5' : ''
                      }`}
                    >
                      {/* Rank Column */}
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-1 font-mono font-bold">
                          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                            team.rank === 1 
                              ? 'bg-gold-400 text-black font-black shadow-gold-sm' 
                              : team.rank === 2
                                ? 'bg-neutral-300 text-black'
                                : team.rank === 3
                                  ? 'bg-amber-700 text-white'
                                  : 'text-gray-400 bg-surface-muted'
                          }`}>
                            {team.rank}
                          </span>
                          <span className="text-[10px]">
                            {team.change === 'up' && <ArrowUp className="w-3 h-3 text-emerald-400 inline" />}
                            {team.change === 'down' && <ArrowDown className="w-3 h-3 text-rose-400 inline" />}
                            {team.change === 'same' && <Minus className="w-3 h-3 text-gray-500 inline" />}
                          </span>
                        </div>
                      </td>

                      {/* Team Name & Members */}
                      <td className="py-4 px-4">
                        <span className="font-display font-bold text-paper block text-sm">
                          {team.teamName}
                        </span>
                        <span className="text-[11px] text-gray-400 font-mono">
                          {team.members.join(' • ')}
                        </span>
                      </td>

                      {/* College */}
                      <td className="py-4 px-4 font-mono text-xs text-gold-300">
                        {team.college}
                      </td>

                      {/* Project */}
                      <td className="py-4 px-4 text-xs text-gray-300 max-w-xs leading-relaxed">
                        {team.project}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-4">
                        <Badge variant={team.rank <= 3 ? 'gold' : 'charcoal'} size="sm">
                          {team.status}
                        </Badge>
                      </td>

                      {/* Score */}
                      <td className="py-4 px-4 text-right font-mono font-bold text-base text-gold-400">
                        {team.score.toFixed(1)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* CAMPUS LEADERBOARD VIEW */}
      {activeBoard === 'campuses' && (
        <div className="space-y-6">
          <div className="p-5 bg-surface rounded-xl border border-surface-border">
            <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block">
              ANNUAL TROPHY RUN
            </span>
            <h2 className="font-serif text-2xl font-bold text-paper uppercase mt-0.5">
              Pune Inter-Collegiate Participation Standings
            </h2>
            <p className="text-xs text-gray-400 font-sans mt-1">
              Calculated dynamically from delegate registrations, hackathon finalist finishes, podium trophies, and coding testbed scores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusCollegeLeaderboard.map((c) => (
              <div
                key={c.rank}
                className={`p-6 rounded-xl border flex flex-col justify-between transition-all ${
                  c.rank === 1
                    ? 'bg-gold-400/10 border-gold-400 shadow-gold-sm'
                    : 'bg-surface border-surface-border hover:border-neutral-600'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xl font-black text-gold-400">#{c.rank}</span>
                    <Badge variant={c.rank === 1 ? 'gold' : 'charcoal'} size="sm">{c.badge}</Badge>
                  </div>
                  <h3 className="font-display font-bold text-base text-paper">{c.college}</h3>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">{c.city} Region</p>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Aggregate Points</span>
                    <span className="font-bold text-gold-400 text-sm">{c.points} pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Trophies Secured</span>
                    <span className="text-paper">{c.trophies} Cups</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Registered Delegates</span>
                    <span className="text-paper">{c.registeredStudents} Students</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

