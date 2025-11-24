import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
 
    const navigate=useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-6">

      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
         <button
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-600 font-medium hover:underline "
        >
          ← Back
        </button>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Raynott Hospital</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Raynott Hospital is committed to providing world-class medical care with advanced
          technology, compassionate treatment, and a patient-first approach.  
        </p>
      </div>

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Raynott Hospital is a leading multi-specialty medical institution with a mission 
            to deliver high-quality, affordable, and accessible healthcare services. 
            With decades of excellence, we have earned the trust of thousands of families 
            by offering safe, effective, and compassionate medical care.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our hospital is supported by a team of highly skilled doctors, trained nurses, 
            modern diagnostic technology, and advanced treatment facilities to ensure 
            quick recovery and complete patient care.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✔ Deliver world-class healthcare for all age groups</li>
            <li>✔ Use advanced diagnostic and medical technology</li>
            <li>✔ Provide affordable treatment without compromising quality</li>
            <li>✔ Maintain transparency and ethics in all services</li>
            <li>✔ Focus on prevention, early detection, and cure</li>
          </ul>
        </div>

      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Why Choose Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-700 mb-2">24/7 Emergency Care</h3>
            <p className="text-gray-700">
              Our emergency department operates 24/7 with rapid response teams ready
              to handle critical and life-threatening situations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Cutting-edge Technology</h3>
            <p className="text-gray-700">
              Equipped with the latest MRI, CT Scan, Ultrasound, and lab testing 
              machines for accurate diagnosis and better treatment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Expert Specialists</h3>
            <p className="text-gray-700">
              Our team includes top cardiologists, neurologists, surgeons, pediatricians,
              orthopedists, and many more specialized professionals.
            </p>
          </div>

        </div>
      </div>

      {/* Facilities Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Facilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="bg-white p-7 rounded-xl shadow-xl">
            <ul className="space-y-3 text-gray-700">
              <li>🏥 Fully equipped ICU & NICU</li>
              <li>🧪 Advanced laboratory & pathology services</li>
              <li>🩺 Specialized outpatient clinics</li>
              <li>🧘 Physiotherapy & rehabilitation center</li>
              <li>🏨 Comfortable private wards & deluxe rooms</li>
              <li>🥼 Modern operation theaters</li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-xl shadow-xl">
            <ul className="space-y-3 text-gray-700">
              <li>🧬 Digital radiology & imaging center</li>
              <li>🔬 Endoscopy & minimally invasive surgery</li>
              <li>💉 Pharmacy & medical store</li>
              <li>🚑 24/7 ambulance service</li>
              <li>🍽 Nutritious patient diet services</li>
              <li>🌿 Clean, hygienic & fully sanitized campus</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Patient Care Focus */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl mb-16">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          Our Patient Care Philosophy
        </h2>
        <p className="text-gray-700 text-center leading-relaxed">
          At Raynott Hospital, we believe in treating every patient with dignity, empathy,
          and respect. Our goal is to ensure that each person receives personalized care
          based on their condition, needs, and comfort.  
        </p>
        <p className="text-gray-700 text-center leading-relaxed mt-3">
          From diagnosis to treatment and recovery, we walk with our patients at every 
          step, making their journey safe, smooth, and stress-free.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-5xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-3xl font-bold text-blue-700">50+</h3>
          <p className="text-gray-700 mt-1">Expert Doctors</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-3xl font-bold text-blue-700">20+</h3>
          <p className="text-gray-700 mt-1">Specialized Departments</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-3xl font-bold text-blue-700">10,000+</h3>
          <p className="text-gray-700 mt-1">Happy Patients</p>
        </div>

      </div>

      {/* History / Timeline Section */}
      <div className="max-w-4xl mx-auto mt-14 bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          Our Journey
        </h2>

        <div className="space-y-4 text-gray-700">
          <p><strong>2010:</strong> Raynott Hospital was founded with a vision to make healthcare accessible.</p>
          <p><strong>2014:</strong> Added emergency & trauma care services.</p>
          <p><strong>2017:</strong> Launched advanced imaging & diagnostics center.</p>
          <p><strong>2020:</strong> Expanded ICU and surgical wing.</p>
          <p><strong>Today:</strong> A trusted, multi-specialty hospital serving thousands every year.</p>
        </div>
      </div>

    </div>
  );
};

export default About;
