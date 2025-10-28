import { useState } from "react";
import { Group, Search } from "lucide-react";
import Dropdown from "../../ui/Dropdown";
import FilterBar from "../../ui/Filterbar";
import ProgramCard from "./ProgramCard";
import Modal from "../../ui/Modal";
import { SlidersHorizontal } from "lucide-react";

export default function ProgramsGrid({ data, onCourseClick }) {
  const [modal, setModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const openModalHandler = () => setModal(true);
  const closeModalHandler = () => setModal(false);

  // Dummy options
  const options = [
    { id: 1, label: "Computer Science", count: 1091 },
    { id: 2, label: "Biology", count: 12 },
    { id: 3, label: "Data Science", count: 307 },
    { id: 4, label: "MBA", count: 29 },
    { id: 5, label: "Automotive Engineering", count: 102 },
    { id: 6, label: "Business Analytics", count: 18 },
    { id: 7, label: "Artificial Intelligence", count: 43 },
  ];

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Header Bar */}
      <div className="w-full bg-white drop-shadow-sm max-h-16 py-3 px-6 flex items-center justify-between">
        <div className="font-semibold font-inter text-xl text-Primarytext">
          We Found <span className="text-[#C7044C]">{data.length} Courses</span>
        </div>

        {/* Mobile: Filter Button */}
        <button
          onClick={openModalHandler}
          className="flex items-center gap-2 bg-primarycolor text-white px-5 py-3 rounded-md md:hidden"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>

        {/* Desktop: Master Dropdown */}
        <div className="hidden md:block">
          <Dropdown
            defaultTextColor="!text-white"
            defaultValue="Master"
            iconColor="white"
            className="!py-2 bg-primarycolor !text-white"
          />
        </div>
      </div>

      {/* Filter Bar */}
      <div>
        <FilterBar
          options={options}
          placeholder="Search Program"
          icon={Group}
        />
      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8.5">
        {data.map((item, index) => (
          <ProgramCard
            key={index}
            title={item.title}
            duration={item.duration}
            price={item.price}
            onCourseClick={onCourseClick}
          />
        ))}
      </div>

      {modal && (
        <Modal
          title="Filter"
          width="w-full "
          onClose={closeModalHandler}
          className="fixed md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 py-6 px-5 rounded-t-[20px] md:rounded-[20px] shadow-lg bg-white transition-all duration-300"
        >
          <div className="space-y-4">
            {/* Header */}
            <div>
              <p className="text-gray-500 text-sm flex">
                Apply filters to narrow your results
              </p>
            </div>

            {/* Dropdown */}
            <div>
              <Dropdown
                title="All Type"
                defaultValue="Master"
                onChange={(opt) => setAlertType(opt.id)}
                width="w-full"
                className="!py-2"
              />
            </div>

            {/* Search bar with your custom icon */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Program"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-pink-600 outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Program options */}
            <div className="flex flex-wrap gap-2 mb-0">
              {options
                .filter((opt) =>
                  opt.label
                    .toLowerCase()
                    .includes(searchTerm?.toLowerCase() || "")
                )
                .map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setAlertType(option.id)}
                    className="flex items-center justify-center gap-2 border border-gray-200 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-md px-4 py-2 transition text-center"
                  >
                    <Group className="w-4 h-4 text-gray-500" />
                    <span className="whitespace-nowrap">
                      {option.label} - {option.count}
                    </span>
                  </button>
                ))}
            </div>
          </div>

          {/* Footer buttons */}
          <div className="flex justify-between mt-6 mb-0">
            <button
              onClick={closeModalHandler}
              className="font-semibold text-white text-[14px] bg-gray-700 px-5 py-2 rounded"
            >
              Reset
            </button>
            <button className="bg-[#C7044C] text-white font-semibold text-[14px] px-5 py-2 rounded">
              Apply Filters
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
