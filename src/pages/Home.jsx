import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Recycle, Globe, Waves, Fish, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-emerald-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-10 right-1/4 text-blue-400/20 animate-bounce delay-500">
            <Waves className="w-12 h-12" />
          </div>
          <div className="absolute bottom-1/3 left-1/4 text-green-400/20 animate-bounce delay-1000">
            <Leaf className="w-10 h-10 transform rotate-45" />
          </div>
          <div className="absolute top-1/3 right-1/3 text-emerald-400/20 animate-bounce delay-1500">
            <Fish className="w-8 h-8" />
          </div>
        </div>

        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
              Bioplastic Revolution
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Waves className="w-6 h-6 text-blue-500" />
              <span className="text-xl text-gray-600 font-medium">Ocean's Gift Initiative</span>
              <Leaf className="w-6 h-6 text-green-500" />
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transforming seaweed into sustainable bioplastics to fight ocean pollution and empower coastal communities worldwide
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-600 text-white rounded-full hover:from-blue-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg">
              <Recycle className="w-5 h-5" />
              <span className="font-semibold">Join Our Mission</span>
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 border-2 border-green-300 rounded-full hover:bg-green-50 hover:border-green-400 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg">
              <Globe className="w-5 h-5 text-green-600" />
              <span className="font-semibold">Learn More</span>
            </button>
          </div>

          {/* Cards linking to initiatives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/ocean_clean" className="block bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Beach Cleanup</h3>
              <p className="text-gray-600 text-center">Reducing plastic pollution in our oceans through sustainable alternatives</p>
            </Link>
            <Link to="/eco_solutions" className="block bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Eco Solutions</h3>
              <p className="text-gray-600 text-center">Creating biodegradable materials from renewable seaweed resources</p>
            </Link>
            <Link to="/community_impact" className="block bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Community Impact</h3>
              <p className="text-gray-600 text-center">Empowering coastal communities through sustainable innovation</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Recycle className="w-8 h-8" />
            <h2 className="text-4xl font-bold">Our Mission</h2>
            <Recycle className="w-8 h-8 transform rotate-180" />
          </div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            We believe in the power of innovation to heal our planet. By transforming ocean seaweed into biodegradable bioplastics,
            we're creating a sustainable future where environmental protection and economic prosperity go hand in hand.
          </p>
        </div>
      </section>
    </div>
  );
}
