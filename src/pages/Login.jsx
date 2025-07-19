import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigate(user.isAdmin ? "/admin" : "/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen transition-all duration-500 ease-in-out px-4"
      style={{ backgroundColor: "#EFEEEA" }}
      id="login-page"
    >
      <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-xl transition-all duration-300">
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ color: "#273F4F" }}
          id="login-title"
        >
          Login
        </h2>
        <input
          type="email"
          id="login-email"
          aria-label="Enter your email"
          placeholder="Enter your email"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          id="login-password"
          aria-label="Enter your password"
          placeholder="Enter your password"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="w-full py-3 px-4 rounded-lg font-semibold text-white shadow-md hover:scale-105 transition-all"
          style={{ backgroundColor: "#FE7743" }}
          onClick={handleLogin}
          id="login-submit"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm text-gray-700">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-[#FE7743] font-medium cursor-pointer hover:underline"
            id="signup-redirect"
            aria-label="Go to signup page"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
