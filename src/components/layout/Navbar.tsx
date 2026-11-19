import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Search, 
  Bell, 
  Ticket, 
  QrCode, 
  ShieldCheck, 
  UserCheck, 
  GraduationCap, 
  Menu, 
  X,
  Compass,
  Building2,
  Calendar,
  Trophy,
  Radio,
  ChevronDown
} from 'lucide-react';
import { Badge } from '../common/Badge';

export const Navbar: React.FC = () => {
  const { 
    currentView, 
    navigateTo, 
    userRole, 
    setUserRole, 
    registrations, 
    notifications, 
    setSearchModalOpen,
    setScannerModalOpen,
    markAllNotificationsRead
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const navLinks = [
    { label: 'Events', view: 'events', icon: <Compass className="w-4 h-4" /> },
    { label: 'Colleges', view: 'colleges', icon: <Building2 className="w-4 h-4" /> },
    { label: 'Schedule', view: 'schedule', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Leaderboard', view: 'leaderboard', icon: <Trophy className="w-4 h-4" /> },
    { label: 'Announcements', view: 'announcements', icon: <Radio className="w-4 h-4" /> },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-[#090A0E]/95 backdrop-blur-md border-b border-surface-border text-paper">
      {/* Top micro bar for Campus Pulse / Ecosystem */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-surface-subtle text-[11px] font-mono border-b border-surface-border text-gray-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-gold-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            CAMPUS PULSE: 184 ACTIVE PARTICIPANTS
          </span>
          <span className="text-gray-600">|</span>
          <span>FLAGSHIP HUB: MIT ACSC ALANDI</span>
          <span className="text-gray-600">|</span>
          <span>PUNE INTER-COLLEGIATE NETWORK</span>
        </div>

        {/* Quick Role Switcher Pill */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500 uppercase">View Mode:</span>
          <div className="relative">
            <button
              onClick={() => setRoleMenuOpen(!roleMenuOpen)}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-muted border border-surface-border hover:border-gold-400/50 text-gold-300 font-sans text-xs transition-colors"
            >
              {userRole === 'student' && <GraduationCap className="w-3 h-3 text-gold-400" />}
              {userRole === 'organizer' && <UserCheck className="w-3 h-3 text-emerald-400" />}
              {userRole === 'admin' && <ShieldCheck className="w-3 h-3 text-sky-400" />}
              <span className="capitalize font-mono">{userRole} View</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>

            {roleMenuOpen && (
              <div 
                className="absolute right-0 mt-1 w-44 bg-surface-subtle border border-surface-border rounded shadow-xl py-1 z-50 text-xs font-sans"
                onMouseLeave={() => setRoleMenuOpen(false)}
              >
                <button
                  onClick={() => { setUserRole('student'); navigateTo('dashboard'); setRoleMenuOpen(false); }}
                  className={`w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-surface-hover ${userRole === 'student' ? 'text-gold-400 font-semibold' : 'text-gray-300'}`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  Student Dashboard
                </button>
                <button
                  onClick={() => { setUserRole('organizer'); navigateTo('organizer'); setRoleMenuOpen(false); }}
                  className={`w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-surface-hover ${userRole === 'organizer' ? 'text-emerald-400 font-semibold' : 'text-gray-300'}`}
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  Organizer Center
                </button>
                <button
                  onClick={() => { setUserRole('admin'); navigateTo('admin'); setRoleMenuOpen(false); }}
                  className={`w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-surface-hover ${userRole === 'admin' ? 'text-sky-400 font-semibold' : 'text-gray-300'}`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  University Admin
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo - "EVENT MANAGEMENT SYSTEM" strictly as requested */}
        <div 
          onClick={() => navigateTo('home')}
          className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
        >
          <div className="w-8 h-8 rounded bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-black font-serif font-black text-base shadow-gold-sm">
            E
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-widest text-base sm:text-lg font-bold text-paper group-hover:text-gold-300 transition-colors uppercase">
              EVENT MANAGEMENT SYSTEM
            </span>
            <span className="text-[10px] font-mono tracking-wider text-mutedText uppercase -mt-0.5">
              PUNE COLLEGIATE ALLIANCE
            </span>
          </div>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = currentView === link.view;
            return (
              <button
                key={link.view}
                onClick={() => navigateTo(link.view as any)}
                className={`px-3 py-1.5 rounded text-xs lg:text-sm font-medium tracking-wide transition-all ${
                  isActive 
                    ? 'text-gold-400 bg-surface-muted/90 border border-gold-400/30' 
                    : 'text-gray-300 hover:text-white hover:bg-surface-hover'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Global Search Button */}
          <button
            onClick={() => setSearchModalOpen(true)}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded bg-surface-subtle border border-surface-border text-gray-400 hover:text-paper hover:border-neutral-600 transition-all text-xs"
            title="Search events, colleges, competitions (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-gold-400" />
            <span className="hidden sm:inline text-gray-400">Search...</span>
            <kbd className="hidden lg:inline-block font-mono text-[10px] px-1 py-0.2 bg-surface-muted border border-surface-border rounded text-gray-400">
              ⌘K
            </kbd>
          </button>

          {/* QR Pass Check-in Scanner Button */}
          <button
            onClick={() => setScannerModalOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-surface-subtle border border-surface-border text-gold-400 hover:bg-gold-400/10 hover:border-gold-400/40 transition-all text-xs font-mono"
            title="Open Event Check-in Scanner"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Check-in</span>
          </button>

          {/* Notifications Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
              className="relative p-2 rounded bg-surface-subtle border border-surface-border text-gray-300 hover:text-white hover:border-neutral-600 transition-all"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4 text-gray-300" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold-400 text-black font-mono font-bold text-[9px] flex items-center justify-center ring-2 ring-background">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown Panel */}
            {notifDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-80 sm:w-96 bg-surface-subtle border border-surface-border rounded shadow-2xl py-2 z-50 text-xs"
                onMouseLeave={() => setNotifDropdownOpen(false)}
              >
                <div className="flex items-center justify-between px-4 py-2 border-b border-surface-border">
                  <span className="font-display font-semibold text-paper uppercase tracking-wider text-xs">
                    Notifications ({notifications.length})
                  </span>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllNotificationsRead}
                      className="text-[11px] text-gold-400 hover:underline font-mono"
                    >
                      Mark all read
                    </button>
                  )}
                </div>

                <div className="max-h-72 overflow-y-auto divide-y divide-surface-border">
                  {notifications.map((item) => (
                    <div 
                      key={item.id} 
                      className={`p-3 transition-colors hover:bg-surface-hover ${!item.read ? 'bg-gold-400/5' : ''}`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-paper font-sans">{item.title}</span>
                        <span className="text-[10px] text-gray-500 font-mono">{item.timeAgo}</span>
                      </div>
                      <p className="text-gray-400 text-[11px] leading-relaxed">{item.message}</p>
                    </div>
                  ))}
                </div>

                <div className="px-4 py-2 border-t border-surface-border bg-surface-muted/50 text-center">
                  <button
                    onClick={() => { navigateTo('announcements'); setNotifDropdownOpen(false); }}
                    className="text-xs text-gold-400 hover:text-gold-300 font-medium"
                  >
                    View News & Announcements →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Student Pass & Dashboard Button */}
          <button
            onClick={() => navigateTo('dashboard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-medium text-xs transition-all ${
              currentView === 'dashboard'
                ? 'bg-gold-400 text-black shadow-gold-sm font-semibold'
                : 'bg-surface-muted text-paper border border-surface-border hover:border-gold-400/50'
            }`}
          >
            <Ticket className="w-3.5 h-3.5 text-gold-400" />
            <span className="hidden sm:inline">My Passes</span>
            {registrations.length > 0 && (
              <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-black/40 text-gold-300">
                {registrations.length}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded bg-surface-subtle border border-surface-border text-gray-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-surface-border bg-surface-subtle px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => {
                navigateTo(link.view as any);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium flex items-center gap-3 ${
                currentView === link.view
                  ? 'bg-gold-400/10 text-gold-400 border border-gold-400/30'
                  : 'text-gray-300 hover:bg-surface-hover'
              }`}
            >
              {link.icon}
              {link.label}
            </button>
          ))}

          <div className="pt-3 border-t border-surface-border flex flex-col gap-2">
            <button
              onClick={() => { navigateTo('scanner'); setMobileMenuOpen(false); }}
              className="w-full py-2 px-3 rounded bg-surface-muted text-gold-400 border border-gold-400/30 flex items-center gap-2 text-xs font-mono"
            >
              <QrCode className="w-4 h-4" />
              Scan Digital Pass
            </button>
            <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
              <span>View As:</span>
              <div className="flex gap-1">
                {(['student', 'organizer', 'admin'] as const).map(role => (
                  <button
                    key={role}
                    onClick={() => { setUserRole(role); navigateTo(role === 'student' ? 'dashboard' : role); setMobileMenuOpen(false); }}
                    className={`px-2 py-0.5 rounded capitalize ${userRole === role ? 'bg-gold-400 text-black font-semibold' : 'bg-surface-border text-gray-300'}`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

