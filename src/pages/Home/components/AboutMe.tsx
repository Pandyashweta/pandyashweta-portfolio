export default function AboutMe() {
  return (
    <div className="space-y-3">
      <h3 className="text-[13px] sm:text-sm font-bold text-[#888888] font-sans uppercase tracking-wider">
        About me.
      </h3>
      <p className="text-[#888888] text-xs sm:text-[13px] leading-relaxed font-sans font-normal">
        Hello, I'm a 22-year-old <span className="font-semibold text-zinc-200">Software Engineer</span> with <span className="font-semibold text-zinc-200">Research & Development</span> as my hobby, alongside drawing silly illustrations. I'm a curious individual with interests that span various environmental-related issues around the world, as well as various technological fields such as data analysis and software development.
      </p>
      <p className="text-[#888888] text-xs sm:text-[13px] leading-relaxed font-sans font-normal">
        I have experience in <span className="font-semibold text-zinc-200">software development</span>, <span className="font-semibold text-zinc-200">business operations</span>, <span className="font-semibold text-zinc-200">UX/UI design</span>, and various <span className="font-semibold text-zinc-200">backend technologies</span>, including knowledge of managing <span className="font-semibold text-zinc-200">product databases</span>. I hold a <span className="font-semibold text-zinc-200">Bachelor's degree in Environmental Science</span> and a <span className="font-semibold text-zinc-200">Master's degree in Information Technology</span>, combining scientific research, analytical thinking, and technical problem-solving.
      </p>
      <p className="text-[#888888] text-xs sm:text-[13px] leading-relaxed font-sans font-normal">
        Outside my professional work, I enjoy building websites, designing user interfaces, and exploring and learning about technologies, as well as the world of ethical hacking. I've created several web projects, designed the UI/UX for my own website and an Android app, and recently started exploring digital illustration. During my environmental studies, I also conducted independent research on microplastics, developing a methodology that demonstrated their presence in government-distributed organic fertilizers.
      </p>
      <p className="text-[#888888] text-xs sm:text-[13px] leading-relaxed font-sans font-normal">
        I enjoy writing, drawing, and video editing, and I'm always interested in learning new skills, solving problems, and building meaningful solutions. I'm open to <span className="font-semibold text-zinc-200">new opportunities, collaborations, and projects</span>. You can see my{"   "}
        <a
          href="/not-found"
          className="text-zinc-200 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-0.5"
        >
          resume
        </a>{" "}
        or reach out at{" "}
        <a
          href="mailto:pandyashweta.in@gmail.com"
          className="text-zinc-200 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-0.5"
        >
          pandyashweta.in@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
