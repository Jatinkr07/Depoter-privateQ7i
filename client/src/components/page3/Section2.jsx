import React from "react";
import Container from "../global/Container";
import img1 from "../../assets/page3/sec2-img1.png";
import img2 from "../../assets/page3/sec2-img2.png";
import img3 from "../../assets/page3/sec2-img3.png";
import img4 from "../../assets/page3/sec2-img4.png";
import img5 from "../../assets/page3/sec2-img5.png";
import img6 from "../../assets/page3/sec2-img6.png";

const Section2 = () => {
  return (
    <div className="w-full py-10">
      <Container>
        <div className="w-full text-center mb-10">
          <h2 className="text-[36px] max-[600px]:text-[1.5rem] sm:text-[42px] md:text-[52px] font-[600]">
            Ecommerce Platforms & Marketplaces
          </h2>
          <p className="text-[18px] max-[600px]:text-[0.8rem] sm:text-[24px] md:text-[30px] text-[#727272]">
            Depoter partners directly with the following platforms and <br />
            marketplaces to streamline order fulfillment for your business.
          </p>
        </div>
        {/* Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data1.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 rounded-lg" // Removed border and shadow classes
              >
                <img src={item.img} alt="" className="w-16 h-16 object-cover" />
                <div>
                  <h3 className="text-[20px] max-[600px]:text-[1.5rem] sm:text-[24px] font-semibold">{item.title}</h3>
                  <p className="text-[16px] max-[600px]:text-[0.8rem] sm:text-[18px] text-[#454545]">{item.desc}</p>
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
    title: "WooCommerce",
    desc: "Streamline WooCommerce Fulfillment",
  },
  {
    id: 3,
    img: img3,
    title: "Wix",
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
    img: img5,
    title: "BigCommerce",
    desc: "Streamline BigCommerce Order Fulfillment",
  },
  {
    id: 6,
    img: img6,
    title: "OpenCart",
    desc: "Streamline OpenCart Order Fulfillment",
  },
];

export default Section2;