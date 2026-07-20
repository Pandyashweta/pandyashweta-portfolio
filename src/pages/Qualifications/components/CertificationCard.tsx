import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import type { Certification } from "../data/certifications";

export default function CertificationCard({ cert }: { cert: Certification; key?: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative group rounded-none border border-[#161616] bg-[#0c0c0c] overflow-hidden aspect-square hover:border-[#222] transition-all duration-300 cursor-pointer"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-3 text-left font-sans">
          <span className="text-zinc-500 text-[8px] font-mono tracking-widest uppercase mb-0.5">
            {cert.year}
          </span>
          <h4 className="font-semibold text-white text-[11px] sm:text-xs leading-tight group-hover:text-emerald-400 transition-colors line-clamp-2">
            {cert.title}
          </h4>
          <div className="flex justify-between items-center text-[9px] text-zinc-400 mt-1 min-w-0">
            <span className="truncate pr-2">{cert.issuer}</span>
            {cert.issueNumber && (
              <span className="text-zinc-500 font-mono text-[8px] shrink-0">
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
            <div className="bg-[#0c0c0c] border border-[#1a1a1a] rounded-none p-6 w-full relative overflow-hidden shadow-2xl shadow-black/80 flex flex-col gap-4">
              {/* Glowing Accent Effect */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Top: Image Preview */}
              <div className="relative group/cert w-full aspect-[16/10] rounded-none overflow-hidden bg-zinc-950 border border-zinc-800/80 mt-1 shadow-inner z-10">
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
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-none bg-[#121212] border border-[#1a1a1a] text-[9.5px] text-zinc-500 font-mono">
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
                  className="inline-flex items-center justify-center gap-1.5 w-full bg-white text-black hover:bg-[#e5e5e5] border border-transparent font-sans text-xs font-bold py-3 px-4 rounded-none transition-all duration-300 active:scale-[0.98] shadow-lg shadow-black/20 cursor-pointer mt-1 z-10"
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
