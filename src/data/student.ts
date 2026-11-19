import { CertificateItem, NotificationItem, Registration } from '../types';

export const mockStudentProfile = {
  name: 'Devansh Mehta',
  email: 'devansh.mehta@mitacsc.ac.in',
  phone: '+91 98765 43210',
  college: 'MIT Arts, Commerce & Science College, Pune',
  collegeShort: 'MIT ACSC',
  course: 'B.Sc. Computer Science',
  year: 'Third Year (TY)',
  prnNumber: '1120230894B',
  avatarInitials: 'DM',
  streakCount: 6,
  totalEventsParticipated: 8,
  trophiesWon: 3,
  bookmarks: ['kshitij-2026', 'innovyuh-2026', 'google-developers-hackathon'],
  interests: ['Autonomous AI', 'System Design', 'Competitive Coding', 'Hackathons', 'Cloud Architecture']
};

export const initialRegistrations: Registration[] = [
  {
    id: 'reg-ksh-26',
    passId: 'KSH-26-01482',
    eventId: 'kshitij-2026',
    eventTitle: 'Kshitij 2026',
    collegeName: 'MIT Arts, Commerce & Science College, Pune',
    eventDate: 'March 12 - 14, 2026',
    eventVenue: 'Swami Vivekananda Central Auditorium, MIT ACSC, Alandi (D), Pune',
    category: 'Cultural',
    registeredAt: '2026-02-15 11:24 AM',
    status: 'Confirmed',
    participationType: 'Team',
    teamName: 'CyberCrafters Pune',
    teamMembers: [
      { name: 'Devansh Mehta', email: 'devansh.mehta@mitacsc.ac.in', role: 'Team Lead' },
      { name: 'Aditi Kulkarni', email: 'aditi.k@mitacsc.ac.in', role: 'Developer' },
      { name: 'Saurabh Joshi', email: 'saurabh.j@mitacsc.ac.in', role: 'Designer' }
    ],
    participant: {
      name: 'Devansh Mehta',
      email: 'devansh.mehta@mitacsc.ac.in',
      phone: '+91 98765 43210',
      college: 'MIT Arts, Commerce & Science College, Pune',
      course: 'B.Sc. Computer Science',
      year: 'Third Year (TY)',
      github: 'https://github.com/devansh-mehta',
      linkedin: 'https://linkedin.com/in/devansh-mehta',
      portfolio: 'https://devansh.mehta.dev'
    },
    qrCodeSignature: 'EMS-MITACSC-KSH-26-01482-AUTH-SIG'
  },
  {
    id: 'reg-inn-26',
    passId: 'INN-26-00421',
    eventId: 'innovyuh-2026',
    eventTitle: 'Innovyuh Hackathon 2026',
    collegeName: 'MIT Arts, Commerce & Science College, Pune',
    eventDate: 'March 20 - 22, 2026',
    eventVenue: 'MIT ACSC Innovation Hub, Alandi Campus, Pune',
    category: 'Hackathons',
    registeredAt: '2026-02-10 03:45 PM',
    status: 'Checked In',
    participationType: 'Team',
    teamName: 'Team NexusPrime',
    teamMembers: [
      { name: 'Devansh Mehta', email: 'devansh.mehta@mitacsc.ac.in', role: 'Lead Architect' },
      { name: 'Aditi Kulkarni', email: 'aditi.k@mitacsc.ac.in', role: 'ML Engineer' },
      { name: 'Saurabh Joshi', email: 'saurabh.j@mitacsc.ac.in', role: 'Frontend Lead' },
      { name: 'Pooja Patil', email: 'pooja.patil@mitacsc.ac.in', role: 'Backend Dev' }
    ],
    participant: {
      name: 'Devansh Mehta',
      email: 'devansh.mehta@mitacsc.ac.in',
      phone: '+91 98765 43210',
      college: 'MIT Arts, Commerce & Science College, Pune',
      course: 'B.Sc. Computer Science',
      year: 'Third Year (TY)',
      github: 'https://github.com/devansh-mehta',
      linkedin: 'https://linkedin.com/in/devansh-mehta',
      portfolio: 'https://devansh.mehta.dev',
      projectIdea: 'KrishiAgent: Localized multi-agent agronomic copilot using offline LLMs.'
    },
    qrCodeSignature: 'EMS-MITACSC-INN-26-00421-VERIFIED'
  },
  {
    id: 'reg-tb-26',
    passId: 'TB-26-00912',
    eventId: 'it-fest-techblitz-2026',
    eventTitle: 'IT Fest: TechBlitz 2026',
    collegeName: 'MIT Arts, Commerce & Science College, Pune',
    eventDate: 'February 27 - 28, 2026',
    eventVenue: 'Computer Labs Complex, MIT ACSC, Pune',
    category: 'IT Fests',
    registeredAt: '2026-02-04 09:12 AM',
    status: 'Confirmed',
    participationType: 'Individual',
    participant: {
      name: 'Devansh Mehta',
      email: 'devansh.mehta@mitacsc.ac.in',
      phone: '+91 98765 43210',
      college: 'MIT Arts, Commerce & Science College, Pune',
      course: 'B.Sc. Computer Science',
      year: 'Third Year (TY)'
    },
    qrCodeSignature: 'EMS-MITACSC-TB-26-00912-ACTIVE'
  }
];

export const mockCertificates: CertificateItem[] = [
  {
    id: 'cert-1',
    verificationId: 'MITACSC-INN25-W-019',
    title: 'Grand Winner - 1st Place',
    recipientName: 'Devansh Mehta',
    eventName: 'Innovyuh Hackathon 2025',
    date: 'March 24, 2025',
    collegeName: 'MIT Arts, Commerce & Science College, Pune',
    type: 'Winner',
    issueDate: 'March 28, 2025',
    grade: 'A+ (Score: 97.5/100)'
  },
  {
    id: 'cert-2',
    verificationId: 'MITACSC-TB25-RC-044',
    title: 'Speed Coding Laureate - 2nd Place',
    recipientName: 'Devansh Mehta',
    eventName: 'TechBlitz IT Fest 2025',
    date: 'February 22, 2025',
    collegeName: 'MIT Arts, Commerce & Science College, Pune',
    type: 'Runner Up',
    issueDate: 'February 26, 2025',
    grade: 'Speed Index: 12m 45s'
  },
  {
    id: 'cert-3',
    verificationId: 'COEP-MS25-P-882',
    title: 'Certificate of National Participation',
    recipientName: 'Devansh Mehta',
    eventName: 'MindSpark ’25: AlgoSprint',
    date: 'October 14, 2025',
    collegeName: 'COEP Technological University',
    type: 'Participation',
    issueDate: 'October 20, 2025',
    grade: 'Rank 7 out of 380'
  }
];

export const mockNotifications: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Entry Pass Verified & Ready',
    message: 'Your official VIP Digital Pass for Kshitij 2026 is verified and activated. Pass ID: KSH-26-01482.',
    timeAgo: '20 mins ago',
    read: false,
    type: 'success',
    linkTarget: 'pass'
  },
  {
    id: 'notif-2',
    title: 'Team NexusPrime Shortlisted!',
    message: 'Your team has been shortlisted into the Top 12 of Innovyuh Hackathon 2026. Review checkpoint schedule.',
    timeAgo: '2 hours ago',
    read: false,
    type: 'info',
    linkTarget: 'innovyuh-2026'
  },
  {
    id: 'notif-3',
    title: 'Kshitij 2026 Schedule Updated',
    message: 'Opening ceremony venue confirmed at Swami Vivekananda Auditorium. Reporting time: 08:30 AM.',
    timeAgo: '1 day ago',
    read: true,
    type: 'alert',
    linkTarget: 'kshitij-2026'
  },
  {
    id: 'notif-4',
    title: 'TechBlitz Speed Coding Slot Assigned',
    message: 'Your workstation assignment is Lab 2, Terminal #18 for the Speed Coding Round on Feb 27.',
    timeAgo: '2 days ago',
    read: true,
    type: 'info',
    linkTarget: 'it-fest-techblitz-2026'
  }
];
