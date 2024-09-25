// src/HotelListComponent.jsx
import Image from 'next/image';
import React from 'react';

const HotelListComponent = () => {
  const hotels = [
    {
      id: 1,
      image: '/assets/pictures/1.jpg',
      name: 'Sanna Boutique Hotel',
      location: 'Arusha, Tanzania',
      rating: '8.5',
      reviews: 127,
      oldPrice: '1,419,593',
      newPrice: '1,277,634',
    },
    {
      id: 2,
      image: '/assets/pictures/1.jpg',
      name: 'The Neela Boutique Hotel Stone Town',
      location: 'Zanzibar City, Tanzania',
      rating: '8.9',
      reviews: 69,
      oldPrice: '2,702,687',
      newPrice: '1,702,692',
    },
    {
      id: 3,
      image: '/assets/pictures/homepic.jpg',
      name: 'Olsupat Lodge',
      location: 'Nairobi, Kenya',
      rating: '8.5',
      reviews: 157,
      oldPrice: '270,269',
      newPrice: '216,215',
    },
    {
      id: 4,
      image: '/assets/pictures/1.jpg',
      name: 'Wanyama B&B',
      location: 'Arusha, Tanzania',
      rating: '8.9',
      reviews: 132,
      oldPrice: '221,757',
      newPrice: '188,506',
    },
  ];

  return (
    <div className="bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">Discounted Destinations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 transition transform hover:scale-105"
          >
            <Image
              src={hotel.image}
              alt={hotel.name}
              width={400}
              height={300}
              className="object-cover w-full h-48"
              priority
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{hotel.name}</h2>
              <p className="text-gray-600">{hotel.location}</p>
              <p className="text-yellow-500">Rating: {hotel.rating}</p>
              <p className="text-gray-500">Reviews: {hotel.reviews}</p>
              <div className="mt-2">
                <span className="text-gray-400 line-through">{hotel.oldPrice}</span>
                <span className="text-red-500 ml-2">{hotel.newPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelListComponent;
