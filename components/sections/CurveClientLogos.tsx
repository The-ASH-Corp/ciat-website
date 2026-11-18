"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ClientLogo {
  id: string;
  name: string;
  src: string;
}


const SLOT_1_LOGOS: [ClientLogo, ClientLogo] = [
  {
    id: "inside-studio",
    name: "Inside Studio",
    src: "/images/logo-client-3.png",
  },
  {
    id: "global-group",
    name: "Global Group",
    src: "/images/logo-client-2.png",
  },
];

const SLOT_2_LOGOS: [ClientLogo, ClientLogo] = [
  { id: "world-hive", name: "Wolrd Hive", src: "/images/logo-client-1.png" },
  {
    id: "chat-metting",
    name: "Chat Metting",
    src: "/images/logo-client-4.png",
  },
];

type AnimPhase = "idle" | "exiting" | "entering";

export default function CurveClientLogos() {
  const [activeIdx, setActiveIdx] = useState<0 | 1>(0);
  const [phase, setPhase] = useState<AnimPhase>("idle");
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const exitTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const enterTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      // Step 1: Current logos glide smoothly right & fade out (280ms)
      setPhase("exiting");

      // Step 2: Swap to new logos; they glide in from the left (340ms)
      exitTimeoutRef.current = setTimeout(() => {
        setActiveIdx((prev) => (prev === 0 ? 1 : 0));
        setPhase("entering");

        // Step 3: Animation complete, return to clean resting idle state
        enterTimeoutRef.current = setTimeout(() => {
          setPhase("idle");
        }, 340);
      }, 280);
    }, 2800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current);
      if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
    };
  }, [isPaused]);

  const logo1 = SLOT_1_LOGOS[activeIdx];
  const logo2 = SLOT_2_LOGOS[activeIdx];

  const getAnimationClass = () => {
    if (phase === "exiting") return "animate-logo-exit";
    if (phase === "entering") return "animate-logo-enter";
    return "";
  };

  const animClass = getAnimationClass();

  return (
    <div
      className="w-full relative flex items-center justify-start select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
   
      <div className="flex items-center gap-10 sm:gap-14 lg:gap-18">
        {/* Slot 1: Left Logo */}
        <div className="h-10 sm:h-12 flex items-center justify-start overflow-hidden min-w-[170px] sm:min-w-[200px]">
          <div className={animClass}>
            <Image
              src={logo1.src}
              alt={logo1.name}
              width={200}
              height={40}
              className="h-8 sm:h-9 lg:h-10 w-auto max-w-[170px] sm:max-w-[200px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
              priority
            />
          </div>
        </div>

        {/* Slot 2: Right Logo */}
        <div className="h-10 sm:h-12 flex items-center justify-start overflow-hidden min-w-[170px] sm:min-w-[200px]">
          <div className={animClass}>
            <Image
              src={logo2.src}
              alt={logo2.name}
              width={200}
              height={40}
              className="h-8 sm:h-9 lg:h-10 w-auto max-w-[170px] sm:max-w-[200px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
