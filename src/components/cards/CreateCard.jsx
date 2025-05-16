"use client";

import React from "react";
import Image from "next/image";
import BentoCard from "../BentoCard";

/**
 * Carte "Create and schedule content quicker"
 */
export default function CreateCard() {
  return (
    <BentoCard
      className="flex flex-col justify-center items-center text-left"
      gridArea="1 / 1 / 4 / 3"
      bgColor="bg-cream"
    >
      <p className="ml-5 mb-3.5 text-2xl font-medium leading-6">
        Create and schedule content{" "}
        <span className="text-purple italic">quicker.</span>
      </p>
      <div className="relative w-[140px] h-[60px] mt-1">
        <Image
          src="/images/illustration-create-post.webp"
          alt="Create Post Illustration"
          fill
          sizes="140px"
          className="object-contain"
        />
      </div>
    </BentoCard>
  );
}
