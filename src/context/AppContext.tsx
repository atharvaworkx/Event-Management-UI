import React, { createContext, useContext, useState, useEffect } from 'react';
import { Announcement, College, EventItem, NotificationItem, Registration } from '../types';
import { eventsData } from '../data/events';
import { collegesData } from '../data/colleges';
import { announcementsData } from '../data/announcements';
import { initialRegistrations, mockCertificates, mockNotifications, mockStudentProfile } from '../data/student';

export type ViewType = 
  | 'home' 
  | 'events' 
  | 'event-detail' 
  | 'colleges' 
  | 'college-detail' 
  | 'schedule' 
  | 'leaderboard' 
  | 'announcements' 
  | 'dashboard' 
  | 'organizer' 
  | 'admin'
  | 'scanner';

export type UserRole = 'student' | 'organizer' | 'admin';

interface CheckInLog {
  id: string;
  passId: string;
  studentName: string;
  college: string;
  eventTitle: string;
  timestamp: string;
  status: 'Verified' | 'Duplicate' | 'Invalid';
  gate: string;
}

interface AppContextType {
  currentView: ViewType;
  selectedEventId: string | null;
  selectedCollegeId: string | null;
  userRole: UserRole;
  events: EventItem[];
  colleges: College[];
  announcements: Announcement[];
  registrations: Registration[];
  bookmarks: string[];
  notifications: NotificationItem[];
  searchModalOpen: boolean;
  registrationModalOpen: boolean;
  registeringEvent: EventItem | null;
  activePassModal: Registration | null;
  scannerModalOpen: boolean;
  checkInLogs: CheckInLog[];
  searchQuery: string;
  
  // Actions
  navigateTo: (view: ViewType, id?: string) => void;
  setUserRole: (role: UserRole) => void;
  toggleBookmark: (eventId: string) => void;
  isBookmarked: (eventId: string) => boolean;
  openRegistration: (event: EventItem) => void;
  closeRegistration: () => void;
  submitRegistration: (data: Omit<Registration, 'id' | 'passId' | 'registeredAt' | 'qrCodeSignature' | 'status'>) => Registration;
  openPassModal: (reg: Registration) => void;
  closePassModal: () => void;
  setSearchModalOpen: (open: boolean) => void;
  setSearchQuery: (q: string) => void;
  setScannerModalOpen: (open: boolean) => void;
  processCheckIn: (codeOrPassId: string) => { success: boolean; message: string; record?: CheckInLog };
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  getEventById: (id: string) => EventItem | undefined;
  getCollegeById: (id: string) => College | undefined;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedEventId, setSelectedEventId] = useState<string | null>('kshitij-2026');
  const [selectedCollegeId, setSelectedCollegeId] = useState<string | null>('mit-acsc');
  const [userRole, setUserRole] = useState<UserRole>('student');
  const [events, setEvents] = useState<EventItem[]>(eventsData);
  const [colleges] = useState<College[]>(collegesData);
  const [announcements] = useState<Announcement[]>(announcementsData);
  
  // Local storage loaded or defaults
  const [registrations, setRegistrations] = useState<Registration[]>(() => {
    const saved = localStorage.getItem('ems_registrations');
    return saved ? JSON.parse(saved) : initialRegistrations;
  });

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem('ems_bookmarks');
    return saved ? JSON.parse(saved) : mockStudentProfile.bookmarks;
  });

  const [notifications, setNotifications] = useState<NotificationItem[]>(mockNotifications);
  
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [registeringEvent, setRegisteringEvent] = useState<EventItem | null>(null);
  const [activePassModal, setActivePassModal] = useState<Registration | null>(null);
  const [scannerModalOpen, setScannerModalOpen] = useState(false);

  const [checkInLogs, setCheckInLogs] = useState<CheckInLog[]>([
    {
      id: 'chk-1',
      passId: 'INN-26-00421',
      studentName: 'Atharva Warankar',
      college: 'MIT ACSC, Pune',
      eventTitle: 'Innovyuh Hackathon 2026',
      timestamp: 'Today at 09:42 AM',
      status: 'Verified',
      gate: 'Innovation Hub North Gate'
    },
    {
      id: 'chk-2',
      passId: 'KSH-26-00914',
      studentName: 'Rohan Deshmukh',
      college: 'COEP Pune',
      eventTitle: 'Kshitij 2026',
      timestamp: 'Today at 09:30 AM',
      status: 'Verified',
      gate: 'Main Quadrangle Gate A'
    }
  ]);

  // Persist registrations & bookmarks
  useEffect(() => {
    localStorage.setItem('ems_registrations', JSON.stringify(registrations));
  }, [registrations]);

  useEffect(() => {
    localStorage.setItem('ems_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Scroll to top on navigation
  const navigateTo = (view: ViewType, id?: string) => {
    if (view === 'event-detail' && id) {
      setSelectedEventId(id);
    }
    if (view === 'college-detail' && id) {
      setSelectedCollegeId(id);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleBookmark = (eventId: string) => {
    setBookmarks(prev => 
      prev.includes(eventId) ? prev.filter(id => id !== eventId) : [...prev, eventId]
    );
  };

  const isBookmarked = (eventId: string) => bookmarks.includes(eventId);

  const openRegistration = (event: EventItem) => {
    setRegisteringEvent(event);
    setRegistrationModalOpen(true);
  };

  const closeRegistration = () => {
    setRegistrationModalOpen(false);
    setRegisteringEvent(null);
  };

  const submitRegistration = (data: Omit<Registration, 'id' | 'passId' | 'registeredAt' | 'qrCodeSignature' | 'status'>): Registration => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const eventPrefix = data.eventTitle.slice(0, 3).toUpperCase();
    const passId = `${eventPrefix}-26-${randomSuffix}`;
    const newReg: Registration = {
      ...data,
      id: `reg-${Date.now()}`,
      passId,
      status: 'Confirmed',
      registeredAt: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      qrCodeSignature: `EMS-TICKET-${passId}-${Date.now()}`
    };

    setRegistrations(prev => [newReg, ...prev]);

    // increment event registration count in state
    setEvents(prev => prev.map(ev => ev.id === data.eventId ? { ...ev, registrationCount: ev.registrationCount + 1 } : ev));

    // add notification
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: `Registration Confirmed: ${data.eventTitle}`,
      message: `Your VIP pass has been issued (${passId}). See your Digital Pass in the dashboard.`,
      timeAgo: 'Just now',
      read: false,
      type: 'success',
      linkTarget: 'pass'
    };
    setNotifications(prev => [newNotif, ...prev]);

    return newReg;
  };

  const openPassModal = (reg: Registration) => {
    setActivePassModal(reg);
  };

  const closePassModal = () => {
    setActivePassModal(null);
  };

  const processCheckIn = (codeOrPassId: string): { success: boolean; message: string; record?: CheckInLog } => {
    const trimmed = codeOrPassId.trim().toUpperCase();
    // find matching registration by passId or signature or sample matches
    const foundReg = registrations.find(r => r.passId.toUpperCase() === trimmed || r.qrCodeSignature.toUpperCase() === trimmed || trimmed.includes(r.passId.toUpperCase()));

    if (foundReg) {
      // Check if already checked in
      const alreadyChecked = checkInLogs.some(l => l.passId === foundReg.passId && l.status === 'Verified');
      const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      const newLog: CheckInLog = {
        id: `chk-${Date.now()}`,
        passId: foundReg.passId,
        studentName: foundReg.participant.name,
        college: foundReg.participant.college,
        eventTitle: foundReg.eventTitle,
        timestamp: `Today at ${nowTime}`,
        status: alreadyChecked ? 'Duplicate' : 'Verified',
        gate: 'Main Campus Checkpost #1'
      };

      setCheckInLogs(prev => [newLog, ...prev]);

      if (alreadyChecked) {
        return {
          success: false,
          message: `Warning: Pass ${foundReg.passId} was already scanned previously.`,
          record: newLog
        };
      }

      // Mark registration status as Checked In
      setRegistrations(prev => prev.map(r => r.id === foundReg.id ? { ...r, status: 'Checked In' } : r));

      return {
        success: true,
        message: `Entry verified successfully for ${foundReg.participant.name}.`,
        record: newLog
      };
    } else {
      // Create fallback valid verification for Atharva Warankar if typed generic pass
      const defaultPass = 'KSH-26-01482';
      if (trimmed === defaultPass || trimmed.includes('01482')) {
        const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newLog: CheckInLog = {
          id: `chk-${Date.now()}`,
          passId: defaultPass,
          studentName: 'Atharva Warankar',
          college: 'MIT Arts, Commerce & Science College, Pune',
          eventTitle: 'Kshitij 2026',
          timestamp: `Today at ${nowTime}`,
          status: 'Verified',
          gate: 'Auditorium Gate 1'
        };
        setCheckInLogs(prev => [newLog, ...prev]);
        return {
          success: true,
          message: 'Entry verified successfully for Atharva Warankar.',
          record: newLog
        };
      }

      const invalidLog: CheckInLog = {
        id: `chk-${Date.now()}`,
        passId: trimmed || 'UNKNOWN-PASS',
        studentName: 'Unregistered Visitor',
        college: 'Unrecognized Institution',
        eventTitle: 'Invalid Event',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'Invalid',
        gate: 'Main Campus Checkpost'
      };
      setCheckInLogs(prev => [invalidLog, ...prev]);

      return {
        success: false,
        message: 'Invalid or unverified pass credential. Please report to the Help Desk.',
        record: invalidLog
      };
    }
  };

  const markNotificationRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const getEventById = (id: string) => events.find(e => e.id === id || e.slug === id);
  const getCollegeById = (id: string) => colleges.find(c => c.id === id);

  return (
    <AppContext.Provider
      value={{
        currentView,
        selectedEventId,
        selectedCollegeId,
        userRole,
        events,
        colleges,
        announcements,
        registrations,
        bookmarks,
        notifications,
        searchModalOpen,
        registrationModalOpen,
        registeringEvent,
        activePassModal,
        scannerModalOpen,
        checkInLogs,
        searchQuery,
        navigateTo,
        setUserRole,
        toggleBookmark,
        isBookmarked,
        openRegistration,
        closeRegistration,
        submitRegistration,
        openPassModal,
        closePassModal,
        setSearchModalOpen,
        setSearchQuery,
        setScannerModalOpen,
        processCheckIn,
        markNotificationRead,
        markAllNotificationsRead,
        getEventById,
        getCollegeById
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

