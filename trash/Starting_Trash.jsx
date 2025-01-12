// // "use client";
// // import React from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import Cookies from "js-cookie";
// // const Starting = () => {
// //   const router = useRouter();

// //   function handleCreateRoom() {
// //     const log = Cookies.get("logged");
// //     if (log) {
// //       router.push("/pages/dashboard");
// //     } else {
// //       router.push("/pages/login");
// //     }
// //   }
// //   function handleSearchRoom() {
// //     const log = Cookies.get("logged");
// //     if (log) {
// //       router.push("/pages/getrooms");
// //     } else {
// //       router.push("/pages/login");
// //     }
// //   }

// //   return (
// //     <div className="starti">
// //       <div className=" flex flex-col">
// //         <h1 className="text-left font-[46] text-xl p-2 text-[30px]">
// //           Welcome Username
// //           {/* <img
// //             src="https://th.bing.com/th/id/OIP.45-b1BjHqRqUfiInVhH5oQHaHa?w=165&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
// //             alt="logo"
// //             width={30}
// //             height={30}
// //           /> */}
// //         </h1>
// //         <div className="w-full  h-[550px] flex justify-between flex-wrap bg-green-300">
// //           <div className="flex-2  flex items-center hero_cont " >

// //             <h1 className="text-4xl  flex justify-center p-2 mb-24 font-bolder">
// //             <p className="w-[60%]  ">
// //             {/* Add UI here */}
// //               Find your perfect rooms here with out need of any broker
// //             </p>
// //             </h1>
// //           </div>
// //           {/* <p className="text-3xl font-bold" >Hero Section</p> */}
// //           <div className="bg-violet-200 flex-1">
// //           {/* Add Ui Here */}
// //           Hello
// //           </div>
// //         </div>
// //       </div>
// //       <div className="h-1 bg-red-50 mt-4"></div>
// //       <div className="about-page">
// //         <div className="flex gap-8 mt-5 border-2 border-green-200 p-2">
// //           <img
// //             src="https://th.bing.com/th/id/OIP.45-b1BjHqRqUfiInVhH5oQHaHa?w=165&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
// //             width={225}
// //             height={225}
// //             alt=""
// //           />
// //           <div className="flex flex-col gap-4 justify-around">
// //             <div className="text-xl mt-5">
// //               Add details of the available room or house for rent, including
// //               property type, location, rent amount, and availability date.
// //               Highlight key features such as size, furnished status, included
// //               utilities, and amenities like parking or shared spaces. Mention
// //               nearby landmarks and any specific rules, like pet or smoking
// //               policies. Attach clear photos of the property and provide your
// //               contact details for inquiries, along with terms of the rental
// //               agreement.
// //             </div>
// //             <button
// //               onClick={handleCreateRoom}
// //               className="hello-b bg-green-500 text-white p-2 rounded-md w-32"
// //             >
// //               Create a Room
// //             </button>
// //           </div>
// //         </div>
// //         <div className="flex gap-8 mt-5 border-2 border-green-200 p-2">
// //           <img
// //             src="https://th.bing.com/th/id/OIP.45-b1BjHqRqUfiInVhH5oQHaHa?w=165&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
// //             width={225}
// //             height={225}
// //             alt=""
// //           />
// //           <div className="flex flex-col gap-4 justify-around ">
// //             <div className="text-xl mt-5">
// //               Here, you can search for rooms or houses tailored to your
// //               preferences, including location, type of stay, and budget. Filter
// //               listings by rent amount, furnished status, and amenities like
// //               parking or internet. Easily compare options and explore properties
// //               near key landmarks or transport hubs. Find detailed descriptions,
// //               photos, and contact details to help you make an informed choice.{" "}
// //             </div>
// //             <button
// //               onClick={handleSearchRoom}
// //               className="hello-b bg-green-500 text-white p-2 rounded-md w-36"
// //             >
// //               Search for a room
// //             </button>
// //           </div>
// //         </div>
// //         <div className="flex gap-8 mt-5 border-2 border-green-200 p-2">
// //           <img
// //             src="https://th.bing.com/th/id/OIP.45-b1BjHqRqUfiInVhH5oQHaHa?w=165&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
// //             width={225}
// //             height={225}
// //             alt=""
// //           />
// //           <div className="flex flex-col gap-4 justify-around">
// //             <div className="text-xl mt-5">
// //               Here are the rooms you’ve listed for rent, complete with all the
// //               details provided. You can update any information, such as rent
// //               amount, availability, or amenities, to keep the listings accurate
// //               and appealing. Easily edit or remove a room from the list as
// //               needed. Ensure the details remain up-to-date to attract the right
// //               tenants quickly.{" "}
// //             </div>
// //             <button className="hello-b bg-green-500 text-white p-2 rounded-md w-32">
// //               Your Rooms
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //       <section
// //         id="about_us"
// //         className="w-full h-screen flex justify-center items-center bg-blue-200"
// //       >
// //       {/* Add ui here     */}
// //         About us page
// //       </section>
// //       <section
// //         id="contact_us"
// //         className="w-full h-screen flex justify-center items-center bg-red-200"
// //       >
// //       {/* Add ui here */}
// //         Contact Us page
// //       </section>
// //     </div>
// //   );
// // };

// // export default Starting;

// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";
// import { ArrowRight, Home, Search, List, Info, Phone } from 'lucide-react';

// const Starting = () => {
//   const router = useRouter();

//   function handleCreateRoom() {
//     const log = Cookies.get("logged");
//     if (log) {
//       router.push("/pages/dashboard");
//     } else {
//       router.push("/pages/login");
//     }
//   }

//   function handleSearchRoom() {
//     const log = Cookies.get("logged");
//     if (log) {
//       router.push("/pages/getrooms");
//     } else {
//       router.push("/pages/login");
//     }
//   }

//   return (
//     <div className="starti min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold text-green-600 mb-8">
//           Welcome, Username
//         </h1>

//         <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
//           <div className="md:flex">
//             <div className="md:flex-1 p-8 flex flex-col justify-center bg-green-100">
//               <h2 className="text-4xl font-bold text-green-800 mb-6">
//                 Find Your Perfect Room
//               </h2>
//               <p className="text-xl text-green-700 mb-8">
//                 Discover ideal living spaces without the need for a broker. Your dream room is just a click away!
//               </p>
//               <div className="flex space-x-4">
//                 <button
//                   onClick={handleCreateRoom}
//                   className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center"
//                 >
//                   Create a Room <ArrowRight className="ml-2" />
//                 </button>
//                 <button
//                   onClick={handleSearchRoom}
//                   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center"
//                 >
//                   Search Rooms <Search className="ml-2" />
//                 </button>
//               </div>
//             </div>
//             <div className="md:flex-1">
//               <Image
//                 src="/placeholder.svg"
//                 alt="Cozy room interior"
//                 width={600}
//                 height={400}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 mb-12">
//           <FeatureCard
//             icon={<Home className="w-12 h-12 text-green-500" />}
//             title="Create a Room"
//             description="List your property effortlessly. Add details, photos, and set your terms to attract the perfect tenants."
//             buttonText="Create a Room"
//             onClick={handleCreateRoom}
//           />
//           <FeatureCard
//             icon={<Search className="w-12 h-12 text-blue-500" />}
//             title="Search for a Room"
//             description="Find your ideal space. Filter by location, budget, and amenities to discover the perfect match for your needs."
//             buttonText="Search Rooms"
//             onClick={handleSearchRoom}
//           />
//           <FeatureCard
//             icon={<List className="w-12 h-12 text-purple-500" />}
//             title="Manage Your Rooms"
//             description="Keep your listings up-to-date. Edit details, update availability, and manage your property portfolio with ease."
//             buttonText="Your Rooms"
//             onClick={() => {}}
//           />
//         </div>

//         <section id="about_us" className="bg-white rounded-lg shadow-lg p-8 mb-12">
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
//       </div>
//     </div>
//   );
// };

// const FeatureCard = ({ icon, title, description, buttonText, onClick }) => (
//   <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
//     <div>
//       <div className="mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-gray-600 mb-4">{description}</p>
//     </div>
//     <button
//       onClick={onClick}
//       className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
//     >
//       {buttonText}
//     </button>
//   </div>
// );

// export default Starting;