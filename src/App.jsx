import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Alerts from "./pages/AlertsPage";
import CalculationPage from "./pages/CalculationPage";
import MouseEventsPage from "./pages/MouseEventsPage";
import WaitsPage from "./pages/WaitsPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        <Navbar />
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly={true}>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<Signup />} />

            {/* Learning Pages */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/calculations" element={<CalculationPage />} />
            <Route path="/mouse-events" element={<MouseEventsPage />} />
            <Route path="/waits" element={<WaitsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
