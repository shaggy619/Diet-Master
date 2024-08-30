import React from "react";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

const BookAppointment = () => {
  return (
    <>
      <div className="pt-48">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl font-bold text-center max-md:mb-8 max-md:mt-2"
        >
          Book Appointment
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className=" font-medium text-center text-primary "
        >
          Book Your Appointment Now!
        </motion.p>
      </div>
      <div>
        <InlineWidget
          url="https://calendly.com/someaim1/demo-clone"
          styles={{
            height: "800px",
          }}
        />
      </div>
    </>
  );
};

export default BookAppointment;
