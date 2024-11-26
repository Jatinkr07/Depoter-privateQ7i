/* eslint-disable react/prop-types */

const BlogCard = ({ image, date, category, title, content }) => {
  return (
    <div className="w-full ">
      <img src={image} className="w-full rounded-lg" alt="" />
      <p className="text-[#6D6C6C] mb-0 mt-2">
        <span>{date}</span>
        <span>{category}</span>
      </p>
      <h5 className="my-2">{title}</h5>
      <p className="text-[#6D6C6C] max-[600px]:text-sm">{content}</p>
    </div>
  );
};

export default BlogCard;
