import React from "react";
import Container from "../global/Container";

import img1 from "../../assets/page3/sec3-img1.png";
import img2 from "../../assets/page3/sec3-img2.png";
import img3 from "../../assets/page3/sec3-img3.png";
import img4 from "../../assets/page3/sec3-img4.png";

const Section3 = () => {
  return (
    <div className="w-full py-20 max-[600px]:py-5 md:mb-0 mb-20">
      <Container>
        <div className="w-full mb-10 text-center">
          <h2 className="text-[36px] max-[600px]:text-[1.5rem] sm:text-[42px] md:text-[52px] font-[600]">
            Freight & Shipping Solutions
          </h2>
          <p className="text-[18px] max-[600px]:text-[0.8rem] sm:text-[24px] md:text-[30px] text-[#727272]">
            Last-mile fulfillment is just part of the equation. ShipBob partners
            with <br /> these carriers and shipping platforms to lower your
            shipping costs.
          </p>
        </div>
        {/* Cards */}
        <div className="grid w-full grid-cols-1 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data1.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4" // Removed borders and shadows
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-16 h-16"
                />
                <div>
                  <h3 className="text-[20px] max-[600px]:text-[1.5rem] sm:text-[24px] font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[16px] max-[600px]:text-[0.8rem] sm:text-[18px] text-[#454545]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

const data1 = [
  {
    id: 1,
    img: img1,
    title: "Shopify",
    desc: "Streamline Shopify Order Fulfillment",
  },
  {
    id: 2,
    img: img2,
    title: "DHL",
    desc: "Streamline WooCommerce Fulfillment",
  },
  {
    id: 3,
    img: img3,
    title: "FedEx",
    desc: "Streamline Wix Order Fulfillment",
  },
  {
    id: 4,
    img: img4,
    title: "Magento",
    desc: "Streamline Magento Order Fulfillment",
  },
  {
    id: 5,
    img: img2,
    title: "DHL",
    desc: "Streamline BigCommerce Order Fulfillment",
  },
  {
    id: 6,
    img: img4,
    title: "FedEx",
    desc: "Streamline OpenCart Order Fulfillment",
  },
];

export default Section3;
