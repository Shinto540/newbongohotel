'use client';
import React from 'react';

export default function Amenities({ hotelData }) {
  // Check if hotelData is defined
  if (!hotelData) {
    return <div>No hotel data available.</div>;
  }

  // Check if amenities is defined and is an array
  const amenities = hotelData.amenities || [];

  return (
    <div>
      {/* Fallback to 'Unknown Hotel' if name is undefined */}
      <h1>{hotelData.name || 'Unknown Hotel'}</h1>
      
      {/* Amenities Section */}
      <h2>Amenities</h2>
      <ul>
        {amenities.length > 0 ? (
          amenities.map((amenity, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span>{amenity.icon || '🔘'}</span> {/* Fallback to a default icon */}
              <span>{amenity.name || 'Unknown Amenity'}</span> {/* Fallback to default name */}
            </li>
          ))
        ) : (
          <li>No amenities available.</li> // Show this message if amenities is empty
        )}
      </ul>

      {/* Other sections can go here */}
    </div>
  );
}
