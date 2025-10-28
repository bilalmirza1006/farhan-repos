'use client';

// export const runtime = 'edge';

// import React from 'react';
import Image from 'next/image';
import React from 'react';
import CreditsIcon from '@/public/home/CreditsIcon';
import GreIcon from '@/public/home/GreIcon';
import PrivateIcon from '@/public/home/PrivateIcon';
import WorldRankIcon from '@/public/home/WorldRankIcon';
import BacklogsIcon from '@/public/home/BacklogsIcon';
import RankStar from '@/public/home/RankStar';
import Button from '@/app/(components)/ui/Button';
import InstantFindPrograms from '@/app/(components)/home/sections/InstantFind/InstantFindPrograms';

const page = ({ params }) => {
  const { id } = params;

  const universities = [
    {
      id: 1,
      name: 'University of New Haven',
      program: 'MS Computer Science',
      image: '/images/university1.png',
      locations: 'Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI',
      tuition: '$88,720',
      applicationFee: '$75',
      scholarships: '3',
      scholarshipAmount: '$1,000',
      deadline: 'Fall 15 Dec',
      daysLeft: '170 days left',
      tests: {
        IELTS: 7,
        PTE: '60%',
        TOEFL: 100,
        Duolingo: 120,
      },
      GPA: '60%',
      Rank: '10',
      Backlogs: '12',
      WorldRank: '9',
      USNewsRank: '12',
      Type: 'Private',
      GRE: 'Waived',
      Credits: '12',

      // 👇 New Section for Course Details
      courseDetails: {
        programRequirements: [
          'Bachelor’s degree in Computer Science or related field',
          'Minimum GPA of 3.0 (or equivalent)',
          'Proof of English proficiency (IELTS/TOEFL/Duolingo)',
          'GRE (waived for 2025 intake)',
        ],
        programComments: [
          'The MS in Computer Science program emphasizes practical learning and research.',
          'Internship opportunities available through the Career Development Center.',
          'Students can choose between thesis and non-thesis options.',
        ],
        importantDates: {
          applicationOpen: '1 August 2024',
          applicationDeadline: '15 December 2024',
          semesterStart: '25 January 2025',
        },
        requiredDocuments: [
          'Official Transcripts',
          'Statement of Purpose (SOP)',
          'Letters of Recommendation (2)',
          'Resume/CV',
          'Passport Copy',
          'English Proficiency Test Scores',
        ],
      },
    },
  ];

  return (
    <section className="max-w-[1560px] mx-auto mt-10">
      {universities.map((university) => (
        <div
          key={university.id}
          className="bg-white rounded-md drop-shadow-md overflow-hidden p-6 mb-10"
        >
          {/* ===== Banner Section ===== */}
          <div className="relative">
            <Image
              src={university.image}
              alt={university.name}
              width={1200}
              height={400}
              className="w-full h-96 object-cover rounded-[16px] border"
            />
            <div className="absolute top-6 left-6">
              <Button text={'View All Programs'} />
            </div>
            <div className="absolute md:top-80 top-60 left-0 w-full flex flex-wrap md:justify-end justify-center px-6 gap-2.5">
              <div className="px-5 py-3 font-inter font-medium text-primaryheading text-lg bg-[#F2F2F266] rounded-md">
                MSE
              </div>
              <div className="px-5 py-3 font-inter font-medium text-primaryheading text-lg bg-[#F2F2F266] rounded-md">
                COMPUTER SCIENCE
              </div>
              <div className="px-5 py-3 font-inter font-medium text-primaryheading text-lg bg-[#F2F2F266] rounded-md">
                {university.deadline}
              </div>
              <div className="px-5 py-3 font-inter font-medium text-[#C7044C] text-lg bg-[#F2F2F266] rounded-md">
                {university.daysLeft}
              </div>
            </div>
          </div>

          {/* ===== University Info ===== */}
          <div className="mt-4.5 rounded-md flex justify-between">
            <div className="space-y-2.5">
              <h2 className="text-2xl font-bold text-primarycolor font-inter uppercase">
                {university.name}
              </h2>
              <p className="text-lg font-inter font-medium text-primaryheading ">
                {university.locations}
              </p>

              {/* <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-gray-100 text-sm px-3 py-1 rounded-md">MSE</span>
                <span className="bg-gray-100 text-sm px-3 py-1 rounded-md">
                  {university.program}
                </span>
                <span className="bg-gray-100 text-sm px-3 py-1 rounded-md">
                  {university.deadline}
                </span>
                <span className="bg-red-100 text-[#C7044C] text-sm px-3 py-1 rounded-md">
                  {university.daysLeft}
                </span>
              </div> */}

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-lg">
                <div className="space-y-2.5">
                  <p className="font-medium text-primaryheading">
                    Tuition Fee: {university.tuition}
                  </p>
                  <p className="text-primaryheading">
                    Application Fee: {university.applicationFee}{' '}
                    <span className="bg-[#190459] text-white text-xs px-2 py-[4px] rounded-sm ml-1">
                      Discount code
                    </span>
                  </p>
                  <p className="mt-1 text-primaryheading">
                    Scholarships:{' '}
                    <span className="text-success font-semibold">
                      {university.scholarships} ({university.scholarshipAmount})
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Test Scores */}
            <div className="bg-[#F2F2F266] rounded-[12px] p-3 text-[#190459] text-sm font-medium min-w-[532px]">
              {/* First Row */}
              <div className="grid grid-cols-4 divide-x divide-gray-200 text-center pb-3 border-b border-gray-200">
                <div>
                  <p className="font-inter font-normal text-sm leading-5">
                    {university.tests.IELTS}
                  </p>
                  <p className="font-inter font-semibold text-sm leading-5 ">IELTS</p>
                </div>
                <div>
                  <p className="font-inter font-normal text-sm leading-5">{university.tests.PTE}</p>
                  <p className="font-inter font-semibold text-sm leading-5 ">PTE</p>
                </div>
                <div>
                  <p className="font-inter font-normal text-sm leading-5">
                    {university.tests.TOEFL}
                  </p>
                  <p className="font-inter font-semibold text-sm leading-5 ">TOEFL</p>
                </div>
                <div>
                  <p className="font-inter font-normal text-sm leading-5">
                    {university.tests.Duolingo}
                  </p>
                  <p className="font-inter font-semibold text-sm leading-5 ">Duolingo</p>
                </div>
              </div>

              {/* Second Row */}
              <div className="space-y-2 mt-4 text-sm text-primaryheading leading-5 ">
                <div className="flex border-b-2 justify-between space-y-2 font-normal">
                  <p>
                    <span className="font-semibold text-[#190459]">GPA:</span> {university.GPA}
                  </p>
                  <p className="flex items-center gap-1">
                    <RankStar />
                    <span className="font-semibold text-[#190459]"> Rank:</span> {university.Rank}
                  </p>
                  <p className="flex items-center gap-1">
                    <BacklogsIcon />
                    <span className="font-semibold text-[#190459]">Backlogs:</span>{' '}
                    {university.Backlogs}
                  </p>
                </div>
                <div className="flex border-b-2 justify-between space-y-2 font-normal">
                  <p className="flex items-center gap-1">
                    <WorldRankIcon />
                    <span className="font-semibold text-[#190459]">World Rank:</span>{' '}
                    {university.WorldRank}
                  </p>
                  <p className="flex items-center gap-1">
                    {/* <UsIcon /> */}
                    <span className="font-semibold text-[#190459]">US News Rank:</span>{' '}
                    {university.USNewsRank}
                  </p>
                </div>
                <div className="flex border-b-2 justify-between space-y-2 font-normal">
                  <p className="flex items-center gap-1">
                    <PrivateIcon />
                    <span className="font-semibold text-[#190459]">Type:</span> {university.Type}
                  </p>
                  <p className="flex items-center gap-1">
                    <GreIcon />
                    <span className="font-semibold text-[#190459]">GRE:</span> {university.GRE}
                  </p>
                  <p className="flex items-center gap-1">
                    <CreditsIcon />
                    <span className="font-semibold text-[#190459]">Credits:</span>{' '}
                    {university.Credits}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div>
        <InstantFindPrograms />
      </div>
    </section>
  );
};

export default page;
