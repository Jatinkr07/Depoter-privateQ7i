import React from "react";
import Container from "../../components/global/Container";
import icon1 from "../../assets/page6/sec2-icon1.png";
import icon2 from "../../assets/page6/sec2-icon2.png";
import icon3 from "../../assets/page6/sec2-icon3.png";
import { NavLink } from "react-bootstrap";

const Section2 = () => {
  return (
    <Container>
      <div className="px-4 py-[50px] max-[600px]:py-[0.5rem] text-center">
        {/* Header */}
        <div className="text-center my-5 gap-10">
          <div>
            <span className="bg-[#EFF6FB] py-2 px-5 rounded-xl mb-5">
              Why Us
            </span>
            <h2 className="font-semibold text-[52px] max-[600px]:text-[1.2rem] mt-5">
              Top Storage Services Offered By <br />{" "}
              <span className="text-[#EDA119]">Depoter</span>
            </h2>
          </div>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((list) => (
            <div
              key={list.id}
              className="items-start lg:p-4 max-sm:p-2 text-center hover:bg-[#EDA11905] duration-300 border-2 hover:border-[#EDA119]   rounded-[30px]"
            >
              <div className="border my-0 mx-auto inline-block  border-[#EDA119] p-2">
                <img
                  src={list.img}
                  alt={list.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[1.5rem] max-[600px]:text-[1.1rem] text-center font-semibold mb-2">
                {list.title}
              </h3>
              <p className="text-gray-600 max-[600px]:text-[0.7rem]  text-[1.3rem] text-center">
                {list.body}
              </p>
              <NavLink className="text-center">
                <span className="text-[#EDA119] max-[600px]:text-[1.2rem] text-[24px]">
                  Contact Now {"->"}
                </span>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const data = [
  {
    id: 1,
    img: icon1,
    title: "Specialist Expertise",
    body: "We are specialists in storage, warehouse management, and efficient order fulfillment, backed by decades of industry experience.",
  },
  {
    id: 2,
    img: icon2,
    title: "Advanced Technology",
    body: "We utilize advanced warehouse management systems, ERP software, RF and barcode scanning and more to boost accuracy, efficiency and service levels.",
  },
  {
    id: 3,
    img: icon3,
    title: "Strategic Locations",
    body: "Our warehouses and fulfillment centers located close to ports, airports and key transport links in Dubai ensure rapid fulfillment reach to your customers.",
  },
];

export default Section2;
