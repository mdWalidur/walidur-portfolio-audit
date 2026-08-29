import { z } from "zod";

import { ProjectSchema } from "./schemas";

const rawProjects = [
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
    result: "A documented set of verified findings with a retest confirming the remediated issues.",
    tags: ["OWASP ZAP", "Docker", "Web security", "Penetration testing", "Reporting"],
    githubUrl: "https://github.com/mdWalidur/Introduction-to-Cybersecurity",
  },
];

export const projects = z.array(ProjectSchema).parse(rawProjects);
