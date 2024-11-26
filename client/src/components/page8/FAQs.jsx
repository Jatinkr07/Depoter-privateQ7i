/* eslint-disable react/no-unescaped-entities */
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Container from "../global/Container";

const { Panel } = Collapse;

const FAQs = () => {
  const customExpandIcon = ({ isActive }) =>
    isActive ? <MinusOutlined /> : <PlusOutlined />;

  return (
    <Container>
      <div className="px-4 flex flex-col md:flex-row items-start py-[100px] max-[600px]:py-[2rem]">
        {/* Header Section */}
        <div className="mb-8 md:w-1/2">
          <button className="px-4 py-2 rounded-full border border-[#DDCE1B1C] bg-[#DDCE1B1C] text-black max-[600px]:text-lg font-semibold md:mb-4">
            FAQs
          </button>
          <div>
            <h1 className="text-3xl md:text-[52px] font-semibold max-[600px]:text-[1.5rem] max-[600px]:my-5">
              Answer to Your Questions
            </h1>
            <p className="text-gray-500 text-base mt-2 max-[600px]:text-sm">
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
            className="bg-transparent faq-accordion"
            bordered={false}
          >
            <Panel
              header="What e-commerce platforms does Depoter support?"
              key="1"
              className="rounded-md border mb-4 text-[18px] max-[600px]:text-base"
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
              header="How does Depoter manage international shipping?"
              key="2"
              className="rounded-md border mb-4 text-[18px] max-[600px]:text-base"
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
              header="Can Depoter handle both B2B and B2C fulfillment?"
              key="3"
              className="rounded-md border mb-4 text-[18px] max-[600px]:text-base"
            >
              <p className="text-gray-600 max-[600px]:text-sm">
                Yes, Depoter specializes in both b2b e-commerce fulfillment and
                b2c e-commerce fulfillment services. Whether you’re shipping
                bulk orders to businesses or individual orders to consumers, we
                have the infrastructure to handle your needs.
              </p>
            </Panel>
            <Panel
              header="How does Depoter handle inventory management?"
              key="4"
              className="rounded-md border mb-4 text-[18px] max-[600px]:text-base"
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
              header="Does Depoter offer FBA and FBN services?"
              key="5"
              className="rounded-md border mb-4 text-[18px] max-[600px]:text-base"
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

export default FAQs;
