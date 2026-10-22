# Valeriia Kolesnyk — Portfolio

**Website Link: [lera-kolesnik.github.io](https://lera-kolesnik.github.io/)**

Personal portfolio of a full-stack software engineer working with TypeScript, React, React Native and Python.
Designed and built from scratch: responsive layout, light and dark themes, and automatic deployment on every push.

[![React](https://img.shields.io/badge/React_19-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=githubactions&logoColor=white)](https://github.com/features/actions)

## Tech stack

| Area | Tools |
|---|---|
| Framework | React 19, TypeScript |
| Build | Vite |
| Styling | CSS Modules, CSS custom properties (design tokens) |
| Icons | Lucide |
| Code quality | Oxlint |
| CI/CD | GitHub Actions → GitHub Pages |

## Features

- **Responsive design**: desktop layout plus a dedicated mobile menu
- **Light / dark theme** that follows the system setting and remembers the visitor's choice
- **Active section highlighting** in the navigation while scrolling
- **Typed content layer**: all text lives in one typed data file, so components only render data
- **Accessible markup**: semantic HTML, ARIA labels and visible focus states, plus support for reduced motion
- **Automatic deployment**: every push to `main` is built and published by GitHub Actions

## Project structure

```
src/
├─ components/
│  ├─ layout/      # Header, Footer
│  ├─ sections/    # Hero, About, Skills, Projects, Experience, Updates, Contact
│  └─ ui/          # Reusable pieces: Tag, Icon, SectionHeading, ThemeToggle
├─ data/           # CV content and LinkedIn posts (typed)
├─ hooks/          # useTheme, useActiveSection
├─ styles/         # Design tokens and global styles
└─ types/          # TypeScript interfaces for all content
```

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

---

Design inspired by [pepelsbey.dev](https://pepelsbey.dev/).
