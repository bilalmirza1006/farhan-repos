import SpotlightCard from "@/components/SpotlightCard";
import { Clock } from "lucide-react";
import CourseCardIcon from "@/public/home/CourseCardIcon";
import React from "react";

const CourseCard = ({ title, duration, price, onUniversityClick }) => {
  const handleButtonClicked = () => {
    if (onUniversityClick) {
      onUniversityClick({ title, duration, price });
    }
  };

  return (
    <SpotlightCard
      className="custom-spotlight-card bg-white"
      spotlightColor="rgba(199, 4, 76, 0.3)"
    >
      {/* Title */}
      <h3 className="text-lg font-inter font-semibold text-[#C7044C] mb-2 text-start">
        {title}
      </h3>

      {/* Duration */}
      <div className="flex font-inter items-center text-sm text-gray-500 mb-3.5">
        <Clock className="w-4 h-4 mr-2 text-[#c8004b]" />
        <span>Duration: {duration}</span>
      </div>

      {/* Price Button */}
      <div className="flex justify-end">
        <button
          onClick={handleButtonClicked}
          className="flex items-center gap-2 text-[#c8004b] border border-[#c8004b] text-sm font-medium px-2.5 py-1.5 rounded-md hover:bg-[#c8004b] hover:text-white transition-colors"
        >
          Courses:
          <CourseCardIcon className="w-4 h-4" />${price}
        </button>
      </div>
    </SpotlightCard>
  );
};

export default CourseCard;
