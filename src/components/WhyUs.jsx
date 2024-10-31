import React from "react";

const aboutData = [
  {
    id: 1,
    num: "5+",
    title: "Year of Experience",
  },
  {
    id: 2,
    num: "86",
    title: "Happy Clients",
  },
  {
    id: 3,
    num: "32+",
    title: "Business Partners",
  },
];

const WhyUs = () => {
  return (
    <div className="min-h-screen flex flex-col pb-[-50px] items-end text-center lg:text-start why bg-no-repeat bg-center">
      <h1
        data-aos="fade-up"
        className="text-6xl font-bold text-white w-full lg:w-1/3 py-5"
      >
        Why Us?
      </h1>

      {aboutData.map((ele) => (
        <div
          data-aos="fade-up"
          className="w-full lg:w-1/3 space-y-5 pr-5"
          key={ele.id}
        >
          <div className="flex justify-center lg:items-center gap-5 w-full lg:w-2/4">
            <span className="text-6xl font-bold">{ele.num}</span>
            <h3 className="text-2xl font-bold">{ele.title}</h3>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              saepe.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
