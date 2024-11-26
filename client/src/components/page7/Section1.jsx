import React from "react";
import dashBoard from "../../assets/page7/dashboard.png";

const Section1 = () => {
  return (
    <div className="w-full">
      <img 
        src={dashBoard} 
        className="w-full h-auto object-cover" 
        alt="Dashboard Illustration" 
      />
    </div>
  );
};

export default Section1;