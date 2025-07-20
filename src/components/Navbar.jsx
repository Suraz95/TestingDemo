import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside
      id="main-sidebar"
      className="bg-[#273F4F] text-[#EFEEEA] w-64 h-screen p-6 shadow-lg flex flex-col justify-between"
      role="navigation"
      aria-label="Sidebar Navigation"
    >
      <div>
        {/* Logo / Title */}
        <div className="text-2xl font-bold tracking-wide mb-10">
          <Link
            to="/"
            id="app-title"
            className="hover:text-[#FE7743] transition-colors duration-200"
          >
            MyApp Dashboard
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-5 text-sm font-medium">
          <Link
            to="/"
            id="nav-home"
            className={`hover:text-[#FE7743] transition-colors duration-200 ${
              location.pathname === "/" ? "underline" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/calculations"
            id="nav-calculations"
            className={`hover:text-[#FE7743] transition-colors duration-200 ${
              location.pathname === "/calculations" ? "underline" : ""
            }`}
          >
            Calculations
          </Link>

          <Link
            to="/mouse-events"
            id="nav-mouse-events"
            className={`hover:text-[#FE7743] transition-colors duration-200 ${
              location.pathname === "/mouse-events" ? "underline" : ""
            }`}
          >
            Mouse Events
          </Link>

          {/* <Link
            to="/keyboard-events"
            id="nav-keyboard-events"
            className={`hover:text-[#FE7743] transition-colors duration-200 ${
              location.pathname === "/keyboard-events" ? "underline" : ""
            }`}
          >
            Keyboard Events
          </Link> */}
{/* 
          <Link
            to="/debugging"
            id="nav-debugging"
            className={`hover:text-[#FE7743] transition-colors duration-200 ${
              location.pathname === "/debugging" ? "underline" : ""
            }`}
          >
            Debugging
          </Link>

          <Link
            to="/selenium-commands"
            id="nav-selenium-commands"
            className={`hover:text-[#FE7743] transition-colors duration-200 ${
              location.pathname === "/selenium-commands" ? "underline" : ""
            }`}
          >
            Selenium Commands
          </Link> */}

          <Link
            to="/waits"
            id="nav-waits"
            className={`hover:text-[#FE7743] transition-colors duration-200 ${
              location.pathname === "/waits" ? "underline" : ""
            }`}
          >
            Waits
          </Link>

          <Link
            to="/alerts"
            id="nav-alerts"
            className={`hover:text-[#FE7743] transition-colors duration-200 ${
              location.pathname === "/alerts" ? "underline" : ""
            }`}
          >
            Alerts
          </Link>

          {/* <Link
            to="/navigation"
            id="nav-navigation"
            className={`hover:text-[#FE7743] transition-colors duration-200 ${
              location.pathname === "/navigation" ? "underline" : ""
            }`}
          >
            Navigation
          </Link>

          <Link
            to="/window-switching"
            id="nav-window-switching"
            className={`hover:text-[#FE7743] transition-colors duration-200 ${
              location.pathname === "/window-switching" ? "underline" : ""
            }`}
          >
            Window Switching
          </Link> */}

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
              className="bg-[#FE7743] text-black px-4 py-2 rounded-md hover:bg-[#e96634] transition-all duration-200 mt-10"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
