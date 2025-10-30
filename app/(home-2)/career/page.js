// import Hero from '@/app/(components)/about/sections/Hero';
import CareerHero from '@/app/(components)/career/sections/CareerHero';
import CareerSuccess from '@/app/(components)/career/sections/CareerSuccess';
import CTASection from '@/app/(components)/career/sections/CTASection';
import InternshipSection from '@/app/(components)/career/sections/InternshipSection';
import JourneySection from '@/app/(components)/career/sections/JourneySection';
import ProjectsPartnersSection from '@/app/(components)/career/sections/ProjectsPartnersSection';
import SuccessStories from '@/app/(components)/career/sections/SuccessStories';
import TransformJourneySection from '@/app/(components)/career/sections/TransformJourneySection';
import ExploreUni from '@/app/(components)/home-2/sections/ExploreUni';
import Features from '@/app/(components)/home-2/sections/Features';
import Hero from '@/app/(components)/home-2/sections/Hero';
import SuccessSection from '@/app/(components)/home-2/sections/SuccessSection';
import UniDreams from '@/app/(components)/home-2/sections/UniDreams';
import WhatNext from '@/app/(components)/home-2/sections/WhatNext';
// import Semesterr from '@/public/icons/Semester';
// import Semester from '@/public/icons/Semester';
import React from 'react';

function Career() {
  return (
    <div>
      <CareerHero />
      <CareerSuccess />
      <InternshipSection />
      <ProjectsPartnersSection />
      <JourneySection />
      <CTASection />
      <SuccessStories />
      <TransformJourneySection />
      <WhatNext />
    </div>
  );
}

export default Career;
