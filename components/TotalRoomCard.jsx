// "use client";
import React from "react";
import { Image } from "antd";
import { Home, Users, MapPin, Star, Phone } from 'lucide-react';

const TotalRoomCard = ({ room }) => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 text-black">
      {room && (
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
                {room.name || "Room Details"}
              </h1>
              <div className="md:flex">
                <div className="md:w-1/2 pr-4">
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">About this room</h2>
                    <p className="text-gray-600 mb-2">
                      A {room.roomtype} with all needed facilities
                    </p>
                    <p className="text-gray-600 mb-2">
                      {room.allowedtype === "family"
                        ? "Strictly for families only."
                        : room.allowedtype === "girls"
                        ? "Only girls are allowed."
                        : room.allowedtype === "boys"
                        ? "Only boys are allowed."
                        : room.allowedtype === "students"
                        ? "Only students are allowed."
                        : "All types of people are allowed for renting."}
                    </p>
                  </div>
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Location</h2>
                    <p className="text-gray-600 mb-2">
                      <MapPin className="inline-block mr-2" />
                      {room.address}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <MapPin className="inline-block mr-2" />
                      {room.city.toUpperCase()}
                    </p>
                  </div>
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
                    <p className="text-gray-600 mb-2">
                      <span className="font-bold text-green-600 text-xl">₹{room.rent}</span> per month
                    </p>
                  </div>
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Rating</h2>
                    <p className="text-gray-600 mb-2">
                      <Star className="inline-block mr-2 text-yellow-400" />
                      {room.rating}/5
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Room Photos</h2>
                    {room.pics.length > 0 && (
                      <Image.PreviewGroup
                        preview={{
                          onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {room.pics.map((pic, index) => (
                            <Image key={index} src={pic} alt={`Room image ${index + 1}`} className="rounded-lg" />
                          ))}
                        </div>
                      </Image.PreviewGroup>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Contact the Owner</h2>
                <form className="bg-gray-100 p-6 rounded-lg">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-lg" required></textarea>
                  </div>
                  <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TotalRoomCard;

