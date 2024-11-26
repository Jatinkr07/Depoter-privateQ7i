/* eslint-disable react/prop-types */

import API_URL from "../../../../utils/api";

const BlogDetailsModal = ({ blog, show, closeModal }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full p-6 overflow-auto bg-white rounded-lg shadow-lg sm:w-4/5 md:w-1/2 lg:w-1/3">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">{blog.title}</h2>

          <p className="text-sm italic text-gray-600">{blog.description}</p>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">By: {blog.author}</span>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">Content</h3>
            <p className="mt-2 text-gray-700">{blog.content}</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Image</h3>
            <img
              src={`${API_URL}${blog.images}`}
              alt={blog.title}
              className="object-cover w-full h-64 mt-2 rounded-lg"
            />
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={closeModal}
              className="px-6 py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsModal;
