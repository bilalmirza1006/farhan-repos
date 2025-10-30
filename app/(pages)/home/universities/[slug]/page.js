'use client';

export const runtime = 'edge';

import ProgramPage from '@/app/(components)/home/sections/ProgramDetailPage';
import ApplyModal from '@/app/(components)/ui/ApplyModal';
import Button from '@/app/(components)/ui/Button';
import BacklogsIcon from '@/public/home/BacklogsIcon';
import CreditsIcon from '@/public/home/CreditsIcon';
import GreIcon from '@/public/home/GreIcon';
import PrivateIcon from '@/public/home/PrivateIcon';
import RankStar from '@/public/home/RankStar';
import UsIcon from '@/public/home/UsIcon';
import WorldRankIcon from '@/public/home/WorldRankIcon';
import Image from 'next/image';
import { useState } from 'react';

export default function UniversityDetailPage({ params }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { slug } = params;

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
      daysLeft: '170 day’s left',
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

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleFormSubmit = (formData) => {
    console.log('User Info:', formData);
    localStorage.setItem('enrollmentCompleted', 'true'); // Save flag
    setIsModalOpen(false);
  };

  return (
    <section className="max-w-[1560px] mx-auto mt-10">
      {universities.map((university) => (
        <div
          key={university.id}
          className="bg-white rounded-md drop-shadow-md overflow-hidden p-6 mx-5 mb-10"
        >
          {/* ===== Banner Section ===== */}
          <div className="relative">
            <Image
              src={'/home/new.jpg'}
              alt={university.name}
              width={1200}
              height={400}
              className="w-full h-96 object-cover rounded-[16px] border"
            />
            <div className="absolute top-6 left-6">
              <Button text={'View All Programs'} />
            </div>
            <div className="absolute md:top-80 top-70 left-0 w-full flex flex-wrap md:justify-end justify-center px-6 gap-2.5">
              <div className="px-5 py-3 font-inter font-medium text-primaryheading text-xs md:text-base lg:text:lg  bg-white rounded-md">
                MSE
              </div>
              <div className="px-5 py-3 font-inter font-medium text-primaryheading text-xs md:text-base lg:text:lg bg-white rounded-md">
                COMPUTER SCIENCE
              </div>
              <div className="flex items-center gap-1 md:gap-2 px-5 py-3 font-inter font-medium text-primaryheading text-xs md:text-base lg:text:lg bg-white rounded-md">
                {university.deadline}{' '}
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6198 0.0475898C15.5452 0.0164299 15.4651 0.000259331 15.3843 0H11.0085C10.8453 0 10.6888 0.0648349 10.5734 0.180242C10.4579 0.295649 10.3931 0.452174 10.3931 0.615385C10.3931 0.778595 10.4579 0.93512 10.5734 1.05053C10.6888 1.16593 10.8453 1.23077 11.0085 1.23077H13.8983L8.38532 6.74462C8.32486 6.80095 8.27636 6.86889 8.24273 6.94438C8.20909 7.01987 8.19101 7.10135 8.18955 7.18398C8.18809 7.26661 8.20329 7.34868 8.23424 7.42531C8.26519 7.50194 8.31126 7.57154 8.3697 7.62998C8.42813 7.68842 8.49774 7.73448 8.57436 7.76543C8.65099 7.79638 8.73307 7.81158 8.81569 7.81013C8.89832 7.80867 8.97981 7.79058 9.0553 7.75695C9.13078 7.72331 9.19872 7.67482 9.25506 7.61436L14.7689 2.10133V4.99118C14.7689 5.15439 14.8337 5.31091 14.9491 5.42632C15.0646 5.54173 15.2211 5.60656 15.3843 5.60656C15.5475 5.60656 15.704 5.54173 15.8194 5.42632C15.9348 5.31091 15.9997 5.15439 15.9997 4.99118V0.615385C15.9992 0.493873 15.9629 0.375197 15.8953 0.274205C15.8278 0.173212 15.7319 0.0943867 15.6198 0.0475898Z"
                      fill="#190459"
                    />
                    <path
                      d="M15.3846 8.12308C15.2214 8.12308 15.0649 8.18791 14.9495 8.30332C14.8341 8.41873 14.7692 8.57525 14.7692 8.73846V14.5641C14.7692 14.6185 14.7476 14.6707 14.7092 14.7092C14.6707 14.7476 14.6185 14.7692 14.5641 14.7692H1.4359C1.38149 14.7692 1.32932 14.7476 1.29085 14.7092C1.25238 14.6707 1.23077 14.6185 1.23077 14.5641V1.4359C1.23077 1.38149 1.25238 1.32932 1.29085 1.29085C1.32932 1.25238 1.38149 1.23077 1.4359 1.23077H7.26154C7.42475 1.23077 7.58127 1.16593 7.69668 1.05053C7.81209 0.93512 7.87692 0.778595 7.87692 0.615385C7.87692 0.452174 7.81209 0.295649 7.69668 0.180242C7.58127 0.0648349 7.42475 0 7.26154 0H1.4359C1.05521 0.000434331 0.690233 0.151855 0.421044 0.421044C0.151855 0.690233 0.000434331 1.05521 0 1.4359V14.5641C0.000434331 14.9448 0.151855 15.3098 0.421044 15.579C0.690233 15.8481 1.05521 15.9996 1.4359 16H14.5641C14.9448 15.9996 15.3098 15.8481 15.579 15.579C15.8481 15.3098 15.9996 14.9448 16 14.5641V8.73846C16 8.57525 15.9352 8.41873 15.8198 8.30332C15.7044 8.18791 15.5478 8.12308 15.3846 8.12308Z"
                      fill="#190459"
                    />
                  </svg>
                </span>
              </div>
              <div className="px-5 py-3 font-inter font-medium text-primarycolor  text-xs md:text-base lg:text:lg bg-white rounded-md">
                {university.daysLeft}
              </div>
            </div>
          </div>

          {/* ===== University Info ===== */}
          <div className="mt-4.5 rounded-md gap-5 md:gap-0 flex flex-col lg:flex-row md:justify-between">
            <div className="w-full space-y-2.5">
              <h2 className="text-2xl font-bold text-Primarytext  font-inter uppercase">
                {university.name}
              </h2>
              <p className="text-lg font-inter font-medium text-primaryheading ">
                {university.locations}
              </p>

              <div className="  gap-4 text-lg">
                <div className="space-y-2.5 w-full ">
                  <p className="font-medium text-primaryheading">
                    Tuition Fee: {university.tuition}
                  </p>
                  <p className="text-primaryheading w-full  flex-row flex items-center justify-between lg:justify-start ">
                    Application Fee: {university.applicationFee}
                    <span className="bg-[#190459] lg:ml-10 text-white text-xs px-2 py-[4px] rounded-sm ml-1">
                      Discount code
                    </span>
                  </p>
                  <p className="mt-1 flex items-center text-primaryheading">
                    Scholarships:
                    <span className="flex items-center flex-row">
                      {university.scholarships}
                      <div className="px-2 py-1 rounded-lg bg-[#34C759] ml-10">
                        {university.scholarshipAmount}
                      </div>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Test Scores */}
            <div className="bg-[#F2F2F266] rounded-[12px] p-3 text-[#190459] text-sm font-medium w-full  lg:min-w-[532px]">
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
                <div className="grid grid-cols-2 lg:grid-cols-3 border-b-2  space-y-2 font-normal">
                  <p className="flex items-center gap-1 ">
                    <PrivateIcon />
                    <span className="font-semibold text-[#190459]">Type:</span> {university.Type}
                  </p>
                  <p className="flex items-center justify-end lg:justify-center gap-1 ">
                    <GreIcon />
                    <span className="font-semibold text-[#190459]">GRE:</span> {university.GRE}
                  </p>
                  <p className="flex items-center lg:justify-end gap-1 ">
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
      <div className="bg-white drop-shadow-sm rounded-[10px] p-6 mx-5 mb-5">
        <ProgramPage isOpen={handleModalOpen} />
      </div>
      {isModalOpen && (
        <ApplyModal
          isOpen={handleModalOpen}
          onClose={handleModalClose}
          onSubmit={handleFormSubmit}
        />
      )}
    </section>
  );
}
