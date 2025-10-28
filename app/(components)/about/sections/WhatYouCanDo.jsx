import Button from "@/app/(components)/ui/Button";
import Card from "@/app/(components)/ui/Card";
import Filter from "@/app/(components)/icons/Filter";
import Screen from "@/app/(components)/icons/Screen";
import Bookmark from "@/app/(components)/icons/Bookmark";
import Complete from "@/app/(components)/icons/Complete";

import React from "react";

const WhatYouCanDo = () => {
  const features = [
    {
      icon: <Filter />,
      title: "Filter Courses Easily",
      description:
        "Find the right course by filtering by location, entry requirements, field, country, and study level",
    },
    {
      icon: <Complete />,
      title: "View Complete Courses",
      description:
        "See course fees, duration, entry requirements, and more — all in clear detail",
    },
    {
      icon: <Bookmark />,
      title: "Shortlist & Apply",
      description:
        "Save your favorite courses and apply directly through our simple platform",
    },
    {
      icon: <Screen />,
      title: "Expert Consultation",
      description:
        "Need help deciding? Our team offers expert guidance and easy online sessions",
    },
  ];
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-inter text-[#C7044C] text-sm font-semibold uppercase tracking-wide">
            ALL-IN-ONE STUDY ABROAD PLATFORM
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-3">
            <span className="text-[#190459]">WHAT YOU CAN DO WITH</span>{" "}
            <span className="text-[#C7044C]">GET 2 UNI</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Get2Uni helps you explore study options worldwide with tools that
            make choosing the right course, country, and university easy — all
            in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 rounded-2xl transition-all bg-white border border-gray-200 hover:shadow-md text-center flex flex-col items-center hover:bg-[#C7044C] hover:text-white"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            text="Start Exploring Now"
            bg="bg-primarycolor"
            cn="text-white px-8 py-3 rounded-full font-semibold"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDo;
