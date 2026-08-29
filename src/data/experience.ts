import { z } from "zod";

import { ExperienceItemSchema } from "./schemas";

const rawExperience = [
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
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "AWS",
      "Docker",
    ],
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
    technologies: [
      "C#",
      "C++",
      "Python",
      "JavaScript",
      "React",
      "Azure",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },
] as const;

export const experience = z.array(ExperienceItemSchema).parse(rawExperience);
