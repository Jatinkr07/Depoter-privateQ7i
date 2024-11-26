const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
  toggleFeatured,
  getSingleBlog,
} = require("../controllers/blogController");
const upload = require("../middleware/upload");

router.post("/create", upload.array("images"), createBlog);
router.get("/", getAllBlogs);
router.put("/:id", upload.array("images"), updateBlog);
router.delete("/:id", deleteBlog);
router.put("/:id/toggleFeatured", toggleFeatured);
router.get("/:id", getSingleBlog);

module.exports = router;
