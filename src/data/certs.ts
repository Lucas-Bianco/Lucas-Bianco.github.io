// Lucas's certifications. Files live in public/certs/. `file: null` = no PDF on the site yet.

export interface Cert {
  id: string
  name: string
  issuer: string
  issuerDetail?: string     // e.g. who built the curriculum or who proctors it
  date: string | null       // ISO date earned, null if not known yet
  file: string | null       // root path under /certs/, or null
  verify?: { url: string; code: string; label: string }
  covers: string[]          // what the certification actually tests, 2-4 bullets
  todos?: string[]          // what Lucas still needs to send for this cert
}

export const certs: Cert[] = [
  {
    id: 'autocad-acu',
    name: 'Autodesk Certified User: AutoCAD',
    issuer: 'Autodesk',
    issuerDetail: 'Exam delivered by Certiport',
    date: '2024-02-29',
    file: '/certs/autocad-certified-user.pdf',
    verify: { url: 'https://verify.certiport.com', code: 'BSAU-s27Y', label: 'Verify on Certiport' },
    covers: [
      'Drawing and editing 2D geometry accurately with object snaps and coordinates',
      'Layers, dimensions, annotation and blocks',
      'Setting up layouts and plotting drawings',
    ],
  },
  {
    id: 'nc3-mechatronics',
    name: 'Introduction to Mechatronics',
    issuer: 'NC3',
    issuerDetail: 'Curriculum by Festo',
    date: '2025-04-11',
    file: '/certs/nc3-mechatronics.pdf',
    covers: [
      'Electro-pneumatic systems',
      'Stacking, conveying and handling systems',
      'PLC elements, logic circuits and sequence programs',
      'Automated systems design',
    ],
  },
  {
    id: 'nc3-pmi-1',
    name: 'Precision Measurement Instruments 1: Tape and Rule',
    issuer: 'NC3',
    issuerDetail: 'Curriculum by Starrett',
    date: '2025-10-08',
    file: '/certs/nc3-pmi-1-tape-and-rule.pdf',
    covers: [
      'Safety when working with precision tools',
      'Calibration versus a field check',
      'Reading tapes and steel rules accurately',
      'Tool care and maintenance',
    ],
  },
  {
    id: 'nc3-pmi-2',
    name: 'Precision Measurement Instruments 2: Slide Caliper',
    issuer: 'NC3',
    issuerDetail: 'Curriculum by Starrett',
    date: '2026-03-04',
    file: '/certs/nc3-pmi-2-slide-caliper.pdf',
    covers: [
      'Safety when working with precision tools',
      'Calibration versus a field check',
      'Reading slide calipers accurately',
      'Tool care and maintenance',
    ],
  },
  {
    id: 'osha-10',
    name: 'OSHA 10-Hour',
    issuer: 'OSHA Outreach Training Program',
    date: null,
    file: null,
    todos: ['PDF or card scan of the OSHA 10 card', 'date earned'],
    covers: [
      'Recognizing common workplace hazards',
      'Worker rights and employer responsibilities',
    ],
  },
  {
    id: 'cswa',
    name: 'Certified SolidWorks Associate (CSWA)',
    issuer: 'Dassault Systèmes SolidWorks',
    date: null,
    file: null,
    todos: ['PDF of the CSWA certificate', 'date earned'],
    covers: [
      'Part modeling from drawings: sketches, features, design intent',
      'Assemblies with mates',
      'Mass properties and drawing basics',
    ],
  },
  {
    id: 'cswp',
    name: 'Certified SolidWorks Professional (CSWP)',
    issuer: 'Dassault Systèmes SolidWorks',
    date: null,
    file: null,
    todos: ['PDF of the CSWP certificate', 'date earned'],
    covers: [
      'Advanced part modeling and editing under time pressure',
      'Configurations and design tables',
      'Complex assemblies and interference checks',
    ],
  },
  {
    id: 'revit',
    name: 'Autodesk Revit',
    issuer: 'Autodesk',
    date: null,
    file: null,
    todos: ['PDF of the Revit certificate', 'date and level (Certified User?)'],
    covers: [
      'Building information modeling: walls, floors, roofs, openings',
      'Views, sheets and annotation',
    ],
  },
  {
    id: 'six-sigma-white',
    name: 'Six Sigma White Belt',
    issuer: 'Six Sigma',  // exact issuing body unknown
    date: null,
    file: null,
    todos: ['PDF of the White Belt certificate', 'date and issuing organization'],
    covers: [
      'What Six Sigma is and the DMAIC cycle',
      'Basic vocabulary for process improvement work',
    ],
  },
]

/** Certs with a PDF on the site. */
export const filedCerts = certs.filter((c) => c.file !== null)
/** Certs listed but still waiting on a file. */
export const unfiledCerts = certs.filter((c) => c.file === null)
