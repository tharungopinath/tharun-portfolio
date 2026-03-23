// This Next.js API route proxies to the Express backend.
// Falls back to embedded data if backend is unreachable.

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

// Fallback static data (mirrors backend/data/resumeData.js)
const fallbackData = {
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
      name: "Java Math Game",
      tech: ["Java", "Swing API"],
      date: "Oct 2025",
      github: "https://github.com/tharunkaarthik/java-math-game",
      description:
        "Modular, event-driven desktop application with multiple game modes, local multiplayer, and leaderboard system.",
      highlights: [
        "Built with Java Swing and CardLayout for multi-screen navigation",
        "Implemented timed, sudden-death, lives-based, and custom-length game modes with full state management",
        "Designed local multiplayer with leaderboard sorting using custom Comparators",
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
        "Led labs covering Boolean algebra, circuit minimization, and sequential logic",
        "Assisted 100+ students with synchronous vs asynchronous circuits and RTL",
        "Evaluated assignments for logical correctness and CPU architectural reasoning",
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
        "Led a 3-member team solving complex algorithmic challenges in Python. Secured 2nd Place among UWindsor teams in the 2024 ICPC East Central NA qualifiers and advanced to Regionals.",
    },
    {
      name: "American Computer Science League",
      result: "National Finalist — Top 20%",
      date: "Aug 2022 – May 2024",
      description:
        "Competed in 4 national-level contests covering number systems, logic circuits, and data structures. Qualified for the National All-Stars round by ranking in the top 20% nationwide.",
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

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(`${BACKEND_URL}/api/resume`, {
      signal: AbortSignal.timeout(3000),
    });
    if (!response.ok) throw new Error("Backend error");
    const data = await response.json();
    return res.status(200).json(data);
  } catch {
    // Backend unreachable — return embedded fallback data
    return res.status(200).json(fallbackData);
  }
}
