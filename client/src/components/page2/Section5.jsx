import Container from "../global/Container";
import icon1 from "../../assets/page1/section5-icon1.png";
import icon2 from "../../assets/page1/section5-icon2.png";
// import icon3 from "../../assets/page1/section5-icon3.png";

const Section5 = () => {
  return (
    <Container>
      <section className="text-center md:py-20">
        <h2 className="text-[1.5rem] md:text-[40px] font-semibold mb-10">
          How long does it take to get started?
        </h2>
        <div className="relative flex items-center justify-center mt-[50px] md:mt-[100px] mb-12">
          <div className="absolute top-1/2 transform -translate-y-12 w-11/12 md:w-10/12 h-0.5 bg-yellow-400" />
          <div className="flex justify-between w-10/12">
            {["Day 1", "Day 2", "Day 3"].map((day, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="flex items-center justify-center w-6 h-6 bg-white border-yellow-400 rounded-full border-5 md:w-8 md:h-8">
                  <span className="text-yellow-400"></span>
                </div>
                <span className="mt-5 text-[18px] md:text-[30px] font-semibold">
                  {day}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 px-6 md:grid-cols-3 md:px-20">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              {/* Icon */}
              <div className="p-3 bg-yellow-100 rounded-full">
                <img
                  src={icon1}
                  alt="Get Started Icon"
                  className="w-5 h-5 md:w-10 md:h-10"
                />
              </div>
            </div>
            <h3 className="text-[1.5rem] md:text-[30px] font-semibold mb-2">
              Get Started
            </h3>
            <p className="text-[0.8rem] text-gray-600 md:text-lg">
              Connect your listing tool or shopping cart in just a few clicks,
              and explore cost previews for each item in your catalog.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              {/* Icon */}
              <div className="p-3 bg-yellow-100 rounded-full">
                <img
                  src={icon2}
                  alt="Send Inventory Icon"
                  className="w-5 h-5 md:w-10 md:h-10"
                />
              </div>
            </div>
            <h3 className="text-[1.5rem] md:text-[30px] font-semibold mb-2">
              Send Inventory
            </h3>
            <p className="text-[0.8rem] text-gray-600 md:text-lg">
              Pick the items you want to send, and we will guide you
              step-by-step on how to ship to us. You can even use our discounted
              shipping rates.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              {/* Icon */}
              <div className="p-3 bg-yellow-100 rounded-full">
                <img
                  src={icon2}
                  alt="Start Selling Icon"
                  className="w-5 h-5 md:w-10 md:h-10"
                />
              </div>
            </div>
            <h3 className="text-[1.5rem] md:text-[30px] font-semibold mb-2">
              Start Selling
            </h3>
            <p className="text-[0.8rem] text-gray-600 md:text-lg">
              Once we receive your inventory, we will sync with our sales
              channel so that orders automatically start flowing in.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Section5;
