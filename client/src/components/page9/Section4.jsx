import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Container from "../global/Container";

const { Panel } = Collapse;

const Section4 = () => {
  const customExpandIcon = ({ isActive }) =>
    isActive ? <MinusOutlined /> : <PlusOutlined />;

  return (
    <Container>
      <div className="px-4 flex flex-col lg:flex-row items-start py-20 max-[600px]:py-10">
        {/* Header Section */}
        <div className="w-full lg:w-1/2 mb-8 max-[600px]:mb-2">
          <button className="px-4 py-2 font-semibold text-yellow-500 border border-yellow-300 rounded-full bg-yellow-50">
            Why Us
          </button>
          <div>
            <h1 className=" max-[600px]:my-4 sm:text-3xl font-bold max-[600px]:text-[1.5rem]">
              Answer to Your Questions
            </h1>
            <p className="text-gray-500 mt-2 max-[600px]:text-[0.8rem]">
              Explore answers to common questions about Depoter and its
              features. If you have any additional inquiries, feel free to reach
              out to our support team for assistance.
            </p>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="w-full lg:w-1/2">
          <Collapse
            accordion
            expandIcon={customExpandIcon}
            className="bg-transparent faq-accordion"
            bordered={false}
          >
            {/* Example Panel */}
            {Array.from({ length: 4 }, (_, index) => (
              <Panel
                header={`What is FBA? ${index + 1}`}
                key={index + 1}
                className="mb-4 border rounded-md"
              >
                <p className="text-gray-600">
                  For sellers on Amazon, choosing the right fulfillment partner
                  is key to ensuring a smooth and scalable operation. Depoter
                  offers specialized FBA (Fulfilled by Amazon) fulfillment
                  services, providing the support businesses need to navigate
                  the complexities of Amazon's fulfillment system and grow their
                  online presence.
                </p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </Container>
  );
};

export default Section4;
