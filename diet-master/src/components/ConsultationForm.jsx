import React, { useState } from "react";

const ConsultationForm = () => {
  const [plan, setPlan] = useState("One Time");
  const [price, setPrice] = useState("$56");

  const handlePlanChange = (e) => {
    const selectedPlan = e.target.value;
    setPlan(selectedPlan);

    switch (selectedPlan) {
      case "One Time":
        setPrice("$56");
        break;
      case "Single Consultation":
        setPrice("$78");
        break;
      case "Multiple Consultation":
        setPrice("$99");
        break;
      default:
        setPrice("$56");
    }
  };

  return (
    <div className="flex items-center justify-center p-12 pt-48 max-md:pt-40 max-sm:px-6">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Book Appointment
        </h2>
        <form className="shadow border border-stroke p-12 rounded max-sm:px-8">
          <div className="mb-5">
            <label className="mb-5 block text-base font-semibold text-primary sm:text-xl">
              Subscription Details
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="plan"
                    className="mb-3 block text-base font-medium text-dark"
                  >
                    Plan Type
                  </label>
                  <select
                    name="plan"
                    id="plan"
                    value={plan}
                    onChange={handlePlanChange}
                    className="w-full rounded-md border border-gray-200 bg-gray-100 py-3 px-6 text-base text-gray-500 outline-none focus:border-primary focus:shadow-md cursor-pointer"
                  >
                    <option value="One Time">One Time Diet Plan</option>
                    <option value="Single Consultation">
                      Single Consultation
                    </option>
                    <option value="Multiple Consultation">
                      Multiple Consultation
                    </option>
                  </select>
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="price"
                    className="mb-3 block text-base font-medium text-dark"
                  >
                    Price
                  </label>
                  <input
                    type="name"
                    name="price"
                    id="price"
                    value={price}
                    readOnly
                    disabled
                    className="w-full rounded-md border border-gray-200 bg-gray-100 py-3 px-6 text-base text-gray-500 outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <label className="mb-5 block text-base font-semibold text-primary sm:text-xl">
              Personal Details
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
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
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
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md"
            />
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-dark"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-dark"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-semibold text-primary sm:text-xl">
              Address Details
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="area"
                    id="area"
                    placeholder="Enter area"
                    className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter city"
                    className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base  text-gray-700 outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Enter state"
                    className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="post-code"
                    id="post-code"
                    placeholder="Post Code"
                    className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <button className="hover:bg-secondary w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
