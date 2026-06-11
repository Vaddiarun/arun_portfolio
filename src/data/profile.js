// Centralized portfolio data — edit here to update the whole site.

export const DATA = {
  name: 'Arun Kumar',
  email: 'arunsvaddi@gmail.com',
  phone: '+91 7989759695',
  phoneHref: '+917989759695',
  location: 'Bengaluru, India',
  linkedin: 'https://www.linkedin.com/in/vaddi-arun-238a6222a',
  company: 'https://gndsolutions.in/',

  roles: ['Frontend Developer', 'React & TypeScript Engineer', 'React Native Developer', 'IoT Dashboard Builder'],

  education: [
    { yr: '2024', deg: 'Industry-Ready Certification, Full-Stack Development', inst: 'NxtWave Disruptive Technologies' },
    { yr: '2019 – 2023', deg: 'B.Tech — Computer Science & Engineering', inst: 'Chadalawada Ramanamma Engineering College, Tirupati', cgpa: '7.9 CGPA' },
    { yr: '2017 – 2019', deg: 'Intermediate — MPC', inst: 'Sri Venkateswara Junior College, Rayadurgam', cgpa: '7.0 CGPA' },
    { yr: '2016 – 2017', deg: 'Secondary School Certificate', inst: "St. Paul's English Medium High School", cgpa: '7.2 CGPA' },
  ],

  skills: [
    { icon: 'code', title: 'Languages & Frameworks', items: ['TypeScript', 'JavaScript (ES6+)', 'React.js', 'React Native', 'Next.js', 'HTML5', 'CSS3'] },
    { icon: 'data', title: 'State & Data', items: ['Redux Toolkit', 'React Query', 'Context API', 'REST APIs', 'GraphQL', 'WebSockets', 'Axios'] },
    { icon: 'ui', title: 'Styling & UI', items: ['Tailwind CSS', 'Bootstrap', 'Mobile-First', 'WCAG A11y', 'Figma', 'ApexCharts', 'Recharts'] },
    { icon: 'cloud', title: 'Cloud & DevOps', items: ['AWS Amplify', 'S3', 'CloudFront', 'Firebase', 'CI/CD', 'Netlify', 'Vercel'] },
    { icon: 'check', title: 'Testing & Tooling', items: ['Jest', 'React Testing Library', 'ESLint', 'Prettier', 'Webpack', 'Lighthouse'] },
    { icon: 'git', title: 'Workflow', items: ['Git', 'GitHub', 'Bitbucket', 'Agile / Scrum', 'Code Reviews', 'App / Play Store'] },
  ],

  experience: [
    {
      pos: 'Frontend Developer', co: 'GND Solutions Pvt. Ltd.', dur: 'Sep 2024 – Present',
      resp: [
        'Built real-time IoT monitoring dashboards in React.js + TypeScript + Tailwind, enabling live visualization & control of 100+ connected industrial devices — improving data-rendering performance by 25%',
        'Integrated REST APIs and WebSocket streams to display live sensor telemetry for enterprise clients',
        'Set up AWS Amplify hosting & CI/CD pipelines, cutting release cycles by 40%',
        'Designed a shared component library of reusable, typed UI components to speed feature delivery',
        'Improved frontend efficiency by 30% via code-splitting, memoization & Lighthouse-driven optimization',
        'Ensured cross-browser compatibility & WCAG accessibility across all breakpoints',
      ],
    },
    {
      pos: 'Frontend Developer', co: 'InfoVision Labs India Pvt. Ltd. · Remote', dur: 'Apr 2023 – Sep 2024',
      resp: [
        'Developed responsive, pixel-perfect web interfaces with React.js, JavaScript (ES6+), HTML5, CSS3 & Tailwind',
        'Built modular, reusable UI components using React Hooks and component-based architecture',
        'Integrated REST APIs to render live, data-rich UIs with dynamic filtering, pagination & error handling',
        'Optimized Core Web Vitals with Chrome DevTools & Lighthouse — lazy loading, image & bundle-size reduction',
      ],
    },
    {
      pos: 'Web Developer — Intern', co: 'Oasis Infobyte', dur: 'Jan 2022 – Nov 2022',
      resp: [
        'Built user-friendly web interfaces with modern frontend technologies',
        'Debugged and optimized web applications for better performance',
        'Collaborated with the team to implement responsive designs',
      ],
    },
  ],

  featured: {
    badge: '★ Featured · Enterprise IoT',
    name: 'Real-Time IoT Device Monitoring Dashboard',
    desc: 'A live dashboard for industrial device telemetry — visualizing and controlling 100+ connected devices in real time, with charting, alerts, and remote device control for enterprise clients.',
    features: [
      'Live telemetry via REST APIs & WebSocket streams',
      'Real-time charting, alert management & remote device control',
      '25% faster real-time rendering after optimization',
      'Shared typed component library · WCAG-compliant UI',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind', 'WebSockets', 'ApexCharts', 'AWS Amplify'],
  },

  projects: [
    {
      name: 'Cross-Platform Mobile App', icon: 'mobile',
      desc: 'A cross-platform iOS & Android app built with React Native and Expo — offline persistence with Redux Persist, push notifications, and a full App Store / Play Store deployment workflow.',
      tech: ['React Native', 'Expo', 'Redux Toolkit', 'REST APIs'],
    },
    {
      name: 'E-commerce Website', icon: 'cart',
      url: 'https://harmonious-mermaid-9d2805.netlify.app/',
      desc: 'A responsive e-commerce experience with browse, search, filtering and purchase flows — backed by global Redux state.',
      tech: ['React.js', 'Tailwind CSS', 'Redux'],
    },
    {
      name: 'Hotel Management Software', icon: 'hotel',
      url: 'https://hotelfrontend-ruddy.vercel.app/',
      cred: 'admin@gmail.com · admin@123',
      desc: 'End-to-end hotel management with separate user & admin interfaces, order management, bill generation and persistent sessions.',
      tech: ['React.js', 'Tailwind CSS', 'Redux', 'REST API'],
    },
  ],

  certsTop: [
    { name: 'Software Development Job Simulation', iss: 'Datacom · Forage', date: 'Dec 2025', id: 'WCLiB67oLoioCkjR9', color: '#0a66c2' },
    { name: 'Software Engineer', iss: 'HackerRank', date: 'Oct 2024', id: 'FD5C76D108D8', color: '#00ea64' },
    { name: 'Node JS', iss: 'NxtWave', date: 'Feb 2023', id: 'VWIYOOELVV', color: '#83cd29' },
    { name: 'Cognizant Job Simulation', iss: 'Forage', date: 'Jan 2023', id: 'HerXwT2umia7aYMdu', color: '#1267b8' },
    { name: 'Data Visualisation — Business Insights', iss: 'Forage', date: 'Jan 2023', id: 'SH3ZxdiuecKnAzMBM', color: '#f59e0b' },
    { name: 'Developer Foundations', iss: 'NxtWave', date: 'Jan 2023', id: 'QABAEOVWAF', color: '#83cd29' },
  ],

  certsRest: [
    { name: 'Walmart Job Simulation', iss: 'Forage', date: 'Jan 2023', id: 'tif7RciQ3eGpfPh6p', color: '#0071dc' },
    { name: 'Accenture Job Simulation', iss: 'Forage', date: 'Jan 2023', id: 'uH5HrEkrDCvZcABQR', color: '#a100ff' },
    { name: 'Accenture Job Simulation', iss: 'Forage', date: 'Dec 2022', id: '60Ab6p24RsCASAeMi', color: '#a100ff' },
    { name: 'Infosys Job Simulation', iss: 'Forage', date: 'Dec 2022', id: 'fdi9EuGZpebmx4TB', color: '#007cc3' },
    { name: 'JavaScript Essentials', iss: 'NxtWave', date: 'Dec 2022', id: 'ABTPLFUKNZ', color: '#83cd29' },
    { name: 'JavaScript', iss: 'HackerRank', date: 'Dec 2022', id: '1A2A15F3C0C2', color: '#00ea64' },
    { name: 'Responsive Web Design — Flexbox', iss: 'NxtWave', date: 'Dec 2022', id: 'QMZGHSVECJ', color: '#83cd29' },
    { name: 'Dynamic Web Application', iss: 'NxtWave', date: 'Oct 2022', id: 'FERRCKGPRQ', color: '#83cd29' },
    { name: 'Introduction to Databases', iss: 'NxtWave', date: 'Oct 2022', id: 'PQRAPTZSMA', color: '#83cd29' },
    { name: 'Programming Foundations with Python', iss: 'NxtWave', date: 'Sep 2022', id: 'PDKSZUUZPR', color: '#83cd29' },
    { name: 'Build Your Own Responsive Website', iss: 'NxtWave', date: 'May 2022', id: 'SVHOOUEMEN', color: '#83cd29' },
    { name: 'Build Your Own Static Website', iss: 'NxtWave', date: 'May 2022', id: 'KEFBKDQAEK', color: '#83cd29' },
    { name: 'Juspay Hiring Challenge 2022', iss: 'Unstop', date: 'Apr 2022', id: '94a42bcc', color: '#ff5c5c' },
    { name: 'Oracle Certified Associate, MySQL 5', iss: 'HackerRank', date: '—', id: 'B6F9CBFA78E6', color: '#00ea64' },
    { name: 'Python', iss: 'HackerRank', date: '—', id: '0D0BEDAF5CC5', color: '#00ea64' },
  ],

  marquee: ['React.js', 'TypeScript', 'React Native', 'Next.js', 'Tailwind CSS', 'GraphQL', 'WebSockets', 'Redux Toolkit', 'React Query', 'AWS Amplify', 'Jest', 'Lighthouse'],
}

export const ICONS = {
  ui: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
  data: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="1.8"><path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="6"/><rect x="13" y="7" width="3" height="10"/></svg>',
  cloud: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="1.8"><path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.6-1.5A4 4 0 0 0 6 19Z"/></svg>',
  code: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="1.8"><path d="m8 18-6-6 6-6M16 6l6 6-6 6"/></svg>',
  check: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
  git: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e879f9" stroke-width="1.8"><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>',
  mobile: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M12 18h.01"/></svg>',
  cart: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="1.8"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>',
  hotel: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="1.8"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3M9 9v.01M9 12v.01M9 15v.01"/></svg>',
}
