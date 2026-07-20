import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import type { LayoutContext } from "../../components/layout/Layout";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ReachOut from "../../components/common/ReachOut";
import { certifications } from "./data/certifications";

export default function QualificationsPage() {
  const navigate = useNavigate();
  const { leftColRef, rightColRef, handleScroll, scrollToTop } = useOutletContext<LayoutContext>();

  useEffect(() => {
    setTimeout(scrollToTop, 50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="w-full h-auto lg:h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-[35fr_65fr] gap-4 items-stretch relative z-10 text-left">
      {/* Left Column: Background Sidebar with Sticky Header */}
      <div
        ref={leftColRef}
        onScroll={handleScroll}
        className="h-auto lg:h-full lg:min-h-0 subtle-scrollbar-left flex flex-col relative"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#080808]/95 backdrop-blur-sm z-20 pt-5 pb-0 flex flex-col gap-3">
          <div className="pl-6 pr-3 flex flex-row items-center justify-between gap-3">
            <h1 className="text-3xl sm:text-[38px] font-semibold tracking-tight text-white leading-tight font-sans">
              Qualifications
            </h1>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-1.5 bg-white text-black hover:bg-[#e5e5e5] active:scale-95 font-semibold font-sans text-xs px-4 py-2 rounded-full transition-all shadow-md shadow-black/20 cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
              Back
            </button>
          </div>
          <div className="h-px bg-[#161616] ml-6 mr-3" />
        </div>

        {/* Scrollable Content Container */}
        <div className="pl-6 pr-3 pt-4 pb-6 flex flex-col gap-6">

          {/* Professional Focus Areas Section */}
          <div className="space-y-4 text-zinc-400 text-xs sm:text-[13px] leading-relaxed font-sans font-normal">
            <p>
              I started my career by assisting an e-commerce website developer, where I managed product data using WooCommerce and Excel while helping with website development and backend tasks. Later, I worked as an associate in both the operations and technology departments, where I gained experience in business operations, technical workflows, and software development.
            </p>
            <p>
              Beyond my professional work, I enjoy building websites and experimenting with new technologies through personal projects. I've worked on several web projects, designed the UI/UX for my own website and an Android app, and often code simply because I enjoy creating things. Design has always been a creative outlet for me, and I've recently started exploring digital illustration.
            </p>
            <p>
              My academic background includes Environmental Science alongside a Master's degree in Information Technology, allowing me to combine scientific research with technical problem-solving. During my environmental studies, I conducted independent research on microplastics and developed my own methodology that successfully demonstrated the presence of microplastics in government-distributed organic fertilizers.
            </p>
            <p>
              Outside of work, I enjoy writing, drawing, and editing videos. Whether it's solving technical problems, researching new ideas, or creating something from scratch, I'm always interested in learning and building.
            </p>
          </div>

          <div className="h-px bg-[#161616] w-full" />


          {/* Reach Out Section */}
          <ReachOut />
        </div>
      </div>

      {/* Right Column: Certifications & Skills */}
      <div
        ref={rightColRef}
        onScroll={handleScroll}
        className="h-auto lg:h-full lg:min-h-0 subtle-scrollbar-right"
      >
        <div className="pt-6 pb-6 pl-3 pr-6 flex flex-col gap-6">
          {/* Certifications Section */}
          <div className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white font-sans">
              Certifications
            </h2>

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
                    <h3 className="font-semibold text-white text-[14px] font-sans leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-[#888888] text-xs font-sans mt-2 leading-relaxed max-w-2xl">
                      {cert.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 sm:pt-6 text-xs font-sans">
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-200 hover:text-white transition-colors border-b border-[#333] hover:border-white pb-0.5"
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
        </div>
      </div>
    </main>
  );
}
