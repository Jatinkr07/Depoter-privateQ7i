import React from "react";
import icon1 from "../../assets/page1/integration-icon1.png";
import icon2 from "../../assets/page1/integration-icon2.png";
import icon3 from "../../assets/page1/integration-icon3.png";
import icon4 from "../../assets/page1/integration-icon4.png";
import icon5 from "../../assets/page1/integration-icon5.png";
import icon6 from "../../assets/page1/integration-icon6.png";
import main from "../../assets/page1/integration-main.png";

function Integrations() {
  return (
    <section className="bg-[#393939] text-white py-[100px] px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
        {/* Left Side - Text and Button */}
        <div className="md:w-1/2 mb-8 md:mb-0 animate-slide-left">
          <h2 className="text-4xl max-[600px]:text-[1.5rem] font-semibold mb-4 max-[600px]:mb-2">
            Explore Integrations
          </h2>
          <p className="text-lg max-[600px]:text-sm  mb-6">
            Effortlessly connect your business with a variety of leading
            e-commerce platforms for streamlined operations.
          </p>
          <button className="bg-white text-black [#393939] px-6 py-2 rounded font-medium hover:bg-gray-300 transition duration-300">
            Explore Integrations →
          </button>
        </div>

        {/* Right Side - Icon Graphic */}
        <div className="md:w-[300px] h-[300px] flex justify-center items-center relative">
          <div className="w-full h-full rounded-full border border-green-500 absolute top-0 left-0 animate-spin"></div>
          <div className="w-[80%] h-[80%] rounded-full border border-red-500 absolute top-[10%] left-[10%]"></div>
          {/* Center Icon */}
          <div className="h-24 w-24 flex items-center justify-center rounded-full">
            <img src={main} alt="" />
          </div>

          {/* Inner Orbit Icons */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-innerOrbit"
            style={{ transformOrigin: "center 80px" }}
          >
            <img src={icon1} alt="FedEx" />
          </div>
          <div
            className="absolute top-0 right-1/2 transform -translate-x-1/2 animate-innerOrbit"
            style={{ transformOrigin: "center 80px" }}
          >
            <img src={icon2} alt="Shopify" />
          </div>

          {/* Outer Orbit Icons */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-outerOrbit"
            style={{ transformOrigin: "center 120px" }}
          >
            <img src={icon3} alt="WooCommerce" />
          </div>
          <div
            className="absolute bottom-0 right-1/2 transform -translate-x-1/2 animate-outerOrbit"
            style={{ transformOrigin: "center 120px" }}
          >
            <img src={icon4} alt="Magento" />
          </div>
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-outerOrbit"
            style={{ transformOrigin: "center 120px" }}
          >
            <img src={icon5} alt="CustomIcon1" />
          </div>
          <div
            className="absolute top-0 right-1/2 transform -translate-x-1/2 animate-outerOrbit"
            style={{ transformOrigin: "center 120px" }}
          >
            <img src={icon6} alt="CustomIcon2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Integrations;
