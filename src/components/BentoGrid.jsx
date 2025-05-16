"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

/**
 * Composant grille pour le système de design Bento
 */
export default function BentoGrid({ children }) {
  const gridRef = useRef(null);

  useEffect(() => {
    // Animation d'entrée de la grille
    gsap.fromTo(
      gridRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-rows-[repeat(8,75px)] grid-cols-[repeat(8,75px)] gap-5 text-center m-0"
    >
      {children}
    </div>
  );
}
