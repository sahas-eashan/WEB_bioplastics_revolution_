import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Heart, Users, Globe, Lightbulb, Target, Recycle, Waves, TreePine, Beaker, Megaphone, User } from 'lucide-react';

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
      name: "Team Member 1",
      role: "Environmental Scientist & Project Lead",
      description: "Leading our research initiatives and developing innovative seaweed-based solutions.",
      icon: <Beaker className="w-6 h-6" />,
      color: "from-green-400 to-emerald-600",
      bgColor: "bg-green-100",
      position: { top: '30%', left: '5%', transform: 'translate(-80%, -50%)' }
    },
    {
      id: 2,
      name: "Team Member 2", 
      role: "Marine Biologist & Sustainability Expert",
      description: "Specializing in ocean ecosystems and biodegradable material development.",
      icon: <Waves className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-600",
      bgColor: "bg-blue-100",
      position: { top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }
    },
    {
      id: 3,
      name: "Team Member 3",
      role: "Community Outreach Coordinator",
      description: "Building partnerships and spreading awareness about plastic pollution solutions.",
      icon: <Megaphone className="w-6 h-6" />,
      color: "from-purple-400 to-violet-600",
      bgColor: "bg-purple-100",
      position: { top: '30%', left: '95%', transform: 'translate(-20%, -50%)' }
    },
    {
      id: 4,
      name: "Team Member 4",
      role: "Innovation & Technology Specialist",
      description: "Developing cutting-edge production methods for sustainable alternatives.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-100",
      position: { top: '75%', left: '25%', transform: 'translate(-50%, -50%)' }
    },
    {
      id: 5,
      name: "Team Member 5",
      role: "Environmental Impact Analyst",
      description: "Measuring and optimizing our environmental footprint and impact metrics.",
      icon: <TreePine className="w-6 h-6" />,
      color: "from-teal-400 to-green-600",
      bgColor: "bg-teal-100",
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
              
              {/* Photo Space 1 - Mission Image */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-green-200 to-blue-200 rounded-2xl h-80 flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <Globe className="w-16 h-16 mx-auto text-green-600 mb-4 animate-pulse" />
                    <p className="text-gray-600 font-medium">Mission Image</p>
                    <p className="text-sm text-gray-500">Add your mission photo here</p>
                  </div>
                </div>
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

      {/* Revolutionary Team Section */}
      <section ref={sectionRef} className="py-12 px-4 relative overflow-hidden h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white/20 rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
          
          {/* Mouse Follower Effect */}
          <div
            className="absolute w-96 h-96 bg-gradient-radial from-cyan-400/20 via-purple-400/10 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: mousePos.x - 192,
              top: mousePos.y - 192,
              transform: 'translate(0, 0)'
            }}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto flex flex-col h-full">
          <div className="text-center mb-8 flex-shrink-0">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-pulse">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Visionaries</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Five brilliant minds connected by innovation, scattered like stars across our universe of possibilities.
            </p>
          </div>

          {/* Constellation Layout */}
          <div className="relative flex-1 mx-auto max-w-6xl w-full">
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              {/* Dynamic connecting lines that animate */}
              {teamMembers.map((member, index) => (
                teamMembers.slice(index + 1).map((nextMember, nextIndex) => (
                  <line
                    key={`${member.id}-${nextMember.id}`}
                    x1={member.position.left ? `${parseInt(member.position.left)}%` : `${100 - parseInt(member.position.right)}%`}
                    y1={member.position.top ? `${parseInt(member.position.top)}%` : `${100 - parseInt(member.position.bottom)}%`}
                    x2={nextMember.position.left ? `${parseInt(nextMember.position.left)}%` : `${100 - parseInt(nextMember.position.right)}%`}
                    y2={nextMember.position.top ? `${parseInt(nextMember.position.top)}%` : `${100 - parseInt(nextMember.position.bottom)}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    className="animate-pulse"
                  />
                ))
              )).flat()}
            </svg>

            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                style={getCardStyle(member)}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Orbital Ring */}
                <div className={`absolute -inset-12 rounded-full border-2 border-gradient-to-r ${member.color} opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin-slow`} />
                
                {/* Main Card - Made larger */}
                <div className={`relative w-80 bg-gradient-to-br ${member.color} rounded-full aspect-square p-1 shadow-2xl hover:shadow-cyan-500/25`}>
                  {/* Inner Content Circle */}
                  <div className="w-full h-full bg-black/80 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
                    
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                    
                    {/* Photo Placeholder - Much larger for actual photos */}
                    <div className={`relative w-28 h-28 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mb-4 shadow-lg overflow-hidden`}>
                      {/* Image placeholder background */}
                      <div className="w-full h-full bg-gray-800/50 rounded-full flex flex-col items-center justify-center backdrop-blur-sm border-2 border-white/20">
                        <User className="w-12 h-12 text-white/60 mb-1" />
                        <span className="text-xs text-white/40 font-medium">Photo</span>
                      </div>
                      
                      {/* Corner icon indicator */}
                      <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center shadow-lg border-2 border-white/30`}>
                        {member.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-300 font-medium mb-3 leading-tight">{member.role}</p>
                    
                    {/* Expandable Description */}
                    <div className={`transition-all duration-500 overflow-hidden ${hoveredMember === member.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-xs text-gray-400 leading-relaxed px-2">{member.description}</p>
                    </div>
                    
                    {/* Pulse Effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} opacity-0 animate-ping ${hoveredMember === member.id ? 'opacity-20' : ''}`} />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/30 rounded-full animate-float" style={{animationDelay: `${index * 0.5}s`}} />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/30 rounded-full animate-float" style={{animationDelay: `${index * 0.7}s`}} />
              </div>
            ))}

            {/* Central Connection Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse shadow-2xl shadow-purple-500/50 flex items-center justify-center">
                <Users className="w-8 h-8 text-white animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          .animate-shimmer {
            animation: shimmer 2s ease-in-out infinite;
          }
          .animate-spin-slow {
            animation: spin 8s linear infinite;
          }
        `}</style>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Our Impact So Far</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Plastic Items Replaced</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Community Partners</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Biodegradable Solutions</div>
            </div>
          </div>
        </div>
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