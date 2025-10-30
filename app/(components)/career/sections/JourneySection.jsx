import { TrendingUp, Users, Code } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
export default function JourneySection() {
  const stats = [
    {
      id: 1,
      // icon: <TrendingUp className="w-8 h-8 text-primarycolor" />,
      number: '10+',
      title: 'Key Domains Engaged',
    },
    {
      id: 2,
      // icon: <Users className="w-8 h-8 text-primarycolor" />,
      number: '100+',
      title: "Candidate's",
    },
    {
      id: 3,
      // icon: <Code className="w-8 h-8 text-primarycolor" />,
      number: '10+',
      title: 'Technical competencies Addressed',
    },
  ];

  return (
    <section className="bg-white py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Driven to Succeed, Here's <br /> the Journey So Far
      </h2>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-around gap-12">
        {stats.map((item) => (
          <div key={item.id} className="flex flex-col items-center space-y-2">
            {item.icon}
            <h3 className="text-3xl font-bold text-primarycolor">{item.number}</h3>
            <p className="text-secondarytext text-sm md:text-base">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center">
        <button className="mt-8 flex flex-row items-center justify-center px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 font-medium transition">
          Show Insights
          <span className="ml-1">
            <ChevronDown />
          </span>
        </button>
      </div>
    </section>
  );
}
