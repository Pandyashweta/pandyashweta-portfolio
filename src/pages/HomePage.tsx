import { useOutletContext } from "react-router-dom";
import type { LayoutContext } from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import Showcase from "../components/sections/Showcase";

export default function HomePage() {
  const { leftColRef, rightColRef, handleScroll } = useOutletContext<LayoutContext>();

  return (
    <main className="w-full h-auto lg:h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-[35fr_65fr] gap-4 items-stretch relative z-10">
      <div
        ref={leftColRef}
        onScroll={handleScroll}
        className="h-auto lg:h-full lg:min-h-0 homepage-scrollbar-left"
      >
        <div className="pt-6 pb-6 pl-6 pr-3">
          <Hero />
        </div>
      </div>

      <div
        ref={rightColRef}
        onScroll={handleScroll}
        className="h-auto lg:h-full lg:min-h-0 homepage-scrollbar-right"
      >
        <div className="min-h-full lg:h-full pt-6 pb-6 pl-3 pr-6 flex flex-col">
          <Showcase />
        </div>
      </div>
    </main>
  );
}
