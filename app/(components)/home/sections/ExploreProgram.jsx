"use client";
import { useState } from "react";
import Button from "../../ui/Button";
import FaqSection from "./Faqs";
import ProgramsGrid from "./ProgramsGrid";
import TabSwitcher from "./TabSwitcher";
import CourseDetailPage from "./CourseDetailPage";
import UniversitiesDetail from "./UniversitiesDetail";
import UniversityGrid from "./UniversityGrid";
import UniversitiesGridTab from "./UniversitiesLayout/UniversitiesGridTab";
import CountriesGridTab from "./CountriesLaout/CountriesGridTab";

export default function ExploreProgram() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [currentTab, setCurrentTab] = useState("Programs");

  const handleUniversityClick = (university) => {
    console.log("jjjjjjjjjjuni", university);
    setSelectedCourse(null);

    setSelectedUniversity(university);
  };

  const handleBack = () => {
    setSelectedUniversity(null);
  };

  const handleCourseClick = (course) => {
    console.log("rugfyewgfiwreifer", course);

    setSelectedCourse(course);
  };

  const handleBackToGrid = () => {
    setSelectedCourse(null);
  };

  const programs = [
    { title: "Computer Science", duration: "1–4 Years", price: 560 },
    { title: "Business Analytics", duration: "1–4 Years", price: 560 },
    { title: "Cyber Security", duration: "1–4 Years", price: 560 },
    { title: "MBA", duration: "1–4 Years", price: 560 },
    { title: "Artificial Intelligence", duration: "1–4 Years", price: 560 },
    { title: "Data Science", duration: "1–4 Years", price: 560 },
    { title: "Software Engineering", duration: "1–4 Years", price: 560 },
    { title: "Information Technology", duration: "1–4 Years", price: 560 },
    { title: "Digital Marketing", duration: "1–4 Years", price: 560 },
    { title: "Mechanical Engineering", duration: "1–4 Years", price: 560 },
    { title: "Electrical Engineering", duration: "1–4 Years", price: 560 },
    { title: "Civil Engineering", duration: "1–4 Years", price: 560 },
    { title: "Biomedical Engineering", duration: "1–4 Years", price: 560 },
    { title: "Economics", duration: "1–4 Years", price: 560 },
    { title: "Accounting & Finance", duration: "1–4 Years", price: 560 },
    { title: "Project Management", duration: "1–4 Years", price: 560 },
    { title: "Psychology", duration: "1–4 Years", price: 560 },
    { title: "Architecture", duration: "1–4 Years", price: 560 },
    { title: "Media & Communication", duration: "1–4 Years", price: 560 },
    { title: "International Relations", duration: "1–4 Years", price: 560 },
  ];

  const universities = [
    { title: "Harvard University", duration: "—", price: 1000 },
    { title: "Stanford University", duration: "—", price: 950 },
    { title: "Oxford University", duration: "—", price: 880 },
  ];

  const countries = [
    { title: "USA", duration: "—", price: 0 },
    { title: "UK", duration: "—", price: 0 },
    { title: "Germany", duration: "—", price: 0 },
  ];

  return (
    <section className="min-h-screen  py-10 px-5">
      <div className="max-w-[1560px] mx-auto text-center">
        <h2 className="font-semibold font-inter text-sm leading-6 text-[#C7044C] uppercase">
          Explore What's Possible
        </h2>
        <h1 className="md:text-4xl font-inter leading-10 text-2xl text-primaryheading font-bold mt-3">
          List of Programs, Universities, Countries
        </h1>

        {/* Conditionally render detail page or course grid */}

        {selectedCourse ? (
          <CourseDetailPage
            course={selectedCourse}
            onBack={handleBackToGrid}
            onUniversityClick={handleUniversityClick}
          />
        ) : selectedUniversity ? (
          <UniversitiesDetail
            university={selectedUniversity}
            onBack={handleBack}
          />
        ) : (
          <TabSwitcher
            tabs={{
              Programs: (
                <ProgramsGrid
                  data={programs}
                  onCourseClick={handleCourseClick}
                />
              ),
              Universities: <UniversitiesGridTab data={programs} />,
              Countries: <CountriesGridTab />,
            }}
          />
        )}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-10">
        <Button text="Load More" color="text-white" bg="bg-primarycolor" />
      </div>
      {/* <FaqSection /> */}
    </section>
  );
}
