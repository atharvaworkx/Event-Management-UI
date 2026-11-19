import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Calendar, MapPin, Trophy, Users, Sparkles, Image, Tag, Building2, Check } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { EventCategory, EventItem, EventMode } from '../../types';
import confetti from 'canvas-confetti';

export const CreateEventModal: React.FC = () => {
  const { createEventModalOpen, setCreateEventModalOpen, addEvent, colleges, navigateTo } = useApp();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<EventCategory>('Hackathons');
  const [collegeId, setCollegeId] = useState('mit-acsc');
  const [tagLine, setTagLine] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('April 15, 2026');
  const [endDate, setEndDate] = useState('April 17, 2026');
  const [registrationDeadline, setRegistrationDeadline] = useState('April 10, 2026');
  const [venue, setVenue] = useState('MIT ACSC Innovation Hub, Alandi, Pune');
  const [mode, setMode] = useState<EventMode>('In-Person');
  const [minTeam, setMinTeam] = useState(2);
  const [maxTeam, setMaxTeam] = useState(4);
  const [entryFee, setEntryFee] = useState('Free');
  const [prizePool, setPrizePool] = useState('₹1,50,000 + Trophies');
  const [bannerImage, setBannerImage] = useState('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80');

  if (!createEventModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter an event title.');
      return;
    }

    const selectedCollege = colleges.find(c => c.id === collegeId) || colleges[0];
    const eventId = `ev-${Date.now()}`;
    const slug = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${eventId}`;

    const newEvent: EventItem = {
      id: eventId,
      slug,
      title: title.trim(),
      collegeId: selectedCollege.id,
      collegeName: selectedCollege.name,
      collegeLogoBadge: selectedCollege.shortName,
      category,
      tagLine: tagLine.trim() || 'Premier collegiate competition hosted in Pune.',
      description: description.trim() || 'An inter-collegiate showcase uniting student talents across Pune.',
      fullAbout: [
        description.trim() || 'Join the next generation of innovators and creators in this competitive festival.',
        `Hosted at ${venue}, featuring verified credentials, live evaluations, and awards.`
      ],
      bannerImage: bannerImage || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80',
      startDate,
      endDate,
      registrationDeadline,
      venue,
      mode,
      teamSize: { min: Number(minTeam), max: Number(maxTeam) },
      entryFee,
      prizePool,
      prizes: [
        { rank: '1st Place', title: 'Grand Winner Trophy', reward: prizePool.split('+')[0].trim() || '₹75,000', perks: 'Certificate of Excellence & Trophy' },
        { rank: '2nd Place', title: 'Runner Up Cup', reward: '₹35,000', perks: 'Certificate of Merit' }
      ],
      schedule: [
        { id: 's1', day: 'Day 1', time: '09:00 AM', title: 'Registration & Gate Check-in', venue, category: 'Administrative' },
        { id: 's2', day: 'Day 1', time: '11:00 AM', title: 'Opening Keynote & Challenge Release', venue, category: 'Keynote', isHighlight: true },
        { id: 's3', day: 'Day 2', time: '03:00 PM', title: 'Grand Finale Evaluation & Awards', venue, category: 'Awards', isHighlight: true }
      ],
      rules: [
        'Valid college identity card and official digital QR pass are mandatory.',
        'Participants must report to designated venue desk 20 minutes prior.',
        'Judges’ verdict is final and verified.'
      ],
      faqs: [
        { q: 'Who is eligible to participate?', a: 'Any bona fide degree college student across Pune and Maharashtra.' },
        { q: 'How do I obtain the digital pass?', a: 'A verified encrypted QR pass is issued instantly upon registering on this portal.' }
      ],
      contacts: [
        { name: 'Event Secretariat', role: 'Convener Desk', phone: '+91 (020) 3025 3500', email: 'secretariat@mitacsc.ac.in' }
      ],
      status: 'Registration Open',
      registrationCount: 1,
      maxSeats: 250,
      daysRemaining: 30
    };

    addEvent(newEvent);
    setCreateEventModalOpen(false);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#E5C158', '#F5F3EF']
    });

    navigateTo('event-detail', eventId);
  };

  const presetImages = [
    { label: 'Hackathon / Tech', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80' },
    { label: 'Coding / Code', url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80' },
    { label: 'Cultural / Fest', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80' },
    { label: 'Robotics / AI', url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80' },
    { label: 'Seminar / Conclave', url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-surface border border-surface-border/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-surface-border bg-surface-subtle flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
              <Sparkles className="w-4 h-4" strokeWidth={1.75} />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-paper">Create & Publish College Event</h2>
              <span className="text-xs text-gray-400 font-mono">List new competitions on the centralized grid</span>
            </div>
          </div>
          <button 
            onClick={() => setCreateEventModalOpen(false)}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-surface-hover transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.75} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Title & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Event Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Pune CyberShield Hackathon 2026"
                className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-sm text-paper focus:outline-none focus:border-gold-400"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as EventCategory)}
                className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-sm text-paper focus:outline-none focus:border-gold-400"
              >
                <option value="Hackathons">Hackathons</option>
                <option value="IT Fests">IT Fests</option>
                <option value="Coding">Coding</option>
                <option value="Cultural">Cultural</option>
                <option value="Competitions">Competitions</option>
                <option value="Seminars">Seminars</option>
                <option value="Entrepreneurship">Entrepreneurship</option>
                <option value="Gaming">Gaming</option>
                <option value="Sports">Sports</option>
                <option value="Workshops">Workshops</option>
              </select>
            </div>
          </div>

          {/* Host Institute & Mode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Host Institute</label>
              <select
                value={collegeId}
                onChange={(e) => setCollegeId(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-sm text-paper focus:outline-none focus:border-gold-400"
              >
                {colleges.map(c => (
                  <option key={c.id} value={c.id}>{c.name} ({c.shortName})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Event Mode</label>
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value as EventMode)}
                className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-sm text-paper focus:outline-none focus:border-gold-400"
              >
                <option value="In-Person">In-Person</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Online">Online</option>
              </select>
            </div>
          </div>

          {/* Tagline */}
          <div>
            <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Short Tagline</label>
            <input
              type="text"
              value={tagLine}
              onChange={(e) => setTagLine(e.target.value)}
              placeholder="e.g. 24-Hour National Cloud Security & Defensive Computing Sprint"
              className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-sm text-paper focus:outline-none focus:border-gold-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Full Description</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide event details, objectives, and participating domains..."
              className="w-full px-3.5 py-2.5 bg-surface-subtle border border-surface-border rounded-xl text-xs text-paper focus:outline-none focus:border-gold-400 leading-relaxed"
            />
          </div>

          {/* Dates & Deadlines */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Start Date</label>
              <input
                type="text"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="e.g. April 15, 2026"
                className="w-full px-3 py-2 bg-surface-subtle border border-surface-border rounded-xl text-xs text-paper font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">End Date</label>
              <input
                type="text"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="e.g. April 17, 2026"
                className="w-full px-3 py-2 bg-surface-subtle border border-surface-border rounded-xl text-xs text-paper font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Registration Cutoff</label>
              <input
                type="text"
                value={registrationDeadline}
                onChange={(e) => setRegistrationDeadline(e.target.value)}
                placeholder="e.g. April 10, 2026"
                className="w-full px-3 py-2 bg-surface-subtle border border-surface-border rounded-xl text-xs text-paper font-mono"
              />
            </div>
          </div>

          {/* Venue, Fee & Prize Pool */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Campus Venue</label>
              <input
                type="text"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                placeholder="e.g. MIT ACSC Innovation Hub"
                className="w-full px-3 py-2 bg-surface-subtle border border-surface-border rounded-xl text-xs text-paper"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Registration Fee</label>
              <input
                type="text"
                value={entryFee}
                onChange={(e) => setEntryFee(e.target.value)}
                placeholder="e.g. Free or ₹200 / team"
                className="w-full px-3 py-2 bg-surface-subtle border border-surface-border rounded-xl text-xs text-paper font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Prize Pool</label>
              <input
                type="text"
                value={prizePool}
                onChange={(e) => setPrizePool(e.target.value)}
                placeholder="e.g. ₹1,50,000 + Trophies"
                className="w-full px-3 py-2 bg-surface-subtle border border-surface-border rounded-xl text-xs text-gold-400 font-mono font-bold"
              />
            </div>
          </div>

          {/* Team Size */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Min Team Size</label>
              <input
                type="number"
                min={1}
                max={10}
                value={minTeam}
                onChange={(e) => setMinTeam(Number(e.target.value))}
                className="w-full px-3 py-2 bg-surface-subtle border border-surface-border rounded-xl text-xs text-paper font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Max Team Size</label>
              <input
                type="number"
                min={1}
                max={10}
                value={maxTeam}
                onChange={(e) => setMaxTeam(Number(e.target.value))}
                className="w-full px-3 py-2 bg-surface-subtle border border-surface-border rounded-xl text-xs text-paper font-mono"
              />
            </div>
          </div>

          {/* Banner Image Preset Picker */}
          <div>
            <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">Choose Banner Preset</label>
            <div className="flex flex-wrap gap-2">
              {presetImages.map((img, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setBannerImage(img.url)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                    bannerImage === img.url
                      ? 'bg-gold-400 text-black font-semibold'
                      : 'bg-surface-subtle border border-surface-border text-gray-400 hover:text-white'
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-surface-border flex items-center justify-end gap-3">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setCreateEventModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              icon={<Sparkles className="w-4 h-4" strokeWidth={1.75} />}
            >
              Publish Event Live
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

