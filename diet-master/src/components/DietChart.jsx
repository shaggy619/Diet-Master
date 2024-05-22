import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const DietChart = () => {
  const dietItems = [
    {
      title: "Proteins",
      description:
        "Essential for building and repairing tissues and maintaining muscle mass. You can include Chicken breast, tofu, lentils etc.",
      imageSrc: "/img/protein.png",
      imageAlt: "Dinner",
    },
    {
      title: "Carbohydrates",
      description:
        "The body's primary source of energy, fueling physical activity and brain function. Examples: Brown rice, whole wheat bread, quinoa.",
      imageSrc: "/img/carbohydrate.png",
      imageAlt: "Dinner",
    },
    {
      title: "Fruits and Vegetables",
      description:
        "Rich in vitamins, minerals, and fiber, crucial for overall health and disease prevention. You can consume Spinach, Broccoli, Apple, Banana etc.",
      imageSrc: "/img/fruits.png",
      imageAlt: "Dinner",
    },
    {
      title: "Fats",
      description:
        "Necessary for absorbing vitamins, supporting cell growth, and providing energy. Some of the sources of fats sare: Avocados, olive oil, almonds.",
      imageSrc: "/img/fats.png",
      imageAlt: "Dinner",
    },
  ];

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex items-center justify-center  pt-44">
      <div className="rounded-lg w-[90%] p-4">
        <div
          className="md:w-1/2 lg:w-2/5 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://example.com/healthy-food.jpg')",
          }}
        ></div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Healthy Body Diet Chart
          </h2>
          <div className="flex justify-center">
            <img src="/img/chart.png" alt="chart" className=" w-96" />
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Following a well-balanced diet is essential for maintaining overall
            health and wellness. This diet chart provides a daily meal plan
            designed to help you achieve optimal nutrition, improve energy
            levels, and support a healthy lifestyle. Each meal is crafted to
            ensure you receive the necessary vitamins, minerals, and nutrients
            your body needs.
          </p>
          <ul className="mt-6 space-y-4">
            {dietItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center max-sm:block max-sm:text-center"
              >
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="w-44 mr-4 max-sm:mx-auto"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 lg:w-[60%]">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center mt-6">
            <Link
              to="/"
              className="group text-primary border border-transparent bg-white  rounded hover:underline flex gap-2 items-center"
            >
              <FaArrowLeft className="transform transition-transform duration-300 group-hover:-translate-x-1" />
              Back To Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietChart;
