"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";
import CreateCard from "@/components/cards/CreateCard";
import SocialMediaCard from "@/components/cards/SocialMediaCard";
import ScheduleCard from "@/components/cards/SheduleCard";
import ContentCard from "@/components/cards/ContentCard";
import MultiPlatformCard from "@/components/cards/MultiPlatformCard";
import GrowthCard from "@/components/cards/GrowthCard";
import FollowersCard from "@/components/cards/FollowersCard";
import ConsistencyCard from "@/components/cards/ConsistencyCard";
import PlatformSwitcherCard from "@/components/cards/PlatformSwitcherCard";
import SchedulerCard from "@/components/cards/SchedulerCard";
import StatsCard from "@/components/cards/StatCard";

export default function Home() {
  const titleRef = useRef(null);
  const gridContainerRef = useRef(null);

  useEffect(() => {
    // Animation pour le titre de la section Bento
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    // Animation pour le conteneur de la grille
    gsap.fromTo(
      gridContainerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: gridContainerRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />

      <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-white to-purple/5">
        <div className="max-w-7xl w-full mx-auto">
          <div className="text-center mb-16">
            <h2
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold mb-4 text-purple inline-block relative"
            >
              All-in-one Social Media Management
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-yellow rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simplify your social media workflow with our powerful tools
              designed to help you create, schedule, and analyze your content.
            </p>
          </div>

          <div
            ref={gridContainerRef}
            className="flex justify-center items-center overflow-x-auto pb-8"
          >
            <BentoGrid>
              <CreateCard />
              <SocialMediaCard />
              <ScheduleCard />
              <ContentCard />
              <MultiPlatformCard />
              <GrowthCard />
              <FollowersCard />
              <ConsistencyCard />
              <PlatformSwitcherCard />
              <SchedulerCard />
              <StatsCard />
            </BentoGrid>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-6">
              Ready to boost your social media presence?
            </h3>
            <button className="bg-purple text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Your Free Trial
            </button>
            <p className="mt-4 text-sm text-gray-500">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
