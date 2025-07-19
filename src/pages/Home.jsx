import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen transition-all duration-500 ease-in-out"
      style={{ backgroundColor: "#EFEEEA" }}
      id="home-page"
    >
      <h1
        className="text-4xl font-extrabold mb-6 transition-all duration-500"
        style={{ color: "#273F4F" }}
        id="welcome-title"
      >
        Welcome, <span className="text-black">{user?.email || "Guest"}</span>
      </h1>

      {user?.isAdmin && (
        <button
          className="px-6 py-3 rounded-xl text-white font-semibold shadow-md transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: "#FE7743" }}
          onClick={() => navigate("/admin")}
          id="admin-nav-button"
          aria-label="Navigate to admin panel"
        >
          Go to Admin Panel
        </button>
      )}
    </div>
  );
}

export default Home;
