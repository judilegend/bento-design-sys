"use client";

import React from "react";

/**
 * Composant grille pour le système de design Bento
 */
export default function BentoGrid({ children }) {
  return (
    <div className="grid grid-rows-[repeat(8,75px)] grid-cols-[repeat(8,75px)] gap-5 text-center m-0">
      {children}
    </div>
  );
}
