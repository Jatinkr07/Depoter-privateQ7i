import React from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Container from "../global/Container";

const { Panel } = Collapse;

const Section4 = () => {
  const customExpandIcon = ({ isActive }) =>
    isActive ? <MinusOutlined /> : <PlusOutlined />;

  return (
    <Container>
      <div className="px-4 flex flex-col md:flex-row items-start py-[100px] max-[600px]:py-[2rem]">
        {/* Header Section */}
        <div className="md:w-1/2 mb-8">
          <button className="px-4 py-2 rounded-full border border-[#DDCE1B1C] bg-[#DDCE1B1C] text-black max-[600px]:text-lg font-semibold">
            Why Us
          </button>
          <div>
            <h1 className="text-3xl md:text-[52px] font-bold max-[600px]:text-[1.5rem] max-[600px]:my-5">Answer to Your Questions</h1>
            <p className="text-gray-500 text-lg mt-2 max-[600px]:text-sm">
              Explore answers to common questions about Depoter and its
              features. If you have any additional inquiries, feel free to reach
              out to our support team for assistance.
            </p>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="md:w-1/2">
          <Collapse
            accordion
            expandIcon={customExpandIcon}
            className="faq-accordion bg-transparent"
            bordered={false}
          >
            <Panel
              header="What is Climate-controlled storage?"
              key="1"
              className="rounded-md border mb-4 text-[22px] max-[600px]:text-base"
            >
              <p className="text-gray-600 max-[600px]:text-sm ">
                For sellers on Amazon, choosing the right fulfillment partner is
                key to ensuring a smooth and scalable operation. Depoter offers
                specialized FBA (Fulfilled by Amazon) fulfillment services,
                providing the support businesses need to navigate the
                complexities of Amazon's fulfillment system and grow their
                online presence.
              </p>
            </Panel>
            <Panel
              header="What is Bonded storage?"
              key="2"
              className="rounded-md border mb-4 text-[22px] max-[600px]:text-base"
            >
              <p className="text-gray-600 max-[600px]:text-sm">
                For sellers on Amazon, choosing the right fulfillment partner is
                key to ensuring a smooth and scalable operation. Depoter offers
                specialized FBA (Fulfilled by Amazon) fulfillment services,
                providing the support businesses need to navigate the
                complexities of Amazon's fulfillment system and grow their
                online presence.
              </p>
            </Panel>
            <Panel
              header="Are there any restrictions on what can be stored in bonded storage?"
              key="3"
              className="rounded-md border mb-4 text-[22px] max-[600px]:text-base"
            >
              <p className="text-gray-600 max-[600px]:text-sm">
                For sellers on Amazon, choosing the right fulfillment partner is
                key to ensuring a smooth and scalable operation. Depoter offers
                specialized FBA (Fulfilled by Amazon) fulfillment services,
                providing the support businesses need to navigate the
                complexities of Amazon's fulfillment system and grow their
                online presence.
              </p>
            </Panel>
            <Panel
              header="How secure is your climate-controlled storage facility?"
              key="4"
              className="rounded-md border mb-4 text-[22px] max-[600px]:text-base"
            >
              <p className="text-gray-600 max-[600px]:text-sm">
                For sellers on Amazon, choosing the right fulfillment partner is
                key to ensuring a smooth and scalable operation. Depoter offers
                specialized FBA (Fulfilled by Amazon) fulfillment services,
                providing the support businesses need to navigate the
                complexities of Amazon's fulfillment system and grow their
                online presence.
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </Container>
  );
};

export default Section4;