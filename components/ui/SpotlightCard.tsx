"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/utils/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The color of the spotlight gradient.
   * @default "rgba(255, 255, 255, 0.5)"
   */
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-xl bg-zinc-800", // Default border color (visible when no spotlight)
        className
      )}
      {...props}
    >
      {/* Spotlight Gradient Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />

      {/* Inner Content Background (creates the border effect) */}
      <div className="absolute inset-[1px] rounded-[11px] bg-zinc-950" />

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
