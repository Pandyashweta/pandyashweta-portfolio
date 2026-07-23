import { useState } from "react";
import { Mail, Copy, Check, ExternalLink, X } from "lucide-react";

export default function ReachOut({
  showScrollUp = false,
  showCertification = false,
}: {
  showScrollUp?: boolean;
  showCertification?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "pandyashweta.in@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="reach-out" className="scroll-mt-6">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-mono text-[var(--text-muted)] items-center transition-colors duration-300">
          <a
            href="https://www.linkedin.com/in/pandyashweta/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-primary)] transition-all border-b border-transparent hover:border-[var(--text-primary)] pb-0.5"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="https://github.com/Pandyashweta"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-primary)] transition-all border-b border-transparent hover:border-[var(--text-primary)] pb-0.5"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://www.figma.com/@pandyashweta"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-primary)] transition-all border-b border-transparent hover:border-[var(--text-primary)] pb-0.5"
          >
            Figma
          </a>
          <span>•</span>
          <a
            href="/Pandya Shweta  Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-primary)] transition-all border-b border-transparent hover:border-[var(--text-primary)] pb-0.5"
          >
            Resume
          </a>
          <span>•</span>
          <button
            onClick={() => setIsOpen(true)}
            className="hover:text-[var(--text-primary)] transition-all border-b border-transparent hover:border-[var(--text-primary)] pb-0.5 cursor-pointer bg-transparent border-0 p-0 outline-none text-left font-mono text-[11px] text-[var(--text-muted)]"
          >
            Email
          </button>
          {showCertification && (
            <>
              <span>•</span>
              <a
                href="https://drive.google.com/drive/folders/1YKBPsnmHilmkRCv5kUm4bAo0i8hLy0lY?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--text-primary)] transition-all border-b border-transparent hover:border-[var(--text-primary)] pb-0.5"
              >
                Certification
              </a>
            </>
          )}
          <span>•</span>
          <a
            href="/projects"
            className="hover:text-[var(--text-primary)] transition-all border-b border-transparent hover:border-[var(--text-primary)] pb-0.5"
          >
            Projects
          </a>
        </div>

        {showScrollUp && (
          <button
            onClick={handleScrollToTop}
            className="p-2 rounded-full border border-[var(--border-color)] hover:border-[var(--text-primary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all duration-300 cursor-pointer"
            title="Scroll to top"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Email Client Selection Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[5px] p-5 max-w-xs w-full mx-4 shadow-2xl relative flex flex-col gap-4 animate-in zoom-in-95 duration-200 text-left transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-bold text-[var(--text-primary)] font-sans uppercase tracking-wider transition-colors duration-300">
                Send Email
              </h4>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] w-6 h-6 flex items-center justify-center rounded-full hover:bg-[var(--border-color)] transition-colors cursor-pointer"
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
                className="flex items-center justify-between gap-3 p-3 rounded-lg bg-[var(--bg-primary)] hover:opacity-85 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-semibold font-sans transition-all active:scale-98 cursor-pointer duration-300"
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
                className="flex items-center justify-between gap-3 p-3 rounded-lg bg-[var(--bg-primary)] hover:opacity-85 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-semibold font-sans transition-all active:scale-98 cursor-pointer duration-300"
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
                className="flex items-center justify-between gap-3 p-3 rounded-lg bg-[var(--bg-primary)] hover:opacity-85 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-semibold font-sans transition-all active:scale-98 cursor-pointer duration-300"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>Default Mail Client</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-600" />
              </a>

              <button
                onClick={handleCopy}
                className="flex items-center justify-between gap-3 p-3 rounded-lg bg-[var(--bg-primary)] hover:opacity-85 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-semibold font-sans transition-all active:scale-98 cursor-pointer text-left w-full duration-300"
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
