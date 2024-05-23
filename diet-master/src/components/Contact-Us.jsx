import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

const Contact = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex items-center justify-center p-12 pt-48 max-md:pt-40 max-sm:px-6 ">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl font-bold text-center mb-10 max-md:mb-8 max-md:mt-2"
        >
          Contact Us
        </motion.h2>
        <motion.form
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="shadow border border-stroke p-12 rounded max-sm:px-8"
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
              placeholder="Full Name"
              className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md"
            />
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
              placeholder="Your phone number"
              className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md"
            />
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
              placeholder="Enter Your email"
              className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="review"
              className="mb-3 block text-base font-medium text-dark"
            >
              Message
            </label>
            <textarea
              id="review"
              placeholder="Enter Your Message"
              className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md"
            />
          </div>

          <div>
            <button className="hover:bg-secondary w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
