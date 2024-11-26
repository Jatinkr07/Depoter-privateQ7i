import { Container } from "react-bootstrap";
import pallet from "../../assets/home/pallet.png";

const Section2 = () => {
  return (
    <Container>
      <div className="w-full section3 my-5  text-center section-heading py-[100px]">
        <h4 className="text-[40px] font-[700]">We can help with</h4>
        <p>
          We can assist with fulfillment across various industries, including{" "}
          <br />
          pet supplies and more
        </p>
        <div className="w-[80%] my-0 mx-auto mt-5 counter-container gap-5">
          <div className="hexagon w-[200px] h-[200px] border-2 border-yellow-500">
            hello
          </div>
        </div>
      </div>
    </Container>
  );
};

const data = [
  {
    id: 1,
    text: "Pet Supplies",
    img1: "https://via.placeholder.com/30",
    img2: "https://via.placeholder.com/30",
    centerImg: "https://via.placeholder.com/30",
  },
];

export default Section2;
