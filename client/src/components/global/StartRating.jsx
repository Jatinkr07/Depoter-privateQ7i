/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";

const StartRating = ({ num }) => {
  let arr = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= num) arr.push(<FaStar className="text-yellow" />);
    else arr.push(<FaStar className="text-[white]" />);
  }
  return <div className="flex text-[15px] mt-3">{arr}</div>;
};

export default StartRating;
