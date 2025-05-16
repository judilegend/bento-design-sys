"use client";

import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

/**
 * Composant réutilisable pour chaque carte dans la grille Bento
 */
export default function BentoCard({
  className = "",
  gridArea = "",
  bgColor = "bg-white",
  children,
}) {
  const cardRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          y: 30,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, [inView]);

  return (
    <div
      ref={(el) => {
        cardRef.current = el;
        ref(el);
      }}
      className={`rounded-lg shadow-md ${bgColor} ${className}`}
      style={{ gridArea }}
    >
      {children}
    </div>
  );
}
