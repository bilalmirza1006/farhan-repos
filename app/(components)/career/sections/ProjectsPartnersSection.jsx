export default function ProjectsPartnersSection() {
  const projects = [
    {
      title: 'Samastha',
      tech: 'Machine Learning, Python, Fast API',
      desc: 'AI-driven career guidance system integrated with AI counseling.',
    },
    {
      title: 'eTutorConnect',
      tech: 'Django, PostgreSQL, AWS',
      desc: 'Automated grading and personalized tutoring platform.',
    },
    {
      title: 'ELP Test Prep',
      tech: 'Vue.js, Firebase, Express',
      desc: 'Real-time test simulations for IELTS, TOEFL, and more.',
    },
    {
      title: 'AI-Tailored LMS',
      tech: 'Next.js, TensorFlow, MongoDB',
      desc: 'End-to-end solution for interactive coding and mentorship.',
    },
    {
      title: 'Career Accelerator Program',
      tech: 'React, TypeScript, GraphQL',
      desc: 'AI-powered approach seamlessly integrated with academic schedules.',
    },
    {
      title: 'Visa Mock Interview System',
      tech: 'NLP, React, Node.js',
      desc: 'AI-driven platform for realistic visa interview preparation.',
    },
    {
      title: 'And More!',
      tech: '',
      desc: 'More partner projects are continuously added, diversifying tech stacks and industries.',
    },
  ];

  const firstRow = projects.slice(0, 4);
  const secondRow = projects.slice(4, 7);

  return (
    <section className="py-16 px-6 md:px-20 bg-[#F5F8FF] text-center">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-Primarytext mb-4">
        Real-Time <br /> <span className="text-primarycolor">Projects & Partners</span>
      </h2>
      <p className="text-secondarytext max-w-2xl mx-auto mb-12">
        Work on industry-relevant projects that build your portfolio and demonstrate your
        capabilities to future employers.
      </p>

      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   rounded-2xl overflow-hidden">
        {firstRow.map((p, i) => (
          <div
            key={i}
            className={`p-6 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors duration-300 
              ${i !== 0 ? 'border-l' : ''}`}
          >
            <h3 className="font-semibold text-xl text-Primarytext mb-1">{p.title}</h3>
            {p.tech && <p className="text-primarycolor text-xs font-semibold mb-2">{p.tech}</p>}
            <p className="text-secondarytext text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  rounded-b-2xl overflow-hidden">
        {secondRow.map((p, i) => (
          <div
            key={i}
            className={`p-6 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors duration-300 
              ${i !== 0 ? 'border-l' : ''}`}
          >
            <h3 className="font-semibold text-lg text-Primarytext mb-1">{p.title}</h3>
            {p.tech && <p className="text-primarycolor text-sm font-medium mb-2">{p.tech}</p>}
            <p className="text-secondarytext text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
