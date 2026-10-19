// Prefix a /public path with the site base (needed on GitHub Pages).
export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

// Content taken from "CV Kevin Martinez - EN.pdf" and the LinkedIn notes in Desktop/CV.
export const profile = {
  name: 'Kevin Martínez',
  fullName: 'Kevin Alexander Martínez Rivas',
  role: 'Junior Data Engineer',
  tagline: 'Data Engineer • Fullstack Developer • AI Automation',
  location: 'San Salvador, El Salvador',
  email: 'kevmartinez.per@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kevin-mart%C3%ADnez-dev/',
  github: 'https://github.com/KevinMartinez-Rivas',
  cv: asset('Kevin-Martinez-CV.pdf'),
  summary:
    'Data Engineer with 3 years of experience in data integration, dimensional modeling and Business Intelligence. I design ETL processes, OLAP cubes and semantic layers that support dashboards with consistent metrics. I complement this profile with fullstack web development and AI-driven automation.',
};

export const stats = [
  { value: '3+', label: 'Years in data' },
  { value: '3', label: 'SQL engines' },
  { value: '5', label: 'Languages' },
  { value: 'AI', label: 'Agents & QA' },
];

export const experience = {
  title: 'Junior Data Engineer',
  company: 'Datasphere Consulting',
  mode: 'Full time · Remote',
  period: 'Oct 2023 – Present',
  location: 'San Salvador, El Salvador',
  bullets: [
    'Designed and optimized ETL processes for data integration and analysis across multiple platforms.',
    'Implemented OLAP cubes to speed up analysis and report generation.',
    'Designed and implemented a company-wide semantic layer (dimensional model, relationships, granularity and centralized business logic) as the foundation of its dashboard ecosystem.',
    'Developed DAX measures and Power BI dashboards focused on business decision-making.',
    'Contributed to early Snowflake projects, supporting cloud data management and analytics workflows.',
    'Worked with SQL Server, PostgreSQL and MySQL for database management.',
    'Collaborated on Python projects for backend development and task automation.',
    'Built web applications with React, PHP and Laravel, delivering advanced end-user functionality.',
    'Integrated AI-assisted workflows (Claude Code, MCPs, Skills) into web and data analysis projects.',
  ],
};

export const projects = [
  {
    tag: 'AI Agents',
    title: 'AI-Agent Lead Management System',
    description:
      'Took part in the design and construction of a lead management system, and built the AI agents that automate lead traceability across its full lifecycle.',
    points: ['Reduced manual follow-up', 'End-to-end lead traceability', 'Agent design & implementation'],
  },
  {
    tag: 'QA · Data validation',
    title: 'QA of AI-Built Platforms',
    description:
      'Performed end-to-end testing of AI-developed platforms, validating both frontend and backend, with a focus on the data the systems processed and returned.',
    points: ['Frontend + backend testing', 'Data integrity & consistency', 'Quality of system outputs'],
  },
  {
    tag: 'Business Intelligence',
    title: 'Company-wide Semantic Layer',
    description:
      'Structured the semantic layer that powers a full dashboard ecosystem: dimensional model, relationships, granularity and centralized business logic so every report shows the same metrics.',
    points: ['Dimensional modeling', 'DAX measures', 'Power BI dashboards'],
  },
];

// `icon` = Simple Icons slug (brand logo); `glyph` = generic icon from SkillIcon.astro.
export const skills = [
  {
    group: 'Data & BI',
    blurb: 'Pipelines, models and dashboards with consistent metrics.',
    glyph: 'chart',
    items: [
      { name: 'ETL', glyph: 'etl' },
      { name: 'OLAP cubes', glyph: 'cube' },
      { name: 'Dimensional modeling', glyph: 'model' },
      { name: 'Semantic layer', glyph: 'layers' },
      { name: 'Power BI', icon: 'powerbi' },
      { name: 'DAX', glyph: 'function' },
      { name: 'Snowflake', icon: 'snowflake' },
    ],
  },
  {
    group: 'Databases',
    blurb: 'Relational engines I work with day to day.',
    glyph: 'database',
    items: [
      { name: 'SQL Server', icon: 'microsoftsqlserver' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL', icon: 'mysql' },
    ],
  },
  {
    group: 'Languages',
    blurb: 'From data work and automation to the web.',
    glyph: 'code',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'SQL', glyph: 'database' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'PHP', icon: 'php' },
      { name: 'C#', icon: 'csharp' },
    ],
  },
  {
    group: 'Web development',
    blurb: 'Fullstack apps and static sites.',
    glyph: 'web',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Astro', icon: 'astro' },
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css3' },
      { name: 'SASS', icon: 'sass' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Gulp', icon: 'gulp' },
    ],
  },
  {
    group: 'AI',
    blurb: 'AI-assisted development, agents and QA.',
    glyph: 'spark',
    items: [
      { name: 'Claude Code', icon: 'anthropic' },
      { name: 'MCPs', glyph: 'plug' },
      { name: 'Skills', glyph: 'spark' },
      { name: 'Rules', glyph: 'rules' },
      { name: 'Prompt engineering', glyph: 'prompt' },
      { name: 'AI agents', glyph: 'agent' },
      { name: 'QA of AI-generated platforms', glyph: 'qa' },
    ],
  },
];

export const education = [
  {
    title: 'B.S. in Computer Science',
    school: 'Universidad Don Bosco',
    period: 'Jan 2025 – Nov 2027 (in progress)',
  },
  {
    title: 'Technical Degree in Computer Engineering',
    school: 'Universidad Don Bosco',
    period: 'Feb 2020 – Nov 2023',
    note: 'Graduated with outstanding CUM (cumulative GPA).',
  },
  {
    title: 'General High School Diploma',
    school: 'Colegio Jardín',
    period: '2017 – 2018',
    note: 'Recognized as an outstanding student on the PAES national exam.',
  },
];

export const psnap = {
  name: 'PSnap',
  tagline: 'Capture your whole site in one go.',
  description:
    'A Chrome extension (Manifest V3) I designed and built end to end that crawls a web app and screenshots every route, with a built-in editor to annotate and export the results. It runs entirely in the browser: no account, no backend, and screenshots never leave the user’s device.',
  features: [
    'Route discovery by following links, reading the sitemap, or from a user-provided list',
    'Full-page capture of every route, at Desktop, Tablet and Mobile widths via tab zoom',
    'Capture of pages behind a login, with form-based login automation (passwords are never persisted)',
    'Hide cookie banners and chat widgets with a DOM element picker, and add per-site comments',
    'Built-in editor: crop, rectangles, arrows, text, highlights and pixelation',
    'Export as PNG, JPG, WebP or PDF, or everything as a ZIP / single PDF',
    'Bilingual (EN / ES) and settings synced across devices with chrome.storage.sync',
  ],
  stack: [
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'Chrome Extension MV3', icon: 'googlechrome' },
    { name: 'Side Panel API', glyph: 'web' },
    { name: 'Service Workers', glyph: 'plug' },
    { name: 'html2canvas', glyph: 'qa' },
    { name: 'JSZip', glyph: 'layers' },
    { name: 'IndexedDB', glyph: 'database' },
    { name: 'Astro', icon: 'astro' },
    { name: 'Netlify', icon: 'netlify' },
  ],

  links: [
    { label: 'Chrome Web Store', href: 'https://chromewebstore.google.com/detail/psnap/glclpodpebcebpbnooalmpppoklenkle' },
    { label: 'Website', href: 'https://psnap.io' },
    { label: 'Extension repo', href: 'https://github.com/KevinMartinez-Rivas/psnap' },
    { label: 'Website repo', href: 'https://github.com/KevinMartinez-Rivas/psnap-web' },
  ],
};
