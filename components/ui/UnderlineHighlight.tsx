import React from "react";

interface UnderlineHighlightProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function UnderlineHighlight({
  children,
  color = "#00AEEF",
  className = "",
}: UnderlineHighlightProps) {
  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute -bottom-1 left-0 w-full h-3.5 z-0 pointer-events-none"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
      >
        <path
          d="M3,77.5s200.54-11,493,0"
          transform="translate(-2.75 -68.11)"
          stroke={color}
          strokeWidth="36"
          strokeLinecap="round"
          strokeOpacity="0.85"
          fill="none"
        />
      </svg>
    </span>
  );
}
