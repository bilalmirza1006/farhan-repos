import React from "react";
import Dropdown from "../../ui/Dropdown";
import FilterBar from "../../ui/Filterbar";
import { BrainCircuit } from "lucide-react";
import CourseCard from "./CourseCard";

const CourseGrid = ({ data, onUniversityClick }) => {
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

  const handleFilterChange = (selectedFilters) => {
    console.log("Selected Filters:", selectedFilters);
  };
  return (
    <>
      <div className="w-full bg-white drop-shadow-sm max-h-16 py-3 px-6 flex items-center justify-between ">
        <div className="font-semibold font-inter text-xl text-Primarytext">
          We Found <span className="text-[#C7044C]"> Courses</span>
        </div>
        <div>
          <Dropdown
            defaultTextColor="!text-white"
            defaultValue={"Master"}
            iconColor={"white"}
            className="!py-2 bg-primarycolor !text-white"
          />
        </div>
      </div>
      <div>
        <FilterBar
          options={options}
          placeholder="Search Course"
          onFilterChange={handleFilterChange}
          icon={BrainCircuit}
        />
      </div>
      <div>
        <FilterBar
          options={Intakeoptions}
          placeholder="Search Intake batch"
          onFilterChange={handleFilterChange}
          icon={BrainCircuit}
        />
      </div>
      <div>
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
    </>
  );
};

export default CourseGrid;
