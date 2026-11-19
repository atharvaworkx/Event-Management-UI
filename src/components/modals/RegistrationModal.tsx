import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  QrCode, 
  Calendar, 
  Sparkles, 
  Users, 
  User, 
  Ticket
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { Registration } from '../../types';

export const RegistrationModal: React.FC = () => {
  const { 
    registrationModalOpen, 
    closeRegistration, 
    registeringEvent, 
    submitRegistration,
    openPassModal,
    navigateTo 
  } = useApp();

  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Clean empty form state so user enters their own details!
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: 'MIT Arts, Commerce & Science College, Pune',
    course: 'B.Sc. Computer Science',
    year: 'Third Year (TY)',
    participationType: 'Individual' as 'Individual' | 'Team',
    teamName: '',
    teamMembers: [
      { name: '', email: '', role: 'Developer' }
    ],
    github: '',
    linkedin: '',
    portfolio: '',
    projectIdea: ''
  });

  const [completedRegistration, setCompletedRegistration] = useState<Registration | null>(null);

  useEffect(() => {
    if (registrationModalOpen) {
      setStep(1);
      setCompletedRegistration(null);
    }
  }, [registrationModalOpen]);

  useEffect(() => {
    if (step === 5) {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#E5C158', '#F5F3EF', '#1E2029']
      });
    }
  }, [step]);

  if (!registrationModalOpen || !registeringEvent) return null;

  const handleNext = () => {
    if (step === 1 && !formData.name.trim()) {
      alert('Please enter your full name to proceed.');
      return;
    }
    if (step === 4) {
      const newReg = submitRegistration({
        eventId: registeringEvent.id,
        eventTitle: registeringEvent.title,
        collegeName: registeringEvent.collegeName,
        eventDate: `${registeringEvent.startDate} - ${registeringEvent.endDate}`,
        eventVenue: registeringEvent.venue,
        category: registeringEvent.category,
        participationType: formData.participationType,
        teamName: formData.participationType === 'Team' ? (formData.teamName || 'Team Innovators') : undefined,
        teamMembers: formData.participationType === 'Team' ? formData.teamMembers.filter(m => m.name.trim()) : undefined,
        participant: {
          name: formData.name.trim() || 'Student Delegate',
          email: formData.email.trim() || 'delegate@campus.edu',
          phone: formData.phone.trim() || '+91 98000 00000',
          college: formData.college,
          course: formData.course,
          year: formData.year,
          github: formData.github,
          linkedin: formData.linkedin,
          portfolio: formData.portfolio,
          projectIdea: formData.projectIdea
        }
      });
      setCompletedRegistration(newReg);
      setStep(5);
    } else {
      setStep((prev) => (prev + 1) as any);
    }
  };

  const handlePrev = () => {
    setStep((prev) => (prev - 1) as any);
  };

  const addTeamMember = () => {
    if (formData.teamMembers.length < 3) {
      setFormData({
        ...formData,
        teamMembers: [
          ...formData.teamMembers,
          { name: '', email: '', role: 'Member' }
        ]
      });
    }
  };

  const removeTeamMember = (index: number) => {
    setFormData({
      ...formData,
      teamMembers: formData.teamMembers.filter((_, i) => i !== index)
    });
  };

  const updateMember = (index: number, field: string, val: string) => {
    const updated = [...formData.teamMembers];
    updated[index] = { ...updated[index], [field]: val };
    setFormData({ ...formData, teamMembers: updated });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-surface border border-surface-border/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-surface-border bg-surface-subtle flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="gold" size="sm">{registeringEvent.category}</Badge>
              <span className="text-[11px] font-mono text-gray-400">• Official Registration</span>
            </div>
            <h2 className="font-display font-bold text-lg text-paper">{registeringEvent.title}</h2>
          </div>
          <button 
            onClick={closeRegistration}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-surface-hover transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.75} />
          </button>
        </div>

        {/* Progress Tracker (Steps 1 to 4) */}
        {step < 5 && (
          <div className="px-6 py-3 bg-surface-muted/60 border-b border-surface-border flex items-center justify-between text-xs font-mono">
            {[
              { num: 1, label: 'Participant' },
              { num: 2, label: 'Format' },
              { num: 3, label: 'Links' },
              { num: 4, label: 'Review' }
            ].map((s) => (
              <div 
                key={s.num} 
                className={`flex items-center gap-2 ${step >= s.num ? 'text-gold-400' : 'text-gray-500'}`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold border transition-colors ${
                  step > s.num 
                    ? 'bg-gold-400 text-black border-gold-400' 
                    : step === s.num 
                      ? 'border-gold-400 text-gold-400 bg-gold-400/10' 
                      : 'border-neutral-700 text-gray-500'
                }`}>
                  {step > s.num ? <Check className="w-3.5 h-3.5" strokeWidth={2.5} /> : s.num}
                </span>
                <span className="hidden sm:inline uppercase text-[11px]">{s.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Body Steps */}
        <div className="p-6">
          {/* STEP 1: Participant Information */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="border-l-2 border-gold-400 pl-3 mb-4">
                <h3 className="font-display font-bold text-base text-paper">Step 1: Participant Details</h3>
                <p className="text-xs text-gray-400">Enter your official student credentials.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-sm text-paper placeholder-gray-500 focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Official Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@college.edu"
                    className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-sm text-paper placeholder-gray-500 focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-sm text-paper placeholder-gray-500 focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-gray-400 mb-1">College / Institute</label>
                  <input
                    type="text"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    placeholder="College name"
                    className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-sm text-paper placeholder-gray-500 focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Course / Degree</label>
                  <input
                    type="text"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    placeholder="e.g. B.Sc. Computer Science"
                    className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-sm text-paper placeholder-gray-500 focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Academic Year</label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-sm text-paper focus:outline-none focus:border-gold-400"
                  >
                    <option value="First Year (FY)">First Year (FY)</option>
                    <option value="Second Year (SY)">Second Year (SY)</option>
                    <option value="Third Year (TY)">Third Year (TY)</option>
                    <option value="Final Year (B.Tech / M.Sc)">Final Year</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Participation Format & Team */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="border-l-2 border-gold-400 pl-3 mb-4">
                <h3 className="font-display font-bold text-base text-paper">Step 2: Participation Format</h3>
                <p className="text-xs text-gray-400">Choose individual or team formation.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, participationType: 'Individual' })}
                  className={`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all ${
                    formData.participationType === 'Individual'
                      ? 'border-gold-400 bg-gold-400/10 text-paper'
                      : 'border-surface-border bg-surface-subtle text-gray-400 hover:border-neutral-600'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400">
                    <User className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="font-semibold text-sm block">Individual Entry</span>
                    <span className="text-xs text-gray-400">Single participant pass</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, participationType: 'Team' })}
                  className={`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all ${
                    formData.participationType === 'Team'
                      ? 'border-gold-400 bg-gold-400/10 text-paper'
                      : 'border-surface-border bg-surface-subtle text-gray-400 hover:border-neutral-600'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400">
                    <Users className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="font-semibold text-sm block">Team Entry</span>
                    <span className="text-xs text-gray-400">Collaborate with peers</span>
                  </div>
                </button>
              </div>

              {formData.participationType === 'Team' && (
                <div className="pt-2 space-y-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Team Name</label>
                    <input
                      type="text"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-sm text-paper focus:outline-none focus:border-gold-400"
                      placeholder="e.g. CodeSquad Pune"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase text-gray-400">
                        Teammates ({formData.teamMembers.length})
                      </span>
                      {formData.teamMembers.length < 3 && (
                        <button
                          type="button"
                          onClick={addTeamMember}
                          className="text-xs text-gold-400 hover:underline font-mono"
                        >
                          + Add Teammate
                        </button>
                      )}
                    </div>

                    {formData.teamMembers.map((m, idx) => (
                      <div key={idx} className="p-2.5 bg-surface-subtle border border-surface-border rounded-xl flex gap-2 items-center">
                        <span className="text-xs font-mono text-gray-400 w-5">#{idx + 2}</span>
                        <input
                          type="text"
                          placeholder="Teammate Name"
                          value={m.name}
                          onChange={(e) => updateMember(idx, 'name', e.target.value)}
                          className="w-1/2 px-2.5 py-1.5 bg-surface border border-surface-border rounded-lg text-xs text-paper focus:border-gold-400"
                        />
                        <input
                          type="email"
                          placeholder="Teammate Email"
                          value={m.email}
                          onChange={(e) => updateMember(idx, 'email', e.target.value)}
                          className="w-1/2 px-2.5 py-1.5 bg-surface border border-surface-border rounded-lg text-xs text-paper focus:border-gold-400"
                        />
                        <button
                          type="button"
                          onClick={() => removeTeamMember(idx)}
                          className="text-gray-500 hover:text-rose-400 p-1"
                        >
                          <X className="w-4 h-4" strokeWidth={1.75} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: Professional Links */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="border-l-2 border-gold-400 pl-3 mb-4">
                <h3 className="font-display font-bold text-base text-paper">Step 3: Profiles & Idea Synopsis</h3>
                <p className="text-xs text-gray-400">Optional portfolio and pitch summary for judges.</p>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-1">GitHub / GitLab URL</label>
                <input
                  type="url"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  placeholder="https://github.com/..."
                  className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-xs text-paper focus:outline-none focus:border-gold-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-1">LinkedIn Profile</label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/..."
                  className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-xs text-paper focus:outline-none focus:border-gold-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Project Concept / Pitch</label>
                <textarea
                  rows={3}
                  value={formData.projectIdea}
                  onChange={(e) => setFormData({ ...formData, projectIdea: e.target.value })}
                  placeholder="Briefly state your intended problem statement or concept..."
                  className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-xs text-paper focus:outline-none focus:border-gold-400"
                />
              </div>
            </div>
          )}

          {/* STEP 4: Review Summary */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="border-l-2 border-gold-400 pl-3 mb-4">
                <h3 className="font-display font-bold text-base text-paper">Step 4: Registration Audit</h3>
                <p className="text-xs text-gray-400">Review your ticket credentials prior to issuing digital pass.</p>
              </div>

              <div className="p-4 bg-surface-subtle border border-surface-border rounded-xl space-y-2.5 text-xs">
                <div className="flex justify-between pb-2 border-b border-surface-border">
                  <span className="text-gray-400">Target Event</span>
                  <span className="font-semibold text-paper font-display text-sm">{registeringEvent.title}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-surface-border">
                  <span className="text-gray-400">Participant</span>
                  <span className="text-paper">{formData.name || 'Student Delegate'} ({formData.course})</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-surface-border">
                  <span className="text-gray-400">Format</span>
                  <span className="text-paper">{formData.participationType === 'Team' ? `Team: ${formData.teamName || 'Team'}` : 'Individual'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Registration Fee</span>
                  <span className="text-emerald-400 font-mono font-bold">{registeringEvent.entryFee}</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Success & Digital Pass Issued */}
          {step === 5 && completedRegistration && (
            <div className="text-center py-4 space-y-5 animate-in fade-in duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-400/20 border-2 border-gold-400 text-gold-400 mb-1">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>

              <div>
                <h3 className="font-serif text-3xl font-bold text-paper tracking-wide">
                  You're In.
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-sm mx-auto">
                  Your pass for <strong className="text-gold-300 font-medium">{registeringEvent.title}</strong> is confirmed.
                </p>
              </div>

              {/* Quick Digital Pass Card */}
              <div className="max-w-sm mx-auto bg-surface-subtle border border-gold-400/40 rounded-xl p-4 text-left relative overflow-hidden shadow-gold-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">Registration ID</span>
                    <span className="font-mono text-sm font-bold text-gold-400">{completedRegistration.passId}</span>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-lg p-1 flex items-center justify-center">
                    <QrCode className="w-8 h-8 text-black" />
                  </div>
                </div>

                <div className="space-y-1 text-xs border-t border-surface-border pt-2 text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Participant</span>
                    <span className="font-medium text-paper">{completedRegistration.participant.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date</span>
                    <span>{completedRegistration.eventDate}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Button 
                  variant="primary"
                  icon={<Ticket className="w-4 h-4" strokeWidth={1.75} />}
                  onClick={() => {
                    closeRegistration();
                    openPassModal(completedRegistration);
                  }}
                >
                  View Digital Pass
                </Button>

                <Button
                  variant="outline"
                  icon={<ArrowRight className="w-4 h-4" strokeWidth={1.75} />}
                  onClick={() => {
                    closeRegistration();
                    navigateTo('dashboard');
                  }}
                >
                  My Dashboard
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Navigation Buttons (Steps 1 to 4) */}
        {step < 5 && (
          <div className="px-6 py-4 bg-surface-subtle border-t border-surface-border flex items-center justify-between">
            {step > 1 ? (
              <Button variant="secondary" size="sm" icon={<ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.75} />} onClick={handlePrev}>
                Previous
              </Button>
            ) : (
              <span />
            )}

            <Button 
              variant="primary" 
              size="sm" 
              icon={<ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />} 
              iconPosition="right"
              onClick={handleNext}
            >
              {step === 4 ? 'Confirm & Issue Pass' : 'Continue'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
