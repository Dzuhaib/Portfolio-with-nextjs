"use client"
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 transform transition-all duration-500 hover:scale-105">
        <h2 className="text-4xl font-semibold text-center mb-6 text-orange-600">
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 animate__animated animate__fadeInUp animate__duration-1s"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition-all duration-200"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition-all duration-200"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              required
              className="w-full p-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition-all duration-200"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-orange-600 text-white rounded-lg font-semibold transform transition-all duration-200 hover:bg-orange-700 hover:scale-105"
          >
            {submitted ? "Submitted!" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
