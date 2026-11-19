import { EventItem } from '../types';

export const eventsData: EventItem[] = [
  {
    id: 'kshitij-2026',
    slug: 'kshitij-2026-mit-acsc',
    title: 'Kshitij 2026',
    collegeId: 'mit-acsc',
    collegeName: 'MIT Arts, Commerce & Science College, Pune',
    collegeLogoBadge: 'MIT ACSC',
    category: 'Cultural',
    tagLine: 'Western India’s Largest Inter-Collegiate Cultural & Techno-Academic Conclave',
    description: 'The monumental annual flagship festival of MIT ACSC, uniting over 4,500 collegiate innovators, artists, coders, and performers across Maharashtra. Featuring high-voltage technical battles, theatrical stages, fashion symphonies, battle of the bands, and celebrity keynote evenings.',
    fullAbout: [
      'Kshitij 2026 represents the pinnacle of campus celebration at MIT Arts, Commerce & Science College, Pune. Spanning three electrifying days across the serene Alandi campus, Kshitij creates an arena where technological ingenuity meets classical and contemporary artistic expression.',
      'Now in its 16th edition, Kshitij hosts 24 distinctive competitions across four thematic avenues: CyberCraft (Technical), Kalakriti (Fine & Performing Arts), Corporate Clash (Management & Pitching), and Rannbhoomi (E-sports & Sports). Over 45 colleges from Pune, Mumbai, Nashik, and Kolhapur participate under one grand banner.',
      'Participants receive national accreditation certificates, verified credential digital passes, instant stage scoring feeds, and exposure to leading corporate recruitment panels and creative talent scouts.'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
    startDate: 'March 12, 2026',
    endDate: 'March 14, 2026',
    registrationDeadline: 'March 08, 2026',
    venue: 'Swami Vivekananda Central Auditorium & Open Amphitheatre, MIT ACSC Campus, Alandi (D), Pune',
    mode: 'In-Person',
    teamSize: { min: 1, max: 8 },
    entryFee: '₹150 - ₹500 (Tiered by Competition)',
    prizePool: '₹3,50,000 + Trophies',
    prizes: [
      { rank: 'Grand Champion', title: 'Overall Institutional Trophy + Cash Prize', reward: '₹1,00,000', perks: 'Kshitij Golden Rolling Trophy & Feature on Pune Youth Times' },
      { rank: '1st Runner Up', title: 'Silver Trophy + Cash Prize', reward: '₹60,000', perks: 'Exclusive corporate vouchers & certificate of excellence' },
      { rank: '2nd Runner Up', title: 'Bronze Trophy + Cash Prize', reward: '₹40,000', perks: 'Corporate internship referrals' },
      { rank: 'Category Winners', title: 'Individual Category Laurels (Dance, Drama, Tech)', reward: '₹1,50,000 pool', perks: 'Memento & Gold Medalist Certificates' }
    ],
    schedule: [
      { id: 'k1', day: 'Day 1 - March 12', time: '08:30 AM', title: 'Grand Registration & Digital Pass Check-in', venue: 'North Atrium Lobby', category: 'Administrative' },
      { id: 'k2', day: 'Day 1 - March 12', time: '10:00 AM', title: 'Inaugural Lamp Lighting & Keynote by Industry Leaders', venue: 'Swami Vivekananda Auditorium', speaker: 'Dr. B. B. Waphare & Distinguished Guests', category: 'Keynote', isHighlight: true },
      { id: 'k3', day: 'Day 1 - March 12', time: '11:45 AM', title: 'CyberCraft: Inter-College Coding Eliminators', venue: 'Advanced Computer Lab 4', category: 'Technical' },
      { id: 'k4', day: 'Day 1 - March 12', time: '02:00 PM', title: 'Battle of Bands: Prelims', venue: 'Open Amphitheatre Stage', category: 'Cultural' },
      { id: 'k5', day: 'Day 2 - March 13', time: '09:30 AM', title: 'Shark Campus: Young Entrepreneurial Venture Pitch', venue: 'Seminar Hall 2', category: 'Business' },
      { id: 'k6', day: 'Day 2 - March 13', time: '01:30 PM', title: 'Step-Up: National Solo & Duet Western Dance', venue: 'Auditorium Main Stage', category: 'Cultural', isHighlight: true },
      { id: 'k7', day: 'Day 2 - March 13', time: '05:30 PM', title: 'Rhythm & Soul: Classical Instrumental Concert', venue: 'Open Amphitheatre', category: 'Cultural' },
      { id: 'k8', day: 'Day 3 - March 14', time: '10:00 AM', title: 'Grand Finale Street Play (Nukkad Natak)', venue: 'Central Courtyard', category: 'Drama' },
      { id: 'k9', day: 'Day 3 - March 14', time: '03:00 PM', title: 'Valedictory & Grand Trophy Distribution', venue: 'Swami Vivekananda Auditorium', category: 'Awards', isHighlight: true },
      { id: 'k10', day: 'Day 3 - March 14', time: '06:30 PM', title: 'Celebrity Musical Night & Star Performance', venue: 'University Grounds', category: 'Social', isHighlight: true }
    ],
    rules: [
      'Valid Institutional ID card and official Kshitij QR Digital Pass are mandatory for campus entry.',
      'Participants must report to designated venue desk at least 30 minutes prior to scheduled slot.',
      'No obscene gestures, defamatory dialogues, or hazardous props permitted on stage.',
      'Judges’ verdict is conclusive, audited, and strictly binding across all category rounds.',
      'Team leaders are accountable for team discipline and adherence to campus integrity guidelines.'
    ],
    mentors: [
      { name: 'Prof. Amol Mane', role: 'Faculty Convener, Student Affairs', org: 'MIT ACSC Pune', avatarText: 'AM' },
      { name: 'Dr. Shailendra K.', role: 'Head, Dept of Computer Science', org: 'MIT ACSC Pune', avatarText: 'SK' },
      { name: 'Meera Deshmukh', role: 'Cultural Producer & Theater Director', org: 'Pune Arts Guild', avatarText: 'MD' }
    ],
    judges: [
      { name: 'Vikramaditya Joshi', role: 'Renowned Choreographer & National Awardee', org: 'Sangeet Natak Akademi', avatarText: 'VJ' },
      { name: 'Rohit Kulkarni', role: 'VP Engineering & Tech Mentor', org: 'Persistent Systems', avatarText: 'RK' },
      { name: 'Ananya Sen', role: 'Senior Editor & Brand Strategist', org: 'Maharashtra Media Works', avatarText: 'AS' }
    ],
    sponsors: [
      { name: 'Bank of Maharashtra', tier: 'Title Partner', domain: 'Banking & Financial Partner' },
      { name: 'Persistent Systems', tier: 'Platinum', domain: 'Innovation & Tech Sponsor' },
      { name: 'Red Bull India', tier: 'Gold', domain: 'Energy & Beverage Partner' },
      { name: 'Radio Mirchi 98.3 FM', tier: 'Associate', domain: 'Official Radio Partner' }
    ],
    faqs: [
      { q: 'Can non-MIT ACSC students participate?', a: 'Yes! Kshitij is an open inter-collegiate national festival. Students from any recognized degree college across India can participate.' },
      { q: 'Is accommodation provided for outstation teams?', a: 'Subsidized hostel accommodation in Alandi is arranged for outstation teams with confirmed registrations upon early request.' },
      { q: 'Can one student enter multiple competitions?', a: 'Yes, provided the scheduled competition timings do not clash.' },
      { q: 'How do I obtain my event entry pass?', a: 'Immediately after completing the digital registration flow on this portal, your encrypted QR pass is issued with instant verification.' }
    ],
    contacts: [
      { name: 'Aditya Patil', role: 'General Secretary, Student Council', phone: '+91 98230 44129', email: 'aditya.patil@mitacsc.ac.in' },
      { name: 'Tanvi Kulkarni', role: 'Head of Registrations & Hospitality', phone: '+91 97654 88201', email: 'kshitij2026@mitacsc.ac.in' }
    ],
    status: 'Registration Open',
    isFeatured: true,
    isFlagship: true,
    registrationCount: 1428,
    maxSeats: 2500,
    subCompetitions: ['Battle of Bands', 'Step-Up Dance', 'CyberCraft Coding', 'Nukkad Natak', 'Shark Campus Pitch', 'Canvas Painting', 'FIFA E-Sports'],
    daysRemaining: 14
  },
  {
    id: 'innovyuh-2026',
    slug: 'innovyuh-hackathon-2026-mit-acsc',
    title: 'Innovyuh Hackathon 2026',
    collegeId: 'mit-acsc',
    collegeName: 'MIT Arts, Commerce & Science College, Pune',
    collegeLogoBadge: 'MIT ACSC',
    category: 'Hackathons',
    tagLine: '36-Hour National Level Hackathon: Engineering Intelligent Systems for Bharat',
    description: 'The flagship national hackathon of MIT ACSC. 36 hours of relentless engineering, prototyping, and mentorship from top silicon-valley and Indian deep-tech leaders. Solve high-impact problems across Agentic AI, FinTech, Green Mobility, and Smart Governance.',
    fullAbout: [
      'Innovyuh Hackathon 2026 is MIT ACSC’s premier 36-hour continuous in-person hacking marathon. Designed to push the boundaries of undergraduate software and hardware innovation, Innovyuh brings together 500 hand-picked developers, designers, and domain enthusiasts.',
      'Supported by leading venture partners, tech firms, and open-source foundations, teams develop working prototypes from scratch. With 24/7 high-speed fiber connectivity, dedicated hardware benches, continuous food & coffee bars, and 3 rounds of rigorous mentor reviews, this is Pune’s most respected collegiate hackathon.',
      'Top prototypes will receive direct seed grant evaluations, cloud credits worth $25,000, and fast-tracked interview opportunities with sponsor enterprises.'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    startDate: 'March 20, 2026',
    endDate: 'March 22, 2026',
    registrationDeadline: 'March 15, 2026',
    venue: 'MIT ACSC Innovation Hub & High-Performance Computing Labs, Alandi Campus, Pune',
    mode: 'In-Person',
    teamSize: { min: 2, max: 4 },
    entryFee: 'Free (Shortlisting Based)',
    prizePool: '₹2,50,000 + Cloud Grants',
    prizes: [
      { rank: '1st Prize (Grand Winner)', title: 'Cash Prize + Incubation Fellowship', reward: '₹1,25,000', perks: 'Direct entry into MIT ACSC Incubation Cell + $10,000 AWS/GCP credits' },
      { rank: '2nd Prize (Runner Up)', title: 'Cash Prize + Hardware Kit', reward: '₹75,000', perks: 'Raspberry Pi 5 Developer Kits + Cloud vouchers' },
      { rank: '3rd Prize', title: 'Cash Prize + Tech Subscriptions', reward: '₹35,000', perks: '1-Year GitHub Enterprise & JetBrains Licenses' },
      { rank: 'Best All-Women Team', title: 'Women In Tech Excellence Trophy', reward: '₹15,000', perks: 'Special recognition certificate and mentor network' }
    ],
    tracks: [
      {
        id: 't-ai',
        title: 'Autonomous & Agentic AI',
        description: 'Multi-agent frameworks, local LLM orchestration, intelligent automation for agriculture, healthcare diagnostics, and vernacular language interfaces.',
        technologies: ['LangChain', 'Llama 3', 'FastAPI', 'Vector DBs', 'Python']
      },
      {
        id: 't-fin',
        title: 'Next-Gen FinTech & Fraud Shield',
        description: 'UPI fraud detection, micro-credit scoring for informal gig workers, algorithmic risk assessment, and decentralized identity for KYC.',
        technologies: ['Account Aggregator API', 'Rust', 'PostgreSQL', 'Zero Knowledge', 'WebSockets']
      },
      {
        id: 't-green',
        title: 'CleanTech & Urban Mobility',
        description: 'PMPML smart transit routing, EV battery telemetry analytics, decentralized solar grid balancing, and municipal waste mapping.',
        technologies: ['IoT telemetry', 'MQTT', 'Mapbox GL', 'Node.js', 'React']
      },
      {
        id: 't-gov',
        title: 'Open Civic Tech & GovTech',
        description: 'Citizen grievance transparency, automated RTI summarization, road pothole vision detection with dashcam streams.',
        technologies: ['YOLOv8', 'OpenCV', 'Next.js', 'PostGIS']
      }
    ],
    schedule: [
      { id: 'i1', day: 'March 20', time: '04:00 PM', title: 'Check-in, Hacker Kit Handout & Setup', venue: 'Innovation Hub Lobby', category: 'Admin' },
      { id: 'i2', day: 'March 20', time: '06:00 PM', title: 'Opening Ceremony & Track Briefing', venue: 'Auditorium', speaker: 'Chief Architect, NVIDIA India', category: 'Keynote', isHighlight: true },
      { id: 'i3', day: 'March 20', time: '08:00 PM', title: 'Hacking Begins (Timer Starts)', venue: 'Labs 1, 2, 3 & 4', category: 'Hackathon', isHighlight: true },
      { id: 'i4', day: 'March 20', time: '11:30 PM', title: 'Midnight Pizza & Lightning Idea Sprint', venue: 'Cafeteria Lawn', category: 'Social' },
      { id: 'i5', day: 'March 21', time: '08:00 AM', title: 'Mentorship Checkpoint 1 (Architecture Review)', venue: 'Team Tables', category: 'Mentorship' },
      { id: 'i6', day: 'March 21', time: '04:00 PM', title: 'Mentorship Checkpoint 2 (Feasibility & Demo Check)', venue: 'Team Tables', category: 'Mentorship' },
      { id: 'i7', day: 'March 22', time: '08:00 AM', title: 'Code Freeze & GitHub Repository Submissions', venue: 'Portal', category: 'Deadline', isHighlight: true },
      { id: 'i8', day: 'March 22', time: '10:00 AM', title: 'Top 10 Finalists Live Stage Pitching', venue: 'Auditorium Main Stage', category: 'Judging', isHighlight: true },
      { id: 'i9', day: 'March 22', time: '02:00 PM', title: 'Grand Awards & Winner Announcement', venue: 'Auditorium', category: 'Awards', isHighlight: true }
    ],
    rules: [
      'All code, assets, and documentation must be authored solely during the 36-hour hackathon period.',
      'Public open-source libraries, frameworks, and foundational APIs are allowed with clear attribution.',
      'Plagiarized projects or pre-built repositories will result in immediate disqualification.',
      'Every team must maintain a public Git repository with regular commits throughout the hackathon.',
      'At least 2 team members must be present during both mentor evaluation checkpoints.'
    ],
    mentors: [
      { name: 'Dr. Rahul V. Bhosale', role: 'Staff Machine Learning Engineer', org: 'Google Cloud India', avatarText: 'RB' },
      { name: 'Sneha Chivate', role: 'Director of Product', org: 'Razorpay Pune', avatarText: 'SC' },
      { name: 'Varun Kulkarni', role: 'Principal Architect', org: 'Cisco Systems', avatarText: 'VK' },
      { name: 'Pooja Hegde', role: 'Lead DevOps & Cloud Consultant', org: 'Red Hat', avatarText: 'PH' }
    ],
    judges: [
      { name: 'Amitabh Sinha', role: 'CTO & Co-founder', org: 'Synthetica AI', avatarText: 'AS' },
      { name: 'Dr. Padmavati S.', role: 'Professor Emeritus, Department of CS', org: 'SPPU Pune', avatarText: 'PS' },
      { name: 'Gaurav Patil', role: 'Partner & Seed Investor', org: 'Maharashtra Seed Capital Fund', avatarText: 'GP' }
    ],
    sponsors: [
      { name: 'GitHub Campus', tier: 'Title Partner', domain: 'Developer Platform' },
      { name: 'Google Cloud', tier: 'Platinum', domain: 'Cloud & AI Infrastructure' },
      { name: 'MongoDB', tier: 'Gold', domain: 'Database Partner' },
      { name: 'Postman', tier: 'Gold', domain: 'API Testing & Tooling' }
    ],
    faqs: [
      { q: 'Is there any registration fee?', a: 'No, Innovyuh Hackathon is 100% free for shortlisted candidates.' },
      { q: 'Can students from different colleges form a joint team?', a: 'Yes! Cross-college teams are wholeheartedly encouraged.' },
      { q: 'Is food and stay provided for 36 hours?', a: 'Yes, full meals, refreshments, energy drinks, and dedicated rest zones are provided on campus free of cost.' },
      { q: 'What should we bring with us?', a: 'Laptops, chargers, extension cords, valid college ID, student digital pass, and any hardware components needed for your prototype.' }
    ],
    contacts: [
      { name: 'Kavya Deshmukh', role: 'Lead Student Organizer & Tech Head', phone: '+91 98231 77410', email: 'kavya.tech@mitacsc.ac.in' },
      { name: 'Dr. Anupama Patil', role: 'Faculty Hackathon Coordinator', phone: '+91 94220 18374', email: 'innovyuh@mitacsc.ac.in' }
    ],
    status: 'Registration Open',
    isFeatured: true,
    isFlagship: true,
    registrationCount: 684,
    maxSeats: 800,
    daysRemaining: 22
  },
  {
    id: 'google-developers-hackathon',
    slug: 'google-developers-hackathon-2026-mit-acsc',
    title: 'Google Developers Hackathon',
    collegeId: 'mit-acsc',
    collegeName: 'MIT Arts, Commerce & Science College, Pune',
    collegeLogoBadge: 'MIT ACSC x GDG',
    category: 'Hackathons',
    tagLine: 'Build with Gemini & Cloud: The Official GDG on Campus Hackathon',
    description: 'Powered by Google Developer Groups on Campus (MIT ACSC Chapter). An intensive 24-hour hackathon focused on Gemini Multimodal API, Gemma Open Models, Firebase Studio, and Vertex AI. Build next-generation applications with direct developer mentorship.',
    fullAbout: [
      'Google Developers Hackathon at MIT ACSC is organized in partnership with Google Developer Groups (GDG) Pune and GDG on Campus MIT ACSC. The hackathon gathers 350+ developers to push the envelope of Applied GenAI, Flutter multi-platform engineering, and Google Cloud solutions.',
      'Participants will gain free hands-on access to Vertex AI sandboxes, Gemini 1.5 Pro / Flash tokens, and guidance from verified Google Developer Experts (GDEs) stationed right on the venue floor.',
      'Winners get official Google Developer swag, digital badges on Google Developer Profile, and direct nominations to Google Solution Challenge Regional Finals.'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
    startDate: 'April 04, 2026',
    endDate: 'April 05, 2026',
    registrationDeadline: 'March 28, 2026',
    venue: 'Google Developer Labs & Seminar Hall 1, MIT ACSC Campus, Alandi, Pune',
    mode: 'In-Person',
    teamSize: { min: 2, max: 4 },
    entryFee: 'Free',
    prizePool: '₹1,75,000 + Google Swag',
    prizes: [
      { rank: '1st Place Winner', title: 'Cash Prize + Google Pixel Devices', reward: '₹80,000', perks: 'Google Pixel 8a + GDE Mentorship Sessions + Official Trophy' },
      { rank: '2nd Place Runner Up', title: 'Cash Prize + Nest Smart Displays', reward: '₹50,000', perks: 'Nest Hub 2nd Gen + Cloud Vouchers' },
      { rank: '3rd Place', title: 'Cash Prize + Google Home Audio', reward: '₹30,000', perks: 'Google Home Mini + Certificate of Merit' },
      { rank: 'Best Multimodal Gemini App', title: 'Gemini Frontier Innovation Award', reward: '₹15,000', perks: 'Exclusive GDG Global Swag Box' }
    ],
    tracks: [
      {
        id: 'gdg-t1',
        title: 'Multimodal Generative Assistants with Gemini',
        description: 'Applications that process audio, video streams, documents, and real-time vision using Gemini API with function calling.',
        technologies: ['Gemini 1.5 Flash', 'Vertex AI', 'Python SDK', 'React Native']
      },
      {
        id: 'gdg-t2',
        title: 'Edge AI with Gemma & MediaPipe',
        description: 'Running lightweight local models completely on device for offline healthcare, privacy-first note taking, and education.',
        technologies: ['Gemma 2B/7B', 'MediaPipe', 'WebAssembly', 'Flutter']
      },
      {
        id: 'gdg-t3',
        title: 'Cloud-Native Scalable Microservices',
        description: 'Serverless event-driven systems using Google Cloud Run, Cloud Functions, Pub/Sub, and Firebase Dataconnect.',
        technologies: ['Cloud Run', 'Firebase', 'Go', 'Docker', 'GraphQL']
      }
    ],
    schedule: [
      { id: 'g1', day: 'April 04', time: '09:00 AM', title: 'Participant Badge Pickup & Coffee Networking', venue: 'GDG Lab Entrance', category: 'Admin' },
      { id: 'g2', day: 'April 04', time: '10:30 AM', title: 'Keynote & Gemini API Masterclass', venue: 'Seminar Hall 1', speaker: 'Google Developer Expert (AI/ML)', category: 'Workshop', isHighlight: true },
      { id: 'g3', day: 'April 04', time: '12:00 PM', title: 'Hackathon Commences (24-Hour Clock Starts)', venue: 'Central Computing Floor', category: 'Hacking' },
      { id: 'g4', day: 'April 04', time: '08:00 PM', title: 'Mentor Office Hours: Vertex AI Architecture Review', venue: 'Breakout Rooms', category: 'Mentorship' },
      { id: 'g5', day: 'April 05', time: '12:00 PM', title: 'Hacking Ends & Project Demos to Jury', venue: 'Demo Arena', category: 'Judging', isHighlight: true },
      { id: 'g6', day: 'April 05', time: '03:30 PM', title: 'Awards Ceremony & Swag Distribution', venue: 'Seminar Hall 1', category: 'Awards', isHighlight: true }
    ],
    rules: [
      'Each team must include at least one Google developer technology (Gemini API, Google Cloud, Firebase, Flutter, or Android).',
      'Original source code repository must be uploaded to GitHub with Apache 2.0 or MIT License.',
      'Live working prototype is mandatory during the final presentation—no PowerPoint-only submissions allowed.'
    ],
    mentors: [
      { name: 'Kunal Verma', role: 'Google Developer Expert - Machine Learning', org: 'GDG Community', avatarText: 'KV' },
      { name: 'Priyanka Shete', role: 'Tech Lead - Cloud Solutions', org: 'Cognizant Pune', avatarText: 'PS' }
    ],
    judges: [
      { name: 'Siddheshwar Sonawane', role: 'Principal Architect', org: 'Wipro AI Practice', avatarText: 'SS' },
      { name: 'Dr. Radhika Joshi', role: 'Associate Professor, AI & DS', org: 'MIT ACSC Pune', avatarText: 'RJ' }
    ],
    sponsors: [
      { name: 'Google Developers', tier: 'Title Partner', domain: 'Official Developer Ecosystem' },
      { name: 'Firebase', tier: 'Platinum', domain: 'App Development Platform' }
    ],
    faqs: [
      { q: 'Will API keys and cloud credits be given?', a: 'Yes, special workshop API tokens and Google Cloud Sandbox accounts will be provisioned on-site.' },
      { q: 'Who is eligible to participate?', a: 'Any bona fide undergraduate or postgraduate student across any college in Maharashtra.' }
    ],
    contacts: [
      { name: 'Omkar Shinde', role: 'GDG on Campus MIT ACSC Organizer', phone: '+91 91580 32910', email: 'gdg@mitacsc.ac.in' }
    ],
    status: 'Registration Open',
    isFeatured: true,
    isFlagship: true,
    registrationCount: 312,
    maxSeats: 350,
    daysRemaining: 37
  },
  {
    id: 'it-fest-techblitz-2026',
    slug: 'it-fest-techblitz-2026-mit-acsc',
    title: 'IT Fest: TechBlitz 2026',
    collegeId: 'mit-acsc',
    collegeName: 'MIT Arts, Commerce & Science College, Pune',
    collegeLogoBadge: 'MIT ACSC',
    category: 'IT Fests',
    tagLine: 'Annual National Mega-Tournament of Algorithmic & Creative Computing',
    description: 'Organized by the Department of Computer Science & Information Technology, MIT ACSC. Featuring 8 distinct competitive arenas: Speed Coding, Web Development Sprint, Bug Bounty Debugging, Tech Quiz, UI/UX Redesign, Valorant Gaming, Project Showcase, and Tech Poster Presentation.',
    fullAbout: [
      'TechBlitz is the cornerstone technical festival of MIT ACSC, renowned across SPPU Pune for rigorous competition standards, automated leaderboard evaluation, and real-time audience displays.',
      'Whether you are an algorithmic wizard optimizing dynamic programming subroutines, a frontend stylist crafting pixel-perfect interfaces, a cybersecurity enthusiast dissecting stack traces for bugs, or a high-rank tactician in e-sports, TechBlitz offers a dedicated competitive arena.',
      'Over 1,200 participants clash across two days for departmental glory, cash rewards, and placement referral passes.'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80',
    startDate: 'February 27, 2026',
    endDate: 'February 28, 2026',
    registrationDeadline: 'February 25, 2026',
    venue: 'Computer Labs Complex (Labs 1 to 6) & Academic Quadrangle, MIT ACSC, Pune',
    mode: 'In-Person',
    teamSize: { min: 1, max: 3 },
    entryFee: '₹100 per competition / participant',
    prizePool: '₹1,50,000 + Medals',
    prizes: [
      { rank: 'Best Technical Institution', title: 'TechBlitz Overall Institutional Trophy', reward: '₹40,000', perks: 'Rotating Gold Cup + Certificates' },
      { rank: 'Speed Coding Winner', title: 'Algorithm Maestro 2026', reward: '₹20,000', perks: 'Mechanical Keyboard + Trophy' },
      { rank: 'Web Development Champion', title: 'Fullstack Prodigy Cup', reward: '₹20,000', perks: 'Web Hosting Credits + Trophy' },
      { rank: 'Bug Hunting & Debugging', title: 'Code Crusader Award', reward: '₹15,000', perks: 'Hardware Toolkit + Medal' },
      { rank: 'UI/UX Design Challenge', title: 'Design Virtuoso Award', reward: '₹15,000', perks: 'Figma Annual Pro License + Medal' },
      { rank: 'E-Sports Champions (Valorant)', title: 'Cyber Arena Trophy', reward: '₹25,000', perks: 'Gaming Peripherals + Medal' }
    ],
    subCompetitions: [
      'Speed Coding Challenge (C++ / Java / Python)',
      'Web Development Sprint (HTML / CSS / JS / React)',
      'Bug Bounty & Reverse Debugging',
      'National Tech Quiz (IT, AI, Hardware History)',
      'UI/UX Design Challenge (Figma Live Prototyping)',
      'Gaming Arena: Valorant & BGMI Tournament',
      'Final Year Project Showcase & Research Expo',
      'Technical Poster & Paper Presentation'
    ],
    schedule: [
      { id: 'tb1', day: 'Feb 27', time: '09:00 AM', title: 'Inauguration & Keynote by Tech Alumni', venue: 'Auditorium', category: 'Keynote' },
      { id: 'tb2', day: 'Feb 27', time: '10:30 AM', title: 'Round 1: Speed Coding Eliminators', venue: 'Lab 1 & 2', category: 'Coding', isHighlight: true },
      { id: 'tb3', day: 'Feb 27', time: '11:00 AM', title: 'Live UI/UX Design Sprint (Theme Announcement)', venue: 'Multimedia Lab', category: 'Design' },
      { id: 'tb4', day: 'Feb 27', time: '02:00 PM', title: 'Tech Quiz Stage Prelims & Buzzer Round', venue: 'Seminar Hall 3', category: 'Quiz' },
      { id: 'tb5', day: 'Feb 28', time: '09:30 AM', title: 'Bug Hunting & Code Deconstruction Finals', venue: 'Lab 3', category: 'Debugging', isHighlight: true },
      { id: 'tb6', day: 'Feb 28', time: '11:30 AM', title: 'Project Showcase Evaluation by Industry Panel', venue: 'Central Quadrangle', category: 'Exhibition' },
      { id: 'tb7', day: 'Feb 28', time: '02:30 PM', title: 'Valorant Finals (Big Screen Live Cast)', venue: 'Auditorium', category: 'Gaming', isHighlight: true },
      { id: 'tb8', day: 'Feb 28', time: '05:00 PM', title: 'Grand Valedictory & Medal Distribution', venue: 'Auditorium', category: 'Awards', isHighlight: true }
    ],
    rules: [
      'Speed Coding uses automated test harnesses on HackerRank/LeetCode custom problem instances.',
      'Internet access is strictly locked to evaluation portals during coding and debugging rounds.',
      'UI/UX prototypes must be submitted with a public Figma link before the 3-hour deadline.',
      'College ID card is compulsory.'
    ],
    mentors: [
      { name: 'Prof. Vikas Mahandule', role: 'Faculty Head, IT Fest', org: 'MIT ACSC Pune', avatarText: 'VM' },
      { name: 'Pratiksha Shinde', role: 'Senior UX Designer', org: 'Infosys Design Studio', avatarText: 'PS' }
    ],
    judges: [
      { name: 'Nikhil Rane', role: 'Lead Architect', org: 'Tata Consultancy Services', avatarText: 'NR' },
      { name: 'Mahesh Gaikwad', role: 'Security Researcher', org: 'Quick Heal Technologies', avatarText: 'MG' }
    ],
    sponsors: [
      { name: 'JetBrains', tier: 'Platinum', domain: 'Developer Tools' },
      { name: 'Quick Heal', tier: 'Gold', domain: 'Cyber Security' }
    ],
    faqs: [
      { q: 'Can I register on-the-spot?', a: 'On-spot registration is subject to lab PC availability. Online pre-registration guarantees your seat slot.' },
      { q: 'Are standard IDEs provided?', a: 'Yes, VS Code, IntelliJ IDEA, Code::Blocks, Python 3.12, and Node.js are pre-installed on all lab workstations.' }
    ],
    contacts: [
      { name: 'Rohan Deshmukh', role: 'Student Secretary, TechBlitz', phone: '+91 97300 12891', email: 'techblitz@mitacsc.ac.in' }
    ],
    status: 'Registration Open',
    isFeatured: true,
    isFlagship: true,
    registrationCount: 914,
    maxSeats: 1200,
    daysRemaining: 8
  },
  {
    id: 'mindspark-2026-coep',
    slug: 'mindspark-2026-coep',
    title: 'MindSpark ’26: Autonomous Robotics & Code',
    collegeId: 'coep',
    collegeName: 'COEP Technological University',
    collegeLogoBadge: 'COEP Pune',
    category: 'Competitions',
    tagLine: 'National Level Technical Extravaganza with BattleBots & Algo Sprints',
    description: 'COEP’s prestigious national technical extravaganza. Featuring high-intensity RoboWars, drone obstacle navigation, AI algorithmic challenge, and structural civil engineering models.',
    fullAbout: [
      'MindSpark is one of Western India’s longest-running technical festivals, hosted in the historic heritage campus of COEP Technological University in Shivajinagar, Pune.',
      'Featuring heavyweight combat robotics in an armored cage, autonomous line-following drones, and algorithmic programming marathons evaluated by national tech luminaries.'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80',
    startDate: 'March 27, 2026',
    endDate: 'March 29, 2026',
    registrationDeadline: 'March 22, 2026',
    venue: 'COEP Main Ground & Boat Club, Shivajinagar, Pune',
    mode: 'In-Person',
    teamSize: { min: 1, max: 4 },
    entryFee: '₹200 - ₹600',
    prizePool: '₹2,20,000',
    prizes: [
      { rank: 'RoboWars Champion', title: 'Heavyweight Combat Winner', reward: '₹75,000', perks: 'MindSpark Golden Trophy' },
      { rank: 'AlgoSprint Winner', title: 'Algorithms Laureate', reward: '₹40,000', perks: 'Internship Opportunity' }
    ],
    schedule: [
      { id: 'ms1', day: 'Day 1', time: '10:00 AM', title: 'Inauguration & Keynote', venue: 'Main Auditorium', category: 'Keynote' },
      { id: 'ms2', day: 'Day 1', time: '02:00 PM', title: 'Combat Robotics Heats', venue: 'Armored Arena', category: 'Robotics', isHighlight: true }
    ],
    rules: ['Bot specifications must adhere to weight class specifications (30kg/15kg).', 'Robo safety check is mandatory before entering the combat cage.'],
    faqs: [{ q: 'Can school students participate?', a: 'Junior college (11th/12th) and engineering degree students are welcome.' }],
    contacts: [{ name: 'Sanket Joshi', role: 'MindSpark Convener', phone: '+91 98811 23412', email: 'mindspark@coep.org.in' }],
    status: 'Registration Open',
    registrationCount: 420,
    maxSeats: 600,
    daysRemaining: 29
  },
  {
    id: 'fintech-conclave-symbiosis',
    slug: 'fintech-conclave-2026-symbiosis',
    title: 'FinTech & Web3 Conclave 2026',
    collegeId: 'symbiosis',
    collegeName: 'SICSR Symbiosis, Model Colony, Pune',
    collegeLogoBadge: 'SICSR',
    category: 'Seminars',
    tagLine: 'Decentralized Finance, Tokenization & RBI Regulatory Frameworks',
    description: 'Symbiosis Institute of Computer Studies & Research brings top economists, blockchain architects, and venture capital partners to dissect the future of payment gateways, DeFi, and digital rupee infrastructure.',
    fullAbout: [
      'SICSR Pune hosts this high-profile technical and financial summit, connecting student researchers with executive architects from NPCI, Visa, and prominent crypto hedge funds.'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80',
    startDate: 'April 11, 2026',
    endDate: 'April 12, 2026',
    registrationDeadline: 'April 05, 2026',
    venue: 'Atur Centre Auditorium, Model Colony, Pune',
    mode: 'Hybrid',
    teamSize: { min: 1, max: 2 },
    entryFee: '₹250 (Student Concession)',
    prizePool: '₹1,00,000 + Venture Pitch Grants',
    prizes: [
      { rank: 'Best Research Paper', title: 'FinTech Paper of the Year', reward: '₹50,000', perks: 'Springer Journal Publication' },
      { rank: 'Best Web3 DApp Prototype', title: 'DeFi Innovator Award', reward: '₹50,000', perks: 'Venture Incubation Review' }
    ],
    schedule: [
      { id: 'sc1', day: 'April 11', time: '09:30 AM', title: 'Keynote: The Architecture of Digital Rupee (e-Rupee)', venue: 'Main Auditorium', category: 'Keynote' }
    ],
    rules: ['All academic papers must maintain less than 10% similarity index.'],
    faqs: [{ q: 'Is virtual attendance possible?', a: 'Yes, keynote tracks will be live-streamed with interactive Q&A.' }],
    contacts: [{ name: 'Dr. Neha Sharma', role: 'Faculty Lead', phone: '+91 98223 99810', email: 'fintech@sicsr.ac.in' }],
    status: 'Registration Open',
    registrationCount: 238,
    maxSeats: 300,
    daysRemaining: 44
  },
  {
    id: 'hackverse-mit-wpu',
    slug: 'hackverse-4-mit-wpu',
    title: 'HackVerse 4.0: Generative Worlds',
    collegeId: 'mit-wpu',
    collegeName: 'MIT World Peace University, Pune',
    collegeLogoBadge: 'MIT-WPU',
    category: 'Hackathons',
    tagLine: '48-Hour National Hackathon in Spatial Computing & Generative AI',
    description: 'A 48-hour student hackathon hosted at MIT-WPU Kothrud campus focusing on XR, Apple Vision Pro spatial UI, WebXR, and open generative foundation models.',
    fullAbout: [
      'HackVerse 4.0 invites creators and developers to build immersive 3D spatial computing tools and autonomous simulations for the next generation of digital interaction.'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1400&q=80',
    startDate: 'April 18, 2026',
    endDate: 'April 20, 2026',
    registrationDeadline: 'April 10, 2026',
    venue: 'MIT-WPU Student Activity Centre, Kothrud, Pune',
    mode: 'In-Person',
    teamSize: { min: 2, max: 4 },
    entryFee: 'Free',
    prizePool: '₹2,00,000 + VR Headsets',
    prizes: [
      { rank: '1st Winner', title: 'Meta Quest 3 + Cash Reward', reward: '₹1,00,000', perks: 'Incubation Support' }
    ],
    schedule: [
      { id: 'hv1', day: 'April 18', time: '11:00 AM', title: 'Kickoff & API Demonstrations', venue: 'SAC Hall', category: 'Keynote' }
    ],
    rules: ['Prototypes must run locally or in cloud sandbox with test credentials.'],
    faqs: [{ q: 'Do we get VR hardware on rent?', a: 'Testing stations with Quest 2/3 headsets are available at the venue.' }],
    contacts: [{ name: 'Akash Deshpande', role: 'Head Convener', phone: '+91 97665 11200', email: 'hackverse@mitwpu.edu.in' }],
    status: 'Upcoming',
    registrationCount: 185,
    maxSeats: 400,
    daysRemaining: 51
  },
  {
    id: 'gravitas-vit-pune',
    slug: 'gravitas-2026-vit-pune',
    title: 'GraVITas National Coding Championship',
    collegeId: 'vit-pune',
    collegeName: 'Vishwakarma Institute of Technology, Bibwewadi',
    collegeLogoBadge: 'VIT Pune',
    category: 'Coding',
    tagLine: 'Extreme Algorithmic Marathon with 12 Hardcore Competitive Problem Sets',
    description: 'A fast-paced algorithmic coding duel designed for the top 1% programmers in Maharashtra. Solve dynamic programming, graph routing, and string theory challenges under strict time and memory limits.',
    fullAbout: [
      'GraVITas brings the competitive programming atmosphere of ACM ICPC to Pune. Tested on real-time automated judge servers with anti-cheat telemetry.'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80',
    startDate: 'March 05, 2026',
    endDate: 'March 05, 2026',
    registrationDeadline: 'March 03, 2026',
    venue: 'Central Computer Center, VIT Pune Campus, Bibwewadi',
    mode: 'In-Person',
    teamSize: { min: 1, max: 2 },
    entryFee: '₹150',
    prizePool: '₹80,000',
    prizes: [
      { rank: '1st Place', title: 'GraVITas Grand Laureate', reward: '₹40,000', perks: 'Product Engineering Interview' }
    ],
    schedule: [
      { id: 'gv1', day: 'March 05', time: '10:00 AM', title: 'Round 1: Rapid Fire Syntax & Pointers', venue: 'Lab 1', category: 'Coding' }
    ],
    rules: ['Languages permitted: C++, C, Java, Python 3.'],
    faqs: [{ q: 'Is partial credit allowed?', a: 'Yes, subtasks award points based on test-case weightage.' }],
    contacts: [{ name: 'Karthik Rao', role: 'Coding Club Lead', phone: '+91 98220 77123', email: 'gravitas@vit.edu' }],
    status: 'Registration Open',
    registrationCount: 390,
    maxSeats: 500,
    daysRemaining: 15
  },
  {
    id: 'startup-vyapar-bmcc',
    slug: 'startup-vyapar-2026-bmcc',
    title: 'StartUp Vyapar 2026: Youth Angel Pitch',
    collegeId: 'bmcc',
    collegeName: 'Brihan Maharashtra College of Commerce, Pune',
    collegeLogoBadge: 'BMCC Pune',
    category: 'Entrepreneurship',
    tagLine: 'Pitch Your Venture to Pune’s Premier Angel Investors & VCs',
    description: 'BMCC’s annual business plan competition bringing together college founders with revenue-generating or MVP-ready commercial ventures. Pitch live before angel syndicates and business mentors.',
    fullAbout: [
      'StartUp Vyapar transforms student concepts into scalable companies. Featuring unit-economics critiques, pitch deck evaluations, and direct term sheet discussions.'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80',
    startDate: 'March 18, 2026',
    endDate: 'March 19, 2026',
    registrationDeadline: 'March 12, 2026',
    venue: 'BMCC Main Auditorium & Incubation Cell, FC Road, Pune',
    mode: 'In-Person',
    teamSize: { min: 1, max: 3 },
    entryFee: '₹300 / team',
    prizePool: '₹1,50,000 Seed Grant',
    prizes: [
      { rank: 'Winner', title: 'Angel Seed Grant & Incubation', reward: '₹80,000', perks: '6 Months Free Co-Working Desk in Pune' }
    ],
    schedule: [
      { id: 'sv1', day: 'March 18', time: '10:00 AM', title: 'Elevator Pitches (3 Mins Each)', venue: 'Auditorium', category: 'Pitch' }
    ],
    rules: ['Teams must submit a 10-slide pitch deck in PDF format.'],
    faqs: [{ q: 'Does the company need to be registered?', a: 'No, pre-incorporation ideas and prototypes are also eligible.' }],
    contacts: [{ name: 'Aniket Shah', role: 'E-Cell President', phone: '+91 99750 44219', email: 'ecell@bmcc.ac.in' }],
    status: 'Registration Open',
    registrationCount: 164,
    maxSeats: 200,
    daysRemaining: 20
  },
  {
    id: 'astra-science-fergusson',
    slug: 'astra-science-fergusson-2026',
    title: 'Astra: National Science & Astrophysics Conclave',
    collegeId: 'fergusson',
    collegeName: 'Fergusson College (Autonomous), Pune',
    collegeLogoBadge: 'Fergusson',
    category: 'Seminars',
    tagLine: 'Stargazing, Deep Space Optics & Quantum Computing Colloquium',
    description: 'In collaboration with IUCAA Pune. A three-day scientific exhibition featuring astronomical telescopes, radio-astronomy data workshops, and talks by ISRO astrophysics scientists.',
    fullAbout: [
      'Hosted under the shaded historic banyan trees of Fergusson College, Astra is Pune’s most beloved pure-science symposium combining sky-watching camps with mathematical computing.'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80',
    startDate: 'March 25, 2026',
    endDate: 'March 27, 2026',
    registrationDeadline: 'March 20, 2026',
    venue: 'Amphitheatre & Physics Observatory, Fergusson College, Pune',
    mode: 'In-Person',
    teamSize: { min: 1, max: 2 },
    entryFee: '₹100',
    prizePool: '₹60,000 + Science Grants',
    prizes: [
      { rank: 'Best Research Poster', title: 'C.V. Raman Science Medal', reward: '₹25,000', perks: 'IUCAA Observatory Pass' }
    ],
    schedule: [
      { id: 'as1', day: 'March 25', time: '06:30 PM', title: 'Night Sky Observation through 14-inch Dobsonian', venue: 'Observatory Terrace', category: 'Astronomy', isHighlight: true }
    ],
    rules: ['Observatory slots strictly adhere to safety lights protocols.'],
    faqs: [{ q: 'Is prior physics background required?', a: 'Open to all science, technology, and inquisitive students.' }],
    contacts: [{ name: 'Prof. S. Kelkar', role: 'Convener', phone: '+91 94225 67890', email: 'astra@fergusson.edu' }],
    status: 'Registration Open',
    registrationCount: 310,
    maxSeats: 450,
    daysRemaining: 27
  }
];

