'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RoomDetails = ({ room }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === room.pics.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? room.pics.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Room Details</h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            {room.pics.length > 0 && (
              <Image
                src={room.pics[currentImageIndex]}
                alt={`Room Image ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="cover"
              />
            )}
            {room.pics.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                  &#10094;
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                  &#10095;
                </button>
              </>
            )}
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{room.roomtype}</h2>
            <p className="mb-2">
              <span className="font-semibold">Allowed Type:</span> {room.allowedtype}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Address:</span> {room.address}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Rent:</span> ₹{room.rent}
            </p>
            {room.notes && (
              <p className="mb-2">
                <span className="font-semibold">Notes:</span> {room.notes}
              </p>
            )}
            <p className="mb-4">
              <span className="font-semibold">Rating:</span> {room.rating} / 5
            </p>

            <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Back to Rooms List
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoomDetails;

