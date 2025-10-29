'use client';
import Dropdown from '@/app/(components)/ui/Dropdown';
import FilterBar from '@/app/(components)/ui/Filterbar';
import Modal from '@/app/(components)/ui/Modal';
import { Calendar, Globe, Search, SlidersHorizontal, BookOpen } from 'lucide-react';
import { useState } from 'react';
import CountryCard from './CountryCard';
import UniversitiesLayout from './UniversitiesLayout';
import Button from '@/app/(components)/ui/Button';

const countries = [
  {
    name: 'CANADA',
    flag: 'https://flagcdn.com/w40/ca.png',
    universities: '1,280+',
    knownFor: 'UofT, UBC, McGill',
    topCities: 'Toronto, Vancouver',
  },
  {
    name: 'USA',
    flag: 'https://flagcdn.com/w40/us.png',
    universities: '1,280+',
    knownFor: 'MIT, Stanford, Harvard',
    topCities: 'New York, Boston',
  },
  {
    name: 'AUSTRALIA',
    flag: 'https://flagcdn.com/w40/au.png',
    universities: '1,280+',
    knownFor: 'ANU, Melbourne, Sydney',
    topCities: 'Sydney, Melbourne',
  },
  {
    name: 'QATAR',
    flag: 'https://flagcdn.com/w40/qa.png',
    universities: '1,280+',
    knownFor: 'Qatar University',
    topCities: 'Doha',
  },
  {
    name: 'PAKISTAN',
    flag: 'https://flagcdn.com/w40/pk.png',
    universities: '1,280+',
    knownFor: 'NUST, LUMS, IBA',
    topCities: 'Karachi, Lahore',
  },
];

const universities = [
  {
    name: 'UNIVERSITY OF NEW HAVEN',
    program: 'MS Computer Science',
    locations: 'Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI',
    tuition: '$1890/yr',
    applicationFee: '$76',
    deposit: '$200',
    startDate: 'Full 01 May / 309 days',
    image: '/images/university1.png',
  },
  {
    name: 'UNIVERSITY OF NEW SOUTH ASIA',
    program: 'MS Computer Science',
    locations: 'Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI',
    tuition: '$1890/yr',
    applicationFee: '$76',
    deposit: '$200',
    startDate: 'Full 01 May / 309 days',
    image: '/images/university1.png',
  },
  {
    name: 'UNIVERSITY OF NEW HAVEN',
    program: 'MS Computer Science',
    locations: 'Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI',
    tuition: '$1890/yr',
    applicationFee: '$76',
    deposit: '$200',
    startDate: 'Full 01 May / 309 days',
    image: '/images/university1.png',
  },
  {
    name: 'UNIVERSITY OF SOUTHERN ASIA',
    program: 'MS Computer Science',
    locations: 'Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI',
    tuition: '$1890/yr',
    applicationFee: '$76',
    deposit: '$200',
    startDate: 'Full 01 May / 309 days',
    image: '/images/university1.png',
  },
  {
    name: 'UNIVERSITY OF NEW HAVEN',
    program: 'MS Computer Science',
    locations: 'Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI',
    tuition: '$1890/yr',
    applicationFee: '$76',
    deposit: '$200',
    startDate: 'Full 01 May / 309 days',
    image: '/images/university1.png',
  },
];

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

export default function CountriesGridTab() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [modal, setModal] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState('Country');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const openModalHandler = () => {
    setModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModalHandler = () => {
    setModal(false);
    document.body.style.overflow = 'auto';
  };

  const filterTabs = ['Intake batch', 'Country'];

  const filterOptions = {
    Program: [
      { id: 1, label: 'Computer Science' },
      { id: 2, label: 'Business Analytics' },
      { id: 3, label: 'Data Science' },
      { id: 4, label: 'Engineering' },
      { id: 5, label: 'Marketing' },
      { id: 6, label: 'AI & Robotics' },
    ],
    'Intake batch': batchIntakeOptions,
    Country: options,
  };

  const toggleFilter = (label) => {
    setSelectedFilters((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  return (
    <>
      {/* Header */}
      <div className="w-full bg-white drop-shadow-sm max-h-16 py-3 px-6 flex items-center justify-between">
        <div className="font-semibold font-inter text-xl text-Primarytext">
          We Found <span className="text-[#C7044C]">{universities.length} Universities</span>
        </div>

        {/* Mobile Filter Button */}
        <button
          onClick={openModalHandler}
          className="flex items-center gap-2 bg-primarycolor text-white px-5 py-3 rounded-md md:hidden"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>

        {/* Dropdown (Desktop) */}
        <div className="hidden md:flex gap-5">
          <Dropdown
            defaultTextColor="!text-white"
            defaultValue={'Master'}
            iconColor={'white'}
            className="!py-2 bg-primarycolor !text-white"
          />
        </div>
      </div>

      {/* Conditional Filter Bars */}
      <div className="hidden md:flex flex-col">
        {!selectedCountry ? (
          <>
            <FilterBar options={options} placeholder="Search Country" icon={Globe} />
            <FilterBar
              options={batchIntakeOptions}
              placeholder="Search Intake Batch"
              icon={Calendar}
            />
          </>
        ) : (
          <>
            <FilterBar
              options={universities.map((u, i) => ({ id: i, label: u.name }))}
              placeholder="Search Universities"
              icon={Search}
            />
            <FilterBar options={batchIntakeOptions} placeholder="Intake Batch" icon={Calendar} />
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="py-10">
        {!selectedCountry ? (
          <CountryCard
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            countries={countries}
          />
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <Button text="Back" onClick={() => setSelectedCountry(null)} />
            </div>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-8">
              {universities.map((university, index) => (
                <UniversitiesLayout key={index} {...university} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Filter Modal */}
      {modal && (
        <Modal
          title="Filter"
          width="w-full "
          onClose={closeModalHandler}
          className="fixed md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 py-6 px-5 rounded-t-[20px] md:rounded-[20px] shadow-lg bg-white transition-all duration-300"
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
                  className={`w-[50%] text-sm py-2 rounded-md transition font-medium ${
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

            {/* Dynamic Filter Buttons */}
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
}
