import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string().min(1),
  shortName: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  location: z.string().min(1),
  valueProposition: z.string().min(1),
  summary: z.string().min(1),
  email: z.string().email(),
  github: z.string().url(),
  linkedin: z.string().url(),
  cv: z.string().min(1),
  portrait: z.string().min(1),
  availability: z.string().min(1),
});

export const NavigationItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

export const ProjectSchema = z.object({
  id: z.string().min(1),
  number: z.string().min(1),
  title: z.string().min(1),
  category: z.string().min(1),
  featured: z.boolean().optional(),
  problem: z.string().min(1),
  solution: z.string().min(1),
  architecture: z.array(z.string().min(1)).min(1),
  challenges: z.string().min(1),
  learned: z.string().min(1),
  result: z.string().min(1),
  tags: z.array(z.string().min(1)).min(1),
  liveUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
});

export const ExperienceItemSchema = z.object({
  type: z.enum(["work", "education"]),
  period: z.string().min(1),
  title: z.string().min(1),
  organization: z.string().min(1),
  location: z.string().min(1),
  description: z.string().min(1),
  highlights: z.array(z.string().min(1)).min(1),
  technologies: z.array(z.string().min(1)).min(1),
});

export const SkillLevelSchema = z.enum(["Primary", "Working knowledge", "Familiar", "Learning"]);

export const SkillItemSchema = z.object({
  name: z.string().min(1),
  level: SkillLevelSchema,
});

export const SkillGroupSchema = z.object({
  category: z.string().min(1),
  note: z.string().min(1),
  items: z.array(SkillItemSchema).min(1),
});

export const SkillLegendItemSchema = z.object({
  level: SkillLevelSchema,
  meaning: z.string().min(1),
});

export const CertificationSchema = z.object({
  title: z.string().min(1),
  issuer: z.string().min(1),
  date: z.string().min(1),
  image: z.string().min(1),
  credentialUrl: z.string().url(),
  tags: z.array(z.string().min(1)).min(1),
});

export const LearningItemSchema = z.object({
  area: z.string().min(1),
  focus: z.string().min(1),
});

export const PrincipleSchema = z.object({
  title: z.string().min(1),
  text: z.string().min(1),
});

export type Profile = z.infer<typeof ProfileSchema>;
export type NavigationItem = z.infer<typeof NavigationItemSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type ExperienceItem = z.infer<typeof ExperienceItemSchema>;
export type SkillLevel = z.infer<typeof SkillLevelSchema>;
export type SkillItem = z.infer<typeof SkillItemSchema>;
export type SkillGroup = z.infer<typeof SkillGroupSchema>;
export type SkillLegendItem = z.infer<typeof SkillLegendItemSchema>;
export type Certification = z.infer<typeof CertificationSchema>;
export type LearningItem = z.infer<typeof LearningItemSchema>;
export type Principle = z.infer<typeof PrincipleSchema>;
