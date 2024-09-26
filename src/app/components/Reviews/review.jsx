'use client'

import { useState } from 'react'
import { Star, X } from 'lucide-react'

// Sample review data
const reviews = [
  {
    id: 1,
    name: 'James',
    country: 'United Kingdom',
    roomType: 'Studio with Spa Bath',
    stayDuration: '2 nights - October 2023',
    travelGroup: 'Couple',
    title: 'Really enjoyed and totally recommend',
    positiveComment: 'Excellent location, staff very helpful and friendly. Very Clean. Great value for money. Breakfast was Excellent',
    negativeComment: 'Nothing, couldn\'t fault',
    rating: 10,
    date: 'October 22, 2023',
  },
  {
    id: 2,
    name: 'Sarah',
    country: 'United States',
    roomType: 'Deluxe Room',
    stayDuration: '3 nights - September 2023',
    travelGroup: 'Family',
    title: 'Wonderful stay, great for families',
    positiveComment: 'Spacious rooms, friendly staff, excellent breakfast buffet',
    negativeComment: 'Pool area could use some updating',
    rating: 9,
    date: 'September 15, 2023',
  },
  {
    id: 3,
    name: 'Ahmed',
    country: 'UAE',
    roomType: 'Executive Suite',
    stayDuration: '1 night - November 2023',
    travelGroup: 'Solo traveler',
    title: 'Luxurious and comfortable',
    positiveComment: 'Amazing views, top-notch service, very comfortable bed',
    negativeComment: 'Room service was a bit slow',
    rating: 8,
    date: 'November 5, 2023',
  },
]

export default function HotelReviews() {
  const [selectedReview, setSelectedReview] = useState(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = (review) => {
    setSelectedReview(review)
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Hotel Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.slice(0, 3).map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300" onClick={() => openPopup(review)}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.country}</p>
                </div>
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {review.rating}
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.round(review.rating / 2) ? 'text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <h4 className="text-lg font-semibold mb-2">{review.title}</h4>
              <p className="text-gray-700 mb-4 line-clamp-3">{review.positiveComment}</p>
              <div className="text-sm text-gray-600">
                <p>{review.roomType}</p>
                <p>{review.stayDuration}</p>
                <p>{review.travelGroup}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Golden Queen Deluxe Jacuzzi Apartments - Old Town</h2>
                <button onClick={closePopup} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.round(averageRating / 2) ? 'text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 text-lg font-semibold">{averageRating.toFixed(1)}</span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Write a Review
                </button>
              </div>
              <div className="border-t pt-4">
                <h3 className="text-xl font-semibold mb-2">Guest reviews</h3>
                <div className="flex justify-between items-center mb-4">
                  <span>Sort reviews by:</span>
                  <select className="border rounded px-2 py-1">
                    <option>Most relevant</option>
                    <option>Highest rated</option>
                    <option>Lowest rated</option>
                  </select>
                </div>
                {reviews.map((review) => (
                  <div key={review.id} className="border-b last:border-b-0 py-4">
                    <div className="flex items-start">
                      <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                        {review.name[0]}
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{review.name}</h4>
                            <p className="text-sm text-gray-600">{review.country}</p>
                          </div>
                          <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold">
                            {review.rating}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{review.roomType}</p>
                        <p className="text-sm text-gray-600">{review.stayDuration}</p>
                        <p className="text-sm text-gray-600">{review.travelGroup}</p>
                        <h5 className="font-semibold mt-2">{review.title}</h5>
                        <p className="mt-1">{review.positiveComment}</p>
                        <p className="mt-1 text-gray-600">{review.negativeComment}</p>
                        <div className="mt-2 text-sm text-gray-500">
                          Reviewed: {review.date}
                        </div>
                        <div className="mt-2">
                          <button className="text-blue-600 hover:underline mr-4">Helpful</button>
                          <button className="text-blue-600 hover:underline">Not helpful</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}