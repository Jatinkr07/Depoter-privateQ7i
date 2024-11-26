import React from "react";
import { Accordion, AccordionBody, Container } from "react-bootstrap";

const Section1_5th = () => {
  return (
    <>
      <Container className="flex w-full justify-center max-[500px]:flex-wrap">
        <div className="flex flex-col max-[500px]:flex-col-reverse pt-[1.8rem] max-[500px]:pb-5 mr-10 max-[500px]:m-auto">
          <div>
            <h2 className="max-[500px]:mt-4">B2B Fulfillment</h2>
            <p className="text-justify w-96 max-[500px]:w-full">
              Depoter leads in B2B fulfilment in Dubai with reliable,
              tech-driven, cost-effective solutions.It empowers businesses to
              efficiently manage orders and exceed customer expectations.
            </p>
          </div>
          <img
            src="happy-workers-doing-high-five-storehouse-after-finishing-packing-helmet-orders-cardboard-box-celebrating-triumph-smiling-diverse-team-discussing-transportation-logistics-warehouse 1.png"
            className="w-[25rem]"
            alt=""
            srcset=""
          />
        </div>
        <div className="flex flex-col-reverse max-[500px]:flex-col-reverse  ml-2 max-[500px]:ml-0 pb-20 max-[500px]:pb-0 justify-center">
          <div className=" max-[500px]:ml-0 max-[500px]:m-auto mt-5 max-[500px]:w-full max-[500px]:mt-2">
            <Accordion className="w-full mb-2">
              <Accordion.Item>
                <Accordion.Header>
                  What type of ABC fulfillment we do ?
                </Accordion.Header>
                <Accordion.Body>lorem Inpsum</Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="w-full mb-2">
              <Accordion.Item>
                <Accordion.Header>
                  What type of ABC fulfillment we do ?
                </Accordion.Header>
                <Accordion.Body>
                  Depoter envisions a seamless future <br /> for B2B
                  fulfillment, where
                  <br /> efficiency meets excellence.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="w-full mb-2">
              <Accordion.Item>
                <Accordion.Header>
                  What type of ABC fulfillment we do ?
                </Accordion.Header>
                <Accordion.Body>
                  Depoter envisions a seamless future <br /> for B2B
                  fulfillment, where
                  <br /> efficiency meets excellence.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="w-full mb-2">
              <Accordion.Item>
                <Accordion.Header>
                  What type of ABC fulfillment we do ?
                </Accordion.Header>
                <Accordion.Body>
                  Depoter envisions a seamless future <br /> for B2B
                  fulfillment, where
                  <br /> efficiency meets excellence.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <img
            src="woman-safety-equipment-working 2.png"
            className="w-[25rem]"
            alt=""
            srcset=""
          />
        </div>
      </Container>
    </>
  );
};

export default Section1_5th;
