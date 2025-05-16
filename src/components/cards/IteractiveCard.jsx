"use client";

import React, { useState } from "react";
import BentoCard from "../BentoCard";

/**
 * Composant interactif de démonstration
 * Ce composant peut être ajouté à la grille pour montrer des fonctionnalités interactives
 */
export default function InteractiveCard() {
  const [likes, setLikes] = useState(0);

  return (
    <BentoCard
      className="flex flex-col justify-center items-center"
      gridArea="7 / 3 / 9 / 5"
      bgColor="bg-cream"
    >
      <p className="text-lg font-medium mb-4">Like this design</p>
      <div className="flex flex-col items-center">
        <button
          onClick={() => setLikes(likes + 1)}
          className="bg-purple text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition-all duration-200"
        >
          👍 Like
        </button>
        <p className="mt-3 text-sm">
          {likes} {likes === 1 ? "person" : "people"} liked this
        </p>
      </div>
    </BentoCard>
  );
}
