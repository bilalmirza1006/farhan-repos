// 'use client';

// import { Bookmark, CircleCheck, Clock4 } from 'lucide-react';
// import ProgramDetails from '../../ui/ProgramDetails';
// import Button from '../../ui/Button';
// import { useState } from 'react';
// import EnrollmentModal from '../../ui/EnrollmentModal';
// import ApplyModal from '../../ui/ApplyModal';

// // import ProgramDetails from "@/components/ProgramDetails";

// export default function ProgramPage({ isOpen, onClose, onSubmit }) {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFaq = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
//   const program = {
//     title: 'Computer Science',
//     duration: '1–4 Years',
//     requirements: `Master of Science in Marketing applicants must meet the general requirements for admission to a Carey Business School graduate program, outlined in the admission section. Please note that the GMAT/GRE are not required to gain admission to this program.`,
//     comments: `UNIVERSITY CUTOFFS ARE APPROXIMATE CUTOFFS. KINDLY RECHECK ONCE AGAIN BEFORE SELECTING THE UNIVERSITY. TUITION FEE FOR OVERSEAS STUDENTS: $5455`,
//   };

//   const handleModalClose = () => {
//     setModalOpen(false);
//   };

//   const handleFormSubmit = (formData) => {
//     console.log("User Info:", formData);
//     setModalOpen(false)
//   }
//   const openEnrollmentModal = () => {
//     setModalOpen(true);
//   }

//   return (
//     <main className="">
//       <div className="">
//         {/* Breadcrumb */}
//         <div className="text-2xl gap-3.5  mb-4">
//           <span className="cursor-pointer text-lg text-primarycolor   font-inter font-semibold  hover:text-primarycolor ">
//             Programs
//           </span>{' '}
//           ›
//           <span className="cursor-pointer text-lg text-primarycolor   font-inter font-semibold  hover:text-primarycolor ">
//             {' '}
//             Courses
//           </span>{' '}
//           ›
//           <span className="cursor-pointer text-lg text-primarycolor   font-inter font-semibold  hover:text-primarycolor ">
//             {' '}
//             Universities
//           </span>{' '}
//           ›
//           <span className="cursor-pointer text-lg text-primarycolor   font-inter font-semibold hover:text-primarycolor ">
//             {' '}
//             Details
//           </span>
//         </div>

//         {/* Header */}
//         <div className="bg-white p-5 rounded-md drop-shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-3 ">
//           <div>
//             <h1 className="text-xl md:text-2xl font-bold font-inter text-primarycolor ">
//               {program.title}
//             </h1>
//             <p className="text-secondarytext text-sm flex items-center gap-2 mt-1">
//               Duration:
//               <span className="inline-block ">
//                 <Clock4 size={14} />
//               </span>{' '}
//               {program.duration}
//             </p>
//           </div>
//           <div className="flex gap-3">
//             <Button text={'Shortlist'} icon={<Bookmark />} />
//             <Button text={'Apply Now'} icon={<CircleCheck />} onClick={isOpen} />
//           </div>
//         </div>

//         {/* Details Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
//           {/* Left Column */}
//           <div className="lg:col-span-1 flex flex-col gap-4">
//             <ProgramDetails
//               title="Program Details"
//               isOpen={openIndex === 0}
//               onToggle={() => toggleFaq(0)}
//             >
//               <h3 className="font-semibold font-inter text-primaryheading md:text-lg mb-2">
//                 Program Requirements
//               </h3>
//               <p className="text-base text-secondarytext leading-relaxed">
//                 {program?.requirements || 'Requirements not available.'}
//               </p>

//               <h3 className="font-semibold font-inter text-primaryheading md:text-lg mt-3 mb-1">
//                 Program Comments
//               </h3>
//               <p className="text-xs text-gray-500 uppercase tracking-wide">
//                 {program?.comments || 'No comments available.'}
//               </p>
//             </ProgramDetails>

//             <ProgramDetails
//               title="Financial Detail"
//               isOpen={openIndex === 1}
//               onToggle={() => toggleFaq(1)}
//             >
//               <p className="text-base text-secondarytext">
//                 Tuition fee and scholarships will be available soon.
//               </p>
//             </ProgramDetails>
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-col gap-4 w-full">
//             <ProgramDetails
//               title="Important Dates"
//               isOpen={openIndex === 2}
//               onToggle={() => toggleFaq(2)}
//             >
//               <ul className="list-disc ml-5 text-base text-secondarytext">
//                 <li>Application Opens: Jan 10</li>
//                 <li>Deadline: Mar 30</li>
//               </ul>
//             </ProgramDetails>

//             <ProgramDetails
//               title="Required Documents"
//               isOpen={openIndex === 3}
//               onToggle={() => toggleFaq(3)}
//             >
//               <ul className="list-disc ml-5 text-base text-secondarytext">
//                 <li>Transcript</li>
//                 <li>Recommendation Letter</li>
//                 <li>English Proficiency</li>
//               </ul>
//             </ProgramDetails>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

'use client';
import { useState } from 'react';
import { Bookmark, ChevronRight, CircleCheck, Clock } from 'lucide-react';
import Button from '@/app/(components)/ui/Button';
import ProgramDetails from '@/app/(components)/ui/ProgramDetails';

const programs = [
  { id: 1, name: 'Computer Science', duration: '1–4 Year', courses: 560 },
  { id: 2, name: 'Business Analytics', duration: '1–4 Year', courses: 560 },
  { id: 3, name: 'Cyber Security', duration: '1–4 Year', courses: 560 },
  { id: 4, name: 'Automotive Engineering', duration: '1–4 Year', courses: 560 },
  { id: 5, name: 'MBA', duration: '1–4 Year', courses: 560 },
  { id: 6, name: 'Biology', duration: '1–4 Year', courses: 560 },
  {
    id: 7,
    name: 'Artificial Intelligence',
    duration: '1–4 Year',
    courses: 560,
  },
];

const relatedCourses = {
  'Computer Science': [
    { id: 1, title: 'Data Structures & Algorithms', duration: '6 Months' },
    { id: 2, title: 'Machine Learning', duration: '8 Months' },
    { id: 3, title: 'Web Development', duration: '1 Year' },
  ],
  'Business Analytics': [
    { id: 1, title: 'Data Visualization', duration: '6 Months' },
    { id: 2, title: 'Predictive Modeling', duration: '8 Months' },
  ],
  'Cyber Security': [
    { id: 1, title: 'Network Security', duration: '7 Months' },
    { id: 2, title: 'Ethical Hacking', duration: '1 Year' },
  ],
};

export default function ProgramPage({ isOpen }) {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleViewCourses = (programName) => {
    setSelectedProgram(programName);
    setSelectedCourse(null);
    setSearchTerm('');
  };

  const handleApply = (courseTitle) => {
    setSelectedCourse(courseTitle);
  };

  const handleBack = () => {
    if (selectedCourse) {
      setSelectedCourse(null);
    } else if (selectedProgram) {
      setSelectedProgram(null);
    }
    setSearchTerm('');
  };

  const filteredPrograms = programs.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const coursesList = relatedCourses[selectedProgram] || [];
  const filteredCourses = coursesList.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-[10px]  mb-5">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-secondarytext mb-6">
        <span
          onClick={() => {
            setSelectedProgram(null);
            setSelectedCourse(null);
          }}
          className="cursor-pointer font-inter font-semibold md:text-lg text-primarycolor  transition"
        >
          Programs
        </span>

        {selectedProgram && (
          <>
            <ChevronRight size={14} />
            <span
              onClick={() => setSelectedCourse(null)}
              className="cursor-pointer font-inter font-semibold md:text-lg text-primarycolor  transition"
            >
              {selectedProgram}
            </span>
            {selectedCourse ? <ChevronRight size={14} /> : ''}
            <span
              className={`${
                selectedCourse
                  ? 'cursor-pointer font-inter font-semibold md:text-lg text-[#C7044C] transition'
                  : 'cursor-pointer font-inter font-semibold md:text-lg text-[#C7044C] transition'
              }`}
            >
              {selectedCourse ? 'Details' : ''}
            </span>
          </>
        )}
      </div>

      {/* Conditional Rendering */}
      {!selectedProgram ? (
        // Programs Grid
        <div>
          {/* <div className="flex justify-between items-center mb-6">
            <h2 className="font-inter font-bold md:text-2xl text-primaryheading uppercase">
              List of Programs
            </h2>
            <div className="flex items-center gap-6">
              <input
                type="text"
                placeholder="Search program"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-[#F3F3F3] bg-[#F3F3F3] rounded-[4px] p-3 text-sm w-84"
              />
              <div className="font-inter font-semibold text-primaryheading text-base leading-5">
                120 Programs
              </div>
            </div>
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="p-5 rounded-[12px] border border-[#E3E3E3] drop-shadow-sm hover:shadow-md transition-all "
              >
                <h3 className="font-inter font-semibold text-lg text-primarycolor  leading-5">
                  {program.name}
                </h3>
                <p className="text-xs text-Lighttext font-inter font-medium mt-1">
                  Duration: {program.duration}
                </p>
                <div className="flex justify-end  mt-3">
                  <button
                    onClick={() => handleViewCourses(program.name)}
                    className="border border-[#C7044C] text-primarycolor  text-sm font-medium rounded-[6px] px-3 py-1.5 flex items-center gap-3 hover:bg-pink-50 transition-all"
                  >
                    <span>Courses:</span>
                    <span>{program.courses}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : !selectedCourse ? (
        // Courses Grid
        <div>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 mb-6">
            <h2 className="font-inter font-bold text-lg md:text-2xl text-primaryheading uppercase text-center md:text-left">
              Courses for {selectedProgram}
              <span className="text-[#C7044C]">: 120 Programs</span>
            </h2>

            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-6 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search course"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-[#F3F3F3] bg-[#F3F3F3] rounded-[4px] p-3 text-sm w-full md:w-84"
              />
            </div>
          </div>

          <Button text="Back to Programs" color="" onClick={handleBack} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="p-5 rounded-[12px] border border-[#E3E3E3] drop-shadow-sm hover:shadow-md transition-all"
              >
                <h4 className="font-inter font-semibold text-lg text-primarycolor  leading-5">
                  {course.title}
                </h4>
                <p className="text-xs text-Lighttext font-inter font-medium mt-1">
                  Duration: {course.duration}
                </p>
                <div className="flex justify-end mt-3">
                  {/* <button
                                        onClick={() => handleApply(course.title)}
                                        className="bg-pink-600 text-white text-xs font-medium rounded-lg px-3 py-1 hover:bg-pink-700 transition-all"
                                    >
                                        Apply
                                        
                                    </button> */}
                  <Button
                    text="Apply"
                    onClick={() => handleApply(course.title)}
                    cn={'!py-1 !bg-white !text-[#C7044C] !border-[#C7044C] !border-1'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Details Layout
        <div className="bg-white rounded-xl shadow-md p-6">
          <Button text="Back to Courses" color="" onClick={handleBack} />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-5 border bg-white rounded-[8px] drop-shadow-sm p-5 mb-5">
            <div>
              <h2 className="font-inter font-bold md:text-2xl text-primarycolor  leading-5 mb-2">
                {selectedProgram}
              </h2>
              <p className="text-xs text-Lighttext font-inter font-medium ">Duration: 1–4 Year</p>
            </div>
            <div className="flex md:flex-row gap-3 mt-3 md:mt-0">
              <Button text="Shortlist" icon={<Bookmark />} cn={' !p-3 '} bg={'bg-white border'} />

              <Button text="Apply Now" cn={'  !p-3 '} icon={<CircleCheck />} onClick={isOpen} />
            </div>
          </div>

          {/* Details Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Left Column */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <ProgramDetails
                title="Program Details"
                isOpen={openIndex === 0}
                onToggle={() => toggleFaq(0)}
              >
                <h3 className="font-semibold font-inter text-primaryheading md:text-lg mb-2">
                  Program Requirements
                </h3>
                <p className="text-base text-secondarytext leading-relaxed">Program Requirement</p>

                <h3 className="font-semibold font-inter text-primaryheading md:text-lg mt-3 mb-1">
                  Program Comments
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Program Comment</p>
              </ProgramDetails>

              <ProgramDetails
                title="Financial Detail"
                isOpen={openIndex === 1}
                onToggle={() => toggleFaq(1)}
              >
                <p className="text-base text-secondarytext">
                  Tuition fee and scholarships will be available soon.
                </p>
              </ProgramDetails>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 w-full">
              <ProgramDetails
                title="Important Dates"
                isOpen={openIndex === 2}
                onToggle={() => toggleFaq(2)}
              >
                <ul className="list-disc ml-5 text-base text-secondarytext">
                  <li>Application Opens: Jan 10</li>
                  <li>Deadline: Mar 30</li>
                </ul>
              </ProgramDetails>

              <ProgramDetails
                title="Required Documents"
                isOpen={openIndex === 3}
                onToggle={() => toggleFaq(3)}
              >
                <ul className="list-disc ml-5 text-base text-secondarytext">
                  <li>Transcript</li>
                  <li>Recommendation Letter</li>
                  <li>English Proficiency</li>
                </ul>
              </ProgramDetails>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
