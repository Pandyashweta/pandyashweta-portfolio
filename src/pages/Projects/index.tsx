import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import type { LayoutContext } from "../../components/layout/Layout";
import { codingProjects, figmaProjects, liveProjects, researchProjects } from "../../data/projects";
import ProjectCard from "../../components/common/ProjectCard";
import ReachOut from "../../components/common/ReachOut";
import { RotateCw, ArrowLeft } from "lucide-react";
import GithubContributions from "./components/GithubContributions";

export default function ProjectsPage() {
  const navigate = useNavigate();
  const { leftColRef, rightColRef, handleScroll, scrollToTop } = useOutletContext<LayoutContext>();
  const [reloadKey, setReloadKey] = useState(0);
  const [isReloading, setIsReloading] = useState(false);

  useEffect(() => {
    setTimeout(scrollToTop, 50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReload = () => {
    setIsReloading(true);
    setReloadKey(prev => prev + 1);
  };

  const handleLoadComplete = () => {
    setIsReloading(false);
  };

  return (
    <main className="w-full h-auto lg:h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-[35fr_65fr] gap-4 items-stretch relative z-10 text-left">
      {/* Left Column: Project Description Sidebar with Sticky Header */}
      <div
        ref={leftColRef}
        onScroll={handleScroll}
        className="h-auto lg:h-full lg:min-h-0 subtle-scrollbar-left flex flex-col relative"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#080808]/95 backdrop-blur-sm z-20 pl-6 pr-3 pt-5 pb-4 flex flex-col items-start gap-3">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-1.5 bg-white text-black hover:bg-[#e5e5e5] active:scale-95 font-semibold font-sans text-xs px-4 py-2 rounded-full transition-all shadow-md shadow-black/20 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
            Back
          </button>
          <h1 className="text-3xl sm:text-[38px] font-semibold tracking-tight text-white leading-tight font-sans">
            Projects
          </h1>
        </div>

        {/* Scrollable Content Container */}
        <div className="pl-6 pr-3 pt-6 pb-6 flex flex-col gap-6">

          <div className="space-y-4">
            <h3 className="text-[13px] sm:text-sm font-bold text-[#888888] font-sans uppercase tracking-wider">
              About the Projects
            </h3>
            <p className="text-[#888888] text-xs sm:text-[13px] leading-relaxed font-sans font-normal">
              This collection showcases my journey in software development through projects focused on building practical, scalable, and user-centered solutions. From interactive web applications and responsive user interfaces to automation tools and data-driven systems, each project reflects a hands-on approach to problem-solving and continuous learning.
            </p>
            <p className="text-[#888888] text-xs sm:text-[13px] leading-relaxed font-sans font-normal">
              Using technologies such as React, Next.js, Node.js, Java, TypeScript, and modern development tools, I transform ideas into functional digital products while emphasizing performance, usability, and clean development practices.
            </p>
          </div>

          <div className="h-px bg-[#161616] w-full" />

          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <h3 className="text-[13px] sm:text-sm font-bold text-[#888888] font-sans uppercase tracking-wider">
                Contributions
              </h3>
              <button
                onClick={handleReload}
                disabled={isReloading}
                className="inline-flex items-center gap-1 text-xs text-[#888888] hover:text-white hover:bg-[#161616] border border-[#222222] hover:border-[#333333] px-2.5 py-1 rounded-lg transition-all cursor-pointer disabled:opacity-50 font-sans font-semibold uppercase tracking-wider active:scale-95"
                title="Reload contributions data"
              >
                <RotateCw className={`w-3 h-3 ${isReloading ? "animate-spin text-emerald-400" : ""}`} />
                <span>Reload</span>
              </button>
            </div>

            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs font-sans">
                <span className="font-semibold text-white">GitHub Activity</span>
                <a
                  href="https://github.com/Pandyashweta"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#666666] hover:text-white transition-colors font-mono text-[10px]"
                >
                  @Pandyashweta
                </a>
              </div>
              <div className="rounded-xl border border-[#161616] bg-[#0c0c0c] p-4 overflow-x-auto select-none flex justify-start items-center">
                <GithubContributions key={reloadKey} onLoadComplete={handleLoadComplete} />
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs font-sans">
                <span className="font-semibold text-white">LeetCode Stats</span>
                <a
                  href="https://leetcode.com/u/pandyashweta/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#666666] hover:text-white transition-colors font-mono text-[10px]"
                >
                  @pandyashweta
                </a>
              </div>
              <div className="rounded-xl border border-[#161616] bg-[#0c0c0c] p-2 overflow-hidden flex items-center justify-center min-h-[120px]">
                <img
                  src={`https://leetcard.jacoblin.cool/pandyashweta?theme=dark&t=${reloadKey}`}
                  alt="LeetCode Stats"
                  className="w-full h-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
                  loading="lazy"
                ></img>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#161616] w-full" />

          <ReachOut />
        </div>
      </div>

      {/* Right Column: Projects Grid & Live Websites */}
      <div
        ref={rightColRef}
        onScroll={handleScroll}
        className="h-auto lg:h-full lg:min-h-0 subtle-scrollbar-right"
      >
        <div className="min-h-full pt-6 pb-6 pl-3 pr-6 space-y-10">
          {/* UI/UX Design Section */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-4">
              <h3 className="text-[11px] font-bold text-zinc-500 font-mono uppercase tracking-widest shrink-0">
                UI/UX Design
              </h3>
              <div className="h-px bg-zinc-800/40 flex-grow" />
              <span className="text-[9px] font-mono text-zinc-600">02</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {figmaProjects.map((proj) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  to={`/projects/${proj.id}`}
                />
              ))}
            </div>
          </div>

          {/* Coding Projects Section */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-4">
              <h3 className="text-[11px] font-bold text-zinc-500 font-mono uppercase tracking-widest shrink-0">
                Coding Projects
              </h3>
              <div className="h-px bg-zinc-800/40 flex-grow" />
              <span className="text-[9px] font-mono text-zinc-600">02</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {codingProjects.map((proj) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  to={`/projects/${proj.id}`}
                />
              ))}
            </div>
          </div>

          {/* Live Websites Section */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-4">
              <h3 className="text-[11px] font-bold text-zinc-500 font-mono uppercase tracking-widest shrink-0">
                Live Websites
              </h3>
              <div className="h-px bg-zinc-800/40 flex-grow" />
              <span className="text-[9px] font-mono text-zinc-600">01</span>
            </div>
            <div className="w-full">
              {liveProjects.map((proj) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  to={`/projects/${proj.id}`}
                />
              ))}
            </div>
          </div>

          {/* Research Projects Section */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-4">
              <h3 className="text-[11px] font-bold text-zinc-500 font-mono uppercase tracking-widest shrink-0">
                Research Projects
              </h3>
              <div className="h-px bg-zinc-800/40 flex-grow" />
              <span className="text-[9px] font-mono text-zinc-600">01</span>
            </div>
            <div className="w-full">
              {researchProjects.map((proj) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  to={`/projects/${proj.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
