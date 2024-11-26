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
      <div className="px-4 flex flex-col md:flex-row items-start py-[20px] ">
        {/* Header Section */}
        <div className="w-full md:w-1/2 mb-8">
          <button className="px-4 py-2 rounded-full border border-[#DDCE1B1C] bg-[#DDCE1B1C] text-black font-semibold">
            Why Us
          </button>
          <div>
            <h1 className="text-[36px]  max-[600px]:text-[1.5rem]  max-[600px]:my-[2rem] md:text-[52px] font-bold">
              Answer to Your Questions
            </h1>
            <p className="text-gray-500  max-[600px]:text-[0.8rem] md:text-[16px] mt-2">
              Explore answers to common questions about Depoter. For further
              inquiries, reach out to our support team.
            </p>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="w-full md:w-1/2">
          <Collapse
            accordion
            expandIcon={customExpandIcon}
            className="faq-accordion bg-transparent"
            bordered={false}
          >
            <Panel
              header="What is Climate-controlled storage?"
              key="1"
              className="rounded-md  border mb-4 text-[20px] max-[600px]:text-[1rem]"
            >
              <p className="text-gray-600  max-[600px]:text-[0.8rem] text-[16px] leading-[1.5]">
                Climate-controlled storage maintains optimal temperature and
                humidity, ensuring the protection of sensitive items.
              </p>
            </Panel>
            <Panel
              header="What is Bonded storage?"
              key="2"
              className="rounded-md border mb-4 text-[20px] max-[600px]:text-[1rem]"
            >
              <p className="text-gray-600  max-[600px]:text-[0.8rem] text-[16px] leading-[1.5]">
                Bonded storage allows for duty-deferment on imported goods,
                improving cash flow for businesses.
              </p>
            </Panel>
            <Panel
              header="Are there any restrictions on what can be stored in bonded storage?"
              key="3"
              className="rounded-md border mb-4 text-[20px] max-[600px]:text-[1rem]"
            >
              <p className="text-gray-600  max-[600px]:text-[0.8rem] text-[16px] leading-[1.5]">
                Yes, certain items are restricted. Please consult our guidelines
                for specifics.
              </p>
            </Panel>
            <Panel
              header="How secure is your climate-controlled storage facility?"
              key="4"
              className="rounded-md border mb-4  max-[600px]:text-[1rem] text-[20px]"
            >
              <p className="text-gray-600  max-[600px]:text-[0.8rem] text-[16px] leading-[1.5]">
                Our facilities are equipped with advanced security systems and
                24/7 monitoring for maximum safety.
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </Container>
  );
};

export default Section4;
