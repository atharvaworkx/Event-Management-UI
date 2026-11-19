import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileNav } from './components/layout/MobileNav';

// Modals
import { SearchModal } from './components/modals/SearchModal';
import { RegistrationModal } from './components/modals/RegistrationModal';
import { DigitalPassModal } from './components/modals/DigitalPassModal';
import { ScannerModal } from './components/modals/ScannerModal';

// Pages
import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { CollegesPage } from './pages/CollegesPage';
import { CollegeDetailPage } from './pages/CollegeDetailPage';
import { SchedulePage } from './pages/SchedulePage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { AnnouncementsPage } from './pages/AnnouncementsPage';
import { StudentDashboard } from './pages/StudentDashboard';
import { OrganizerDashboard } from './pages/OrganizerDashboard';
import { AdminPanel } from './pages/AdminPanel';

const MainContent: React.FC = () => {
  const { currentView } = useApp();

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage />;
      case 'events':
        return <EventsPage />;
      case 'event-detail':
        return <EventDetailPage />;
      case 'colleges':
        return <CollegesPage />;
      case 'college-detail':
        return <CollegeDetailPage />;
      case 'schedule':
        return <SchedulePage />;
      case 'leaderboard':
        return <LeaderboardPage />;
      case 'announcements':
        return <AnnouncementsPage />;
      case 'dashboard':
        return <StudentDashboard />;
      case 'organizer':
        return <OrganizerDashboard />;
      case 'admin':
        return <AdminPanel />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090A0E] text-[#F5F3EF]">
      <Navbar />
      
      <main className="flex-1">
        {renderView()}
      </main>

      <Footer />
      <MobileNav />

      {/* Global Overlays & Modals */}
      <SearchModal />
      <RegistrationModal />
      <DigitalPassModal />
      <ScannerModal />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
};

export default App;
