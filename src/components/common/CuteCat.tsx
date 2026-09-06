import React from "react";

export default function CuteCat() {
  return (
    <div
      aria-hidden="true"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 pointer-events-none select-none transition-all duration-300"
    >
      {/* Dark mode sleeping cat */}
      <img
        src="/cat-sleeping-white.png"
        alt="Cute Sleeping Cat"
        className="cat-dark w-11 h-auto sm:w-13 opacity-85 drop-shadow-sm animate-cat-sleep"
      />
      {/* Light mode sleeping cat */}
      <img
        src="/cat-sleeping-pink.png"
        alt="Cute Sleeping Cat"
        className="cat-light w-11 h-auto sm:w-13 opacity-90 drop-shadow-sm animate-cat-sleep"
      />
    </div>
  );
}
