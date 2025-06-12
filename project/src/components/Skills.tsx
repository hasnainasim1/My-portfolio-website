import React, { useEffect, useState } from 'react';
import { Code, Database, Brain, Globe } from 'lucide-react';

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateSkills(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      color: "from-blue-500 to-teal-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 88 },
        { name: "Node.js", level: 82 },
        { name: "Django", level: 80 },
        { name: "HTML/CSS", level: 92 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 78 }
      ]
    },
    {
      title: "Database & Backend",
      icon: Database,
      color: "from-green-500 to-blue-500",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "RESTful APIs", level: 88 },
        { name: "Authentication", level: 85 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Computer Vision", level: 82 },
        { name: "CNN", level: 80 },
        { name: "Vision Transformer", level: 78 },
        { name: "SVM", level: 85 },
        { name: "ResNet50", level: 76 }
      ]
    },
    {
      title: "Tools & Domains",
      icon: Globe,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Project Management", level: 88 },
        { name: "Product Management", level: 85 },
        { name: "Business Development", level: 82 },
        { name: "Prompt Engineering", level: 90 },
        { name: "OOP", level: 85 },
        { name: "Agile & Scrum", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-600 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: animateSkills ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;