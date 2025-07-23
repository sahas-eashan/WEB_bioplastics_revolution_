import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Heart, Users, Globe, Lightbulb, Target, Recycle, Waves, TreePine, Beaker, Megaphone, User } from 'lucide-react';
import { useInView } from 'react-intersection-observer';


export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredMember, setHoveredMember] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

const teamMembers = [
  {
    id: 1,
    name: "Demitha Manawadu",
    role: " Co-Founder & CEO",
    description: "Overseeing strategy and leadership while driving the company’s mission.",
    icon: <Beaker className="w-6 h-6" />,
    color: "from-green-400 to-emerald-600",
    bgColor: "bg-green-100",
    profileImage: "images/demitha.avif",
    backgroundImage: "images/demitha.avif",
    position: { top: '30%', left: '5%', transform: 'translate(-80%, -50%)' }
  },
  {
    id: 2,
    name: "Banuka Liyanage",
    role: "Co-Founder & Business Analyst",
    description: "Responsible for analyzing market trends and aligning business strategies.",
    icon: <Waves className="w-6 h-6" />,
    color: "from-blue-400 to-cyan-600",
    bgColor: "bg-blue-100",
    profileImage: "images/banuka.avif",
    backgroundImage: "images/banuka.avif",
    position: { top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }
  },
  {
    id: 3,
    name: "Benuri Edirisinghe",
    role: "Co-Founder & Researcher",
    description: "Conducts in-depth scientific research to develop.",
    icon: <Megaphone className="w-6 h-6" />,
    color: "from-purple-400 to-violet-600",
    bgColor: "bg-purple-100",
    profileImage: "images/benuri.avif",
    backgroundImage: "images/benuri.avif",
    position: { top: '30%', left: '95%', transform: 'translate(-20%, -50%)' }
  },
  {
    id: 4,
    name: "Sahas Eashan",
    role: "Co-Founder & Technical Lead",
    description: "Leads product development and integrates innovative technology into sustainable design.",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-100",
    profileImage: "./images/sahas%20eashan.avif",
    backgroundImage: "./images/sahas%20eashan.avif",
    position: { top: '75%', left: '25%', transform: 'translate(-50%, -50%)' }
  },
  {
    id: 5,
    name: "Ridmini Hasari",
    role: "Co-Founder & Researcher",
    description: "Explores sustainable materials and their applications.",
    icon: <TreePine className="w-6 h-6" />,
    color: "from-teal-400 to-green-600",
    bgColor: "bg-teal-100",
    profileImage: "images/hasari.avif",
    backgroundImage: "images/hasari.avif",
    position: { top: '75%', left: '75%', transform: 'translate(-50%, -50%)' }
  }
];


  const getCardStyle = (member) => {
    const isHovered = hoveredMember === member.id;
    const baseStyle = {
      position: 'absolute',
      ...member.position,
      transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      zIndex: isHovered ? 50 : 10
    };

    if (isHovered) {
      baseStyle.transform = `${member.position.transform || ''} scale(1.15) rotate(${Math.sin(Date.now() * 0.001) * 2}deg)`;
    }

    return baseStyle;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-300/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-300/20 rounded-full animate-ping"></div>
        
        <div className={`relative max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <Leaf className="w-16 h-16 mx-auto text-green-600 animate-spin-slow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We are a team of passionate innovators addressing plastic pollution by creating revolutionary biodegradable seaweed-based alternatives for a sustainable future.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-green-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Our <span className="text-green-600">Vision</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Through innovative seaweed-based solutions, we're revolutionizing how the world thinks about packaging and single-use materials. Our biodegradable alternatives don't just replace plastic – they actively contribute to ocean health.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                    <Recycle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">100% Biodegradable</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                    <Waves className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-800 font-medium">Ocean Positive</span>
                  </div>
                </div>
              </div>
              
              {/* Mission Image */}
              <div className="relative group">
                <img 
                  src="images/mission-photo.jpg"
                  alt="Our mission in action - seaweed research and development"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-80 bg-gradient-to-br from-green-200 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                    src="images/mision.avif"
                    alt="Our Mission"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-gray-700 mt-4 font-medium">
                  Healthy Oceans, Sustainable Futures
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-100/50 to-blue-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-blue-600">Values</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Sustainability</h3>
              <p className="text-gray-600 text-center">Every solution we create prioritizes long-term environmental health and regenerative practices.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Innovation</h3>
              <p className="text-gray-600 text-center">We push boundaries with cutting-edge research and creative problem-solving approaches.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-purple-400 to-violet-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Community</h3>
              <p className="text-gray-600 text-center">Building partnerships and engaging communities to amplify our environmental impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Team Section - Connected Mirror Plates */}
      <section ref={sectionRef} className="py-16 px-4 relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          {/* Subtle Light Rays */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent transform skew-y-12"></div>
          
          {/* Floating Particles */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 8}s`
              }}
            />
          ))}
          
          {/* Dynamic Light Effect */}
          <div
            className="absolute w-96 h-96 bg-gradient-radial from-white/5 via-cyan-400/5 to-transparent rounded-full pointer-events-none transition-all duration-700 ease-out"
            style={{
              left: mousePos.x - 192,
              top: mousePos.y - 192,
            }}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Visionaries</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Five minds reflecting brilliance, united in one shining vision
            </p>
          </div>

          {/* Connected Mirror Plates */}
          <div className="max-w-6xl mx-auto perspective-2000">
            <div className="flex justify-center">
              <div className="relative flex">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredMember(member.id)}
                    onMouseLeave={() => setHoveredMember(null)}
                    style={{
                      marginLeft: index > 0 ? '-2px' : '0',
                      zIndex: hoveredMember === member.id ? 50 : 10 + index
                    }}
                  >
                    {/* Trapezoid Mirror Plate */}
                    <div 
                      className={`
                        relative mirror-plate transform-gpu transition-all duration-700 ease-out
                        ${hoveredMember === member.id 
                          ? 'scale-105 translate-y-2 shadow-2xl shadow-cyan-500/30' 
                          : 'hover:scale-102 hover:translate-y-1'
                        }
                      `}
                      style={{
                        width: '240px',
                        height: '400px',
                        clipPath: 'polygon(15% 0%, 85% 0%, 95% 100%, 5% 100%)',
                        background: `
                          linear-gradient(135deg, 
                            rgba(255,255,255,0.15) 0%, 
                            rgba(255,255,255,0.05) 50%, 
                            rgba(255,255,255,0.1) 100%
                          )
                        `,
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      {/* Individual Team Member Photo Background */}
                      <div 
                        className="absolute inset-0 opacity-60"
                        style={{ clipPath: 'inherit' }}
                      >
                        {member.backgroundImage ? (
                          <img 
                            src={member.backgroundImage}
                            alt={`${member.name} background`}
                            className="w-full h-full object-cover"
                            style={{ clipPath: 'inherit' }}
                            onError={(e) => {
                              // Fallback to gradient if image doesn't load
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                        ) : null}
                        {/* Fallback gradient background */}
                        <div 
                          className="w-full h-full bg-cover bg-center"
                          style={{
                            backgroundImage: `linear-gradient(135deg, ${member.color.replace('from-', '').replace(' to-', ', ')})`,
                            clipPath: 'inherit',
                            display: member.backgroundImage ? 'none' : 'block'
                          }}
                        >
                          {/* Photo Placeholder */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white/50">
                              <User className="w-16 h-16 mx-auto mb-2 opacity-60" />
                              <p className="text-sm font-medium">{member.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Colorful Border Separator */}
                      {index < teamMembers.length - 1 && (
                        <div 
                          className="absolute top-0 right-0 w-1 h-full z-20"
                          style={{
                            background: `linear-gradient(to bottom, 
                              #22d3ee 0%, 
                              #a855f7 33%, 
                              #ec4899 66%, 
                              #f59e0b 100%
                            )`,
                            boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
                            filter: 'blur(0.5px)'
                          }}
                        />
                      )}

                      {/* Glass Shine Effect */}
                      <div 
                        className="absolute inset-0 shine-effect opacity-60"
                        style={{
                          background: `
                            linear-gradient(45deg, 
                              transparent 30%, 
                              rgba(255,255,255,0.3) 50%, 
                              transparent 70%
                            )
                          `,
                          clipPath: 'inherit',
                          animation: 'shine 4s ease-in-out infinite',
                          animationDelay: `${index * 0.5}s`
                        }}
                      />

                      {/* Content Layer */}
                      <div className="relative h-full p-8 flex flex-col justify-between text-center z-10">
                        
                        {/* Top Section */}
                        <div className="flex-1 flex flex-col items-center justify-center">
                          {/* Profile Image Area */}

                          
                          {/* Name */}
                          <h3 className="text-lg font-bold text-white mb-2 transition-all duration-300 drop-shadow-lg">
                            {member.name}
                          </h3>
                          
                          {/* Role */}
                          <p className="text-sm text-gray-200 font-medium leading-tight px-2 text-shadow">
                            {member.role}
                          </p>
                        </div>
                        
                        {/* Bottom Section - Expandable Description */}
                        <div className={`
                          transition-all duration-500 overflow-hidden
                          ${hoveredMember === member.id 
                            ? 'max-h-24 opacity-100 transform translate-y-0' 
                            : 'max-h-0 opacity-0 transform translate-y-4'
                          }
                        `}>
                          <div className="border-t border-white/30 pt-3 mt-3">
                            <p className="text-xs text-gray-300 leading-relaxed">
                              {member.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className={`
                        absolute inset-0 transition-opacity duration-300
                        bg-gradient-to-br ${member.color} 
                        ${hoveredMember === member.id ? 'opacity-20' : 'opacity-0'}
                      `} 
                      style={{ clipPath: 'inherit' }} />

                      {/* Mirror Reflection */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none"
                        style={{ clipPath: 'inherit' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>

        {/* Advanced Custom CSS */}
        <style jsx>{`
          .perspective-2000 {
            perspective: 2000px;
          }
          
          .mirror-plate {
            transform-style: preserve-3d;
          }
          
          .text-shadow {
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          }
          
          @keyframes shine {
            0% { 
              transform: translateX(-100%) skewX(-15deg); 
              opacity: 0;
            }
            50% { 
              transform: translateX(0%) skewX(-15deg); 
              opacity: 1;
            }
            100% { 
              transform: translateX(100%) skewX(-15deg); 
              opacity: 0;
            }
          }
          
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg); 
              opacity: 0.4;
            }
            50% { 
              transform: translateY(-20px) rotate(180deg); 
              opacity: 0.8;
            }
          }
          
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          
          .bg-gradient-radial {
            background: radial-gradient(circle, var(--tw-gradient-stops));
          }
          
          /* Enhance glass effect */
          .mirror-plate::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
            clip-path: inherit;
          }
        `}</style>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-green-200">
            <Target className="w-16 h-16 mx-auto text-green-600 mb-6" />
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              Together, we can create a world where innovation and sustainability go hand in hand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Involved
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}