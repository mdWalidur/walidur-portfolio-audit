export const profile = {
  name: "Md Walidur Rahman",
  shortName: "Walidur",
  title: "IT Engineering Student & Developer",
  subtitle: "Cloud & DevOps enthusiast",
  location: "Tampere, Finland",
  valueProposition:
    "I build practical web applications and work with cloud platforms, containers, and modern software engineering practices.",
  summary:
    "I am an IT Engineering student at Centria University of Applied Sciences. My work sits between software development and cloud infrastructure: building web interfaces, wiring up APIs and data, and learning how systems are deployed, monitored and secured.",
  email: "ratul087@gmail.com",
  github: "https://github.com/mdWalidur",
  linkedin: "https://www.linkedin.com/in/md-walidur-rahman-b86453264/",
  cv: "/Walidur_Rahman_CV.pdf",
  portrait: "/profile/WRprofile.png",
  availability: "Open to internships and junior developer roles",
} as const;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
  { label: "About", href: "#about" },
] as const;

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  featured?: boolean;
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string;
  learned: string;
  result: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "smart-room-monitor",
    number: "01",
    title: "Smart Room Monitor",
    category: "Real-time IoT dashboard",
    featured: true,
    problem:
      "Room conditions change constantly, but a sensor reading is only useful if you can see it as it happens and understand the trend behind it.",
    solution:
      "An end-to-end monitoring system: an ESP32 reads temperature and humidity from a DHT22 sensor, publishes over MQTT, and a Flask service pushes live readings to a browser dashboard through Socket.IO.",
    architecture: [
      "ESP32 + DHT22 sensor node samples on a fixed interval",
      "MQTT broker decouples the device from the application",
      "Flask subscriber normalises payloads and keeps a rolling window",
      "Socket.IO streams updates to a Chart.js dashboard without polling",
    ],
    challenges:
      "Keeping the socket stream stable when the device reconnects, and avoiding chart jitter from noisy sensor samples.",
    learned:
      "How a publish/subscribe boundary makes hardware and application code independently testable, and why buffering matters before visualising sensor data.",
    result:
      "Live readings render in under a second from sensor to browser, with a simulated build published on Wokwi so the system can be demonstrated without hardware.",
    tags: ["ESP32", "DHT22", "MQTT", "Flask", "Socket.IO", "Chart.js"],
    liveUrl: "https://wokwi.com/projects/460027800656399361",
    githubUrl: "https://github.com/mdWalidur/Internet-of-things",
  },
  {
    id: "network-calculator-suite",
    number: "02",
    title: "Network Calculator Suite",
    category: "Networking web tool",
    problem:
      "Subnetting and address maths are done constantly during networking studies, and scattered online calculators explain little about the result.",
    solution:
      "A browser-based toolkit that runs the common network calculations client-side and presents each result in a readable, step-by-step layout.",
    architecture: [
      "Static front end, no backend or tracking",
      "All calculations run locally in the browser",
      "Deployed on GitHub Pages from the repository",
    ],
    challenges:
      "Presenting binary, decimal and CIDR representations side by side without overwhelming the interface on small screens.",
    learned:
      "That a focused tool with clear output beats a feature-heavy one, and how to keep a static site responsive and accessible.",
    result:
      "A free tool used throughout my own networking coursework, loading instantly with zero dependencies.",
    tags: ["Networking", "JavaScript", "GitHub Pages", "Responsive design"],
    liveUrl: "https://mdwalidur.github.io/Network-Calculator-Suite/",
  },
  {
    id: "system-security-assessment",
    number: "03",
    title: "System Security Assessment",
    category: "Application security testing",
    problem:
      "A Docker-deployed booking system needed to be assessed for common web vulnerabilities and, more importantly, the findings had to be understandable to non-security readers.",
    solution:
      "A two-phase assessment using OWASP ZAP: an initial scan and manual verification, then a retest after remediation, with each finding documented by risk, evidence and recommended fix.",
    architecture: [
      "Target application deployed locally with Docker",
      "OWASP ZAP automated scan plus manual verification of findings",
      "Risk-rated report with reproduction steps and remediation advice",
      "Retest phase to confirm which issues were actually closed",
    ],
    challenges:
      "Separating real issues from scanner noise, and writing findings that a developer can act on without security jargon.",
    learned:
      "How to verify a scanner result by hand, and that a security report is only valuable when the remediation path is concrete.",
    result:
      "A documented set of verified findings with a retest confirming the remediated issues.",
    tags: ["OWASP ZAP", "Docker", "Web security", "Penetration testing", "Reporting"],
    githubUrl: "https://github.com/mdWalidur/Introduction-to-Cybersecurity",
  },
];

export type ExperienceItem = {
  type: "work" | "education";
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    type: "work",
    period: "2024 — Present",
    title: "Web and App Developer",
    organization: "Freelance",
    location: "Remote",
    description:
      "Designing and developing web applications with a focus on clean interfaces, maintainable structure and practical deployment.",
    highlights: [
      "Develop responsive web applications with modern JavaScript and React-based tooling.",
      "Build reusable components and keep implementation structured and typed.",
      "Work with cloud services, containers and deployment workflows.",
      "Evaluate and integrate emerging tooling where it solves a real problem.",
    ],
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "AWS", "Docker"],
  },
  {
    type: "work",
    period: "Aug 2020 — Dec 2022",
    title: "Executive",
    organization: "Acsotex Ltd.",
    location: "Narayanganj, Dhaka, Bangladesh",
    description:
      "Operational role in a manufacturing business, working to deadlines with cross-team coordination and reporting.",
    highlights: [
      "Coordinated day-to-day operational responsibilities.",
      "Worked across teams and handled professional communication.",
      "Managed schedules and priorities in a deadline-driven environment.",
    ],
    technologies: ["Operations", "Communication", "Coordination", "Problem solving"],
  },
  {
    type: "education",
    period: "2023 — 2027",
    title: "Bachelor of Engineering, Information Technology",
    organization: "Centria University of Applied Sciences",
    location: "Finland",
    description:
      "Engineering studies covering programming, cloud computing, DevOps, networking, databases, AI and modern software development.",
    highlights: [
      "Coursework in software development, networking and databases.",
      "Practical work with cloud platforms, containers and CI/CD.",
      "Project-based learning with IoT, security and web development assignments.",
    ],
    technologies: ["C#", "C++", "Python", "JavaScript", "React", "Azure", "AWS", "Docker", "Kubernetes"],
  },
];

export type SkillLevel = "Primary" | "Working knowledge" | "Familiar" | "Learning";

export type SkillGroup = {
  category: string;
  note: string;
  items: { name: string; level: SkillLevel }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    note: "Languages used across coursework and personal projects.",
    items: [
      { name: "Python", level: "Primary" },
      { name: "JavaScript", level: "Primary" },
      { name: "TypeScript", level: "Working knowledge" },
      { name: "C#", level: "Working knowledge" },
      { name: "C++", level: "Familiar" },
    ],
  },
  {
    category: "Frontend",
    note: "Interface work, from markup to component architecture.",
    items: [
      { name: "React", level: "Primary" },
      { name: "Next.js", level: "Working knowledge" },
      { name: "HTML", level: "Primary" },
      { name: "CSS", level: "Primary" },
      { name: "Tailwind CSS", level: "Primary" },
    ],
  },
  {
    category: "Backend",
    note: "Server-side logic and interfaces between systems.",
    items: [
      { name: "Node.js", level: "Working knowledge" },
      { name: "REST APIs", level: "Working knowledge" },
      { name: "Flask", level: "Familiar" },
      { name: "Web APIs", level: "Working knowledge" },
    ],
  },
  {
    category: "Database",
    note: "Relational modelling and querying.",
    items: [
      { name: "MySQL", level: "Working knowledge" },
      { name: "PostgreSQL", level: "Familiar" },
      { name: "SQL", level: "Working knowledge" },
    ],
  },
  {
    category: "Cloud & DevOps",
    note: "Backed by AWS Academy coursework and hands-on labs.",
    items: [
      { name: "AWS", level: "Working knowledge" },
      { name: "Azure", level: "Familiar" },
      { name: "Docker", level: "Working knowledge" },
      { name: "Kubernetes", level: "Learning" },
      { name: "GitHub Actions", level: "Familiar" },
      { name: "CI/CD", level: "Familiar" },
    ],
  },
  {
    category: "Observability & Security",
    note: "Understanding what a system is doing, and where it is weak.",
    items: [
      { name: "Prometheus", level: "Learning" },
      { name: "Grafana", level: "Learning" },
      { name: "OWASP ZAP", level: "Familiar" },
      { name: "Linux", level: "Working knowledge" },
    ],
  },
];

export const skillLegend: { level: SkillLevel; meaning: string }[] = [
  { level: "Primary", meaning: "Used regularly in projects" },
  { level: "Working knowledge", meaning: "Comfortable building with it" },
  { level: "Familiar", meaning: "Used in coursework or smaller tasks" },
  { level: "Learning", meaning: "Actively studying right now" },
];

export const certifications = [
  {
    title: "AWS Academy Graduate — Cloud Developing",
    issuer: "Amazon Web Services",
    date: "March 2026",
    image: "/certifications/aws-cloud-developing.png",
    credentialUrl: "https://www.credly.com/badges/c6f58ca3-a1d7-4dbd-a812-1e4b08e1c9d5",
    tags: ["AWS", "Cloud development"],
  },
  {
    title: "AWS Academy Graduate — Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "October 2025",
    image: "/certifications/aws-cloud-foundations.png",
    credentialUrl: "https://www.credly.com/badges/0d867bd2-b54c-49a2-a398-3190079c7118",
    tags: ["AWS", "Cloud computing"],
  },
  {
    title: "AWS Academy Graduate — Cloud Operations",
    issuer: "Amazon Web Services",
    date: "October 2025",
    image: "/certifications/aws-cloud-operations.png",
    credentialUrl: "https://www.credly.com/badges/f730dfaa-e2f8-447b-bbee-36430e20b45d",
    tags: ["AWS", "Cloud operations"],
  },
];

export const learning = [
  { area: "Cloud", focus: "AWS service design, IAM boundaries and cost-aware architecture." },
  { area: "DevOps", focus: "Container orchestration with Kubernetes and pipeline automation." },
  { area: "Observability", focus: "Metrics and dashboards with Prometheus and Grafana." },
  { area: "Security", focus: "Web application testing and secure defaults in deployment." },
  { area: "Software engineering", focus: "Typed architecture, testing and readable system design." },
];

export const principles = [
  {
    title: "Built with intent",
    text: "Structure before decoration. Code that the next person, including future me, can follow.",
  },
  {
    title: "Systems thinking",
    text: "A feature is not finished at the interface. It has to deploy, run and be observable.",
  },
  {
    title: "Learning in public",
    text: "Every project here exists because I wanted to understand something properly.",
  },
];
