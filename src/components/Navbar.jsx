import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav
      id="main-navbar"
      className="bg-[#273F4F] text-[#EFEEEA] px-6 py-4 shadow-lg flex flex-col md:flex-row justify-between items-center"
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* Logo / Title */}
      <div className="text-2xl font-bold tracking-wide mb-2 md:mb-0">
        <Link
          to="/"
          id="app-title"
          className="hover:text-[#FE7743] transition-colors duration-200"
        >
          MyApp Dashboard
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-5 items-center text-sm md:text-base font-medium">
        <Link
          to="/"
          id="nav-home"
          className={`hover:text-[#FE7743] transition-colors duration-200 ${
            location.pathname === "/" ? "underline" : ""
          }`}
        >
          Home
        </Link>

        {user?.isAdmin && (
          <Link
            to="/admin"
            id="nav-admin"
            className={`hover:text-[#FE7743] transition-colors duration-200 ${
              location.pathname === "/admin" ? "underline" : ""
            }`}
          >
            Admin
          </Link>
        )}

        {!user && location.pathname !== "/login" && (
          <Link
            to="/login"
            id="nav-login"
            className="hover:text-[#FE7743] transition-colors duration-200"
          >
            Login
          </Link>
        )}

        {!user && location.pathname !== "/signup" && (
          <Link
            to="/signup"
            id="nav-signup"
            className="hover:text-[#FE7743] transition-colors duration-200"
          >
            Signup
          </Link>
        )}

        {user && (
          <button
            id="logout-btn"
            onClick={handleLogout}
            className="bg-[#FE7743] text-black px-4 py-1.5 rounded-md hover:bg-[#e96634] transition-all duration-200"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
