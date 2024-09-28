// const RoomTypesAndPrices = () => {
//     return (
//       <div className="bg-gray-100 p-6 mb-6">
//         <h2 className="text-2xl font-bold mb-4">Room Types and Prices</h2>
//         <div className="space-y-2">
//           <p>Standard Room - $100/night</p>
//           <p>Deluxe Room - $150/night</p>
//           <p>Suite - $200/night</p>
//         </div>
//       </div>
//     );
//   };
//   export default RoomTypesAndPrices;  
'use client'
import React from 'react'

export default function RoomTypes({ rooms }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Room Types and Prices</h2>
      <div className="flex flex-nowrap overflow-x-auto pb-4 -mx-4">
        {rooms.map((room, index) => (
          <div key={index} className="flex-none w-80 px-4">
            {/* <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
              <img src={room.image} alt={room.type} className="w-full h-48 object-cover" /> */}
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{room.type}</h3>
                  <p className="text-gray-600 mb-2">{room.description}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold mb-4">${room.price}/night</p>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          // </div>
        ))}
      </div>
    </div>
  )
}