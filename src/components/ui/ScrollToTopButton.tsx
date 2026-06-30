import { ArrowUp } from "lucide-react";

interface ScrollToTopButtonProps {
  onClick: () => void;
}

export default function ScrollToTopButton({ onClick }: ScrollToTopButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#121212]/90 hover:bg-[#1a1a1a] border border-[#222] text-white backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center group"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4 text-[#888888] group-hover:text-white transition-colors" strokeWidth={2.5} />
    </button>
  );
}
