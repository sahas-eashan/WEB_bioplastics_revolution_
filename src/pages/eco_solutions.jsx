import React from 'react';
import { Leaf, ArrowLeft, Beaker, Recycle, TreePine, Factory } from 'lucide-react';

export default function EcoSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="relative px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <button className="flex items-center space-x-2 text-green-600 hover:text-green-800 mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Initiatives</span>
            </button>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <Leaf className="text-white w-8 h-8" />
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900">Eco Solutions</h1>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Revolutionary seaweed-based bioplastics that offer sustainable alternatives to petroleum-based plastics while supporting marine ecosystems.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-white p-4 rounded-2xl shadow-2xl">
                  <div className="w-full h-80 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Seaweed Bioplastic Hero Image</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-200 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Process */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">From Seaweed to Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative process transforms abundant seaweed into biodegradable plastics that break down naturally without harming the environment.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <div className="mb-4">
                <div className="w-full h-32 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-600">Seaweed Harvesting</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainable Harvesting</h3>
              <p className="text-gray-600">Locally grown seaweed collected using eco-friendly methods</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <div className="mb-4">
                <div className="w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-600">Bio Processing</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bio Processing</h3>
              <p className="text-gray-600">Advanced extraction of natural polymers from seaweed</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <div className="mb-4">
                <div className="w-full h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-600">Material Formation</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Material Formation</h3>
              <p className="text-gray-600">Shaping extracted polymers into usable plastic materials</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <div className="mb-4">
                <div className="w-full h-32 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-600">Final Products</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Product Creation</h3>
              <p className="text-gray-600">Manufacturing eco-friendly packaging and products</p>
            </div>
          </div>

          {/* Research & Development */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Cutting-Edge Research</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our dedicated research team continuously innovates to improve the strength, durability, and biodegradability of our seaweed-based materials.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Beaker className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Lab Testing</h4>
                    <p className="text-gray-600">Rigorous quality control and material optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Factory className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scalable Production</h4>
                    <p className="text-gray-600">Efficient processes for mass production</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl h-40 flex items-center justify-center">
                    <span className="text-gray-600">Lab Equipment</span>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl h-24 flex items-center justify-center">
                    <span className="text-gray-600">Research Team</span>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl h-24 flex items-center justify-center">
                    <span className="text-gray-600">Testing Process</span>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl h-40 flex items-center justify-center">
                    <span className="text-gray-600">Final Testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Applications */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Applications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our bioplastics can replace traditional plastics in numerous applications while maintaining performance and reducing environmental impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-gray-600">Food Packaging</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Food Packaging</h3>
                <p className="text-gray-700 mb-4">
                  Safe, biodegradable packaging for food products that maintains freshness while reducing waste.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Takeaway containers</li>
                  <li>• Food wraps and films</li>
                  <li>• Beverage containers</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-gray-600">Shopping Bags</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Shopping Bags</h3>
                <p className="text-gray-700 mb-4">
                  Durable shopping bags that completely biodegrade, eliminating the need for single-use plastic bags.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Grocery shopping bags</li>
                  <li>• Retail packaging</li>
                  <li>• Reusable carry bags</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-full h-48 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-gray-600">Agricultural Uses</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Agricultural Products</h3>
                <p className="text-gray-700 mb-4">
                  Biodegradable agricultural films and containers that enhance crop growth while protecting soil health.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mulch films</li>
                  <li>• Plant pots</li>
                  <li>• Seed trays</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Environmental Benefits */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Environmental Impact</h2>
              <p className="text-xl opacity-90">Measurable benefits of choosing bioplastics</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <TreePine className="w-16 h-16 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">80%</div>
                <div className="text-lg">Less Carbon</div>
                <div className="text-sm opacity-75 mt-1">Compared to traditional plastic</div>
              </div>
              <div className="text-center">
                <Recycle className="w-16 h-16 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">90 Days</div>
                <div className="text-lg">Biodegradable</div>
                <div className="text-sm opacity-75 mt-1">Complete breakdown time</div>
              </div>
              <div className="text-center">
                <Leaf className="w-16 h-16 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-lg">Renewable</div>
                <div className="text-sm opacity-75 mt-1">Made from seaweed</div>
              </div>
              <div className="text-center">
                <Factory className="w-16 h-16 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">60%</div>
                <div className="text-lg">Energy Savings</div>
                <div className="text-sm opacity-75 mt-1">In production process</div>
              </div>
            </div>
          </div>

          {/* Future Innovations */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Future Innovations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We're constantly pushing the boundaries of what's possible with seaweed-based materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Bioplastics</h3>
                  <p className="text-gray-700">
                    Developing materials with embedded sensors that can monitor product freshness and environmental conditions.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Enhanced Durability</h3>
                  <p className="text-gray-700">
                    Creating stronger, more flexible materials suitable for industrial and construction applications.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Rapid Decomposition</h3>
                  <p className="text-gray-700">
                    Engineering materials that break down even faster in marine environments without leaving microplastics.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <div className="w-full h-80 bg-gradient-to-br from-green-200 to-emerald-300 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">Future Bioplastic Innovations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}