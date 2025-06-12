import React from 'react';
import { Globe2 } from 'lucide-react';

const Languages = () => {
  const languages = [
    {
      name: "English",
      proficiency: "Professional Working Proficiency",
      level: 85,
      color: "from-blue-500 to-teal-500"
    },
    {
      name: "Urdu",
      proficiency: "Native or Bilingual Proficiency",
      level: 100,
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Languages</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {languages.map((language, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-8"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${language.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Globe2 size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{language.name}</h3>
                  <p className="text-gray-600 mb-4">{language.proficiency}</p>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div
                      className={`h-3 bg-gradient-to-r ${language.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${language.level}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-600 text-sm font-semibold">{language.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;