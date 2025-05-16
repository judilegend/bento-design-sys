"use client";

import React from "react";
import Image from "next/image";
import BentoCard from "../BentoCard";

/**
 * Carte "Maintain a consistent post schedule"
 */
export default function ConsistencyCard() {
  return (
    <BentoCard
      className="text-left p-3.5 overflow-hidden"
      gridArea="3 / 5 / 5 / 7"
      bgColor="bg-yellow"
    >
      <p className="font-medium text-lg">
        Maintain a consistent post schedule.
      </p>
      <div className="relative w-[140px] h-[100px]">
        <Image
          src="/images/illustration-consistent-schedule.webp"
          alt="Consistent schedule illustration"
          fill
          sizes="140px"
          className="object-contain"
        />
      </div>
    </BentoCard>
  );
}
