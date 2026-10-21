import type { CV } from '../types/cv'

export const cv: CV = {
  profile: {
    firstName: 'Valeriia',
    lastName: 'Kolesnyk',
    role: 'Full-stack software engineer',
    tagline: 'I build web and mobile apps with TypeScript, React and Python',
    photo: '/photo.webp',
    intro:
      'Full-stack engineer with an MSc from UCL and a BSc in Computer Science. I build web and mobile applications, design relational databases, integrate REST APIs and automate workflows, with a growing focus on AI-assisted development.',
  },

  about: {
    paragraphs: [
      'I specialise in building web and mobile applications in TypeScript, Node.js, React and Python, including relational database design, REST API integration and workflow automation within Agile environments.',
      'My MSc at University College London focused on machine learning and process automation; my BSc in Moscow focused on software and mobile development. I enjoy turning messy, manual processes into tools people actually use every day.',
    ],
    info: [
      { icon: 'location', label: 'Location', lines: ['London, UK'] },
      {
        icon: 'education',
        label: 'Education',
        lines: [
          'MSc Digital Manufacturing of Advanced Materials — UCL (Merit)',
          'BSc Computer Science — MTUCI, Moscow (2:1)',
        ],
      },
      {
        icon: 'work',
        label: 'Experience',
        lines: ['Web, mobile & lab automation · TypeScript, React, React Native, Python'],
      },
      {
        icon: 'learning',
        label: 'Currently exploring',
        lines: ['AI-assisted development, multi-agent orchestration'],
      },
      {
        icon: 'certificate',
        label: 'Certifications',
        lines: ['REST API (Intermediate), SQL (Intermediate) — HackerRank, 2026'],
      },
      {
        icon: 'languages',
        label: 'Languages',
        lines: ['English (fluent), Ukrainian (native), Russian (native)'],
      },
    ],
  },

  skills: [
    {
      icon: 'code',
      title: 'Languages',
      subtitle: 'What I think and build in',
      items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Kotlin', 'C++', 'C#'],
    },
    {
      icon: 'devices',
      title: 'Web & Mobile',
      subtitle: 'Interfaces across platforms',
      items: ['React', 'React Native', 'Node.js', 'Expo', 'REST APIs', 'HTML/CSS', 'Figma'],
    },
    {
      icon: 'database',
      title: 'Databases',
      subtitle: 'Typed, relational, reliable',
      items: ['PostgreSQL', 'Supabase', 'Schema design', 'SQLite', 'ObjectBox'],
    },
    {
      icon: 'ml',
      title: 'Data Science & ML',
      subtitle: 'From dataset to model',
      items: ['Pandas', 'NumPy', 'scikit-learn', 'PyTorch', 'TensorFlow', 'Jupyter', 'Hugging Face', 'YOLO'],
    },
    {
      icon: 'automation',
      title: 'Automation & AI tooling',
      subtitle: 'Less manual work',
      items: ['Python automation', 'Claude Code', 'AI-assisted dev', 'Multi-agent pipelines'],
    },
    {
      icon: 'process',
      title: 'DevOps & Process',
      subtitle: 'How I ship',
      items: ['Git/GitHub', 'Agile/Scrum', 'Jira', 'Unit testing', 'Usability testing', 'SDLC'],
    },
    {
      icon: 'team',
      title: 'Soft skills',
      subtitle: 'What makes teams work',
      items: ['Cross-functional collaboration', 'Stakeholder communication', 'Technical writing'],
    },
  ],

  projects: [
    {
      title: 'Lab Protocol Visualiser',
      category: 'Web · Automation',
      period: '2025',
      description:
        'A cross-platform TypeScript/React app that reads robot commands from a REST API and renders an interactive deck layout with a step-by-step run view, so researchers can verify protocols before running physical experiments.',
      tags: ['TypeScript', 'React', 'REST API', 'Python'],
      accent: 'lime',
    },
    {
      title: 'Predicting Amide Coupling Reactions',
      category: 'Machine learning',
      period: '2024 – 2025',
      description:
        'Reproducible Python pipelines for data preparation and feature engineering, PCA down to 30 components (>90% variance) and deep neural networks explaining ~73% of variance on unseen data.',
      tags: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn'],
      accent: 'sky',
    },
    {
      title: 'Bangkok Express',
      category: 'Web · Mobile',
      period: '2023',
      description:
        'A restaurant website with 10+ dynamic UI components and Webpack bundling that sped up loading by 30%, extended into a React Native app with Expo and React Navigation.',
      tags: ['JavaScript', 'Node.js', 'Webpack', 'React Native'],
      accent: 'coral',
    },
    {
      title: 'Accessibility Checker',
      category: 'Web · A11y',
      period: '2022',
      description:
        'A tool that captures website screenshots and analyses them for accessibility issues against WCAG guidance, with state managed in Redux Toolkit.',
      tags: ['React', 'Redux Toolkit', 'Fetch API', 'WCAG'],
      accent: 'lime',
      link: { label: 'GitHub', href: 'https://github.com/lera-kolesnik/accessibility_front' },
    },
    {
      title: 'SharesApp',
      category: 'Mobile · Android',
      period: '2021',
      description:
        'An Android app for tracking share prices, built at the Yandex School of Mobile Development. Live quotes and price history from the Alpha Vantage REST API, ~8,000 NASDAQ companies searchable by ticker or name, and a favourites list.',
      tags: ['Kotlin', 'Android', 'REST API', 'ObjectBox'],
      accent: 'sky',
      link: { label: 'GitHub', href: 'https://github.com/lera-kolesnik/SharesApp' },
    },
  ],

  experience: [
    {
      role: 'Laboratory Automation Engineer',
      company: 'University College London (UCL)',
      location: 'London, UK',
      period: 'Dec 2024 – Sep 2025',
      highlights: [
        'Automated a multi-stage laboratory process in Python, encoding 72 robotic operations per run into a single reproducible workflow.',
        'Built a cross-platform TypeScript/React app with 2 developers, consuming robot commands via REST API and rendering an interactive step-by-step view.',
        'Led usability testing with domain experts over several rounds — the tool is now in daily laboratory use.',
        'Extended the API layer to support 2 robot models after a hardware upgrade broke existing endpoints.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Symposium OÜ',
      location: 'Tallinn, Estonia (remote)',
      period: 'Feb 2024 – Present',
      highlights: [
        'Work in a 6-person cross-functional team on a TypeScript/Node.js training and certification platform.',
        'Designed an account-level UTC offset setting so enterprise sessions start and end consistently across time zones.',
        'Use Claude Code and AI-assisted tools across 2 projects; building multi-agent pipelines to automate development workflows.',
      ],
    },
    {
      role: 'Junior Software Engineer',
      company: 'Tech Balance',
      location: 'London, UK',
      period: 'Feb 2024 – Aug 2024',
      highlights: [
        'Built React Native interfaces from Figma designs with reusable components and hooks.',
        'Redesigned navigation with Expo Router for consistency across 3 platforms.',
        'Delivered push notifications for 1,000+ users during live university pilots.',
        'Designed a typed 3-table relational schema on Supabase (Postgres, auth, push tokens).',
      ],
    },
    {
      role: 'Mobile Engineer — Summer School',
      company: 'Yandex',
      location: 'Moscow',
      period: 'Jun 2021 – Aug 2021',
      highlights: [
        'Built a stock-tracking Android app in Kotlin on the Alpha Vantage REST API.',
        'Parsed ~8,000 NASDAQ listings into a local ObjectBox database with live search.',
        'Worked in a team of 7 on an Android TV version and added analytics across 5+ screens.',
      ],
    },
  ],

  contact: {
    heading: "Let's work together",
    text: "I'm open to new roles, collaborations, or just a chat about something you're building.",
    email: 'kolesnik.va8@gmail.com',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/valeriia-kolesnyk/' },
      { label: 'GitHub', href: 'https://github.com/lera-kolesnik' },
    ],
  },
}
