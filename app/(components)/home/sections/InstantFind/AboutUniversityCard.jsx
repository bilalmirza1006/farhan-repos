"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Bookmark, FileText, Check, Heart } from "lucide-react";
import Button from "@/app/(components)/ui/Button";

const AboutUniversityCard = ({
    name,
    program,
    locations,
    tuition,
    applicationFee,
    gre,
    documents,
    deposit,
    scholarship,
    startDate,
    image,
}) => {
    const router = useRouter();
    const id = name.toLowerCase().replace(/\s+/g, "-");
    const [shortlisted, setShortlisted] = useState(false);

    const handleNavigate = () => {
        router.push(`/home/instant-find/${id}`);
    };

    const handleShortlist = () => {
        setShortlisted(!shortlisted);
    };

    return (
        <div className="bg-white rounded-[6px] drop-shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden px-3.5 py-2.5">
            {/* Image */}
            <div className="relative border">
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={200}
                    className="w-full h-44 object-cover"
                />

                {/* Shortlist overlay checkmark */}
                {shortlisted && (
                    <div className="absolute top-2 right-2 bg-pink-600 text-white w-6 h-6 flex items-center justify-center rounded-md">
                        <Check size={16} />
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="mt-3.5">
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-2 ">
                    <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-100">
                        <Image
                            src="/images/uni-logo.png"
                            alt="logo"
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold text-primarycolor text-sm md:text-lg leading-tight">
                            {name}
                        </h3>
                        <p className="text-xs text-Lighttext">{program}</p>
                    </div>
                </div>

                {/* Locations */}
                <p className="text-sm text-primaryheading font-medium leading-5 mb-2">
                    {Array.isArray(locations) ? locations.join(" | ") : locations}
                </p>

                <hr className="border-gray-200 my-2" />

                {/* Info Section */}
                <div className="space-y-3.5">
                    <p className="font-medium font-inter text-sm text-primaryheading">
                        Tuition <span className="font-medium font-inter text-sm text">{tuition}</span>
                    </p>
                    <p className="font-medium font-inter text-sm text-primarycolor">
                        Application fee <span className="font-semibold">{applicationFee}</span>
                    </p>
                    <div className="flex justify-between items-center">
                        <p className="font-medium font-inter text-sm text-primarycolor">
                            GRE <span className="font-semibold">{gre}</span>
                        </p>
                        <div className="flex items-center gap-2 text-white bg-[#190459] rounded-[4px] p-1">
                            {/* <FileText size={16} className="text-pink-600" /> */}
                            <p>
                                Document Required :{" "}
                                <span className="font-semibold ">{documents}</span>
                            </p>
                        </div>
                    </div>
                    <p className="font-medium font-inter text-sm text-primarycolor">
                        Deposit <span className="">{deposit}</span>
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-3 flex flex-col items-start  justify-between text-sm gap-2">
                    <div className="flex ">
                        <p className="text-gray-500">Scholarship :</p>
                        <span className="text-white bg-[#34C759] px-2 py-0.5 rounded text-xs font-semibold w-fit">
                            {scholarship}
                        </span>
                    </div>
                    <p className="text-sm font-inter text-primaryheading font-medium">{startDate}</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-4">
                    <button
                        onClick={handleShortlist}
                        className={`flex-1 border font-semibold py-2 rounded-lg text-sm transition-all ${shortlisted
                            ? "border-[#C7044C] bg-[#C7044C] text-white"
                            : "border-[#190459] text-primaryheading hover:bg-[#190459] hover:text-white"
                            }`}
                    >
                        {shortlisted ? "Shortlisted" : "Shortlist"}
                    </button>
                    {/* <Button text="Shortlist" icon={<Heart />} /> */}
                    <button
                        onClick={handleNavigate}
                        className="flex-1 bg-[#C7044C] text-white font-semibold py-3.5 rounded-lg text-sm hover:bg-[#A4003D] transition-all"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUniversityCard;
