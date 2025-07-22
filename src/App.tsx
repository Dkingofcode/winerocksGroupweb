import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Linkedin, Twitter, Github, ArrowRight, Users, Brain, Zap, Target, Shield, Heart, Calendar, Shirt, Puzzle } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const projects = [
    {
      name: 'VeriQPro',
      description: 'A smart product authentication system leveraging QR technology to fight counterfeiting across the FMCG sector. We\'re making trust traceable.',
      category: 'Authentication & Trust',
      icon: Shield,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'MenCounty',
      description: 'An anonymous emotional wellness community for married men. Built with behavioral nudges, it empowers men to vent, heal, and connect—without pressure.',
      category: 'Wellness & Community',
      icon: Heart,
      color: 'from-rose-500 to-pink-600'
    },
    {
      name: 'Nextvibe',
      description: 'Event tech reimagined. Nextvibe helps organizers engage attendees through real-time gamified experiences, turning events into dynamic content engines.',
      category: 'Event Technology',
      icon: Calendar,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Rewatan',
      description: 'Fashion meets behavioral patterns. Rewatan is a clothing line with a smart fit model and brand culture designed for the upwardly mobile African man.',
      category: 'Fashion & Lifestyle',
      icon: Shirt,
      color: 'from-amber-500 to-orange-600'
    },
    {
      name: 'TheBuzzle',
      description: 'Gamification meets recycling. We\'ve built national-scale gamified puzzle systems that drive repeat purchases, eco-responsibility, and brand engagement using behavioral triggers.',
      category: 'Gamification & Sustainability',
      icon: Puzzle,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Inter'] overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
           <div className="flex items-center gap-2 text-2xl font-black tracking-tight">
  <img src="/winerockslogo.jpeg" alt="Winerocks Logo" className="h-10 w-10 object-contain" />
  <div>
    <span className="text-burgundy-800">Winerocks</span>{' '}
    <span className="text-gray-900 font-light">Group</span>
  </div>
</div>

            <div className="hidden md:flex space-x-12">
              <a href="#about" className="text-gray-700 hover:text-burgundy-800 transition-all duration-300 font-medium tracking-wide hover:scale-105">About</a>
              <a href="#portfolio" className="text-gray-700 hover:text-burgundy-800 transition-all duration-300 font-medium tracking-wide hover:scale-105">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-burgundy-800 transition-all duration-300 font-medium tracking-wide hover:scale-105">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Cinematic */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-burgundy-900 to-black text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-burgundy-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium tracking-wide mb-8">
              Behavioral Economics × Innovation
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight mb-8">
              Where Human
              <br />
              <span className="bg-gradient-to-r from-burgundy-400 to-rose-400 bg-clip-text text-transparent">
                Behavior
              </span>
              <br />
              Meets Innovation
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
              We build with behavioral economics at our core—blending deep human insights 
              with innovative technology to design systems that work with human nature, not against it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="group bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white px-10 py-5 rounded-2xl font-semibold hover:from-burgundy-500 hover:to-burgundy-600 transition-all duration-500 flex items-center justify-center shadow-2xl hover:shadow-burgundy-500/25 hover:scale-105">
                Explore Our Journey
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-semibold hover:border-white hover:bg-white/10 transition-all duration-500 backdrop-blur-sm hover:scale-105">
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section - Storytelling Journey */}
      <section id="about" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Opening Statement */}
          <div className="text-center mb-24">
            <div className="inline-block px-8 py-4 bg-burgundy-50 rounded-full text-burgundy-800 font-semibold mb-8 tracking-wide">
              Our Philosophy
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-12 leading-tight">
              Where Human Behavior
              <br />
              <span className="text-burgundy-800">Meets Innovation</span>
            </h2>
          </div>

          {/* Story Flow */}
          <div className="space-y-24">
            {/* Belief Statement */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-burgundy-600 to-rose-500"></div>
                <p className="text-2xl md:text-3xl leading-relaxed text-gray-800 font-light">
                  At Winerocks Group, we believe the key to solving some of the world's most persistent challenges 
                  lies not just in technology, but in <span className="font-semibold text-burgundy-800">understanding people</span>.
                </p>
              </div>
            </div>

            {/* Core Approach */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                  Behavioral Economics
                  <br />
                  <span className="text-burgundy-800">Is Our Innovation DNA</span>
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  That's why we build with behavioral economics at our core—blending deep human insights 
                  with innovative technology to design systems that work with human nature, not against it.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From supply chains to decision flows, we explore how people think, choose, delay, 
                  resist, engage—and then design solutions that guide them toward better outcomes.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-burgundy-800 to-burgundy-900 rounded-3xl p-12 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                  <div className="relative z-10">
                    <Brain className="h-16 w-16 mb-8 text-burgundy-200" />
                    <h4 className="text-2xl font-bold mb-6">Small Nudges, Big Shifts</h4>
                    <p className="text-burgundy-100 leading-relaxed">
                      Our strategy is rooted in the idea that small nudges can create big shifts. 
                      Whether it's increasing supply chain efficiency, driving adoption of new platforms, 
                      or simplifying complex operations, we bring empathy and science to the table.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-burgundy-200 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-burgundy-600 to-burgundy-700 rounded-2xl p-6 w-20 h-20 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Human-Centered Design</h4>
                <p className="text-gray-600 leading-relaxed">
                  Every solution begins with understanding human psychology, motivations, and behavioral patterns.
                </p>
              </div>
              
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-burgundy-200 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 w-20 h-20 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Behavior-Aware Systems</h4>
                <p className="text-gray-600 leading-relaxed">
                  Technology that adapts to human behavior, creating seamless experiences that feel natural.
                </p>
              </div>
              
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-burgundy-200 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 w-20 h-20 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Scalable Impact</h4>
                <p className="text-gray-600 leading-relaxed">
                  Solutions designed to create ripple effects, transforming entire industries through behavioral insights.
                </p>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="text-center bg-gradient-to-r from-gray-900 to-burgundy-900 rounded-3xl p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
              <div className="relative z-10 max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  We don't just innovate.
                  <br />
                  <span className="text-burgundy-300">We design behavior-aware ecosystems that transform how industries work.</span>
                </h3>
                <p className="text-xl text-white/80 leading-relaxed">
                  Welcome to Winerocks Group—where behavioral science powers real-world innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Interactive Showcase */}
      <section id="portfolio" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-8 py-4 bg-burgundy-50 rounded-full text-burgundy-800 font-semibold mb-8 tracking-wide">
              Our Portfolio
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              What We've Been
              <br />
              <span className="text-burgundy-800">Building</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Winerocks Group, our portfolio reflects our commitment to practical innovation, 
              powered by behavioral economics and tech-enabled intelligence.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-burgundy-200 cursor-pointer overflow-hidden hover:-translate-y-4"
                  onMouseEnter={() => setActiveProject(index)}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`bg-gradient-to-br ${project.color} rounded-2xl p-6 w-20 h-20 mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Category */}
                    <div className="text-sm font-semibold text-burgundy-600 mb-3 tracking-wide uppercase">
                      {project.category}
                    </div>
                    
                    {/* Project Name */}
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-burgundy-800 transition-colors duration-300">
                      {project.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    {/* Learn More */}
                    <div className="flex items-center text-burgundy-600 font-semibold group-hover:text-burgundy-700 transition-colors duration-300">
                      <span>Explore Project</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-burgundy-200 transition-colors duration-500"></div>
                </div>
              );
            })}
          </div>

          {/* Portfolio Footer */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-gray-50 to-burgundy-50 rounded-2xl p-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Each product is more than a solution
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                It's a <span className="font-semibold text-burgundy-800">behavior-shifting experience</span>, 
                engineered to influence outcomes at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Premium Form */}
      <section id="contact" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-8 py-4 bg-burgundy-50 rounded-full text-burgundy-800 font-semibold mb-8 tracking-wide">
              Let's Connect
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Ready to Build Something
              <br />
              <span className="text-burgundy-800">Extraordinary?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Let's explore how behavioral economics can transform your business. 
              Share your vision, and we'll show you what's possible.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-burgundy-600 to-rose-500"></div>
            
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 tracking-wide uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-burgundy-500 focus:border-burgundy-500 transition-all duration-300 text-lg"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 tracking-wide uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-burgundy-500 focus:border-burgundy-500 transition-all duration-300 text-lg"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-burgundy-500 focus:border-burgundy-500 transition-all duration-300 text-lg resize-none"
                  placeholder="Tell us about your project, challenges, or vision..."
                  required
                ></textarea>
              </div>
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="group bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white px-12 py-5 rounded-2xl font-bold hover:from-burgundy-500 hover:to-burgundy-600 transition-all duration-500 flex items-center justify-center mx-auto shadow-2xl hover:shadow-burgundy-500/25 hover:scale-105 text-lg"
                >
                  Start the Conversation
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer - Sophisticated */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div className="space-y-8">
              <div className="text-4xl font-black tracking-tight">
                <span className="text-burgundy-400">Winerocks</span>
                <span className="text-white font-light">Group</span>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Where human behavior meets innovation. Building smart, scalable solutions 
                powered by behavioral economics across multiple industries.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="group bg-white/10 p-4 rounded-xl hover:bg-burgundy-600 transition-all duration-300 hover:scale-110">
                  <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="group bg-white/10 p-4 rounded-xl hover:bg-burgundy-600 transition-all duration-300 hover:scale-110">
                  <Twitter className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="group bg-white/10 p-4 rounded-xl hover:bg-burgundy-600 transition-all duration-300 hover:scale-110">
                  <Github className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-bold mb-6 text-burgundy-300">Company</h4>
                <ul className="space-y-4 text-gray-300">
                  <li><a href="#about" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">About Us</a></li>
                  <li><a href="#portfolio" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Portfolio</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-6 text-burgundy-300">Connect</h4>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center group">
                    <Mail className="h-5 w-5 mr-3 text-burgundy-400 group-hover:scale-110 transition-transform" />
                    <a href="mailto:hello@winerocks.com" className="hover:text-white transition-colors">hello@winerocks.com</a>
                  </li>
                  <li className="flex items-center group">
                    <Phone className="h-5 w-5 mr-3 text-burgundy-400 group-hover:scale-110 transition-transform" />
                    <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-12 text-center">
            <p className="text-gray-400 text-lg">
              &copy; 2024 Winerocks Group. All rights reserved. 
              <span className="text-burgundy-400 ml-2">Behavioral Science × Innovation</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;