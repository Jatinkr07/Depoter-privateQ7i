import Banner from "../components/BlogPage/Banner";
import BlogFooter from "../components/BlogPage/BlogFooter";
import FeaturedBlog from "../components/BlogPage/FeaturedBlog";
// import Navbar from "../components/BlogPage/Navbar";
// import PopularBlogs from "../components/BlogPage/PopularBlog";
import RightPlace from "../components/BlogPage/RightPlace";
import WhyStarted from "../components/BlogPage/WhyStarted";

const BlogHome = () => {
  return (
    <div className="w-full">
      {/* <Navbar /> */}
      <Banner />
      <FeaturedBlog />
      {/* <PopularBlogs /> */}
      <WhyStarted />
      <RightPlace />
      <BlogFooter />
    </div>
  );
};

export default BlogHome;
