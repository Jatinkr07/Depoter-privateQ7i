import { Container } from "react-bootstrap";

const Section10 = () => {
  return (
    <div data-aos="fade-up" className="w-full seconday-bg py-[100px]">
      <Container>
        <div className="text-center">
          <h1 className="font-[700]">
            <span className="text-yellow">Depoter</span> is the ultimate
            solution for efficient <br /> and secure{" "}
            <span className="text-yellow">item storage</span>
          </h1>
        </div>
        {/* content */}
        <div className="w-full solution-contents">
          {data.map((list, index) => {
            return (
              <div
                key={list.id}
                className={`home-solution-card ${
                  index < 4
                    ? "border-t-transparent border-l"
                    : "border-b-transparent border-l border-t"
                } p-2 md:p-5 w-full border-gray-300 ${
                  index == 3 && "border-r"
                } ${index == 7 && "border-r"}`}
              >
                <span className="w-[16px] block h-[16px] border-2 border-black"></span>
                <p className="text-[18px] md:text-[24px] my-2">{list.title}</p>
                <p className="text-[14px] md:text-[16px] text-[#454545] mt-0">
                  {list.content}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Section10;

const data = [
  {
    id: 1,
    title: "InventoryStorage",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
  },
  {
    id: 2,
    title: "Order Fulfillment",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
  },
  {
    id: 3,
    title: "2-day Delivery",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
  },
  {
    id: 4,
    title: "Custom Packaging",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
  },
  {
    id: 5,
    title: "Warehouse Management",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
  },
  {
    id: 6,
    title: "Global Fulfillment",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
  },
  {
    id: 7,
    title: "Inventory Distribution",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
  },
  {
    id: 8,
    title: "B2B Fulfillment",
    content: "Built for engineers, developers, dreamers, thinkers and doers.",
  },
];
