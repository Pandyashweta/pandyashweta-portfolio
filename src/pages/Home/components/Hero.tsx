import React from "react";
import { brandLogos } from "../../../data/projects";
import ReachOut from "../../../components/common/ReachOut";
import AboutMe from "./AboutMe";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4 pr-0 text-left">
      {/* Header Block */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-[38px] font-semibold tracking-tight text-white leading-none font-sans">
          Shweta Pandya
        </h1>
        <p className="text-[#777777] text-[10px] sm:text-[11px] font-mono tracking-wide uppercase">
          Software Engineer • Research & Development
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#161616] w-full" />

      <AboutMe />

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

      <ReachOut showScrollUp={false} />
    </div>
  );
}
