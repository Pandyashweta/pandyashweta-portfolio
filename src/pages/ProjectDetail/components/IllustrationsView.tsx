import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import type { ProjectData } from "../../../types";

function ImageMarquee({
  images,
  reverse,
  onImageClick,
}: {
  images: string[];
  reverse?: boolean;
  onImageClick: (src: string) => void;
}) {
  // Duplicate list to make scrolling infinite and seamless
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <div className="relative overflow-hidden w-full py-1">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      <div
        className="animate-marquee-inner gap-4"
        style={
          reverse
            ? { animationDirection: "reverse", animationDuration: "50s" }
            : { animationDuration: "50s" }
        }
      >
        {duplicatedImages.map((src, index) => (
          <button
            key={`${src}-${index}`}
            onClick={() => onImageClick(src)}
            className="relative h-44 sm:h-56 aspect-[3/4] rounded-xl overflow-hidden shrink-0 group border border-[#161616] cursor-pointer focus:outline-none"
          >
            <img
              src={src}
              alt="Sketch"
              className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
              loading="eager"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function IllustrationsView({ project }: { project: ProjectData }) {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <main className="w-full min-h-screen bg-[#080808] text-center relative z-10 px-6 py-12 overflow-y-auto">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 mb-12">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 bg-white text-black hover:bg-[#e5e5e5] active:scale-95 font-semibold font-sans text-xs px-4 py-2 rounded-full transition-all shadow-md shadow-black/20 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
          Back
        </button>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight font-sans">
          {project.title}
        </h1>
      </div>

      {/* Marquee Rows (Categories) */}
      <div className="w-full flex flex-col gap-3 my-10 overflow-hidden">
        {project.pencilCategories?.map((category, index) => (
          <ImageMarquee
            key={category.id}
            images={category.images}
            reverse={index % 2 === 1}
            onImageClick={(src) => setActiveImage(src)}
          />
        ))}
      </div>

      {/* Lightbox / Modal View */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 cursor-zoom-out transition-all duration-300"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white/75 hover:text-white transition-colors p-2"
          >
            <span className="sr-only">Close</span>
            <X className="w-6 h-6" />
          </button>

          <img
            src={activeImage}
            alt="Sketch"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
