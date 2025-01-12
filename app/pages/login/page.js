"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    setError("");
    setLoading(true); // Start loading

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful");
        //add the cookies from the backend part which are token and objid

        // Set cookies
        Cookies.set("logged","yes");
        document.cookie = `token=${data.token}; path=/; HttpOnly; Secure`;
        document.cookie = `userId=${data.objId}; path=/; HttpOnly; Secure`;
        document.cookie = `userId=${data.email}; path=/; HttpOnly; Secure`;
        // router.push("/");
        window.location.href='/';
        // setFormData({ email: "", password: "" });
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (err) {
      setError("Error: Unable to login");
      console.error(err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-[10%]">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-600 flex flex-col justify-center items-center gap-6 p-8 border-2 border-white rounded-md"
      >
        <div className=" relative bottom-8 p-4 font-calibri font-bold text-2xl">
          Login Page
        </div>
        <div>
          <label htmlFor="email">Email ID : &nbsp;</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border px-2 py-1 text-black"
          />
        </div>
        <div>
          <label htmlFor="password">Password : &nbsp;</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="border px-2 py-1 text-black"
          />
        </div>

        <div>
          Don&apos;t have an account? <a href="/pages/register">Register Here</a>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        {loading ? (
          <div className="loader"></div> // Add spinner while loading
        ) : (
          <input
            type="submit"
            value="Login"
            className="signs-b bg-blue-400 px-4 py-1 cursor-pointer"
            disabled={loading} // Disable button while loading
          />
        )}
      </form>

      {/* Add styles for the loader */}
      <style jsx>{`
        .loader {
          border: 4px solid #f3f3f3; /* Light grey */
          border-top: 4px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
