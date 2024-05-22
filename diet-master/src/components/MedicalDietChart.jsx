import React, { useEffect } from "react";
import { TbCircleCheckFilled } from "react-icons/tb";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MedicalDietChart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dietData = [
    {
      condition: "Diabetes",
      definition:
        "Diabetes is a chronic condition that affects how your body processes glucose (sugar), resulting in high blood sugar levels. A balanced diet is crucial for managing diabetes. Here are some recommended foods:",
      foods: [
        "Whole grains",
        "Non-starchy vegetables",
        "Lean protein",
        "Healthy fats",
      ],
    },
    {
      condition: "Uric Acid",
      definition:
        "Uric acid is a waste product formed from the breakdown of purines, which are substances found in certain foods and beverages. High levels of uric acid can lead to various health issues, including gout and kidney stones. Include these foods in your diet to manage uric acid levels:",
      foods: ["Low-fat dairy", "Fruits", "Vegetables", "Whole grains"],
    },
    {
      condition: "Food Allergy",
      definition:
        "Food allergies occur when your immune system mistakenly identifies a particular food or substance as harmful. Living with food allergies requires careful attention to what you eat. Here are some safe options:",
      foods: [
        "Allergy-free alternatives",
        "Fresh fruits and vegetables",
        "Lean meats",
      ],
    },
    {
      condition: "High Blood Pressure",
      definition:
        "High blood pressure, or hypertension, is a common condition in which the force of blood against the walls of your arteries is consistently too high. Maintaining a low-sodium diet is key to managing high blood pressure. Here are some recommended foods:",
      foods: ["Leafy greens", "Berries", "Oatmeal", "Salmon"],
    },
    {
      condition: "Cholesterol",
      definition:
        "Cholesterol is a waxy substance found in your blood that is necessary for building healthy cells. However, high levels of cholesterol can increase your risk of heart disease. To lower cholesterol levels, it's important to focus on heart-healthy foods. Here are some options:",
      foods: ["Avocado", "Nuts", "Olive oil", "Fatty fish"],
    },
    {
      condition: "Celiac Disease",
      definition:
        "Celiac disease is an autoimmune disorder in which the ingestion of gluten leads to damage in the small intestine. For individuals with celiac disease, avoiding gluten-containing foods is essential. Here are some safe alternatives:",
      foods: ["Gluten-free grains", "Legumes", "Fruits", "Vegetables"],
    },
  ];

  return (
    <div className="w-[90%] mx-auto pt-44 p-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Diet Chart For Medical Requirements
      </h2>
      {dietData.map((item, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{item.condition}</h2>
          <p className="text-lg mb-4">{item.definition}</p>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Food Items</th>
              </tr>
            </thead>
            <tbody>
              {item.foods.map((food, foodIndex) => (
                <tr
                  key={foodIndex}
                  className={foodIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border px-4 py-2 flex gap-2 items-center">
                    <TbCircleCheckFilled className="text-primary" />
                    {food}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
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
  );
};

export default MedicalDietChart;
