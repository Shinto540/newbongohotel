import React from 'react'
import { Search, Star, MapPin, Filter } from 'lucide-react'
import Shadform from '../components/ShadForm/shadform'



const HotelCard = ({ hotel }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{hotel.name}</h3>
      <div className="flex items-center mb-2">
        <MapPin className="w-4 h-4 text-gray-500 mr-1" />
        <span className="text-sm text-gray-500">{hotel.location}</span>
      </div>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < hotel.rating ? 'text-yellow-400' : 'text-gray-300'
            } fill-current`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">({hotel.reviews} reviews)</span>
      </div>
      <p className="text-gray-600 mb-4">{hotel.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">${hotel.price}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  </div>
)

export default function browseHotels() {
  const hotels = [
    {
      id: 1,
      name: "Luxury Resort & Spa",
      location: "Maldives",
      rating: 4.8,
      reviews: 1205,
      description: "Experience ultimate luxury in our beachfront villas with private pools.",
      price: 599,
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      id: 2,
      name: "City Center Hotel",
      location: "New York City",
      rating: 4.2,
      reviews: 876,
      description: "Stay in the heart of Manhattan, close to all major attractions.",
      price: 299,
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      id: 3,
      name: "Mountain Lodge",
      location: "Swiss Alps",
      rating: 4.6,
      reviews: 542,
      description: "Cozy lodge with breathtaking mountain views and ski-in/ski-out access.",
      price: 399,
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      id: 4,
      name: "Mountain Lodge",
      location: "Swiss Alps",
      rating: 4.6,
      reviews: 542,
      description: "Cozy lodge with breathtaking mountain views and ski-in/ski-out access.",
      price: 399,
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      id: 5,
      name: "Mountain Lodge",
      location: "Swiss Alps",
      rating: 4.6,
      reviews: 542,
      description: "Cozy lodge with breathtaking mountain views and ski-in/ski-out access.",
      price: 399,
      image: "/placeholder.svg?height=300&width=400"
    },{
      id: 6,
      name: "Mountain Lodge",
      location: "Swiss Alps",
      rating: 4.6,
      reviews: 542,
      description: "Cozy lodge with breathtaking mountain views and ski-in/ski-out access.",
      price: 399,
      image: "/placeholder.svg?height=300&width=400"
    },{
      id: 7,
      name: "Mountain Lodge",
      location: "Swiss Alps",
      rating: 4.6,
      reviews: 542,
      description: "Cozy lodge with breathtaking mountain views and ski-in/ski-out access.",
      price: 399,
      image: "/placeholder.svg?height=300&width=400"
    },{
      id: 8,
      name: "Mountain Lodge",
      location: "Swiss Alps",
      rating: 4.6,
      reviews: 542,
      description: "Cozy lodge with breathtaking mountain views and ski-in/ski-out access.",
      price: 399,
      image: "/placeholder.svg?height=300&width=400"
    },{
      id: 9,
      name: "Mountain Lodge",
      location: "Swiss Alps",
      rating: 4.6,
      reviews: 542,
      description: "Cozy lodge with breathtaking mountain views and ski-in/ski-out access.",
      price: 399,
      image: "/placeholder.svg?height=300&width=400"
    },{
      id: 10,
      name: "Mountain Lodge",
      location: "Swiss Alps",
      rating: 4.6,
      reviews: 542,
      description: "Cozy lodge with breathtaking mountain views and ski-in/ski-out access.",
      price: 399,
      image: "/placeholder.svg?height=300&width=400"
    },{
      id: 11,
      name: "Mountain Lodge",
      location: "Swiss Alps",
      rating: 4.6,
      reviews: 542,
      description: "Cozy lodge with breathtaking mountain views and ski-in/ski-out access.",
      price: 399,
      image: "/placeholder.svg?height=300&width=400"
    },{
      id: 12,
      name: "Mountain Lodge",
      location: "Swiss Alps",
      rating: 4.6,
      reviews: 542,
      description: "Cozy lodge with breathtaking mountain views and ski-in/ski-out access.",
      price: 399,
      image: "/placeholder.svg?height=300&width=400"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Hotel Finder</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search hotels..."
              className="w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>
      </header> */}
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">This are hotels you can book in Bongo Hotel</h2>
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-50">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>
<div className="border-yellow-700 rounded border-4 items-center">
<Shadform />
</div>
<br></br>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-current="page" className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              1
            </a>
            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              2
            </a>
            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
              8
            </a>
            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              9
            </a>
            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </main>
    </div>
  )
}