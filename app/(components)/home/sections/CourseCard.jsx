import { BookOpen, Clock } from 'lucide-react';
import React from 'react'

const CourseCard = ({ title, duration, price, onUniversityClick }) => {
    const handleButtonClicked = () => {
        if (onUniversityClick) {
            onUniversityClick({ title, duration, price });
        }
    };

    return (
        <div className="bg-white border border-[#E3E3E3] rounded-[12px] p-5 drop-shadow-sm hover:shadow-md transition-all duration-200">
            {/* Title */}
            <h3 className="text-lg font-inter font-semibold text-[#C7044C] mb-2 text-start">{title}</h3>

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
                    <BookOpen className="w-4 h-4" />
                    Universitiess: ${price}
                </button>
            </div>
        </div>
    );
}

export default CourseCard