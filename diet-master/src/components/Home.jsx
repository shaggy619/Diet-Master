import React from "react";
import Hero from "./Hero";
import Featured from "./Feature";
import Testimonials from "./Testimonial";
import Pricing from "./Pricing";
import Story from "./Story";
import StoryDivider from "./StoryDivider";

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <Hero />
        <Featured />
        <StoryDivider />
        <Story />
        <Pricing />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
