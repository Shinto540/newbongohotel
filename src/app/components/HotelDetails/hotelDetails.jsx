'use client';
import React from 'react';

export default function HotelDetails({ hotelData }) {
  // Add a fallback for when hotelData is undefined
  if (!hotelData) {
    return <div>No hotel data available.</div>;
  }

  return (
    <div>
      {/* Fallback to 'Unknown Hotel' if name is undefined */}
      <h1>{hotelData.name || 'Unknown Hotel'}</h1>

      {/* Amenities Section */}
      <h2>Amenities</h2>
      <ul>
        {hotelData.amenities && hotelData.amenities.length > 0 ? (
          hotelData.amenities.map((amenity, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span>{amenity.icon || '🔘'}</span> {/* Fallback to a default icon */}
              <span>{amenity.name || 'Unknown Amenity'}</span> {/* Fallback to default name */}
            </li>
          ))
        ) : (
          <li>No amenities available.</li>
        )}
      </ul>

      {/* Other sections can go here */}
    </div>
  );
}
