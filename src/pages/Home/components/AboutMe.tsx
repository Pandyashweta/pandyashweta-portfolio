export default function AboutMe() {
  return (
    <div className="space-y-3">
      <p className="text-[var(--text-secondary)] text-xs sm:text-[13px] leading-relaxed font-sans font-normal transition-colors duration-300">
        Hello, I'm Shweta. My experience spans <span className="font-semibold text-[var(--text-primary)] transition-colors duration-300">web development</span>, <span className="font-semibold text-[var(--text-primary)] transition-colors duration-300">business operations</span>, <span className="font-semibold text-[var(--text-primary)] transition-colors duration-300">data analysis</span>, <span className="font-semibold text-[var(--text-primary)] transition-colors duration-300">UI/UX design</span>, <span className="font-semibold text-[var(--text-primary)] transition-colors duration-300">backend technologies</span>, and <span className="font-semibold text-[var(--text-primary)] transition-colors duration-300">product database management</span>.
      </p>
      <p className="text-[var(--text-secondary)] text-xs sm:text-[13px] leading-relaxed font-sans font-normal transition-colors duration-300">
        I have a background in <span className="font-semibold text-[var(--text-primary)] transition-colors duration-300">Environmental Science</span> and <span className="font-semibold text-[var(--text-primary)] transition-colors duration-300">Information Technology</span>, with an interest in <span className="font-semibold text-[var(--text-primary)] transition-colors duration-300">research</span>, <span className="font-semibold text-[var(--text-primary)] transition-colors duration-300">cybersecurity</span>, <span className="font-semibold text-[var(--text-primary)] transition-colors duration-300">technology</span>, and <span className="font-semibold text-[var(--text-primary)] transition-colors duration-300">environmental issues</span>. I enjoy combining analytical thinking, technical skills, and creativity to work on practical projects and explore new ideas.
      </p>
      <p className="text-[var(--text-secondary)] text-xs sm:text-[13px] leading-relaxed font-sans font-normal transition-colors duration-300">
        Outside of work, I'm usually coding, learning something new, sketching, editing videos, reading, writing, or exploring whatever interests me that week.
      </p>
      <p className="text-[var(--text-secondary)] text-xs sm:text-[13px] leading-relaxed font-sans font-normal transition-colors duration-300">
        I'm always open to <span className="font-semibold text-[var(--text-primary)] transition-colors duration-300">new opportunities, collaborations, and interesting projects</span>. Feel free to explore my work, check out my{" "}
        <a
          href="/shwetapandya-resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-[var(--text-primary)] hover:opacity-85 transition-all border-b border-[var(--border-color)] hover:border-[var(--text-primary)] pb-0.5"
        >
          resume
        </a>
        , or get in touch at{" "}
        <a
          href="mailto:pandyashweta.in@gmail.com"
          className="text-[var(--text-primary)] hover:opacity-85 transition-all border-b border-[var(--border-color)] hover:border-[var(--text-primary)] pb-0.5"
        >
          pandyashweta.in@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
