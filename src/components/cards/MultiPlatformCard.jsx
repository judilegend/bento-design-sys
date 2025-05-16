"use client";

import React from "react";
import Image from "next/image";
import BentoCard from "../BentoCard";

/**
 * Carte "Manage multiple accounts and platforms"
 */
export default function MultiPlatformCard() {
  return (
    <BentoCard
      className="text-left pl-5 overflow-hidden"
      gridArea="3 / 3 / 5 / 5"
      bgColor="bg-offWhite"
    >
      <div className="relative w-[200px] h-[40px] mt-2.5">
        <Image
          src="/images/illustration-multiple-platforms.webp"
          alt="Multiple platforms illustration"
          fill
          sizes="200px"
          className="object-contain"
        />
      </div>
      <p className="text-xl mt-0 font-medium leading-[22px]">
        Manage multiple accounts and platforms.
      </p>
    </BentoCard>
  );
}
