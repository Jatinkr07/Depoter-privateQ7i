/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa"; // Import React Icons
import API_URL from "../../../../utils/api";

const BlogTable = ({ setActiveBlog, setShowModal, setShowDetailsModal }) => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [blogsPerPage] = useState(8); // Items per page

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blogs`);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    const intervalId = setInterval(fetchBlogs, 5000);

    fetchBlogs();

    return () => clearInterval(intervalId);
  }, []);

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle Next and Previous Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (blog) => {
    setActiveBlog(blog);
    setShowModal(true);
  };

  const handleDelete = async (blogId) => {
    try {
      await axios.delete(`${API_URL}/api/blogs/${blogId}`);
      setBlogs(blogs.filter((blog) => blog._id !== blogId));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleToggleFeatured = async (id, currentStatus) => {
    try {
      await axios.put(`${API_URL}/api/blogs/${id}/toggleFeatured`, {
        featured: !currentStatus,
      });

      setBlogs(
        blogs.map((blog) =>
          blog._id === id ? { ...blog, isFeatured: !currentStatus } : blog
        )
      );
    } catch (error) {
      console.error("Error toggling featured status:", error);
    }
  };

  // Handle View Details
  const handleViewDetails = (blog) => {
    setActiveBlog(blog);
    setShowDetailsModal(true);
  };

  return (
    <div className="p-6 overflow-x-auto bg-white rounded-lg shadow-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-sm font-medium text-left text-gray-500">
                #
              </th>
              <th className="px-4 py-3 text-sm font-medium text-left text-gray-500">
                Title
              </th>
              <th className="px-4 py-3 text-sm font-medium text-left text-gray-500">
                Image
              </th>
              <th className="px-4 py-3 text-sm font-medium text-left text-gray-500">
                Featured
              </th>
              <th className="px-4 py-3 text-sm font-medium text-left text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentBlogs.map((blog, index) => (
              <tr key={blog._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 text-sm">{index + 1}</td>
                <td className="px-4 py-3 text-sm">{blog.title}</td>
                <td className="px-4 py-3 text-sm">
                  <img
                    src={`${API_URL}${blog.images}`}
                    alt={blog.title}
                    className="object-cover w-16 h-16 rounded-md"
                  />
                </td>
                <td className="px-4 py-3 text-sm">
                  <button
                    onClick={() =>
                      handleToggleFeatured(blog._id, blog.isFeatured)
                    }
                    className={`px-4 py-2 text-white rounded-md transition-colors ${
                      blog.isFeatured ? "bg-green-500" : "bg-gray-500"
                    } transform hover:scale-105`}
                  >
                    {blog.isFeatured ? "Featured" : "Not Featured"}
                  </button>
                </td>
                <td className="px-4 py-3 text-sm">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="px-4 py-2 mr-2 text-white transition-transform transform bg-yellow-500 rounded-md hover:scale-105"
                  >
                    <FaEdit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-4 py-2 text-white transition-transform transform bg-red-500 rounded-md hover:scale-105"
                  >
                    <FaTrashAlt className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleViewDetails(blog)}
                    className="px-4 py-2 text-white transition-transform transform bg-blue-500 rounded-md hover:scale-105"
                  >
                    <FaEye className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 text-white bg-blue-500 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="flex items-center justify-center text-lg">
          Page {currentPage}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastBlog >= blogs.length}
          className="px-4 py-2 text-white bg-blue-500 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogTable;
