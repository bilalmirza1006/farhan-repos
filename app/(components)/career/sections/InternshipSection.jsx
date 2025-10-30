import Development from '@/public/icons/Development';
import Devops from '@/public/icons/Devops';
import Engineering from '@/public/icons/Engineering';
import Machine from '@/public/icons/Machine';
import Sale from '@/public/icons/Sale';
import Tech from '@/public/icons/Tech';
import { Code, Cpu, Network, Brain, ServerCog, Landmark } from 'lucide-react';
import Button from '../../ui/Button';
import LandingHeader from '../../ui/LandingHeader';
import Link from 'next/link';

const internships = [
  {
    icon: <Engineering />,
    title: 'Data Engineering',
    desc: 'Work with large datasets, ETL processes, and data pipelines.',
  },
  {
    icon: <Development />,
    title: 'Full Stack Development',
    desc: 'Build complete web applications with front-end and back-end technologies.',
  },
  {
    icon: <Sale />,
    title: 'Sales Force',
    desc: 'Develop solutions on the world’s leading CRM platform.',
  },
  {
    icon: <Machine />,
    title: 'AI & Machine Learning',
    desc: 'Create intelligent systems and predictive models.',
  },
  {
    icon: <Devops />,
    title: 'DevOps',
    desc: 'Streamline development processes and manage cloud infrastructure.',
  },
  {
    icon: <Tech />,
    title: 'FinTech',
    desc: 'Develop innovative solutions for the financial technology sector.',
  },
];

export default function InternshipSection() {
  return (
    <section id="exploreuni" className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-Primarytext mb-4">
        100% Internship Guarantee
      </h2>
      <p className="text-secondarytext max-w-2xl mx-auto mb-12">
        Explore real-world domains like Data Engineering, Full Stack, Salesforce, and more. Our
        4-month internships give you on-the-job exposure, culminating in a portfolio that impresses
        future employers.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {internships.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6
            text-left hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-Primarytext mb-2">{item.title}</h3>
            <p className="text-secondarytext font-medium text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <p className="text-secondarytext mt-10">
        Get direct industry insights, networking opportunities, and build confidence in your chosen
        field.
      </p>

      <div className="w-full  mt-6 flex items-center justify-center">
        <Link href="/">  <LandingHeader text={' Get Started'} /></Link>
      </div>
    </section>
  );
}
