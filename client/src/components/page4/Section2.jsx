import React from "react";

const Section2 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-center items-center my-5 gap-10 max-[600px]:gap-1">
        <div className="w-full lg:w-1/2 text-left">
          <span className="bg-[#EFF6FB] py-2 px-5 rounded-xl mb-5">Why Us</span>
          <h2 className="font-semibold max-[600px]:text-[1.5rem] text-[36px] sm:text-[42px] md:text-[52px] mt-5">
            The Top Reasons To Choose Depoter For FBA
          </h2>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="mt-2 max-[600px]:-mb-4 mb-10 max-[600px]:text-[0.8rem] text-left text-[#454545] text-[16px] sm:text-[18px] md:text-[20px]">
            Discover why Depoter stands out as the ideal choice for Fulfillment
            by Amazon (FBA) with its seamless integration, cost-effective
            solutions, and exceptional customer support. Unlock efficiency and
            scalability for your e-commerce business with Depoter's tailored
            services.
          </p>
        </div>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Cards */}
        {data.map((list) => {
          return (
            <div
              key={list.id}
              className="flex flex-col items-start text-left border-2 border-[#232F3E] p-4 rounded-[30px] transition-transform transform hover:scale-105"
            >
              <div className="bg-gray-300 h-16 w-16 mb-4"></div>
              <h3 className="text-xl max-[600px]:text-[1.2rem] font-semibold mb-2">{list.title}</h3>
              <p className="text-gray-600 max-[600px]:text-[0.8rem]">{list.body}</p>
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
    title: "Simplified Inventory Management",
    body: "Depoter streamlines inventory planning, tracking, and management to ensure your products are always ready for shipment to Amazon fulfillment centers. Our expertise optimizes storage, reduces costs, and efficiently ships products based on demand and location.",
  },
  {
    id: 2,
    title: "Cost-Effective Solutions",
    body: "Depoter offers competitive pricing and flexible solutions tailored to your business needs, ensuring you get the best value for your fulfillment services.",
  },
  {
    id: 3,
    title: "Exceptional Customer Support",
    body: "Our dedicated support team is available to assist you at every step, providing timely responses and solutions to any challenges you may face.",
  },
  {
    id: 4,
    title: "Seamless Integration",
    body: "Integrate effortlessly with your existing e-commerce platforms, allowing for a smooth transition and efficient operations.",
  },
  {
    id: 5,
    title: "Scalability",
    body: "As your business grows, our services can scale with you, providing the flexibility to adapt to changing demands.",
  },
  {
    id: 6,
    title: "Real-Time Tracking",
    body: "Stay informed with real-time tracking and reporting, giving you insights into your inventory and shipments.",
  },
];

export default Section2;