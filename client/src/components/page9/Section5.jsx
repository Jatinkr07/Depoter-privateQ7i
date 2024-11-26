import Container from "../global/Container";
// import img1 from "../../assets/page4/sec5-img1.png";
// import img2 from "../../assets/page4/sec5-img2.png";

const Section5 = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-100 overflow-hidden rounded-lg shadow-sm my-20 max-[600px]:my-5 p-8">
        {/* Text Section */}
        <div className="max-w-md mb-8 text-gray-900 lg:mb-0">
          <h2 className="text-2xl max-[600px]:text-[1.6rem] sm:text-3xl font-bold">
            Grow your business with Fulfillment by{" "}
            <span className="text-blue-400">Amazon</span>
          </h2>
          {/* Logo Section */}
          <div className="flex items-center mt-4 mb-8 space-x-6">
            <img
              src="/dImg.png"
              alt="Depot logo"
              className="h-10 max-[600px]:h-8"
            />
            <div className="w-8 h-8 bg-orange-500 rounded-full">
              <p className="text-xl text-center">+</p>
            </div>
            <img
              src="/noonImg.png"
              alt="Depot logo"
              className="h-10 max-[600px]:h-8"
            />
          </div>
          {/* Button */}
          <button className="px-6 py-2 font-semibold text-black bg-yellow-500 rounded-md hover:bg-yellow-600">
            Request Fulfilling Pricing
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:ml-4">
          <img
            src="/noonP.png"
            alt="Fulfillment Center"
            className="h-[300px] w-full max-w-[400px] object-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default Section5;
