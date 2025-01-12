"use client"
import React from "react";
import Link from "next/link";
import { Home, Info, Phone } from "lucide-react";
import Cookies from "js-cookie";
import { Dropdown } from "antd";

const Navbar = () => {
  function handleLogout() {
    Cookies.remove("logged");
    window.location.href = "/";
  }

  const items = [
    { label: <p>UserName</p>, key: "0" },
    { label: <p>Email</p>, key: "1" },
    { label: <p>Update Profile</p>, key: "2" },
    { label: <p onClick={handleLogout}>Logout</p>, key: "3" },
  ];

  let logged = Cookies.get("logged");
  console.log("The logged status is:", logged);

  return (
    <nav className="bg-green-600 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          RoomFinder
        </Link>
        <ul className="flex items-center space-x-6">
          <NavItem href="/" icon={<Home className="w-5 h-5" />} text="Home" />
          <NavItem
            href="#about_us"
            icon={<Info className="w-5 h-5" />}
            text="About"
          />
          <NavItem
            href="#contact_us"
            icon={<Phone className="w-5 h-5" />}
            text="Contact"
          />
          {logged && logged === "yes" ? (
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
            >
              <span className="flex items-center cursor-pointer">
                <img
                  src="/userprofile.svg"
                  className="h-9 w-9 rounded-full p-1 bg-white"
                  alt="User Profile"
                />
              </span>
            </Dropdown>
          ) : (
            <Link href="/pages/login">Login</Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ href, icon, text }) => (
  <li>
    <Link
      href={href}
      className="flex items-center hover:text-green-200 transition duration-300"
    >
      {icon}
      <span className="ml-1">{text}</span>
    </Link>
  </li>
);

export default Navbar;
