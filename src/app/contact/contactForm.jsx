"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        error = value.trim() === "" ? "Name is required" : "";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        error = !emailRegex.test(value) ? "Invalid email address" : "";
        break;
      case "message":
        error = value.trim() === "" ? "Message is required" : "";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (errors[key]) {
        formErrors[key] = errors[key];
      }
    });

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your backend
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-700">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Name
            </label>
            <div className="flex items-center">
              <FaUser className="absolute left-3 top-10 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`pl-10 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your name"
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Email
            </label>
            <div className="flex items-center">
              <FaEnvelope className="absolute left-3 top-10 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`pl-10 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="your.email@example.com"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your message here..."
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-300 ease-in-out flex items-center justify-center"
          >
            <FaPaperPlane className="mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
