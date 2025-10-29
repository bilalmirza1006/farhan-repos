import React from 'react'
import Button from '@/app/(components)/ui/Button';


const Hero = () => {
  return (
    <div className="min-h-screen">
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/home-2/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-20">
        <div className="text-white max-w-2xl flex flex-col gap-6 items-start">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            No More Stress, <br /> just progress
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-100">
            Alex is a Real Get2Uni Member
          </p>
          <Button 
            text="Get Started" 
            bg="bg-white" 
            color="text-black" 
            cn="hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
          />
        </div>
      </div>
    </section>

    {/* Additional sections can go here */}
  </div>
  )
}

export default Hero