import histopediaThumbnail from "../../assets/images/histopedia/histopedia.png";
import histopediaWelcome from "../../assets/images/histopedia/Welcome, log in, Sign in, Verify.png";
import histopediaHome from "../../assets/images/histopedia/home.png";
import histopediaCommunity from "../../assets/images/histopedia/Community Page.png";
import histopediaSearch from "../../assets/images/histopedia/Search page.png";
import histopediaProfile from "../../assets/images/histopedia/Profile Section.png";
import perfumeThumbnail from "../../assets/images/perfume/eau de perfume.png";
import perfumeLogin from "../../assets/images/perfume/login & sign in.png";
import perfumeAccount from "../../assets/images/perfume/created account & logged in.jpg";
import perfumeHomepage from "../../assets/images/perfume/Homepage before logged in & logged in message.jpg";
import perfumeWishlist from "../../assets/images/perfume/wishlist & checkout & order placed message.jpg";
import perfumeSubscribe from "../../assets/images/perfume/subscribe & error.png";
import type { ProjectData } from "../../types";

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
