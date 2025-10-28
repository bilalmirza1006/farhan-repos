import React, { useState } from "react";
import Dropdown from "../../ui/Dropdown";
import FilterBar from "../../ui/Filterbar";
import { BookOpen, BrainCircuit, Search, SlidersHorizontal } from "lucide-react";
import CourseCard from "./CourseCard";
import Modal from "../../ui/Modal";

const CourseGrid = ({ data, onUniversityClick }) => {
  const [modal, setModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const openModalHandler = (type) => setModal(type);
  const closeModalHandler = () => setModal(false);
  const [activeFilterTab, setActiveFilterTab] = useState("Program");

  const options = [
    { id: 1, label: "Data Science" },
    { id: 2, label: "Artificial Intelligence" },
    { id: 3, label: "Cyber Security" },
    { id: 4, label: "Software Engineering" },
  ];
  const Intakeoptions = [
    { id: 1, label: "Fall" },
    { id: 2, label: "Winter" },
  ];
  const Countryoptions = [
    { id: 1, label: "United States" },
    { id: 2, label: "United Kingdom" },
    { id: 3, label: "Germany" },
    { id: 4, label: "France" },
  ];
  const filterTabs = ["Program", "Intake batch", "Country"];
  const programs = [
    { id: 1, label: "Computer Science" },
    { id: 2, label: "Business Analytics" },
  ];
  const filterOptions = {
    Program: programs,
    "Intake batch": Intakeoptions,
    Country: options,
  };
  const handleFilterChange = (selectedFilters) => {
    console.log("Selected Filters:", selectedFilters);
  };
  return (
    <>
      <div className="w-full bg-white drop-shadow-sm max-h-16 py-3 px-6 flex items-center justify-between ">
        <div className="font-semibold font-inter text-xl text-Primarytext">
          We Found <span className="text-[#C7044C]"> Courses</span>
        </div>
        <div className="hidden md:block">
          <Dropdown
            defaultTextColor="!text-white"
            defaultValue={"Master"}
            iconColor={"white"}
            className="!py-2 bg-primarycolor !text-white"
          />
        </div>
        <div className="md:hidden block">
          <button
            // onClick={openModalHandler}
            onClick={() => openModalHandler("Alerts Filter")}
            className="flex items-center gap-2 bg-primarycolor text-white px-4 py-2 rounded-sm"
          >
            <SlidersHorizontal className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <FilterBar
          options={options}
          placeholder="Search Course"
          onFilterChange={handleFilterChange}
          icon={BrainCircuit}
        />
      </div>
      <div className="hidden md:block">
        <FilterBar
          options={Intakeoptions}
          placeholder="Search Intake batch"
          onFilterChange={handleFilterChange}
          icon={BrainCircuit}
        />
      </div>
      <div className="hidden md:block">
        <FilterBar
          options={Countryoptions}
          placeholder="Search Country"
          onFilterChange={handleFilterChange}
          icon={BrainCircuit}
        />
      </div>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8.5">
        {data.map((item, index) => (
          <CourseCard
            key={index}
            title={item.title}
            duration={item.duration}
            price={item.price}
            onUniversityClick={onUniversityClick}
          />
        ))}
      </div>
      {/* Modal */}
      {modal === "Alerts Filter" && (
        <Modal
          title="Filter"
          width="w-full "
          onClose={closeModalHandler}
          className="fixed block md:hidden bottom-0 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 py-6 px-5 rounded-t-[20px] md:rounded-[20px] shadow-lg bg-white transition-all duration-300"
        >
          <div className="space-y-5">
            <p className="text-gray-500 text-sm flex">
              Apply filters to narrow your results
            </p>

            {/* Dropdowns */}
            <div className="grid grid-cols-2 gap-2">
              {/* <Dropdown
                title="Program Level"
                defaultValue="Master"
                width="w-full"
                className="!py-2"
              /> */}
              {/* <Dropdown
                title="Type"
                defaultValue="Scholarship"
                width="w-full"
                className="!py-2"
              /> */}
            </div>

            {/* Tabs */}
            {/* <div className="flex justify-between bg-[#F5F5F5] rounded-lg p-1">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilterTab(tab)}
                  className={`w-1/3 text-sm py-2 rounded-md transition font-medium ${activeFilterTab === tab
                    ? "bg-[#C7044C] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div> */}

            {/* Search */}
            {/* <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${activeFilterTab.toLowerCase()}`}
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-pink-600 outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div> */}

            {/* Filter Buttons */}
            {/* <div className="flex flex-wrap gap-2">
              {filterOptions[activeFilterTab]
                .filter((opt) =>
                  opt.label.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleFilter(option.label)}
                    className={`flex items-center gap-2 border rounded-md px-4 py-2 text-sm transition ${selectedFilters.includes(option.label)
                      ? "bg-[#C7044C] text-white border-[#C7044C]"
                      : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                      }`}
                  >
                    {activeFilterTab === "Intake batch" ? (
                      <Calendar className="w-4 h-4" />
                    ) : activeFilterTab === "Country" ? (
                      <Globe className="w-4 h-4" />
                    ) : (
                      <BookOpen className="w-4 h-4" />
                    )}
                    <span>{option.label}</span>
                  </button>
                ))}
            </div> */}

            {/* Footer */}
            {/* <div className="flex justify-between mt-6">
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
                Apply Filterss
              </button>
            </div> */}
          </div>
        </Modal>
      )}
    </>
  );
};

export default CourseGrid;