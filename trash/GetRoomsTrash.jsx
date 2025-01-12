// // "use client";
// // import React, { useState, useEffect } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // const GetRooms = () => {
// //   const [rooms, setRooms] = useState([]); // State to hold room data
// //   const [loading, setLoading] = useState(true); // State to manage loading
// //   const [error, setError] = useState(""); // State to manage errors
// //   const [city, setCity] = useState(""); // State to hold the city input by the user

// //   // Function to fetch rooms based on city
// //   const fetchRooms = async (city) => {
// //     if (!city) return; // Prevent fetching if city is empty
// //     try {
// //       const res = await fetch(`/api/searchroom?city=${city}`, {
// //         method: "GET",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       });

// //       if (res.ok) {
// //         const data = await res.json();
// //         setRooms(data); // Set the fetched rooms in state
// //       } else {
// //         const errorData = await res.json();
// //         setError(errorData.message || "Failed to fetch rooms");
// //       }
// //     } catch (err) {
// //       setError("An error occurred while fetching rooms");
// //     } finally {
// //       setLoading(false); // Stop loading regardless of success or failure
// //     }
// //   };

// //   // Trigger the API call when city changes or user submits
// //   const handleSearch = () => {
// //     setLoading(true); // Set loading to true when starting a new search
// //     fetchRooms(city); // Fetch rooms based on the city input
// //   };

// //   return (
// //     <div className="w-full h-full flex flex-col bg-slate-100 justify-center items-center">
// //       <div className="bg-green-500 text-white font-calibri font-bold text-2xl p-4 mb-6 rounded-lg shadow-lg">
// //         Welcome to Rooms4U
// //       </div>

// //       {/* Input for the city */}
// //       <div className="flex mb-4">
// //         <input
// //           type="text"
// //           placeholder="Enter city"
// //           value={city}
// //           onChange={(e) => setCity(e.target.value)} // Update city state on input change
// //           className="p-2 border-2 border-gray-300 rounded-md mr-2"
// //         />

// //         <button
// //           onClick={handleSearch} // Trigger the search when the button is clicked
// //           className="bg-blue-500 text-white p-2 rounded-md"
// //         >
// //           Search Rooms
// //         </button>
// //       </div>

// //       {loading ? (
// //         <div className="loader"></div> // Show loader while fetching rooms
// //       ) : error ? (
// //         <p className="text-red-500">{error}</p> // Display error message
// //       ) : rooms.length > 0 ? (
// //         <div className="flex flex-wrap gap-6 justify-center items-center p-4">
// //           {rooms.map((room, index) => (
// //             <div
// //               key={index}
// //               className="bg-yellow-600 p-6 rounded-md border-2 border-white w-80 shadow-lg hover:shadow-xl transition duration-300"
// //             >
// //               <h3 className="text-xl font-bold mb-2">{room.roomtype}</h3>
// //               <p>
// //                 <strong>Allowed Type:</strong> {room.allowedtype}
// //               </p>
// //               <p>
// //                 <strong>Address:</strong> {room.address}
// //               </p>
// //               <p>
// //                 <strong>Rent:</strong> ₹{room.rent}
// //               </p>
// //               {room.notes && (
// //                 <p>
// //                   <strong>Notes:</strong> {room.notes}
// //                 </p>
// //               )}
// //               {room.pics.length > 0 && (
// //                 <div className="flex gap-2 overflow-x-auto my-2">
// //                   {room.pics.map((pic, picIndex) => (
// //                     <Image
// //                       key={picIndex}
// //                       src={pic}
// //                       alt={`Room Pic ${picIndex + 1}`}
// //                       height={150}
// //                       width={150}
// //                       className="rounded-md shadow-md"
// //                     />
// //                   ))}
// //                 </div>
// //               )}
// //               <p>
// //                 <strong>Rating:</strong> {room.rating} / 5
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <p className="text-gray-500">No rooms found for the selected city.</p>
// //       )}

// //       {/* Add styles for the loader */}
// //       <style jsx>{`
// //         .loader {
// //           border: 4px solid #f3f3f3; /* Light grey */
// //           border-top: 4px solid #3498db; /* Blue */
// //           border-radius: 50%;
// //           width: 24px;
// //           height: 24px;
// //           animation: spin 1s linear infinite;
// //         }

// //         @keyframes spin {
// //           0% {
// //             transform: rotate(0deg);
// //           }
// //           100% {
// //             transform: rotate(360deg);
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default GetRooms;

// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import RoomCard from "@/components/RoomCard";
// import Cookies from "js-cookie";
// import Image from "next/image";
// import { ArrowRight, Home, Search, List, Info, Phone } from 'lucide-react';
// const GetRooms = () => {
//   let FinCity=Cookies.get("city");
//   const [rooms, setRooms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [city, setCity] = useState("");
//   const router = useRouter();

//   useEffect(()=>{
//     fetchRooms(FinCity)
//   },[])

//   const fetchRooms = async (city) => {
    
//     console.log("the city name is ",city)
//     if (!city) {
//       console.log("please enter city")
//       setError("please enter city to find rooms")
//     }
//     setLoading(true);
//     try {
//       const res = await fetch(`/api/searchroom?city=${city}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (res.ok) {
//         Cookies.set("city", city);
//         const data = await res.json();
//         setRooms(data);
//         setError("");
//       } else {
//         const errorData = await res.json();
//         setError(errorData.message || "Failed to fetch rooms");
//       }
//     } catch (err) {
//       setError("An error occurred while fetching rooms");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = () => {
//     fetchRooms(city);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-blue-600 text-white py-6 mb-8">
//         <div className="container mx-auto px-4">
//           <h1 className="text-3xl font-bold">Welcome to Rooms4U</h1>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 min-h-screen ">
//         <div className="mb-8">
//           <div className="flex max-w-md mx-auto">
//             <input
//               type="text"
//               placeholder="Enter city"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               className="flex-grow p-3 text-black border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               onClick={handleSearch}
//               className="bg-blue-500 text-white px-6 py-3 rounded-r-md hover:bg-blue-600 transition duration-300"
//             >
//               Search Rooms
//             </button>
//             <div className="text-black">Filter</div>
//           </div>
//         </div>

//         {loading && (
//           <div className="flex justify-center">
//             <div className="loader"></div>
//           </div>
//         )}

//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         {!loading && !error && rooms.length > 0 && (
//           <div className="flex justify-around flex-wrap">
//             {rooms.map((room, index) => (
//               <RoomCard key={index} room={room} />
//             ))}
//           </div>
//         )}

//         {!loading && !error && rooms.length === 0 && (
//           <p className="text-gray-500 text-center">
//             No rooms found for the selected city.
//           </p>
//         )}
//       </main>

//       <style jsx>{`
//         .loader {
//           border: 4px solid #f3f3f3;
//           border-top: 4px solid #3498db;
//           border-radius: 50%;
//           width: 40px;
//           height: 40px;
//           animation: spin 1s linear infinite;
//         }

//         @keyframes spin {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>

//       <section id="about_us" className="bg-white rounded-lg shadow-lg p-8 mb-12">
//           <h2 className="text-3xl font-bold text-green-600 mb-6">About Us</h2>
//           <div className="md:flex items-center">
//             <div className="md:w-1/2 mb-6 md:mb-0">
//               <Image
//                 src="/placeholder.svg"
//                 alt="Our team"
//                 width={500}
//                 height={300}
//                 className="rounded-lg shadow-md"
//               />
//             </div>
//             <div className="md:w-1/2 md:pl-8">
//               <p className="text-lg text-gray-700 mb-4">
//                 We are passionate about connecting people with their perfect living spaces. Our platform simplifies the process of finding and listing rooms, eliminating the need for middlemen and making housing accessible to everyone.
//               </p>
//               <p className="text-lg text-gray-700 mb-4">
//                 Founded in 2023, we have helped thousands of people find their ideal homes and assisted property owners in finding reliable tenants. Our mission is to create a transparent, efficient, and user-friendly rental marketplace.
//               </p>
//               <Link href="/about" className="text-green-500 hover:text-green-600 font-semibold flex items-center">
//                 Learn more about our story <ArrowRight className="ml-2" />
//               </Link>
//             </div>
//           </div>
//         </section>

//         <section id="contact_us" className="bg-green-100 rounded-lg shadow-lg p-8">
//           <h2 className="text-3xl font-bold text-green-600 mb-6">Contact Us</h2>
//           <div className="md:flex">
//             <div className="md:w-1/2 mb-6 md:mb-0">
//               <p className="text-lg text-gray-700 mb-4">
//                 We are here to help! If you have any questions, concerns, or feedback, please do not hesitate to reach out to us.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <Phone className="w-6 h-6 text-green-500 mr-2" />
//                   <span className="text-lg text-gray-700">+1 (555) 123-4567</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Info className="w-6 h-6 text-green-500 mr-2" />
//                   <span className="text-lg text-gray-700">info@roomfinder.com</span>
//                 </div>
//               </div>
//             </div>
//             <div className="md:w-1/2 md:pl-8">
//               <form className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//                 <textarea
//                   placeholder="Your Message"
//                   rows={4}
//                   className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 ></textarea>
//                 <button
//                   type="submit"
//                   className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>

//     </div>
//   );
// };

// export default GetRooms;
