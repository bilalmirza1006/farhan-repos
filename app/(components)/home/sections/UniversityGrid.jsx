import React from 'react'
import Dropdown from '../../ui/Dropdown'
import FilterBar from '../../ui/Filterbar';
import { BrainCircuit } from 'lucide-react';
import UniversityCard from './UnversityCard';

const UniversityGrid = () => {

    const UniversityOptions = [
        { id: 1, label: "UNIVERSITY OF NEW HAVEN", },
        { id: 2, label: "UNIVERSITY OF NEW SOUTH ASIA", },
        { id: 3, label: "UNIVERSITY OF AMERICA", },

    ];

    const CountryOptions = [
        { id: 1, label: "United States", },
        { id: 2, label: "United Kingdom", },
        { id: 3, label: "Germany", },
        { id: 4, label: "France", },
    ];

    const universities = [
        {
            name: "UNIVERSITY OF NEW HAVEN",
            program: "MS Computer Science",
            locations: "Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI",
            tuition: "$1890/yr",
            applicationFee: "$76",
            deposit: "$200",
            startDate: "Full 01 May / 309 days",
            image: "/images/university1.png",
        },
        {
            name: "UNIVERSITY OF NEW SOUTH ASIA",
            program: "MS Computer Science",
            locations: "Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI",
            tuition: "$1890/yr",
            applicationFee: "$76",
            deposit: "$200",
            startDate: "Full 01 May / 309 days",
            image: "/images/university1.png",
        },
        {
            name: "UNIVERSITY OF NEW HAVEN",
            program: "MS Computer Science",
            locations: "Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI",
            tuition: "$1890/yr",
            applicationFee: "$76",
            deposit: "$200",
            startDate: "Full 01 May / 309 days",
            image: "/images/university1.png",
        },
        {
            name: "UNIVERSITY OF SOUTHERN ASIA",
            program: "MS Computer Science",
            locations: "Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI",
            tuition: "$1890/yr",
            applicationFee: "$76",
            deposit: "$200",
            startDate: "Full 01 May / 309 days",
            image: "/images/university1.png",
        },
        {
            name: "UNIVERSITY OF NEW HAVEN",
            program: "MS Computer Science",
            locations: "Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI",
            tuition: "$1890/yr",
            applicationFee: "$76",
            deposit: "$200",
            startDate: "Full 01 May / 309 days",
            image: "/images/university1.png",
        },
    ];



    return (
        <>

            <div className="w-full bg-white drop-shadow-sm max-h-16 py-3 px-6 flex items-center justify-between ">
                <div className="font-semibold font-inter text-xl text-Primarytext">Computer Science <span className="text-[#C7044C]"> :120 Universities</span></div>
                <div>
                    <Dropdown defaultTextColor="!text-white" defaultValue={'Master'} iconColor={'white'} className="!py-2 bg-primarycolor !text-white" />
                </div>
            </div>
            <div>
                <FilterBar
                    options={UniversityOptions}
                    placeholder="Search University"
                    // onFilterChange={handleFilterChange}
                    icon={BrainCircuit}
                />
            </div>
            <div>
                <FilterBar
                    options={CountryOptions}
                    placeholder="Search Country"
                    // onFilterChange={handleFilterChange}
                    icon={BrainCircuit}
                />
            </div>


            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-8">
                {universities.map((university, index) => (
                    <UniversityCard key={index} {...university} />
                ))}
            </div>
        </>
    )
}

export default UniversityGrid