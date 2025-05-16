"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function HeroSection() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animation de la hero section
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.3"
      )
      .fromTo(
        descriptionRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.5"
      )
      .fromTo(
        imageRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.7"
      );
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full bg-gradient-to-r from-purple/10 to-lightPurple/30 py-16 px-4 sm:px-6 lg:px-8 mb-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Manage Social Media <span className="text-purple">10x Faster</span>{" "}
            with AI
          </h1>

          <p ref={descriptionRef} className="text-lg text-gray-600 mb-8">
            Create, schedule, and optimize your social media content with our
            all-in-one platform. Save time and grow your audience with
            AI-powered tools.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-all">
              Get Started Free
            </button>
            <button className="border border-purple text-purple px-6 py-3 rounded-md text-lg font-medium hover:bg-purple/5 transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        <div ref={imageRef} className="md:w-1/2 relative">
          <div className="relative w-full h-[400px]">
            {/* <Image
              src="/images/hero-dashboard.webp"
              alt="Social Media Dashboard"
              fill
              className="object-contain"
              priority
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
