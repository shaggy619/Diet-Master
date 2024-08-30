import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

const About = () => {
  return (
    <section className="pt-48 max-sm:pt-44 ">
      <div className="">
        <div className="w-full px-4">
          <div className="mx-auto text-center">
            <motion.span
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="mb-2 block text-lg max-sm:text-base font-semibold text-primary"
            >
              About Us
            </motion.span>
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className=" text-3xl max-sm:text-2xl font-bold text-center mb-3 leading-[1.208] text-dark "
            >
              Our Services
            </motion.h2>
          </div>
        </div>
      </div>
      <div className=" mx-auto mt-10 max-sm:mt-5 flex flex-col md:flex-row gap-10 w-[90%]">
        <div className="flex-1">
          <p className="text-justify md:text-lg leading-relaxed text-gray-700">
            Welcome to Diet Master, your premier destination for expert diet
            management and personalized health guidance. At Diet Master, we are
            dedicated to helping you achieve your wellness goals through
            customized diet plans and professional consultations. Our team of
            experienced dietitians is committed to understanding your unique
            health needs and crafting tailored strategies that support your
            journey towards a healthier lifestyle. Our approach is centered on
            providing you with the tools, knowledge, and support you need to
            make informed dietary choices. Whether you’re seeking to improve
            your overall health, manage a specific condition, or simply optimize
            your daily nutrition, we are here to offer personalized advice and
            practical solutions.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/img/heroimg.png"
            alt="Diet food"
            className="w-full rounded-lg shadow-lg h-[100%]  object-cover"
          />
        </div>
      </div>
      <div className=" mx-auto mt-8 w-[90%]">
        <p className="text-justify md:text-lg leading-relaxed text-gray-700 mb-4 ">
          Our approach is built on the belief that effective diet management
          goes beyond generic advice. We focus on understanding your personal
          health history, dietary preferences, and lifestyle habits to create a
          customized plan that works for you. Whether you’re aiming to lose
          weight, manage a chronic condition, improve your athletic performance,
          or simply enhance your overall wellness, our team is here to support
          you every step of the way. At Diet Master, we combine evidence-based
          practices with compassionate care to help you achieve your health
          goals.
        </p>
        <p className="text-justify md:text-lg leading-relaxed text-gray-700 ">
          In addition to personalized diet plans, we offer a wealth of resources
          and support to keep you motivated and informed. Join us at Diet Master
          and embark on a journey towards better health with confidence.
          Experience the difference that personalized nutrition can make and let
          us help you build a foundation for long-term wellness. Your path to a
          healthier, more fulfilling life starts here, and we’re excited to be
          part of your journey.
        </p>
      </div>
    </section>
  );
};

export default About;
