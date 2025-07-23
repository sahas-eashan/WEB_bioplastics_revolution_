import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Events() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-6">🎉 Events & News 📢</h1>
                    <p className="text-xl leading-relaxed max-w-4xl">
                        Join us in our mission! Stay updated on workshops, exhibitions, community events, 
                        and exciting achievements in sustainable innovation! 🌱✨
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Event Categories */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Workshops */}
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <span className="text-3xl">📚</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎓 Workshops & Training</h3>
                        <div className="space-y-3 text-gray-600">
                            <p>🌊 Seaweed cultivation techniques</p>
                            <p>🔬 Bioplastic production methods</p>
                            <p>💼 Sustainable business practices</p>
                            <p>🌍 Environmental awareness sessions</p>
                        </div>
                    </div>

                    {/* Exhibitions */}
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <span className="text-3xl">🏛️</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎨 Exhibitions & Showcases</h3>
                        <div className="space-y-3 text-gray-600">
                            <p>🌱 Sustainable innovation fairs</p>
                            <p>🏆 Green technology exhibitions</p>
                            <p>📦 Eco-packaging demonstrations</p>
                            <p>🤝 Partnership showcases</p>
                        </div>
                    </div>

                    {/* Community Events */}
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <span className="text-3xl">🤝</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">🏘️ Community Events</h3>
                        <div className="space-y-3 text-gray-600">
                            <p>🏖️ Beach cleanup initiatives</p>
                            <p>🌊 Ocean conservation talks</p>
                            <p>👥 Community networking sessions</p>
                            <p>🎉 Achievement celebrations</p>
                        </div>
                    </div>
                </div>

                {/* Upcoming Events Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">📅 What's Coming Up</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="border-l-4 border-green-500 pl-6">
                            <div className="flex items-center mb-3">
                                <span className="text-2xl mr-3">🌊</span>
                                <h4 className="text-xl font-semibold text-gray-800">Seaweed Innovation Workshops</h4>
                            </div>
                            <p className="text-gray-600 mb-2">Learn hands-on techniques for sustainable seaweed cultivation and bioplastic production!</p>
                            <p className="text-green-600 font-medium">💡 Perfect for: Entrepreneurs, Students, Environmental Enthusiasts</p>
                        </div>
                        
                        <div className="border-l-4 border-blue-500 pl-6">
                            <div className="flex items-center mb-3">
                                <span className="text-2xl mr-3">🏆</span>
                                <h4 className="text-xl font-semibold text-gray-800">Green Tech Exhibitions</h4>
                            </div>
                            <p className="text-gray-600 mb-2">Showcasing our latest bioplastic innovations and sustainable packaging solutions!</p>
                            <p className="text-blue-600 font-medium">🎯 Perfect for: Industry Partners, Investors, Innovators</p>
                        </div>
                        
                        <div className="border-l-4 border-purple-500 pl-6">
                            <div className="flex items-center mb-3">
                                <span className="text-2xl mr-3">💻</span>
                                <h4 className="text-xl font-semibold text-gray-800">Sustainability Hackathons</h4>
                            </div>
                            <p className="text-gray-600 mb-2">Collaborative innovation challenges focused on ocean conservation and green technology!</p>
                            <p className="text-purple-600 font-medium">🚀 Perfect for: Developers, Designers, Problem Solvers</p>
                        </div>
                        
                        <div className="border-l-4 border-orange-500 pl-6">
                            <div className="flex items-center mb-3">
                                <span className="text-2xl mr-3">🏖️</span>
                                <h4 className="text-xl font-semibold text-gray-800">Community Beach Cleanups</h4>
                            </div>
                            <p className="text-gray-600 mb-2">Join us in protecting our coastlines while learning about marine conservation!</p>
                            <p className="text-orange-600 font-medium">🌍 Perfect for: Families, Volunteers, Ocean Lovers</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-lg mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="mr-2">🏆</span> Recent Achievements & News
                </h2>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Left Content */}
                    <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">🌊♻️ Our Achievements</h3>
                    <ul className="text-gray-700 list-disc list-inside space-y-2">
                        <li>🏅 Finalists – PLEASE Hack 2025, South Asia</li>
                        <li>🌱 "Best Environment Project" – Tyumen Ideathon, Russia</li>
                    </ul>

                    <div className="mt-6 space-y-2 text-sm text-gray-600">
                        <p><strong>Project:</strong> PlastiSea – Biodegradable bioplastics from seaweed</p>
                        <p><strong>Features:</strong> Eco-safe, scalable, traceable supply chain</p>
                    </div>

                    <div className="mt-4 space-y-1">
                        <a href="https://github.com/sahas-eashan/Bioplastic-Revolution" className="text-blue-600 hover:underline">🔗 Project Repository</a><br />
                        <a href="https://github.com/sahas-eashan/Bioplastic-Revolution_web" className="text-blue-600 hover:underline">🔗 Website Source Code</a><br />
                        <a href="https://youtu.be/Mx4AK1pfUDk?si=KuaUEP0_82QkifbX" className="text-blue-600 hover:underline">🎥 YouTube Demo</a>
                    </div>
                    </div>

                    {/* Right Content - FIXED: Using Link instead of <a> */}
                    <div className="flex justify-center items-center">
                    <Link
                        to="/PhotoGallery"
                        className="inline-block bg-green-600 text-white px-6 py-4 rounded-xl font-semibold shadow hover:bg-green-700 transition text-lg"
                    >
                        📷 View Our Photo Gallery
                    </Link>
                    </div>
                </div>
                </div>

                {/* Get Involved Section */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🚀 Get Involved!</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">📧</span>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">Stay Updated</h4>
                            <p className="text-gray-600 text-sm">Subscribe to our newsletter for event announcements!</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🤝</span>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">Volunteer</h4>
                            <p className="text-gray-600 text-sm">Join our community events and make a difference!</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">💡</span>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">Collaborate</h4>
                            <p className="text-gray-600 text-sm">Partner with us on innovative sustainability projects!</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">📢</span>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">Spread the Word</h4>
                            <p className="text-gray-600 text-sm">Share our mission and help grow the green movement!</p>
                        </div>
                    </div>
                    
                    <div className="text-center mt-8">
                        <p className="text-gray-600 mb-4">Ready to join the bioplastic revolution? 🌊</p>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                            🌱 Join Our Next Event
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}