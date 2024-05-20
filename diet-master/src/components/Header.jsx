import React, { useState, useEffect } from "react";
import { IoChevronUpOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [iconClass, setIconClass] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    setIconClass(isDropdownOpen ? "rotate-180" : "");
  }, [isDropdownOpen, isOpen]);

  return (
    <header className="fixed w-full top-0 left-0 z-50">
      <div className="bg-primary text-white text-center py-2">
        <p className="max-w-[90%] mx-auto">
          Appointments Available Now!{" "}
          <Link to="/book-appointment" className="underline">
            Book Appointment
          </Link>
        </p>
      </div>
      <nav
        className={`bg-white bg-opacity-80 backdrop-blur-md shadow-md py-2 ${
          isOpen ? "h-screen" : ""
        }`}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <div className="container mx-auto flex justify-between items-center p-4 max-w-[90%]">
          <Link to="/" className="text-2xl font-medium text-primary">
            Diet Master
          </Link>
          <div className="hidden lg:flex space-x-6 items-center relative">
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              <div className="flex items-center gap-1 hover:text-primary hover:cursor-pointer text-gray-800">
                <p>Categories</p>
                <span className={`transform ${iconClass} transition-transform`}>
                  <IoChevronUpOutline />
                </span>
              </div>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-3 w-48 bg-white shadow-lg rounded-md rounded-tl-none rounded-tr-none p-4">
                  <Link
                    to="/weight-loss"
                    className="block text-gray-800 hover:text-primary p-2"
                  >
                    Weight Loss Program
                  </Link>
                  <Link
                    to="/body-diet-chart"
                    className="block text-gray-800 hover:text-primary p-2"
                  >
                    Healthy Body Diet Chart
                  </Link>
                  <Link
                    to="/medical-diet-chart"
                    className="block text-gray-800 hover:text-primary p-2"
                  >
                    Medical Diet Chart
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/pricing"
              href="#healthy-body"
              className="text-gray-800 hover:text-primary"
            >
              Subscription
            </Link>
            <Link
              to="/contact-us"
              href="#medical-requirements"
              className="text-gray-800 hover:text-primary"
            >
              Contact Us
            </Link>
            <Link
              to="book-appointment"
              href="#subscription"
              className="text-white border border-transparent bg-primary px-6 py-3 rounded hover:bg-secondary"
            >
              Book Appointment
            </Link>
            <Link
              to="doctor-review"
              href="#subscription"
              className="text-primary border border-primary bg-transparent px-6 py-3 rounded transition hover:border-primary hover:bg-primary hover:text-white"
            >
              Register Patient
            </Link>
          </div>
          <button
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className={`w-6 h-6 transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={`${
                  isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }`}
              />
            </svg>
          </button>
        </div>
        <div
          className={`lg:hidden ${
            isOpen ? "block" : "hidden"
          } bg-white bg-opacity-90 backdrop-blur-md h-screen overflow-y-auto pl-4 md:pl-8`}
        >
          <div className="relative">
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 hover:text-primary hover:cursor-pointer text-gray-800 p-4"
            >
              <a href="#weight-loss">Categories</a>
              <span className={`transform ${iconClass} transition-transform`}>
                <IoChevronUpOutline />
              </span>
            </div>
            {isDropdownOpen && (
              <div className="pl-4">
                <a
                  href="#sub-link1"
                  className="block text-gray-800 hover:text-primary p-4"
                >
                  Weight Loss Program
                </a>
                <a
                  href="#sub-link2"
                  className="block text-gray-800 hover:text-primary p-4"
                >
                  Healthy Body Diet Chart
                </a>
                <a
                  href="#sub-link3"
                  className="block text-gray-800 hover:text-primary p-4"
                >
                  Medical Diet Chart
                </a>
              </div>
            )}
          </div>
          <a
            href="#healthy-body"
            className="block text-gray-800 hover:text-primary p-4"
          >
            Subscription
          </a>
          <a
            href="#medical-requirements"
            className="block text-gray-800 hover:text-primary p-4"
          >
            Contact Us
          </a>
          <div className="p-4 pt-8">
            <a
              href="#subscription"
              className="text-white border border-transparent bg-primary px-6 py-3 rounded hover:bg-secondary"
            >
              Book Appointment
            </a>
          </div>
          <div className="p-4 pt-8">
            <a
              href="#subscription"
              className="text-primary border border-primary bg-white px-6 py-3 rounded hover:bg-secondary"
            >
              Register Patient
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
