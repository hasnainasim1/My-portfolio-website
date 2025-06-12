import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    const mailtoLink = `mailto:hasnainasim799@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hasnainasim799@gmail.com",
      href: "mailto:hasnainasim799@gmail.com",
      color: "from-blue-500 to-teal-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 311 6729074",
      href: "tel:+923116729074",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/muhammad-hasnain-asim-321937235/",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/hasnainasim1",
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you're looking for a software engineer, AI/ML developer, or full-stack developer, 
                I'd love to hear from you. Let's discuss how we can work together to create something amazing.
              </p>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin size={20} className="mr-3 text-blue-500" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-200 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200`}>
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{info.label}</p>
                    <p className="text-gray-600 text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Send a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="What would you like to discuss?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;