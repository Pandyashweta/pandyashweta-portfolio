import redCurvesImg from "../assets/images/sculptural_red_curves_1782239373838.webp";
import projectsThumbnailNew from "../assets/images/projects.webp";
import illustrationsThumbnailNew from "../assets/images/illustrations.webp";
import qualificationsThumbnailNew from "../assets/images/qualifications.webp";
import industrialObjImg from "../assets/images/futuristic_industrial_object_1782239432045.webp";
import figmaPortfolioImg from "../assets/images/figma_portfolio_layout.webp";
import beyondlabsLiveImg from "../assets/images/beyondlabs_live_card.webp";
import histopediaThumbnail from "../assets/images/histopedia/histopedia.png";
import histopediaWelcome from "../assets/images/histopedia/Welcome, log in, Sign in, Verify.png";
import histopediaHome from "../assets/images/histopedia/home.png";
import histopediaCommunity from "../assets/images/histopedia/Community Page.png";
import histopediaSearch from "../assets/images/histopedia/Search page.png";
import histopediaProfile from "../assets/images/histopedia/Profile Section.png";
import perfumeThumbnail from "../assets/images/perfume/eau de perfume.png";
import perfumeLogin from "../assets/images/perfume/login & sign in.png";
import perfumeAccount from "../assets/images/perfume/created account & logged in.jpg";
import perfumeHomepage from "../assets/images/perfume/Homepage before logged in & logged in message.jpg";
import perfumeWishlist from "../assets/images/perfume/wishlist & checkout & order placed message.jpg";
import perfumeSubscribe from "../assets/images/perfume/subscribe & error.png";
import artaCryingLady from "../assets/images/Pencil art/Art/a crying lady.jpeg";
import artaCultureArt from "../assets/images/Pencil art/Art/a culture art.jpeg";
import artaWindowArt from "../assets/images/Pencil art/Art/a window art.jpeg";
import artbloomingFlowers from "../assets/images/Pencil art/Art/blooming flowers.jpeg";
import artbloomingHearts from "../assets/images/Pencil art/Art/blooming hearts.jpeg";
import artbrokenTimeClock from "../assets/images/Pencil art/Art/broken time clock.jpeg";
import artdeathCard from "../assets/images/Pencil art/Art/death card.jpeg";
import artflowersDesigns from "../assets/images/Pencil art/Art/flowers - designs.jpeg";
import artfruitsButterfly from "../assets/images/Pencil art/Art/fruits & butterfly.jpeg";
import artjapanseFan from "../assets/images/Pencil art/Art/Japanse fan.jpeg";
import artmirrorButterfly from "../assets/images/Pencil art/Art/mirror - butterfly.jpeg";
import artpeacock from "../assets/images/Pencil art/Art/peacock.jpeg";
import doodlesanotherFlower from "../assets/images/Pencil art/Doodles/another flower.jpeg";
import doodlesbabies from "../assets/images/Pencil art/Doodles/babies.jpeg";
import doodlescuteButIdk from "../assets/images/Pencil art/Doodles/cute but idk.jpeg";
import doodlesdancingLady from "../assets/images/Pencil art/Doodles/dancing lady.jpeg";
import doodlesdoodle from "../assets/images/Pencil art/Doodles/doodle.jpeg";
import doodlesflower from "../assets/images/Pencil art/Doodles/flower.jpeg";
import doodlesgirl from "../assets/images/Pencil art/Doodles/girl.jpeg";
import doodlesgojoJjkRefrence from "../assets/images/Pencil art/Doodles/gojo - JJK refrence.jpeg";
import doodlesguy from "../assets/images/Pencil art/Doodles/guy.jpeg";
import doodleshairLeaf from "../assets/images/Pencil art/Doodles/hair & leaf.jpeg";
import doodlessaucyLady from "../assets/images/Pencil art/Doodles/saucy lady.jpeg";
import doodlesswansGhibliRelated from "../assets/images/Pencil art/Doodles/swans & ghibli related.jpeg";
import fashionaPrettyDress from "../assets/images/Pencil art/Fashion/a pretty dress.jpeg";
import fashiondreamGown from "../assets/images/Pencil art/Fashion/dream gown.jpeg";
import fashionflowerDress from "../assets/images/Pencil art/Fashion/flower dress.jpeg";
import fashionladyWithSword from "../assets/images/Pencil art/Fashion/lady with sword.jpeg";
import fashionmaybeBodyconeButCoolBunny from "../assets/images/Pencil art/Fashion/maybe bodycone but cool bunny.jpeg";
import fashionsaree from "../assets/images/Pencil art/Fashion/saree.jpeg";
import fashionsomethingTraditionalAndWestern from "../assets/images/Pencil art/Fashion/something traditional and western.jpeg";
import fashionthreeGowns from "../assets/images/Pencil art/Fashion/three gowns.jpeg";
import godbeautifulGoddess from "../assets/images/Pencil art/God/beautiful goddess.jpeg";
import godganesh from "../assets/images/Pencil art/God/ganesh.jpeg";
import godjagannath from "../assets/images/Pencil art/God/jagannath.jpeg";
import godkrishanRadha from "../assets/images/Pencil art/God/krishan & radha.jpeg";
import godkrishnaRadha from "../assets/images/Pencil art/God/krishna-radha.jpeg";
import godradha from "../assets/images/Pencil art/God/radha.jpeg";
import godsaraswati from "../assets/images/Pencil art/God/saraswati.jpeg";
import type { ProjectData } from "../types";

export const sketchTitles: Record<string, string> = {
  [artaCryingLady]: "A Crying Lady",
  [artaCultureArt]: "A Culture Art",
  [artaWindowArt]: "A Window Art",
  [artbloomingFlowers]: "Blooming Flowers",
  [artbloomingHearts]: "Blooming Hearts",
  [artbrokenTimeClock]: "Broken Time Clock",
  [artdeathCard]: "Death Card",
  [artflowersDesigns]: "Flowers Designs",
  [artfruitsButterfly]: "Fruits & Butterfly",
  [artjapanseFan]: "Japanse Fan",
  [artmirrorButterfly]: "Mirror Butterfly",
  [artpeacock]: "Peacock",
  [doodlesanotherFlower]: "Another Flower",
  [doodlesbabies]: "Babies",
  [doodlescuteButIdk]: "Cute But Idk",
  [doodlesdancingLady]: "Dancing Lady",
  [doodlesdoodle]: "Doodle",
  [doodlesflower]: "Flower",
  [doodlesgirl]: "Girl",
  [doodlesgojoJjkRefrence]: "Gojo Jjk Reference",
  [doodlesguy]: "Guy",
  [doodleshairLeaf]: "Hair & Leaf",
  [doodlessaucyLady]: "Saucy Lady",
  [doodlesswansGhibliRelated]: "Swans & Ghibli Related",
  [fashionaPrettyDress]: "A Pretty Dress",
  [fashiondreamGown]: "Dream Gown",
  [fashionflowerDress]: "Flower Dress",
  [fashionladyWithSword]: "Lady With Sword",
  [fashionmaybeBodyconeButCoolBunny]: "Maybe Bodycone But Cool Bunny",
  [fashionsaree]: "Saree",
  [fashionsomethingTraditionalAndWestern]: "Something Traditional And Western",
  [fashionthreeGowns]: "Three Gowns",
  [godbeautifulGoddess]: "Beautiful Goddess",
  [godganesh]: "Ganesh",
  [godjagannath]: "Jagannath",
  [godkrishanRadha]: "Krishan & Radha",
  [godkrishnaRadha]: "Krishna Radha",
  [godradha]: "Radha",
  [godsaraswati]: "Saraswati",
};

export const showcaseProjects: ProjectData[] = [
  {
    id: "spatial-flows",
    title: "Projects",
    category: "Software Development",
    image: projectsThumbnailNew,
    spanClass: "md:row-span-2 md:col-span-1",
    aspectClass: "aspect-[3/4] md:aspect-auto md:h-full",
  },
  {
    id: "illustrations",
    title: "Illustrations",
    category: "Creative Design",
    image: illustrationsThumbnailNew,
    spanClass: "col-span-1",
    aspectClass: "aspect-[16/10] md:aspect-auto md:h-full",
    description: "A showcase of custom vector illustrations and visual artwork exploration.",
    year: "2026",
    scope: "Vector Art | Illustration | Digital Design | Visual Worldbuilding",
    client: "Personal Exploration",
    duration: "Ongoing",
    aboutText: "A collection of digital illustrations and personal artwork exploring concepts of life, technology, and mystic geometry. Using modern vector tools and design platforms, each illustration focuses on detailed visual composition, visual worldbuilding, and abstract concepts.",
    images: [
      artaCryingLady,
      artaCultureArt,
      artaWindowArt,
      artbloomingFlowers,
      artbloomingHearts,
      artbrokenTimeClock,
      artdeathCard,
      artflowersDesigns,
      artfruitsButterfly,
      artjapanseFan,
      artmirrorButterfly,
      artpeacock,
      doodlesanotherFlower,
      doodlesbabies,
      doodlescuteButIdk,
      doodlesdancingLady,
      doodlesdoodle,
      doodlesflower,
      doodlesgirl,
      doodlesgojoJjkRefrence,
      doodlesguy,
      doodleshairLeaf,
      doodlessaucyLady,
      doodlesswansGhibliRelated,
      fashionaPrettyDress,
      fashiondreamGown,
      fashionflowerDress,
      fashionladyWithSword,
      fashionmaybeBodyconeButCoolBunny,
      fashionsaree,
      fashionsomethingTraditionalAndWestern,
      fashionthreeGowns,
      godbeautifulGoddess,
      godganesh,
      godjagannath,
      godkrishanRadha,
      godkrishnaRadha,
      godradha,
      godsaraswati,
    ],
    pencilCategories: [
      {
        id: "art",
        name: "Art",
        images: [
          artaCryingLady,
          artaCultureArt,
          artaWindowArt,
          artbloomingFlowers,
          artbloomingHearts,
          artbrokenTimeClock,
          artdeathCard,
          artflowersDesigns,
          artfruitsButterfly,
          artjapanseFan,
          artmirrorButterfly,
          artpeacock,
        ],
      },
      {
        id: "doodles",
        name: "Doodles",
        images: [
          doodlesanotherFlower,
          doodlesbabies,
          doodlescuteButIdk,
          doodlesdancingLady,
          doodlesdoodle,
          doodlesflower,
          doodlesgirl,
          doodlesgojoJjkRefrence,
          doodlesguy,
          doodleshairLeaf,
          doodlessaucyLady,
          doodlesswansGhibliRelated,
        ],
      },
      {
        id: "fashion",
        name: "Fashion",
        images: [
          fashionaPrettyDress,
          fashiondreamGown,
          fashionflowerDress,
          fashionladyWithSword,
          fashionmaybeBodyconeButCoolBunny,
          fashionsaree,
          fashionsomethingTraditionalAndWestern,
          fashionthreeGowns,
        ],
      },
      {
        id: "god",
        name: "God",
        images: [
          godbeautifulGoddess,
          godganesh,
          godjagannath,
          godkrishanRadha,
          godkrishnaRadha,
          godradha,
          godsaraswati,
        ],
      },
    ],
  },
  {
    id: "qualifications",
    title: "Qualifications",
    category: "Credentials & Skills",
    image: qualificationsThumbnailNew,
    spanClass: "col-span-1",
    aspectClass: "aspect-[16/10] md:aspect-auto md:h-full",
  },
];

export const codingProjects: ProjectData[] = [
  {
    id: "automation-engine",
    title: "Workflow Automation Engine",
    category: "Coding • Node.js & Integration",
    image: industrialObjImg,
    aspectClass: "aspect-[16/10]",
    description: "A custom automation pipeline built to orchestrate, monitor, and streamline API operations and data movement.",
    year: "2026",
    scope: "Node.js | API Integration | Workflow Orchestration | Database Systems",
    client: "Internal System",
    duration: "4 Weeks",
    aboutText: "The Workflow Automation Engine is designed to solve complex data flows across multiple cloud and REST API interfaces. By utilizing a modular, event-driven Node.js architecture, it schedules, runs, and monitors tasks with complete observability, preventing system drift and automating routine data operations.",
    images: [industrialObjImg],
  },
  {
    id: "data-imaging",
    title: "Data-Driven Imaging Solutions",
    category: "Coding • Java & ImageJ Development",
    image: redCurvesImg,
    aspectClass: "aspect-[16/10]",
    description: "ImageJ plugins and scripts built to process high-throughput cellular data and microscopy imagery.",
    year: "2025",
    scope: "Java | ImageJ API | Image Analysis | Automated Scripts",
    client: "Research Project",
    duration: "8 Weeks",
    aboutText: "This project involved creating modular Java plugins and automation scripts for ImageJ to streamline microscopy analysis. The plugins handle automated thresholding, cell counting, and metric exportation, reducing manual analysis time for research teams by over 80%.",
    images: [redCurvesImg],
  },
];

export const figmaProjects: ProjectData[] = [
  {
    id: "eau-de-perfume",
    title: "EAU DE PERFUME",
    category: "Figma • UI/UX Design & Luxury E-Commerce",
    image: perfumeThumbnail,
    aspectClass: "aspect-[16/10]",
    description: "A luxury fragrance e-commerce concept designed to deliver a premium online shopping experience.",
    year: "2026",
    scope: "Figma | UI/UX Design | Web Mockups | Responsive Design",
    client: "Design Exploration",
    duration: "1 Week",
    url: "https://www.figma.com/community/file/1653804240648155757/eau-de-parfum",
    aboutText: `## Project Overview

EAU DE PERFUME is a luxury fragrance e-commerce concept designed to deliver a premium online shopping experience. The project combines elegant visuals, seamless user flows, and modern UI principles to create an immersive platform where users can discover, purchase, and manage luxury fragrances with ease.

---

## My Role

* UX Research
* User Flow Design
* Information Architecture
* Wireframing
* UI Design
* Design System
* Responsive Web Design
* Interactive Prototyping

---

## Key Features

* Luxury Product Catalog
* Product Detail Experience
* Wishlist Management
* Secure Authentication
* Google Sign-In Integration
* Shopping Cart & Checkout
* Order Confirmation Flow
* Premium Error & Success States
* Newsletter Subscription
* Responsive Landing Page

---

## Design Process

Research → User Journey Mapping → Information Architecture → Wireframes → High-Fidelity UI → Interactive Prototype → Visual Refinement

---

## Outcome

EAU DE PERFUME delivers a refined luxury shopping experience through elegant visual design, intuitive navigation, and frictionless purchasing flows. The project demonstrates how thoughtful UX and premium aesthetics can elevate an online retail experience while maintaining usability and accessibility.

---

## Project Resources

**Figma Design** - [Link](https://www.figma.com/community/file/1653804240648155757/eau-de-parfum)
Explore the complete collection of high-fidelity screens, reusable components, responsive layouts, and interactive prototypes.`,
    images: [
      perfumeThumbnail,
      perfumeLogin,
      perfumeAccount,
      perfumeHomepage,
      perfumeWishlist,
      perfumeSubscribe
    ],
  },
  {
    id: "histopedia",
    title: "Histopedia",
    category: "Figma • UI/UX Design & History App",
    image: histopediaThumbnail,
    aspectClass: "aspect-[16/10]",
    description: "An interactive digital platform designed for exploring world history through maps, timelines, and community discussions.",
    year: "2025",
    scope: "Figma Community | UI/UX Design | High-fidelity Mockups | Interactive Prototyping",
    client: "MSc. IT student project",
    duration: "3 Weeks",
    aboutText: `## Project Overview

Histopedia is a UI/UX concept that reimagines how users discover and explore world history through an interactive, visually engaging digital platform. It combines curated historical content, map-based exploration, and community contributions to make learning history more accessible, immersive, and enjoyable.

---

## My Role

* UX Research
* User Personas
* Information Architecture
* Wireframing
* UI Design
* Design System
* Interactive Prototyping

---

## Key Features

* Interactive historical feed
* Map-based heritage exploration
* Community discussions & contributions
* Personalized recommendations
* Historical detail pages
* Secure authentication
* Premium subscription experience

---

## Design Process

Research → Personas → Information Architecture → Wireframes → High-Fidelity UI → Interactive Prototype → Usability Improvements

---

## Outcome

Histopedia transforms traditional historical archives into a modern, user-friendly experience that encourages exploration, learning, and community engagement while preserving cultural heritage.

---

## Project Resources

**UX Report** - [Link](https://drive.google.com/drive/folders/1ocO14HdTun2shwa4dG2cUDbSPzOC-0CV?usp=sharing)
Explore the complete design process, research, usability analysis, and project documentation.

**User Personas** - [Link](https://drive.google.com/drive/folders/1A_f9C8wQVJR_1GuMOKtLFtyQ-mTScpCC?usp=sharing)
View the research-driven personas that shaped key product decisions.`,
    images: [
      histopediaThumbnail,
      histopediaWelcome,
      histopediaHome,
      histopediaCommunity,
      histopediaSearch,
      histopediaProfile
    ],
  },
];

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

export const researchProjects: ProjectData[] = [
  {
    id: "image-analysis-research",
    title: "Automated Image Analysis & Processing Models",
    category: "Research • Java & ImageJ Systems",
    image: industrialObjImg,
    aspectClass: "aspect-[16/7]",
    year: "2025",
    scope: "Java | ImageJ API | Image Analysis | Automated Scripts",
    client: "Research Project",
    duration: "8 Weeks",
    aboutText: `## Project Overview

This research project involved creating modular Java plugins and automation scripts for ImageJ to streamline microscopy analysis. The plugins handle automated thresholding, cell counting, and metric exportation, reducing manual analysis time for research teams by over 80%.

---

## Key Accomplishments

* Automated image thresholding and segmentation
* High-throughput cellular data counting algorithms
* Modular Java plugins for extensible research pipelines
* Custom macro scripting for high-throughput batch operations`,
    images: [industrialObjImg],
  }
];

export const brandLogos = [
  { name: "OPERATIONS", desc: "Process & Efficiency" },
  { name: "DESIGN", desc: "User Experience & Strategy" },
  { name: "DEVELOPMENT", desc: "Frontend & Systems" },
  { name: "AUTOMATION", desc: "Workflow Integration" },
  { name: "STRATEGY", desc: "Product Architecture" },
  { name: "SYSTEMS", desc: "Scalable Infrastructure" },
  { name: "RESEARCH", desc: "User & Product Discovery" },
];
