import React from "react";
import ReachOut from "../../../components/common/ReachOut";
import AboutMe from "./AboutMe";
import ThemeToggle from "../../../components/common/ThemeToggle";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-between min-h-full gap-8 py-4 text-center">
      {/* Absolute top-right Theme Toggle button */}
      <div className="absolute top-0 right-0 sm:-top-2 sm:-right-2 z-20">
        <ThemeToggle />
      </div>

      {/* Main Content Column */}
      <div className="max-w-xl w-full mx-auto space-y-6 pt-2">


        {/* Name and Title Header */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif italic font-normal tracking-tight text-[var(--text-primary)] transition-colors duration-300">
            Shweta Pandya
          </h1>
          <p className="text-xs sm:text-sm font-mono text-[var(--text-muted)] tracking-wide transition-colors duration-300">
            technical • business • analyst
          </p>
        </div>

        {/* Bio Text Component */}
        <div className="text-left pt-2">
          <AboutMe />
        </div>
      </div>

      {/* Footer & Live Time Section */}
      <div className="w-full max-w-xl mx-auto pt-4">
        <ReachOut showScrollUp={false} />
      </div>
    </div>
  );
}
