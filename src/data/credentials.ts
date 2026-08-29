import { z } from "zod";

import { CertificationSchema, PrincipleSchema } from "./schemas";

const rawCertifications = [
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

const rawPrinciples = [
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

export const certifications = z.array(CertificationSchema).parse(rawCertifications);
export const principles = z.array(PrincipleSchema).parse(rawPrinciples);
