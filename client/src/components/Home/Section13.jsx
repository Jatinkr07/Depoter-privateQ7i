/* eslint-disable react/no-unescaped-entities */

import { Container } from "react-bootstrap";
import img from "../../assets/home/section13.jpeg";

const Section13 = () => {
  return (
    <div data-aos="fade-up" className="w-full py-10 text-center">
      <Container>
        {/* Content Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:-mt-14 md:flex-row-reverse">
          {/* Left Section (Image) */}
          <div className="flex justify-center w-full md:w-1/2 md:order-2">
            <img
              src={img}
              className="w-[90%] md:w-[77%] object-contain"
              alt="Technology-Driven Fulfillment"
            />
          </div>

          {/* Right Section (Text) */}
          <div className="w-full text-left md:w-1/2">
            <h3
              className="text-lg font-semibold leading-snug md:text-4xl"
              style={{ lineHeight: "3.2rem" }}
            >
              Technology-Driven Fulfillment: Leveraging Innovation for B2B
              Success
            </h3>
            <p className="my-3 text-sm text-gray-600 md:text-lg">
              One key aspect of Depoter's B2B fulfillment services is its
              advanced technology infrastructure. The company utilizes warehouse
              management systems (WMS) and order processing systems to ensure
              real-time visibility into inventory levels and order status.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section13;
