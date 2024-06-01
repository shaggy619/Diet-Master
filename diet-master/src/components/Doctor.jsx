import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

const Doctor = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    review: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formValues.name) errors.name = "Full Name is required";
    if (!formValues.phone) errors.phone = "Phone Number is required";
    if (!formValues.email) {
      errors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email Address is invalid";
    }
    if (!formValues.review) errors.review = "Review message are required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit form
      console.log("Form submitted successfully", formValues);
    }
  };

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex items-center justify-center p-12 pt-48 max-md:pt-40 max-sm:px-6">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-3xl font-bold text-center mb-10 max-md:mb-8 max-md:mt-2"
        >
          Register Patient for Review
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="shadow border border-stroke p-12 rounded max-sm:px-8"
        >
          <div className="mb-5">
            <label className="mb-5 block text-base font-semibold text-primary sm:text-xl">
              Patient Details
            </label>
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-dark"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="Enter Full Name"
              className={`w-full rounded-md border ${
                errors.name ? "border-red-500" : "border-gray-200"
              } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-3 block text-base font-medium text-dark"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              className={`w-full rounded-md border ${
                errors.phone ? "border-red-500" : "border-gray-200"
              } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-dark"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Enter email"
              className={`w-full rounded-md border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="review"
              className="mb-3 block text-base font-medium text-dark"
            >
              Diet Plan
            </label>
            <textarea
              id="review"
              name="review"
              value={formValues.review}
              onChange={handleInputChange}
              placeholder="Diet Plan and Review"
              className={`w-full rounded-md border ${
                errors.review ? "border-red-500" : "border-gray-200"
              } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.review && (
              <p className="text-red-500 text-sm mt-2">{errors.review}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="hover:bg-secondary w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Register Patient
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Doctor;
