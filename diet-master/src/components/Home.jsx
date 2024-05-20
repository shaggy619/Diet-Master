import React from "react";
import Hero from "./Hero";
import Featured from "./Feature";
import WeightLossProgram from "./WeightLose";
import Testimonials from "./Testimonial";
import Pricing from "./Pricing";
import Story from "./Story";

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <Hero />
        <Featured />
        <Story />
        <WeightLossProgram />
        <Pricing />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
