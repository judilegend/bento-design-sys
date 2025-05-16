"use client";

import React from "react";
import Image from "next/image";
import BentoCard from "../BentoCard";

/**
 * Carte "Social media 10x Faster with AI"
 */
export default function SocialMediaCard() {
  return (
    <BentoCard
      className="text-white"
      gridArea="1 / 3 / 3 / 7"
      bgColor="bg-purple"
    >
      <p className="text-[34px] mt-1.5 mb-0">
        Social media <span className="text-yellow">10x</span> <i>Faster</i> with
        AI
      </p>
      <div className="relative w-[130px] h-[60px] mx-auto mb-0">
        <Image
          src="/images/illustration-five-stars.webp"
          alt="Five stars rating"
          fill
          sizes="130px"
          className="object-contain"
        />
      </div>
      <p className="text-xs mt-0">Over 4,000 5-star reviews</p>
    </BentoCard>
  );
}
