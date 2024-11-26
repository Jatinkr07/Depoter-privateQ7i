/* eslint-disable react/prop-types */

const SmallBlogCards = ({ image, title, date, category }) => {
  return (
    <div className="flex items-center w-full gap-2 pb-3">
      <img src={image} className="w-[130px] rounded-lg" alt="" />
      <div>
        <p className="text-[#6D6C6C] text-[12px] mb-0 mt-2">
          <span>{date}</span>
          <span>{category}</span>
        </p>
        <p className="mt-1 text-[14px]">{title}</p>
      </div>
    </div>
  );
};

export default SmallBlogCards;
