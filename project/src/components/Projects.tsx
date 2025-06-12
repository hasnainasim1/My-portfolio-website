import React from 'react';
import { ExternalLink, Github, Brain, ShoppingCart, MessageCircle, Video, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Surgical Hand: AI & EMG for Fatigue Analysis",
      description: "Final Year Project where I led the development of an AI system that collects EMG sensor data pre- and post-surgery from robotic surgeons and classifies muscle fatigue levels using SVM AI/ML models.",
      icon: Brain,
      tech: ["AI/ML", "SVM", "EMG Sensors", "Python"],
      color: "from-blue-500 to-purple-600",
      badge: "FYP - Group Leader"
    },
    {
      title: "Alzheimer's Classification",
      description: "Built AI models using Vision Transformer (VIT) architectures (base 16/32/64) and ResNet50 for classifying brain segments to detect Alzheimer's disease patterns.",
      icon: Brain,
      tech: ["Vision Transformer", "ResNet50", "Medical Imaging", "Python"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "One Book Ahead (E-Commerce App)",
      description: "Developed a comprehensive MERN stack e-commerce website with complete authentication, authorization, and SQL database integration for inventory and user management.",
      icon: ShoppingCart,
      tech: ["MERN Stack", "SQL", "Authentication", "E-commerce"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Disease Prediction Chatbot",
      description: "Developed an intelligent chatbot that predicts diseases based on user-input symptoms using advanced AI models implemented in Python.",
      icon: MessageCircle,
      tech: ["Python", "AI Models", "Symptom Analysis", "Chatbot"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Netflix Clone",
      description: "Created a responsive Netflix clone using Django with multi-profile support, user authentication, and comprehensive movie management system.",
      icon: Video,
      tech: ["Django", "Authentication", "Responsive Design", "Media Management"],
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Web Pages Portfolio",
      description: "Converted multiple Figma UI designs into fully functional and responsive web interfaces using modern HTML, CSS, and JavaScript techniques.",
      icon: Code,
      tech: ["HTML", "CSS", "JavaScript", "Figma to Code", "Responsive Design"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  {project.badge && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {project.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;