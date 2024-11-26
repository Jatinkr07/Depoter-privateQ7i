import { Container } from "react-bootstrap";
import polygon from "../../assets/page1/section3-polygon.png";
import icon1 from "../../assets/page1/sec3-icon1.png";
import icon2 from "../../assets/page1/sec3-icon2.png";
import icon3 from "../../assets/page1/sec3-icon3.png";
import icon4 from "../../assets/page1/sec3-icon4.png";
import icon5 from "../../assets/page1/sec3-icon5.png";
import icon6 from "../../assets/page1/sec3-icon6.png";
import icon7 from "../../assets/page1/sec3-icon7.png";
import icon8 from "../../assets/page1/sec3-icon8.png";

const Section3 = () => {
  return (
    <div>
      <img src={polygon} className="w-full h-[100%] object-cover" alt="" />
      <div className="w-full bg-[#EDA1196E] pb-[100px]">
        <Container>
          <div className="text-center">
            <h1 className="text-[1.4rem] font-bold sm:text-3xl  md:text-4xl lg:text-5xl">
              <span className="text-yellow">Depoter</span> is the ultimate
              solution for efficient <br /> and secure
              <span className="text-yellow"> item storage</span>
            </h1>
          </div>

          {/* Solution Content Grid */}
          <div className="grid grid-cols-2 md:mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((list, index) => {
              return (
                <div
                  key={list.id}
                  className={`relative p-4 md:p-8 border-[#B3B2B2]  
                    ${
                      index < 4
                        ? "border-t-transparent border-l"
                        : "border-b-transparent border-l border-t"
                    } 
                    ${index === 3 || index === 7 ? "border-r" : ""}`}
                >
                  <span className="block bg-[#FFBE2E] w-[5px] h-[50px] absolute left-0 top-[80px]"></span>
                  <div className="px-3 py-5 max-[600px]:py-1 max-[600px]:px-1 ">
                    <img src={list.img} alt="" className="w-12 h-12 mx-auto" />
                    <p className="text-[18px] max-[600px]:text-[1rem] font-[700] md:text-[24px] my-2">
                      {list.title}
                    </p>
                    <p className="text-[14px] max-[600px]:text-[0.8rem] md:text-[16px] text-[#454545] mt-0">
                      {list.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Section3;

const data = [
  {
    id: 1,
    title: "InventoryStorage",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
    img: icon1,
  },
  {
    id: 2,
    title: "Order Fulfillment",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
    img: icon2,
  },
  {
    id: 3,
    title: "2-day Delivery",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
    img: icon3,
  },
  {
    id: 4,
    title: "Custom Packaging",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
    img: icon4,
  },
  {
    id: 5,
    title: "Warehouse Management",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
    img: icon5,
  },
  {
    id: 6,
    title: "Global Fulfillment",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
    img: icon6,
  },
  {
    id: 7,
    title: "Inventory Distribution",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
    img: icon7,
  },
  {
    id: 8,
    title: "B2B Fulfillment",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
    img: icon8,
  },
];
