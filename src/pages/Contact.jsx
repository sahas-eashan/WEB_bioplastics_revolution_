import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full bg-white p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-4">📬 Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">
          Got questions, suggestions, or want to partner with us? We'd love to hear from you!
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium shadow hover:bg-green-700 transition"
            >
              📩 Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
