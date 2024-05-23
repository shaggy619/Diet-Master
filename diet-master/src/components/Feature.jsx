import React from "react";
import { ImSpoonKnife } from "react-icons/im";
import { FaWeightScale } from "react-icons/fa6";
import { LuHeartPulse } from "react-icons/lu";
import { FaWalking } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

const features = [
  {
    icon: <ImSpoonKnife />,
    title: "Clinical Nutrition",
    description: "Customized nutrition plans tailored to your health needs.",
  },
  {
    icon: <FaWeightScale />,
    title: "Weight Loss",
    description:
      "Effective weight loss strategies to help you reach your goals.",
    bgColor: "bg-primary",
    iconColor: "text-white",
  },
  {
    icon: <FaWalking />,
    title: "Metabolic Testing",
    description:
      "Advanced testing to assess your metabolic rate and optimize nutrition.",
  },
  {
    icon: <LuHeartPulse />,
    title: "Cardiovascular Health",
    description:
      "Comprehensive care to improve heart health and prevent disease.",
  },
];

const Feature = () => {
  return (
    <section className="py-16">
      <div className="max-w-[90%] mx-auto px-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-center mb-10">
          Featured Services
        </h2>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-primary text-white p-4 rounded-full shadow-lg text-3xl transition-transform duration-300 transform hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl max-sm:text-lg font-semibold mt-4 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-center">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;
