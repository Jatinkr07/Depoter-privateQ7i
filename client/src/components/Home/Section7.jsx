import { Container } from "react-bootstrap";
import img from "../../assets/home/section7.png";
import car from "../../assets/home/smallCar.png";

const Section7 = () => {
  return (
    <div data-aos="fade-up" className="w-full py-12 text-center">
      <Container>
        {/* Content Section */}
        <div className="flex flex-wrap-reverse items-center justify-between py-5 -mt-24 md:flex-nowrap md:mt-0 ">
          {/* Left Section (Image) */}
          <div className="w-full mt-8 md:w-1/2 md:mt-0">
            <img
              src={img}
              className="w-[90%] mx-auto object-contain"
              alt="B2B Fulfillment Illustration"
            />
          </div>

          {/* Right Section (Text) */}
          <div className="w-full mt-6 text-left md:w-1/2 md:mt-0">
            <h3
              className="text-xl font-semibold md:text-2xl lg:text-4xl md:leading-[3rem] leading-[2rem]"
              // style={{ lineHeight: "3rem" }}
            >
              Order Processing and Inventory Management :
              <span className="mt-2 ">
                &nbsp;The Foundation of B2B Fulfillment
              </span>
            </h3>
            <p className="my-6 text-base leading-relaxed text-gray-600 md:text-lg lg:text-xl">
              For e-commerce fulfillment, maintaining an optimal inventory is
              key, and Depoter’s B2B warehouse operations are designed to ensure
              that products are available whenever they are needed. By
              integrating warehouse management systems (WMS) with order
              processing tools, Depoter provides real-time visibility into
              inventory status, allowing businesses to make informed decisions
              and respond to demand fluctuations swiftly.
            </p>

            {/* Call-to-Action */}
            <div className="flex items-center gap-3 mt-4">
              <p className="mb-0 text-lg font-medium text-yellow-500 md:text-xl lg:text-2xl">
                Start Your Journey
              </p>
              <img
                src={car}
                className="w-[30px] md:w-[50px] object-contain"
                alt="Small Car Icon"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section7;
