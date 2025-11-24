import React, { useEffect, useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { Link } from "react-router-dom";
import { getAppointmentApi, getTestApi } from "../services/AllApi";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const userdata = JSON.parse(sessionStorage.getItem("userData"));
    setUser(userdata);

    fetchAppointments();
    fetchTests();
  }, []);

  // Fetch Appointments
  const fetchAppointments = async () => {
    try {
      const result = await getAppointmentApi();
      if (result.status === 200) {
        setAppointments(result.data.reverse());
      }
    } catch (err) {
      console.log("Error fetching appointments:", err);
    }
  };

  // Fetch Test Bookings
  const fetchTests = async () => {
    try {
      const result = await getTestApi();
      if (result.status === 200) {
        setTests(result.data.reverse());
      }
    } catch (err) {
      console.log("Error fetching tests:", err);
    }
  };

  return (
    <DashboardLayout>

      {/* PROFILE SECTION */}
      <div className="bg-white shadow rounded-xl p-5 mb-5 flex items-center gap-5 flex-col sm:flex-row">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          className="w-24 h-24 rounded-full border-2 border-blue-600 object-cover"
        />

        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold text-blue-800">
            {user ? user.name : "Guest User"}
          </h2>
          <p className="text-gray-600 text-sm">{user?.email}</p>
          <p className="text-gray-600 mt-1 text-sm">
            Role: <span className="font-semibold">Patient</span>
          </p>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

        <Link to={"/available"}>
          <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
            <h3 className="text-blue-700 font-semibold">Available Doctors</h3>
            <p className="mt-2 text-3xl font-bold text-blue-900">6</p>
          </div>
        </Link>

        <Link to={"/doctors"}>
          <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
            <h3 className="text-blue-700 font-semibold">Book Your Appointment</h3>
            <p className="mt-2 text-3xl font-bold text-blue-900">
              {appointments.length}
            </p>
          </div>
        </Link>

        <Link to={"/bookingtest"}>
          <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
            <h3 className="text-blue-700 font-semibold">Book for Diagnostic Tests</h3>
            <p className="mt-2 text-3xl font-bold text-blue-900">
              {tests.length}
            </p>
          </div>
        </Link>

        <Link to={"/about"}>
          <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
            <h3 className="text-blue-700 font-semibold">About</h3>
            <p className="mt-2 text-xl text-blue-700">Who we are</p>
          </div>
        </Link>

      </div>

      {/* RECENT APPOINTMENTS */}
      <div className="bg-white shadow p-4 md:p-6 rounded-xl w-full mt-4">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Recent Appointments</h2>

        {appointments.length === 0 ? (
          <p className="text-center text-gray-500 py-6">No appointments found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {appointments.map((a) => (
              <div
                key={a._id}
                className="relative bg-white/70 backdrop-blur-md border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* LEFT STATUS BAR */}
                <div
                  className={`absolute left-0 top-0 h-full w-2 rounded-l-2xl ${
                    a.status === "Completed" ? "bg-green-500" : "bg-yellow-500"
                  }`}
                ></div>

                {/* Doctor Image & Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={a.doctorImage}
                    alt=""
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 shadow"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-blue-800">{a.doctorName}</h3>
                    <p className="text-sm text-gray-500">{a.doctorSpecialty}</p>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="mt-4 space-y-1 text-sm">
                  <p>
                    <span className="font-semibold text-gray-700">Patient:</span>{" "}
                    {a.patientName}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Date:</span>{" "}
                    {a.appointmentDate}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Time:</span>{" "}
                    {a.appointmentTime}
                  </p>
                </div>

                {/* Status Tag */}
                <div className="mt-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold shadow ${
                      a.status === "Completed"
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : "bg-yellow-100 text-yellow-700 border border-yellow-300"
                    }`}
                  >
                    {a.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RECENT TEST BOOKINGS */}
      <div className="bg-white shadow p-4 md:p-6 rounded-xl w-full mt-6">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Recent Test Bookings</h2>

        {tests.length === 0 ? (
          <p className="text-center text-gray-500 py-6">No test bookings found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tests.map((t) => (
              <div
                key={t._id}
                className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                {/* Test Header */}
                <div className="flex items-center gap-3">
                  <div className="bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow">
                    🔬
                  </div>
                  <h3 className="text-lg font-bold text-green-800">{t.testName}</h3>
                </div>

                {/* Patient Info */}
                <div className="mt-4 text-sm space-y-1">
                  <p>
                    <span className="text-gray-600 font-semibold">Patient:</span>{" "}
                    {t.patientName}
                  </p>
                  <p>
                    <span className="text-gray-600 font-semibold">Age:</span>{" "}
                    {t.patientAge}
                  </p>
                  <p>
                    <span className="text-gray-600 font-semibold">Date:</span>{" "}
                    {t.appointmentDate}
                  </p>
                </div>

                {/* Tag */}
                <div className="mt-4">
                  <span className="px-4 py-1 text-xs font-semibold rounded-full bg-green-600 text-white shadow">
                    ✓ Booked Successfully
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </DashboardLayout>
  );
};

export default Dashboard;
