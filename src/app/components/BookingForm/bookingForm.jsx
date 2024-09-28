// const BookingForm = () => {
//     return (
//       <div className="bg-gray-100 p-6 mb-6">
//         <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
//         <form>
//           <label>Date:</label>
//           <input type="date" className="border p-2 mb-4 w-full" />
//           <label>Guests:</label>
//           <input type="number" className="border p-2 mb-4 w-full" />
//           <button className="bg-blue-500 text-white px-4 py-2">Book Now</button>
//         </form>
//       </div>
//     );
//   };
// export default BookingForm;  
'use client'
import React, { useState } from 'react'

export default function BookingForm({ rooms }) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('')
  const [roomType, setRoomType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log({ checkIn, checkOut, guests, roomType })
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
            <input
              type="date"
              id="check-in"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
            <input
              type="date"
              id="check-out"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select number of guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>
          <div>
            <label htmlFor="room-type" className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
            <select
              id="room-type"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select room type</option>
              {rooms.map((room, index) => (
                <option key={index} value={room.type}>{room.type}</option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Book Now
        </button>
      </form>
    </div>
  )
}