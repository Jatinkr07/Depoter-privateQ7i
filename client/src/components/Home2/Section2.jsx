import React from "react";
import { Container } from "react-bootstrap";

const Section2 = () => {
  const features = [
    {
      image: "/SecondPage/no-code 3.png",
      para: "No Code Automation",
    },
    {
      image: "/SecondPage/customer 1.png",
      para: "Send Unlimited Data",
    },
    {
      image: "/SecondPage/equalizer 1.png",
      para: "Custom Field Value",
    },
    {
      image: "/SecondPage/swap (1) 1.png",
      para: "In & Out Webhook",
    },
    {
      image: "/SecondPage/chain (1) 1.png",
      para: "Conditional Logic",
    },
  ];
  const companies = [
    {
      image: "/SecondPage/Rectangle 317.png",
      title: "Shopify",
      para: "Streamline Shopify Order Fulfillment",
    },
    {
      image: "/SecondPage/Mask group.png",
      title: "WooCommerce",
      para: "Streamline WooCommerce Order Fulfillment",
    },
    {
      image: "/SecondPage/Mask group-1.png",
      title: "Wix",
      para: "Streamline Wix Order Fulfillment",
    },
    {
      image: "/SecondPage/Mask group-2.png",
      title: "Magneto",
      para: "Streamline Magneto Order Fulfillment",
    },
    {
      image: "/SecondPage/Group 351.png",
      title: "BigCommerce",
      para: "Streamline BigCommerce Order Fulfillment",
    },
    {
      image: "/SecondPage/Mask group-3.png",
      title: "OpenCart",
      para: "Streamline OpenCart Order Fulfillment",
    },
  ];

  return (
    <>
      <Container className="max-[500px]:mt-10 mt-10 flex justify-center items-center">
        <div className="flex w-full h-full max-[500px]:w-fit max-[500px]:m-auto justify-evenly max-[500px]:flex-col">
          {features?.map((elem, index) => (
            <div
              key={index}
              className="max-[1000px]:my-5 relative p-4 max-[500px]:my-2 flex flex-col items-center justify-center"
            >
              <img
                src="/SecondPage/Vector 51.png"
                className="absolute inset-0 w-full h-fit object-cover z-0 "
                alt="Vector Background"
              />
              <div className="relative z-10 text-center m-auto mt-4">
                <img src={elem?.image} alt="" className="mb-3 w-12 m-auto" />
                <p className="text-sm font-semibold">{elem?.para}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Container className="mt-20">
        <div className="flex flex-col ">
          <h2 className="font-semibold">Ecommerce Platforms & Marketplaces</h2>
          <p className="mb-5 text-gray-400">
            Depoter partners directly with the following platforms and <br />
            marketplaces to streamline order fulfillment for your business
          </p>
          <div className="w-full">
            <div className="flex flex-wrap justify-between">
              {companies?.map((elem, index) => {
                if (index <= 2) {
                  return (
                    <div className="flex items-center mb-2 w-96">
                      <img src={elem.image} className="w-20" alt="" srcset="" />
                      <div className="ml-4">
                        <h4 className="text-xl font-semibold">{elem.title}</h4>
                        <p className="">{elem.para}</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex flex-wrap justify-between">
              {companies?.map((elem, index) => {
                if (index > 2) {
                  return (
                    <div className="flex items-center mb-2 w-96">
                      <img src={elem.image} className="w-20" alt="" srcset="" />
                      <div className="ml-4">
                        <h4 className="text-xl font-semibold">{elem.title}</h4>
                        <p className="text-sm">{elem.para}</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-20 mb-20">
        <div className="flex flex-col ">
          <h2 className="font-semibold">Freight & Shipping Solutions</h2>
          <p className="mb-5 text-gray-400">
            Last-mile fulfillment is just part of the equation. ShipBob partners
            with these carriers <br /> and shipping platforms to lower your
            shipping costs.
          </p>
          <div className="flex flex-wrap justify-between">
            {companies?.map((elem, index) => {
              if (index <= 2) {
                return (
                  <div className="flex items-center mb-2 w-96">
                    <img src={elem.image} className="w-20" alt="" srcset="" />
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold">{elem.title}</h4>
                      <p className="">{elem.para}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="flex flex-wrap justify-between">
            {companies?.map((elem, index) => {
              if (index > 2) {
                return (
                  <div className="flex items-center mb-2 w-96">
                    <img src={elem.image} className="w-20" alt="" srcset="" />
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold">{elem.title}</h4>
                      <p className="text-sm">{elem.para}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Section2;
