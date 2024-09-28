// 
'use client'
import React from 'react'

export default function SpecialOffers({ offers }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
            <p className="text-gray-600 mb-4">{offer.description}</p>
            <p className="font-medium mb-4">Use code: <span className="text-blue-600">{offer.code}</span></p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Apply Offer
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}