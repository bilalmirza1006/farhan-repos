"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation"; // ✅ import router

export default function SearchBar({
  placeholder = "Search university by name, program, country",
}) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return; // prevent empty searches

    // Example: navigate to /home/country-tab/{query}
    // You can replace query with an id if you have mapping logic
    router.push(`/home/find-instant-universities/${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 w-full max-w-7xl bg-white py-3.5 px-4.5 rounded-md shadow-sm mx-auto"
    >
      <div className="flex items-center bg-[#F3F3F3] rounded-md px-3">
        <Search className="w-4 h-4 text-gray-400 mr-2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent border-none focus:outline-none text-gray-700 text-sm py-4.5"
        />
      </div>
      <button
        type="submit"
        className="bg-[#c8004b] hover:bg-[#a1003e] cursor-pointer text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors duration-200"
      >
        Search now!
      </button>
    </form>
  );
}
