# Darab Ahmed — Portfolio

> Personal portfolio of **Darab Ahmed**, a backend-focused Software Engineer with 3+ years of production experience in fintech, high-throughput Java backends, and concurrent data pipelines.

**Live site:** [darabahmed37.github.io/darab-portfolio](https://darabahmed37.github.io/darab-portfolio)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4 + Vanilla CSS |
| Animation | Framer Motion · react-type-animation |
| Routing | React Router v7 |
| Icons | react-icons |
| Deployment | GitHub Actions → GitHub Pages (`gh-pages`) |

---

## Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── Intro.tsx        # Hero section with TypeAnimation, marquee, CTAs
│   ├── Navbar.tsx       # Top navigation
│   ├── Footer.tsx       # Footer with Gmail compose link
│   ├── Projects.tsx     # Skills/project card grid
│   ├── AboutSection.tsx # Homepage about blurb
│   ├── SkillsShowcase.tsx  # 8-card capability grid (homepage)
│   └── SkillsTeaser.tsx    # Conversion section driving users to /skills
├── Pages/
│   ├── Home.tsx         # Landing page composition
│   ├── Skills.tsx       # Engineering Expertise Hub (/skills)
│   └── AboutMe.tsx      # Full about + work experience (/about-me)
├── assets/              # SVGs (logo, coder illustration, mesh)
├── index.css            # Global styles + all custom CSS classes
└── App.tsx              # Router setup
```

---

## Pages

### `/` — Home
- **Hero** — large gradient headline, TypeAnimation cycling `Software Engineer → Systems Architect → Fintech Engineer`, impact stat badges (3+ yrs / Java / Fintech / AWS), dual CTAs, animated tech marquee, dot-grid background
- **Skills Teaser** — hook headline + 3 highlight cards (Fintech, Concurrency, Database) + large CTA driving users to `/skills`
- **Projects** — animated card grid covering all key technical domains
- **Skills Showcase** — 8 capability cards with icons and bullet points
- **About** — brief bio with link to full about page

### `/skills` — Engineering Expertise Hub
- **Stats bar** — 3+ years · 2 companies · Java · AWS
- **Engineering Principles** — 3 philosophy cards
- **Technology Stack** — 6 colour-coded tag groups (Languages, Backend, Frontend, DB, Cloud, Patterns)
- **Capability Deep-Dive** — 8 expandable accordion panels, each with detailed skill items and inline diagrams:
  - Backend Engineering → REST API lifecycle flow diagram
  - Concurrency & Performance → Thread pool / ExecutorService diagram
  - Database Engineering → EXPLAIN plan before/after diagram
  - Fintech Engineering → Payment transaction state machine
  - Cloud & DevOps → CI/CD pipeline diagram
  - Production Engineering → RCA debugging loop diagram
  - Frontend Engineering
  - AI-Augmented Development

### `/about-me` — About
- Full bio, engineering philosophy, work experience (i2cinc · Devsinc), education

---

## Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & run locally

```bash
git clone https://github.com/darabahmed37/darab-portfolio.git
cd darab-portfolio
npm install
npm run dev
```

Runs at `http://localhost:5173/darab-portfolio/`

### Build for production

```bash
npm run build
```

Output goes to `dist/`.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `vite build` and pushes the `dist/` directory to the `gh-pages` branch via the `gh-pages` package.

---

## Contact

**Email:** [darabahmed37@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=darabahmed37@gmail.com&su=Engineering%20Opportunity%20%E2%80%94%20Darab%20Ahmed&body=Hi%20Darab%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out%20about%20a%20potential%20opportunity.%0A%0ALooking%20forward%20to%20connecting.)

**Portfolio:** [darabahmed37.github.io/darab-portfolio](https://darabahmed37.github.io/darab-portfolio)

---

## License

This project is open source. Feel free to use it as inspiration for your own portfolio — attribution appreciated but not required.
