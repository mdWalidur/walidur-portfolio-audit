import { z } from "zod";

import { LearningItemSchema, SkillGroupSchema, SkillLegendItemSchema } from "./schemas";

const rawSkillGroups = [
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

const rawSkillLegend = [
  { level: "Primary", meaning: "Used regularly in projects" },
  { level: "Working knowledge", meaning: "Comfortable building with it" },
  { level: "Familiar", meaning: "Used in coursework or smaller tasks" },
  { level: "Learning", meaning: "Actively studying right now" },
];

const rawLearning = [
  { area: "Cloud", focus: "AWS service design, IAM boundaries and cost-aware architecture." },
  { area: "DevOps", focus: "Container orchestration with Kubernetes and pipeline automation." },
  { area: "Observability", focus: "Metrics and dashboards with Prometheus and Grafana." },
  { area: "Security", focus: "Web application testing and secure defaults in deployment." },
  {
    area: "Software engineering",
    focus: "Typed architecture, testing and readable system design.",
  },
];

export const skillGroups = z.array(SkillGroupSchema).parse(rawSkillGroups);
export const skillLegend = z.array(SkillLegendItemSchema).parse(rawSkillLegend);
export const learning = z.array(LearningItemSchema).parse(rawLearning);
