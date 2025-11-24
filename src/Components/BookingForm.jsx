import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateAppointmentApi } from "../services/AllApi";

const BookingForm = () => {
  const { state: doctor } = useLocation();
  const navigate = useNavigate();

  // Patient Form States
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientGender, setPatientGender] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  // Beautiful success alert state
  const [showAlert, setShowAlert] = useState(false);

  if (!doctor) {
    return (
      <h1 className="text-center mt-20 text-red-600 text-xl">
        No doctor selected. Go back and choose a doctor.
      </h1>
    );
  }

  // Submit Appointment
  const handleSubmit = async () => {
    if (patientPhone.length !== 10) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    if (
      !patientName ||
      !patientAge ||
      !patientGender ||
      !patientPhone ||
      !appointmentDate ||
      !appointmentTime
    ) {
      alert("Please fill all fields");
      return;
    }

    const bookingData = {
      doctorId: doctor.id,
      doctorName: doctor.name,
      doctorSpecialty: doctor.specialty,
      doctorImage: doctor.image,
      patientName,
      patientAge,
      patientGender,
      patientPhone,
      appointmentDate,
      appointmentTime,
    };

    const response = await CreateAppointmentApi(bookingData);

    if (response.status === 201) {
      // Show animated alert
      setShowAlert(true);

      // Hide and redirect
      setTimeout(() => {
        setShowAlert(false);
        navigate("/");
      }, 1800);
    } else {
      alert("Failed to book appointment");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">

      {/* BEAUTIFUL SUCCESS ALERT */}
      <div
        className={`
          fixed top-6 left-1/2 z-50 transform -translate-x-1/2 
          px-6 py-3 rounded-xl shadow-xl text-white font-semibold
          bg-blue-600 transition-all duration-500
          ${showAlert ? "opacity-100 scale-100" : "opacity-0 scale-75"}
        `}
      >
        ✔ Appointment Booked Successfully!
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-600 font-medium hover:underline"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold text-center mb-8">
          Book Appointment
        </h1>

        {/* Doctor Details */}
        <div className="flex flex-col sm:flex-row gap-6 border p-6 rounded-xl bg-gray-50">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-40 h-40 rounded-xl object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold">{doctor.name}</h2>
            <p className="text-blue-600 font-semibold">{doctor.specialty}</p>
            <p>Experience: {doctor.experience}</p>
            <p>Education: {doctor.education}</p>
            <p>Availability: {doctor.availability}</p>
          </div>
        </div>

        {/* Patient Details */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Patient Details</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />

            <input
              type="number"
              placeholder="Age"
              className="border p-3 rounded-lg"
              value={patientAge}
              onChange={(e) => setPatientAge(e.target.value)}
            />

            <select
              className="border p-3 rounded-lg"
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="text"
              placeholder="Phone Number (10 digits)"
              className="border p-3 rounded-lg"
              value={patientPhone}
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value)) setPatientPhone(value);
              }}
            />

          </div>

          {/* Appointment Details */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Appointment Details</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="date"
              className="border p-3 rounded-lg"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />

            <select
              className="border p-3 rounded-lg"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
            >
              <option>Select Time Slot</option>
              <option>09:00 AM</option>
              <option>11:00 AM</option>
              <option>02:00 PM</option>
              <option>04:00 PM</option>
            </select>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg mt-8 
            text-lg font-semibold hover:bg-blue-700 transition"
          >
            Confirm Appointment
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookingForm;
