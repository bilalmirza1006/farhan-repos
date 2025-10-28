"use client";
import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Dropdown({
  title,
  options,
  defaultValue,
  onChange,
  className = "",
  width,
  iconColor,
  disabled,
  bgColor,
  defaultTextColor,
  searchable = false, // New prop to enable/disable search
}) {
  const [selected, setSelected] = useState(defaultValue || null);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (defaultValue) setSelected(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
        setSearchTerm(""); // Clear search when closing
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (open && searchable && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [open, searchable]);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    setSearchTerm(""); // Clear search after selection
    onChange?.(option);
  };

  const handleToggle = () => {
    if (!disabled) {
      setOpen(!open);
      if (!open) {
        setSearchTerm(""); // Clear search when opening
      }
    }
  };

  // Filter options based on search term
  const filteredOptions =
    searchable && searchTerm
      ? options?.filter((option) =>
          option.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : options;

  return (
    <div
      className={`relative inline-block text-sm md:text-base ${
        width ? width : "w-64"
      }`}
      ref={dropdownRef}
    >
      {/* Trigger */}
      <div
        onClick={handleToggle}
        className={`
          flex justify-between items-center gap-1 w-full ${
            bgColor ? bgColor : "bg-white"
          } py-[14px] px-5 rounded-sm text-secondary transition border
          ${
            disabled
              ? "cursor-not-allowed bg-gray-100 text-gray-500 border-gray-300"
              : "cursor-pointer border-[#E4E4E7]"
          }
          ${className}
        `}
      >
        <span className={`font-normal text-secondarytext ${defaultTextColor}`}>
          {selected?.name ||
            (typeof defaultValue === "string"
              ? defaultValue
              : defaultValue?.name) ||
            "Select"}
        </span>
        <ChevronDown
          className={`text-sm md:text-base transition-transform duration-200 
            ${open ? "rotate-180" : ""} 
            ${bgColor ? "text-white" : iconColor || "text-secondarytext"}
          `}
        />
      </div>

      {/* Dropdown rendered via portal */}
      {open &&
        dropdownRef.current &&
        createPortal(
          <div
            className="absolute z-[9999] bg-white border border-[#E4E4E7] rounded-md shadow-lg max-h-60 overflow-auto"
            style={{
              top:
                dropdownRef.current.getBoundingClientRect().bottom +
                window.scrollY,
              left: dropdownRef.current.getBoundingClientRect().left,
              width: dropdownRef.current.offsetWidth,
            }}
          >
            {/* Search Input */}
            {searchable && (
              <div className="p-2 border-b border-[#E4E4E7]">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}

            {/* Options List */}
            <ul className="p-1 max-h-48 overflow-auto">
              {filteredOptions?.length > 0 ? (
                filteredOptions.map((opt) => (
                  <li
                    key={opt.id}
                    onClick={() => !disabled && handleSelect(opt)}
                    className={`
                      px-4 py-2 cursor-pointer text-xs md:text-sm text-secondary
                      hover:bg-gray-100
                      ${
                        selected?.id === opt.id ? "bg-gray-100 font-medium" : ""
                      }
                    `}
                  >
                    {opt.name}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-xs md:text-sm text-gray-500">
                  No options found
                </li>
              )}
            </ul>
          </div>,
          document.body
        )}
    </div>
  );
}
