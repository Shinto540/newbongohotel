// src/HotelsByTypeComponent.jsx
import React from 'react';
import Image from 'next/image';

const HotelsByType = () => {
  // Sample data for hotel types
  const hotelTypes = [
    {
      id: 1,
      image: '/assets/pictures/1.jpg',
      type: 'Hotels',
      dates: 'Sep 20-Sep 22, 2 adults',
      available: '52 available',
    },
    {
      id: 2,
      image: '/assets/pictures/1.jpg',
      type: 'Apartments',
      dates: 'Sep 20-Sep 22, 2 adults',
      available: '99 available',
    },
    {
      id: 3,
      image: '/assets/pictures/1.jpg',
      type: 'Resorts',
      dates: 'Sep 20-Sep 22, 2 adults',
      available: '2 available',
    },
    {
      id: 4,
      image: '/assets/pictures/1.jpg',
      type: 'Villas',
      dates: 'Sep 20-Sep 22, 2 adults',
      available: '5 available',
    },
    {
        id: 5,
        image: '/assets/pictures/1.jpg',
        type: 'Villas',
        dates: 'Sep 20-Sep 22, 2 adults',
        available: '5 available',
      },
      {
        id: 6,
        image: '/assets/pictures/1.jpg',
        type: 'Villas',
        dates: 'Sep 20-Sep 22, 2 adults',
        available: '5 available',
      },
      {
        id: 7,
        image: '/assets/pictures/1.jpg',
        type: 'Villas',
        dates: 'Sep 20-Sep 22, 2 adults',
        available: '5 available',
      },
      {
        id: 8,
        image: '/assets/pictures/1.jpg',
        type: 'Villas',
        dates: 'Sep 20-Sep 22, 2 adults',
        available: '5 available',
      },
  ];

  return (
    <div className="bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">Browse by property types</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {hotelTypes.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 transition transform hover:scale-105"
          >
            <Image
              src={hotel.image}
              alt={hotel.type}
              width={400}
              height={300}
              className="object-cover w-full h-48"
              priority
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{hotel.type}</h2>
              <p className="text-sm text-gray-500">{hotel.dates}</p>
              <p className="text-sm text-gray-500">{hotel.available}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelsByType;
