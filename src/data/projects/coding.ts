import industrialObjImg from "../../assets/images/futuristic_industrial_object_1782239432045.webp";
import redCurvesImg from "../../assets/images/sculptural_red_curves_1782239373838.webp";
import type { ProjectData } from "../../types";

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
