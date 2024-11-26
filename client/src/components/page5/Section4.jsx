import React from "react";
import { Tabs } from "antd";
import Container from "../../components/global/Container";

const { TabPane } = Tabs;

const Section4 = () => {
  return (
    <Container>
      <div className="mt-10 max-[600px]:mt-2 p-4">
        <div className="py-10 text-center font-[700] text-[#3333]">
          <h2 className="text-[#3333] text-3xl max-[600px]:text-[1.5rem] sm:text-4xl lg:text-[52px]">
            Key <span className="text-[#EDA119] max-[600px]:text-[1.5rem]">Features</span>
          </h2>
        </div>
        <Tabs
          defaultActiveKey="1"
          centered
          className="custom-tabs"
          tabBarGutter={50}
        >
          <TabPane
            tab={
              <span className="tab-title text-[24px] max-[600px]:text-base">
                Scalability & Flexibility
              </span>
            }
            key="1"
          >
            <div className="tab-content  text-white">
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="lg:w-[65%]  bg-[#b0446e] p-5  rounded-[20px] mb-4 lg:mb-0">
                  <h2 className="text-[20px] max-[600px]:text-[1.1rem] sm:text-[24px] font-[600]">
                    Handling Seasonal Peaks and Promotions
                  </h2>
                  <p className="text-[16px] max-[600px]:text-[0.8rem] sm:text-[20px]">
                    During peak seasons and promotional events, the volume of
                    orders can increase significantly. Depoter’s multi-channel
                    fulfillment services are equipped to handle such
                    fluctuations without compromising service quality. The
                    fulfillment center can adjust to increased demand, ensuring
                    that your customers continue to receive their orders on
                    time, regardless of the surge in order volume.
                  </p>
                </div>
                <div className="lg:w-[30%] bg-[#8c6ad0] p-5 rounded-[20px]">
                  <h2 className="text-[20px] max-[600px]:text-[1.1rem] sm:text-[24px] font-[600]">
                    Customizable Solutions
                  </h2>
                  <p className="text-[16px] sm:text-[20px] max-[600px]:text-[0.8rem]">
                    Whether it involves branded packaging, special handling
                    requirements, or unique shipping preferences, Depoter’s
                    fulfillment center offers customizable services to cater to
                    different business models and customer expectations.
                  </p>
                </div>
              </div>
              <div className="w-full mt-5 bg-[#375dc0] p-5 rounded-[20px]">
                <h2 className="text-[20px] max-[600px]:text-[1.1rem] sm:text-[24px] font-[600]">
                  Streamlined Onboarding for New Channels
                </h2>
                <p className="text-[16px] max-[600px]:text-[0.8rem] sm:text-[20px]">
                  As your business seeks to expand into new sales channels,
                  Depoter simplifies the onboarding process to ensure a seamless
                  transition. Our flexible fulfillment solutions allow you to
                  integrate additional platforms quickly and efficiently,
                  minimizing disruption to your existing operations. This
                  adaptability empowers you to capitalize on emerging market
                  opportunities, enhancing your overall multichannel strategy
                  and ensuring you stay competitive in a rapidly evolving
                  e-commerce landscape.
                </p>
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              <span className="tab-title text-[24px] max-[600px]:text-base">Advanced Technology</span>
            }
            key="2"
          >
            <div className="tab-content  text-white">
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="lg:w-[65%] bg-[#b0446e] p-5 rounded-[20px] mb-4 lg:mb-0">
                  <h2 className="text-[20px] max-[600px]:text-[1.1rem] sm:text-[24px] font-[600]">
                    Handling Seasonal Peaks and Promotions
                  </h2>
                  <p className="text-[16px] max-[600px]:text-[0.8rem] sm:text-[20px]">
                    During peak seasons and promotional events, the volume of
                    orders can increase significantly. Depoter’s multi-channel
                    fulfillment services are equipped to handle such
                    fluctuations without compromising service quality. The
                    fulfillment center can adjust to increased demand, ensuring
                    that your customers continue to receive their orders on
                    time, regardless of the surge in order volume.
                  </p>
                </div>
                <div className="lg:w-[30%] bg-[#8c6ad0] p-5 rounded-[20px]">
                  <h2 className="text-[20px] max-[600px]:text-[1.1rem] sm:text-[24px] font-[600]">
                    Customizable Solutions
                  </h2>
                  <p className="text-[16px] sm:text-[20px] max-[600px]:text-[0.8rem]">
                    Whether it involves branded packaging, special handling
                    requirements, or unique shipping preferences, Depoter’s
                    fulfillment center offers customizable services to cater to
                    different business models and customer expectations.
                  </p>
                </div>
              </div>
              <div className="w-full mt-5 bg-[#375dc0] p-5 rounded-[20px]">
                <h2 className="text-[20px] max-[600px]:text-[1.1rem] sm:text-[24px] font-[600]">
                  Streamlined Onboarding for New Channels
                </h2>
                <p className="text-[16px] max-[600px]:text-[0.8rem] sm:text-[20px]">
                  As your business seeks to expand into new sales channels,
                  Depoter simplifies the onboarding process to ensure a seamless
                  transition. Our flexible fulfillment solutions allow you to
                  integrate additional platforms quickly and efficiently,
                  minimizing disruption to your existing operations. This
                  adaptability empowers you to capitalize on emerging market
                  opportunities, enhancing your overall multichannel strategy
                  and ensuring you stay competitive in a rapidly evolving
                  e-commerce landscape.
                </p>
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              <span className="tab-title text-[24px] max-[600px]:text-base">Customer feature</span>
            }
            key="3"
          >
            <div className="tab-content  text-white">
              <div className="flex flex-col lg:flex-row justify-between ">
                <div className="lg:w-[65%] bg-[#b0446e] p-5 rounded-[20px] mb-4 lg:mb-0">
                  <h2 className="text-[20px] max-[600px]:text-[1.1rem] sm:text-[24px] font-[600]">
                    Handling Seasonal Peaks and Promotions
                  </h2>
                  <p className="text-[16px] max-[600px]:text-[0.8rem] sm:text-[20px]">
                    During peak seasons and promotional events, the volume of
                    orders can increase significantly. Depoter’s multi-channel
                    fulfillment services are equipped to handle such
                    fluctuations without compromising service quality. The
                    fulfillment center can adjust to increased demand, ensuring
                    that your customers continue to receive their orders on
                    time, regardless of the surge in order volume.
                  </p>
                </div>
                <div className="lg:w-[30%] bg-[#8c6ad0] p-5 rounded-[20px]">
                  <h2 className="text-[20px] max-[600px]:text-[1.1rem] sm:text-[24px] font-[600]">
                    Customizable Solutions
                  </h2>
                  <p className="text-[16px] sm:text-[20px] max-[600px]:text-[0.8rem]">
                    Whether it involves branded packaging, special handling
                    requirements, or unique shipping preferences, Depoter’s
                    fulfillment center offers customizable services to cater to
                    different business models and customer expectations.
                  </p>
                </div>
              </div>
              <div className="w-full mt-5 bg-[#375dc0] p-5 rounded-[20px]">
                <h2 className="text-[20px] max-[600px]:text-[1.1rem] sm:text-[24px] font-[600]">
                  Streamlined Onboarding for New Channels
                </h2>
                <p className="text-[16px] max-[600px]:text-[0.8rem] sm:text-[20px]">
                  As your business seeks to expand into new sales channels,
                  Depoter simplifies the onboarding process to ensure a seamless
                  transition. Our flexible fulfillment solutions allow you to
                  integrate additional platforms quickly and efficiently,
                  minimizing disruption to your existing operations. This
                  adaptability empowers you to capitalize on emerging market
                  opportunities, enhancing your overall multichannel strategy
                  and ensuring you stay competitive in a rapidly evolving
                  e-commerce landscape.
                </p>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </Container>
  );
};

export default Section4;
