/* eslint-disable react/jsx-key */
import { Container } from "react-bootstrap";
import carImg from "../../assets/home/section2-tool1.png";
import blog1 from "../../assets/home/blog1.png";
import blog2 from "../../assets/home/blog2.png";
import blog3 from "../../assets/home/blog3.png";
import BlogCard from "./BlogCard";
import SmallBlogCards from "./SmallBlogCards";

const BlogSection = () => {
  return (
    <div data-aos="fade-up" className="w-full py-[100px]">
      <Container>
        <div className="w-full">
          {/* top section */}
          <div className="flex items-center justify-between w-full -mt-36 md:mt-0">
            <h1 className="text-lg font-semibold text-center md:text-4xl md:w-auto md:text-left">
              Our Latest Blog
            </h1>
            <div className="relative md:mt-0">
              <img
                src={carImg}
                className="md:w-[40px] absolute w-[30px] left-[-30px] md:left-[-40px] bottom-[-10px] md:bottom-[-15px]"
                alt="Car Icon"
              />
              <button className="px-3 py-2 text-sm font-normal rounded bg-yellow">
                See All Blog Posts
              </button>
            </div>
          </div>

          {/* card section */}
          <div className="flex flex-wrap justify-between gap-6 w-full mt-[50px]">
            {/* Left blog section */}
            <div className="md:w-[68%] w-full box1 home-blog-container">
              {mainBlogContent.map((data) => {
                return <BlogCard {...data} key={data.id} />;
              })}
            </div>

            {/* Right small blog section */}
            <div className="md:w-[30%] w-full box2">
              {mainBlogContent.map((data) => {
                return <SmallBlogCards {...data} key={data.id} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogSection;

const mainBlogContent = [
  {
    id: 1,
    image: blog1,
    date: "08-11-2024 ",
    category: "Category",
    title: "Reduce The Cost of Storage in Warehouse",
    content:
      "End-to-End storage and delivery management in a single solution. Meet the right platform to help realize.",
  },
  {
    id: 2,
    image: blog2,
    date: "08-11-2024 ",
    category: "Category",
    title: "Reduce The Cost of Storage in Warehouse",
    content:
      "End-to-End storage and delivery management in a single solution. Meet the right platform to help realize.",
  },
  {
    id: 3,
    image: blog3,
    date: "08-11-2024 ",
    category: "Category",
    title: "Reduce The Cost of Storage in Warehouse",
    content:
      "End-to-End storage and delivery management in a single solution. Meet the right platform to help realize.",
  },
];
