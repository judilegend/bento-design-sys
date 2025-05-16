"use client";

import React from "react";
import Image from "next/image";

/**
 * Composant réutilisable pour chaque carte dans la grille Bento
 */
export default function BentoCard({
  className = "",
  gridArea = "",
  bgColor = "bg-white",
  children,
}) {
  return (
    <div
      className={`rounded-lg shadow-md ${bgColor} ${className}`}
      style={{ gridArea }}
    >
      {children}
    </div>
  );
}
