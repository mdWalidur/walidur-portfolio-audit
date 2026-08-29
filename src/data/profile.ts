import { z } from "zod";

import { NavigationItemSchema, ProfileSchema } from "./schemas";

const rawProfile = {
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
};

const rawNavigation = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
  { label: "About", href: "#about" },
];

export const portfolioContentVersion = "v1" as const;

export const profile = ProfileSchema.parse(rawProfile);
export const navigation = z.array(NavigationItemSchema).parse(rawNavigation);
