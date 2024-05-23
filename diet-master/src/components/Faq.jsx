import React, { useState } from "react";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqData = [
    {
      question: "What is a balanced diet?",
      answer:
        "A balanced diet is one that gives your body the nutrients it needs to function correctly. It typically includes a variety of foods from different food groups: fruits, vegetables, grains, protein, and dairy.",
    },
    {
      question: "How can I manage my calorie intake?",
      answer:
        "To manage your calorie intake, you need to understand your daily caloric needs, track your food intake, and ensure you're consuming the right portion sizes. Tools like food diaries or apps can be very helpful.",
    },
    {
      question: "What are the benefits of regular meal planning?",
      answer:
        "Regular meal planning can help you make healthier food choices, save money and time, reduce stress, and avoid the last-minute rush to eat unhealthy foods.",
    },
    {
      question: "How important is hydration in diet management?",
      answer:
        "Hydration is crucial as it helps with digestion, absorption of nutrients, and maintaining body temperature. Drinking enough water is an essential part of a healthy diet.",
    },
    {
      question: "Can I still eat out while on a diet?",
      answer:
        "Yes, you can eat out while on a diet. The key is to make healthier choices such as opting for grilled instead of fried foods, asking for dressings on the side, and controlling portion sizes.",
    },
    {
      question: "What are some healthy snack options?",
      answer:
        "Healthy snack options include fruits, nuts, yogurt, vegetables with hummus, whole grain crackers, and smoothies. These snacks provide essential nutrients and can help keep you full between meals.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 pt-44">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="text-3xl max-sm:text-2xl font-bold text-center mb-8"
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-4"
      >
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-lg p-4">
            <button
              className="w-full text-left flex justify-between items-center"
              onClick={() => toggle(index)}
            >
              <span className="font-medium">{item.question}</span>
              <svg
                className={`w-5 h-5 transform ${
                  open === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {open === index && (
              <div className="mt-2 text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center items-center mt-6"
      >
        <Link
          to="/"
          className="group text-primary border border-transparent bg-white  rounded hover:underline flex gap-2 items-center"
        >
          <FaArrowLeft className="transform transition-transform duration-300 group-hover:-translate-x-1" />
          Back To Homepage
        </Link>
      </motion.div>
    </div>
  );
};

export default FAQ;
