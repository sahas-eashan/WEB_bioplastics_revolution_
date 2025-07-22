import React from 'react';
import { Waves, ArrowLeft, Users, Target, Globe } from 'lucide-react';

export default function OceanCleanupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Initiatives</span>
            </button>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <Waves className="text-white w-8 h-8" />
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900">Ocean Cleanup</h1>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Protecting marine ecosystems through innovative bio-based solutions and community-driven cleanup efforts that tackle plastic pollution at its source.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-white p-4 rounded-2xl shadow-2xl">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Ocean Cleanup Hero Image</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Ocean Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every year, millions of tons of plastic waste enter our oceans. We're committed to reversing this trend through targeted cleanup efforts and sustainable alternatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Coastal Cleanup Operations</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our dedicated teams work with local communities to organize regular coastal cleanups across vulnerable shorelines. We focus on both immediate waste removal and long-term prevention strategies.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Weekly organized beach cleanups with local volunteers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Advanced waste sorting and recycling programs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Educational workshops on marine conservation</span>
                </li>
              </ul>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl h-48 flex items-center justify-center">
                  <span className="text-gray-600">Cleanup Team</span>
                </div>
                <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl h-32 mt-16 flex items-center justify-center">
                  <span className="text-gray-600">Beach Before</span>
                </div>
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl h-32 -mt-8 flex items-center justify-center">
                  <span className="text-gray-600">Volunteers</span>
                </div>
                <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl h-48 -mt-8 flex items-center justify-center">
                  <span className="text-gray-600">Beach After</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white text-lg font-semibold">Waste Interception Technology</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-600">Filter 1</span>
                    </div>
                    <div className="h-16 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-600">Filter 2</span>
                    </div>
                    <div className="h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-600">Filter 3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Advanced Interception Systems</h3>
              <p className="text-lg text-gray-700 mb-6">
                We deploy cutting-edge waste interception technologies that capture plastic debris before it reaches the open ocean. These systems are designed to work harmoniously with marine ecosystems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Target className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Smart Collection Points</h4>
                    <p className="text-gray-600">Strategic placement for maximum impact</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-cyan-50 rounded-xl">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                    <Waves className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ocean-Safe Materials</h4>
                    <p className="text-gray-600">Biodegradable collection systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Ocean Impact</h2>
              <p className="text-xl opacity-90">Measurable results from our cleanup initiatives</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">250+</div>
                <div className="text-xl">Cleanup Events</div>
                <div className="text-sm opacity-75 mt-2">Organized this year</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">15</div>
                <div className="text-xl">Tons Removed</div>
                <div className="text-sm opacity-75 mt-2">Plastic waste collected</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">5,000+</div>
                <div className="text-xl">Volunteers</div>
                <div className="text-sm opacity-75 mt-2">Community members involved</div>
              </div>
            </div>
          </div>

          {/* Community Involvement */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Community Partnership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Local communities are at the heart of our ocean cleanup efforts. Together, we're creating lasting change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-6 flex items-center justify-center">
                <Users className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Partnerships</h3>
              <p className="text-gray-700">
                Working hand-in-hand with fishing communities, schools, and environmental groups to maximize our cleanup impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-full h-48 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl mb-6 flex items-center justify-center">
                <Globe className="w-16 h-16 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education Programs</h3>
              <p className="text-gray-700">
                Comprehensive awareness campaigns that teach sustainable practices and the importance of marine conservation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-full h-48 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl mb-6 flex items-center justify-center">
                <Waves className="w-16 h-16 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Long-term Impact</h3>
              <p className="text-gray-700">
                Creating sustainable systems that continue protecting our oceans long after initial cleanup efforts are complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}