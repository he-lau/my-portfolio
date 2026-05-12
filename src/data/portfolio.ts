import type {
  Profile,
  AboutData,
  SkillGroup,
  Project,
  Experience,
  Education,
} from "@/types";

export type { Profile, AboutData, SkillGroup, Project, Experience, Education };

export const profile: Profile = {
  name: "Laurent HE",
  role: "Développeur PHP / JavaScript",
  tagline:
    "Développeur back-end et front-end passionné, je construis des outils web solides avec PHP, React et Node.js.",
  location: "Paris, France",
  email: "laurent.he.dev@gmail.com",
  phone: "+33 7 81 37 67 62",
  cv: "/CV_Laurent_HE.docx",
  socials: {
    github: "https://github.com/he-lau",
    linkedin: "https://linkedin.com/in/laurent-he-5a381719a/",
  },
};

export const about: AboutData = {
  paragraphs: [
    "Développeur PHP / JavaScript titulaire d'un Master en Informatique, avec 2 ans d'expérience sur des projets back-end et front-end.",
    "Animé par l'envie d'apprendre, je recherche un poste stimulant où je pourrai monter en compétences, contribuer à des projets solides et évoluer aux côtés d'une équipe expérimentée.",
  ],
  highlights: ["2 ans d'expérience", "Master Informatique", "Disponible"],
};

export const skills: SkillGroup[] = [
  {
    category: "Langages",
    items: ["PHP", "JavaScript", "Python", "Java", "C"],
  },
  {
    category: "Front-end",
    items: ["React", "Next.js", "jQuery", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Back-end",
    items: ["Node.js", "Express", "Symfony"],
  },
  {
    category: "Bases de données",
    items: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB"],
  },
  {
    category: "DevOps",
    items: ["Docker", "GitHub", "Vercel"],
  },
  {
    category: "CMS",
    items: ["Wordpress", "Moodle"],
  },
  {
    category: "IA & Automatisation",
    items: ["n8n", "Ollama"],
  },
  {
    category: "Monitoring",
    items: ["Grafana"],
  },
];

export const projects: Project[] = [
  {
    title: "Scraper de fonds de commerce",
    description:
      "Collecte automatisée d'annonces (bars, tabacs) sur cessionPME et huarenjie.com via CRON, avec API REST et interface React.",
    stack: [
      "Python",
      "Playwright",
      "PostgreSQL",
      "Express.js",
      "React",
      "Docker",
    ],
    github: "https://github.com/he-lau/scraper-tabac",
    demo: "https://scraper.tabac.laurenthe.fr/",
    images: ["/projects/scraper-1.png", "/projects/scraper-2.png"],
  },
];

export const experiences: Experience[] = [
  {
    title: "Développeur PHP",
    company: "Université Paris 8",
    location: "Saint-Denis",
    type: "CDD",
    period: "Oct. 2024 – Présent",
    tasks: [
      "Développement de plusieurs plugins Moodle sur mesure, dont un système d'inscription automatisée de +3 000 utilisateurs via CAS & LDAP.",
      "Développement d'un logiciel de prise de consentement étudiant avec envoi d'emails et génération de PDFs.",
      "Analyse de données et production de rapports via l'API Moodle et requêtes SQL.",
      "Automatisation de tâches récurrentes via CRON.",
    ],
  },
  {
    title: "Développeur PHP",
    company: "Legal Express",
    location: "Paris",
    type: "Stage & alternance",
    period: "Avr. 2023 – Sept. 2024",
    tasks: [
      "Amélioration du back-office (application web interne PHP / Bootstrap).",
      "Intégration d'un système de paiement en ligne et de facturation automatique via Stripe.",
      "Création d'un outil de gestion de projet interne (KANBAN, suivi des tâches, calendrier).",
      "Développement d'un tableau de bord analytique pour la prise de décision.",
      "Refonte complète de l'interface utilisateur (UX/UI).",
    ],
  },
  {
    title: "Développeur web",
    company: "Université Paris 8",
    location: "Saint-Denis",
    type: "Stage",
    period: "Juin 2022 – Août 2022",
    tasks: [
      "Refonte du site web SPIP de l'UFR de psychologie de l'université Paris 8.",
    ],
  },
  {
    title: "Développeur web",
    company: "Opinaka",
    location: "Montpellier",
    type: "Stage",
    period: "Juin 2020 – Juillet 2020",
    tasks: [
      "Intégration de présentations web et création de plugins Grafana en TypeScript.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Master Informatique",
    school: "Université Paris 8",
    location: "Saint-Denis",
    period: "2023 – 2024",
    detail: "Spécialisation : Technologies de l'Hypermédia",
    logo: "/logos/paris8.png",
  },
  {
    degree: "Licence Informatique",
    school: "Université Paris 8",
    location: "Saint-Denis",
    period: "sept. 2021 – juin 2022",
    detail: "ISEI — Informatique des Systèmes Embarqués Interactifs",
    logo: "/logos/paris8.png",
  },
  {
    degree: "DUT Informatique",
    school: "Université Paris 13",
    location: "Villetaneuse",
    period: "2018 – 2020",
    logo: "/logos/paris13.png",
  },
];
