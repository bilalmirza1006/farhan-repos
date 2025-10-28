// 'use client';
// export const runtime = 'edge';

import ChooseUs from '@/app/(components)/about/sections/ChooseUs';
import CountriesWeCover from '@/app/(components)/about/sections/CountriesWeCover';
import CTABanner from '@/app/(components)/about/sections/CTABanner';
import Hero from '@/app/(components)/about/sections/Hero';
import OurStory from '@/app/(components)/about/sections/OurStory';
import WhatYouCanDo from '@/app/(components)/about/sections/WhatYouCanDo';
import FaqSection from '@/app/(components)/home/sections/Faqs';
import ScrollingMarquee from '@/app/(components)/home/sections/ScrollingMarquee';
import React from 'react';

const page = () => {
  return (
    <>
      <Hero />
      <ScrollingMarquee />
      <OurStory />
      <WhatYouCanDo />
      <CountriesWeCover />
      <ChooseUs />
      <FaqSection />
    </>
  );
};

export default page;
