"use client";
import React from "react";

const MarqueeTag = ({ children, speed = 25 }) => {
  return (
    <div className="relative overflow-hidden w-full py-4">
      <div
        className="flex animate-marquee gap-6"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          width: max-content;
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MarqueeTag;
