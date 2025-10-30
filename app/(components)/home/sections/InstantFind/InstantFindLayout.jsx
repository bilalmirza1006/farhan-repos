'use client';
import React, { useState } from 'react';
import Hero from './Hero';
import Dropdown from '@/app/(components)/ui/Dropdown';
import FilterBar from '@/app/(components)/ui/Filterbar';
import { Search } from 'lucide-react';
import {
  BrainCircuit,
  Calendar,
  Globe,
  Recycle,
  RefreshCcw,
  SlidersHorizontal,
  BookOpen,
} from 'lucide-react';
import AboutUniversityCard from './AboutUniversityCard';
import Modal from '@/app/(components)/ui/Modal';

const InstantFindLayout = () => {
  const [activeTab, setActiveTab] = useState('Universities');
  const [modal, setModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState('Program');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const openModalHandler = () => {
    setModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModalHandler = () => {
    setModal(false);
    document.body.style.overflow = 'auto';
  };

  const options = [
    { id: 1, label: 'USA' },
    { id: 2, label: 'UK' },
    { id: 3, label: 'Canada' },
  ];

  const batchIntakeOptions = [
    { id: 1, label: 'Summer' },
    { id: 2, label: 'Fall' },
    { id: 3, label: 'Winter' },
  ];

  const programs = [
    { id: 1, label: 'Computer Science' },
    { id: 2, label: 'Business Analytics' },
  ];

  const filterTabs = ['Program', 'Intake batch', 'Country'];

  const filterOptions = {
    Program: programs,
    'Intake batch': batchIntakeOptions,
    Country: options,
  };

  const toggleFilter = (label) => {
    setSelectedFilters((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const universities = [
    {
      name: 'UNIVERSITY OF NEW HAVEN',
      program: 'MS Computer Science',
      locations: ['Kansas City, MO', 'Dallas, TX', 'Miami, FL', 'Jersey City, NJ', 'Kenosha, WI'],
      tuition: '$1890/yr',
      applicationFee: '$76',
      gre: 'Waiver',
      documents: 18,
      deposit: '$200',
      scholarship: '$200',
      startDate: 'Full 01 May / 309 days',
      image: '/images/university1.png',
    },
    {
      name: 'UNIVERSITY OF NEW SOUTH ASIA',
      program: 'MS Computer Science',
      locations: ['Boston, MA', 'Houston, TX', 'Seattle, WA', 'San Diego, CA', 'Chicago, IL'],
      tuition: '$2100/yr',
      applicationFee: '$80',
      gre: 'Required',
      documents: 16,
      deposit: '$250',
      scholarship: '$300',
      startDate: 'Full 15 June / 280 days',
      image: '/images/university2.png',
    },
    {
      name: 'UNIVERSITY OF CENTRAL EUROPE',
      program: 'MS Data Science',
      locations: [
        'New York, NY',
        'Denver, CO',
        'Phoenix, AZ',
        'Las Vegas, NV',
        'San Francisco, CA',
      ],
      tuition: '$1990/yr',
      applicationFee: '$70',
      gre: 'Waiver',
      documents: 20,
      deposit: '$180',
      scholarship: '$250',
      startDate: 'Full 10 April / 325 days',
      image: '/images/university3.png',
    },
    {
      name: 'UNIVERSITY OF SOUTHERN ASIA',
      program: 'MS Artificial Intelligence',
      locations: ['Los Angeles, CA', 'Austin, TX', 'Orlando, FL', 'Newark, NJ', 'Tampa, FL'],
      tuition: '$2200/yr',
      applicationFee: '$90',
      gre: 'Required',
      documents: 22,
      deposit: '$300',
      scholarship: '$400',
      startDate: 'Full 01 May / 309 days',
      image: '/images/university4.png',
    },
    {
      name: 'UNIVERSITY OF EASTERN CANADA',
      program: 'MS Cybersecurity',
      locations: ['Toronto, ON', 'Vancouver, BC', 'Montreal, QC', 'Calgary, AB', 'Ottawa, ON'],
      tuition: '$2500/yr',
      applicationFee: '$85',
      gre: 'Waiver',
      documents: 19,
      deposit: '$220',
      scholarship: '$500',
      startDate: 'Full 20 March / 330 days',
      image: '/images/university5.png',
    },
  ];

  return (
    <>
      <Hero />
      {/* Header */}
      <div className="max-w-[1560px] bg-white drop-shadow-sm max-h-16 py-3 px-6 flex items-center justify-between mx-auto mt-18 ">
        <div className="font-semibold font-inter text-lg md:text-xl text-Primarytext">
          We Found <span className="text-primarycolor ">{universities.length} Courses</span>
        </div>
        <div className="flex gap-5">
          <div className="hidden md:block flex bg-[#F0F0F0B2] rounded-[5.4px] p-1">
            {['Universities', 'Scholarship'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-inter font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-white shadow text-black font-semibold'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="hidden md:block flex items-center justify-center bg-[#DAD9D9] rounded-[6px] p-3 text-white">
            <Recycle />
          </div>
          <div className="hidden md:block flex items-center justify-center bg-[#DAD9D9] rounded-[6px] p-3 text-white">
            <RefreshCcw />
          </div>
          <div className="hidden md:block">
            <Dropdown
              defaultTextColor="!text-white"
              defaultValue={'Master'}
              iconColor={'white'}
              className="!py-2 bg-primarycolor !text-white "
            />
          </div>
          <div className="md:hidden block">
            <button
              onClick={openModalHandler}
              className="flex items-center gap-2 bg-primarycolor text-white px-4 py-2 rounded-sm"
            >
              <SlidersHorizontal className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Filters */}
      <div className="hidden md:block">
        <FilterBar options={batchIntakeOptions} placeholder="Search Intake Batch" icon={Calendar} />
      </div>
      <div className="hidden md:block">
        <FilterBar options={options} placeholder="Search Country" icon={Globe} />
      </div>
      <div className="hidden md:block">
        <FilterBar options={programs} placeholder="Search Programs" icon={BrainCircuit} />
      </div>

      {/* Grid */}
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-8 max-w-[1560px] mx-auto mb-20">
        {universities.map((university, index) => (
          <AboutUniversityCard key={index} {...university} />
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <Modal
          title="Filter"
          width="w-full "
          onClose={closeModalHandler}
          className="fixed block md:hidden bottom-0 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 py-6 px-5 rounded-t-[20px] md:rounded-[20px] shadow-lg bg-white transition-all duration-300"
        >
          <div className="space-y-5">
            <p className="text-gray-500 text-sm flex">Apply filters to narrow your results</p>

            {/* Dropdowns */}
            <div className="grid grid-cols-2 gap-2">
              <Dropdown
                title="Program Level"
                defaultValue="Master"
                width="w-full"
                className="!py-2"
              />
              <Dropdown title="Type" defaultValue="Scholarship" width="w-full" className="!py-2" />
            </div>

            {/* Tabs */}
            <div className="flex justify-between bg-[#F5F5F5] rounded-lg p-1">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilterTab(tab)}
                  className={`w-1/3 text-sm py-2 rounded-md transition font-medium ${
                    activeFilterTab === tab
                      ? 'bg-[#C7044C] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${activeFilterTab.toLowerCase()}`}
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-pink-600 outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filterOptions[activeFilterTab]
                .filter((opt) => opt.label.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleFilter(option.label)}
                    className={`flex items-center gap-2 border rounded-md px-4 py-2 text-sm transition ${
                      selectedFilters.includes(option.label)
                        ? 'bg-[#C7044C] text-white border-[#C7044C]'
                        : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                    }`}
                  >
                    {activeFilterTab === 'Intake batch' ? (
                      <Calendar className="w-4 h-4" />
                    ) : activeFilterTab === 'Country' ? (
                      <Globe className="w-4 h-4" />
                    ) : (
                      <BookOpen className="w-4 h-4" />
                    )}
                    <span>{option.label}</span>
                  </button>
                ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setSelectedFilters([])}
                className="font-semibold text-white text-[14px] bg-gray-700 px-5 py-2 rounded"
              >
                Reset
              </button>
              <button
                onClick={closeModalHandler}
                className="bg-[#C7044C] text-white font-semibold text-[14px] px-5 py-2 rounded"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default InstantFindLayout;
