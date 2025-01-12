// "use client";
// import React from "react";
// // import Contact from "../contact/Contact";
// import Link from "next/link";
// import Cookies from "js-cookie";
// import { Dropdown } from "antd";
// import { Space } from "lucide-react";
// const Navbar = () => {
//   const handleScroll = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   function handleLogout() {
//     Cookies.remove("logged");
//     // Cookies.remove("token");
//     window.location.href = "/";
//   }
//   const items = [
//     {
//       label: <p>UserName</p>,
//       key: "0",
//     },
//     {
//       label: <p>Email</p>,
//       key: "1",
//     },
//     {
//       label: <p>Update Profile</p>,
//       key: "2",
//     },

//     {
//       label: <p onClick={handleLogout}>Logout</p>,
//       key: "3",
//     },
//   ];
//   const logged = Cookies.get("logged");
//   return (
//     <>
//       <div className="w-full flex justify-between gap-2 p-4 text-white  bg-cyan-600 cursor-pointer">
//         <div className="flex gap-2 ">
//           <div>
//             <img
//               src="https://th.bing.com/th/id/OIP.45-b1BjHqRqUfiInVhH5oQHaHa?w=165&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
//               alt="logo"
//               width={30}
//               height={30}
//             />
//           </div>
//           <Link href="/">Rooms4U</Link>
//         </div>
//         <div className=" flex gap-2">
//           <a onClick={() => handleScroll("about_us")}>About</a>
//           <a onClick={() => handleScroll("contact_us")}>Contact</a>
//           {logged && logged == "yes" ? (
//             <Dropdown
//               menu={{
//                 items,
//               }}
//               trigger={["click"]}
//             >
//               <a onClick={(e) => e.preventDefault()}>
//                 <img
//                   src="/userprofile.svg"
//                   className="h-8 w-8 rounded-full p-1 bg-slate-500 z-100 "
//                 />
//               </a>
//             </Dropdown>
//           ) : (
//             <Link href="/pages/login">Login</Link>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
