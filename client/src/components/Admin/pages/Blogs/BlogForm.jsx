/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import API_URL from "../../../../utils/api";

const BlogForm = ({ activeBlog, setShowModal, refreshBlogs }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [imagesToKeep, setImagesToKeep] = useState([]);
  const [newImageFiles, setNewImageFiles] = useState([]);
  const [isFeatured, setIsFeatured] = useState(false);

  const [currentHost, setcurrentHost] = useState(null);

  useEffect(() => {
    setcurrentHost(window.location.hostname);
  }, [currentHost]);
  console.log(currentHost);
  useEffect(() => {
    if (activeBlog) {
      setTitle(activeBlog.title || "");
      setDescription(activeBlog.description || "");
      setAuthor(activeBlog.author || "");
      setContent(activeBlog.content || "");
      setImagesToKeep(activeBlog.images || []);
      setIsFeatured(activeBlog.isFeatured || false);
    }
  }, [activeBlog]);

  // Handle new image uploads
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => file.type.startsWith("image/"));

    if (validFiles.length < files.length) {
      alert("Some files are not valid images and will be ignored.");
    }

    setNewImageFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };

  // Remove existing image
  const handleRemoveExistingImage = (index) => {
    setImagesToKeep((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Remove newly added image
  const handleRemoveNewImage = (index) => {
    setNewImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !author || !content) {
      alert("Please fill all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("author", author);
    formData.append("content", content);
    formData.append("isFeatured", isFeatured);

    // Send existing images that the user wants to keep
    formData.append("existingImages", JSON.stringify(imagesToKeep));

    // Send new images
    newImageFiles.forEach((file) => formData.append("images", file));

    try {
      if (activeBlog) {
        // Update the blog
        await axios.put(`${API_URL}/api/blogs/${activeBlog._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        // Create new blog
        await axios.post(`${API_URL}/api/blogs/create`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setShowModal(false);
      refreshBlogs();
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="p-8 bg-white rounded-lg shadow-lg w-96">
        <h2 className="mb-4 text-xl font-semibold">
          {activeBlog ? "Edit Blog" : "Add Blog"}
        </h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Images</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {/* Existing Images */}
              {console.log(imagesToKeep)}

              {imagesToKeep &&
                imagesToKeep?.map((image, index) => (
                  <div key={index} className="relative mb-2 mr-2">
                    <img
                      src={image}
                      alt={`img-${index}`}
                      className="object-cover w-20 h-20 rounded"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveExistingImage(index)}
                      className="absolute top-0 right-0 text-red-500 bg-white rounded-full"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              {/* New Images */}
              {newImageFiles.map((file, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`new-${index}`}
                    className="object-cover w-16 h-16 rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveNewImage(index)}
                    className="absolute top-0 right-0 text-red-500 bg-white rounded-full"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Content</label>
            <CKEditor
              editor={ClassicEditor}
              data={content}
              onChange={(event, editor) => setContent(editor.getData())}
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={isFeatured}
              onChange={() => setIsFeatured(!isFeatured)}
              className="mr-2"
            />
            <label className="text-gray-700">Featured</label>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="px-4 py-2 text-white bg-gray-500 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              {activeBlog ? "Update Blog" : "Add Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
