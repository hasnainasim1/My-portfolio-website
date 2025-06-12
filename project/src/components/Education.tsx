import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const coursework = [
    'Data Structures & Algorithms',
    'Artificial Intelligence',
    'Software Engineering',
    'Object-Oriented Programming',
    'Database Management',
    'Machine Learning',
    'Operating Systems',
    'Introduction to Computing',
    'Project Management',
    'Computer Networks',
    'Data Mining'
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                  <GraduationCap size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">BSc Computer Engineering</h3>
                  <p className="text-lg text-blue-600 font-semibold">University of Engineering and Technology (UET) Lahore</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center text-gray-600">
                  <Calendar size={20} className="mr-3 text-blue-500" />
                  <span>Nov 2021 – Present</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <BookOpen size={20} className="mr-3 text-blue-500" />
                  <span>CGPA: 3.202</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Relevant Coursework:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {coursework.map((course, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors duration-200"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;