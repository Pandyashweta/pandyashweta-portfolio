import type { TechItem } from "../../../types";

export default function SkillsMarquee({ items, reverse }: { items: TechItem[]; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden w-full py-1">
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
      <div
        className="animate-marquee-inner gap-3"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[...items, ...items, ...items, ...items].map((item, index) => (
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
  );
}
