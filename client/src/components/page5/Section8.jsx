import React from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Container from "../global/Container";

const { Panel } = Collapse;

const Section8 = () => {
  const customExpandIcon = ({ isActive }) =>
    isActive ? <MinusOutlined /> : <PlusOutlined />;

  return (
    <Container>
      <div className="px-4 flex flex-col md:flex-row items-start py-[1rem] md:py-[100px] ">
        {/* Header Section */}
        <div className="w-full md:w-[50%] mb-8">
          <button className="px-4 py-2 rounded-full border border-[#DDCE1B1C] bg-[#DDCE1B1C] text-black font-semibold">
            Why Us
          </button>
          <div>
            <h1 className="text-[36px] max-[600px]:text-[1.5rem] max-[600px]:my-5 sm:text-[40px] md:text-[52px] font-bold">
              Answer to Your Questions
            </h1>
            <p className="text-gray-500 text-[16px] max-[600px]:text-[0.8rem] sm:text-[18px] mt-2">
              Explore answers to common questions about Depoter and its
              features. If you have any additional inquiries, feel free to reach
              out to our support team for assistance.
            </p>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="w-full md:w-[50%]">
          <Collapse
            accordion
            expandIcon={customExpandIcon}
            className="faq-accordion bg-transparent"
            bordered={false}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <Panel
                header={`What is FBA? ${index + 1}`}
                key={index + 1}
                className="rounded-md border mb-4 text-[20px] sm:text-[22px]"
              >
                <p className="text-gray-600 max-[600px]:text-[0.8rem]">
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

export default Section8;
