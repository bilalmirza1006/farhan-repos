"use client";
import { useState } from "react";
import { Search, X, ChevronDown } from "lucide-react";
import BrainCircuit from "@/public/home/BrainCircuit";

export default function ProgramFilterBar() {
    const [filters, setFilters] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const options = [
        { id: 1, label: "Data Science", count: 307 },
        { id: 2, label: "Artificial Intelligence", count: 43 },
        { id: 3, label: "Cyber Security", count: 29 },
        { id: 4, label: "Software Engineering", count: 58 },
    ];

    const toggleFilter = (option) => {
        if (filters.find((f) => f.id === option.id)) {
            setFilters(filters.filter((f) => f.id !== option.id));
        } else {
            setFilters([...filters, option]);
        }
    };

    const removeFilter = (id) => {
        setFilters(filters.filter((filter) => filter.id !== id));
    };

    return (
        <div className="w-full max-w-[1560px] mt-5 mx-auto">
            <div className="flex items-center justify-between border border-gray-200  px-3.5 py-2.5 drop-shadow-sm bg-white relative">
                {/* Left side: Search input */}
                <div className="flex items-center flex-1">
                    <Search className="text-secondarytext w-4 h-4 ml-1" />
                    <input
                        type="text"
                        placeholder="Search Program"
                        className="w-full px-2 py-1 text-sm text-secondarytext focus:outline-none placeholder:text-gray-400"
                    />
                </div>

                {/* Right side: selected filters (right-to-left layout) */}
                <div className="absolute right-12 flex flex-row-reverse items-center gap-4 pr-2">
                    {filters.map((filter) => (
                        <div
                            key={filter.id}
                            className="flex items-center gap-2 bg-primarycolor text-white px-3.5 py-2 rounded-md text-xs md:text-sm font-normal whitespace-nowrap"
                        >
                            <BrainCircuit />
                            <span>
                                {filter.label} - {filter.count}
                            </span>
                            <button onClick={() => removeFilter(filter.id)}>
                                <X className="w-3 h-3 bg-white text-red-700  rounded-full" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Dropdown on far right */}
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-1  text-secondarycolor px-2 py-1 rounded-md text-xs md:text-sm hover:bg-gray-100"
                    >

                        <ChevronDown className="w-4 h-4" />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 rounded-md shadow-md z-10">
                            {options.map((option) => {
                                const selected = filters.find((f) => f.id === option.id);
                                return (
                                    <button
                                        key={option.id}
                                        onClick={() => toggleFilter(option)}
                                        className={`flex justify-between items-center w-full px-3 py-2 text-sm hover:bg-gray-100 ${selected ? "text-[#C8102E] font-semibold" : "text-gray-700"
                                            }`}
                                    >
                                        {option.label}
                                        <span className="text-xs text-gray-400">{option.count}</span>
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
