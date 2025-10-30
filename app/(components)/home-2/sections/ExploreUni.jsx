"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Img1 from "@/public/home-2/mb-img-1.png";
import Img2 from "@/public/home-2/mb-img-2.gif";
import Img3 from "@/public/home-2/mb-img-3.gif";
import Img4 from "@/public/home-2/mb-img-4.png";
import BG from "@/public/home-2/bg.png";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ExploreUni = () => {
  const sectionRefs = useRef([]);
  const imageRefs = useRef([]);
  const containerRef = useRef(null);

  const contentData = [
    {
      title: "Explore & Apply",
      description:
        "Discover universities that truly match your goals, interests, and strengths. Browse detailed program information, compare opportunities, connect directly with institutions, and submit your application seamlessly — all in one centralized platform built to make the process stress-free.",
      image: Img1,
    },
    {
      title: "Chat with Experts",
      description:
        "Get personalized, one-on-one support from experienced education advisors who understand your ambitions. They’ll help you shortlist universities, refine your application, and guide you through each stage — ensuring every decision you make is confident and well-informed.",
      image: Img2,
    },
    {
      title: "Track Your Progress",
      description:
        "Stay in control of your journey with real-time updates and progress tracking. Instantly see where your application stands, what documents are pending, and what steps come next — giving you full visibility and peace of mind throughout your admission process.",
      image: Img3,
    },
    {
      title: "Secure Admission",
      description:
        "Finalize your enrollment effortlessly with our guided system. From document verification to offer acceptance, every step is streamlined to help you transition smoothly into your new academic life and begin your university journey with confidence.",
      image: Img4,
    },
  ];

  useEffect(() => {
    const sections = sectionRefs.current;
    const images = imageRefs.current;

    if (!sections.length || !images.length) return;

    images.forEach((img, index) => {
      if (index === 0) {
        gsap.set(img, { opacity: 1, y: 0 });
      } else {
        gsap.set(img, { opacity: 0, y: 100 });
      }
    });

    const ctx = gsap.context(() => {
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            // Animate current image in
            gsap.to(images[index], {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            });

            // Hide previous images
            images.forEach((img, i) => {
              if (i < index) {
                gsap.to(img, {
                  opacity: 0,
                  y: -50,
                  duration: 0.6,
                  ease: "power2.out",
                });
              }
            });

            // Keep next images below
            images.forEach((img, i) => {
              if (i > index) {
                gsap.to(img, {
                  opacity: 0,
                  y: 100,
                  duration: 0.6,
                  ease: "power2.out",
                });
              }
            });
          },
          onEnterBack: () => {
            // When scrolling back up
            gsap.to(images[index], {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            });

            // Hide images after current one
            images.forEach((img, i) => {
              if (i > index) {
                gsap.to(img, {
                  opacity: 0,
                  y: 100,
                  duration: 0.6,
                  ease: "power2.out",
                });
              }
              if (i < index) {
                gsap.to(img, {
                  opacity: 0,
                  y: -50,
                  duration: 0.6,
                  ease: "power2.out",
                });
              }
            });
          },
          // markers: true,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="exploreuni" ref={containerRef} className="py-[100px] px-4 max-w-[1440px] mx-auto flex flex-col gap-10">
      <div className="max-w-[800px] text-center mx-auto flex flex-col items-center gap-3">
        <h5 className="text-[var(--bg-primary-color)] text-sm font-semibold tracking-wide marker">Explore, Connect & Enroll</h5>
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--heading)]">
          Explore Universities, Chat with Experts, Secure Your Admission
        </h3>
      </div>

      <div className="relative flex gap-12 items-start">
        <div className="flex-1 flex flex-col gap-[400px]">
          {contentData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`max-w-[500px] flex flex-col gap-4 min-h-[300px] ${index === 0 ? "mt-[150px]" : ""}`}
            >
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--heading)]">{item.title}</h4>
              <p className="text-Lighttext text-base">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="relative flex-1 sticky top-32 h-[600px] flex items-center justify-center">
          <img src={BG.src} className="absolute inset-0 w-full h-full object-contain" alt="" />
          <div className="relative w-full max-w-[400px] h-[400px] md:h-[600px]">
            {contentData.map((item, index) => (
              <img
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                src={item.image.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreUni;
