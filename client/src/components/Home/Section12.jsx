import { Container } from "react-bootstrap";
import img from "../../assets/home/section12.jpeg";

const Section12 = () => {
  return (
    <div data-aos="fade-up" className="w-full py-10 text-center">
      <Container>
        {/* Content Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row ">
          {/* Left Section (Text) */}
          <div className="w-full text-left md:w-1/2">
            <h3
              className="text-lg font-semibold md:leading-[3.2rem] leading-[2rem] md:text-4xl"
              // style={{ lineHeight: "3.2rem" }}
            >
              Last-Mile Delivery: Ensuring Timely and Reliable Deliveries
            </h3>
            <p className="my-3 text-sm text-gray-600 md:text-lg">
              In the realm of last-mile delivery, Depoter excels in providing
              timely and reliable shipping solutions. The company has a network
              of strategic partnerships with transportation providers, allowing
              for quick and efficient deliveries across Dubai and the broader
              region.
            </p>
          </div>

          {/* Right Section (Image) */}
          <div className="flex justify-center w-full -mt-9 md:w-1/2">
            <img
              src={img}
              alt="Last-Mile Delivery"
              className="w-[90%] md:w-[70%] object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section12;
