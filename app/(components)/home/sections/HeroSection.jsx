// 'use client'

// import React from 'react'
// import Dropdown from '../ui/Dropdown'

// const HeroSection = () => {
//     return (
//         <div className='bg-red-500'>
//             <div className='flex flex-col items-center'>
//                 <div>
//                     <p className='font-semibold text-4xl'>
//                         Find the Best University
//                         <span className='text-green-500 pl-2'>
//                             For You — Instantly
//                         </span>
//                     </p>
//                 </div>
//                 <div className='mt-2.5'>
//                     <p>
//                         Find useful information, apply, get visa and even a job all in one place
//                     </p>
//                 </div>
//             </div>
//             <div>
//                 <div className='bg-blue-800'>
//                     hallo
//                 </div>
//                 <div>
//                     <Dropdown
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection

"use client";
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import Dropdown from "../../ui/Dropdown";
import Button from "../../ui/Button";
import SearchBar from "../../ui/SearchInput";
import BlurText from "../../animation/blurtext/BlurText";
import AnimatedContent from "../../animation/animatedcontent/AnimatedContent";
// import { FaSearch } from "react-icons/fa";

export default function HeroSection() {
    const [search, setSearch] = useState("");

    const handleSearch = (query) => {
        console.log("Search query:", query);
        // TODO: fetch results from API here
    };
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <section
            className="flex justify-center items-center bg-white h-[520px] overflow-hidden "
        >
            {/* Background Image */}
            <div
                className="bg-[url('/images/hero-bg.png')] bg-no-repeat bg-center bg-contain opacity-10 pointer-events-none"
                aria-hidden="true"
            ></div>

            <div className="relative max-w-7xl  mx-auto text-center">
                {/* Heading */}
                <h1 className="text-3xl md:text-[44px] font-semibold text-primaryheading">
                    <BlurText
                        text="Find the Best University"
                        className="inline-block mr-3"
                        animateBy="words"
                        direction="top"
                        delay={150}
                    />
                    <BlurText
                        text="For You — Instantly"
                        className="inline-block text-[#C8102E]"
                        animateBy="words"
                        direction="top"
                        delay={150}
                    />
                </h1>

                {/* Search Bar */}
                <AnimatedContent
                    // distance={150}
                    // direction="horizontal"
                    // reverse={false}
                    // duration={1.2}
                    // ease="bounce.out"
                    // initialOpacity={0.2}
                    // animateOpacity
                    // scale={1.1}
                    // threshold={0.2}
                    // delay={0.3}
                    distance={80}        // how far it travels before settling
                    direction="vertical" // ensures it moves up/down
                    reverse={false}       // true = from bottom → top
                    duration={1}         // animation speed
                    ease="power3.out"    // smooth easing
                    threshold={0.2}      // when to trigger
                    delay={0}
                >
                    <div className="mt-10 w-full ">
                        <SearchBar onSearch={handleSearch} />
                    </div>

                    {/* Filters Grid */}

                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-center">
                        {/* <select className="border border-gray-200 py-2 px-3 rounded-md focus:ring-2 focus:ring-[#C8102E]">
                        <option>Rank</option>
                    </select> */}
                        <div className="w-full ">

                            <Dropdown width={'w-full'} defaultValue="Rank" />
                        </div>
                        <div className="w-full ">

                            <Dropdown width={'w-full'} defaultValue="Acceptance" />
                        </div>
                        <div className="w-full ">

                            <Dropdown width={'w-full'} defaultValue="Deadline" />
                        </div>
                        <div className="w-full ">

                            <Dropdown width={'w-full'} defaultValue="App fee" />
                        </div>
                        <div className="w-full ">

                            <Dropdown width={'w-full'} defaultValue="Tuition fee" />
                        </div>
                        <div className="w-full ">
                            <Button text="Clear Filter" icon={<SlidersHorizontal className="text-white" />} color="text-white" bg="bg-[#ACACAC]" cn="!w-full !py-3.5" />
                        </div>
                    </div>
                </AnimatedContent>

            </div>
        </section>
    );
}

