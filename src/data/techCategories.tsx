import { Link2, Image as ImageIcon, Cloud, Sparkles, Github, ShoppingBag, FileSpreadsheet } from "lucide-react";
import type { TechCategory } from "../types";

export const techCategories: TechCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", url: "https://www.typescriptlang.org/" },
      { name: "Java", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", url: "https://www.java.com/" },
      { name: "C", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
      { name: "Python", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", url: "https://www.python.org/" },
    ]
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", url: "https://react.dev/" },
      { name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", className: "invert opacity-80", url: "https://nextjs.org/" },
      { name: "HTML5", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com/" },
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org/" },
      { name: "Express.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", className: "invert opacity-80", url: "https://expressjs.com/" },
      { name: "REST APIs", icon: <Link2 className="w-3 h-3 text-blue-400" /> },
    ]
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", url: "https://www.mongodb.com/" },
      { name: "MySQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", url: "https://www.mysql.com/" },
      { name: "Firebase", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", url: "https://firebase.google.com/" },
    ]
  },
  {
    title: "Development Tools",
    items: [
      { name: "Git", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", url: "https://git-scm.com/" },
      { name: "GitHub", icon: <Github className="w-3 h-3 text-white" />, url: "https://github.com/" },
      { name: "VS Code", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com/" },
      { name: "Postman", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", url: "https://www.postman.com/" },
      { name: "Vercel", icon: (
        <svg viewBox="0 0 512 512" className="w-2.5 h-2.5 fill-current text-white">
          <path d="M256 48l240 416H16z"/>
        </svg>
      ), url: "https://vercel.com/" },
    ]
  },
  {
    title: "Design & Prototyping",
    items: [
      { name: "Figma", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", url: "https://www.figma.com/" },
      { name: "Adobe XD", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg", url: "https://www.adobe.com/products/xd.html" },
      { name: "Canva", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg", url: "https://www.canva.com/" },
      { name: "Framer", logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/framer.svg", className: "invert opacity-80", url: "https://www.framer.com/" },
      { name: "DaVinci Resolve", logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/davinciresolve.svg", className: "invert opacity-80", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
    ]
  },
  {
    title: "Additional Technologies",
    items: [
      { name: "ImageJ", icon: <ImageIcon className="w-3 h-3 text-rose-400" /> },
      { name: "Cloud Computing", icon: <Cloud className="w-3 h-3 text-sky-400" /> },
      { name: "Generative AI", icon: <Sparkles className="w-3 h-3 text-amber-400" /> },
      { name: "WooCommerce", icon: <ShoppingBag className="w-3 h-3 text-violet-400" />, url: "https://woocommerce.com/" },
      { name: "Excel", icon: <FileSpreadsheet className="w-3 h-3 text-emerald-400" /> },
    ]
  },
  {
    title: "AI",
    items: [
      { name: "Lovable", icon: <Sparkles className="w-3 h-3 text-rose-400" />, url: "https://lovable.dev/" },
      { name: "Cursor", icon: <Sparkles className="w-3 h-3 text-sky-400" />, url: "https://www.cursor.com/" },
      { name: "Antigravity Claude", icon: <Sparkles className="w-3 h-3 text-purple-400" />, url: "https://claude.ai/" },
      { name: "Codex", icon: <Sparkles className="w-3 h-3 text-emerald-400" />, url: "https://openai.com/blog/openai-codex/" },
    ]
  }
];
