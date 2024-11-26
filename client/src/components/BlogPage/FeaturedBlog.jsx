import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_URL from "../../utils/api";

export default function FeaturedBlog() {
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of blogs per page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blogs`);
        const featuredBlogs = response.data.filter((blog) => blog.isFeatured);
        setBlogData(featuredBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(blogData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = blogData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <section className="py-12 mx-4 -mb-64 text-center md:-mb-44">
      <h3 className="mb-6 text-3xl font-normal sm:text-5xl">Featured Blogs</h3>
      <div className="grid grid-cols-1 gap-6 sm:mx-12 md:grid-cols-2 lg:grid-cols-3">
        {currentBlogs.map((blog) => (
          <div
            key={blog._id}
            onClick={() => handleCardClick(blog._id)}
            className="p-4 bg-white shadow-md cursor-pointer rounded-3xl"
          >
            <div className="flex flex-col">
              {/* Blog Image */}
              <div className="w-full mb-4">
                <img
                  src={`${API_URL}${blog.images?.[0]}`}
                  alt={blog.title}
                  className="w-full rounded-3xl object-contain h-[220px] sm:h-[250px] lg:h-[220px] shadow-sm"
                />
              </div>

              {/* Blog Content */}
              <div className="px-4 text-left">
                <h4 className="mb-2 text-xl font-semibold sm:text-2xl">
                  {blog.title}
                </h4>
                <p className="mb-4 text-sm text-gray-500 sm:text-base">
                  {blog.description}
                </p>
                <div className="text-sm text-gray-700 sm:text-base">
                  <p className="font-semibold">By: {blog.author}</p>
                  <p>
                    Added on: {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`md:px-4 px-2.5 py-1.5 md:py-2 text-sm rounded-full sm:text-base ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500"
              : "bg-[#FFBE2E] text-white"
          }`}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-2.5 py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded-full ${
              currentPage === index + 1
                ? "bg-[#FFBE2E] text-white"
                : "text-blue-500"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`md:px-4 px-2.5 py-1.5 md:py-2 text-sm rounded-full sm:text-base ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500"
              : "bg-[#FFBE2E] text-white"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
}
