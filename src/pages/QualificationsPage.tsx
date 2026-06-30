import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import type { LayoutContext } from "../components/layout/Layout";
import { techCategories } from "../data/techCategories";
import { ArrowLeft, X, ExternalLink } from "lucide-react";
import ReachOut from "../components/sections/ReachOut";

import certCcnaNetworking from "../assets/images/cert_ccna_networking.webp";
import certCProgramming from "../assets/images/cert_c_programming.webp";
import certAwsCloud from "../assets/images/cert_aws_cloud.webp";
import certCyberSecurity from "../assets/images/cert_cyber_security.webp";
import certGenerativeAi from "../assets/images/cert_generative_ai.webp";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  issueNumber?: string;
  link?: string;
  image: string;
  description: string;
}

const certifications: Certification[] = [
  {
    id: "ccna-networking",
    title: "CCNA Networking Essentials: A Comprehensive Cisco Course",
    issuer: "Udemy",
    year: "Nov 2024",
    link: "https://www.udemy.com/",
    image: certCcnaNetworking,
    description: "Completed a comprehensive course covering networking fundamentals, including network protocols, IP addressing, routing, switching, and network security concepts."
  },
  {
    id: "c-programming",
    title: "C Programming Certification",
    issuer: "All India Institute of Computer Education (AIICE)",
    year: "Sep 2024",
    issueNumber: "Grade A+",
    link: "http://www.aiice.org/",
    image: certCProgramming,
    description: "Successfully completed a certified C Programming course with an A+ grade, building a strong foundation in programming concepts, data types, control structures, and problem-solving."
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Computing Workshop",
    issuer: "Indian Institute of Technology Bombay",
    year: "Dec 2024",
    link: "https://www.iitb.ac.in/",
    image: certAwsCloud,
    description: "Completed the CloudVerse 2.0 Cloud Computing Workshop at IIT Bombay, gaining foundational knowledge of cloud technologies, infrastructure, and real-world cloud computing applications."
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    issuer: "NASSCOM",
    year: "Dec 2024",
    link: "https://nasscom.in/",
    image: certCyberSecurity,
    description: "Participated in a certified Cyber Security course recognized by NASSCOM, developing foundational knowledge of cybersecurity principles, digital safety, and information security practices."
  },
  {
    id: "generative-ai",
    title: "Unlocking Generative AI",
    issuer: "The Maharaja Sayajirao University of Baroda",
    year: "Mar 2025",
    link: "https://www.msubaroda.ac.in/",
    image: certGenerativeAi,
    description: "Participated in a workshop on Generative AI organized by the Department of Computer Applications, exploring emerging AI technologies, applications, and industry trends."
  }
];

function CertificationCard({ cert }: { cert: Certification; key?: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative group rounded-[20px] border border-[#161616] bg-[#0c0c0c] overflow-hidden aspect-square hover:border-[#222] transition-all duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Background Image */}
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-500"
          loading="lazy"
        />

        {/* Text Overlay (Gradient bottom) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-4 text-left font-sans">
          <span className="text-zinc-500 text-[9px] font-mono tracking-widest uppercase mb-1">
            {cert.year}
          </span>
          <h4 className="font-semibold text-white text-xs sm:text-[13.5px] leading-tight group-hover:text-emerald-400 transition-colors line-clamp-2">
            {cert.title}
          </h4>
          <div className="flex justify-between items-center text-[10px] text-zinc-400 mt-1.5 min-w-0">
            <span className="truncate pr-2">{cert.issuer}</span>
            {cert.issueNumber && (
              <span className="text-zinc-500 font-mono text-[9px] shrink-0">
                {cert.issueNumber}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Mobile & Click Action */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Relative wrapper for Card & Close Button to prevent overflow-hidden clipping */}
          <div 
            className="relative max-w-md w-full animate-in zoom-in-[0.98] duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button: Positioned on the corner edge of the card, but outside the overflow-hidden wrapper */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-3 -right-3 text-zinc-400 hover:text-white transition-all duration-300 w-8 h-8 flex items-center justify-center rounded-full bg-[#0c0c0c] border border-[#1a1a1a] hover:border-[#333] hover:rotate-90 z-30 shadow-lg shadow-black/80 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Card Container */}
            <div className="bg-[#0c0c0c] border border-[#1a1a1a] rounded-[24px] p-6 w-full relative overflow-hidden shadow-2xl shadow-black/80 flex flex-col gap-4">
              {/* Glowing Accent Effect */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Top: Image Preview */}
              <div className="relative group/cert w-full aspect-[16/10] rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/80 mt-1 shadow-inner z-10">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/cert:scale-[1.02]" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 transition-all duration-300" />
              </div>

              {/* Middle: Details */}
              <div className="flex flex-col gap-2.5 text-left font-sans z-10">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono tracking-[0.2em] text-zinc-500 uppercase">
                    {cert.year}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-zinc-800" />
                  <span className="text-[9px] font-mono tracking-[0.2em] text-emerald-400/90 uppercase font-semibold">
                    {cert.issuer}
                  </span>
                </div>

                <h4 className="font-semibold text-white text-lg sm:text-xl tracking-tight leading-tight">
                  {cert.title}
                </h4>

                <div className="flex flex-wrap gap-2 items-center">
                  {cert.issueNumber && (
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#121212] border border-[#1a1a1a] text-[9.5px] text-zinc-500 font-mono">
                      <span>{cert.issueNumber.includes("Grade") ? "Grade:" : "ID:"} {cert.issueNumber.replace(/Grade\s*|\s*ID:\s*/g, "")}</span>
                    </div>
                  )}
                </div>

                <p className="text-zinc-400 text-xs sm:text-[12.5px] leading-relaxed mt-1.5 font-normal">
                  {cert.description}
                </p>
              </div>

              {/* Bottom: Action Link */}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full bg-white text-black hover:bg-[#e5e5e5] border border-transparent font-sans text-xs font-bold py-3 px-4 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-lg shadow-black/20 cursor-pointer mt-1 z-10"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

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
              <div className="relative overflow-hidden w-full py-1">
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
                <div className="animate-marquee-inner gap-3">
                  {[...row1, ...row1, ...row1, ...row1].map((item, index) => (
                    <a
                      key={`${item.name}-${index}`}
                      href={item.url || `https://www.google.com/search?q=${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group bg-transparent border border-transparent rounded-lg px-2.5 py-1 text-xs text-zinc-400 hover:text-white font-sans flex items-center gap-1.5 transition-all duration-300 cursor-pointer hover:scale-[1.06] shrink-0 select-none"
                    >
                      {item.logoUrl ? (
                        <img
                          src={item.logoUrl}
                          alt={`${item.name} logo`}
                          className={`w-3.5 h-3.5 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 ${item.className || ""}`}
                          loading="lazy"
                        />
                      ) : item.icon ? (
                        <span className="flex items-center justify-center shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                          {item.icon}
                        </span>
                      ) : null}
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Row 2: Backend, Databases & Tools (Reverse Direction) */}
              <div className="relative overflow-hidden w-full py-1">
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
                <div className="animate-marquee-inner gap-3" style={{ animationDirection: "reverse" }}>
                  {[...row2, ...row2, ...row2, ...row2].map((item, index) => (
                    <a
                      key={`${item.name}-${index}`}
                      href={item.url || `https://www.google.com/search?q=${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group bg-transparent border border-transparent rounded-lg px-2.5 py-1 text-xs text-zinc-400 hover:text-white font-sans flex items-center gap-1.5 transition-all duration-300 cursor-pointer hover:scale-[1.06] shrink-0 select-none"
                    >
                      {item.logoUrl ? (
                        <img
                          src={item.logoUrl}
                          alt={`${item.name} logo`}
                          className={`w-3.5 h-3.5 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 ${item.className || ""}`}
                          loading="lazy"
                        />
                      ) : item.icon ? (
                        <span className="flex items-center justify-center shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                          {item.icon}
                        </span>
                      ) : null}
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Row 3: Design, Additional & AI */}
              <div className="relative overflow-hidden w-full py-1">
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
                <div className="animate-marquee-inner gap-3">
                  {[...row3, ...row3, ...row3, ...row3].map((item, index) => (
                    <a
                      key={`${item.name}-${index}`}
                      href={item.url || `https://www.google.com/search?q=${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group bg-transparent border border-transparent rounded-lg px-2.5 py-1 text-xs text-zinc-400 hover:text-white font-sans flex items-center gap-1.5 transition-all duration-300 cursor-pointer hover:scale-[1.06] shrink-0 select-none"
                    >
                      {item.logoUrl ? (
                        <img
                          src={item.logoUrl}
                          alt={`${item.name} logo`}
                          className={`w-3.5 h-3.5 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 ${item.className || ""}`}
                          loading="lazy"
                        />
                      ) : item.icon ? (
                        <span className="flex items-center justify-center shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                          {item.icon}
                        </span>
                      ) : null}
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
