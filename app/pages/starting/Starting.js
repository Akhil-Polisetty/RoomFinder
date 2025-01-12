"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { ArrowRight, Home, Search, List, Info, Phone } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import RoomCard from "@/components/RoomCard";
import { HeroSlider } from "@/components/HeroSlider";
const Starting = () => {
  const router = useRouter();

  function handleCreateRoom() {
    const log = Cookies.get("logged");
    if (log) {
      router.push("/pages/dashboard");
    } else {
      router.push("/pages/login");
    }
  }

  function handleSearchRoom() {
    const log = Cookies.get("logged");
    if (log) {
      router.push("/pages/getrooms");
    } else {
      router.push("/pages/login");
    }
  }

  // Sample room data for demonstration
  const sampleRooms = [
    {
      _id: "1",
      name: "Cozy Studio Apartment",
      roomtype: "Studio",
      allowedtype: "All",
      address: "123 Main St, Anytown",
      city: "Anytown",
      rent: 15000,
      rating: 4.5,
      pics: ["/placeholder.svg"],
    },
    {
      _id: "2",
      name: "Spacious 2BHK",
      roomtype: "Apartment",
      allowedtype: "Family",
      address: "456 Oak Ave, Somecity",
      city: "Somecity",
      rent: 25000,
      rating: 4.8,
      pics: ["/placeholder.svg"],
    },
    {
      _id: "3",
      name: "Student Hostel Room",
      roomtype: "Shared",
      allowedtype: "Students",
      address: "789 College Rd, Univille",
      city: "Univille",
      rent: 8000,
      rating: 4.2,
      pics: ["/placeholder.svg"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* <Navbar /> */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-600 mb-8">
          Welcome to RoomFinder
        </h1>

        <HeroSlider />

        {/* <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:flex-1 p-8 flex flex-col justify-center bg-green-100">
              <h2 className="text-4xl font-bold text-green-800 mb-6">
                Find Your Perfect Room
              </h2>
              <p className="text-xl text-green-700 mb-8">
                Discover ideal living spaces without the need for a broker. Your dream room is just a click away!
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleCreateRoom}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center"
                >
                  Create a Room <ArrowRight className="ml-2" />
                </button>
                <button
                  onClick={handleSearchRoom}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center"
                >
                  Search Rooms <Search className="ml-2" />
                </button>
              </div>
            </div>
            <div className="md:flex-1">
              <Image
                src="/placeholder.svg"
                alt="Cozy room interior"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div> */}

        <div className="mt-8">
          <div
          className="font-bold text-green-600 text-3xl">Our Services</div>
          <div className="grid md:grid-cols-3 gap-8 mt-8 mb-12">
            <FeatureCard
              icon={<Home className="w-12 h-12 text-green-500" />}
              title="Create a Room"
              description="List your property effortlessly. Add details, photos, and set your terms to attract the perfect tenants."
              buttonText="Create a Room"
              onClick={handleCreateRoom}
            />
            <FeatureCard
              icon={<Search className="w-12 h-12 text-blue-500" />}
              title="Search for a Room"
              description="Find your ideal space. Filter by location, budget, and amenities to discover the perfect match for your needs."
              buttonText="Search Rooms"
              onClick={handleSearchRoom}
            />
            <FeatureCard
              icon={<List className="w-12 h-12 text-purple-500" />}
              title="Manage Your Rooms"
              description="Keep your listings up-to-date. Edit details, update availability, and manage your property portfolio with ease."
              buttonText="Your Rooms"
              onClick={() => {}}
            />
          </div>
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            Featured Rooms
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {sampleRooms.map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}
          </div>{" "}
        </div>

        <section
          id="about_us"
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-6">About Us</h2>
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <Image
                src="/about_logo.jpeg"
                alt="Our team"
                width={600}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg text-gray-700 mb-4">
                We're passionate about connecting people with their perfect
                living spaces. Our platform simplifies the process of finding
                and listing rooms, eliminating the need for middlemen and making
                housing accessible to everyone.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2023, we've helped thousands of people find their
                ideal homes and assisted property owners in finding reliable
                tenants. Our mission is to create a transparent, efficient, and
                user-friendly rental marketplace.
              </p>
              <Link
                href="/about"
                className="text-green-500 hover:text-green-600 font-semibold flex items-center"
              >
                Learn more about our story <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <section
          id="contact_us"
          className="bg-green-100 rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-6">Contact Us</h2>
          <div className="md:flex">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <p className="text-lg text-gray-700 mb-4">
                We're here to help! If you have any questions, concerns, or
                feedback, please don't hesitate to reach out to us.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-green-500 mr-2" />
                  <span className="text-lg text-gray-700">
                    +91 1234567890
                  </span>
                </div>
                <div className="flex items-center">
                  <Info className="w-6 h-6 text-green-500 mr-2" />
                  <span className="text-lg text-gray-700">
                    info@roomfinder.com
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Starting;
