# Portfolio

Portfolio personnel — construit avec Next.js, TypeScript et Tailwind CSS.

## Stack

- **Framework** — [Next.js 16](https://nextjs.org) (App Router)
- **Langage** — [TypeScript](https://www.typescriptlang.org)
- **Styles** — [Tailwind CSS v4](https://tailwindcss.com) + CSS custom
- **Animations** — [Framer Motion](https://www.framer-motion.com)
- **Runtime** — [Node.js 22](https://nodejs.org)
- **Déploiement** — [Vercel](https://vercel.com)

## Structure

```
src/
  app/
    layout.tsx       # Layout racine (metadata, html, body)
    page.tsx         # Page d'accueil
    globals.css      # Styles globaux + Tailwind
  components/        # Composants de chaque section
  data/
    portfolio.ts     # Toutes les données du site (à personnaliser)
  types/
    index.ts         # Interfaces TypeScript
  lib/
    tech-icons.tsx   # Mapping icônes react-icons
public/
  logos/             # Logos des universités
  projects/          # Screenshots des projets
```

## Démarrage

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Personnalisation

Toutes les données (nom, projets, compétences, liens) sont centralisées dans `src/data/portfolio.ts`.

## Workflow

- **Commit** — Husky déclenche lint-staged : ESLint + Prettier sur les fichiers stagés
- **Push** — GitHub Actions lance `tsc --noEmit` pour vérifier les types
- **Déploiement** — Vercel déploie automatiquement sur push

## Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | Lint du code |
| `npm run format` | Formatage Prettier |
