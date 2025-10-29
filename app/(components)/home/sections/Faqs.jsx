'use client';
import { useState } from 'react';
import ProgramDetails from '../../ui/ProgramDetails';
import Button from '../../ui/Button';
import BlurText from '../../animation/blurtext/BlurText';

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We provide end-to-end support for students looking to study abroad — from course selection, applications, visa guidance, to post-admission support.',
  },
  {
    question: 'How do I find the right program for me?',
    answer:
      'Our expert counselors guide you in choosing the best-fit program based on your goals, background, and preferred study destinations.',
  },
  {
    question: 'Can you help with scholarships?',
    answer:
      'Yes! We help you identify and apply for scholarships based on your academic profile and destination.',
  },
  {
    question: 'Do you help with SOPs, LORs, and resumes?',
    answer:
      'Absolutely! Our team assists you in crafting professional SOPs, LORs, and resumes that enhance your application’s impact.',
  },
  {
    question: 'Is there a fee for your services?',
    answer:
      'We offer free initial consultations. Some specialized services may have minimal fees, which are transparently communicated upfront.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Only one open
  };

  return (
    <section className="mt-20 max-w-[1560px] mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="font-inter text-[#C7044C] text-sm font-semibold uppercase tracking-wide">
          FAQ’s
        </p>
        <p className="font-inter text-2xl md:text-[38px] font-bold leading-14 text-primaryheading mt-3">
          <BlurText
            text="STUDY ABROAD:WHAT YOU"
            className="inline-block mr-3"
            animateBy="words"
            direction="top"
            delay={150}
          />
          <BlurText
            text="NEED TO KNOW"
            className="inline-block text-[#C8102E]"
            animateBy="words"
            direction="top"
            delay={150}
          />
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 mx-5">
        {/* Left Column */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          {faqs.slice(0, 2).map((faq, index) => (
            <ProgramDetails
              key={index}
              title={faq.question}
              isOpen={openIndex === index} // index = 0 or 1
              onToggle={() => toggleFaq(index)}
            >
              <p className="text-base text-secondarytext leading-relaxed">{faq.answer}</p>
            </ProgramDetails>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 w-full">
          {faqs.slice(2).map((faq, index) => {
            const globalIndex = index + 2; // ✅ shift index
            return (
              <ProgramDetails
                key={globalIndex}
                title={faq.question}
                isOpen={openIndex === globalIndex}
                onToggle={() => toggleFaq(globalIndex)}
              >
                <p className="text-base text-secondarytext leading-relaxed">{faq.answer}</p>
              </ProgramDetails>
            );
          })}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="my-16 mx-5 bg-[#c8004b] text-white rounded-[4px] px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1560px] shadow-md">
        <div>
          <h3 className="text-3xl font-bold mb-2">Explore. Apply. Achieve. All in One Place</h3>
          <p className="font-medium text-white/90 text-xl max-w-xl">
            Discover top universities, apply with ease, and track your progress — all through one
            smart dashboard.
          </p>
        </div>
        <Button
          cn="!border-white !border hover:text-white"
          text="Sign Up Now!"
          color="text-[#C7044C]"
          bg="bg-white"
        />
      </div>
    </section>
  );
}
