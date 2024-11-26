import { Container } from "react-bootstrap";
import carImg from "../../assets/home/section2-tool1.png";
import blog1 from "../../assets/home/blog1.png";
import blog2 from "../../assets/home/blog2.png";
import blog3 from "../../assets/home/blog3.png";
import BlogCard from "./BlogCard";
import SmallBlogCards from "./SmallBlogCards";

const BlogSection = () => {
  return (
    <div data-aos="fade-up" className="w-full py-[100px] max-[600px]:py-[25px]">
      <Container>
        <div className="w-full">
          {/* top */}
          <div className="flex max-[600px]:flex-col items-center justify-between w-full">
            <h1 className="font-[700] max-[600px]:text-[1.8rem]">
              Our Latest Blog
            </h1>
            <div className="relative">
              <img
                src={carImg}
                className="w-[40px] absolute left-[-40px] bottom-[-15px]"
                alt=""
              />
              <button className="bg-yellow px-3 rounded py-2 font-[500]">
                See All Blog Posts
              </button>
            </div>
          </div>

          {/* card section */}
          <div className="flex justify-between w-full border-red-600 border-container">
            {/* left */}
            <div className="w-[68%] box1 home-blog-container mt-[50px]">
              {mainBlogContent.map((data) => {
                return <BlogCard {...data} />;
              })}
            </div>
            {/* right */}
            <div className="w-[30%] box2 mt-[50px]">
              {mainBlogContent.map((data) => {
                return <SmallBlogCards {...data} />;
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
      "End-to-End storage and delivery  management in a single solution. Meet the right platform to help realize.",
  },
  {
    id: 1,
    image: blog2,
    date: "08-11-2024 ",
    category: "Category",
    title: "Reduce The Cost of Storage in Warehouse",
    content:
      "End-to-End storage and delivery  management in a single solution. Meet the right platform to help realize.",
  },
  {
    id: 1,
    image: blog3,
    date: "08-11-2024 ",
    category: "Category",
    title: "Reduce The Cost of Storage in Warehouse",
    content:
      "End-to-End storage and delivery  management in a single solution. Meet the right platform to help realize.",
  },
];
