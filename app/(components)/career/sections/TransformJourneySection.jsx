// import Button from '@/components/ui/Button'; // use your existing Button component

import Internships from '@/public/icons/Internships';
import Button from '../../ui/Button';
import Engagement from '@/public/icons/Engagement';
import FinTech from '@/public/icons/FinTech';
import Personalized from '@/public/icons/Personalized';
import LandingHeader from '../../ui/LandingHeader';
import LandingButton from '../../ui/LandingButton';

export default function TransformJourneySection() {
  const features = [
    {
      title: 'Personalized Roadmap',
      desc: 'Tailored skill-building aligned with your interests and academic progress.',
      icon: <Personalized />,
    },
    {
      title: 'Internships & Placement',
      desc: 'Guaranteed domain-specific internships plus step-by-step career support.',
      icon: <Internships />,
    },
    {
      title: 'AI-Driven Engagement',
      desc: '24/7 mentoring with coding simulations, problem-solving, and instant feedback.',
      icon: <Engagement />,
    },
    {
      title: 'FinTech',
      desc: 'Master in-demand tools and technologies—Data Science, Full Stack, DevOps, and more.',
      icon: <FinTech />,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-[#F9FAFF]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        {/* Left: Feature Cards */}
        <div className="grid col-span-2 grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              <div className="text-primarycolor  text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-lg text-Primarytext mb-2">{f.title}</h3>
              <p className="text-secondarytext text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Right: Text + Button */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-Primarytext mb-4 leading-snug">
            How <span className="text-primarycolor ">Get2Uni</span> Transforms Your Journey
          </h2>
          <p className="text-secondarytext mb-6">
            From day one, we equip you with the skills and opportunities that set you apart in the
            competitive tech landscape.
          </p>
          <div className="flex justify-center lg:justify-start">
            <LandingButton text="Get Started" bg="bg-white" color="text-primarycolor " />
          </div>
        </div>
      </div>
    </section>
  );
}
