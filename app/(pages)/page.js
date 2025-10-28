import { Header } from '../(components)/layout/Header';
import HeroSection from '../(components)/home/sections/HeroSection';
import ScrollingMarquee from '../(components)/home/sections/ScrollingMarquee';
import ExploreProgram from '../(components)/home/sections/ExploreProgram';
import FaqSection from '../(components)/home/sections/Faqs';

export default function HomeSections() {
  return (
    <>
      <HeroSection />
      <ScrollingMarquee />
      <ExploreProgram />
      <FaqSection />
      {/* <Header />/ */}
      {/* <HeroSection /> */}
      {/* <FeaturesSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <CTASection /> */}
    </>
  );
}
