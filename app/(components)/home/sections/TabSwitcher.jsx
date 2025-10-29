'use client';
import { useState } from 'react';

export default function TabSwitcher({ tabs }) {
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

  return (
    <div className="w-full  ">
      {/* Tab Buttons */}
      <div className="flex   justify-between md:justify-center md:gap-4  my-6">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={` py-3.5 rounded-md  w-[124px]  font-semibold border-2 cursor-pointer uppercase transition-all duration-200 ${
              activeTab === tab
                ? 'bg-primarycolor text-white border-[#c8004b]'
                : 'text-[#c8004b] border-[#c8004b] hover:bg-[#c8004b]/10'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Active Content */}
      <div>{tabs[activeTab]}</div>
    </div>
  );
}
