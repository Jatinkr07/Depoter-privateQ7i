import { Container } from "react-bootstrap";
import car from "../../assets/home/smallCar.png";
import polygon from "../../assets/global/Polygon.png";
import img from "../../assets/home/section9.png";
import smallTruc from "../../assets/home/smallTruc.png";

const Section9 = () => {
  return (
    <div>
      {/* Polygon Background */}
      <img src={polygon} alt="Polygon Background" className="w-full" />

      {/* Content Section */}
      <div className="w-full text-center bg-[#F4F4F4] pb-10 relative">
        <Container>
          <div className="flex flex-wrap items-center justify-between py-5">
            {/* Left Section (Image) */}
            <div className="w-full mb-6 md:w-1/2 md:mb-0">
              <img
                src={img}
                alt="Section Image"
                className="w-[90%] mx-auto object-contain"
              />
            </div>

            {/* Right Section (Content) */}
            <div className="flex flex-col justify-center w-full text-left md:w-1/2">
              <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                {/* Box 1 */}
                <div className="flex items-center gap-3">
                  <img
                    src={smallTruc}
                    alt="Truck Icon"
                    className="border-2 border-[#EDA119] rounded-full p-2 w-16 h-16"
                  />
                  <div>
                    <h3 className="mb-0 text-base font-semibold md:text-lg lg:text-xl">
                      Cost Optimization
                    </h3>
                    <p className="text-sm text-gray-600 md:text-base">
                      Knowledge & Data To Optimize Cost
                    </p>
                  </div>
                </div>

                {/* Box 2 */}
                <div className="flex items-center gap-3">
                  <img
                    src={smallTruc}
                    alt="Truck Icon"
                    className="border-2 border-[#EDA119] rounded-full p-2 w-16 h-16"
                  />
                  <div>
                    <h3 className="mb-0 text-base font-semibold md:text-lg lg:text-xl">
                      Expert Truckload
                    </h3>
                    <p className="text-sm text-gray-600 md:text-base">
                      Get Full-Service From Truckload Section.
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-gray-600 md:text-base lg:text-lg">
                Depoter understands the importance of cost-effectiveness in the
                competitive e-commerce landscape. B2B fulfillment services must
                not only be efficient but also cost-effective to provide value
                to businesses.
              </p>

              {/* Call-to-Action */}
              <div className="flex items-center justify-center gap-3 mt-4 md:justify-start">
                <p className="mb-0 text-sm font-medium text-yellow-500 md:text-lg lg:text-2xl">
                  Start Your Journey
                </p>
                <img
                  src={car}
                  alt="Car Icon"
                  className="object-contain w-8 md:w-12 lg:w-14"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Section9;
