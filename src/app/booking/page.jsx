// 

'use client'

import React from 'react'
import { Wifi, Coffee, Utensils, Car, Dumbbell, Spa } from 'lucide-react'
import HotelHeader from '../components/HotelHeader/hotelHeader'
import PhotoGallery from '../components/PhotoGallery/photoGallery'
import RoomTypes from '../components/RoomTypesAndPrices/roomTypesAndPrice'
import Amenities from '../components/Amenities/amenities'
import HotelReviews from '../components/Reviews/review'
import MapSection from '../components/LocationAndMap/locationAndMap'
import Policies from '../components/Policies/policies'
import BookingForm from '../components/BookingForm/bookingForm'
import FAQs from '../components/FAQ/faq'
import SpecialOffers from '../components/SpecialOffers/specialOffers'
import PageHeader from '../components/PageHeader/pageheader'
import HotelOverview from '../components/HotelOverview/hotelOverview'

const hotelData = {
  name: "Luxury Resort & Spa",
  description: "Experience unparalleled luxury at our resort, nestled in the heart of Paradise City. With breathtaking views, world-class amenities, and impeccable service, we offer an unforgettable escape for discerning travelers.",
  images: [
    "/public/assets/pictures/1.jpg",
    "/placeholder.svg?height=200&width=300&text=Hotel+Image+2",
    "/placeholder.svg?height=200&width=300&text=Hotel+Image+3",
    "/placeholder.svg?height=200&width=300&text=Hotel+Image+4"
  ],
  rooms: [
    { type: 'Standard Room', description: 'Comfortable and spacious accommodation', price: 100 },
    { type: 'Deluxe Suite', description: 'Luxurious suite with separate living area', price: 200 },
    { type: 'Executive Suite', description: 'Top-tier suite with panoramic views', price: 300 }
  ],
  amenities: [
    { name: 'Free Wi-Fi', icon: <Wifi className="w-6 h-6" /> },
    { name: 'Breakfast Included', icon: <Coffee className="w-6 h-6" /> },
    { name: 'Restaurant', icon: <Utensils className="w-6 h-6" /> },
    { name: 'Free Parking', icon: <Car className="w-6 h-6" /> },
    { name: 'Fitness Center', icon: <Dumbbell className="w-6 h-6" /> },
    { name: 'Spa', icon: <Spa className="w-6 h-6" /> }
  ],
  reviews: [
    { name: 'John Doe', rating: 5, comment: 'Excellent stay! The staff was very friendly and the amenities were top-notch.' },
    { name: 'Jane Smith', rating: 4, comment: 'Great location and comfortable rooms. The breakfast could be improved.' },
    { name: 'Mike Johnson', rating: 5, comment: 'Absolutely loved my stay here. The spa services were incredible!' }
  ],
  location: {
    address: '123 Luxury Avenue, Paradise City, 12345',
    mapImage: '/placeholder.svg?height=400&width=800&text=Map'
  },
  policies: {
    checkin: {
      title: 'Check-in/Check-out Policy',
      content: [
        'Check-in time: 3:00 PM',
        'Check-out time: 11:00 AM',
        'Early check-in and late check-out available upon request (additional fees may apply)'
      ]
    },
    cancellation: {
      title: 'Cancellation Policy',
      content: [
        'Free cancellation up to 48 hours before check-in',
        'Cancellations made within 48 hours of check-in are subject to a one-night charge'
      ]
    },
    pets: {
      title: 'Pet Policy',
      content: [
        'Pets are welcome (dogs and cats only)',
        'Maximum of 2 pets per room',
        'Additional pet fee of $50 per night'
      ]
    }
  },
  faqs: [
    {
      question: 'Is breakfast included in the room rate?',
      answer: 'Yes, breakfast is included in the room rate for all guests. We offer a full buffet breakfast with a variety of hot and cold options.'
    },
    {
      question: 'Do you offer airport transfers?',
      answer: 'Yes, we offer airport transfers for an additional fee. Please contact our concierge service to arrange your transfer.'
    },
    {
      question: 'Is there a minimum stay requirement?',
      answer: 'Our minimum stay requirement varies depending on the season. During peak seasons, we may require a minimum stay of 2-3 nights.'
    }
  ],
  specialOffers: [
    { title: 'Summer Getaway', description: 'Book 3 nights, get the 4th night free!', code: 'SUMMER2023' },
    { title: 'Spa Package', description: 'Book any room and get a complimentary 60-minute spa treatment', code: 'SPAWEEK' }
  ]
};

export default function HotelBookingPage() {
  return (
    <main className="bg-gray-100 pb-16">
      <PageHeader pageTitle="Booking" />
      <div className="container mx-auto mt-16 py-12 px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg">
        <HotelHeader name={hotelData.name} />
        <HotelOverview description={hotelData.description} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <PhotoGallery images={hotelData.images} />
          </div>
          <div>
            <RoomTypes rooms={hotelData.rooms} />
            <Amenities amenities={hotelData.amenities} />
          </div>
        </div>
        <HotelReviews reviews={hotelData.reviews} />
        <MapSection location={hotelData.location} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Policies policies={hotelData.policies} />
          <BookingForm rooms={hotelData.rooms} />
        </div>
        <FAQs faqs={hotelData.faqs} />
        <SpecialOffers offers={hotelData.specialOffers} />
      </div>
    </main>
  )
}