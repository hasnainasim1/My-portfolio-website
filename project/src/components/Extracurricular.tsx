import React from 'react';
import { Users, Award, Calendar, Target, Lightbulb, Globe } from 'lucide-react';

const Extracurricular = () => {
  const achievements = [
    {
      title: "Technical Leadership",
      description: "Organized multiple technical workshops, seminars, and programming competitions",
      icon: Lightbulb
    },
    {
      title: "Industry-Academia Bridge",
      description: "Led initiatives to bridge the gap between academia and industry",
      icon: Globe
    },
    {
      title: "Event Management",
      description: "Hosted industry expert talks, networking sessions, and hackathons",
      icon: Target
    },
    {
      title: "Team Management",
      description: "Enhanced skills in team management, leadership, and communication",
      icon: Users
    },
    {
      title: "Innovation Culture",
      description: "Promoted culture of innovation and continuous learning within the university",
      icon: Award
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership & Extracurricular</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 h-2"></div>
            
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mr-6">
                  <Users size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Vice President</h3>
                  <p className="text-lg text-blue-600 font-semibold">UET ACM Student Chapter</p>
                  <div className="flex items-center text-gray-600 mt-2">
                    <Calendar size={16} className="mr-2 text-blue-500" />
                    <span>2023 – 2024</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Served as Vice President of the UET ACM Student Chapter, part of the globally recognized 
                  Association for Computing Machinery (ACM) network. Actively collaborated with tech communities 
                  to promote a culture of innovation and continuous learning within the university.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Enhanced my skills in team management, public relations, leadership, communication, 
                  event organization, and strategic planning through various initiatives and projects.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                        <achievement.icon size={16} className="text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">{achievement.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;