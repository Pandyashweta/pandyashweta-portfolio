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
  resources?: {
    label: string;
    url: string;
    description?: string;
  }[];
}
