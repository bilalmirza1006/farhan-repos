import Image from 'next/image';
import HeroSection from './(components)/home/sections/HeroSection';
import ScrollingMarquee from './(components)/home/sections/ScrollingMarquee';
import ExploreProgram from './(components)/home/sections/ExploreProgram';
import FaqSection from './(components)/home/sections/Faqs';
import HomeSections from './(pages)/page';

export default function Home() {
  const programs = [
    { title: 'Computer Science', duration: '1–4 Years', price: 560 },
    { title: 'Business Analytics', duration: '1–4 Years', price: 560 },
    { title: 'Cyber Security', duration: '1–4 Years', price: 560 },
    { title: 'MBA', duration: '1–4 Years', price: 560 },
  ];

  const universities = [
    { title: 'Harvard University', duration: '—', price: 1000 },
    { title: 'Stanford University', duration: '—', price: 950 },
    { title: 'Oxford University', duration: '—', price: 880 },
  ];

  const countries = [
    { title: 'USA', duration: '—', price: 0 },
    { title: 'UK', duration: '—', price: 0 },
    { title: 'Germany', duration: '—', price: 0 },
  ];
  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

    <>
      {/* <HeroSection />
      <ScrollingMarquee />
      <ExploreProgram />
      <FaqSection /> */}
      <HomeSections />
    </>
  );
}
