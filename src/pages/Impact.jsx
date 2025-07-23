import React from 'react';

export default function Impact() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-6">🌊 Our Impact 🌱</h1>
                    <p className="text-xl leading-relaxed max-w-4xl">
                        Creating measurable change through innovative bioplastic solutions that protect our oceans, 
                        empower communities, and build a sustainable future! 🚀
                    </p>
                </div>
            </div>

            {/* Impact Areas Grid */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Environmental Impact */}
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">🌊 Environmental Protection</h3>
                        <div className="space-y-4 text-gray-600">
                            <p>🐟 Reducing ocean plastic pollution through seaweed alternatives</p>
                            <p>♻️ Converting marine waste into biodegradable materials</p>
                            <p>🌿 Supporting ocean ecosystem restoration</p>
                            <p>🔄 Promoting circular economy in coastal regions</p>
                        </div>
                    </div>

                    {/* Community Impact */}
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">🤝 Community Empowerment</h3>
                        <div className="space-y-4 text-gray-600">
                            <p>💼 Creating sustainable livelihoods for coastal communities</p>
                            <p>📚 Training local entrepreneurs in bioplastic production</p>
                            <p>🚢 Establishing seaweed farming cooperatives</p>
                            <p>🌟 Building capacity for environmental stewardship</p>
                        </div>
                    </div>

                    {/* Innovation Impact */}
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Innovation & Technology</h3>
                        <div className="space-y-4 text-gray-600">
                            <p>🔬 Pioneering seaweed-to-bioplastic conversion tech</p>
                            <p>⚙️ Developing scalable production methods</p>
                            <p>📦 Creating biodegradable packaging solutions</p>
                            <p>🧪 Advancing sustainable material science research</p>
                        </div>
                    </div>
                </div>

                {/* Detailed Impact Sections */}
                <div className="space-y-16">
                    {/* Ocean Health */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">🌊 Protecting Ocean Health</h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h4 className="text-xl font-semibold text-green-600 mb-4">🐠 Marine Ecosystem Restoration</h4>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Our seaweed farms create underwater forests that serve as habitats for marine life, 
                                    improve water quality, and absorb CO₂ from the atmosphere! 🌱
                                </p>
                                <h4 className="text-xl font-semibold text-green-600 mb-4">🚫 Plastic Pollution Reduction</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Our biodegradable materials break down naturally in marine environments, eliminating 
                                    long-term damage from traditional plastics. 🌿
                                </p>
                            </div>
                            <div className="text-center">
                                <img 
                                    src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Underwater seaweed forest"
                                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                                />
                                <p className="text-sm text-gray-500 mt-2">Seaweed farms creating marine habitats 🌊</p>
                            </div>
                        </div>
                    </div>

                    {/* Economic Impact */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">💰 Economic Empowerment</h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="text-center">
                                <img 
                                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Coastal community working together"
                                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                                />
                                <p className="text-sm text-gray-500 mt-2">Empowering coastal communities 🤝</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-green-600 mb-4">💼 Sustainable Livelihoods</h4>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We work with coastal communities to establish seaweed farming, providing training 
                                    and guaranteed purchasing agreements for stable income! 📈
                                </p>
                                <h4 className="text-xl font-semibold text-green-600 mb-4">🏪 Market Transformation</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Creating viable alternatives helps businesses transition to sustainable packaging 
                                    without compromising quality. Win-win! 🎯
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Social Impact */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">🏘️ Building Resilient Communities</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="border-l-4 border-green-500 pl-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">📚 Education & Training</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Comprehensive programs covering seaweed cultivation and business management 
                                    for long-term community success! 🎓
                                </p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">🌍 Environmental Awareness</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Workshops about ocean conservation and the role everyone can play in 
                                    protecting marine ecosystems! 🐋
                                </p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">🔧 Technology Transfer</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Sharing bioplastic knowledge to help communities become leaders 
                                    in the green economy! 🚀
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Future Goals */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">🚀 Our Vision for Tomorrow</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-xl">📈</span>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">Scale Production</h4>
                                <p className="text-gray-600 text-sm">
                                    Expand seaweed farming to meet growing demand for sustainable packaging
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-xl">🌍</span>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">Global Reach</h4>
                                <p className="text-gray-600 text-sm">
                                    Partner with coastal communities worldwide to create a global network
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-xl">💡</span>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">Innovation Hub</h4>
                                <p className="text-gray-600 text-sm">
                                    Continue advancing bioplastic tech and developing new solutions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}