// const LocationAndMap = () => {
//     return (
//       <div className="bg-gray-100 p-6 mb-6">
//         <h2 className="text-2xl font-bold mb-4">Location and Map of the Hotel</h2>
//         <div className="w-full h-64 bg-gray-300">Map Placeholder </div>
//       </div>
//     );
//   };
// export default LocationAndMap;  

'use client'

import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
})

// Sample hotel data
const hotels = [
  { id: 1, name: "Golden Queen Deluxe Jacuzzi Apartments", lat: 51.505, lng: -0.09, rating: 4.5 },
  { id: 2, name: "Silver King Luxury Suites", lat: 51.51, lng: -0.1, rating: 4.2 },
  { id: 3, name: "Bronze Duke Budget Inn", lat: 51.515, lng: -0.09, rating: 3.8 },
]

export default function LocationAndMap() {
  const [map, setMap] = useState(null)

  useEffect(() => {
    if (map) {
      map.fitBounds(hotels.map(hotel => [hotel.lat, hotel.lng]))
    }
  }, [map])

  return (
    <div className="w-full h-[500px] relative">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hotels.map((hotel) => (
          <Marker key={hotel.id} position={[hotel.lat, hotel.lng]}>
            <Popup>
              <div>
                <h3 className="font-bold">{hotel.name}</h3>
                <p>Rating: {hotel.rating}/5</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
    </div>
  )
}