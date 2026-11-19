export interface LiveActivityEvent {
  id: string;
  timestamp: string;
  studentName: string;
  college: string;
  action: 'registered' | 'checked-in' | 'submitted' | 'shortlisted' | 'won';
  eventName: string;
}

export const livePulseStats = {
  activeStudentsNow: 184,
  eventsActive: 12,
  competitionsUnderway: 4,
  collegesConnected: 18,
  totalRegistrationsToday: 342,
  puneFootfallProjected: '18,500+'
};

export const liveActivityStream: LiveActivityEvent[] = [
  {
    id: 'act-1',
    timestamp: 'Just now',
    studentName: 'Rohan Deshmukh',
    college: 'MIT ACSC, Pune',
    action: 'checked-in',
    eventName: 'Innovyuh Hackathon 2026'
  },
  {
    id: 'act-2',
    timestamp: '2 mins ago',
    studentName: 'Tanvi Joshi',
    college: 'COEP Technological University',
    action: 'registered',
    eventName: 'Kshitij 2026'
  },
  {
    id: 'act-3',
    timestamp: '5 mins ago',
    studentName: 'Saurabh More',
    college: 'VIT Pune',
    action: 'submitted',
    eventName: 'TechBlitz Speed Coding'
  },
  {
    id: 'act-4',
    timestamp: '9 mins ago',
    studentName: 'Aditi Kulkarni',
    college: 'MIT ACSC, Pune',
    action: 'shortlisted',
    eventName: 'Google Developers Hackathon'
  },
  {
    id: 'act-5',
    timestamp: '14 mins ago',
    studentName: 'Kabir Nair',
    college: 'SICSR Symbiosis',
    action: 'registered',
    eventName: 'FinTech & Web3 Conclave'
  },
  {
    id: 'act-6',
    timestamp: '21 mins ago',
    studentName: 'Priyanka Shinde',
    college: 'PCCOE Pune',
    action: 'checked-in',
    eventName: 'Kshitij 2026'
  }
];

export const puneEventRadarNodes = [
  { id: 'radar-1', name: 'MIT ACSC (Alandi Hub)', coords: 'North Pune', activeEvents: 4, highlight: 'Kshitij & Innovyuh' },
  { id: 'radar-2', name: 'COEP (Shivajinagar)', coords: 'Central Pune', activeEvents: 2, highlight: 'MindSpark ’26' },
  { id: 'radar-3', name: 'MIT-WPU (Kothrud)', coords: 'West Pune', activeEvents: 2, highlight: 'HackVerse 4.0' },
  { id: 'radar-4', name: 'SICSR (Model Colony)', coords: 'Central Pune', activeEvents: 1, highlight: 'FinTech Conclave' },
  { id: 'radar-5', name: 'VIT (Bibwewadi)', coords: 'South Pune', activeEvents: 1, highlight: 'GraVITas Coding' },
  { id: 'radar-6', name: 'Fergusson & BMCC', coords: 'Deccan Gymkhana', activeEvents: 2, highlight: 'Astra & StartUp Vyapar' }
];

