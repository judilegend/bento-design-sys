"use client";

import React, { useState } from "react";
import BentoCard from "../BentoCard";

/**
 * Carte de statistiques montrant un graphique simple
 */
export default function StatsCard() {
  const stats = [42, 65, 73, 58, 64, 78, 85];
  const maxStat = Math.max(...stats);

  return (
    <BentoCard
      className="p-4 flex flex-col"
      gridArea="7 / 5 / 9 / 9"
      bgColor="bg-lightPurple"
    >
      <h3 className="text-lg font-medium mb-2 text-left">Weekly Engagement</h3>

      <div className="flex items-end justify-between h-20 gap-1 mt-2">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="bg-purple w-6 rounded-t-md"
              style={{ height: `${(stat / maxStat) * 100}%` }}
            ></div>
            <span className="text-xs mt-1">
              {["M", "T", "W", "T", "F", "S", "S"][index]}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg p-3 mt-4 grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-xs text-gray-500">Posts</p>
          <p className="font-bold">24</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Engagement</p>
          <p className="font-bold">66%</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Followers</p>
          <p className="font-bold">+125</p>
        </div>
      </div>
    </BentoCard>
  );
}
