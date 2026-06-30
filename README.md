# Pandya Shweta - Portfolio

A modern, responsive personal portfolio built with React 19, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Animations:** Motion
- **Icons:** Lucide React

## Project Structure

```
src/
├── pages/              # Route-level pages (Home, Projects)
├── components/
│   ├── layout/         # App shell & layout wrapper
│   ├── sections/       # Content sections (Hero, About, Experience, etc.)
│   └── ui/             # Reusable UI components (ProjectCard, ScrollToTop)
├── data/               # Static data (projects, tech categories)
├── types/              # Shared TypeScript types
├── assets/             # Images
├── App.tsx             # Router setup
└── main.tsx            # Entry point
```

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
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

## License

MIT
