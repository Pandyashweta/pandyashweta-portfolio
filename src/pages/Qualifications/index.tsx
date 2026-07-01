import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import type { LayoutContext } from "../../components/layout/Layout";
import { techCategories } from "../../data/techCategories";
import { ArrowLeft } from "lucide-react";
import ReachOut from "../../components/common/ReachOut";
import CertificationCard from "./components/CertificationCard";
import SkillsMarquee from "./components/SkillsMarquee";
import { certifications } from "./data/certifications";

export default function QualificationsPage() {
  const navigate = useNavigate();
  const { leftColRef, rightColRef, handleScroll, scrollToTop } = useOutletContext<LayoutContext>();

  useEffect(() => {
    setTimeout(scrollToTop, 50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const row1 = [
    ...techCategories[0].items,
    ...techCategories[1].items,
  ];
  const row2 = [
    ...techCategories[2].items,
    ...techCategories[3].items,
    ...techCategories[4].items,
  ];
  const row3 = [
    ...techCategories[5].items,
    ...techCategories[6].items,
    ...techCategories[7].items,
  ];

  return (
    <main className="w-full h-auto lg:h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-[35fr_65fr] gap-4 items-stretch relative z-10 text-left">
      {/* Left Column: Background Sidebar with Sticky Header */}
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
            Qualifications
          </h1>
        </div>

        {/* Scrollable Content Container */}
        <div className="pl-6 pr-3 pt-6 pb-6 flex flex-col gap-6">

          {/* Professional Focus Areas Section */}
          <div className="space-y-4">
            <h3 className="text-[13px] sm:text-sm font-bold text-[#888888] font-sans uppercase tracking-wider">
              Professional Focus Areas
            </h3>

            <div className="grid grid-cols-1 gap-4">
              <div className="relative rounded-xl border border-[#161616] bg-[#0c0c0c] p-6 hover:border-[#262626] transition-all duration-300 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-base font-sans">
                    Software Development & Systems
                  </h3>
                  <p className="text-[#888888] text-xs sm:text-[13px] leading-relaxed font-sans font-normal">
                    Hands-on knowledge in back-end logic, REST API integration, script automation, databases, and version control.
                  </p>
                </div>
              </div>

              <div className="relative rounded-xl border border-[#161616] bg-[#0c0c0c] p-6 hover:border-[#262626] transition-all duration-300 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-base font-sans">
                    Business Operations & E-commerce
                  </h3>
                  <p className="text-[#888888] text-xs sm:text-[13px] leading-relaxed font-sans font-normal">
                    Familiarity with WooCommerce catalog management, database maintenance, business spreadsheets (Excel), and operational workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#161616] w-full" />

          {/* Work Experience Section */}
          <div className="space-y-4">
            <h3 className="text-[13px] sm:text-sm font-bold text-[#888888] font-sans uppercase tracking-wider">
              Work Experience
            </h3>

            <div className="relative border-l border-[#161616] ml-3 pl-6 space-y-6">
              {/* Business Operations */}
              <div className="relative group">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#080808] border border-[#222] group-hover:border-[#555] transition-colors duration-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#333] group-hover:bg-zinc-300 transition-colors duration-300" />
                </div>

                <div className="flex flex-col font-sans">
                  <span className="font-bold text-white text-xs sm:text-[13.5px]">
                    Business Operations & Technology Associate
                  </span>
                  <span className="text-[#888888] text-[11px] sm:text-[12px] font-normal mt-0.5">
                    Beyond Labs <span className="text-[#555555] mx-1">•</span> Jul 2025 – Present
                  </span>
                </div>
                <p className="text-[#888888] text-xs sm:text-[12.5px] leading-relaxed font-sans font-normal mt-2">
                  Supporting daily business operations, client projects, and documentation while assisting with technology-related tasks.
                </p>
              </div>

              {/* Data Entry Assistant */}
              <div className="relative group">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#080808] border border-[#222] group-hover:border-[#555] transition-colors duration-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#333] group-hover:bg-zinc-300 transition-colors duration-300" />
                </div>

                <div className="flex flex-col font-sans">
                  <span className="font-bold text-white text-xs sm:text-[13.5px]">
                    Data Entry Assistant
                  </span>
                  <span className="text-[#888888] text-[11px] sm:text-[12px] font-normal mt-0.5">
                    Vatero Bath + Kitchen <span className="text-[#555555] mx-1">•</span> Apr 2025 – Oct 2025
                  </span>
                </div>
                <p className="text-[#888888] text-xs sm:text-[12.5px] leading-relaxed font-sans font-normal mt-2">
                  Worked as an assistant to the developer, supporting WooCommerce platform, database updates, and catalog management.
                </p>
              </div>

              {/* Back-End Developer Intern */}
              <div className="relative group">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#080808] border border-[#222] group-hover:border-[#555] transition-colors duration-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#333] group-hover:bg-zinc-300 transition-colors duration-300" />
                </div>

                <div className="flex flex-col font-sans">
                  <span className="font-bold text-white text-xs sm:text-[13.5px]">
                    Back-End Developer Intern
                  </span>
                  <span className="text-[#888888] text-[11px] sm:text-[12px] font-normal mt-0.5">
                    Innovate2Automate <span className="text-[#555555] mx-1">•</span> Sep 2024 – Feb 2025
                  </span>
                </div>
                <p className="text-[#888888] text-xs sm:text-[12.5px] leading-relaxed font-sans font-normal mt-2">
                  Worked on data-driven applications using Java, Node.js, and ImageJ library.
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#161616] w-full" />

          {/* Academic Background Section */}
          <div className="space-y-4">
            <h3 className="text-[13px] sm:text-sm font-bold text-[#888888] font-sans uppercase tracking-wider">
              Academic Background
            </h3>

            <div className="space-y-5">
              {/* Master of IT */}
              <div className="space-y-1.5">
                <div className="flex flex-col font-sans">
                  <span className="font-bold text-white text-xs sm:text-[13.5px]">
                    Master of Information Technology (IT)
                  </span>
                  <span className="text-[#888888] text-[11px] sm:text-[12px] font-normal mt-0.5">
                    The Maharaja Sayajirao University of Baroda <span className="text-[#555555] mx-1">•</span> Jul 2024 – May 2026
                  </span>
                </div>
                <p className="text-[#888888] text-xs sm:text-[12.5px] leading-relaxed font-sans font-normal">
                  Currently pursuing a Master's degree in IT with a focus on databases, network security, software development, and IT project management.
                </p>
              </div>

              {/* Bachelor of Environmental Science */}
              <div className="space-y-1.5">
                <div className="flex flex-col font-sans">
                  <span className="font-bold text-white text-xs sm:text-[13.5px]">
                    Bachelor of Science in Environmental Science
                  </span>
                  <span className="text-[#888888] text-[11px] sm:text-[12px] font-normal mt-0.5">
                    The Maharaja Sayajirao University of Baroda <span className="text-[#555555] mx-1">•</span> Jul 2021 – May 2024
                  </span>
                </div>
                <p className="text-[#888888] text-xs sm:text-[12.5px] leading-relaxed font-sans font-normal">
                  Completed a Bachelor's degree in Environmental Science, building a strong foundation in research, sustainability, and ecological systems.
                </p>
              </div>

              {/* Higher Secondary Education */}
              <div className="space-y-1.5">
                <div className="flex flex-col font-sans">
                  <span className="font-bold text-white text-xs sm:text-[13.5px]">
                    Higher Secondary Education (Science)
                  </span>
                  <span className="text-[#888888] text-[11px] sm:text-[12px] font-normal mt-0.5">
                    VP & RPTP Science College, Vallabh Vidyanagar <span className="text-[#555555] mx-1">•</span> Jun 2019 – May 2021
                  </span>
                </div>
                <p className="text-[#888888] text-xs sm:text-[12.5px] leading-relaxed font-sans font-normal">
                  Developed a strong academic foundation in biology, chemistry, and environmental science, fostering analytical thinking.
                </p>
              </div>
            </div>
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
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white font-sans">
              Certifications
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <CertificationCard key={cert.id} cert={cert} />
              ))}
            </div>
          </div>

          <div className="h-px bg-[#161616] w-full" />

          {/* Skills & Technologies Section */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white font-sans">
              Skills & Technologies
            </h2>

            <div className="space-y-3.5 overflow-hidden w-full py-1 relative">
              {/* Row 1: Languages & Frontend */}
              <SkillsMarquee items={row1} />

              {/* Row 2: Backend, Databases & Tools (Reverse Direction) */}
              <SkillsMarquee items={row2} reverse />

              {/* Row 3: Design, Additional & AI */}
              <SkillsMarquee items={row3} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
