export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  cv: string;
  socials: {
    github: string;
    linkedin: string;
  };
}

export interface AboutData {
  paragraphs: string[];
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string | null;
  images?: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  tasks: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  detail?: string;
  logo?: string;
}
