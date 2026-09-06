import React from "react";

// Subtle, Elegant Butterfly Component
function Butterfly({
  style,
  color1 = "#f472b6",
  color2 = "#e879f9",
  scale = 0.75,
  className = "",
}: {
  style?: React.CSSProperties;
  color1?: string;
  color2?: string;
  scale?: number;
  className?: string;
}) {
  return (
    <div
      className={`absolute pointer-events-none z-0 ${className}`}
      style={{
        transform: `scale(${scale})`,
        ...style,
      }}
    >
      <svg
        width="42"
        height="42"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-60 drop-shadow-2xs"
      >
        {/* Left Wing */}
        <g className="animate-wing-left origin-center">
          <path
            d="M50 50 C30 20, 5 25, 10 50 C15 70, 35 65, 50 50 Z"
            fill={color1}
            fillOpacity="0.8"
          />
          <path
            d="M50 50 C25 55, 10 75, 25 88 C40 95, 48 70, 50 50 Z"
            fill={color2}
            fillOpacity="0.75"
          />
          <circle cx="28" cy="40" r="3.5" fill="#ffffff" fillOpacity="0.6" />
        </g>
        {/* Right Wing */}
        <g className="animate-wing-right origin-center">
          <path
            d="M50 50 C70 20, 95 25, 90 50 C85 70, 65 65, 50 50 Z"
            fill={color1}
            fillOpacity="0.8"
          />
          <path
            d="M50 50 C75 55, 90 75, 75 88 C60 95, 52 70, 50 50 Z"
            fill={color2}
            fillOpacity="0.75"
          />
          <circle cx="72" cy="40" r="3.5" fill="#ffffff" fillOpacity="0.6" />
        </g>
        {/* Body */}
        <path d="M50 32 Q48 50 50 72 Q52 50 50 32 Z" fill="#64748b" />
      </svg>
    </div>
  );
}

// Minimal Flower Blossom Component
function FlowerBlossom({
  size = 30,
  petalColor = "#fbcfe8",
  centerColor = "#fde047",
  style,
  className = "",
}: {
  size?: number;
  petalColor?: string;
  centerColor?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`absolute pointer-events-none z-0 ${className}`}
      style={style}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-65"
      >
        <g className="origin-center">
          {/* 5 Petals */}
          <ellipse cx="50" cy="22" rx="13" ry="22" fill={petalColor} />
          <ellipse cx="50" cy="22" rx="13" ry="22" fill={petalColor} transform="rotate(72 50 50)" />
          <ellipse cx="50" cy="22" rx="14" ry="22" fill={petalColor} transform="rotate(144 50 50)" />
          <ellipse cx="50" cy="22" rx="14" ry="22" fill={petalColor} transform="rotate(216 50 50)" />
          <ellipse cx="50" cy="22" rx="14" ry="22" fill={petalColor} transform="rotate(288 50 50)" />
          {/* Flower Center */}
          <circle cx="50" cy="50" r="10" fill={centerColor} />
        </g>
      </svg>
    </div>
  );
}

// Single Petal Accent
function Petal({
  color = "#fda4af",
  style,
  className = "",
}: {
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div className={`absolute pointer-events-none z-0 ${className}`} style={style}>
      <svg width="18" height="24" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
        <path d="M10 0 C18 6, 20 18, 10 28 C0 18, 2 6, 10 0 Z" fill={color} />
      </svg>
    </div>
  );
}

export default function FloralBackground() {
  return (
    <div
      aria-hidden="true"
      className="floral-bg-container fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-0 invisible transition-all duration-700 ease-in-out"
    >
      {/* Soft pastel ambient background glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Outer Edge Butterflies (strictly outside central content) */}
      <Butterfly
        scale={0.7}
        color1="#f472b6"
        color2="#c084fc"
        className="animate-butterfly-float-1"
        style={{ top: "12%", left: "3%" }}
      />
      <Butterfly
        scale={0.65}
        color1="#38bdf8"
        color2="#f472b6"
        className="animate-butterfly-float-2"
        style={{ top: "45%", right: "3%" }}
      />
      <Butterfly
        scale={0.7}
        color1="#a855f7"
        color2="#fcd34d"
        className="animate-butterfly-float-3"
        style={{ bottom: "12%", left: "4%" }}
      />

      {/* Outer Edge Flower Blossoms */}
      <FlowerBlossom
        size={32}
        petalColor="#fbcfe8"
        centerColor="#fde047"
        className="animate-flower-float-1"
        style={{ top: "6%", left: "2.5%" }}
      />
      <FlowerBlossom
        size={34}
        petalColor="#e9d5ff"
        centerColor="#fef08a"
        className="animate-flower-float-2"
        style={{ top: "25%", right: "2.5%" }}
      />
      <FlowerBlossom
        size={30}
        petalColor="#fed7aa"
        centerColor="#f472b6"
        className="animate-flower-float-3"
        style={{ bottom: "20%", right: "3%" }}
      />

      {/* Subtle Soft Drifting Petals (strictly outer edges) */}
      <Petal color="#fda4af" className="animate-petal-fall-1" style={{ top: "18%", left: "4%" }} />
      <Petal color="#f0abfc" className="animate-petal-fall-2" style={{ top: "60%", left: "2%" }} />
      <Petal color="#fbcfe8" className="animate-petal-fall-3" style={{ top: "75%", right: "4%" }} />
    </div>
  );
}
