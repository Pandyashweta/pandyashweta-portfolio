import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { figmaProjects, researchProjects } from "../../data/projects";
import type { LayoutContext } from "../../components/layout/Layout";
import StandardView from "./components/StandardView";

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { leftColRef, rightColRef, handleScroll, scrollToTop } = useOutletContext<LayoutContext>();

  useEffect(() => {
    setTimeout(scrollToTop, 50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  // Find project in all lists
  const allProjects = [
    ...figmaProjects,
    ...researchProjects
  ];

  // Remove duplicates by ID
  const uniqueProjects = allProjects.filter(
    (proj, index, self) => self.findIndex((p) => p.id === proj.id) === index
  );

  const project = uniqueProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="w-full h-screen flex flex-col items-center justify-center text-center bg-[var(--bg-primary)] text-white transition-colors duration-300">
        <h1 className="text-2xl font-bold mb-4 font-sans">Project not found</h1>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-1.5 bg-white text-black hover:bg-[#e5e5e5] active:scale-95 font-semibold font-sans text-xs px-5 py-2.5 rounded-full transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </button>
      </main>
    );
  }

  return (
    <StandardView
      project={project}
      leftColRef={leftColRef}
      rightColRef={rightColRef}
      handleScroll={handleScroll}
    />
  );
}
