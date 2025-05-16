"use client";

import React from "react";
import Image from "next/image";
import BentoCard from "../BentoCard";

/**
 * Carte "Grow followers with non-stop content"
 */
export default function FollowersCard() {
  return (
    <BentoCard
      className="flex flex-row justify-center bg-blue-400 items-center gap-2.5"
      gridArea="5 / 5 / 7 / 9"
      bgColor="bg-purple"
    >
      <div className="relative w-[200px] h-[150px] ml-5">
        <Image
          src="/images/illustration-grow-followers.webp"
          alt="Grow followers illustration"
          fill
          sizes="150px"
          className="object-contain"
        />
      </div>
      <p className="mr-5 text-2xl text-white text-left">
        Grow followers with non-stop content
      </p>
    </BentoCard>
  );
}
