import React from 'react';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Muhammad Hasnain Asim
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Computer Engineering student passionate about building innovative solutions 
                through AI, machine learning, and full-stack development. Always ready to 
                tackle new challenges and create meaningful impact.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:hasnainasim799@gmail.com"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/muhammad-hasnain-asim-321937235/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/hasnainasim1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(`#${item.toLowerCase()}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Core Skills</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Full-Stack Development</li>
                <li>AI & Machine Learning</li>
                <li>MERN Stack</li>
                <li>Python & Django</li>
                <li>Project Management</li>
                <li>Team Leadership</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Muhammad Hasnain Asim. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Built with <Heart size={16} className="mx-2 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;