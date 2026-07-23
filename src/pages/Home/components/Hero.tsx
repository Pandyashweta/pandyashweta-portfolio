import React from "react";
import { brandLogos } from "../../../data/projects";
import ReachOut from "../../../components/common/ReachOut";
import AboutMe from "./AboutMe";
import ThemeToggle from "../../../components/common/ThemeToggle";

export default function Hero() {
  return (
    <div className="flex flex-col justify-between h-full gap-8 pr-0 text-left">
      {/* Top Group: Header and Bio */}
      <div className="space-y-4">
        {/* Header Block with Theme Toggle */}
        <div className="flex flex-row justify-between items-start gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-[38px] font-semibold tracking-tight text-[var(--text-primary)] leading-none font-sans transition-colors duration-300">
              Shweta Pandya
            </h1>
            <p className="text-[var(--text-secondary)] text-[10px] sm:text-[11px] font-mono tracking-wide uppercase transition-colors duration-300">
              Technical • Business • Analyst
            </p>
          </div>
          
          <ThemeToggle />
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--border-color)] w-full transition-colors duration-300" />

        <AboutMe />
      </div>

      {/* Bottom Group: Marquee and Footer */}
      <div className="space-y-6">
        {/* Brand Marks Marquee Section */}
        <div className="space-y-2 py-0.5">
          <div className="h-px bg-[var(--border-color)] w-full transition-colors duration-300" />

          <div className="relative overflow-hidden w-full py-1.5">
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none transition-all duration-300" />
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none transition-all duration-300" />

            <div className="animate-marquee-inner gap-10">
              {[...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos].map((logo, index) => (
                <a
                  key={`${logo.name}-${index}`}
                  href={`https://www.google.com/search?q=${encodeURIComponent(logo.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-semibold tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all duration-300 cursor-pointer font-sans select-none shrink-0"
                  title={logo.desc}
                >
                  {logo.name}
                </a>
              ))}
            </div>
          </div>

          <div className="h-px bg-[var(--border-color)] w-full transition-colors duration-300" />
        </div>

        <ReachOut showScrollUp={false} showCertification={true} />
      </div>
    </div>
  );
}
