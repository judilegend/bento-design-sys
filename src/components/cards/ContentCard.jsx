"use client";

import React from "react";
import Image from "next/image";
import BentoCard from "../BentoCard";

/**
 * Carte "Schedule to social media"
 */
export default function ScheduleCard() {
  return (
    <BentoCard
      className="text-left pl-5 flex flex-col justify-start items-start overflow-hidden"
      gridArea="1 / 7 / 5 / 9"
      bgColor="bg-lightPurple"
    >
      <p className="font-medium text-lg mb-2.5">Schecule to social media.</p>
      <div className="relative w-[250px] h-[200px]">
        <Image
          src="/images/illustration-schedule-posts.webp"
          alt="Schedule posts illustration"
          fill
          sizes="250px"
          className="object-contain"
        />
      </div>
      <p className="text-xs self-start">
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </BentoCard>
  );
}
