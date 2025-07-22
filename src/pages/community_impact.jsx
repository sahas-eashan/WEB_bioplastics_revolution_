import React from 'react';
import { Heart, ArrowLeft, Users, Briefcase, GraduationCap, Lightbulb, TrendingUp, MapPin } from 'lucide-react';

export default function CommunityImpactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Initiatives</span>
            </button>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Heart className="text-white w-8 h-8" />
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900">Community Impact</h1>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Empowering coastal communities through sustainable job creation, education, and economic opportunities while building environmental stewardship.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-white p-4 rounded-2xl shadow-2xl">
                  <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Community Impact Hero Image</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Economic Empowerment */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Economic Empowerment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating sustainable livelihoods for coastal communities while preserving traditional ways of life and promoting environmental conservation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Seaweed Farming Opportunities</h3>
              <p className="text-lg text-gray-700 mb-6">
                We partner with local fishermen and coastal communities to establish sustainable seaweed farming operations that provide steady income while regenerating marine ecosystems.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Training programs for sustainable seaweed cultivation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Guaranteed purchase agreements with fair pricing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Equipment and infrastructure support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Ongoing technical assistance and mentorship</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl h-40 flex items-center justify-center">
                    <span className="text-gray-600">Seaweed Farm</span>
                  </div>
                  <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl h-32 flex items-center justify-center">
                    <span className="text-gray-600">Training Session</span>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl h-32 flex items-center justify-center">
                    <span className="text-gray-600">Farmers</span>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl h-40 flex items-center justify-center">
                    <span className="text-gray-600">Harvest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Creation Programs */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Job Creation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From farming to processing to innovation, we create diverse employment opportunities across the entire bioplastic value chain.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-white w-8 h-8" />
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Farming Jobs</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Seaweed Farming</h3>
                <p className="text-gray-600 text-sm mb-3">350+ jobs created</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Farm management</li>
                  <li>• Cultivation specialists</li>
                  <li>• Harvesting crews</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-white w-8 h-8" />
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Processing</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Processing & Manufacturing</h3>
                <p className="text-gray-600 text-sm mb-3">200+ jobs created</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Processing technicians</li>
                  <li>• Quality control</li>
                  <li>• Production managers</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="text-white w-8 h-8" />
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Innovation</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Research & Innovation</h3>
                <p className="text-gray-600 text-sm mb-3">75+ jobs created</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Research scientists</li>
                  <li>• Lab technicians</li>
                  <li>• Product developers</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white w-8 h-8" />
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Support</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Support Services</h3>
                <p className="text-gray-600 text-sm mb-3">125+ jobs created</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Community coordinators</li>
                  <li>• Training facilitators</li>
                  <li>• Administrative staff</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Training */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl h-24 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Classroom</span>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl h-24 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Workshop</span>
                  </div>
                </div>
                <div className="w-full h-48 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Education Programs</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Education & Skills Development</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our comprehensive education programs build local capacity and ensure communities have the skills needed to participate fully in the green economy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Technical Training</h4>
                    <p className="text-gray-600">Hands-on skills for seaweed farming and processing</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Briefcase className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Development</h4>
                    <p className="text-gray-600">Entrepreneurship and cooperative management</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Heart className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Environmental Stewardship</h4>
                    <p className="text-gray-600">Marine conservation and sustainability practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Impact Statistics */}
          <div className="bg-gradient-to-r from-emerald-600 to-purple-600 rounded-3xl p-12 text-white mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Community Impact</h2>
              <p className="text-xl opacity-90">Measurable change in coastal communities</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">750+</div>
                <div className="text-xl">Jobs Created</div>
                <div className="text-sm opacity-75 mt-2">Across all programs</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">45</div>
                <div className="text-xl">Communities</div>
                <div className="text-sm opacity-75 mt-2">Directly impacted</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">2,500+</div>
                <div className="text-xl">People Trained</div>
                <div className="text-sm opacity-75 mt-2">In various skills</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">40%</div>
                <div className="text-xl">Income Increase</div>
                <div className="text-sm opacity-75 mt-2">Average for participants</div>
              </div>
            </div>
          </div>

          {/* Local Partnerships */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Community Partnerships</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Strong partnerships with local organizations, government agencies, and community leaders ensure our programs are culturally appropriate and sustainable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-6 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Government</h3>
                <p className="text-gray-700">
                  Collaboration with municipal and regional authorities to align our programs with local development priorities and regulations.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">15 government partnerships</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Organizations</h3>
                <p className="text-gray-700">
                  Working with fishing cooperatives, women's groups, and youth organizations to ensure inclusive participation in our programs.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">30+ community groups</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl mb-6 flex items-center justify-center">
                  <GraduationCap className="w-16 h-16 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational Institutions</h3>
                <p className="text-gray-700">
                  Partnerships with schools, universities, and research centers to provide ongoing education and foster innovation in local communities.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">12 educational partners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Real stories from community members whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">MS</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Maria Santos</h3>
                  <p className="text-gray-600">Seaweed Farm Manager</p>
                </div>
              </div>
              <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-600">Maria's Farm</span>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Before joining the program, my family struggled to make ends meet from traditional fishing. Now I manage my own seaweed farm and employ 12 people from my village. My children can go to university because of this opportunity."
              </p>
              <div className="text-sm text-gray-600">
                <p>• Farm established in 2023</p>
                <p>• 300% income increase</p>
                <p>• Employs 12 community members</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">JR</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Jose Rodriguez</h3>
                  <p className="text-gray-600">Processing Plant Supervisor</p>
                </div>
              </div>
              <div className="w-full h-48 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-600">Processing Facility</span>
              </div>
              <p className="text-gray-700 italic mb-4">
                "I went from being unemployed to supervising our local processing plant. The technical training program gave me skills I never thought I could learn. Now I'm helping train the next generation of workers."
              </p>
              <div className="text-sm text-gray-600">
                <p>• Completed 6-month training program</p>
                <p>• Promoted to supervisor within 1 year</p>
                <p>• Trains 20+ new workers annually</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}