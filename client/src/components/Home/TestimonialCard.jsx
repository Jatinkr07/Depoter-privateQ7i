import img from "../../assets/home/testimonial.png";
import StartRating from "../global/StartRating";
import bgCover from "../../assets/home/bgCover.png";

const TestimonialCard = () => {
  return (
    <div
      className="w-[380px] shadow-md mr-[50px] py-2 px-3 border border-gray-200 rounded-lg"
      style={{
        backgroundImage: `url(${bgCover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex gap-3">
        <img
          src={img}
          className="w-[60px] h-[60px] rounded-[100px]"
          alt="Profile"
        />
        <div>
          <h5>Jana Thomas</h5>
          <p className="text-gray-500">CEO of ApnaStore</p>
        </div>
      </div>
      <StartRating num={3} />
      <p className="mt-3 text-[12px]">
        Exceptional experience using this eCommerce builder! Seamless website
        creation, intuitive features, and top-notch customer support. A
        game-changer for anyone looking to establish an online presence
        effortlessly.
      </p>
    </div>
  );
};

export default TestimonialCard;
