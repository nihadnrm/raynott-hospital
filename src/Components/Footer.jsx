import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-300 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">Raynott Hospital</h2>
          <p className="text-blue-100 mt-3 leading-6">
            Providing trusted healthcare, experienced doctors, and modern
            diagnostic services to ensure your wellbeing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-blue-100">
           <Link to={"/available"}> <li className="hover:text-white cursor-pointer">Doctors</li></Link>
            <Link to={'/doctors'}><li className="hover:text-white cursor-pointer">Book Appointment</li></Link>
           <Link to={'/bookingtest'}><li className="hover:text-white cursor-pointer">Diagnostic Tests</li></Link> 
           <Link to={'/about'}><li className="hover:text-white cursor-pointer">About Us</li></Link> 
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-blue-100">📍 Calicut, Kerala</p>
          <p className="text-blue-100">📞 +91 98765 43210</p>
          <p className="text-blue-100">✉ support@raynottcare.com</p>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 text-white text-xl">
            <a className="hover:text-blue-200 cursor-pointer"><i className="fa-brands fa-instagram"></i></a>
            <a className="hover:text-blue-200 cursor-pointer"><i className="fa-brands fa-whatsapp"></i></a>
            <a className="hover:text-blue-200 cursor-pointer"><i className="fa-solid fa-phone"></i></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4 text-center text-sm text-blue-200">
        © {new Date().getFullYear()} Raynott Hospital — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
