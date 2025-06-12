import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Junior MERN Stack Developer",
      company: "Single Solution",
      location: "Lahore, Pakistan",
      period: "Jan 2025 – Apr 2025",
      description: [
        "Developed responsive web interfaces using HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, ReactJS",
        "Collaborated in a fast-paced team environment to deliver high-performance web components"
      ],
      color: "from-blue-500 to-teal-500"
    },
    {
      title: "Software Development Intern",
      company: "BlocBelt",
      location: "Lahore, Pakistan",
      period: "July 2024 – Oct 2024",
      description: [
        "Led a team of interns to build a fully-functional MERN stack web app",
        "Integrated Google/Facebook OAuth 2.0 authentication using Passport.js and JWT",
        "Developed an admin dashboard for user and inventory management",
        "Enhanced app UX through Framer Motion animations"
      ],
      color: "from-teal-500 to-green-500"
    },
    {
      title: "AI Research Intern",
      company: "AIRL - Al-Khawarizmi Institute of Computer Science (KICS)",
      location: "Lahore, Pakistan",
      period: "Dec 2023 – Jan 2024",
      description: [
        "Worked on medical imaging projects using CNN and Vision Transformer (VIT) architectures",
        "Conducted brain resection cavity segmentation and supervised dataset annotation"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center mr-6`}>
                      <Briefcase size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-sm space-y-2 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-blue-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-blue-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;