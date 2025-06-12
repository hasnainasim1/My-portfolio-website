import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Circle */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-4xl font-bold shadow-xl">
            MHA
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Muhammad Hasnain Asim
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Computer Engineering Student & Full-Stack Developer
          </p>
          
          <div className="flex items-center justify-center text-blue-200 mb-8">
            <MapPin size={20} className="mr-2" />
            <span>University of Engineering and Technology (UET) Lahore, Pakistan</span>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-blue-100 leading-relaxed">
              I'm a passionate and results-driven Computer Engineering student at UET Lahore, Pakistan's largest and most prestigious engineering university. With a strong background in software engineering, AI/ML, and full-stack web development, I love building tech solutions that deliver real-world impact.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:hasnainasim799@gmail.com"
              className="flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-200"
            >
              <Mail size={20} className="mr-2" />
              Get In Touch
            </a>
            <a
              href="https://linkedin.com/in/muhammad-hasnain-asim-321937235/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 border-2 border-white hover:bg-white hover:text-blue-900 text-white rounded-lg transition-all duration-200"
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/hasnainasim1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 border-2 border-white hover:bg-white hover:text-blue-900 text-white rounded-lg transition-all duration-200"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-blue-200 font-medium">
              Open to software engineering, AI/ML, and full-stack roles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;