'use client'

import { useState } from 'react'
import Image from 'next/image'

// Sample image data - replace with your actual image data
const images = [
  { id: 1, src: '/assets/pictures/1.jpg', alt: 'Image 1' },
  { id: 2, src: '/assets/pictures/homebg.jpg', alt: 'Image 2' },
  { id: 3, src: '/assets/pictures/homepic.jpg', alt: 'Image 3' },
  { id: 4, src: '/assets/pictures/1.jpg', alt: 'Image 4' },
  { id: 5, src: '/assets/pictures/1.jpg', alt: 'Image 5' },
  { id: 6, src: '/assets/pictures/1.jpg', alt: 'Image 6' },
]

export default function PhotoGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  const openPopup = (index) => {
    setSelectedImageIndex(index)
  }

  const closePopup = () => {
    setSelectedImageIndex(null)
  }

  const navigateImage = (direction) => {
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex + direction
      if (newIndex < 0) return images.length - 1
      if (newIndex >= images.length) return 0
      return newIndex
    })
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openPopup(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closePopup}>
          <div className="relative max-w-3xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
              onClick={closePopup}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
              onClick={() => navigateImage(-1)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
              onClick={() => navigateImage(1)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}