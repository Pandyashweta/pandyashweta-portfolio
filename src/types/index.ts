import type { ReactNode } from "react";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  image: string;
  aspectClass: string;
  spanClass?: string;
  url?: string;
  description?: string;
  year?: string;
  scope?: string;
  client?: string;
  duration?: string;
  aboutText?: string;
  images?: string[];
  pencilCategories?: {
    id: string;
    name: string;
    images: string[];
  }[];
}

export interface TechItem {
  name: string;
  logoUrl?: string;
  icon?: ReactNode;
  className?: string;
  url?: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}
