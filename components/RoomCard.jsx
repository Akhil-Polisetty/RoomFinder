// "use client"
// import React from "react";
// // import Image from "next/image";
// import { Image } from "antd";
// import { useRouter } from "next/navigation";
// const RoomCard = ({ room }) => {
//     const router=useRouter();
//     async function hanldeNavigation(roomid){
//         router.push(`/pages/room/${roomid}`)
//     }
//   return (
//     <div
//     onClick={()=>hanldeNavigation(room._id)}
//     className="flex flex-col gap-2 w-[30vw] text-black
//      bg-green-200 border-2 border-violet-400
//      rounded-2xl b p-2 mt-2
//      shadow">
//       <div className="thumbnail_pic text-center font-bold text-2xl mb-4 ">Room Details</div>
//       <div className="flex flex-wrap justify-between gap-6 ">
//         <div className="flex flex-col gap-2 " >
//           {room.name && <h1>Room Name : {room.name}</h1>}
//           <p className="font-bold text-xl">Room Name</p>
//           <p className="font-bold text-xl">Room Type : {room.roomtype}</p>
//           <p className="font-bold text-xl" >Allowed : {room.allowedtype}</p>
//           <p  className="font-bold text-xl">Address : {room.address}</p>
//           <p className="font-bold text-xl">City : {room.city}</p>
//           {/* <p>Rent per Month : {room.rent}</p>
//           <p>Rating : {room.rating}/5</p> */}

//           {/* {room.notes ? <p>{room.notes}</p> : <p>No Notes</p>} */}
//         </div>
//         <div className="pics flex-1">
//           {room.pics.length > 0 && (
//             <Image.PreviewGroup items={room.pics}>
//               <Image className="p-1 rounded-xl" width='full' alt="image preview" src={room.pics[0]} />
//             </Image.PreviewGroup>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomCard;

"use client";
import React from "react";
// import { Image } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Home, Users, MapPin, Star } from "lucide-react";

const RoomCard = ({ room }) => {
  const router = useRouter();

  async function handleNavigation(roomid) {
    router.push(`/pages/room/${roomid}`);
  }

  return (
    <div
      onClick={() => handleNavigation(room._id)}
      className="bg-white rounded-lg shadow-lg overflow-hidden 
      cursor-pointer transition-transform duration-300 
      hover:scale-105
      flex gap-2"
    >
          <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          {room.name || "Cozy Room"}
        </h2>
        <div className="flex items-center mb-2">
          <Home className="w-4 h-4 mr-2 text-gray-600" />
          <span className="text-gray-700">{room.roomtype}</span>
        </div>
        <div className="flex items-center mb-2">
          <Users className="w-4 h-4 mr-2 text-gray-600" />
          <span className="text-gray-700">For: {room.allowedtype}</span>
        </div>
        <div className="flex items-center mb-2">
          <MapPin className="w-4 h-4 mr-2 text-gray-600" />
          <span className="text-gray-700">{room.city}</span>
        </div>
        <p className="text-gray-600 line-clamp-2">{room.address}</p>
        <div className="mt-4 flex flex-wrap justify-between gap-2  items-center">
          <span className="text-green-600 font-bold">₹{room.rent}/month</span>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300">
            View Details
          </button>
        </div>
      </div>
      <div className="relative w-52 float-right p-2 rounded-2xl ">
        {room.pics.length > 0 && (
          <Image
            width={100}
            height={100}
            className="w-full  object-contain rounded-2xl"
            alt="Room preview"
            src={room.pics[0]}
          />
        )}
        <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 m-2 rounded-md">
          <Star className="w-4 h-4 inline-block mr-1" />
          {room.rating}/5
        </div>
      </div>

    </div>
  );
};

export default RoomCard;
