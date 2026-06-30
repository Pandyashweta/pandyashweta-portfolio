import React from "react";
import { ArrowUpRight } from "lucide-react";
import { brandLogos } from "../../data/projects";
import AboutMe from "./AboutMe";
import ReachOut from "./ReachOut";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4 pr-0 text-left">
      {/* Header Block */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-[38px] font-semibold tracking-tight text-white leading-none font-sans">
          Pandya Shweta
        </h1>
        <p className="text-[#777777] text-xs sm:text-xs font-mono tracking-widest uppercase">
          Multidisciplinary Builder
        </p>
      </div>

      {/* Hero Core Statement */}
      <div>
        <p className="text-base sm:text-[17px] font-normal text-[#d4d4d8] tracking-tight leading-relaxed font-sans">
          Multidisciplinary problem solver with hands-on experience at the intersection of technology, design, and operations, driven by curiosity and a commitment to continuous improvement.
        </p>
      </div>

      {/* Button block */}
      <div className="flex items-center gap-2.5 flex-wrap">
        <a
          href="https://cal.com/pandyashweta/15min?overlayCalendar=true"
          target="_blank"
          rel="noreferrer"
          data-cal-link="pandyashweta/15min"
          data-cal-config='{"layout":"month_view"}'
          className="inline-flex items-center gap-1.5 bg-white text-black hover:bg-[#e5e5e5] active:scale-98 font-semibold font-sans text-xs px-5 py-2.5 rounded-full transition-all shadow-md shadow-black/20 cursor-pointer"
        >
          Connect
          <ArrowUpRight className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
        </a>

        <div className="inline-flex items-center gap-2 bg-[#121212] border border-[#222] text-[#888888] font-medium font-sans text-[11px] px-4 py-2.5 rounded-full select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for work
        </div>
      </div>

      {/* Brand Marks Marquee Section */}
      <div className="space-y-2 py-0.5">
        <div className="h-px bg-[#161616] w-full" />
        
        <div className="relative overflow-hidden w-full py-1.5">
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-inner gap-10">
            {[...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos].map((logo, index) => (
              <a
                key={`${logo.name}-${index}`}
                href={`https://www.google.com/search?q=${encodeURIComponent(logo.name)}`}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-semibold tracking-[0.2em] text-[#444444] hover:text-white transition-colors cursor-pointer font-sans select-none shrink-0"
                title={logo.desc}
              >
                {logo.name}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-[#161616] w-full" />
      </div>

      <AboutMe />

      {/* Divider */}
      <div className="h-px bg-[#161616] w-full" />

      <ReachOut showScrollUp={false} />
    </div>
  );
}
