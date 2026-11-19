import { College } from '../types';

export const collegesData: College[] = [
  {
    id: 'mit-acsc',
    name: 'MIT Arts, Commerce & Science College',
    shortName: 'MIT ACSC',
    city: 'Pune',
    area: 'Alandi (Devachi), Pune',
    established: 2007,
    accreditation: 'NAAC "A+" Grade Accredited (CGPA 3.39) | Affiliated to SPPU',
    description: 'Premier institution in Pune offering benchmark education in Computer Science, Information Technology, Data Science, Artificial Intelligence, Business Administration, and Applied Arts. Renowned for hosting Western India’s premier collegiate hackathons and annual mega-festivals.',
    featured: true,
    eventsCount: 14,
    activeStudents: 4820,
    bannerImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80',
    address: 'MIT ACSC Campus, Dehu Phata, Alandi (D), Pune - 412105, Maharashtra, India',
    website: 'https://mitacsc.ac.in',
    flagshipFest: 'Kshitij 2026 & Innovyuh Hackathon',
    metrics: {
      hackathonsHosted: 18,
      trophiesWon: 64,
      totalFootfall: '38,000+'
    }
  },
  {
    id: 'coep',
    name: 'COEP Technological University',
    shortName: 'COEP Pune',
    city: 'Pune',
    area: 'Shivajinagar, Pune',
    established: 1854,
    accreditation: 'Autonomous University | Tier-1 Technical Institute',
    description: 'One of Asia’s oldest technical institutes with legendary engineering heritage, hosting MindSpark technical festival and robotics championships.',
    featured: false,
    eventsCount: 8,
    activeStudents: 4200,
    bannerImage: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80',
    address: 'Wellesley Road, Shivajinagar, Pune - 411005',
    website: 'https://coep.org.in',
    flagshipFest: 'MindSpark Technical Expo',
    metrics: {
      hackathonsHosted: 24,
      trophiesWon: 92,
      totalFootfall: '25,000+'
    }
  },
  {
    id: 'symbiosis',
    name: 'Symbiosis Institute of Computer Studies & Research',
    shortName: 'SICSR Symbiosis',
    city: 'Pune',
    area: 'Atur Centre, Model Colony, Pune',
    established: 1985,
    accreditation: 'Deemed University | NAAC "A++" Grade',
    description: 'Pioneering IT and management institution renowned for national fintech conclaves, cyber-security symposiums, and entrepreneurship summits.',
    featured: false,
    eventsCount: 6,
    activeStudents: 3100,
    bannerImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80',
    address: 'Atur Centre, Gokhale Cross Road, Model Colony, Pune - 411016',
    website: 'https://sicsr.ac.in',
    flagshipFest: 'FinTech & Web3 Conclave',
    metrics: {
      hackathonsHosted: 12,
      trophiesWon: 45,
      totalFootfall: '15,000+'
    }
  },
  {
    id: 'mit-wpu',
    name: 'MIT World Peace University',
    shortName: 'MIT-WPU',
    city: 'Pune',
    area: 'Paud Road, Kothrud, Pune',
    established: 1983,
    accreditation: 'Private State University | UGC Approved',
    description: 'Sprawling campus in Kothrud hosting grand cultural extravaganzas, inter-disciplinary research symposiums, and national software hackathons.',
    featured: false,
    eventsCount: 7,
    activeStudents: 7500,
    bannerImage: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1400&q=80',
    address: 'Survey No. 124, Paud Road, Kothrud, Pune - 411038',
    website: 'https://mitwpu.edu.in',
    flagshipFest: 'HackVerse 4.0 & Aarohan',
    metrics: {
      hackathonsHosted: 16,
      trophiesWon: 58,
      totalFootfall: '30,000+'
    }
  },
  {
    id: 'dy-patil',
    name: 'Dr. D. Y. Patil Institute of Master of Computer Applications & Management',
    shortName: 'D. Y. Patil Akurdi',
    city: 'Pune',
    area: 'Sector 29, Nigdi Pradhikaran, Akurdi, Pune',
    established: 2002,
    accreditation: 'NAAC "A" Grade | AICTE Approved',
    description: 'Prominent education hub in Pimpri-Chinchwad hosting mega sports tournaments, algorithmic challenge leagues, and industry-sponsored tech summits.',
    featured: false,
    eventsCount: 5,
    activeStudents: 3800,
    bannerImage: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=80',
    address: 'D. Y. Patil Educational Complex, Akurdi, Pune - 411044',
    website: 'https://dypimca.ac.in',
    flagshipFest: 'TechNexus & Parakram Sports',
    metrics: {
      hackathonsHosted: 10,
      trophiesWon: 39,
      totalFootfall: '18,000+'
    }
  },
  {
    id: 'vit-pune',
    name: 'Vishwakarma Institute of Technology',
    shortName: 'VIT Pune',
    city: 'Pune',
    area: 'Bibwewadi, Pune',
    established: 1983,
    accreditation: 'Autonomous Institute | NAAC "A++" Grade',
    description: 'High-octane engineering college celebrated for Melange annual fest and GraVITas national level coding challenges.',
    featured: false,
    eventsCount: 6,
    activeStudents: 4100,
    bannerImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80',
    address: '666, Upper Indiranagar, Bibwewadi, Pune - 411037',
    website: 'https://vit.edu',
    flagshipFest: 'Melange & GraVITas Tech',
    metrics: {
      hackathonsHosted: 15,
      trophiesWon: 62,
      totalFootfall: '22,000+'
    }
  },
  {
    id: 'pccoe',
    name: 'Pimpri Chinchwad College of Engineering',
    shortName: 'PCCOE Pune',
    city: 'Pune',
    area: 'Sector 26, Pradhikaran, Nigdi, Pune',
    established: 1999,
    accreditation: 'Autonomous | NBA & NAAC "A" Grade',
    description: 'Key research-focused institution known for technical paper presentations, CodeStorm programming marathon, and automotive fests.',
    featured: false,
    eventsCount: 4,
    activeStudents: 3600,
    bannerImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
    address: 'Sector 26, Pradhikaran, Nigdi, Pune - 411044',
    website: 'https://pccoepune.com',
    flagshipFest: 'CodeStorm 2026',
    metrics: {
      hackathonsHosted: 11,
      trophiesWon: 34,
      totalFootfall: '14,000+'
    }
  },
  {
    id: 'fergusson',
    name: 'Fergusson College (Autonomous)',
    shortName: 'Fergusson Pune',
    city: 'Pune',
    area: 'FC Road, Deccan Gymkhana, Pune',
    established: 1885,
    accreditation: 'Heritage Autonomous College | NAAC "A" Grade',
    description: 'Iconic heritage campus on FC Road hosting literary festivals, astronomical exhibitions, and mathematical symposiums.',
    featured: false,
    eventsCount: 4,
    activeStudents: 5200,
    bannerImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80',
    address: 'FC Road, Deccan Gymkhana, Pune - 411004',
    website: 'https://fergusson.edu',
    flagshipFest: 'Astra Science & Astronomy Fest',
    metrics: {
      hackathonsHosted: 5,
      trophiesWon: 41,
      totalFootfall: '20,000+'
    }
  },
  {
    id: 'bmcc',
    name: 'Brihan Maharashtra College of Commerce',
    shortName: 'BMCC Pune',
    city: 'Pune',
    area: 'Shivajinagar, Pune',
    established: 1943,
    accreditation: 'Autonomous College | NAAC "A+" Grade',
    description: 'Premier commerce and management institution hosting national business plan competitions, stock market simulation games, and e-summits.',
    featured: false,
    eventsCount: 3,
    activeStudents: 3900,
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    address: '845, BMCC Road, Shivajinagar, Pune - 411004',
    website: 'https://bmcc.ac.in',
    flagshipFest: 'StartUp Vyapar 2026',
    metrics: {
      hackathonsHosted: 7,
      trophiesWon: 30,
      totalFootfall: '12,000+'
    }
  }
];

