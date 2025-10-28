import React from "react";
import Button from "@/app/(components)/ui/Button";
import Image from "next/image";
import studentImage from "@/public/about/why-us.png";

const ChooseUs = () => {
  const features = [
    {
      icon: "💻",
      title: "100% Online & Free",
      description:
        "Explore universities, courses, and countries anytime — completely free and accessible from anywhere.",
    },
    {
      icon: "🧭",
      title: "No Pushy Sales",
      description:
        "You're in full control. No pressure, no hidden agendas — just honest guidance and useful tools.",
    },
    {
      icon: "🔄",
      title: "Always Updated",
      description:
        "We keep our university and course data regularly updated so you always get the latest and most accurate information.",
    },
    {
      icon: "🎓",
      title: "Student-First Approach",
      description:
        "Built with students in mind. Inspired by platforms like Insta, but designed to be more open, helpful, and easy to use.",
    },
  ];
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-inter text-[#C7044C] text-sm font-semibold uppercase tracking-wide">
            WHY STUDENTS TRUST GET2UNI
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 mt-3">
            <span className="text-[#190459]">WHY</span>{" "}
            <span className="text-[#C7044C]">CHOOSE US</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Choosing the right study abroad platform matters. At Get2Uni, we
            focus on making your journey smooth, transparent, and truly
            student-focused — giving you the tools, freedom, and support to make
            the best decision for your future.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Image */}
          <div className="flex justify-center lg:flex-[1.5]">
            <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={studentImage}
                alt="Why Choose Us"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className="lg:flex-[2] space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg transition-all cursor-pointer duration-300 bg-gray-50 hover:bg-[#C7044C] hover:text-white group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold flex-shrink-0 text-primary group-hover:text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 group-hover:text-pink-100">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-4 justify-center lg:justify-center">
          <Button
            text="Explore Courses"
            bg="bg-transparent"
            color="text-primary"
            cn="border border-primary hover:bg-primaryhover hover:text-white cursor-pointer"
          />
          <Button
            text="Book Free Consultation"
            bg="bg-primarycolor"
            color="text-white"
            cn="cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
