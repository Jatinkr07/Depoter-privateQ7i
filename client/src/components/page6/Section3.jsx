import React from "react";
import Container from "../../components/global/Container";
import img1 from "../../assets/page6/sec3-img1.png";
import img2 from "../../assets/page6/sec3-img2.png";

const Section2 = () => {
  return (
    <Container>
      <div className="px-4 py-[100px] max-[600px]:py-5  text-center">
        {/* Header */}
        <div className="text-center max-[650px]:my-5 max-[600px]:my-2 gap-10">
          <div className="">
            <span className="bg-[#FBFAE6] border border-[#FFC443] py-2 px-5 rounded-xl max-[650px]:mb-5 max-[600px]:mb-2">
              Services
            </span>
            <h2 className="font-semibold text-[52px] max-[600px]:text-[1.2rem] mt-5 max-[600px]:mb-5 ">
              Top Storage Services Offered By <br />
              <span className="text-[#EDA119]">Depoter</span>
            </h2>
          </div>
        </div>

        {/* Cards Container */}
        <div className="w-full space-y-8">
          {/* Climate-Controlled Storage */}
          <div className="flex flex-col md:flex-row items-center climate-padding bg-[#FDFCF0] rounded-xl border border-[#ECECEC]">
  
            <div className="w-full md:w-1/2 text-left ">
              <h3 className="text-[42px] max-[600px]:text-[1.1rem] font-[600]">
                Climate-Controlled Storage
              </h3>
              <p className="text-[20px] max-[600px]:text-[0.8rem] leading-[1.5]">
                We provide temperature and humidity-controlled storage units to
                protect your valuable inventory. Our climate-controlled
                warehouses ensure ideal conditions for food, pharmaceuticals,
                electronics, and other sensitive goods.
              </p>
              <p className="text-[20px] max-[600px]:text-[0.8rem] leading-[1.5]">
                Equipped with advanced HVAC technology and remote monitoring
                systems, you can trust that your products are safely stored as
                required.
              </p>
            </div>
            <div className="w-full md:w-1/2 ">
              <img
                src={img1}
                className="h-auto object-cover"
                alt="Climate-Controlled Storage"
              />
            </div>
          </div>

          {/* Bonded Storage */}
          <div className="flex flex-col md:flex-row items-center max-[800px]:gap-5  bg-[#FDFCF0] climate-padding rounded-xl border border-[#ECECEC]">
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-[42px] font-[600] max-[600px]:text-[1.1rem]">
                Bonded Storage
              </h3>
              <p className="text-[20px] leading-[1.5] max-[600px]:text-[0.8rem]">
                As an authorized bonded warehouse operator, we allow
                duty-deferment on imported goods stored with us. You only pay
                duties when shipments are taken out for local distribution,
                improving your cash flow.
              </p>
              <p className="text-[20px] leading-[1.5]  max-[600px]:text-[0.8rem]">
                Our facilities are secure, monitored 24/7, and regularly audited
                by relevant authorities.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={img2}
                className="h-auto object-cover"
                alt="Bonded Storage"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section2;
