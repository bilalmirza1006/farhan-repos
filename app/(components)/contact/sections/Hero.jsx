import React from "react";
import Image from "next/image";
import heroImage from "@/public/about/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative w-full h-96 md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Students studying abroad"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Let’s Connect!
        </h1>
        <p className="text-white/90 max-w-2xl">
          Have questions or need support? We're just a message away. Whether
          it's about courses, universities, or your study plans — we're here to
          help you every step of the way.
        </p>
      </div>
    </section>
  );
};

export default Hero;
