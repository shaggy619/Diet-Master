import React, { useState } from "react";
import { useLocation } from "react-router-dom";

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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 max-md:mb-8">
          Bulk Employee Registration
        </h2>
        <form
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
        </form>
      </div>
    </div>
  );
};

export default BulkRegistration;
