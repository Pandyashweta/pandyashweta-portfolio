import { useState } from "react";
import { ArrowUp, Mail, Copy, Check, X, ExternalLink } from "lucide-react";

export default function ReachOut({ showScrollUp = true }: { showScrollUp?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "pandyashweta.in@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const scrollToTop = () => {
    try {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (e) {
      try {
        if (typeof window !== "undefined") {
          window.scrollTo(0, 0);
        }
      } catch (err) {}
    }

    try {
      const leftCol = document.querySelector(".subtle-scrollbar-left");
      if (leftCol) {
        leftCol.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (e) {
      try {
        const leftCol = document.querySelector(".subtle-scrollbar-left") as HTMLElement;
        if (leftCol) {
          leftCol.scrollTop = 0;
        }
      } catch (err) {}
    }

    try {
      const rightCol = document.querySelector(".subtle-scrollbar-right");
      if (rightCol) {
        rightCol.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (e) {
      try {
        const rightCol = document.querySelector(".subtle-scrollbar-right") as HTMLElement;
        if (rightCol) {
          rightCol.scrollTop = 0;
        }
      } catch (err) {}
    }
  };

  return (
    <div id="reach-out" className="space-y-4 scroll-mt-6">
      <h3 className="text-[13px] sm:text-sm font-bold text-[#888888] font-sans uppercase tracking-wider">
        Reach out.
      </h3>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <p className="text-[#888888] text-xs sm:text-[13px] font-normal leading-relaxed font-sans">
            Let's get some work done.
          </p>
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="inline-block text-white text-xs sm:text-[13px] font-sans hover:text-white/80 transition-colors border-b border-[#333] hover:border-white pb-0.5 cursor-pointer bg-transparent border-0 outline-none text-left"
            >
              {email}
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center pt-2 w-full">
          <div className="flex gap-4 text-[11px] font-mono text-[#555555] items-center">
            <a
              href="https://www.linkedin.com/in/pandyashweta/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://github.com/Pandyashweta"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.figma.com/@pandyashweta"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
            >
              Figma
            </a>
            <span>•</span>
            <a
              href="https://drive.google.com/file/d/1BLmGQaZA0cyL2yPhi6-PMjQG0BdnWmfI/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
            >
              Resume
            </a>
          </div>

          {showScrollUp && (
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#121212] hover:bg-[#1a1a1a] border border-[#222] text-[#888888] hover:text-white transition-all active:scale-95 cursor-pointer flex items-center justify-center group"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#888888] group-hover:text-white transition-colors" strokeWidth={2.5} />
            </button>
          )}
        </div>
      </div>

      {/* Email Client Selection Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-[#0c0c0c] border border-[#161616] rounded-xl p-5 max-w-xs w-full mx-4 shadow-2xl relative flex flex-col gap-4 animate-in zoom-in-95 duration-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-bold text-white font-sans uppercase tracking-wider">
                Send Email
              </h4>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-white w-6 h-6 flex items-center justify-center rounded-full hover:bg-zinc-900 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Email client options */}
            <div className="flex flex-col gap-2">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between gap-3 p-3 rounded-lg bg-[#121212] hover:bg-[#1a1a1a] border border-[#222] text-[#d4d4d8] hover:text-white text-xs font-semibold font-sans transition-all active:scale-98 cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>Open in Gmail (Web)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-600" />
              </a>

              <a
                href={`https://outlook.live.com/default.aspx?rru=compose&to=${email}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between gap-3 p-3 rounded-lg bg-[#121212] hover:bg-[#1a1a1a] border border-[#222] text-[#d4d4d8] hover:text-white text-xs font-semibold font-sans transition-all active:scale-98 cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>Open in Outlook (Web)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-600" />
              </a>

              <a
                href={`mailto:${email}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between gap-3 p-3 rounded-lg bg-[#121212] hover:bg-[#1a1a1a] border border-[#222] text-[#d4d4d8] hover:text-white text-xs font-semibold font-sans transition-all active:scale-98 cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>Default Mail Client</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-600" />
              </a>

              <button
                onClick={handleCopy}
                className="flex items-center justify-between gap-3 p-3 rounded-lg bg-[#121212] hover:bg-[#1a1a1a] border border-[#222] text-[#d4d4d8] hover:text-white text-xs font-semibold font-sans transition-all active:scale-98 cursor-pointer text-left w-full"
              >
                <div className="flex items-center gap-2.5">
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-zinc-400" />
                  )}
                  <span>{copied ? "Copied address!" : "Copy email address"}</span>
                </div>
                {!copied && <span className="text-[10px] text-zinc-500 font-mono">Copy</span>}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
