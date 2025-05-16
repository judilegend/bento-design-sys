"use client";

import BentoGrid from "@/components/BentoGrid";
import CreateCard from "@/components/cards/CreateCard";
import SocialMediaCard from "@/components/cards/SocialMediaCard";
import ScheduleCard from "@/components/cards/ScheduleCard";
import ContentCard from "@/components/cards/ContentCard";
import MultiPlatformCard from "@/components/cards/MultiPlatformCard";
import GrowthCard from "@/components/cards/GrowthCard";
import FollowersCard from "@/components/cards/FollowersCard";
import ConsistencyCard from "@/components/cards/ConsistencyCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <BentoGrid>
        <CreateCard />
        <SocialMediaCard />
        <ScheduleCard />
        <ContentCard />
        <MultiPlatformCard />
        <GrowthCard />
        <FollowersCard />
        <ConsistencyCard />
      </BentoGrid>
    </main>
  );
}
