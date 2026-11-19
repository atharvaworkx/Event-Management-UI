export type EventCategory = 
  | 'Hackathons'
  | 'IT Fests'
  | 'Coding'
  | 'Cultural'
  | 'Sports'
  | 'Workshops'
  | 'Seminars'
  | 'Competitions'
  | 'Entrepreneurship'
  | 'Gaming'
  | 'Other';

export type EventStatus = 
  | 'Registration Open'
  | 'Registration Closed'
  | 'Live Now'
  | 'Completed'
  | 'Upcoming';

export type EventMode = 'In-Person' | 'Hybrid' | 'Online';

export interface Sponsor {
  name: string;
  tier: 'Title Partner' | 'Platinum' | 'Gold' | 'Associate' | 'Community';
  domain: string;
}

export interface MentorJudge {
  name: string;
  role: string;
  org: string;
  avatarText: string;
}

export interface ScheduleItem {
  id: string;
  day: string;
  time: string;
  title: string;
  venue: string;
  speaker?: string;
  category: string;
  isHighlight?: boolean;
}

export interface PrizeItem {
  rank: string;
  title: string;
  reward: string;
  perks?: string;
}

export interface TrackItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  collegeId: string;
  collegeName: string;
  collegeLogoBadge: string;
  category: EventCategory;
  tagLine: string;
  description: string;
  fullAbout: string[];
  bannerImage: string;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  venue: string;
  mode: EventMode;
  teamSize: { min: number; max: number };
  entryFee: string;
  prizePool: string;
  prizes: PrizeItem[];
  tracks?: TrackItem[];
  schedule: ScheduleItem[];
  rules: string[];
  mentors?: MentorJudge[];
  judges?: MentorJudge[];
  sponsors?: Sponsor[];
  faqs: { q: string; a: string }[];
  contacts: { name: string; role: string; phone: string; email: string }[];
  status: EventStatus;
  isFeatured?: boolean;
  isFlagship?: boolean;
  registrationCount: number;
  maxSeats: number;
  subCompetitions?: string[];
  daysRemaining?: number;
}

export interface College {
  id: string;
  name: string;
  shortName: string;
  city: string;
  area: string;
  established: number;
  accreditation: string;
  description: string;
  featured: boolean;
  eventsCount: number;
  activeStudents: number;
  bannerImage: string;
  address: string;
  website: string;
  flagshipFest: string;
  metrics: {
    hackathonsHosted: number;
    trophiesWon: number;
    totalFootfall: string;
  };
}

export interface Registration {
  id: string;
  passId: string;
  eventId: string;
  eventTitle: string;
  collegeName: string;
  eventDate: string;
  eventVenue: string;
  category: EventCategory;
  registeredAt: string;
  status: 'Confirmed' | 'Checked In' | 'Shortlisted' | 'Winner';
  participationType: 'Individual' | 'Team';
  teamName?: string;
  teamMembers?: { name: string; email: string; role: string }[];
  participant: {
    name: string;
    email: string;
    phone: string;
    college: string;
    course: string;
    year: string;
    github?: string;
    linkedin?: string;
    portfolio?: string;
    projectIdea?: string;
  };
  qrCodeSignature: string;
}

export interface Announcement {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'Urgent' | 'Schedule' | 'Results' | 'General';
  publishedAt: string;
  collegeName: string;
  eventId?: string;
  eventTitle?: string;
  isPinned?: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  teamName: string;
  college: string;
  project: string;
  score: number;
  change: 'up' | 'down' | 'same';
  status: string;
  members: string[];
}

export interface EventLeaderboard {
  eventId: string;
  eventTitle: string;
  collegeName: string;
  category: string;
  updatedTime: string;
  totalParticipants: number;
  rankings: LeaderboardEntry[];
}

export interface CertificateItem {
  id: string;
  verificationId: string;
  title: string;
  recipientName: string;
  eventName: string;
  date: string;
  collegeName: string;
  type: 'Winner' | 'Runner Up' | 'Participation' | 'Special Recognition';
  issueDate: string;
  grade?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timeAgo: string;
  read: boolean;
  type: 'success' | 'alert' | 'info';
  linkTarget?: string;
}

