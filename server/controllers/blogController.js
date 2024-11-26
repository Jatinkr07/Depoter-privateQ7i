const Blog = require("../models/Blogs");
const fs = require("fs").promises;
const path = require("path");

// Create Blog
const createBlog = async (req, res) => {
  try {
    const { title, author, description, content, isFeatured } = req.body;

    // Handle images: req.files is an array of uploaded files, storing the path to each
    const images =
      req.files?.map(
        (file) =>
          `https://depoter-privateq7i-4.onrender.com/uploads/${file.filename}`
      ) || [];

    const newBlog = await Blog.create({
      title,
      author,
      description,
      content,
      images,
      isFeatured: isFeatured || false,
    });

    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res
      .status(500)
      .json({ message: "Error creating blog", error: error.message });
  }
};

const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get All Blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().lean();

    console.log(blogs);

    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res
      .status(500)
      .json({ message: "Error fetching blogs", error: error.message });
  }
};

// Update Blog
const updateBlog = async (req, res) => {
  try {
    const {
      title,
      author,
      description,
      content,
      isFeatured,
      existingImages = [],
    } = req.body;

    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    // Parse the existing images from the request body
    let parsedExistingImages = [];
    try {
      parsedExistingImages = existingImages ? JSON.parse(existingImages) : [];
    } catch (error) {
      console.error("Error parsing existing images:", error);
    }

    // Find the images that need to be removed
    const removedImages = blog.images.filter(
      (img) => !parsedExistingImages.includes(img)
    );

    // Delete removed images from the filesystem
    await Promise.all(
      removedImages.map(async (imagePath) => {
        try {
          const imageFullPath = path.join(__dirname, "..", imagePath);
          await fs.unlink(imageFullPath);
        } catch (err) {
          console.error("Error deleting image:", imagePath, err.message);
        }
      })
    );

    // Handle newly uploaded images
    const newImages = req.files
      ? req.files.map((file) => `/uploads/${file.filename}`)
      : [];

    // Merge existing images with the newly uploaded ones
    const updatedImages = [...parsedExistingImages, ...newImages];

    // Prepare the data to update the blog
    blog.title = title || blog.title;
    blog.author = author || blog.author;
    blog.description = description || blog.description;
    blog.content = content || blog.content;
    blog.isFeatured = isFeatured !== undefined ? isFeatured : blog.isFeatured;
    blog.images = updatedImages;

    // Save the updated blog
    await blog.save();

    res.status(200).json(blog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res
      .status(500)
      .json({ message: "Error updating blog", error: error.message });
  }
};

// Delete Blog
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    // Delete associated images from the filesystem
    await Promise.all(
      blog.images.map(async (imagePath) => {
        try {
          const imageFullPath = path.join(__dirname, "..", imagePath);
          await fs.unlink(imageFullPath);
        } catch (err) {
          console.error("Error deleting image:", imagePath, err.message);
        }
      })
    );

    // Delete the blog document
    await blog.deleteOne();
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res
      .status(500)
      .json({ message: "Error deleting blog", error: error.message });
  }
};

// Toggle Featured Status
const toggleFeatured = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    // Toggle the featured status
    blog.isFeatured = !blog.isFeatured;
    await blog.save();

    res.status(200).json({ message: "Blog featured status updated", blog });
  } catch (error) {
    console.error("Error toggling featured status:", error);
    res.status(500).json({
      message: "Error toggling featured status",
      error: error.message,
    });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
  toggleFeatured,
  getSingleBlog,
};
