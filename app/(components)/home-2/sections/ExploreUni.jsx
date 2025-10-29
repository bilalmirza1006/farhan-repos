"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Img1 from "@/public/home-2/mb-img-1.png";
import Img2 from "@/public/home-2/mb-img-2.gif";
import Img3 from "@/public/home-2/mb-img-3.gif";
import Img4 from "@/public/home-2/mb-img-4.png";

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
      description: "Find the right university for you, connect with experts, and submit your application — all in one place.",
      image: Img1,
    },
    {
      title: "Chat with Experts",
      description: "Get personalized guidance from education experts who understand your goals and help you make the right choices.",
      image: Img2,
    },
    {
      title: "Track Your Progress",
      description: "Monitor your application status in real-time and stay updated with every step of your admission journey.",
      image: Img3,
    },
    {
      title: "Secure Admission",
      description: "Complete your enrollment process smoothly with our streamlined system and start your academic journey.",
      image: Img4,
    },
  ];

  useEffect(() => {
    const sections = sectionRefs.current;
    const images = imageRefs.current;

    if (!sections.length || !images.length) return;

    // Initially hide all images except the first one
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
          // markers: true, // Uncomment for debugging
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-[100px] px-4 max-w-[1440px] mx-auto flex flex-col gap-10">
      {/* Header */}
      <div className="max-w-[800px] text-center mx-auto flex flex-col gap-3">
        <h5 className="text-[var(--bg-primary-color)] text-sm font-semibold tracking-wide">Explore, Connect & Enroll</h5>
        <h3 className="text-5xl font-bold text-Primarytext">Explore Universities, Chat with Experts, Secure Your Admission</h3>
      </div>

      {/* Content with Sticky Image */}
      <div className="relative flex gap-12 items-start">
        {/* Left side - Scrolling content */}
        <div className="flex-1 flex flex-col gap-[400px]">
          {contentData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`max-w-[500px] flex flex-col gap-4 min-h-[300px] ${index === 0 ? "mt-[150px]" : ""}`}
            >
              <h4 className="text-4xl font-bold text-Primarytext">{item.title}</h4>
              <p className="text-Lighttext text-base">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right side - Sticky image container */}
        <div className="flex-1 sticky top-32 h-[600px] flex items-center justify-center">
          <div className="relative w-full max-w-[400px] h-[600px]">
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
