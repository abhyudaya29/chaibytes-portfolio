export const PERSONAL_INFO = {
  name: "Abhyudaya Dubey",
  location: "Delhi, India 🇮🇳",
  coordinates: "28.6139° N, 77.2090° E",
  email: "abhyudaya.dubey@gmail.com", // Updated as noted earlier
  github: "https://github.com/abhyudaya29",
  linkedin: "https://linkedin.com/in/abhyudaya-dubey-8771a7203/?skipRedirect=true",
  twitter: "https://x.com/chaiwalahacoder",
  resumeUrl: "#",
};

export const HERO_TITLES = [
  "AI Product Engineer",
  "Systems Builder",
  "Real-time Infrastructure Engineer",
  "Full Stack Developer",
  "Intelligent Interface Designer",
];

export const BRAND_PILLARS = [
  {
    title: "Systems Thinking",
    description: "Structuring production-level state, real-time messaging pipelines, and database layer schemas.",
  },
  {
    title: "AI-Native Architecture",
    description: "Designing workflows driven by RAG indexing, contextual prompting, and agentic task orchestration.",
  },
  {
    title: "Craftsmanship & Design",
    description: "Fusing pixel-perfect UI performance, smooth motion physics, and polished developer experiences.",
  },
];

export const ABOUT_CONTENT = {
  title: "Crafting systems that think.",
  opening:
    "I started as a frontend developer and moved progressively deeper into backend infrastructure, real-time systems, AI workflows, and product architecture.",
  paragraphs: [
    "Over time I became obsessed with the intersection of systems and experience — where millisecond-level infrastructure decisions translate into product moments users actually feel.",
    "I build from 0 → 1. That means owning the full stack: database schema to pixel-perfect UI, deployment pipeline to AI prompt architecture.",
  ],
  interests: [
    "Real-time systems & WebSocket infrastructure",
    "AI-native product design",
    "Developer tooling & internal platforms",
    "Scalable backend architecture",
    "Database internals & query optimization",
  ],
  stats: [
    { label: "APIs Shipped", value: 20 },
    { label: "Systems Built", value: 8 },
    { label: "Products Deployed", value: 4 },
    { label: "Real-time Events", value: 500000, suffix: "+" },
  ],
  bento: {
    focus: {
      title: "Current Focus",
      description: "Weather Intelligence Platform for Indus Towers' 200K+ tower sites across India's telecom circles.",
    },
    quote: {
      text: "Craftsmanship is not an aesthetic add-on; it is the ultimate measure of engineering integrity.",
      author: "Abhyudaya Dubey",
    },
    availability: {
      status: "Active & Available",
      details: "Ready for ambitious systems & product engineering roles.",
    },
  },
};

export const EXPERIENCE_TIMELINE = [
  {
    years: "2024 - Present",
    company: "RaySuite AI",
    role: "Founding Member & SDE",
    description: "Founding engineer building the all-in-one AI-powered Marketing OS designed as a central AI command layer for brands, D2C businesses, and growth teams.",
    bullets: [
      "RayTarget: Developed the personalization, campaign targeting, and automated UGC/product video generation workflow engines driving brand growth.",
      "RayTalk: Engineered the conversational AI customer support desk, enabling automated, context-aware query resolution at scale.",
      "RayCRM: Architected and integrated the core CRM system for seamless lead tracking, profiling, and analytics consolidation.",
    ],
    tech: ["React", "FastAPI", "PostgreSQL", "LangChain", "LLM APIs", "Redis", "WebSockets"],
  },
  {
    years: "2023 - 2024",
    company: "enerzyAI",
    role: "Full Stack Developer",
    description: "Full stack engineering for the AI-native energy infrastructure platform serving as the OS for the energy internet, built in India for global markets.",
    bullets: [
      "Connected and orchestrated grid-scale Battery Energy Storage Systems (BESS), solar storage setups, and smart meter configurations.",
      "Engineered secure OTP authentication via MSG91 (WhatsApp + SMS) with robust session state management.",
      "Designed and deployed webhooks-driven leads automation syncing grids, emails, WhatsApp, and Google Sheets APIs.",
    ],
    tech: ["React", "Vite", "TypeScript", "Node.js", "MySQL", "Docker", "Drizzle ORM", "Vercel"],
  },
  {
    years: "2022 - 2023",
    company: "Nitro Commerce",
    role: "SDE",
    description: "Scaled frontend architecture for a high-throughput commerce platform.",
    bullets: [
      "Constructed modular UI component libraries resulting in 40% faster frontend iterations.",
      "Optimized webpack/vite bundling configurations to reduce page load time by 30%.",
      "Pioneered cross-functional feedback workflows aligning design mockups with frontend assets.",
    ],
    tech: ["React", "TypeScript", "Redux", "Tailwind CSS", "Vite"],
  },
  {
    years: "2021 - 2022",
    company: "Innobit Systems",
    role: "Frontend Developer",
    description: "Built responsive interfaces and reusable UI systems within React ecosystems.",
    bullets: [
      "Delivered pixel-perfect interfaces matching complex dashboard wireframes.",
      "Implemented responsive CSS layouts with strict cross-browser testing and compatibility.",
    ],
    tech: ["React", "JavaScript", "CSS", "HTML5"],
  },
];

export const PROJECTS_DATA = [
  {
    id: "vaidya",
    category: "AI Operations & Voice Systems",
    name: "Vaidya",
    description:
      "Vaidya will handle your calls. An AI-powered voice receptionist for Indian businesses that answers every call, books appointments, handles over-the-phone payments, and transfers calls. Powered by Exotel, it natively supports Hinglish code-switching and all major Indian languages.",
    highlight: "Custom LLM speech orchestration, Hinglish code-switching parsing, and Exotel carrier integration.",
    tech: ["Next.js", "FastAPI", "Exotel API", "Python", "Vapi", "PostgreSQL", "Redis"],
    liveUrl: "https://vaidya.chaibytes.in/",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "raytalk",
    category: "Real-time Platform",
    name: "RayTalk",
    description:
      "AI-powered omnichannel customer engagement platform that helps businesses manage customer communication, automate workflows, and drive sales across WhatsApp, Instagram, Facebook, and web chat.",
    highlight: "Real-time ticket routing, event-driven workflows, Meta API integrations, and Google Sheets lead syncing.",
    tech: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy", "Redis", "Meta APIs", "Google Sheets API", "React Query", "Chakra UI"],
    liveUrl: "https://talky.raysuite.ai/login",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "raytarget",
    category: "Marketing Automation",
    name: "RayTarget",
    description:
      "AI-powered marketing and creative automation platform focused on helping businesses generate high-converting ad creatives, automate campaign workflows, and accelerate content production.",
    highlight: "Automated image/video ad generation, programmatic campaign flows, and ad platform integrations.",
    tech: ["React", "FastAPI", "Python", "LLM APIs", "PostgreSQL", "Redis", "Cloud Storage"],
    liveUrl: "https://raysuite.ai/fastlogin?r=UkFZVEFSR0VU",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "weather-intel",
    category: "Infrastructure Visuals",
    name: "Weather Intelligence Platform",
    description:
      "Real-time weather monitoring platform for Indus Towers' 200K+ tower sites across India's 22 telecom circles, with animated radar overlays and alert systems.",
    highlight: "Large geo-spatial overlay rendering with customized Leaflet systems",
    tech: ["React", "Leaflet.js", "FastAPI", "PostgreSQL", "Recharts"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "lms",
    category: "Education Infrastructure",
    name: "LMS Platform",
    description:
      "Role-based learning management system supporting concurrent student, teacher, and admin workflows with scalable database access and JWT auth.",
    highlight: "Optimized relational tables handling high concurrency user flows",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const SKILLS_DATA = {
  categories: [
    {
      title: "Full Stack",
      skills: ["React", "Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "WebSockets", "SQLAlchemy", "Tailwind CSS"],
      icon: "layout",
    },
    {
      title: "Agentic AI",
      skills: ["LangChain", "Agentic Workflows", "Vector Databases", "Function Calling", "Semantic Caching"],
      icon: "cpu",
    },
    {
      title: "LLM Model Integration",
      skills: ["OpenAI APIs", "Claude APIs", "Structured Outputs", "Prompt Engineering", "Context Optimization"],
      icon: "server",
    },
    {
      title: "DevOps",
      skills: ["Docker", "Linux", "Vercel Deployments", "GitHub Actions", "Nginx", "CI/CD Pipelines"],
      icon: "terminal",
    },
  ],
  marquee: [
    "Next.js",
    "FastAPI",
    "PostgreSQL",
    "WebSockets",
    "React",
    "Redis",
    "OpenAI APIs",
    "TypeScript",
    "Docker",
    "Python",
    "Framer Motion",
    "Tailwind CSS",
    "Node.js",
    "LangChain",
    "GitHub Actions",
    "Linux",
  ],
};

export const TERMINAL_SEQUENCES = [
  {
    tab: "Deploy Pipeline",
    identity: "abhyudaya@production:~$",
    commands: [
      { text: "git push origin main", delay: 800 },
      { text: "✓ Pushed 3 commits to origin/main", isLog: true, delay: 200 },
      { text: "› Triggering Vercel deployment...", isLog: true, delay: 600 },
      { text: "✓ Build completed in 34s", isLog: true, delay: 400 },
      { text: "✓ Edge network propagated (22 regions)", isLog: true, delay: 300 },
      { text: "✓ raytalk.production → LIVE", isLog: true, isSuccess: true, delay: 100 },
    ],
  },
  {
    tab: "AI Workflow",
    identity: "abhyudaya@production:~$",
    commands: [
      { text: "python run_agent.py --task \"summarize_tickets\"", delay: 1000 },
      { text: "› Loading RAG pipeline... (128 docs indexed)", isLog: true, delay: 400 },
      { text: "› Querying OpenAI GPT-4o...", isLog: true, delay: 800 },
      { text: "✓ 47 tickets processed · 3 priority escalations", isLog: true, delay: 300 },
      { text: "› Writing summary to /reports/2026-05-21.md", isLog: true, delay: 200 },
    ],
  },
  {
    tab: "Real-time Events",
    identity: "abhyudaya@production:~$",
    commands: [
      { text: "WebSocket server running on ws://0.0.0.0:8000", isLog: true, delay: 500 },
      { text: "[14:23:01] conn  · agent_7f2a · session established", isLog: true, delay: 300 },
      { text: "[14:23:01] msg   · ticket_4821 · assigned → Rahul K.", isLog: true, delay: 500 },
      { text: "[14:23:02] evt   · analytics · 1,204 events/sec", isLog: true, delay: 400 },
      { text: "[14:23:04] ping  · heartbeat · 12ms latency", isLog: true, delay: 300 },
    ],
  },
  {
    tab: "System Check",
    identity: "abhyudaya@production:~$",
    commands: [
      { text: "curl https://api.raytalk.app/health", delay: 600 },
      {
        text: '{ "status": "ok", "uptime": "99.94%", "db": "connected", "redis": "connected", "ws_clients": 847 }',
        isLog: true,
        delay: 200,
      },
    ],
  },
];

export const METRICS_DATA = [
  { value: "20+", label: "APIs shipped to production" },
  { value: "8+", label: "Scalable systems built" },
  { value: "4", label: "SaaS products deployed" },
  { value: "500K+", label: "Real-time events processed" },
  { value: "99.9%", label: "Uptime maintained" },
];
