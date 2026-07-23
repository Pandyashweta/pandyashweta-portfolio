import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Showcase from "../Home/components/Showcase";

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <main className="w-full min-h-screen bg-[var(--bg-primary)] text-left transition-colors duration-300 relative z-10">
      {/* Header Container */}
      <div className="max-w-4xl mx-auto pt-8 px-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] font-sans transition-colors duration-300">
          Projects
        </h2>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-1.5 bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 active:scale-95 font-semibold font-sans text-xs px-4 py-2 rounded-full transition-all shadow-md shadow-black/20 cursor-pointer shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[var(--bg-primary)]" strokeWidth={2.5} />
          Back
        </button>
      </div>

      {/* Main Content Showcase */}
      <div className="max-w-4xl mx-auto pt-6 pb-12 px-6">
        <Showcase />
      </div>
    </main>
  );
}
