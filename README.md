# Shweta Pandya - Portfolio

A modern, responsive personal portfolio built with React 19, TypeScript, Vite, and Tailwind CSS. Showcases software development, UI/UX design, and research projects, along with credentials and work experience.

**Live site:** [pandyashweta.in](https://pandyashweta.in)

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite (with SSR pre-rendering for SEO)
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Animations:** Motion
- **Icons:** Lucide React
- **Hosting:** Vercel

## Project Structure

Each page owns its own folder with a co-located `index.tsx` entry point, page-specific `components/`, and any page-specific `data/`/`utils/`. Components used by two or more pages live under the shared `components/` directory.

```
src/
├── pages/
│   ├── Home/                  # / — profile sidebar + showcase cards
│   │   └── components/        # Hero, Showcase, AboutMe
│   ├── Projects/               # /projects — coding, design & live website cards
│   │   └── components/        # GithubContributions
│   ├── ProjectDetail/          # /projects/:projectId — in-depth project view
│   │   ├── components/        # IllustrationsView, StandardView
│   │   └── utils/              # markdown parsing, image caption logic
│   ├── Qualifications/         # /qualifications — credentials, focus areas, work experience
│   │   ├── components/        # CertificationCard, SkillsMarquee
│   │   └── data/                # certifications.ts
│   └── NotFound/                # 404 page
├── components/
│   ├── layout/                 # App shell & scroll-coordinated layout wrapper
│   └── common/                  # Shared across pages: ProjectCard, ReachOut
├── data/
│   ├── projects/                # Project content, split by category, barrel-exported
│   └── techCategories.tsx      # Tech stack marquee data
├── types/                       # Shared TypeScript types
├── assets/images/                # Images (project screenshots, illustrations, certificates)
├── App.tsx                      # Router setup
├── main.tsx                     # Client entry point (hydration-aware)
└── entry-server.tsx             # SSR entry point (used by prerender.js)
```

At build time, `prerender.js` statically renders every route (via `entry-server.tsx`), injects per-page SEO meta tags and JSON-LD schema, and generates `sitemap.xml` and `robots.txt` from the same route list — so both stay automatically in sync with the app's routes.

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type-check
npm run lint

# Build for production (client + SSR bundle + prerender + sitemap)
npm run build

# Preview production build
npm run preview
```

## Routes

| Path | Page |
|------|------|
| `/` | Home - profile sidebar + showcase cards |
| `/projects` | Projects - coding, design & live website cards |
| `/projects/:projectId` | Project Detail - in-depth view of individual projects |
| `/qualifications` | Qualifications - credentials, focus areas, and work experience |
| `*` | 404 - Not Found |

## License

MIT
