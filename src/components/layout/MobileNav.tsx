import React from 'react';
import { useApp } from '../../context/AppContext';
import { Compass, Ticket, QrCode, Trophy, Calendar } from 'lucide-react';

interface MobileTabItem {
  label: string;
  view: string;
  icon: React.ReactNode;
  isScanner?: boolean;
  badge?: number;
}

export const MobileNav: React.FC = () => {
  const { currentView, navigateTo, setScannerModalOpen, registrations } = useApp();

  const tabs: MobileTabItem[] = [
    { label: 'Explore', view: 'events', icon: <Compass className="w-5 h-5" /> },
    { label: 'Schedule', view: 'schedule', icon: <Calendar className="w-5 h-5" /> },
    { 
      label: 'Scan', 
      view: 'scanner', 
      icon: <QrCode className="w-5 h-5 text-gold-400" />,
      isScanner: true 
    },
    { label: 'Scores', view: 'leaderboard', icon: <Trophy className="w-5 h-5" /> },
    { 
      label: 'Passes', 
      view: 'dashboard', 
      icon: <Ticket className="w-5 h-5" />,
      badge: registrations.length > 0 ? registrations.length : undefined
    },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090A0E]/95 backdrop-blur-lg border-t border-surface-border px-2 py-1.5 flex items-center justify-around">
      {tabs.map((tab) => {
        const isActive = currentView === tab.view;
        return (
          <button
            key={tab.label}
            onClick={() => {
              if (tab.isScanner) {
                setScannerModalOpen(true);
              } else {
                navigateTo(tab.view as any);
              }
            }}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded relative transition-colors ${
              isActive ? 'text-gold-400 font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            <div className="relative">
              {tab.icon}
              {tab.badge && (
                <span className="absolute -top-1 -right-2.5 w-4 h-4 rounded-full bg-gold-400 text-black text-[9px] font-mono font-bold flex items-center justify-center">
                  {tab.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] font-sans tracking-tight mt-0.5">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
