import React from "react";

const Story = () => {
  const features1 = [
    "Personalized weight loss program",
    "Medication support",
    "Counseling services",
  ];

  const features2 = [
    "Regular tele-health check-ups",
    "Progress tracking",
    "Treatment plan adjustments",
    "Maintenance tools and knowledge",
  ];

  const renderFeatureList = (features) =>
    features.map((feature, index) => (
      <li key={index} className="flex space-x-3">
        <svg
          className="flex-shrink-0 w-5 h-5 text-green-500 bg-white  rounded-full "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-medium leading-tight text-white">
          {feature}
        </span>
      </li>
    ));

  return (
    <div>
      <div className="w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-[150%] max-sm:w-[200%] h-[80px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-primary"
          ></path>
        </svg>
      </div>

      <section className="bg-primary">
        <div className="max-w-[90%] px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 ">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-200 sm:text-lg ">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white">
                Weight loss program that works
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Diet Master offers a proven, effective weight loss program
                designed to help you shed pounds and keep them off. Diet Master
                provides all the tools you need to achieve and maintain your
                weight loss goals.
              </p>

              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-400 my-7 "
              >
                {renderFeatureList(features1)}
              </ul>
              <p className="mb-8 font-light lg:text-xl">
                Join us and start your journey to a healthier, happier you
                today.
              </p>
            </div>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="img/img2.png"
              alt="Weight loss image"
            />
          </div>

          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="img/img3.png"
              alt="Weight loss 2nd image"
            />
            <div className="text-gray-200 sm:text-lg ">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white">
                Your Partner in Sustainable Weight Loss
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Diet Master goes beyond traditional weight loss programs and
                offers the solutions that aligns with your problem. Our
                comprehensive approach ensures that you receive personalized
                support every step of the way, helping you achieve lasting
                results.
              </p>

              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-200 my-7"
              >
                {renderFeatureList(features2)}
              </ul>
              <p className="font-light lg:text-xl">
                Join us and experience the difference with Diet Master.
              </p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-3 font-medium rounded text-lg transition hover:bg-white hover:text-primary"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
