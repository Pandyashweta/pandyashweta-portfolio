import industrialObjImg from "../../assets/images/futuristic_industrial_object_1782239432045.webp";
import type { ProjectData } from "../../types";

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
