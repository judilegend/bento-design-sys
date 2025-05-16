"use client";

import React from "react";
import Image from "next/image";
import BentoCard from "../BentoCard";

/**
 * Carte ">56% faster audience growth"
 */
export default function GrowthCard() {
  return (
    <BentoCard className="" gridArea="5 / 3 / 7 / 5" bgColor="bg-offWhite">
      <p className="text-[42px] font-medium mt-1 mb-0">&gt;56%</p>
      <p className="mt-2.5 text-xs mb-4">faster audience growth</p>
      <div className="relative w-[130px] h-[45px] mx-auto">
        <Image
          src="/images/illustration-audience-growth.webp"
          alt="Audience growth illustration"
          fill
          sizes="130px"
          className="object-contain"
        />
      </div>
    </BentoCard>
  );
}
