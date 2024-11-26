import { useState } from "react";
import BlogTable from "../pages/Blogs/BlogTable";
import BlogForm from "../pages/Blogs/BlogForm";
import BlogDetailsModal from "../pages/Blogs/BlogDetailModal"; // Import the modal

const Blogs = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeBlog, setActiveBlog] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const refreshBlogs = () => {
    setShowModal(false);
  };

  // Close the View Blog modal
  const closeDetailsModal = () => setShowDetailsModal(false);

  return (
    <div>
      <h1 className="mb-6 text-3xl font-semibold">Blogs</h1>
      <button
        onClick={() => {
          setActiveBlog(null);
          setShowModal(true);
        }}
        className="px-4 py-2 mb-6 text-white bg-blue-500 rounded-md"
      >
        Add Blog
      </button>

      <BlogTable
        setActiveBlog={setActiveBlog}
        setShowModal={setShowModal}
        setShowDetailsModal={setShowDetailsModal} // Pass the setter for details modal
      />

      {/* BlogForm Modal for Adding/Editing Blog */}
      {showModal && (
        <BlogForm
          activeBlog={activeBlog}
          setShowModal={setShowModal}
          refreshBlogs={refreshBlogs}
        />
      )}

      {showDetailsModal && (
        <BlogDetailsModal
          blog={activeBlog}
          show={showDetailsModal}
          closeModal={closeDetailsModal}
        />
      )}
    </div>
  );
};

export default Blogs;
