'use client';

import React, { useEffect, useRef } from 'react';
import Button from '@/app/(components)/ui/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Create the scroll animation
    const ctx = gsap.context(() => {
      gsap.to(hero, {
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          // markers: true, // Uncomment for debugging
        },
        scale: 0.9,
        borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        ease: 'none',
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-start overflow-hidden origin-top"
        style={{ transformOrigin: 'top center' }}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/home-2/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-20">
          <div className="text-white max-w-2xl flex flex-col gap-6 items-start">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              No More Stress, <br /> just progress
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-100">
              Alex is a Real Get2Uni Member
            </p>
            <Button 
              text="Get Started" 
              bg="bg-white" 
              color="text-black" 
              cn="hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Additional sections can go here */}
    </div>
  );
};

export default Hero;