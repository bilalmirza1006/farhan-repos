import ourStoryImage from "@/public/about/our-story.png";
import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <section className="w-full bg-[#6532FF0F] py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
          {/* Left side - Illustration and decorative bars */}
          <div className="flex flex-col items-center md:items-start justify-center lg:flex-[1.5]">
            {/* Light bulb illustration */}
            <div className="mb-8 md:mb-12">
              <Image
                src={ourStoryImage}
                alt="Our Story"
                className="w-[80%] h-auto scale-200"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="flex flex-col justify-center lg:flex-[2]">
            {/* Label */}
            <p className="text-sm md:text-base font-bold tracking-widest text-red-600 mb-2 md:mb-4">
              OUR STORY
            </p>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              <span className="text-[#190459]">MADE FOR STUDENTS</span>{" "}
              <span className="text-red-600">LIKE YOU</span>
            </h2>

            {/* Body text */}
            <div className="space-y-4 md:space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Get2Uni started with one simple goal — to help students find the
                best way to study in other countries. We saw that it was hard to
                find clear and correct information about universities, courses,
                and where to apply.
              </p>

              <p>
                That's why we made Get2Uni — a place where students can easily
                search for courses, compare universities, and choose the right
                country for their future.
              </p>

              <p>
                Today, we're proud to help students all over the world take the
                first step toward their study abroad journey — with confidence
                and ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
