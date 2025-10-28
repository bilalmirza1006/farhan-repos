'use client'
import Image from "next/image";

import React from "react";
// import Button from "../../ui/Button";
import { useRouter } from "next/navigation";
import Button from "@/app/(components)/ui/Button";

const UniversityDetailCard = ({
    name,
    program,
    locations,
    tuition,
    applicationFee,
    deposit,
    startDate,
    image,
}) => {

    const router = useRouter();

    // ✅ Create a slug from university name (for dynamic route)
    const id = name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

    // ✅ Handle navigation
    const handleNavigate = () => {
        router.push(`/home/university-tab/${id}`);
    };

    return (
        <div className="bg-white rounded-[6px] p-3.5 drop-shadow-sm hover:shadow-md transition-shadow duration-200">
            {/* Header */}
            <div className="flex items-start gap-2.5 mb-2 ">
                <div className="w-10 h-10 rounded-[2px] overflow-hidden  flex-shrink-0">
                    <Image
                        src={image}
                        alt={'logo'}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="md:text-base font-inter font-semibold text-Primarytext leading-5">{name}</h3>
                    <p className="text-xs font-inter font-normal text-secondarytext ">{program}</p>
                </div>
            </div>

            {/* Content */}
            <p className="text-xs text-start text-primaryheading font-medium font-inter mb-2">{locations}</p>
            <hr className="my-2 border-[#D8D8D8] " />
            <p className="text-sm text-start text-primaryheading font-medium font-inter  mb-2">Tuition {tuition}</p>
            <p className="text-xs text-start text-Primarytext font-medium font-inter mb-1">Application fee {applicationFee}</p>
            <p className="text-xs text-start text-Primarytext font-medium font-inter mb-3">Deposit {deposit}</p>

            <p className="text-sm text-start text-Primarytext font-medium font-inter mb-2">{startDate}</p>

            <Button text="View Details" color="text-white" bg="bg-primarycolor" cn="mt-2 !w-full" onClick={handleNavigate} />
        </div>
    );
};

export default UniversityDetailCard;
