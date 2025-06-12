import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Django Web Framework",
      issuer: "Meta (Coursera)",
      category: "Web Development"
    },
    {
      title: "Project Management Professional Certificate",
      issuer: "Google (Coursera)",
      category: "Management"
    },
    {
      title: "Professional Certificate in Agile and Scrum",
      issuer: "MTF Institute (Udemy)",
      category: "Management"
    },
    {
      title: "Product Management",
      issuer: "Great Learning Academy",
      category: "Management"
    },
    {
      title: "Ultimate Product Management Course: Build, Launch, Succeed",
      issuer: "Udemy",
      category: "Management"
    },
    {
      title: "Relationship Management and Business Development",
      issuer: "Coursera",
      category: "Business"
    },
    {
      title: "Crash Course Front-End Development (HTML, CSS, JavaScript)",
      issuer: "Great Learning Academy",
      category: "Web Development"
    },
    {
      title: "Prompt Engineering for ChatGPT",
      issuer: "Coursera",
      category: "AI/ML"
    },
    {
      title: "ChatGPT for Coders",
      issuer: "Great Learning Academy",
      category: "AI/ML"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Development': return 'from-blue-500 to-teal-500';
      case 'Management': return 'from-green-500 to-blue-500';
      case 'Business': return 'from-orange-500 to-red-500';
      case 'AI/ML': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${getCategoryColor(cert.category)}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(cert.category)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Award size={24} className="text-white" />
                  </div>
                  <span className={`bg-gradient-to-r ${getCategoryColor(cert.category)} text-white text-xs font-semibold px-2 py-1 rounded-full ml-2`}>
                    {cert.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{cert.title}</h3>
                <p className="text-blue-600 font-semibold text-sm">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;