"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RoomCard from "@/components/RoomCard";
import Cookies from "js-cookie";
import Image from "next/image";
import { ArrowRight, Home, Search, Info, Phone, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const GetRooms = () => {
  let FinCity = Cookies.get("city");
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchRooms(FinCity);
  }, []);

  const fetchRooms = async (city) => {
    if (!city) {
      setError("Please enter a city to find rooms");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/searchroom?city=${city}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        Cookies.set("city", city);
        const data = await res.json();
        setRooms(data);
        setError("");
      } else {
        const errorData = await res.json();
        setError(errorData.message || "Failed to fetch rooms");
      }
    } catch (err) {
      setError("An error occurred while fetching rooms");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchRooms(city);
  };

  return (
    <div className="min-h-screen text-black bg-gradient-to-b from-green-50 to-blue-50">
      <header className="bg-green-600 text-white py-6 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Find Your Perfect Room</h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-grow"
            />
            <Button
              onClick={handleSearch}
              className="ml-2"
            >
              <Search className="mr-2 h-4 w-4" /> Search Rooms
            </Button>
            <Button variant="outline" className="ml-2">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
          </div>
        </div>

        {loading && (
          <div className="flex justify-center">
            <div className="loader"></div>
          </div>
        )}

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {!loading && !error && rooms.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room, index) => (
              <RoomCard key={index} room={room} />
            ))}
          </div>
        )}

        {!loading && !error && rooms.length === 0 && (
          <p className="text-gray-500 text-center">
            No rooms found for the selected city.
          </p>
        )}
      </main>

      <section id="about_us" className="bg-white rounded-lg shadow-lg p-8 my-12 container mx-auto">
        <h2 className="text-3xl font-bold text-green-600 mb-6">About Us</h2>
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/placeholder.svg"
              alt="Our team"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg text-gray-700 mb-4">
              We are passionate about connecting people with their perfect living spaces. Our platform simplifies the process of finding and listing rooms, eliminating the need for middlemen and making housing accessible to everyone.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Founded in 2023, we have helped thousands of people find their ideal homes and assisted property owners in finding reliable tenants. Our mission is to create a transparent, efficient, and user-friendly rental marketplace.
            </p>
            <Link href="/about" className="text-green-500 hover:text-green-600 font-semibold flex items-center">
              Learn more about our story <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section id="contact_us" className="bg-green-100 rounded-lg shadow-lg p-8 my-12 container mx-auto">
        <h2 className="text-3xl font-bold text-green-600 mb-6">Contact Us</h2>
        <div className="md:flex">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="text-lg text-gray-700 mb-4">
              We are here to help! If you have any questions, concerns, or feedback, please do not hesitate to reach out to us.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-green-500 mr-2" />
                <span className="text-lg text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Info className="w-6 h-6 text-green-500 mr-2" />
                <span className="text-lg text-gray-700">info@roomfinder.com</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                className="w-full"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="w-full"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        .loader {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default GetRooms;

