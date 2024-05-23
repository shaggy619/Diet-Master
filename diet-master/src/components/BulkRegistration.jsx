import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

const BulkRegistration = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // File Logic Here
      console.log("File:", file);
      alert("Employees registered successfully!");
    } else {
      alert("Please upload a CSV file.");
    }
  };

  return (
    <div className="flex items-center justify-center p-12 pt-48 max-md:pt-40 max-sm:px-6 ">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-3xl font-bold text-center mb-10 max-md:mb-8 max-md:mt-2"
        >
          Bulk Employee Registration
        </motion.h2>
        <motion.form
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="shadow border border-stroke p-12 rounded max-sm:px-8"
        >
          <div className="mb-5">
            <label className="mb-5 block text-base font-semibold text-primary sm:text-xl">
              Employee Details
            </label>
            <label
              htmlFor="file"
              className="mb-3 block text-base font-medium text-dark"
            >
              Upload CSV File
            </label>
            <input
              type="file"
              accept=".csv"
              id="file"
              onChange={handleFileChange}
              className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md"
            />
          </div>

          <div>
            <button className="hover:bg-secondary w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Register Employees
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default BulkRegistration;
