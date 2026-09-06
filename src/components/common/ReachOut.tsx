export default function ReachOut({
  showScrollUp = false,
  showCertification = false,
}: {
  showScrollUp?: boolean;
  showCertification?: boolean;
}) {
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
            href="/shwetapandya-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-primary)] transition-all border-b border-transparent hover:border-[var(--text-primary)] pb-0.5"
          >
            Resume
          </a>
          <span>•</span>
          <a
            href="mailto:pandyashweta.in@gmail.com"
            className="hover:text-[var(--text-primary)] transition-all border-b border-transparent hover:border-[var(--text-primary)] pb-0.5"
          >
            Email
          </a>
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
    </div>
  );
}
