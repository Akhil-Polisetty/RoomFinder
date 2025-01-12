"use client";
import TotalRoomCard from "@/components/TotalRoomCard";
import React, { useEffect, useState } from "react";

const Page = () => {
  // const [rid, setRid] = useState("");
  const [room,setRoom] = useState()
  useEffect(() => {
    async function fetchTotalRoomDetails() {
      // Fetch the current URL
      const presentUrl = window.location.href;
      console.log("The present link is:", presentUrl);

      // Extract the room ID from the URL
      const urls = presentUrl.split("/");
      const roomId = urls[urls.length - 1];

      try {
        const room = await fetch(`/api/findbyid/?room=${roomId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (room.ok) {
          const data = await room.json();
          setRoom(data);
        }
        else{
          console.log("failed to fetch room ",room.message)
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchTotalRoomDetails();
  }, []);
  return (
    <div>
      <TotalRoomCard room={room} />

    </div>
  );
};

export default Page;
