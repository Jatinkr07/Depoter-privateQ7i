/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Section2 = () => {
  return (
    <div className="px-4 py-20 mx-auto text-center max-w-7xl">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-center items-center my-5 gap-10 max-[600px]:gap-1">
        <div className="w-full text-left lg:w-1/2">
          <span className="bg-[#EFF6FB] py-2 px-5 rounded-xl mb-5">Why Us</span>
          <h2 className="font-semibold max-[600px]:text-[1.5rem] text-[36px] sm:text-[42px] md:text-[52px] mt-5">
            The Top Reasons To Choose Depoter For FBN
          </h2>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="mt-2 max-[600px]:-mb-4 mb-10 max-[600px]:text-[0.8rem] text-left text-[#454545] text-[16px] sm:text-[18px] md:text-[20px]">
            Discover why Depoter stands out as the ideal choice for Fulfillment
            by Amazon (FBN) with its seamless integration, cost-effective
            solutions, and exceptional customer support. Unlock efficiency and
            scalability for your e-commerce business with Depoter's tailored
            services.
          </p>
        </div>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* Cards */}
        {data.map((list) => {
          return (
            <div
              key={list.id}
              className="flex flex-col items-start text-left border-2 border-yellow-300 p-4 rounded-[30px] transition-transform transform hover:scale-105"
            >
              <div className="w-16 h-16 mb-4 bg-gray-300"></div>
              <h3 className="text-xl max-[600px]:text-[1.2rem] font-semibold mb-2">
                {list.title}
              </h3>
              <p className="text-gray-600 max-[600px]:text-[0.8rem]">
                {list.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    title: "Expertise in FBN Operations",
    body: "Depoter has extensive experience in managing Fulfilled by Network (FBN) operations, ensuring smooth logistics and compliance with Amazon's standards. Our knowledgeable team is dedicated to optimizing your fulfillment process for maximum efficiency.",
  },
  {
    id: 2,
    title: "Comprehensive Inventory Solutions",
    body: "We provide advanced inventory management solutions that allow you to track stock levels in real-time. This minimizes the risk of stockouts or overstocking, helping you maintain a balanced inventory at all times.",
  },
  {
    id: 3,
    title: "Seamless Order Fulfillment",
    body: "Our streamlined order fulfillment process ensures quick and accurate picking, packing, and shipping. With state-of-the-art technology and automation, we enhance your fulfillment speed, leading to higher customer satisfaction.",
  },
  {
    id: 4,
    title: "Customized Solutions for Your Business",
    body: "We understand that every business has unique needs, which is why we offer tailored fulfillment solutions. From branding to packaging, our services are designed to reflect your identity while protecting your products during transit.",
  },
  {
    id: 5,
    title: "Transparent Pricing Structure",
    body: "At Depoter, we believe in transparency. Our clear and competitive pricing structure ensures you know exactly what you’re paying for, allowing you to manage your logistics budget effectively without hidden fees.",
  },
  {
    id: 6,
    title: "Commitment to Sustainability",
    body: "We prioritize environmentally friendly practices in our operations. From using recyclable materials to optimizing delivery routes, we are committed to reducing our carbon footprint while meeting your fulfillment needs.",
  },
];

export default Section2;
