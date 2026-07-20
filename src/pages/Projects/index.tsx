import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import type { LayoutContext } from "../../components/layout/Layout";
import { figmaProjects, researchProjects } from "../../data/projects";
import ProjectCard from "../../components/common/ProjectCard";
import ReachOut from "../../components/common/ReachOut";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { certifications } from "../Qualifications/data/certifications";

export default function ProjectsPage() {
  const navigate = useNavigate();
  const { rightColRef, handleScroll, scrollToTop } = useOutletContext<LayoutContext>();

  useEffect(() => {
    setTimeout(scrollToTop, 50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="w-full h-auto lg:h-screen lg:overflow-hidden flex flex-col relative z-10 text-left">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-[#080808]/95 backdrop-blur-sm z-20 pt-5 pb-0">
        <div className="max-w-7xl mx-auto px-6 flex flex-row items-center justify-between gap-3 pb-3">
          <h1 className="text-3xl sm:text-[38px] font-semibold tracking-tight text-white leading-tight font-sans">
            Projects
          </h1>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-1.5 bg-white text-black hover:bg-[#e5e5e5] active:scale-95 font-semibold font-sans text-xs px-4 py-2 rounded-full transition-all shadow-md shadow-black/20 cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
            Back
          </button>
        </div>
      </div>

      {/* Scrollable Content: Full Width Projects Showcase */}
      <div
        ref={rightColRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto subtle-scrollbar-right"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-12">
          {/* UI/UX Design Section */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-4">
              <h3 className="text-[11px] font-bold text-zinc-500 font-mono uppercase tracking-widest shrink-0">
                UI/UX Design
              </h3>
              <div className="h-px bg-zinc-800/40 flex-grow" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start max-w-4xl">
              {figmaProjects.map((proj) => (
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
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {researchProjects.map((proj) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  to={`/projects/${proj.id}`}
                />
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div id="certifications" className="space-y-6 text-left scroll-mt-24">
            <div className="flex items-center gap-4">
              <h3 className="text-[11px] font-bold text-zinc-500 font-mono uppercase tracking-widest shrink-0">
                Certifications
              </h3>
              <div className="h-px bg-zinc-800/40 flex-grow" />
            </div>

            <div className="divide-y divide-[#141414]">
              {certifications.map((cert) => (
                <div key={cert.id} className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                        {cert.year}
                      </span>
                      <span className="text-zinc-600 font-mono text-[9px]">•</span>
                      <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                        {cert.issuer}
                      </span>
                      {cert.issueNumber && (
                        <>
                          <span className="text-zinc-600 font-mono text-[9px]">•</span>
                          <span className="text-[9px] font-mono text-emerald-400 uppercase font-semibold">
                            {cert.issueNumber}
                          </span>
                        </>
                      )}
                    </div>
                    <h4 className="font-semibold text-white text-[14px] font-sans leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-[#888888] text-xs font-sans mt-2 leading-relaxed max-w-3xl">
                      {cert.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 sm:pt-6 text-xs font-sans">
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-200 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#555]" />
                    </a>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#555]" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reach Out / Footer section */}
          <div className="pt-6 pb-6">
            <ReachOut />
          </div>
        </div>
      </div>
    </main>
  );
}
