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
    <div id="reach-out" className="scroll-mt-6">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-mono text-[#555555] items-center">
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
            href="/not-found"
            className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
          >
            Resume
          </a>
          <span>•</span>
          <button
            onClick={() => setIsOpen(true)}
            className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5 cursor-pointer bg-transparent border-0 p-0 outline-none text-left font-mono text-[11px] text-[#555555]"
          >
            Email
          </button>
          <span>•</span>
          <a
            href="/projects#certifications"
            className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
          >
            Certification
          </a>
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
