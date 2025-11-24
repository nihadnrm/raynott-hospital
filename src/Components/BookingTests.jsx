import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTestApi } from "../services/AllApi";

const BookingTests = () => {
  const navigate = useNavigate();

  // Form States
  const [testName, setTestName] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);

  // BEAUTIFUL SUCCESS ALERT
  const [showAlert, setShowAlert] = useState(false);

  // Submit Function
  const handleSubmit = async () => {
    if (!testName || !patientName || !patientAge || !patientPhone || !appointmentDate) {
      alert("Please fill all required fields");
      return;
    }

    if (patientPhone.length !== 10) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    const testData = {
      testName,
      patientName,
      patientAge,
      patientPhone,
      appointmentDate,
      notes,
    };

    setLoading(true);

    const result = await addTestApi(testData);
    setLoading(false);

    if (result.status === 201) {
      // Show alert
      setShowAlert(true);

      // Hide + Redirect
      setTimeout(() => {
        setShowAlert(false);
        navigate("/");
      }, 1800);
    } else {
      alert("Failed to book test");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-6 pt-20">

      <div
        className={`
          fixed top-6 left-1/2 z-50 transform -translate-x-1/2 
          px-6 py-3 rounded-xl shadow-xl text-white font-semibold
          bg-blue-600 transition-all duration-500
          ${showAlert ? "opacity-100 scale-100" : "opacity-0 scale-75"}
        `}
      >
        ✔ Test Booked Successfully!
      </div>
     <button
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-600 font-medium hover:underline"
        >
          ← Back
        </button>
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Book Diagnostic Test
      </h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-xl">

        {/* Test Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-blue-700 mb-2">
            Select Test
          </label>
          <select
            className="w-full p-3 border rounded-lg"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
          >
            <option value="">Choose a test</option>
            <option value="Blood Test">Blood Test</option>
            <option value="X-Ray">X-Ray</option>
            <option value="MRI Scan">MRI Scan</option>
            <option value="ECG">ECG</option>
            <option value="Ultrasound">Ultrasound</option>
            <option value="Urine Test">Urine Test</option>
          </select>
        </div>

        {/* Patient Details */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Patient Details</h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Patient Name"
            className="w-full p-3 border rounded-lg"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Age"
            className="w-full p-3 border rounded-lg"
            value={patientAge}
            onChange={(e) => setPatientAge(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg"
            value={patientPhone}
            onChange={(e) => {
              if (e.target.value.length <= 10) setPatientPhone(e.target.value);
            }}
          />

          <input
            type="date"
            className="w-full p-3 border rounded-lg"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />

          <textarea
            placeholder="Additional Notes (Optional)"
            rows="3"
            className="w-full p-3 border rounded-lg"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>

        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </button>

      </div>

    </div>
  );
};

export default BookingTests;
