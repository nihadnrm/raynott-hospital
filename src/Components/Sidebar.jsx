import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load user from session
  useEffect(() => {
    const userdata = JSON.parse(sessionStorage.getItem("userData"));
    setUser(userdata);
  }, []);

  // Logout function
  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    setUser(null);
    navigate("/auth");
  };

  return (
    <>
      {/* MENU BUTTON */}
      {!open && (
        <button
          className="md:hidden fixed top-3 left-3 z-50 bg-blue-700 text-white px-3 py-1.5 
          text-xs sm:text-sm rounded shadow"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0  w-64 bg-blue-300 text-white p-6 z-50 
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 md:translate-x-0 md:static`}
      >
        {/* Close button */}
        <button
          className="md:hidden bg-white text-blue-700 text-xs px-3 py-1 rounded mb-4"
          onClick={() => setOpen(false)}
        >
          Close
        </button>

       <Link to={'/'}> <h2 className="text-xl sm:text-2xl font-bold mb-8">Raynott <span className="text-blue-100">Hospital</span></h2></Link>

        <nav className="space-y-4 text-sm sm:text-base">
          <Link to="/available" className="block hover:text-blue-200">Doctors</Link>
          <Link to="/doctors" className="block hover:text-blue-200">Book Appointment</Link>
          <Link to="/bookingtest" className="block hover:text-blue-200">Book Tests</Link>
          <Link to="/about" className="block hover:text-blue-200">About</Link>
          <Link to="/profile" className="block hover:text-blue-200">Profile</Link>

          {/* LOGIN / LOGOUT SWITCH */}
          {!user ? (
            <Link to="/auth" className="block hover:text-blue-200">Login</Link>
          ) : (
            <button 
              onClick={handleLogout}
              className="block text-left w-full hover:text-red-400 text-red-100"
            >
              Logout
            </button>
          )}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
