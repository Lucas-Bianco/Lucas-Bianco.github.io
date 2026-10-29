// Timeline events, oldest first. date is 'YYYY-MM' or 'YYYY'.
// label overrides how the date reads on the page (for ranges like "Aug to Sep").
// todo = a short note shown highlighted for Lucas to fill in.

export type TimelineCategory = 'school' | 'robotics' | 'work' | 'project' | 'cert' | 'volunteer'

export interface TimelineEvent {
  date: string
  label?: string
  title: string
  detail: string
  category: TimelineCategory
  href?: string
  upcoming?: boolean
  todo?: string
}

export const timelineCategories: { id: TimelineCategory; label: string }[] = [
  { id: 'robotics', label: 'Robotics' },
  { id: 'project', label: 'Projects' },
  { id: 'work', label: 'Work' },
  { id: 'school', label: 'School' },
  { id: 'cert', label: 'Certifications' },
  { id: 'volunteer', label: 'Volunteering' },
]

export const timeline: TimelineEvent[] = [
  {
    date: '2021',
    title: 'Started VEX Robotics in middle school',
    detail: 'First competition robot team. I have been on a robotics team every year since.',
    category: 'robotics',
    href: '/robotics/',
  },
  {
    date: '2022',
    title: 'VEX World Championship with my middle school team',
    detail: 'Led the team to Worlds for the first time.',
    category: 'robotics',
    href: '/robotics/',
    todo: 'year to confirm, plus placing',
  },
  {
    date: '2023',
    title: 'VEX World Championship again',
    detail: 'Second trip to Worlds with the middle school team.',
    category: 'robotics',
    href: '/robotics/',
    todo: 'year to confirm, plus placing',
  },
  {
    date: '2023',
    title: 'Started Engineering Technology at Tri-County',
    detail: 'Joined the Engineering Technology program at Tri-County Regional Vocational Technical High School in Franklin. CAD, drawings, shop work, and a lot of measuring.',
    category: 'school',
  },
  {
    date: '2024-02',
    title: 'Autodesk Certified User: AutoCAD',
    detail: 'Passed the Certiport AutoCAD exam on February 29.',
    category: 'cert',
    href: '/experience/#certifications',
  },
  {
    date: '2024',
    title: 'Started volunteering with FreeKicks Special Olympics',
    detail: 'Teaching and playing soccer with kids of all abilities in Franklin. Still going.',
    category: 'volunteer',
  },
  {
    date: '2025-04',
    title: 'NC3 Introduction to Mechatronics',
    detail: 'Festo-backed cert covering electro-pneumatics, PLCs, sequence programs and automated systems.',
    category: 'cert',
    href: '/experience/#certifications',
  },
  {
    date: '2025-07',
    title: "Started at Shaw's",
    detail: 'Cashier and customer service in Medway. Trained for more responsibility soon after I was hired.',
    category: 'work',
    href: '/experience/',
  },
  {
    date: '2025',
    label: '2025 to 2026',
    title: 'Captain of VEX team 3236A',
    detail: 'Push Back season, team of 8. I led design, wrote the C++ with EZ-Template, and ran competition strategy.',
    category: 'robotics',
    href: '/robotics/',
  },
  {
    date: '2025-09',
    title: 'Joined HexaFlow, our NASA HUNCH team',
    detail: 'Five students designing a nanolab that waters a plant in microgravity using capillary action. I took the web lead role.',
    category: 'project',
    href: '/projects/hexaflow/',
  },
  {
    date: '2025-10',
    title: 'NC3 Precision Measurement 1: Tape and Rule',
    detail: 'Starrett-backed measurement cert.',
    category: 'cert',
    href: '/experience/#certifications',
  },
  {
    date: '2026',
    title: 'Forex signal research',
    detail: 'Built a chart scanner for short-term binary calls, then backtested it honestly. Out of sample it won 46% of the time against 55.6% needed. Pivoted to a research and journal tool.',
    category: 'project',
    href: '/projects/forex-research/',
  },
  {
    date: '2026-03',
    title: 'NC3 Precision Measurement 2: Slide Caliper',
    detail: 'Second Starrett measurement cert.',
    category: 'cert',
    href: '/experience/#certifications',
  },
  {
    date: '2026-07',
    title: 'Pokémon card scanner, phases 0 to 1c',
    detail: 'Catalog of 20,444 cards, CLIP plus FAISS recognition, a phone scanning app, and a detection rewrite that took real-scan coverage from 31% to 61% with zero regressions.',
    category: 'project',
    href: '/projects/pokemon-card-scanner/',
  },
  {
    date: '2026-07',
    title: 'Built the HexaFlow website',
    detail: 'Web lead for our NASA HUNCH team. Astro and Three.js, with an interactive 3D assembly viewer.',
    category: 'project',
    href: '/projects/hexaflow/',
  },
  {
    date: '2026-08',
    label: 'Aug 6, 2026',
    title: 'NASA drop test for HexaFlow',
    detail: '2.21 seconds of free fall to see how water moves through the grooved dome without gravity.',
    category: 'project',
    href: '/projects/hexaflow/',
  },
  {
    date: '2026-08',
    label: 'Aug to Sep 2026',
    title: 'Relaunching the Tri-County FRC team',
    detail: 'Started from nothing with two other student leaders: no robot, no budget. Cold-emailed local companies for sponsors and built a warm-up basketball shooter.',
    category: 'robotics',
    href: '/robotics/',
  },
  {
    date: '2026-09',
    label: 'Sep to Oct 2026',
    title: 'Jarvis stages 0 and 1A deployed',
    detail: 'My home operating system on Raspberry Pi 5s: wall kiosk, phone app, daily plan. In daily use since October.',
    category: 'project',
    href: '/projects/jarvis/',
  },
  {
    date: '2026-10',
    title: 'Co-op at Dell',
    detail: "Process Development team at Dell's Franklin factory, alternating weeks with school.",
    category: 'work',
    href: '/experience/',
  },
  {
    date: '2026-12',
    title: 'Presenting HexaFlow at ASGSR',
    detail: 'The American Society for Gravitational and Space Research conference.',
    category: 'project',
    href: '/projects/hexaflow/',
    upcoming: true,
  },
  {
    date: '2027',
    title: 'FRC rookie season',
    detail: 'First season for the relaunched team. The game is BIOCORE.',
    category: 'robotics',
    href: '/robotics/',
    upcoming: true,
  },
  {
    date: '2027',
    title: 'Graduating from Tri-County',
    detail: 'Class of 2027, Engineering Technology.',
    category: 'school',
    upcoming: true,
  },
]
