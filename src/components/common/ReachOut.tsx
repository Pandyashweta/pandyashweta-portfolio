export default function ReachOut({
  showScrollUp = false,
}: {
  showScrollUp?: boolean;
}) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="reach-out" className="scroll-mt-6 space-y-6 pt-4">
      {/* Centered nav links */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs sm:text-sm font-mono text-[var(--text-muted)] font-medium transition-colors duration-300">
        <a
          href="https://www.linkedin.com/in/pandyashweta/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--text-primary)] transition-all"
        >
          linkedin
        </a>
        <a
          href="https://github.com/Pandyashweta"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--text-primary)] transition-all"
        >
          github
        </a>
        <a
          href="mailto:pandyashweta.in@gmail.com"
          className="hover:text-[var(--text-primary)] transition-all"
        >
          email
        </a>
        <a
          href="/projects"
          className="hover:text-[var(--text-primary)] transition-all"
        >
          projects
        </a>
      </div>

      {showScrollUp && (
        <div className="flex justify-center">
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
        </div>
      )}
    </div>
  );
}
