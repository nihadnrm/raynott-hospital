import React from "react";
import { useNavigate } from "react-router-dom";

const Doctors = () => {
  const navigate = useNavigate();

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      specialty: "Cardiology",
      experience: "15 years",
      education: "MD, Johns Hopkins University",
      rating: 4.9,
      availability: "Mon, Wed, Fri",
      image:
        "https://img.freepik.com/premium-photo/smiling-young-latin-doctor-woman-holding-something-invisible-her-hands-posing-light-grey_116547-77606.jpg",
    },
    {
      id: 2,
      name: "Dr. James Anderson",
      specialty: "Neurology",
      experience: "12 years",
      education: "MD, Harvard Medical School",
      rating: 4.8,
      availability: "Tue, Thu, Sat",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&h=500&fit=crop&crop=faces",
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      specialty: "Pediatrics",
      experience: "10 years",
      education: "MD, Stanford University",
      rating: 5.0,
      availability: "Mon–Fri",
      image:
        "https://img.freepik.com/premium-photo/portrait-female-doctor-with-arms-crossed-standing-against-white-background_1048944-8446609.jpg?semt=ais_hybrid&w=740",
    },
    {
      id: 4,
      name: "Dr. Michael Chen",
      specialty: "Orthopedics",
      experience: "18 years",
      education: "MD, Mayo Clinic",
      rating: 4.9,
      availability: "Mon, Wed, Thu",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
    },
    {
      id: 5,
      name: "Dr. Emily Rodriguez",
      specialty: "Dermatology",
      experience: "8 years",
      education: "MD, UCLA Medical School",
      rating: 4.7,
      availability: "Tue, Fri, Sat",
      image:
        "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    },
    {
      id: 6,
      name: "Dr. David Thompson",
      specialty: "General Surgery",
      experience: "20 years",
      education: "MD, Columbia University",
      rating: 4.8,
      availability: "Mon–Thu",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&h=500&fit=crop&crop=faces",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
         <button
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-600 font-medium hover:underline"
        >
          ← Back
        </button>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-3">
          Take Your Appointment
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-900">{doc.name}</h2>
                <p className="text-blue-600 font-semibold text-lg">{doc.specialty}</p>

                <button
                  onClick={() => navigate(`/booking/${doc.id}`, { state: doc })}
                  className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700"
                >
                  Book Appointment
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
