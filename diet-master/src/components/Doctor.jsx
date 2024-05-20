import React from "react";

const Doctor = () => {
  return (
    <div className="flex items-center justify-center p-12 pt-48 max-md:pt-40 max-sm:px-6 ">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 max-md:mb-8">
          Register Patient for Review
        </h2>
        <form className="shadow border border-stroke p-12 rounded max-sm:px-8">
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
              placeholder="Enter Full Name"
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
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter phone number"
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
              placeholder="Enter email"
              className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md"
            />
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
              placeholder="Diet Plan and Review"
              className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md"
            />
          </div>

          <div>
            <button className="hover:bg-secondary w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Register Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Doctor;
