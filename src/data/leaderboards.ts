import { EventLeaderboard } from '../types';

export const leaderboardsData: Record<string, EventLeaderboard> = {
  'innovyuh-2026': {
    eventId: 'innovyuh-2026',
    eventTitle: 'Innovyuh Hackathon 2026',
    collegeName: 'MIT Arts, Commerce & Science College, Pune',
    category: 'Hackathon',
    updatedTime: 'Live Standings • Round 2 Review',
    totalParticipants: 684,
    rankings: [
      {
        rank: 1,
        teamName: 'Team NexusPrime',
        college: 'MIT ACSC, Pune',
        project: 'KrishiAgent: Multi-Agent Localized Agronomic Advisory with Audio Interface',
        score: 98.4,
        change: 'up',
        status: 'Prototype Deployed',
        members: ['Devansh Mehta', 'Aditi Kulkarni', 'Saurabh Joshi', 'Pooja Patil']
      },
      {
        rank: 2,
        teamName: 'CognitiveByte',
        college: 'COEP Technological University',
        project: 'PulseTransit: Real-Time PMPML Bus Telemetry & Pothole Vision Engine',
        score: 96.8,
        change: 'same',
        status: 'Jury Evaluation',
        members: ['Rohan Shinde', 'Tanvi Mahajan', 'Pranav Kadam']
      },
      {
        rank: 3,
        teamName: 'ZeroHash Labs',
        college: 'SICSR Symbiosis',
        project: 'DhanShield: Instant Account Aggregator Risk Heuristics for Micro-SMEs',
        score: 95.2,
        change: 'up',
        status: 'Jury Evaluation',
        members: ['Kabir Deshmukh', 'Ananya Roy', 'Varun Nair']
      },
      {
        rank: 4,
        teamName: 'NeuralCrafters',
        college: 'VIT Pune',
        project: 'AyurScan: Optical Herb Identification & Formulation Ledger',
        score: 93.6,
        change: 'down',
        status: 'Code Freeze Verified',
        members: ['Siddharth Rao', 'Mitali Gadgil']
      },
      {
        rank: 5,
        teamName: 'AeroGrid',
        college: 'PCCOE Pune',
        project: 'GridFlow: Decentralized Solar Smart Meter Balancing Protocol',
        score: 92.1,
        change: 'same',
        status: 'Code Freeze Verified',
        members: ['Omkar More', 'Gaurav Patil', 'Sayali Kale']
      },
      {
        rank: 6,
        teamName: 'Solvix AI',
        college: 'MIT-WPU, Pune',
        project: 'NyayaSutra: Automated Citizen Court Docket Summarizer in Marathi',
        score: 90.7,
        change: 'up',
        status: 'Code Freeze Verified',
        members: ['Devashish Jagtap', 'Shruti Shinde']
      }
    ]
  },
  'it-fest-techblitz-2026': {
    eventId: 'it-fest-techblitz-2026',
    eventTitle: 'TechBlitz: Speed Coding Championship',
    collegeName: 'MIT Arts, Commerce & Science College, Pune',
    category: 'Coding',
    updatedTime: 'Round 3 Final Code Submissions',
    totalParticipants: 420,
    rankings: [
      {
        rank: 1,
        teamName: 'Chinmay Kulkarni',
        college: 'COEP Technological University',
        project: 'Optimal Dijkstra Variant in 14m 22s',
        score: 100.0,
        change: 'same',
        status: 'All Test Cases Passed',
        members: ['Chinmay Kulkarni']
      },
      {
        rank: 2,
        teamName: 'Devansh Mehta',
        college: 'MIT ACSC, Pune',
        project: 'DP Knapsack Bitmask Solver in 15m 08s',
        score: 98.5,
        change: 'up',
        status: 'All Test Cases Passed',
        members: ['Devansh Mehta']
      },
      {
        rank: 3,
        teamName: 'Snehal Deshpande',
        college: 'VIT Pune',
        project: 'Segment Tree Range Query in 17m 45s',
        score: 96.0,
        change: 'up',
        status: 'All Test Cases Passed',
        members: ['Snehal Deshpande']
      },
      {
        rank: 4,
        teamName: 'Aditya Wani',
        college: 'MIT ACSC, Pune',
        project: 'Trie Prefix Search Engine in 18m 10s',
        score: 94.0,
        change: 'down',
        status: 'All Test Cases Passed',
        members: ['Aditya Wani']
      },
      {
        rank: 5,
        teamName: 'Pratima Salve',
        college: 'Modern College Pune',
        project: 'Topological Sort DAG in 21m 02s',
        score: 89.5,
        change: 'same',
        status: '8/10 Test Cases',
        members: ['Pratima Salve']
      }
    ]
  }
};

export const campusCollegeLeaderboard = [
  {
    rank: 1,
    college: 'MIT Arts, Commerce & Science College, Pune',
    shortName: 'MIT ACSC',
    city: 'Pune',
    points: 4850,
    trophies: 14,
    registeredStudents: 1420,
    status: 'Leading Institution',
    badge: 'Flagship Hub'
  },
  {
    rank: 2,
    college: 'COEP Technological University',
    shortName: 'COEP Pune',
    city: 'Pune',
    points: 4420,
    trophies: 12,
    registeredStudents: 980,
    status: 'Active',
    badge: 'Heritage Tech'
  },
  {
    rank: 3,
    college: 'Vishwakarma Institute of Technology',
    shortName: 'VIT Pune',
    city: 'Pune',
    points: 3910,
    trophies: 9,
    registeredStudents: 790,
    status: 'Active',
    badge: 'Top Contender'
  },
  {
    rank: 4,
    college: 'Symbiosis Institute of Computer Studies & Research',
    shortName: 'SICSR Symbiosis',
    city: 'Pune',
    points: 3640,
    trophies: 7,
    registeredStudents: 640,
    status: 'Active',
    badge: 'IT & FinTech'
  },
  {
    rank: 5,
    college: 'MIT World Peace University',
    shortName: 'MIT-WPU',
    city: 'Pune',
    points: 3380,
    trophies: 6,
    registeredStudents: 710,
    status: 'Active',
    badge: 'Innovation Hub'
  },
  {
    rank: 6,
    college: 'Pimpri Chinchwad College of Engineering',
    shortName: 'PCCOE Pune',
    city: 'Pune',
    points: 3120,
    trophies: 5,
    registeredStudents: 590,
    status: 'Active',
    badge: 'Engineering'
  },
  {
    rank: 7,
    college: 'Dr. D. Y. Patil Institute (DYPIMCA)',
    shortName: 'D. Y. Patil Akurdi',
    city: 'Pune',
    points: 2980,
    trophies: 4,
    registeredStudents: 520,
    status: 'Active',
    badge: 'Sports & Code'
  },
  {
    rank: 8,
    college: 'Fergusson College (Autonomous)',
    shortName: 'Fergusson Pune',
    city: 'Pune',
    points: 2450,
    trophies: 3,
    registeredStudents: 480,
    status: 'Active',
    badge: 'Sciences'
  }
];

