"use client";

import React, { useEffect, useRef, useState } from "react";

interface UnderlineHighlightProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  delay?: number;
}

export default function UnderlineHighlight({
  children,
  color = "#00AEEF",
  className = "",
  delay = 250,
}: UnderlineHighlightProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={containerRef}
      className={`relative inline-block whitespace-nowrap ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute -bottom-1 sm:-bottom-2.5 left-0 w-full h-5 sm:h-6 z-0 pointer-events-none overflow-visible"
        viewBox="0 0 500 120"
        preserveAspectRatio="none"
      >
        <path
          d="M 5 65 Q 250 45, 495 65"
          stroke={color}
          strokeWidth="64"
          strokeLinecap="round"
          strokeOpacity="0.88"
          fill="none"
          pathLength={100}
          strokeDasharray={100}
          strokeDashoffset={isVisible ? 0 : 100}
          style={{
            transition: isVisible
              ? `stroke-dashoffset 1100ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
              : "none",
          }}
        />
      </svg>
    </span>
  );
}
