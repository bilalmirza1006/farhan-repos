"use client";

import { useState, useRef } from "react";
import { Search, X, ChevronDown } from "lucide-react";
import { createPortal } from "react-dom";

/**
 * A reusable filter bar component
 *
 * @param {Array} options - The filter options [{ id, label, count }]
 * @param {String} placeholder - Placeholder text for search input
 * @param {Function} onFilterChange - Callback that returns selected filters
 * @param {ReactNode} icon - Optional icon to display inside selected filter tags
 */
export default function FilterBar({
  options = [],
  placeholder = "Search...",
  onFilterChange,
  icon: IconComponent, // optional icon component (e.g., BrainCircuit)
}) {
  const [filters, setFilters] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleFilter = (option) => {
    let updatedFilters;
    if (filters.find((f) => f.id === option.id)) {
      updatedFilters = filters.filter((f) => f.id !== option.id);
    } else {
      updatedFilters = [...filters, option];
    }

    setFilters(updatedFilters);
    if (onFilterChange) onFilterChange(updatedFilters);
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

        {/* Selected filters */}
        <div className="absolute right-12 flex flex-row-reverse items-center gap-4 pr-2">
          {filters.map((filter) => (
            <div
              key={filter.id}
              className="flex items-center gap-2 bg-primarycolor text-white px-3.5 py-2 rounded-md text-xs md:text-sm font-normal whitespace-nowrap"
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
              const dropdownWidth = Math.max(rect.width, 224); // minimum width
              const viewportWidth = window.innerWidth;
              const spaceRight = viewportWidth - rect.left;

              const left =
                spaceRight < dropdownWidth
                  ? rect.right - dropdownWidth // align to button's right edge
                  : rect.left; // normal left alignment

              return createPortal(
                <div
                  className="bg-white border border-gray-200 rounded-md shadow-md max-h-60 overflow-auto"
                  style={{
                    position: "absolute",
                    top: rect.bottom + window.scrollY,
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
