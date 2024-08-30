import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { fadeIn } from "./varients";

const Contact = () => {
  const location = useLocation();

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formValues.name) {
      errors.name = "Full Name is required";
    }
    if (!formValues.phone) {
      errors.phone = "Phone Number is required";
    }
    if (!formValues.email) {
      errors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email Address is invalid";
    }
    if (!formValues.message) {
      errors.message = "Please Enter a message";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Append access key to the form data
      const formData = {
        ...formValues,
        access_key: "331f85d3-c3bc-49ec-bcc1-1a84cac0f853",
      };

      const json = JSON.stringify(formData);

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }).then((res) => res.json());

        if (res.success) {
          Swal.fire({
            title: "Success!",
            text: "Form submitted successfully!",
            icon: "success",
          });

          // Clear form after successful submission
          setFormValues({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Form submission failed.",
            icon: "error",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "An error occurred while submitting the form.",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center p-12 pt-48 max-md:pt-40 max-sm:px-6">
      <div className="relative mx-auto w-full max-w-[550px]">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl max-sm:text-2xl font-bold text-center mb-10 max-md:mb-8 max-md:mt-2"
        >
          Contact Us
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="shadow border border-stroke p-12 rounded max-sm:px-8 bg-white"
        >
          <div className="mb-5">
            <label className="mb-5 block text-base font-semibold text-primary sm:text-xl">
              Enter Details
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
              placeholder="Full Name"
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
              type="tel"
              name="phone"
              id="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              placeholder="Your phone number"
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
              placeholder="Enter Your email"
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
              htmlFor="message"
              className="mb-3 block text-base font-medium text-dark"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formValues.message}
              onChange={handleInputChange}
              placeholder="Enter Your Message"
              className={`w-full rounded-md border ${
                errors.message ? "border-red-500" : "border-gray-200"
              } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-2">{errors.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="hover:bg-secondary w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
