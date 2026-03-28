const resumeData = {
  name: "Tharunkaarthik Gopinath",
  tagline: "CS Student · Full-Stack Developer · Competitive Programmer",
  about:
    "I'm a Computer Science Honours Co-op student at the University of Windsor with a 93% major average. I enjoy building clean, performant software — from real-time AI dashboards to Chrome extensions. I'm passionate about algorithms, open-source tooling, and writing code that actually ships.",
  contact: {
    phone: "226-739-6523",
    email: "gopinatt@uwindsor.ca",
    linkedin: "https://linkedin.com/in/tharunkaarthik",
    github: "https://github.com/tharunkaarthik",
  },
  skills: {
    Languages: ["Python", "Java", "JavaScript (ES6+)", "C", "SQL"],
    Frameworks: ["FastAPI", "Next.js", "React", "HTML/CSS", "Swing"],
    Databases: ["PostgreSQL", "SQLite"],
    Tools: ["Git", "Docker", "Linux"],
    Concepts: ["Data Structures & Algorithms", "REST APIs", "OOP"],
  },
  education: [
    {
      degree: "Bachelor of Computer Science, Honours Co-op",
      institution: "University of Windsor",
      location: "Windsor, Ontario",
      period: "Sep 2024 – Sep 2028",
      gpa: "93% Major Average",
      awards: ["Dean's Honor Roll", "Presidential Level Entrance Scholarship"],
    },
  ],
  projects: [
    {
      name: "DocuBridge",
      tech: ["Java", "JavaFX", "Quill.js", "WebSocket", "Azure SQL", "Azure Cognitive Services"],
      date: "Mar 2026",
      github: "https://github.com/KoleoshoNifemi/DocuBridge-",
      description:
        "Collaborative desktop word processor with live in-editor translation across 5 languages, real-time multi-user editing over WebSocket, and Azure SQL persistence — built in JavaFX with a Quill.js rich text editor.",
      highlights: [
        "Embedded Quill.js rich text editor in a JavaFX WebView, bridging Java and JavaScript for formatting and clipboard operations",
        "Integrated live in-editor translation across 5 languages via Azure Cognitive Services Translator v3, preserving rich text through a dual-delta sync architecture",
        "Engineered real-time multi-user editing over WebSocket using Quill's delta protocol with ~80ms sync latency and cross-network support via ngrok",
        "Azure SQL Server for cloud-backed auth (BCrypt + JDBC prepared statements) and per-user document storage",
      ],
      group: true,
    },
    {
      name: "Model Router AI",
      tech: ["Python", "FastAPI", "JavaScript", "HTML/CSS"],
      date: "Feb 2026",
      github: "https://github.com/tharunkaarthik/model-router-ai",
      description:
        "Real-time LLM routing dashboard visualizing routing decisions, confidence scores, latency, and escalation state with SSE streaming.",
      highlights: [
        "Derived client-side metrics from backend API responses to calculate routing efficiency and tier distribution",
        "Implemented Server-Sent Events streaming to render token-by-token model responses with live metadata",
        "Integrated multiple API modes (standard, streaming, analysis-only) with consistent UX across async flows",
      ],
    },
    {
      name: "Emplates Chrome Extension",
      tech: ["JavaScript", "HTML5", "CSS3", "Chrome API"],
      date: "Dec 2025",
      github: "https://github.com/tharunkaarthik/emplates",
      description:
        "Chrome extension with 50+ installs and 5-star rating that injects reusable email templates directly into Gmail and Outlook.",
      highlights: [
        "Used MutationObserver to handle dynamic DOM updates in SPA environments",
        "Implemented local template persistence using Chrome Storage API with async CRUD operations",
        "Designed modular content script architecture separating DOM injection from state management",
      ],
    },
    {
      name: "WrdGuess",
      tech: ["Python", "Tkinter", "Pillow", "Docker"],
      date: "Nov 2024",
      github: "https://github.com/tharungopinath/WrdGuess",
      description:
        "Graphical Wordle recreation built in Python — six attempts to guess a five-letter word with color-coded tile and keyboard feedback.",
      highlights: [
        "Full Tkinter GUI with centered window, letter input, and on-screen keyboard tracker",
        "Real-time tile updates with green/yellow/gray feedback validated against a 5-letter dictionary",
        "Win/loss screens with custom icon assets, Pillow image rendering, and Play Again flow",
      ],
    },
  ],
  experience: [
    {
      role: "Teaching Assistant",
      organization: "University of Windsor CS Department (COMP-2650)",
      location: "Windsor, Ontario",
      period: "Sep 2025 – Present",
      current: true,
      highlights: [
        "Led labs and problem-solving sessions covering Boolean algebra, circuit minimization, and sequential logic",
        "Assisted 100+ students with synchronous vs asynchronous circuits and register-transfer logic",
        "Evaluated assignments for logical correctness, circuit optimization, and CPU architectural reasoning",
      ],
    },
    {
      role: "First-Year Representative & Board Member",
      organization: "University of Windsor Computer Science Society",
      location: "Windsor, Ontario",
      period: "Oct 2024 – Oct 2025",
      current: false,
      highlights: [
        "Represented 700+ students, gathering feedback to improve department initiatives",
        "Co-organized WinHacks Hackathon and workshops on Git & LeetCode",
      ],
    },
  ],
  competitions: [
    {
      name: "ICPC East Central NA — Regional Competitor",
      result: "2nd Place at University of Windsor",
      date: "Nov 2024",
      description:
        "Led a 3-member team solving complex, timed algorithmic challenges in Python. Secured 2nd Place among UWindsor teams in the 2024 ICPC East Central NA qualifiers and advanced to Regionals.",
    },
    {
      name: "American Computer Science League",
      result: "National Finalist — Top 20%",
      date: "Aug 2022 – May 2024",
      description:
        "Competed in 4 national-level contests covering number systems, logic circuits, and data structures. Qualified for the National All-Stars round by ranking in the top 20% of competitors nationwide.",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      description:
        "Foundational knowledge in Cloud Architecture and Scalable Infrastructure",
    },
  ],
};

module.exports = resumeData;
