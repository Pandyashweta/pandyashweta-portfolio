import beyondlabsLiveImg from "../../assets/images/beyondlabs_live_card.webp";
import type { ProjectData } from "../../types";

export const liveProjects: ProjectData[] = [
  {
    id: "beyond-labs",
    title: "Beyond Labs Platform",
    category: "Live Website • React & Production System",
    image: beyondlabsLiveImg,
    aspectClass: "aspect-[16/7]",
    url: "https://beyondlabs.io/",
    year: "2026",
    scope: "React | Tailwind CSS | Frontend Architecture | Production Deployment",
    client: "Beyond Labs",
    duration: "6 Weeks",
    aboutText: `## Project Overview

Beyond Labs is an enterprise-grade technology solutions firm. The platform showcases elite engineering solutions, case studies, and services, offering clients a high-performance, modern web experience built with speed, scalability, and robust structure in mind.

---

## Core Features

* High-fidelity, responsive corporate interface
* Dynamic showcase panels for case studies and services
* Interactive contact and briefing schedules
* Optimized asset delivery and fast load metrics

---

## Tech Stack

* **Frontend**: React.js, Tailwind CSS
* **Bundler & Tooling**: Vite
* **Hosting & Security**: Production-ready deployment pipelines`,
    images: [beyondlabsLiveImg],
  },
];
