import React from "react";
import icon1 from "../../assets/page5/sec5-icon1.png";
import icon2 from "../../assets/page5/sec5-icon2.png";
import icon3 from "../../assets/page5/sec5-icon3.png";
import icon4 from "../../assets/page5/sec5-icon4.png";
import icon5 from "../../assets/page5/sec5-icon5.png";
import Container from "../global/Container/";
import cone from "../../assets/page5/sec5-cone.png";

const Section5 = () => {
  return (
    <>
      <img src={cone} alt="" className="w-full" />
      <div className="w-full bg-[#F5F5F5]">
        <Container>
          <div className="mx-auto px-4 py-[100px] max-[600px]:py-2 text-center">
            {/* Header */}
            <h2 className="text-yellow-500 max-[600px]:text-[1rem] text-4xl font-semibold">
              Ecommerce Marketplace
            </h2>
            <h1 className="text-[36px] max-[600px]:text-[1.2rem] sm:text-[48px] lg:text-[62px] font-[600] mt-2 mb-10">
              All Channels Under One Roof
            </h1>

            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10">
              {/* Card 1 */}
              {data.map((list) => (
                <div
                  key={list.id}
                  className="flex flex-col items-center text-left bg-white p-5 max-[600px]:p-[2rem] rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                  <img
                    src={list.img}
                    alt={list.title}
                    className="mb-4 h-16 w-16 object-contain"
                  />
                  <h3 className="text-lg max-[600px]:text-[1.2rem] sm:text-xl font-semibold mb-2">
                    {list.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base max-[600px]:text-[0.78rem]">
                    {list.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

const data = [
  {
    id: 1,
    title: "Retail Distribution",
    img: icon1,
    body: "Leverage dropshipping to expand your product offerings without holding inventory, allowing for quick fulfillment directly from suppliers to customers.",
  },
  {
    id: 2,
    title: "Retail Dropshipping",
    img: icon2,
    body: "Seamlessly manage orders and inventory across popular online marketplaces, enhancing your reach and simplifying fulfillment processes.",
  },
  {
    id: 3,
    title: "Online Marketplaces",
    img: icon3,
    body: "Seamlessly manage orders and inventory across popular online marketplaces, enhancing your reach and simplifying fulfillment processes.",
  },
  {
    id: 4,
    title: "Amazon FBA",
    img: icon4,
    body: "Utilize Fulfillment by Amazon (FBA) for hassle-free storage, packaging, and shipping, while benefiting from Amazon’s extensive logistics network.",
  },
  {
    id: 5,
    title: "Simplified Inventory Management",
    img: icon5,
    body: "Depoter streamlines inventory planning, tracking, and management to ensure your products are always ready for shipment to Amazon fulfillment centers. Our expertise optimizes storage, reduces costs, and efficiently ships products based on demand and location.",
  },
  {
    id: 6,
    title: "Simplified Inventory Management",
    img: icon5,
    body: "Depoter streamlines inventory planning, tracking, and management to ensure your products are always ready for shipment to Amazon fulfillment centers. Our expertise optimizes storage, reduces costs, and efficiently ships products based on demand and location.",
  },
];

export default Section5;
