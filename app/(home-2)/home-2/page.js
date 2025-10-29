"use client";

import Features from "@/app/(components)/home-2/sections/Features";
import Hero from "@/app/(components)/home-2/sections/Hero";
import SuccessSection from "@/app/(components)/home-2/sections/SuccessSection";
import UniDreams from "@/app/(components)/home-2/sections/UniDreams";
import React from "react";

const Page = () => {
  return (
    <>
      <Hero />
      <Features />
      <SuccessSection />
      <UniDreams />
    </>
  );
};

export default Page;
