# Portfolio

Portfolio personnel — construit avec Next.js, TypeScript et Tailwind CSS.

## Stack

- **Framework** — [Next.js 16](https://nextjs.org) (App Router)
- **Langage** — [TypeScript](https://www.typescriptlang.org)
- **Styles** — [Tailwind CSS v4](https://tailwindcss.com) + CSS custom
- **Runtime** — [Node.js](https://nodejs.org)

## Structure

```
src/
  app/
    layout.tsx       # Layout racine (metadata, html, body)
    page.tsx         # Page d'accueil
    globals.css      # Styles globaux + Tailwind
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Contact.tsx
    Footer.tsx
  data/
    portfolio.ts     # Toutes les données du site (à personnaliser)
public/
  favicon.svg
```

## Démarrage

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Personnalisation

Toutes les données (nom, projets, compétences, liens) sont centralisées dans `src/data/portfolio.ts`.

## Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | Lint du code |
