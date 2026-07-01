import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { ProjectData } from "../../../types";
import type { LayoutContext } from "../../../components/layout/Layout";
import ReachOut from "../../../components/common/ReachOut";
import { parseMarkdown } from "../utils/markdown";
import { getImageCaption } from "../utils/captions";

type StandardViewProps = Pick<LayoutContext, "leftColRef" | "rightColRef" | "handleScroll"> & {
  project: ProjectData;
};

export default function StandardView({ project, leftColRef, rightColRef, handleScroll }: StandardViewProps) {
  const navigate = useNavigate();

  // Fallbacks for metadata
  const displayYear = project.year || "2026";
  const displayScope = project.scope || project.category || "Development";
  const displayClient = project.client || "Self Project";
  const displayDuration = project.duration || "Ongoing";
  const displayAbout = project.aboutText || "Detailed description of this project is coming soon.";
  const displayImages = project.images && project.images.length > 0 ? project.images : [project.image];

  // Determine external link button label
  const getButtonLabel = (urlStr: string) => {
    if (urlStr.includes("figma.com")) return "Open Figma File";
    if (urlStr.includes("github.com")) return "View Repository";
    return "Open Live Site";
  };

  return (
    <main className="w-full h-auto lg:h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-[35fr_65fr] gap-4 items-stretch relative z-10 text-left">
      {/* Left Column: Project Description Sidebar with Sticky Header */}
      <div
        ref={leftColRef}
        onScroll={handleScroll}
        className="h-auto lg:h-full lg:min-h-0 subtle-scrollbar-left flex flex-col relative"
      >
        {/* Sticky Header: Contains Title and Back Button */}
        <div className="sticky top-0 bg-[#080808]/95 backdrop-blur-sm z-20 pl-6 pr-3 pt-5 pb-4 flex flex-col items-start gap-3">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 bg-white text-black hover:bg-[#e5e5e5] active:scale-95 font-semibold font-sans text-xs px-4 py-2 rounded-full transition-all shadow-md shadow-black/20 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
            Back
          </button>
          <h1 className="text-3xl sm:text-[38px] font-semibold tracking-tight text-white leading-tight font-sans">
            {project.title}
          </h1>
        </div>

        {/* Scrollable Content Container */}
        <div className="pl-6 pr-3 pt-6 pb-6 flex flex-col gap-6">
          {/* Metadata Section */}
          <div className="space-y-4 text-xs font-sans text-[#888888]">
            <div className="flex gap-4 items-start">
              <span className="w-20 shrink-0 font-medium text-zinc-400 font-mono text-[10px] tracking-widest uppercase">Year</span>
              <span className="text-zinc-200">{displayYear}</span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="w-20 shrink-0 font-medium text-zinc-400 font-mono text-[10px] tracking-widest uppercase">Scope</span>
              <span className="text-zinc-200 leading-relaxed">{displayScope}</span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="w-20 shrink-0 font-medium text-zinc-400 font-mono text-[10px] tracking-widest uppercase">Client</span>
              <span className="text-zinc-200">{displayClient}</span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="w-20 shrink-0 font-medium text-zinc-400 font-mono text-[10px] tracking-widest uppercase">Duration</span>
              <span className="text-zinc-200">{displayDuration}</span>
            </div>

            {project.url && project.url.startsWith("http") && (
              <div className="pt-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-[#242424] text-white border border-[#2d2d2d] active:scale-95 font-semibold font-sans text-xs px-5 py-2.5 rounded-full transition-all shadow-md cursor-pointer"
                >
                  <span>{getButtonLabel(project.url)}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          <div className="h-px bg-[#161616] w-full" />

          {/* Detailed About Section */}
          <div className="space-y-4">
            <h3 className="text-[13px] sm:text-sm font-bold text-[#888888] font-sans uppercase tracking-wider">
              About the project
            </h3>
            {parseMarkdown(displayAbout)}
          </div>

          <div className="h-px bg-[#161616] w-full" />

          <ReachOut showScrollUp={false} />
        </div>
      </div>

      {/* Right Column: Project Images Stack */}
      <div
        ref={rightColRef}
        onScroll={handleScroll}
        className="h-auto lg:h-full lg:min-h-0 subtle-scrollbar-right"
      >
        <div className={`pt-6 pb-6 pl-3 pr-6 ${
          project.id === "illustrations"
            ? "columns-1 sm:columns-2 gap-4"
            : "flex flex-col gap-4"
        }`}>
          {displayImages.map((imgSrc, idx) => {
            const caption = getImageCaption(project.id, imgSrc, idx);

            return (
              <div
                key={idx}
                className={project.id === "illustrations"
                  ? "relative group break-inside-avoid mb-4 overflow-hidden rounded-lg"
                  : "relative group w-full rounded-xl overflow-hidden border border-[#161616] bg-[#0c0c0c]"}
              >
                {/* Image */}
                <img
                  src={imgSrc}
                  alt={`${project.title} - ${caption}`}
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  {/* Top Black Blur Gradient */}
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/80 via-black/25 to-transparent" />

                  {/* Content Container */}
                  <div className="absolute top-0 inset-x-0 p-4 flex justify-between items-center w-full">
                    {/* Top Left: Clean text caption */}
                    <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
                      {caption}
                    </span>

                    {/* Top Right: Clean arrow icon */}
                    <a
                      href={imgSrc}
                      target="_blank"
                      rel="noreferrer"
                      className="pointer-events-auto text-zinc-300 hover:text-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]"
                      title="Open image in new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
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
