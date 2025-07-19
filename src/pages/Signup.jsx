import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === email)) {
      alert("User already exists");
      return;
    }

    const isAdmin = email.toLowerCase().includes("admin");
    const newUser = { email, password, isAdmin };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    alert(`User created as ${isAdmin ? "Admin" : "User"}, please login`);
    navigate("/login");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4"
      style={{ backgroundColor: "#EFEEEA", transition: "all 0.3s ease-in-out" }}
    >
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 border border-gray-200 transition-all duration-300 ease-in-out">
        <h2
          className="text-3xl font-semibold text-center mb-6"
          style={{ color: "#273F4F" }}
        >
          Create an Account
        </h2>

        <input
          type="email"
          id="signup-email"
          placeholder="Enter your email"
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          id="signup-password"
          placeholder="Create a strong password"
          required
          className="w-full mb-6 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          id="signup-button"
          className="w-full bg-[#FE7743] hover:bg-[#e36230] text-white font-medium py-2 rounded transition duration-300"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <span
            id="back-to-login"
            onClick={() => navigate("/login")}
            className="text-[#FE7743] hover:underline cursor-pointer"
          >
            Sign in here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
