import React from 'react';

const photos = [
  '/images/im1.jpeg',
  '/images/im2.jpeg',
  // Add more photo paths
];

export default function PhotoGallery() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-700">📸 Our Journey in Frames</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <img
              src={src}
              alt={`Event ${idx + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
