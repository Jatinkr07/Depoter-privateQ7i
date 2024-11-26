import { Container } from "react-bootstrap";
import car from "../../assets/home/smallCar.png";
import polygon from "../../assets/global/Polygon.png";
import img from "../../assets/home/section6.png";

const Section6 = () => {
  return (
    <div className="">
      {/* Background Polygon */}
      <img src={polygon} alt="Polygon Background" className="w-full" />

      {/* Content Section */}
      <div className="w-full text-center bg-[#F4F4F4]  relative pb-10">
        <Container>
          <div className="flex flex-wrap items-center justify-between py-5">
            {/* Left Section (Text Content) */}
            <div className="w-full text-left md:w-1/2">
              <h3
                className="text-xl font-semibold md:text-2xl lg:text-4xl leading-[2rem] md:leading-[3.2rem] "
                // style={{ lineHeight: "3.2rem" }}
              >
                Pick and Pack Services: <br />
                Precision and Efficiency in Fulfillment
              </h3>
              <p className="my-4 text-sm text-gray-700 md:text-base lg:text-lg">
                Depoter’s pick and pack services are an integral part of its B2B
                fulfillment offerings. Picking and packing are labour-intensive
                processes that require precision to ensure orders are accurate
                and products are well-protected during transit. Depoter employs
                advanced picking technologies and automated systems to
                streamline this aspect of fulfillment.
              </p>

              {/* Call-to-Action */}
              <div className="flex items-center gap-3 mt-4">
                <p className="mb-0 text-sm font-medium text-yellow-500 md:text-lg lg:text-2xl">
                  Start Your Journey
                </p>
                <img
                  src={car}
                  alt="Car Icon"
                  className="w-[30px] md:w-[50px] object-contain"
                />
              </div>
            </div>

            {/* Right Section (Image) */}
            <div className="w-full mt-6 md:w-1/2 md:mt-0">
              <img
                src={img}
                alt="Pick and Pack Services"
                className="w-[90%] mx-auto object-contain"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Section6;
