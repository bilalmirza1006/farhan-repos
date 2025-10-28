import React from "react";
import USA from "@/public/about/icons/usa.png";
import Italy from "@/public/about/icons/italy.png";
import Canada from "@/public/about/icons/canada.png";
import Qatar from "@/public/about/icons/qatar.png";
import Australia from "@/public/about/icons/australia.png";
import Image from "next/image";
import MarqueeTag from "../../ui/MarqueeTag";

const CountriesWeCover = () => {
  const countries = [
    { name: "USA", flag: USA },
    { name: "Italy", flag: Italy },
    { name: "Canada", flag: Canada },
    { name: "Qatar", flag: Qatar },
    { name: "Australia", flag: Australia },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-inter text-[#C7044C] text-sm font-semibold uppercase tracking-wide">
            EXPLORE STUDY OPTIONS ACROSS THE GLOBE
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 mt-3">
            <span className="text-[#190459]">COUNTRIES</span>{" "}
            <span className="text-[#C7044C]">WE COVER</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            At Get2Uni, we connect you with top universities in some of the best
            study destinations worldwide. Whether you're looking for world-class
            education, career opportunities, cultural experience — we help you
            find the right country that fits your goals.
          </p>
        </div>

        {/* Countries Grid */}
        <MarqueeTag speed={30}>
          {countries.map((country) => (
            <div
              key={country.name}
              className="flex items-center justify-center w-52 h-24 p-4 rounded-xl bg-white shadow-sm transition-all duration-200 hover:shadow-md flex-shrink-0 gap-3"
            >
              <Image
                src={country.flag}
                alt={country.name}
                width={48}
                height={48}
                className="object-contain"
              />
              <p className="text-sm md:text-lg font-semibold text-gray-900">
                {country.name}
              </p>
            </div>
          ))}
        </MarqueeTag>
      </div>
    </section>
  );
};

export default CountriesWeCover;
