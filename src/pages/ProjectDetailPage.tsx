import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { codingProjects, figmaProjects, liveProjects, researchProjects, showcaseProjects, sketchTitles } from "../data/projects";
import type { LayoutContext } from "../components/layout/Layout";
import ReachOut from "../components/sections/ReachOut";

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { leftColRef, rightColRef, handleScroll, scrollToTop } = useOutletContext<LayoutContext>();

  useEffect(() => {
    setTimeout(scrollToTop, 50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  // State for selected category in illustrations page
  const [selectedCategory, setSelectedCategory] = useState("");
  // State for random card previews
  const [cardPreviews, setCardPreviews] = useState<Record<string, string>>({});

  // Find project in all lists
  const allProjects = [
    ...codingProjects,
    ...figmaProjects,
    ...liveProjects,
    ...researchProjects,
    ...showcaseProjects
  ];

  // Remove duplicates by ID
  const uniqueProjects = allProjects.filter(
    (proj, index, self) => self.findIndex((p) => p.id === proj.id) === index
  );

  const project = uniqueProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="w-full h-screen flex flex-col items-center justify-center text-center bg-[#080808] text-white">
        <h1 className="text-2xl font-bold mb-4 font-sans">Project not found</h1>
        <button
          onClick={() => navigate("/projects")}
          className="inline-flex items-center gap-1.5 bg-white text-black hover:bg-[#e5e5e5] active:scale-95 font-semibold font-sans text-xs px-5 py-2.5 rounded-full transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Projects
        </button>
      </main>
    );
  }

  // Fallbacks for metadata
  const displayDesc = project.description || "Detailed project review and showcase.";
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

  // Load random previews for category cards
  useEffect(() => {
    if (project && project.id === "illustrations" && project.pencilCategories) {
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
  }, [projectId, project]);

  // Centered unified layout for illustrations only (no split columns partition, centered header)
  if (project.id === "illustrations") {
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
            // Get clean title/caption for the image
            const getCaption = (src: string) => {
              if (project.id === "illustrations") {
                return sketchTitles[src] || "Sketch";
              }
              const lowerSrc = src.toLowerCase();
              
              // Histopedia captions
              if (lowerSrc.includes("histopedia.png") || lowerSrc.includes("histopedia-")) return "Cover";
              if (lowerSrc.includes("welcome")) return "Welcome, Log In, Sign In, Verify";
              if (lowerSrc.includes("home.png") || lowerSrc.includes("home-")) return "Home Page";
              if (lowerSrc.includes("community")) return "Community Page";
              if (lowerSrc.includes("search")) return "Search Page";
              if (lowerSrc.includes("profile")) return "Profile Section";
              
              // Eau de Perfume captions
              if (lowerSrc.includes("eau de perfume") || lowerSrc.includes("eau-de-perfume")) return "Cover";
              if (lowerSrc.includes("login & sign in") || lowerSrc.includes("login _ sign in") || lowerSrc.includes("login")) return "Login & Sign In";
              if (lowerSrc.includes("created account")) return "Created Account & Logged In";
              if (lowerSrc.includes("homepage before")) return "Homepage & Login Message";
              if (lowerSrc.includes("wishlist")) return "Wishlist, Checkout & Order Placed";
              if (lowerSrc.includes("subscribe")) return "Subscribe & Error";

              return `Screen ${idx + 1}`;
            };
            
            const caption = getCaption(imgSrc);

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

function parseMarkdown(text: string) {
  if (!text) return null;

  // Split by double-newlines to separate paragraphs/sections
  const blocks = text.split(/\n\n+/);

  return (
    <div className="space-y-4 text-xs sm:text-[13px] font-sans font-normal leading-relaxed text-[#888888]">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // 1. Horizontal Divider
        if (trimmed === '---') {
          return <div key={idx} className="h-px bg-[#161616] w-full my-4" />;
        }

        // 2. Headings (## Heading)
        if (trimmed.startsWith('## ')) {
          return (
            <h4 key={idx} className="text-xs sm:text-sm font-semibold text-white tracking-tight pt-2 uppercase font-sans">
              {trimmed.replace('## ', '')}
            </h4>
          );
        }

        // 3. Bulleted Lists (* or -)
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
          const items = trimmed.split('\n').map(line => {
            const cleanLine = line.replace(/^[\*\-]\s+/, '');
            return renderRichText(cleanLine);
          });
          return (
            <ul key={idx} className="list-disc pl-4 space-y-1 text-[#888888]">
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
        }

        // Default: regular paragraph, parse bold and links
        return (
          <p key={idx} className="text-[#888888] leading-relaxed whitespace-pre-line">
            {renderRichText(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function renderRichText(text: string) {
  // Parse markdown links [text](url)
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  
  return parts.map((part, i) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const linkText = linkMatch[1];
      const url = linkMatch[2];
      return (
        <a 
          key={i} 
          href={url} 
          target="_blank" 
          rel="noreferrer" 
          className="text-white hover:text-white/80 underline font-medium transition-colors cursor-pointer"
        >
          {linkText}
        </a>
      );
    }
    
    // Parse bold text **bold**
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((subPart, j) => {
      if (subPart.startsWith('**') && subPart.endsWith('**')) {
        return (
          <strong key={`${i}-${j}`} className="font-semibold text-white">
            {subPart.slice(2, -2)}
          </strong>
        );
      }
      return subPart;
    });
  });
}
