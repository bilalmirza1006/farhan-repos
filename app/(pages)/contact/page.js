// 'use client';
// export const runtime = 'edge';

import React from 'react';
import Hero from '@/app/(components)/contact/sections/Hero';
import ScrollingMarquee from '@/app/(components)/home/sections/ScrollingMarquee';
import ContactUsForm from '@/app/(components)/contact/sections/ContactUsForm';
import CountriesWeCover from '@/app/(components)/about/sections/CountriesWeCover';
import FaqSection from '@/app/(components)/home/sections/Faqs';

const page = () => {
  return (
    <div>
      <Hero />
      <ScrollingMarquee />
      <ContactUsForm />
      <CountriesWeCover />
      <FaqSection />
    </div>
  );
};

export default page;
