"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X, ChevronDown } from "lucide-react";
import { createPortal } from "react-dom";

export default function FilterBar({
  options = [],
  placeholder = "Search...",
  onFilterChange,
  icon: IconComponent,
}) {
  const [filters, setFilters] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const filtersContainerRef = useRef(null);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  const toggleFilter = (option) => {
    let updatedFilters;
    if (filters.find((f) => f.id === option.id)) {
      updatedFilters = filters.filter((f) => f.id !== option.id);
    } else {
      updatedFilters = [...filters, option];
    }

    setFilters(updatedFilters);
    if (onFilterChange) onFilterChange(updatedFilters);

    // ✅ Auto-scroll to the newest filter
    setTimeout(() => {
      if (filtersContainerRef.current) {
        filtersContainerRef.current.scrollTo({
          left: filtersContainerRef.current.scrollWidth,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const removeFilter = (id) => {
    const updatedFilters = filters.filter((f) => f.id !== id);
    setFilters(updatedFilters);
    if (onFilterChange) onFilterChange(updatedFilters);
  };

  return (
    <div className="w-full max-w-[1560px] mt-5 mx-auto">
      <div className="flex items-center justify-between border border-gray-200 px-3.5 py-2.5 drop-shadow-sm bg-white relative">
        {/* Left side: Search input */}
        <div className="flex items-center flex-1">
          <Search className="text-secondarytext w-4 h-4 ml-1" />
          <input
            type="text"
            placeholder={placeholder}
            className="w-full px-2 py-1 text-sm text-secondarytext focus:outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Selected filters with horizontal scroll */}
        <div
          ref={filtersContainerRef}
          className="absolute right-12 flex overflow-hidden flex-row-reverse items-center gap-2 pr-2 max-w-[60%] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
        >
          {filters.map((filter) => (
            <div
              key={filter.id}
              className="flex items-center gap-2 bg-primarycolor text-white px-3.5 py-2 rounded-md text-xs md:text-sm font-normal whitespace-nowrap flex-shrink-0"
            >
              {IconComponent && <IconComponent />}
              <span>
                {filter.label}
                {filter.count && ` - ${filter.count}`}
              </span>
              <button onClick={() => removeFilter(filter.id)}>
                <X className="w-3 h-3 bg-white text-red-700 rounded-full" />
              </button>
            </div>
          ))}
        </div>

        {/* Dropdown Menu */}
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 text-secondarycolor px-2 py-1 rounded-md text-xs md:text-sm hover:bg-gray-100"
          >
            <ChevronDown className="w-4 h-4" />
          </button>

          {dropdownOpen &&
            buttonRef.current &&
            (() => {
              const rect = buttonRef.current.getBoundingClientRect();
              const dropdownWidth = Math.max(rect.width, 224);
              const left = rect.left - dropdownWidth;

              return createPortal(
                <div
                  ref={dropdownRef}
                  className="bg-white border border-gray-200 rounded-md shadow-md max-h-60 overflow-auto"
                  style={{
                    position: "absolute",
                    top: rect.bottom + window.scrollY + 20,
                    left: left,
                    width: dropdownWidth,
                    zIndex: 9999,
                  }}
                >
                  {options.map((option) => {
                    const selected = filters.find((f) => f.id === option.id);
                    return (
                      <button
                        key={option.id}
                        onClick={() => toggleFilter(option)}
                        className={`flex justify-between items-center w-full px-3 py-2 text-sm hover:bg-gray-100 ${
                          selected
                            ? "text-[#C8102E] font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {option.label}
                        {option.count && (
                          <span className="text-xs text-gray-400">
                            {option.count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>,
                document.body
              );
            })()}
        </div>
      </div>
    </div>
  );
}
