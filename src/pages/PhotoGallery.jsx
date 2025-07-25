import React from 'react';

const photos = [
  `${import.meta.env.BASE_URL}_J6A6648.jpg`,
  `${import.meta.env.BASE_URL}_J6A6649.jpg`,
  `${import.meta.env.BASE_URL}_J6A6651.jpg`,
  `${import.meta.env.BASE_URL}_J6A6652.jpg`,
  `${import.meta.env.BASE_URL}_J6A6654.jpg`,
  `${import.meta.env.BASE_URL}_J6A6660.jpg`,
  `${import.meta.env.BASE_URL}_J6A6662.jpg`,
  `${import.meta.env.BASE_URL}_J6A6663.jpg`,
  `${import.meta.env.BASE_URL}_J6A6665.jpg`,
  `${import.meta.env.BASE_URL}_J6A6678.jpg`,
  `${import.meta.env.BASE_URL}_J6A6680.jpg`,
  `${import.meta.env.BASE_URL}_J6A6684.jpg`,
  `${import.meta.env.BASE_URL}_J6A6685.jpg`,
  `${import.meta.env.BASE_URL}_J6A6685 (1).jpg`,
  `${import.meta.env.BASE_URL}_J6A6687.jpg`,
  `${import.meta.env.BASE_URL}_J6A6689.jpg`,
  `${import.meta.env.BASE_URL}_J6A6689 (1).jpg`,
  `${import.meta.env.BASE_URL}_J6A6690.jpg`,
  `${import.meta.env.BASE_URL}_J6A7020.jpg`,
  `${import.meta.env.BASE_URL}_J6A7384.jpg`,
  `${import.meta.env.BASE_URL}_J6A7387.jpg`,
  `${import.meta.env.BASE_URL}_J6A7634.jpg`,
  `${import.meta.env.BASE_URL}DSC01095.jpg`,
  `${import.meta.env.BASE_URL}DSC01107.jpg`,
  `${import.meta.env.BASE_URL}DSC01131.jpg`,
  `${import.meta.env.BASE_URL}DSC01164.jpg`,
  `${import.meta.env.BASE_URL}DSC01172.jpg`,
  `${import.meta.env.BASE_URL}DSC01214.jpg`,
  `${import.meta.env.BASE_URL}DSC01259.jpg`,
  `${import.meta.env.BASE_URL}DSC01265.jpg`,
  `${import.meta.env.BASE_URL}THS01100.jpg`,
  `${import.meta.env.BASE_URL}THS01101.jpg`,
  `${import.meta.env.BASE_URL}THS01308.jpg`,
  `${import.meta.env.BASE_URL}THS01309.jpg`,
  `${import.meta.env.BASE_URL}WhatsApp Image 2025-06-10 at 15.39.26_20376d2a.jpg`,
  `${import.meta.env.BASE_URL}WhatsApp Image 2025-06-10 at 15.40.08_dfb1a4e0.jpg`,
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
