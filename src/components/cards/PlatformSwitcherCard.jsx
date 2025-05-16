"use client";

import { useState } from "react";
import BentoCard from "../BentoCard";
import Image from "next/image";

/**
 * Carte interactive qui permet de basculer entre différentes plateformes sociales
 */
export default function PlatformSwitcherCard() {
  const [activePlatform, setActivePlatform] = useState("instagram");

  const platforms = {
    instagram: {
      name: "Instagram",
      color: "bg-gradient-to-br from-purple-600 to-pink-500",
      icon: "📸",
    },
    twitter: {
      name: "Twitter",
      color: "bg-blue-400",
      icon: "🐦",
    },
    facebook: {
      name: "Facebook",
      color: "bg-blue-600",
      icon: "👍",
    },
    linkedin: {
      name: "LinkedIn",
      color: "bg-blue-800",
      icon: "💼",
    },
  };

  return (
    <BentoCard
      className="flex flex-col p-4"
      gridArea="7 / 1 / 9 / 3"
      bgColor="bg-offWhite"
    >
      <h3 className="text-lg font-medium mb-2">Choose Platform</h3>

      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {Object.keys(platforms).map((platform) => (
          <button
            key={platform}
            onClick={() => setActivePlatform(platform)}
            className={`px-2 py-1 rounded-full text-xs ${
              activePlatform === platform
                ? "ring-2 ring-purple font-bold"
                : "opacity-70"
            }`}
          >
            {platforms[platform].icon} {platforms[platform].name}
          </button>
        ))}
      </div>

      <div
        className={`rounded-lg p-4 text-white flex-1 flex items-center justify-center ${platforms[activePlatform].color}`}
      >
        <p className="text-center">
          <span className="text-2xl block mb-1">
            {platforms[activePlatform].icon}
          </span>
          Publishing to {platforms[activePlatform].name}
        </p>
      </div>
    </BentoCard>
  );
}
