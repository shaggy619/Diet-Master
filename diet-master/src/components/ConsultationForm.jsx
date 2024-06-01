import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";
import { PlanContext } from "./PlanContext";

const ConsultationForm = () => {
  const { selectedPlan } = useContext(PlanContext);
  const [plan, setPlan] = useState(selectedPlan);
  const [price, setPrice] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    area: "",
    city: "",
    state: "",
    postCode: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    switch (plan) {
      case "One Time":
        setPrice("$19");
        break;
      case "Single Consultation":
        setPrice("$29");
        break;
      case "Multiple Consultation":
        setPrice("$49");
        break;
      default:
        setPrice("$19");
    }
  }, [plan]);

  const handlePlanChange = (e) => {
    const selectedPlan = e.target.value;
    setPlan(selectedPlan);
  };

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
    if (!formValues.date) errors.date = "Date is required";
    if (!formValues.time) errors.time = "Time is required";
    if (!formValues.area) errors.area = "Area is required";
    if (!formValues.city) errors.city = "City is required";
    if (!formValues.state) errors.state = "State is required";
    if (!formValues.postCode) errors.postCode = "Post Code is required";
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
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl font-bold text-center mb-10 max-md:mb-8 max-md:mt-2"
        >
          Book Appointment
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
                    type="text"
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
              type="text"
              name="phone"
              id="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
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
              placeholder="Enter your email"
              className={`w-full rounded-md border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
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
                  value={formValues.date}
                  onChange={handleInputChange}
                  className={`w-full rounded-md border ${
                    errors.date ? "border-red-500" : "border-gray-200"
                  } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-2">{errors.date}</p>
                )}
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
                  value={formValues.time}
                  onChange={handleInputChange}
                  className={`w-full rounded-md border ${
                    errors.time ? "border-red-500" : "border-gray-200"
                  } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
                />
                {errors.time && (
                  <p className="text-red-500 text-sm mt-2">{errors.time}</p>
                )}
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
                    value={formValues.area}
                    onChange={handleInputChange}
                    placeholder="Enter area"
                    className={`w-full rounded-md border ${
                      errors.area ? "border-red-500" : "border-gray-200"
                    } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
                  />
                  {errors.area && (
                    <p className="text-red-500 text-sm mt-2">{errors.area}</p>
                  )}
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formValues.city}
                    onChange={handleInputChange}
                    placeholder="Enter city"
                    className={`w-full rounded-md border ${
                      errors.city ? "border-red-500" : "border-gray-200"
                    } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-2">{errors.city}</p>
                  )}
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={formValues.state}
                    onChange={handleInputChange}
                    placeholder="Enter state"
                    className={`w-full rounded-md border ${
                      errors.state ? "border-red-500" : "border-gray-200"
                    } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
                  />
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-2">{errors.state}</p>
                  )}
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="postCode"
                    id="postCode"
                    value={formValues.postCode}
                    onChange={handleInputChange}
                    placeholder="Post Code"
                    className={`w-full rounded-md border ${
                      errors.postCode ? "border-red-500" : "border-gray-200"
                    } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
                  />
                  {errors.postCode && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.postCode}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="hover:bg-secondary w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Book Appointment
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default ConsultationForm;
