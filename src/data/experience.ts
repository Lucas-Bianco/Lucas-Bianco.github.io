// Lucas's resume as data. The Experience page renders this; other pages may import it.
// Facts only. Anything unknown is left out or marked `todo` so the page can show it.

export interface Job {
  id: string
  org: string
  role: string
  location: string
  start: string            // ISO date (YYYY-MM or YYYY-MM-DD)
  end: string | null       // null = current
  via?: string             // staffing agency etc.
  schedule?: string
  summary: string
  bullets: string[]
  todos?: string[]         // things Lucas still needs to fill in
}

export interface Role {
  id: string
  org: string
  role: string
  start: string            // year or ISO date
  end: string | null
  summary: string
  bullets: string[]
  link?: { href: string; label: string }
  todos?: string[]
}

export interface Education {
  school: string
  schoolShort: string
  program: string
  location: string
  start: number
  end: number
  gpa: string
  activities: string[]
  url?: string
}

export interface SkillGroup {
  id: string
  name: string
  skills: string[]
  usedOn: string           // where the skills were actually used, so depth is backed by facts
}

export const jobs: Job[] = [
  {
    id: 'dell',
    org: 'Dell Technologies',
    role: 'Co-op, Process Development',
    location: 'Franklin, MA',
    start: '2026-10',
    end: null,
    via: 'Hired through Manpower',
    schedule: 'Alternating weeks: one week at Dell, one week at school',
    summary:
      'I joined the Process Development team at Dell’s Franklin factory in October 2026 as a co-op, hired through Manpower. I’m only a few weeks in, so the details of what I work on are still coming.',
    bullets: [
      'Work on the alternating-week schedule with my Engineering Technology program: one week at Dell, one week at school.',
    ],
    todos: [
      'What you actually work on day to day (2 or 3 bullets)',
      'One specific thing you improved, measured or documented',
      'Tools or software you use there (only what you are allowed to share)',
    ],
  },
  {
    id: 'shaws',
    org: 'Shaw’s',
    role: 'Cashier and customer service',
    location: 'Medway, MA',
    start: '2025-07-26',
    end: null,
    summary:
      'My first job. Fast, repetitive, and very public, which turned out to be good practice for staying calm and accurate when there’s a line.',
    bullets: [
      'Ring up transactions quickly without letting accuracy slip, then balance my drawer at the end of every shift.',
      'Answer whatever customers ask, from where something is to why a price rang up wrong, and find the person who can fix it when I can’t.',
      'Got trained for more responsibility soon after I was hired.',
    ],
    todos: ['What the extra responsibility was (e.g. service desk, opening/closing, training others)'],
  },
]

export const leadership: Role[] = [
  {
    id: 'vex',
    org: 'VEX Robotics, team 3236A',
    role: 'Competitor since 2021, captain of 3236A',
    start: '2021',
    end: null,
    summary:
      'Six years of robotics, VEX since 2021. I captain high school team 3236A (2025-26), a team of 8.',
    bullets: [
      'Lead our design process, the robot code (C++ with EZ-Template), and competition strategy for the Push Back season.',
      'Led my middle school team to the VEX World Championship twice.',
    ],
    link: { href: '/projects/vex-3236a/', label: 'The VEX 3236A project' },
    todos: ['Worlds years and how you placed', 'One award or ranking from this season'],
  },
  {
    id: 'frc',
    org: 'Tri-County FRC',
    role: 'Co-founder, student leader',
    start: '2026',
    end: null,
    summary:
      'Relaunching our school’s FIRST Robotics Competition team from nothing with two other student leaders, aiming at the 2027 season (BIOCORE). We started with no robot and no budget, and we register as a rookie team.',
    bullets: [
      'Cold-emailed local companies to find sponsors.',
      'Ran a warm-up build, the "LeBron bot": a basketball shooter on a tank chassis, so the team learned to build before the real season.',
      'Set two team rules: ideas go on the board with no names, and anything we can test in under 10 minutes gets tested instead of argued about.',
      'Built the team website by hand in HTML and CSS.',
    ],
    link: { href: '/projects/tri-county-frc/', label: 'How we started the team' },
  },
  {
    id: 'hexaflow',
    org: 'HexaFlow, NASA HUNCH',
    role: 'Web development lead',
    start: '2025-09',
    end: null,
    summary:
      'HexaFlow is a NASA HUNCH finalist payload: a hexagonal grooved dome that uses capillary action to move water to a plant in microgravity.',
    bullets: [
      'Built the project site in Astro and Three.js, including an interactive 3D assembly viewer of the payload.',
      'Our payload went through a NASA drop test on August 6, 2026: 2.21 seconds of free fall.',
      'Presenting at the ASGSR conference in December 2026.',
    ],
    link: { href: '/projects/hexaflow/', label: 'The HexaFlow project' },
  },
  {
    id: 'freekicks',
    org: 'FreeKicks Special Olympics, Franklin MA',
    role: 'Volunteer',
    start: '2024',
    end: null,
    summary:
      'Teaching and playing soccer with kids of all abilities. I’ve played soccer for four years in high school, so this is the same game with a very different goal: everyone gets touches and everyone has fun.',
    bullets: [],
  },
]

export const education: Education = {
  school: 'Tri-County Regional Vocational Technical High School',
  schoolShort: 'Tri-County RVTHS',
  program: 'Engineering Technology',
  location: 'Franklin, MA',
  start: 2023,
  end: 2027,
  gpa: '3.95 unweighted',
  activities: [
    'SkillsUSA member',
    'VEX Robotics team captain',
    'Tri-County FRC co-founder',
    'Soccer, 4 years',
    'Indoor and outdoor track, 3 years',
  ],
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'cad',
    name: 'CAD and drawings',
    skills: ['SolidWorks', 'AutoCAD', 'Revit', 'Fusion', 'Tinkercad', 'CorelDRAW', 'Multisim', 'Reading technical drawings'],
    usedOn: 'Engineering Technology coursework, robot parts, 3D-print models. AutoCAD is certified.',
  },
  {
    id: 'shop',
    name: 'Shop and fabrication',
    skills: ['3D printing and slicing', 'CNC', 'Laser cutting', 'Precision measurement', 'OSHA 10'],
    usedOn: 'Two Bambu printers (X2D and A1, both with AMS) at home, school shop work, NC3 tape, rule and caliper certifications.',
  },
  {
    id: 'code',
    name: 'Programming',
    skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'HTML and CSS'],
    usedOn: 'C++ on the VEX robot, Python for the card scanner and Jarvis, HTML/CSS for the FRC site, JavaScript and Astro for HexaFlow, TypeScript for the card scanner app.',
  },
  {
    id: 'web',
    name: 'Frameworks and tools',
    skills: ['FastAPI', 'React', 'Svelte', 'Astro', 'Three.js', 'OpenCV', 'SQLite', 'Git'],
    usedOn: 'The Pokémon card scanner (FastAPI, React, OpenCV), Jarvis (FastAPI, Svelte), the HexaFlow site (Astro, Three.js), and this site.',
  },
  {
    id: 'hardware',
    name: 'Hardware and systems',
    skills: ['Raspberry Pi', 'Linux', 'PC building', 'Electronics', 'Electro-pneumatics and PLC basics'],
    usedOn: 'Jarvis is built for six Raspberry Pi 5s; the kiosk Pi is live first. PLC and pneumatics through the NC3 Mechatronics certification.',
  },
  {
    id: 'office',
    name: 'Everyday software',
    skills: ['Microsoft Office', 'Google Workspace'],
    usedOn: 'School, team planning, and sponsor outreach for FRC.',
  },
]

export const strengths: { name: string; proof: string }[] = [
  { name: 'Communication', proof: 'Cold-emailing companies for FRC sponsorship, and customer questions all shift at Shaw’s.' },
  { name: 'Leadership', proof: 'Captain of an 8-person VEX team, co-founder of an FRC team.' },
  { name: 'Critical thinking', proof: 'I test before I believe. On my card scanner I caught a method that "found" every card but was really returning the image border.' },
  { name: 'Organized', proof: 'School, a co-op on alternating weeks, a job, and two robotics teams at once.' },
  { name: 'Dedicated', proof: 'Six years of robotics and counting.' },
]

export const sports: string[] = ['Soccer, 4 years in high school', 'Indoor and outdoor track, 3 years', 'Weightlifting']
