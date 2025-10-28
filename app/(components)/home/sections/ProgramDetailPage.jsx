"use client";

import { Bookmark, CircleCheck, Clock4 } from "lucide-react";
import ProgramDetails from "../../ui/ProgramDetails";
import Button from "../../ui/Button";
import { useState } from "react";
import EnrollmentModal from "../../ui/EnrollmentModal";
import ApplyModal from "../../ui/ApplyModal";

// import ProgramDetails from "@/components/ProgramDetails";

export default function ProgramPage({ isOpen, onClose, onSubmit }) {
  const program = {
    title: "Computer Science",
    duration: "1–4 Years",
    requirements: `Master of Science in Marketing applicants must meet the general requirements for admission to a Carey Business School graduate program, outlined in the admission section. Please note that the GMAT/GRE are not required to gain admission to this program.`,
    comments: `UNIVERSITY CUTOFFS ARE APPROXIMATE CUTOFFS. KINDLY RECHECK ONCE AGAIN BEFORE SELECTING THE UNIVERSITY. TUITION FEE FOR OVERSEAS STUDENTS: $5455`,
  };

  // const handleModalClose = () => {
  //     setModalOpen(false);
  // };

  // const handleFormSubmit = (formData) => {
  //     console.log("User Info:", formData);
  //     setModalOpen(false)
  // }
  // const openEnrollmentModal = () => {
  //     setModalOpen(true);
  // }

  return (
    <main className="">
      <div className="">
        {/* Breadcrumb */}
        <div className="text-2xl gap-3.5  mb-4">
          <span className="cursor-pointer text-lg text-[#C7044C]  font-inter font-semibold  hover:text-[#C7044C]">
            Programs
          </span>{" "}
          ›
          <span className="cursor-pointer text-lg text-[#C7044C]  font-inter font-semibold  hover:text-[#C7044C]">
            {" "}
            Courses
          </span>{" "}
          ›
          <span className="cursor-pointer text-lg text-[#C7044C]  font-inter font-semibold  hover:text-[#C7044C]">
            {" "}
            Universities
          </span>{" "}
          ›
          <span className="cursor-pointer text-lg text-[#C7044C]  font-inter font-semibold hover:text-[#C7044C]">
            {" "}
            Details
          </span>
        </div>

        {/* Header */}
        <div className="bg-white p-5 rounded-md drop-shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-3 ">
          <div>
            <h1 className="text-xl md:text-2xl font-bold font-inter text-[#C7044C]">
              {program.title}
            </h1>
            <p className="text-secondarytext text-sm flex items-center gap-2 mt-1">
              Duration:
              <span className="inline-block ">
                <Clock4 size={14} />
              </span>{" "}
              {program.duration}
            </p>
          </div>
          <div className="flex gap-3">
            <Button text={"Shortlist"} icon={<Bookmark />} />
            <Button
              text={"Apply Now"}
              icon={<CircleCheck />}
              onClick={isOpen}
            />
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="lg:col-span-1 flex flex-col gap-4">
            <ProgramDetails title="Program Details">
              <h3 className="font-semibold font-inter text-primaryheading md:text-lg mb-2">
                Program Requirements
              </h3>
              <p className="text-base text-secondarytext leading-relaxed">
                {program.requirements}
              </p>
              <h3 className="font-semibold font-inter text-primaryheading md:text-lg mt-3 mb-1">
                Program Comments
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                {program.comments}
              </p>
            </ProgramDetails>

            <ProgramDetails title="Financial Detail">
              <p className="text-base text-secondarytext">
                Tuition fee and scholarships will be available soon.
              </p>
            </ProgramDetails>
          </div>

          <div className="flex flex-col gap-4  w-full">
            <ProgramDetails title="Important Dates">
              <ul className="list-disc ml-5 text-base text-secondarytext">
                <li>Application Opens: Jan 10</li>
                <li>Deadline: Mar 30</li>
              </ul>
            </ProgramDetails>

            <ProgramDetails title="Required Documents">
              <ul className="list-disc ml-5 text-base text-secondarytext">
                <li>Transcript</li>
                <li>Recommendation Letter</li>
                <li>English Proficiency</li>
              </ul>
            </ProgramDetails>
          </div>
        </div>
      </div>
    </main>
  );
}
