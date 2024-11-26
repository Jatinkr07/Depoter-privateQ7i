import { Container } from "react-bootstrap";
import car from "../../assets/home/smallCar.png";
import main from "../../assets/home/section6-main.png";
import side from "../../assets/home/section6-side.png";
import polygon from "../../assets/page1/section6-polygon.png";

const Section6 = () => {
  return (
    <>
      <img src={polygon} className="w-full" alt="Polygon Background" />
      <div className="w-full text-center bg-[#393939] text-white py-10">
        <Container>
          <h1 className="mb-4 text-[1.5rem] font-bold sm:text-4xl md:text-5xl">
            Here’s Why You Should <br /> Use Depoter
          </h1>
          <p className="mb-8 text-[0.8rem] text-base sm:text-xl">
            Unlock the Power of logistics for an Enhanced and Seamless <br />
            logistics experience.
          </p>

          {/* content section */}
          <div className="grid grid-cols-1 gap-6 py-5 sm:grid-cols-2">
            {/* left */}
            <div className="relative w-full">
              <img
                src={main}
                className="w-[70%] sm:w-[80%] mx-auto mb-4 -mt-20 sm:mt-0 "
                alt="Main Image"
              />
              <img
                src={side}
                alt="Side Image"
                className="absolute -top-20 left-[-9%] sm:left-[-10%] w-[50%] sm:w-[60%]"
              />
            </div>

            {/* right */}
            <div className="flex flex-col justify-center w-full text-left">
              <h3 className="mb-4 text-[1.5rem] font-bold sm:text-3xl">
                Enhanced Efficiency
              </h3>
              <p className="mb-6 text-sm sm:text-lg">
                Depoter streamlines your warehouse operations with advanced
                tools for picking, packing, and delivering. Our solutions reduce
                manual effort, minimize errors, and increase productivity,
                ensuring that your operations run smoothly and efficiently.
              </p>

              <div className="flex items-center gap-3">
                <p className="mb-0 text-lg text-yellow sm:text-xl">
                  Start Your Journey
                </p>
                <img
                  src={car}
                  className="w-[30px] sm:w-[60px]"
                  alt="Car Icon"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Section6;
