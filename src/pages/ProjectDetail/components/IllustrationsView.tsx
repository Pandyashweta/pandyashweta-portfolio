import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { ProjectData } from "../../../types";
import { sketchTitles } from "../../../data/projects";
import { parseMarkdown } from "../utils/markdown";

export default function IllustrationsView({ project }: { project: ProjectData }) {
  const navigate = useNavigate();

  // State for selected category in illustrations page
  const [selectedCategory, setSelectedCategory] = useState("");
  // State for random card previews
  const [cardPreviews, setCardPreviews] = useState<Record<string, string>>({});

  const displayAbout = project.aboutText || "Detailed description of this project is coming soon.";

  // Load random previews for category cards
  useEffect(() => {
    if (project.pencilCategories) {
      const previews: Record<string, string> = {};
      const allImgs = project.images && project.images.length > 0 ? project.images : [project.image];

      if (allImgs.length > 0) {
        const randAllIdx = Math.floor(Math.random() * allImgs.length);
        previews["all"] = allImgs[randAllIdx];
      }

      project.pencilCategories.forEach(cat => {
        if (cat.images.length > 0) {
          const randIdx = Math.floor(Math.random() * cat.images.length);
          previews[cat.id] = cat.images[randIdx];
        }
      });
      setCardPreviews(previews);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.id]);

  const filteredImages = selectedCategory === ""
    ? []
    : (project.pencilCategories?.find(cat => cat.id === selectedCategory)?.images || []);

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


        {/* About Section - Centered and max-w */}
        <div className="max-w-2xl text-zinc-300 text-sm sm:text-base leading-relaxed font-sans mt-4">
          {parseMarkdown(displayAbout)}
        </div>
      </div>

      {/* Category Selection Cards */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Category Cards */}
          {project.pencilCategories?.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`relative aspect-[4/3] w-full rounded-xl overflow-hidden cursor-pointer group hover:scale-[1.02] active:scale-95 transition-all duration-300 border-2 ${
                selectedCategory === cat.id ? "border-white" : "border-[#161616]"
              }`}
            >
              {cardPreviews[cat.id] && (
                <img
                  src={cardPreviews[cat.id]}
                  alt={`${cat.name} Preview`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10 flex flex-col justify-end p-4 text-left">
                <span className="text-white font-bold font-sans text-base sm:text-lg leading-tight">{cat.name}</span>
                <span className="text-[10px] text-zinc-400 font-sans mt-0.5">{cat.images.length} drawings</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
          {filteredImages.map((imgSrc) => {
            const caption = sketchTitles[imgSrc] || "Sketch";
            return (
              <div
                key={imgSrc}
                className="relative group break-inside-avoid mb-6 overflow-hidden rounded-lg hover:opacity-95 transition-opacity duration-300"
              >
                <img
                  src={imgSrc}
                  alt={`${project.title} - ${caption}`}
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 flex items-end p-4">
                  <div className="text-left w-full flex items-center justify-between pointer-events-auto">
                    <span className="text-xs text-white font-sans font-medium tracking-wide">
                      {caption}
                    </span>
                    <a
                      href={imgSrc}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-zinc-300 transition-colors p-1"
                      title="Open full image"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
