import React from "react";

const Section1 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-12 text-center">
      {/* Header */}
      <h2 className="text-yellow-500 text-lg font-semibold">
        Depoter + Amazon
      </h2>
      <h1 className="text-3xl max-[600px]:text-[1.5rem] font-bold mt-2 mb-10">
        How Depoter Simplifies Your FBA Fulfillment Process
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        {data.map((list) => {
          return (
            <div className="flex flex-col items-start text-left">
              <div className="bg-gray-300 h-16 w-16 mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 max-[600px]:text-[1.2rem]">{list.title}</h3>
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
    title: "Simplified Inventory Management",
    body: "Depoter streamlines inventory planning, tracking, and management to ensure your products are always ready for shipment to Amazon fulfillment centers. Our expertise optimizes storage, reduces costs, and efficiently ships products based on demand and location.",
  },
  {
    id: 3,
    title: "Simplified Inventory Management",
    body: "Depoter streamlines inventory planning, tracking, and management to ensure your products are always ready for shipment to Amazon fulfillment centers. Our expertise optimizes storage, reduces costs, and efficiently ships products based on demand and location.",
  },
  {
    id: 4,
    title: "Simplified Inventory Management",
    body: "Depoter streamlines inventory planning, tracking, and management to ensure your products are always ready for shipment to Amazon fulfillment centers. Our expertise optimizes storage, reduces costs, and efficiently ships products based on demand and location.",
  },
  {
    id: 5,
    title: "Simplified Inventory Management",
    body: "Depoter streamlines inventory planning, tracking, and management to ensure your products are always ready for shipment to Amazon fulfillment centers. Our expertise optimizes storage, reduces costs, and efficiently ships products based on demand and location.",
  },
  {
    id: 6,
    title: "Simplified Inventory Management",
    body: "Depoter streamlines inventory planning, tracking, and management to ensure your products are always ready for shipment to Amazon fulfillment centers. Our expertise optimizes storage, reduces costs, and efficiently ships products based on demand and location.",
  },
];

export default Section1;
