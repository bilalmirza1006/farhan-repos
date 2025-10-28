"use client";
import {
  ArrowLeft,
  Clock,
  BookOpen,
  MapPin,
  Users,
  Star,
  DollarSign,
} from "lucide-react";
import Button from "../../ui/Button";
import Dropdown from "../../ui/Dropdown";
import CourseGrid from "./CourseGrid";

export default function CourseDetailPage({
  course,
  onBack,
  onUniversityClick,
}) {
  // Sample detailed course data
  const computerSciencePrograms = [
    { title: "Computer Science", duration: "1–4 Years", price: 560 },
    { title: "Software Engineering", duration: "1–4 Years", price: 560 },
    { title: "Data Science", duration: "1–4 Years", price: 560 },
    { title: "Artificial Intelligence", duration: "1–4 Years", price: 560 },
    { title: "Machine Learning", duration: "1–4 Years", price: 560 },
    { title: "Cyber Security", duration: "1–4 Years", price: 560 },
    { title: "Cloud Computing", duration: "1–4 Years", price: 560 },
    { title: "Information Technology", duration: "1–4 Years", price: 560 },
    { title: "Computer Networks", duration: "1–4 Years", price: 560 },
    { title: "Web Development", duration: "1–4 Years", price: 560 },
    { title: "Mobile App Development", duration: "1–4 Years", price: 560 },
    { title: "Blockchain Technology", duration: "1–4 Years", price: 560 },
    { title: "Game Development", duration: "1–4 Years", price: 560 },
    { title: "Internet of Things (IoT)", duration: "1–4 Years", price: 560 },
    { title: "Human–Computer Interaction", duration: "1–4 Years", price: 560 },
    { title: "Computer Vision", duration: "1–4 Years", price: 560 },
    { title: "Big Data Analytics", duration: "1–4 Years", price: 560 },
    { title: "DevOps Engineering", duration: "1–4 Years", price: 560 },
    { title: "Database Management Systems", duration: "1–4 Years", price: 560 },
    {
      title: "Cloud Security & Ethical Hacking",
      duration: "1–4 Years",
      price: 560,
    },
  ];

  return (
    <div className="mt-8">
      <div className="max-w-[1560px] mx-auto">
        {/* Back Button */}
        <Button
          text="Back to Programs"
          icon={<ArrowLeft />}
          color="text-white"
          bg="bg-primarycolor"
          cn="mb-6"
          onClick={onBack}
        />
        <div>
          <CourseGrid
            data={computerSciencePrograms}
            onUniversityClick={onUniversityClick}
          />
        </div>
      </div>
    </div>
  );
}
